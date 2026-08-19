import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import {
  MOCK_SERVICES,
  MOCK_COACHES,
  MOCK_SLOTS,
  MOCK_CLIENT_PROFILE,
  MOCK_ADMIN_STATS
} from '../src/data/mockData.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DB_FILE = path.join(__dirname, 'data.json');

// Initialize local DB with default mock data if not exists
export function getDb() {
  if (!fs.existsSync(DB_FILE)) {
    const initialData = {
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
          coachName: 'Marc Diallo',
          date: '2026-08-24',
          time: '09:00 - 10:00',
          amount: 15,
          paymentStatus: 'Payée',
          createdAt: new Date().toISOString()
        }
      ]
    };
    fs.writeFileSync(DB_FILE, JSON.stringify(initialData, null, 2), 'utf-8');
    return initialData;
  }

  try {
    const raw = fs.readFileSync(DB_FILE, 'utf-8');
    return JSON.parse(raw);
  } catch (err) {
    console.error('Error reading DB, resetting to defaults:', err);
    return {
      services: MOCK_SERVICES,
      coaches: MOCK_COACHES,
      slots: MOCK_SLOTS,
      clientProfile: MOCK_CLIENT_PROFILE,
      adminStats: MOCK_ADMIN_STATS,
      bookings: []
    };
  }
}

export function saveDb(data) {
  try {
    fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2), 'utf-8');
  } catch (err) {
    console.error('Error saving DB:', err);
  }
}
