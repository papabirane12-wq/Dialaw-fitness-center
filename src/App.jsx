import React, { useState } from 'react';
import { AuthProvider, useAuth } from './context/AuthContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ModalBooking from './components/ModalBooking';
import StripeCheckoutModal from './components/StripeCheckoutModal';
import Home from './pages/Home';
import Services from './pages/Services';
import Schedule from './pages/Schedule';
import ClientDashboard from './pages/ClientDashboard';
import AdminDashboard from './pages/AdminDashboard';
import { CheckCircle2, AlertTriangle, Sparkles } from 'lucide-react';

function AppContent() {
  const [activePage, setActivePage] = useState('home');
  const { toastMessage } = useAuth();

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100 selection:bg-emerald-500 selection:text-slate-950">
      
      {/* Top Navbar */}
      <Navbar activePage={activePage} setActivePage={setActivePage} />

      {/* Main View Router */}
      <main className="flex-1">
        {activePage === 'home' && <Home setActivePage={setActivePage} />}
        {activePage === 'services' && <Services />}
        {activePage === 'schedule' && <Schedule />}
        {activePage === 'client-dashboard' && <ClientDashboard setActivePage={setActivePage} />}
        {activePage === 'admin-dashboard' && <AdminDashboard />}
      </main>

      {/* Footer */}
      <Footer setActivePage={setActivePage} />

      {/* Modals */}
      <ModalBooking />
      <StripeCheckoutModal />

      {/* Toast Notification Container */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 animate-in slide-in-from-bottom-5 fade-in duration-300">
          <div className="bg-slate-900 border border-emerald-500/50 text-white px-5 py-3.5 rounded-2xl shadow-2xl flex items-center gap-3">
            <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
            <span className="text-xs font-semibold">{toastMessage.message}</span>
          </div>
        </div>
      )}

    </div>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}
