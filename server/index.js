import express from 'express';
import cors from 'cors';
import { getDb, saveDb } from './db.js';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// GET /api/services
app.get('/api/services', (req, res) => {
  const db = getDb();
  res.json({ success: true, data: db.services });
});

// GET /api/coaches
app.get('/api/coaches', (req, res) => {
  const db = getDb();
  res.json({ success: true, data: db.coaches });
});

// GET /api/schedule
app.get('/api/schedule', (req, res) => {
  const db = getDb();
  res.json({ success: true, data: db.slots });
});

// GET /api/client/profile
app.get('/api/client/profile', (req, res) => {
  const db = getDb();
  res.json({ success: true, data: db.clientProfile });
});

// POST /api/bookings - Create new booking with payment receipt
app.post('/api/bookings', (req, res) => {
  const { slotId, clientName, clientEmail, clientPhone, paymentMethod } = req.body;
  const db = getDb();

  const slotIndex = db.slots.findIndex(s => s.id === slotId);
  if (slotIndex === -1) {
    return res.status(404).json({ success: false, message: 'Créneau introuvable' });
  }

  const slot = db.slots[slotIndex];
  if (slot.spotsLeft <= 0) {
    return res.status(400).json({ success: false, message: 'Ce créneau est complet' });
  }

  // Decrement spot
  db.slots[slotIndex].spotsLeft -= 1;

  const newBooking = {
    id: `bkg-${Date.now()}`,
    slotId: slot.id,
    title: slot.title,
    coachName: slot.coachName,
    date: slot.date,
    time: slot.time,
    location: slot.location,
    clientName: clientName || 'Alex Dupont',
    clientEmail: clientEmail || 'alex.dupont@email.fr',
    clientPhone: clientPhone || '+221 77 123 45 67',
    status: 'Confirmée',
    paymentMethod: paymentMethod || 'Stripe Visa (**** 4242)',
    amountPaid: 10000,
    formattedAmount: '10 000 FCFA',
    createdAt: new Date().toISOString()
  };

  db.bookings.unshift(newBooking);

  if (db.clientProfile) {
    db.clientProfile.upcomingBookings.unshift({
      id: newBooking.id,
      title: newBooking.title,
      coachName: newBooking.coachName,
      date: newBooking.date,
      time: newBooking.time,
      location: newBooking.location,
      status: 'Confirmée'
    });

    db.clientProfile.invoices.unshift({
      id: `INV-2026-${Math.floor(1000 + Math.random() * 9000)}`,
      date: new Date().toLocaleDateString('fr-FR'),
      description: `Réservation — ${newBooking.title}`,
      amount: 10000,
      formattedAmount: '10 000 FCFA',
      status: 'Payée',
      paymentMethod: newBooking.paymentMethod
    });
  }

  if (db.adminStats) {
    db.adminStats.totalRevenueMonthly += 10000;
    db.adminStats.completedSessionsThisMonth += 1;
    db.adminStats.recentTransactions.unshift({
      id: `tx-${Date.now()}`,
      clientName: newBooking.clientName,
      plan: 'Réservation Séance',
      amount: 10000,
      formattedAmount: '10 000 FCFA',
      date: new Date().toISOString().replace('T', ' ').substring(0, 16),
      status: 'Succeeded'
    });
  }

  saveDb(db);

  res.status(201).json({
    success: true,
    message: 'Réservation confirmée avec succès !',
    booking: newBooking
  });
});

// POST /api/payments/subscribe - Subscribe to plan (Flex or VIP)
app.post('/api/payments/subscribe', (req, res) => {
  const { planId, cardDetails } = req.body;
  const db = getDb();

  const service = db.services.find(s => s.id === planId);
  if (!service) {
    return res.status(404).json({ success: false, message: 'Offre non trouvée' });
  }

  const amount = service.price;
  const planName = service.title;

  if (db.clientProfile) {
    db.clientProfile.membership = {
      planName: planName,
      status: 'Actif',
      renewsAt: '2026-09-19',
      price: amount,
      sessionsRemainingThisWeek: planId === 'abonne-vip' ? 2 : 1
    };

    db.clientProfile.invoices.unshift({
      id: `INV-2026-${Math.floor(1000 + Math.random() * 9000)}`,
      date: new Date().toLocaleDateString('fr-FR'),
      description: `Souscription ${planName}`,
      amount: amount,
      status: 'Payée',
      paymentMethod: `Stripe (Carte **** ${cardDetails?.number?.slice(-4) || '4242'})`
    });
  }

  if (db.adminStats) {
    db.adminStats.totalRevenueMonthly += amount;
    db.adminStats.recentTransactions.unshift({
      id: `tx-${Date.now()}`,
      clientName: 'Alex Dupont',
      plan: planName,
      amount: amount,
      date: new Date().toISOString().replace('T', ' ').substring(0, 16),
      status: 'Succeeded'
    });
  }

  saveDb(db);

  res.json({
    success: true,
    message: `Félicitations ! Votre souscription à ${planName} est désormais active.`,
    membership: db.clientProfile.membership
  });
});

// POST /api/admin/slots - Admin add slot
app.post('/api/admin/slots', (req, res) => {
  const { title, category, coachName, day, date, time, spotsTotal, location } = req.body;
  const db = getDb();

  const newSlot = {
    id: `slot-${Date.now()}`,
    category: category || 'coaching-prive',
    title: title || 'Nouveau Cours',
    coachId: 'coach-marc',
    coachName: coachName || 'Marc Diallo',
    day: day || 'Lundi',
    date: date || '2026-08-30',
    time: time || '10:00 - 11:00',
    spotsTotal: Number(spotsTotal) || 10,
    spotsLeft: Number(spotsTotal) || 10,
    location: location || 'Studio Principal',
    level: 'Tous niveaux'
  };

  db.slots.unshift(newSlot);
  saveDb(db);

  res.status(201).json({ success: true, slot: newSlot });
});

// GET /api/admin/stats
app.get('/api/admin/stats', (req, res) => {
  const db = getDb();
  res.json({ success: true, data: db.adminStats });
});

app.listen(PORT, () => {
  console.log(`Serveur Dialaw Fitness Center démarré sur http://localhost:${PORT}`);
});
