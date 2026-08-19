import React, { useState } from 'react';
import { Dumbbell, Calendar, UserCheck, ShieldCheck, Menu, X, ArrowRight, Flame } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export default function Navbar({ activePage, setActivePage }) {
  const { role, setRole, openBookingModal, clientProfile } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handlePageNav = (page) => {
    setActivePage(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 w-full dark-nav transition-all duration-300">
      {/* Top Demo Bar / Role Switcher */}
      <div className="bg-[#0D0E10] border-b border-[#25282E] py-1.5 px-4 text-xs">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-2 text-slate-300">
            <span className="inline-flex items-center gap-1.5 bg-[#FF4D17]/15 text-[#FF4D17] font-semibold px-2 py-0.5 rounded-md border border-[#FF4D17]/30">
              <Flame className="w-3.5 h-3.5" /> Mode Démo Interactif
            </span>
            <span className="hidden md:inline text-slate-400">
              Changez de profil pour tester l'expérience Visiteur, Client ou Admin Coach :
            </span>
          </div>

          <div className="flex items-center bg-[#18191C] p-1 rounded-lg border border-[#2B2E34]">
            <button
              onClick={() => { setRole('visitor'); handlePageNav('home'); }}
              className={`px-2.5 py-1 rounded-md transition-all font-medium flex items-center gap-1 ${
                role === 'visitor'
                  ? 'bg-[#FF4D17] text-white font-bold shadow-md'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Visiteur
            </button>
            <button
              onClick={() => { setRole('client'); handlePageNav('client-dashboard'); }}
              className={`px-2.5 py-1 rounded-md transition-all font-medium flex items-center gap-1 ${
                role === 'client'
                  ? 'bg-[#FF4D17] text-white font-bold shadow-md'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <UserCheck className="w-3.5 h-3.5" /> Client ({clientProfile?.name?.split(' ')[0]})
            </button>
            <button
              onClick={() => { setRole('admin'); handlePageNav('admin-dashboard'); }}
              className={`px-2.5 py-1 rounded-md transition-all font-medium flex items-center gap-1 ${
                role === 'admin'
                  ? 'bg-[#FF4D17] text-white font-bold shadow-md'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <ShieldCheck className="w-3.5 h-3.5" /> Coach / Admin
            </button>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <div 
            onClick={() => handlePageNav('home')}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-11 h-11 rounded-xl bg-[#FF4D17] flex items-center justify-center shadow-lg shadow-[#FF4D17]/25 group-hover:scale-105 transition-transform">
              <Dumbbell className="w-6 h-6 text-white -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
            </div>
            <div>
              <span className="text-xl font-extrabold tracking-tight text-white font-heading block leading-none">
                DIALAW <span className="text-[#FF4D17]">FITNESS</span>
              </span>
              <span className="text-[10px] uppercase font-bold tracking-widest text-slate-400 block mt-0.5">
                Center & Coaching
              </span>
            </div>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => handlePageNav('home')}
              className={`text-sm font-medium transition-colors hover:text-[#FF4D17] ${
                activePage === 'home' ? 'text-[#FF4D17] font-semibold' : 'text-slate-300'
              }`}
            >
              Accueil
            </button>
            <button
              onClick={() => handlePageNav('services')}
              className={`text-sm font-medium transition-colors hover:text-[#FF4D17] ${
                activePage === 'services' ? 'text-[#FF4D17] font-semibold' : 'text-slate-300'
              }`}
            >
              Offres & Tarifs
            </button>
            <button
              onClick={() => handlePageNav('schedule')}
              className={`text-sm font-medium transition-colors hover:text-[#FF4D17] ${
                activePage === 'schedule' ? 'text-[#FF4D17] font-semibold' : 'text-slate-300'
              }`}
            >
              Planning & Cours
            </button>
            {role === 'client' && (
              <button
                onClick={() => handlePageNav('client-dashboard')}
                className={`text-sm font-medium transition-colors hover:text-[#FF4D17] flex items-center gap-1.5 ${
                  activePage === 'client-dashboard' ? 'text-[#FF4D17] font-semibold' : 'text-slate-300'
                }`}
              >
                <UserCheck className="w-4 h-4 text-[#FF4D17]" /> Mon Espace Client
              </button>
            )}
            {role === 'admin' && (
              <button
                onClick={() => handlePageNav('admin-dashboard')}
                className={`text-sm font-medium transition-colors hover:text-[#FF4D17] flex items-center gap-1.5 ${
                  activePage === 'admin-dashboard' ? 'text-[#FF4D17] font-semibold' : 'text-slate-300'
                }`}
              >
                <ShieldCheck className="w-4 h-4 text-[#FF4D17]" /> Dashboard Coach
              </button>
            )}
          </nav>

          {/* Right Action CTA */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={() => openBookingModal()}
              className="bg-[#FF4D17] hover:bg-[#E63E0C] text-white font-extrabold px-5 py-2.5 rounded-lg shadow-lg shadow-[#FF4D17]/25 hover:shadow-[#FF4D17]/40 transition-all flex items-center gap-2 text-sm group"
            >
              <Calendar className="w-4 h-4" />
              Réserver une séance
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center gap-3">
            <button
              onClick={() => openBookingModal()}
              className="bg-[#FF4D17] text-white text-xs font-bold px-3 py-2 rounded-lg"
            >
              Réserver
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-slate-300 hover:text-white p-2 rounded-lg bg-[#1E2024] border border-[#2B2E34]"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#121315]/95 border-b border-[#25282E] px-4 pt-3 pb-6 space-y-3">
          <button
            onClick={() => handlePageNav('home')}
            className={`w-full text-left py-2.5 px-3 rounded-lg text-sm font-medium ${
              activePage === 'home' ? 'bg-[#FF4D17]/20 text-[#FF4D17]' : 'text-slate-300'
            }`}
          >
            Accueil
          </button>
          <button
            onClick={() => handlePageNav('services')}
            className={`w-full text-left py-2.5 px-3 rounded-lg text-sm font-medium ${
              activePage === 'services' ? 'bg-[#FF4D17]/20 text-[#FF4D17]' : 'text-slate-300'
            }`}
          >
            Offres & Tarifs
          </button>
          <button
            onClick={() => handlePageNav('schedule')}
            className={`w-full text-left py-2.5 px-3 rounded-lg text-sm font-medium ${
              activePage === 'schedule' ? 'bg-[#FF4D17]/20 text-[#FF4D17]' : 'text-slate-300'
            }`}
          >
            Planning & Cours
          </button>
          <button
            onClick={() => handlePageNav('client-dashboard')}
            className={`w-full text-left py-2.5 px-3 rounded-lg text-sm font-medium ${
              activePage === 'client-dashboard' ? 'bg-[#FF4D17]/20 text-[#FF4D17]' : 'text-slate-300'
            }`}
          >
            Espace Client
          </button>
          <button
            onClick={() => handlePageNav('admin-dashboard')}
            className={`w-full text-left py-2.5 px-3 rounded-lg text-sm font-medium ${
              activePage === 'admin-dashboard' ? 'bg-[#FF4D17]/20 text-[#FF4D17]' : 'text-slate-300'
            }`}
          >
            Dashboard Coach / Admin
          </button>
          <div className="pt-2">
            <button
              onClick={() => { setMobileMenuOpen(false); openBookingModal(); }}
              className="w-full bg-[#FF4D17] hover:bg-[#E63E0C] text-white font-bold py-3 rounded-lg flex items-center justify-center gap-2 text-sm"
            >
              <Calendar className="w-4 h-4" /> Réserver une séance
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
