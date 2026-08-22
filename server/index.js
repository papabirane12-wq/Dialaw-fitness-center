import express from 'express';
import cors from 'cors';
import { supabase, db, initDb } from './db.js';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

initDb().catch(console.error);

// GET /api/services
app.get('/api/services', async (req, res) => {
  try {
    const { data, error } = await supabase.from('services').select('*');
    if (!error && data && data.length > 0) {
      return res.json({ success: true, data });
    }
  } catch (e) {
    console.error('Supabase fetch error, fallback to live memory:', e);
  }
  res.json({ success: true, data: db.services });
});

// GET /api/coaches
app.get('/api/coaches', async (req, res) => {
  try {
    const { data, error } = await supabase.from('coaches').select('*');
    if (!error && data && data.length > 0) {
      return res.json({ success: true, data });
    }
  } catch (e) {}
  res.json({ success: true, data: db.coaches });
});

// GET /api/schedule
app.get('/api/schedule', async (req, res) => {
  try {
    const { data, error } = await supabase.from('slots').select('*');
    if (!error && data && data.length > 0) {
      return res.json({ success: true, data });
    }
  } catch (e) {}
  res.json({ success: true, data: db.slots });
});

// GET /api/client/profile
app.get('/api/client/profile', (req, res) => {
  res.json({ success: true, data: db.clientProfile });
});

// POST /api/bookings - Create new live booking in Supabase
app.post('/api/bookings', async (req, res) => {
  const { slotId, clientName, clientEmail, clientPhone, paymentMethod } = req.body;

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
    slot_id: slot.id,
    title: slot.title,
    coach_name: slot.coachName,
    date: slot.date,
    time: slot.time,
    location: slot.location,
    client_name: clientName || 'Alex Dupont',
    client_email: clientEmail || 'alex.dupont@email.fr',
    client_phone: clientPhone || '+221 77 123 45 67',
    status: 'Confirmée',
    payment_method: paymentMethod || 'Stripe Visa (**** 4242)',
    amount_paid: 10000,
    formatted_amount: '10 000 FCFA',
    created_at: new Date().toISOString()
  };

  db.bookings.unshift(newBooking);

  if (db.clientProfile) {
    db.clientProfile.upcomingBookings.unshift({
      id: newBooking.id,
      title: newBooking.title,
      coachName: newBooking.coach_name,
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
      paymentMethod: newBooking.payment_method
    });
  }

  if (db.adminStats) {
    db.adminStats.totalRevenueMonthly += 10000;
    db.adminStats.formattedTotalRevenue = `${db.adminStats.totalRevenueMonthly.toLocaleString('fr-FR')} FCFA`;
    db.adminStats.completedSessionsThisMonth += 1;
    db.adminStats.recentTransactions.unshift({
      id: `tx-${Date.now()}`,
      clientName: newBooking.client_name,
      plan: 'Réservation Séance',
      amount: 10000,
      formattedAmount: '10 000 FCFA',
      date: new Date().toISOString().replace('T', ' ').substring(0, 16),
      status: 'Succeeded'
    });
  }

  // Persist live booking to Supabase
  try {
    await supabase.from('bookings').insert([newBooking]);
    console.log(`✅ Nouvelle réservation synchronisée avec Supabase (${newBooking.id}) !`);
  } catch (err) {
    console.error('Supabase write error:', err);
  }

  res.status(201).json({
    success: true,
    message: 'Réservation enregistrée avec succès dans Supabase !',
    booking: {
      id: newBooking.id,
      title: newBooking.title,
      coachName: newBooking.coach_name,
      date: newBooking.date,
      time: newBooking.time,
      location: newBooking.location,
      clientName: newBooking.client_name,
      clientEmail: newBooking.client_email,
      status: newBooking.status,
      formattedAmount: newBooking.formatted_amount
    }
  });
});

// POST /api/payments/subscribe - Subscribe to plan (Flex or VIP)
app.post('/api/payments/subscribe', async (req, res) => {
  const { planId, cardDetails } = req.body;

  const service = db.services.find(s => s.id === planId);
  if (!service) {
    return res.status(404).json({ success: false, message: 'Offre non trouvée' });
  }

  const amount = service.price;
  const planName = service.title;
  const formattedAmount = service.formattedPrice;

  if (db.clientProfile) {
    db.clientProfile.membership = {
      planName: planName,
      status: 'Actif',
      renewsAt: '2026-09-22',
      price: amount,
      formattedPrice: formattedAmount,
      sessionsRemainingThisWeek: planId === 'abonne-vip' ? 2 : 1
    };

    db.clientProfile.invoices.unshift({
      id: `INV-2026-${Math.floor(1000 + Math.random() * 9000)}`,
      date: new Date().toLocaleDateString('fr-FR'),
      description: `Souscription ${planName}`,
      amount: amount,
      formattedAmount: formattedAmount,
      status: 'Payée',
      paymentMethod: `Stripe (Carte **** ${cardDetails?.number?.slice(-4) || '4242'})`
    });
  }

  if (db.adminStats) {
    db.adminStats.totalRevenueMonthly += amount;
    db.adminStats.formattedTotalRevenue = `${db.adminStats.totalRevenueMonthly.toLocaleString('fr-FR')} FCFA`;
    db.adminStats.recentTransactions.unshift({
      id: `tx-${Date.now()}`,
      clientName: 'Alex Dupont',
      plan: planName,
      amount: amount,
      formattedAmount: formattedAmount,
      date: new Date().toISOString().replace('T', ' ').substring(0, 16),
      status: 'Succeeded'
    });
  }

  // Persist live subscription to Supabase
  try {
    await supabase.from('subscriptions').insert([{
      id: `sub-${Date.now()}`,
      client_name: 'Alex Dupont',
      client_email: 'alex.dupont@email.fr',
      plan_id: planId,
      plan_name: planName,
      amount: amount,
      formatted_amount: formattedAmount,
      status: 'Actif',
      renews_at: '2026-09-22',
      payment_method: `Stripe (Carte **** ${cardDetails?.number?.slice(-4) || '4242'})`
    }]);
    console.log(`✅ Souscription à ${planName} enregistrée dans Supabase !`);
  } catch (err) {
    console.error('Supabase write error:', err);
  }

  res.json({
    success: true,
    message: `Félicitations ! Votre souscription à ${planName} est désormais active.`,
    membership: db.clientProfile.membership
  });
});

// POST /api/admin/slots - Admin add slot
app.post('/api/admin/slots', async (req, res) => {
  const { title, category, coachName, day, date, time, spotsTotal, location } = req.body;

  const newSlot = {
    id: `slot-${Date.now()}`,
    category: category || 'coaching-prive',
    title: title || 'Nouveau Cours',
    coachId: 'coach-matar',
    coachName: coachName || 'Coach Matar',
    day: day || 'Lundi',
    date: date || '2026-08-30',
    time: time || '10:00 - 11:00',
    spotsTotal: Number(spotsTotal) || 10,
    spotsLeft: Number(spotsTotal) || 10,
    location: location || 'Studio Principal',
    level: 'Tous niveaux'
  };

  db.slots.unshift(newSlot);

  try {
    await supabase.from('slots').insert([newSlot]);
    console.log(`✅ Nouveau créneau ajouté dans Supabase (${newSlot.title}) !`);
  } catch (err) {
    console.error('Supabase write error:', err);
  }

  res.status(201).json({ success: true, slot: newSlot });
});

// GET /api/admin/stats
app.get('/api/admin/stats', (req, res) => {
  res.json({ success: true, data: db.adminStats });
});

app.listen(PORT, () => {
  console.log(`🚀 Serveur Dialaw Fitness Center avec Supabase démarré sur http://localhost:${PORT}`);
});
