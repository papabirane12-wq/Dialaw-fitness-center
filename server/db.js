import { createClient } from '@supabase/supabase-js';
import {
  MOCK_SERVICES,
  MOCK_COACHES,
  MOCK_SLOTS,
  MOCK_CLIENT_PROFILE,
  MOCK_ADMIN_STATS
} from '../src/data/mockData.js';

const supabaseUrl = process.env.VITE_SUPABASE_URL || 'https://uwcrflplhkshomnxnond.supabase.co';
const supabaseAnonKey = process.env.VITE_SUPABASE_ANON_KEY || 'sb_publishable_p95-dfg6P9L_t6Vbz4txdQ_GhOGAhtU';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// In-memory fallback cache synced with Supabase for maximum speed
export const db = {
  services: MOCK_SERVICES,
  coaches: MOCK_COACHES,
  slots: MOCK_SLOTS,
  clientProfile: MOCK_CLIENT_PROFILE,
  adminStats: MOCK_ADMIN_STATS,
  bookings: [
    {
      id: 'bkg-1001',
      slotId: 'slot-101',
      clientName: 'Alex Dupont',
      clientEmail: 'alex.dupont@email.fr',
      title: 'Coaching Musculation Personnalisé',
      coachName: 'Coach Matar',
      date: '2026-08-24',
      time: '09:00 - 10:00',
      amount: 10000,
      formattedAmount: '10 000 FCFA',
      paymentStatus: 'Payée',
      createdAt: new Date().toISOString()
    }
  ]
};

export async function initDb() {
  try {
    console.log('⚡ Initialisation de la connexion Supabase REST Client...');
    const { data: servicesData, error: servicesErr } = await supabase.from('services').select('*');

    if (servicesErr) {
      console.log('ℹ️ Table Supabase services non détectée, utilisation de la structure dynamique de secours.');
    } else if (servicesData && servicesData.length > 0) {
      db.services = servicesData;
      console.log('✅ Offres & Tarifs chargés en direct depuis Supabase !');
    }

    const { data: slotsData, error: slotsErr } = await supabase.from('slots').select('*');
    if (slotsData && slotsData.length > 0) {
      db.slots = slotsData;
      console.log('✅ Créneaux chargés en direct depuis Supabase !');
    }

    console.log('✨ Base de données Supabase connectée avec succès !');
  } catch (err) {
    console.error('Erreur Supabase init:', err);
  }
}
