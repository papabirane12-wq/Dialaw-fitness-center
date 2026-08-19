import React, { useState } from 'react';
import { Calendar as CalendarIcon, Clock, MapPin, Filter, UserCheck, Flame, Heart, Target, Dumbbell, ChevronRight } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { MOCK_SLOTS, MOCK_CATEGORIES } from '../data/mockData';

export default function Schedule() {
  const { openBookingModal } = useAuth();
  const [selectedCat, setSelectedCat] = useState('all');
  const [selectedDay, setSelectedDay] = useState('all');

  const filteredSlots = MOCK_SLOTS.filter(slot => {
    const catMatch = selectedCat === 'all' || slot.category === selectedCat;
    const dayMatch = selectedDay === 'all' || slot.day === selectedDay;
    return catMatch && dayMatch;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-slate-800">
        <div>
          <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 text-xs font-bold uppercase tracking-wider">
            Planning Interactif
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-white font-heading mt-2">
            Créneaux & Cours Collectifs
          </h1>
          <p className="text-slate-400 text-xs mt-1">
            Réservez votre place en temps réel parmi nos séances encadrées par des coachs diplômés.
          </p>
        </div>

        <button
          onClick={() => openBookingModal()}
          className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold px-6 py-3 rounded-xl shadow-lg shadow-emerald-500/20 text-xs flex items-center justify-center gap-2"
        >
          <CalendarIcon className="w-4 h-4" /> Réserver un créneau personnalisé
        </button>
      </div>

      {/* Filters Bar */}
      <div className="glass-panel p-4 rounded-2xl flex flex-col lg:flex-row items-center justify-between gap-4">
        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2 w-full lg:w-auto">
          <span className="text-xs font-bold text-slate-400 flex items-center gap-1 mr-2">
            <Filter className="w-3.5 h-3.5" /> Discipines :
          </span>
          <button
            onClick={() => setSelectedCat('all')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
              selectedCat === 'all'
                ? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20'
                : 'bg-slate-950 text-slate-400 hover:text-slate-200 border border-slate-800'
            }`}
          >
            Toutes
          </button>
          {MOCK_CATEGORIES.map(cat => (
            <button
              key={cat.id}
              onClick={() => setSelectedCat(cat.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                selectedCat === cat.id
                  ? 'bg-emerald-500 text-slate-950 font-bold shadow-md shadow-emerald-500/20'
                  : 'bg-slate-950 text-slate-400 hover:text-slate-200 border border-slate-800'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Day Filter */}
        <div className="flex items-center gap-1.5 bg-slate-950 p-1 rounded-xl border border-slate-800 text-xs w-full lg:w-auto justify-center">
          {['all', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'].map(day => (
            <button
              key={day}
              onClick={() => setSelectedDay(day)}
              className={`px-2.5 py-1 rounded-lg transition-all ${
                selectedDay === day
                  ? 'bg-slate-800 text-emerald-400 font-bold'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              {day === 'all' ? 'Tous les jours' : day}
            </button>
          ))}
        </div>
      </div>

      {/* Schedule Slots Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredSlots.map(slot => (
          <div
            key={slot.id}
            className="glass-panel p-6 rounded-2xl space-y-4 flex flex-col justify-between hover:border-emerald-500/40 transition-all group"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-1 rounded-md text-[10px] font-extrabold uppercase tracking-wider bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                  {slot.day} {slot.date}
                </span>
                <span className="text-xs font-semibold text-slate-400 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-slate-400" /> {slot.time}
                </span>
              </div>

              <div>
                <h3 className="text-lg font-bold text-white font-heading group-hover:text-emerald-400 transition-colors">
                  {slot.title}
                </h3>
                <p className="text-xs text-slate-400 mt-1 flex items-center gap-2">
                  <span>Coach : <strong className="text-slate-200">{slot.coachName}</strong></span>
                  <span>•</span>
                  <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> {slot.location}</span>
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
              <div>
                <span className="text-[11px] font-bold text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded">
                  {slot.spotsLeft} / {slot.spotsTotal} places libres
                </span>
              </div>

              <button
                onClick={() => openBookingModal(slot)}
                className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold px-4 py-2 rounded-xl text-xs flex items-center gap-1 shadow-md shadow-emerald-500/15"
              >
                Réserver <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
