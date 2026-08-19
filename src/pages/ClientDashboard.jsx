import React, { useState } from 'react';
import { UserCheck, Calendar, Dumbbell, TrendingDown, FileText, CheckCircle2, Award, Sparkles, Clock, MapPin, ChevronRight, XCircle, Download, ExternalLink } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import InvoiceModal from '../components/InvoiceModal';

export default function ClientDashboard({ setActivePage }) {
  const { clientProfile, openBookingModal, showToast } = useAuth();
  const [activeTab, setActiveTab] = useState('overview'); // 'overview' | 'program' | 'tracking' | 'invoices'
  const [selectedInvoice, setSelectedInvoice] = useState(null);
  
  // Interactive workout checklist state
  const [completedExercises, setCompletedExercises] = useState({ 'Jour 1-0': true, 'Jour 1-1': true });

  const toggleExercise = (key) => {
    setCompletedExercises(prev => {
      const updated = { ...prev, [key]: !prev[key] };
      showToast(updated[key] ? 'Exercice validé avec succès ! 💪' : 'Exercice décoché', 'success');
      return updated;
    });
  };

  const profile = clientProfile;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      
      {/* Profile Banner */}
      <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="flex flex-col sm:flex-row items-center gap-5 text-center sm:text-left z-10">
          <img
            src={profile.avatar}
            alt={profile.name}
            className="w-20 h-20 rounded-2xl object-cover border-2 border-emerald-500 shadow-lg shadow-emerald-500/20"
          />
          <div className="space-y-1">
            <div className="flex items-center justify-center sm:justify-start gap-2">
              <h1 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">{profile.name}</h1>
              <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold border border-emerald-500/30">
                ★ {profile.membership.planName}
              </span>
            </div>
            <p className="text-xs text-slate-400">{profile.email} • Membre ID: {profile.id}</p>
            <p className="text-xs text-slate-300 flex items-center justify-center sm:justify-start gap-3 pt-1">
              <span>Prochain renouvellement : <strong className="text-emerald-400">{profile.membership.renewsAt}</strong></span>
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 z-10 w-full sm:w-auto">
          <button
            onClick={() => openBookingModal()}
            className="w-full sm:w-auto bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold px-5 py-3 rounded-xl shadow-lg shadow-emerald-500/20 text-xs flex items-center justify-center gap-2"
          >
            <Calendar className="w-4 h-4" /> Réserver un créneau
          </button>
        </div>
      </div>

      {/* Tabs Navigation */}
      <div className="flex flex-wrap items-center gap-2 border-b border-slate-800 pb-4 text-xs font-bold">
        <button
          onClick={() => setActiveTab('overview')}
          className={`px-4 py-2.5 rounded-xl transition-all flex items-center gap-2 ${
            activeTab === 'overview'
              ? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20'
              : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800'
          }`}
        >
          <UserCheck className="w-4 h-4" /> Tableau de Bord
        </button>

        <button
          onClick={() => setActiveTab('program')}
          className={`px-4 py-2.5 rounded-xl transition-all flex items-center gap-2 ${
            activeTab === 'program'
              ? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20'
              : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800'
          }`}
        >
          <Dumbbell className="w-4 h-4" /> Mes Programmes ({profile.activeProgram.days.length})
        </button>

        <button
          onClick={() => setActiveTab('tracking')}
          className={`px-4 py-2.5 rounded-xl transition-all flex items-center gap-2 ${
            activeTab === 'tracking'
              ? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20'
              : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800'
          }`}
        >
          <TrendingDown className="w-4 h-4" /> Suivi & Mensurations
        </button>

        <button
          onClick={() => setActiveTab('invoices')}
          className={`px-4 py-2.5 rounded-xl transition-all flex items-center gap-2 ${
            activeTab === 'invoices'
              ? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20'
              : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800'
          }`}
        >
          <FileText className="w-4 h-4" /> Factures & Reçus ({profile.invoices.length})
        </button>
      </div>

      {/* TAB 1: OVERVIEW */}
      {activeTab === 'overview' && (
        <div className="space-y-8 animate-in fade-in duration-300">
          
          {/* Quick Metrics Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="glass-panel p-5 space-y-2">
              <span className="text-xs text-slate-400 font-semibold block">Statut Abonnement</span>
              <span className="text-xl font-extrabold text-emerald-400 font-heading block">{profile.membership.status}</span>
              <span className="text-[11px] text-slate-400">{profile.membership.planName} ({profile.membership.price}€/m)</span>
            </div>

            <div className="glass-panel p-5 space-y-2">
              <span className="text-xs text-slate-400 font-semibold block">Série Entraînements</span>
              <span className="text-xl font-extrabold text-amber-400 font-heading block flex items-center gap-1.5">
                <Sparkles className="w-5 h-5" /> {profile.metrics.workoutStreakDays} Jours d'affilée
              </span>
              <span className="text-[11px] text-slate-400">Assiduité exemplaire</span>
            </div>

            <div className="glass-panel p-5 space-y-2">
              <span className="text-xs text-slate-400 font-semibold block">Poids Actuel</span>
              <span className="text-xl font-extrabold text-white font-heading block">{profile.metrics.currentWeight} kg</span>
              <span className="text-[11px] text-emerald-400 font-semibold">
                -{(profile.metrics.startWeight - profile.metrics.currentWeight).toFixed(1)} kg depuis le début
              </span>
            </div>

            <div className="glass-panel p-5 space-y-2">
              <span className="text-xs text-slate-400 font-semibold block">Masse Grasse (InBody)</span>
              <span className="text-xl font-extrabold text-cyan-400 font-heading block">{profile.metrics.bodyFatPercent} %</span>
              <span className="text-[11px] text-slate-400">Objectif: 12.5%</span>
            </div>
          </div>

          {/* Upcoming Sessions Section */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-extrabold text-white font-heading">Prochaines Séances Réservées</h2>
              <button onClick={() => openBookingModal()} className="text-xs text-emerald-400 font-bold hover:underline">
                + Ajouter une réservation
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {profile.upcomingBookings.map(bkg => (
                <div key={bkg.id} className="glass-panel p-5 space-y-3 border-l-4 border-l-emerald-500">
                  <div className="flex items-center justify-between">
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                      {bkg.status}
                    </span>
                    <span className="text-xs font-semibold text-slate-400 flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" /> {bkg.time}
                    </span>
                  </div>

                  <div>
                    <h4 className="font-extrabold text-white font-heading text-base">{bkg.title}</h4>
                    <p className="text-xs text-slate-300 mt-1 flex items-center gap-2">
                      <span>Coach: <strong className="text-emerald-400">{bkg.coachName}</strong></span>
                      <span>•</span>
                      <span className="flex items-center gap-1"><MapPin className="w-3 h-3 text-slate-400" /> {bkg.location}</span>
                    </p>
                    <p className="text-xs text-slate-400 mt-1">Date: {bkg.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      )}

      {/* TAB 2: WORKOUT PROGRAM */}
      {activeTab === 'program' && (
        <div className="space-y-6 animate-in fade-in duration-300">
          <div className="glass-panel p-6 rounded-2xl border border-slate-800 space-y-2">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest block">Programme Actif</span>
            <h2 className="text-2xl font-black text-white font-heading">{profile.activeProgram.title}</h2>
            <p className="text-xs text-slate-300">Attribué et suivi par Coach {profile.activeProgram.coach} • Objectif : {profile.activeProgram.objective}</p>
            
            <div className="pt-3">
              <div className="flex items-center justify-between text-xs font-semibold mb-1">
                <span className="text-slate-400">Progression globale</span>
                <span className="text-emerald-400 font-bold">{profile.activeProgram.progressPercent}% terminé</span>
              </div>
              <div className="w-full bg-slate-950 h-2 rounded-full overflow-hidden">
                <div className="bg-emerald-500 h-full rounded-full transition-all" style={{ width: `${profile.activeProgram.progressPercent}%` }}></div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {profile.activeProgram.days.map((day, dIdx) => (
              <div key={dIdx} className="glass-panel p-6 rounded-2xl space-y-4">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <h3 className="font-extrabold text-white text-lg font-heading">{day.dayTitle}</h3>
                  {day.completed && (
                    <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold flex items-center gap-1 border border-emerald-500/30">
                      <CheckCircle2 className="w-3.5 h-3.5" /> Journée Validée
                    </span>
                  )}
                </div>

                <div className="space-y-3">
                  {day.exercises.map((ex, eIdx) => {
                    const key = `${day.dayTitle}-${eIdx}`;
                    const isChecked = completedExercises[key];

                    return (
                      <div
                        key={eIdx}
                        onClick={() => toggleExercise(key)}
                        className={`p-4 rounded-xl border transition-all cursor-pointer flex items-center justify-between gap-4 ${
                          isChecked
                            ? 'bg-emerald-500/10 border-emerald-500/40 text-slate-300'
                            : 'bg-slate-900/60 border-slate-800 hover:border-slate-700 text-white'
                        }`}
                      >
                        <div className="flex items-start gap-3">
                          <div className={`w-5 h-5 rounded-md flex items-center justify-center mt-0.5 transition-colors ${
                            isChecked ? 'bg-emerald-500 text-slate-950' : 'border border-slate-600'
                          }`}>
                            {isChecked && <CheckCircle2 className="w-4 h-4" />}
                          </div>
                          <div>
                            <h4 className={`font-bold text-sm ${isChecked ? 'line-through text-slate-400' : 'text-white'}`}>
                              {ex.name}
                            </h4>
                            <span className="text-xs text-emerald-400 font-semibold block mt-0.5">{ex.sets} — {ex.reps}</span>
                            <span className="text-[11px] text-slate-400 block mt-0.5">{ex.note}</span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 3: TRACKING & BODY METRICS */}
      {activeTab === 'tracking' && (
        <div className="space-y-8 animate-in fade-in duration-300">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="glass-panel p-6 space-y-2">
              <span className="text-xs text-slate-400">Poids de départ</span>
              <span className="text-3xl font-black text-slate-300 font-heading block">{profile.metrics.startWeight} kg</span>
            </div>
            <div className="glass-panel p-6 space-y-2 border border-emerald-500/40">
              <span className="text-xs text-emerald-400 font-bold uppercase">Poids Actuel</span>
              <span className="text-3xl font-black text-white font-heading block">{profile.metrics.currentWeight} kg</span>
            </div>
            <div className="glass-panel p-6 space-y-2">
              <span className="text-xs text-slate-400">Objectif Défini</span>
              <span className="text-3xl font-black text-amber-400 font-heading block">{profile.metrics.targetWeight} kg</span>
            </div>
          </div>

          <div className="glass-panel p-6 rounded-2xl space-y-4">
            <h3 className="font-extrabold text-white text-lg font-heading">Historique des Pesées InBody</h3>
            <div className="space-y-3">
              {profile.metrics.history.map((item, idx) => (
                <div key={idx} className="flex items-center justify-between p-3 rounded-xl bg-slate-900 border border-slate-800 text-xs">
                  <span className="font-bold text-slate-300">{item.date}</span>
                  <span className="font-semibold text-white">{item.weight} kg</span>
                  <span className="text-cyan-400 font-medium">{item.fat}% MG</span>
                  <span className="text-emerald-400 font-bold">Conforme</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* TAB 4: INVOICES & RECEIPTS */}
      {activeTab === 'invoices' && (
        <div className="space-y-6 animate-in fade-in duration-300">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-extrabold text-white font-heading">Historique des Factures & Reçus</h2>
              <p className="text-xs text-slate-400">Téléchargez vos pièces justificatives de paiement pour votre comité d'entreprise ou remboursement mutuelle.</p>
            </div>
          </div>

          <div className="space-y-3">
            {profile.invoices.map(inv => (
              <div key={inv.id} className="glass-panel p-4 rounded-xl flex items-center justify-between gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-bold text-emerald-400">{inv.id}</span>
                    <span className="text-xs text-slate-400">• {inv.date}</span>
                  </div>
                  <h4 className="font-bold text-white text-sm">{inv.description}</h4>
                  <p className="text-[11px] text-slate-400">{inv.paymentMethod}</p>
                </div>

                <div className="flex items-center gap-4">
                  <span className="text-base font-black text-white font-heading">
                    {inv.formattedAmount || `${inv.amount.toLocaleString('fr-FR')} FCFA`}
                  </span>
                  <button
                    onClick={() => setSelectedInvoice(inv)}
                    className="p-2 rounded-lg bg-[#FF4D17]/15 hover:bg-[#FF4D17]/25 text-[#FF4D17] border border-[#FF4D17]/30 text-xs font-semibold flex items-center gap-1.5"
                  >
                    <Download className="w-4 h-4" /> Voir le Reçu
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Invoice Modal Popup */}
      {selectedInvoice && (
        <InvoiceModal invoice={selectedInvoice} onClose={() => setSelectedInvoice(null)} />
      )}

    </div>
  );
}
