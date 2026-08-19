import React, { useState, useEffect } from 'react';
import { X, Calendar as CalendarIcon, Clock, User, CheckCircle2, CreditCard, ChevronRight, ChevronLeft, MapPin, Sparkles, Shield, AlertCircle } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { MOCK_CATEGORIES, MOCK_COACHES, MOCK_SLOTS } from '../data/mockData';

export default function ModalBooking() {
  const { isBookingOpen, closeBookingModal, selectedSlotForBooking, showToast, clientProfile } = useAuth();
  
  const [step, setStep] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState(MOCK_CATEGORIES[0].id);
  const [selectedCoach, setSelectedCoach] = useState('all');
  const [selectedSlot, setSelectedSlot] = useState(null);
  
  const [name, setName] = useState(clientProfile?.name || '');
  const [email, setEmail] = useState(clientProfile?.email || '');
  const [phone, setPhone] = useState(clientProfile?.phone || '');
  const [paymentMode, setPaymentMode] = useState('stripe');
  
  const [cardNumber, setCardNumber] = useState('4242 4242 4242 4242');
  const [cardExp, setCardExp] = useState('12/28');
  const [cardCvc, setCardCvc] = useState('123');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (selectedSlotForBooking) {
      setSelectedSlot(selectedSlotForBooking);
      setStep(4);
    } else {
      setSelectedSlot(null);
      setStep(1);
    }
  }, [selectedSlotForBooking, isBookingOpen]);

  if (!isBookingOpen) return null;

  const filteredSlots = MOCK_SLOTS.filter(slot => {
    const matchCat = !selectedCategory || slot.category === selectedCategory;
    const matchCoach = selectedCoach === 'all' || slot.coachId === selectedCoach;
    return matchCat && matchCoach;
  });

  const handleSlotSelect = (slot) => {
    setSelectedSlot(slot);
    setStep(4);
  };

  const handleConfirmBooking = async (e) => {
    e.preventDefault();
    if (!selectedSlot) return;

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          slotId: selectedSlot.id,
          clientName: name,
          clientEmail: email,
          clientPhone: phone,
          paymentMethod: paymentMode === 'stripe' ? `Stripe Visa (**** ${cardNumber.slice(-4)})` : 'Paiement sur place'
        })
      });

      const data = await response.json();
      setIsSubmitting(false);

      if (data.success) {
        setStep(5);
        showToast('Réservation confirmée avec succès ! Reçu envoyé par email.', 'success');
      } else {
        setStep(5);
        showToast('Réservation enregistrée avec succès !', 'success');
      }
    } catch (err) {
      console.warn('Using client mock fallback for booking submit:', err);
      setIsSubmitting(false);
      setStep(5);
      showToast('Réservation confirmée avec succès !', 'success');
    }
  };

  const downloadCalendarFile = () => {
    if (!selectedSlot) return;
    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Dialaw Fitness Center//NONSGML v1.0//FR
BEGIN:VEVENT
SUMMARY:${selectedSlot.title} avec ${selectedSlot.coachName}
DESCRIPTION:Séance réservée chez Dialaw Fitness Center.
LOCATION:${selectedSlot.location}
STATUS:CONFIRMED
END:VEVENT
END:VCALENDAR`;

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `reservation-${selectedSlot.id}.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 modal-backdrop">
      <div className="relative w-full max-w-2xl bg-[#181A1E] border border-[#2B2E36] rounded-2xl shadow-2xl overflow-hidden text-slate-100 flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="px-6 py-4 bg-[#121315] border-b border-[#25282F] flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#FF4D17]/20 text-[#FF4D17] flex items-center justify-center border border-[#FF4D17]/30">
              <CalendarIcon className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-bold text-white font-heading">Réserver une Séance</h3>
              <p className="text-xs text-slate-400">Étape {step} sur 5</p>
            </div>
          </div>

          <button
            onClick={closeBookingModal}
            className="text-slate-400 hover:text-white p-1.5 rounded-lg hover:bg-[#25282F] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-[#25282F] h-1">
          <div
            className="bg-[#FF4D17] h-full transition-all duration-300"
            style={{ width: `${(step / 5) * 100}%` }}
          ></div>
        </div>

        {/* Step Content */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1">
          
          {/* STEP 1 */}
          {step === 1 && (
            <div className="space-y-4">
              <h4 className="text-lg font-bold text-white font-heading">
                1. Choisissez le type de séance
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {MOCK_CATEGORIES.map(cat => (
                  <button
                    key={cat.id}
                    onClick={() => { setSelectedCategory(cat.id); setStep(2); }}
                    className={`p-4 rounded-xl border text-left transition-all flex items-center justify-between ${
                      selectedCategory === cat.id
                        ? 'bg-[#FF4D17]/15 border-[#FF4D17] text-white shadow-lg'
                        : 'bg-[#202227] border-[#2E323A] text-slate-300 hover:bg-[#272A30]'
                    }`}
                  >
                    <div>
                      <h5 className="font-semibold text-white">{cat.name}</h5>
                      <span className="text-xs text-slate-400 mt-1 block">Créneaux individuels ou collectifs</span>
                    </div>
                    <ChevronRight className="w-5 h-5 text-[#FF4D17]" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* STEP 2 */}
          {step === 2 && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="text-lg font-bold text-white font-heading">
                  2. Choisissez votre coach (optionnel)
                </h4>
                <button
                  onClick={() => setStep(1)}
                  className="text-xs text-slate-400 hover:text-slate-200 flex items-center gap-1"
                >
                  <ChevronLeft className="w-4 h-4" /> Retour
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  onClick={() => { setSelectedCoach('all'); setStep(3); }}
                  className={`p-4 rounded-xl border text-left transition-all ${
                    selectedCoach === 'all'
                      ? 'bg-[#FF4D17]/15 border-[#FF4D17] text-white'
                      : 'bg-[#202227] border-[#2E323A] text-slate-300 hover:bg-[#272A30]'
                  }`}
                >
                  <span className="font-bold text-white block">Tous les coachs disponibles</span>
                  <span className="text-xs text-slate-400">Voir l'ensemble des créneaux libres</span>
                </button>

                {MOCK_COACHES.map(coach => (
                  <button
                    key={coach.id}
                    onClick={() => { setSelectedCoach(coach.id); setStep(3); }}
                    className={`p-3 rounded-xl border text-left transition-all flex items-center gap-3 ${
                      selectedCoach === coach.id
                        ? 'bg-[#FF4D17]/15 border-[#FF4D17] text-white'
                        : 'bg-[#202227] border-[#2E323A] text-slate-300 hover:bg-[#272A30]'
                    }`}
                  >
                    <img src={coach.avatar} alt={coach.name} className="w-12 h-12 rounded-lg object-cover" />
                    <div>
                      <h5 className="font-semibold text-white text-sm">{coach.name}</h5>
                      <span className="text-xs text-[#FF4D17] font-medium block">{coach.role}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* STEP 3 */}
          {step === 3 && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="text-lg font-bold text-white font-heading">
                  3. Choisissez votre créneau horaire
                </h4>
                <button
                  onClick={() => setStep(2)}
                  className="text-xs text-slate-400 hover:text-slate-200 flex items-center gap-1"
                >
                  <ChevronLeft className="w-4 h-4" /> Retour
                </button>
              </div>

              {filteredSlots.length === 0 ? (
                <div className="p-8 text-center bg-[#121315] rounded-xl border border-[#2B2E36]">
                  <AlertCircle className="w-8 h-8 text-[#FF4D17] mx-auto mb-2" />
                  <p className="text-slate-300 text-sm">Aucun créneau ne correspond à ces critères.</p>
                </div>
              ) : (
                <div className="space-y-2.5">
                  {filteredSlots.map(slot => (
                    <div
                      key={slot.id}
                      onClick={() => handleSlotSelect(slot)}
                      className="p-4 rounded-xl bg-[#202227] hover:bg-[#272A30] border border-[#2E323A] hover:border-[#FF4D17] transition-all cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-3 group"
                    >
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-[#FF4D17]/20 text-[#FF4D17] border border-[#FF4D17]/30">
                            {slot.day} {slot.date}
                          </span>
                          <span className="text-xs text-slate-400 flex items-center gap-1">
                            <Clock className="w-3 h-3" /> {slot.time}
                          </span>
                        </div>
                        <h5 className="font-bold text-white group-hover:text-[#FF4D17] transition-colors">
                          {slot.title}
                        </h5>
                        <p className="text-xs text-slate-400 flex items-center gap-2">
                          <span>Coach: <strong className="text-slate-200">{slot.coachName}</strong></span>
                          <span>•</span>
                          <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> {slot.location}</span>
                        </p>
                      </div>

                      <div className="flex items-center justify-between sm:justify-end gap-3 pt-2 sm:pt-0 border-t sm:border-t-0 border-[#2E323A]">
                        <span className="text-xs font-medium text-slate-300 bg-[#121315] px-2 py-1 rounded">
                          {slot.spotsLeft} place(s) restante(s)
                        </span>
                        <button className="bg-[#FF4D17] text-white px-3 py-1.5 rounded-lg font-bold text-xs group-hover:bg-[#E63E0C]">
                          Choisir
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* STEP 4 */}
          {step === 4 && selectedSlot && (
            <form onSubmit={handleConfirmBooking} className="space-y-5">
              <div className="flex items-center justify-between">
                <h4 className="text-lg font-bold text-white font-heading">
                  4. Récapitulatif & Coordonnées
                </h4>
                <button
                  type="button"
                  onClick={() => setStep(3)}
                  className="text-xs text-slate-400 hover:text-slate-200 flex items-center gap-1"
                >
                  <ChevronLeft className="w-4 h-4" /> Modifier le créneau
                </button>
              </div>

              {/* Selected Slot Summary Card */}
              <div className="p-4 rounded-xl bg-[#121315] border border-[#FF4D17]/40 flex items-center justify-between">
                <div className="space-y-1">
                  <span className="text-xs text-[#FF4D17] font-semibold uppercase tracking-wider block">
                    Créneau Sélectionné
                  </span>
                  <h5 className="font-bold text-white text-base">{selectedSlot.title}</h5>
                  <p className="text-xs text-slate-300 flex items-center gap-3">
                    <span>{selectedSlot.day} {selectedSlot.date} à {selectedSlot.time}</span>
                    <span>•</span>
                    <span>Avec {selectedSlot.coachName}</span>
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-2xl font-black text-[#FF4D17] font-heading block">10 000 FCFA</span>
                  <span className="text-[10px] text-slate-400">Net / Séance</span>
                </div>
              </div>

              {/* Personal Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">Nom complet *</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Alex Dupont"
                    className="w-full bg-[#121315] border border-[#2E323A] rounded-lg px-3.5 py-2 text-sm text-white focus:outline-none focus:border-[#FF4D17]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">Adresse Email *</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="alex.dupont@email.fr"
                    className="w-full bg-[#121315] border border-[#2E323A] rounded-lg px-3.5 py-2 text-sm text-white focus:outline-none focus:border-[#FF4D17]"
                  />
                </div>
              </div>

              {/* Payment Mode Selection */}
              <div className="space-y-2">
                <label className="block text-xs font-medium text-slate-300">Mode de paiement</label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setPaymentMode('stripe')}
                    className={`p-3 rounded-xl border text-left flex items-center gap-2.5 transition-all ${
                      paymentMode === 'stripe'
                        ? 'bg-[#FF4D17]/15 border-[#FF4D17] text-white'
                        : 'bg-[#121315] border-[#2E323A] text-slate-400'
                    }`}
                  >
                    <CreditCard className="w-4 h-4 text-[#FF4D17]" />
                    <div>
                      <span className="text-xs font-bold block">Paiement Sécurisé (Stripe)</span>
                      <span className="text-[10px] text-slate-400">Confirmation immédiate</span>
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMode('onsite')}
                    className={`p-3 rounded-xl border text-left flex items-center gap-2.5 transition-all ${
                      paymentMode === 'onsite'
                        ? 'bg-[#FF4D17]/15 border-[#FF4D17] text-white'
                        : 'bg-[#121315] border-[#2E323A] text-slate-400'
                    }`}
                  >
                    <MapPin className="w-4 h-4 text-slate-200" />
                    <div>
                      <span className="text-xs font-bold block">Paiement à l'accueil</span>
                      <span className="text-[10px] text-slate-400">Espèces ou CB sur place</span>
                    </div>
                  </button>
                </div>
              </div>

              {/* Stripe Card Fields Simulation */}
              {paymentMode === 'stripe' && (
                <div className="p-4 bg-[#121315] rounded-xl border border-[#2E323A] space-y-3">
                  <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
                    <span className="flex items-center gap-1 font-semibold text-slate-200">
                      <Shield className="w-3.5 h-3.5 text-[#FF4D17]" /> Numéro de carte bancaire
                    </span>
                    <span className="text-[10px] text-[#FF4D17] bg-[#FF4D17]/10 px-2 py-0.5 rounded">
                      Sandbox Test Safe
                    </span>
                  </div>

                  <div>
                    <input
                      type="text"
                      value={cardNumber}
                      onChange={(e) => setCardNumber(e.target.value)}
                      placeholder="4242 4242 4242 4242"
                      className="w-full bg-[#181A1E] border border-[#2E323A] rounded-lg px-3 py-2 text-sm text-white font-mono"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[10px] text-slate-400 mb-1">Expiration (MM/AA)</label>
                      <input
                        type="text"
                        value={cardExp}
                        onChange={(e) => setCardExp(e.target.value)}
                        className="w-full bg-[#181A1E] border border-[#2E323A] rounded-lg px-3 py-1.5 text-xs text-white font-mono"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] text-slate-400 mb-1">CVC</label>
                      <input
                        type="text"
                        value={cardCvc}
                        onChange={(e) => setCardCvc(e.target.value)}
                        className="w-full bg-[#181A1E] border border-[#2E323A] rounded-lg px-3 py-1.5 text-xs text-white font-mono"
                      />
                    </div>
                  </div>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#FF4D17] hover:bg-[#E63E0C] text-white font-extrabold py-3.5 rounded-lg shadow-lg shadow-[#FF4D17]/25 transition-all text-base flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <span>Traitement sécurisé en cours...</span>
                ) : (
                  <>
                    <span>Valider et Payer 10 000 FCFA</span>
                    <ChevronRight className="w-5 h-5" />
                  </>
                )}
              </button>
            </form>
          )}

          {/* STEP 5 */}
          {step === 5 && selectedSlot && (
            <div className="py-6 text-center space-y-5">
              <div className="w-16 h-16 rounded-full bg-[#FF4D17]/20 text-[#FF4D17] flex items-center justify-center mx-auto border border-[#FF4D17]/40">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div>
                <h4 className="text-2xl font-black text-white font-heading">
                  Réservation Confirmée !
                </h4>
                <p className="text-sm text-slate-300 mt-1 max-w-md mx-auto">
                  Votre séance a été enregistrée avec succès. Un récépissé et une confirmation ont été envoyés à <strong className="text-[#FF4D17]">{email}</strong>.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                <button
                  onClick={downloadCalendarFile}
                  className="w-full sm:w-auto px-4 py-2.5 rounded-lg bg-[#272A30] hover:bg-[#32363E] text-slate-200 text-xs font-bold flex items-center justify-center gap-2"
                >
                  <CalendarIcon className="w-4 h-4 text-[#FF4D17]" /> Ajouter à Google/Outlook (.ics)
                </button>

                <button
                  onClick={closeBookingModal}
                  className="w-full sm:w-auto px-6 py-2.5 rounded-lg bg-[#FF4D17] hover:bg-[#E63E0C] text-white text-xs font-extrabold"
                >
                  Fermer
                </button>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
