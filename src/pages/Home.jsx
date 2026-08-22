import React, { useState } from 'react';
import { Dumbbell, Calendar, Flame, Heart, Target, Star, ChevronDown, ChevronUp, MapPin, Phone, Mail, ArrowRight, ShieldCheck, Award, Users, Activity, CheckCircle2 } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { MOCK_COACHES, MOCK_TESTIMONIALS, MOCK_FAQS, MOCK_SERVICES } from '../data/mockData';

export default function Home({ setActivePage }) {
  const { openBookingModal, openCheckoutModal } = useAuth();
  const [openFaqIndex, setOpenFaqIndex] = useState(0);
  const [activePhotoIndex, setActivePhotoIndex] = useState(0);

  const matar = MOCK_COACHES[0];

  return (
    <div className="space-y-24 pb-20 bg-[#121315]">
      
      {/* HERO SECTION */}
      <section className="relative pt-12 lg:pt-20 overflow-hidden">
        {/* Background glow effects */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FF4D17]/10 rounded-full blur-[140px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Hero Text */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FF4D17]/15 border border-[#FF4D17]/30 text-[#FF4D17] text-xs font-extrabold uppercase tracking-widest">
                <ShieldCheck className="w-4 h-4" /> Centre Sportif & Coaching avec Coach Matar
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white font-heading leading-[1.1]">
                Repoussez vos limites avec <span className="text-[#FF4D17]">Dialaw Fitness Center</span>
              </h1>

              <p className="text-lg text-slate-300 max-w-2xl leading-relaxed font-light">
                Un environnement ultra-moderne à Yenne dédié à votre transformation physique : coaching individuel avec Coach Matar, cours collectifs haute intensité et suivi sur-mesure.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <button
                  onClick={() => openBookingModal()}
                  className="w-full sm:w-auto bg-[#FF4D17] hover:bg-[#E63E0C] text-white font-extrabold px-8 py-4 rounded-xl shadow-xl shadow-[#FF4D17]/25 hover:shadow-[#FF4D17]/40 transition-all flex items-center justify-center gap-3 text-base group"
                >
                  <Calendar className="w-5 h-5" />
                  Réserver ma séance (10 000 FCFA)
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={() => setActivePage('services')}
                  className="w-full sm:w-auto bg-[#1C1E22] hover:bg-[#25282E] text-slate-100 font-bold px-6 py-4 rounded-xl border border-[#2F333B] transition-all flex items-center justify-center gap-2 text-base"
                >
                  Découvrir les Tarifs
                </button>
              </div>

              {/* Badges metrics */}
              <div className="pt-8 border-t border-[#2B2E34] grid grid-cols-3 gap-4 text-center lg:text-left">
                <div>
                  <span className="text-2xl sm:text-3xl font-black text-white font-heading block">180+</span>
                  <span className="text-xs text-slate-400 font-medium">Membres Entraînés</span>
                </div>
                <div>
                  <span className="text-2xl sm:text-3xl font-black text-[#FF4D17] font-heading block">5.0/5</span>
                  <span className="text-xs text-slate-400 font-medium">Avis Membres</span>
                </div>
                <div>
                  <span className="text-2xl sm:text-3xl font-black text-[#FF4D17] font-heading block">7j/7</span>
                  <span className="text-xs text-slate-400 font-medium">Accès 08h - 22h</span>
                </div>
              </div>

            </div>

            {/* Hero Visual Card — Real Photo of Coach Matar in Dialaw Fitness Gym */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden border border-[#2F333B] shadow-2xl group">
                <img
                  src="/images/coach-matar-3.jpg"
                  alt="Coach Matar à Dialaw Fitness Center Yenne"
                  className="w-full h-[520px] object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121315] via-transparent to-transparent"></div>

                {/* Floating Highlight Card */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-[#1C1E22]/95 border border-[#2F333B] backdrop-blur-md">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#FF4D17] text-white flex items-center justify-center font-bold shrink-0">
                      <Award className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-sm font-heading">Coach Matar — Fondateur & Head Coach</h4>
                      <p className="text-xs text-slate-300">Coaching individuel & cours collectifs à Yenne</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4 PILLARS SERVICES OVERVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-extrabold text-[#FF4D17] uppercase tracking-widest">
            Nos Prestations
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-heading">
            Une prise en charge sur-mesure avec Coach Matar
          </h2>
          <p className="text-slate-400 text-sm">
            Que vous souhaitiez gagner en masse musculaire, perdre du poids ou booster vos performances athlétiques.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="dark-panel-interactive p-6 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-[#FF4D17]/15 text-[#FF4D17] flex items-center justify-center border border-[#FF4D17]/30">
              <Dumbbell className="w-6 h-6 -rotate-45" />
            </div>
            <h3 className="text-lg font-bold text-white font-heading">Plateau Musculation</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Cages à squat, presses, barres et haltères pour un renforcement ciblé sous la supervision de Coach Matar.
            </p>
          </div>

          <div className="dark-panel-interactive p-6 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-[#FF4D17]/15 text-[#FF4D17] flex items-center justify-center border border-[#FF4D17]/30">
              <Flame className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white font-heading">Cross-Training & HIIT</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Séances intenses en groupe pour brûler un maximum de calories et repousser votre mental.
            </p>
          </div>

          <div className="dark-panel-interactive p-6 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-[#FF4D17]/15 text-[#FF4D17] flex items-center justify-center border border-[#FF4D17]/30">
              <Activity className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white font-heading">Prépa Physique & Conditioning</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Sessions de conditionnement physique en salle et à l'extérieur pour développer votre endurance.
            </p>
          </div>

          <div className="dark-panel-interactive p-6 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-[#FF4D17]/15 text-[#FF4D17] flex items-center justify-center border border-[#FF4D17]/30">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white font-heading">Coaching Privé 1-on-1</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Accompagnement individuel avec Matar : programme personnalisé et suivi nutritionnel adapté.
            </p>
          </div>
        </div>
      </section>

      {/* COACH MATAR FEATURED GALLERY SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="dark-panel p-8 sm:p-12 rounded-3xl border border-[#2F333B] space-y-10">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#2B2E34]">
            <div>
              <span className="text-xs font-extrabold text-[#FF4D17] uppercase tracking-widest">
                Fondateur & Coach Principal
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-heading mt-1">
                À Propos de Coach Matar
              </h2>
              <p className="text-slate-400 text-xs mt-1">
                L'expert derrière Dialaw Fitness Center à Yenne (Sénégal).
              </p>
            </div>

            <button
              onClick={() => openBookingModal()}
              className="bg-[#FF4D17] hover:bg-[#E63E0C] text-white font-extrabold px-6 py-3 rounded-xl text-xs shadow-lg shadow-[#FF4D17]/20 flex items-center gap-2"
            >
              <Calendar className="w-4 h-4" /> Réserver une séance avec Matar
            </button>
          </div>

          {/* Gallery Main Spotlight */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-4">
              <div className="relative rounded-2xl overflow-hidden h-96 border border-[#2F333B] shadow-2xl">
                <img
                  src={matar.gallery[activePhotoIndex]}
                  alt="Coach Matar"
                  className="w-full h-full object-cover transition-all duration-500"
                />
                <div className="absolute top-3 left-3 bg-[#121315]/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-[#FF4D17] flex items-center gap-1.5 border border-[#FF4D17]/30">
                  <Award className="w-3.5 h-3.5" /> Photo {activePhotoIndex + 1} / {matar.gallery.length}
                </div>
              </div>

              {/* Thumbnails Row */}
              <div className="flex items-center gap-3 overflow-x-auto pb-2">
                {matar.gallery.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActivePhotoIndex(idx)}
                    className={`relative w-20 h-20 rounded-xl overflow-hidden border-2 shrink-0 transition-all ${
                      activePhotoIndex === idx
                        ? 'border-[#FF4D17] scale-105 shadow-md shadow-[#FF4D17]/30'
                        : 'border-[#2F333B] opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt={`Coach Matar ${idx + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Matar Bio & Highlights */}
            <div className="lg:col-span-6 space-y-6">
              <div className="space-y-2">
                <span className="px-3 py-1 rounded-full bg-[#FF4D17]/15 text-[#FF4D17] border border-[#FF4D17]/30 text-xs font-extrabold">
                  ★ Coach Certifié 5.0 (180+ membres)
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-white font-heading">
                  Coach Matar
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed font-light">
                  Passionné de préparation physique et de musculation, Matar a fondé Dialaw Fitness Center à Yenne avec un seul objectif : offrir un coaching de proximité exigeant, chaleureux et adapté aux besoins de chacun.
                </p>
              </div>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-[#FF4D17] shrink-0 mt-0.5" />
                  <span><strong>Spécialiste de la Musculation & Recomposition</strong> : Prise de masse sèche & perte de poids.</span>
                </div>
                <div className="flex items-start gap-3 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-[#FF4D17] shrink-0 mt-0.5" />
                  <span><strong>Entraînement & Encadrement 7j/7</strong> : Suivi régulier sur le plateau de Dialaw Fitness à Yenne.</span>
                </div>
                <div className="flex items-start gap-3 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-[#FF4D17] shrink-0 mt-0.5" />
                  <span><strong>Suivi Personnalisé 1-sur-1</strong> : Bilan de forme complet, ajustement des séries et conseils nutritionnels.</span>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="tel:+221770604707"
                  className="inline-flex items-center gap-2 bg-[#272A30] hover:bg-[#32363E] text-white text-xs font-bold px-4 py-2.5 rounded-xl border border-[#2F333B]"
                >
                  <Phone className="w-4 h-4 text-[#FF4D17]" /> Contacter Matar : +221 77 060 47 07
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* PRICING PREVIEW CARD */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#1C1E22] p-8 sm:p-12 rounded-3xl border border-[#2E323A] relative overflow-hidden">
          <div className="max-w-3xl space-y-4">
            <span className="px-3 py-1 rounded-md bg-[#FF4D17]/15 text-[#FF4D17] border border-[#FF4D17]/30 text-xs font-bold uppercase">
              Formules sans engagement à Yenne
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-heading">
              Abonnements Flexibles à partir de <span className="text-[#FF4D17]">30 000 FCFA / mois</span>
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              Profitez d'un accès illimité à nos équipements 7j/7 de 08h à 22h sous l'encadrement de Coach Matar, avec résiliation possible à tout moment.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => openCheckoutModal(MOCK_SERVICES[1])}
                className="bg-[#FF4D17] hover:bg-[#E63E0C] text-white font-extrabold px-6 py-3.5 rounded-xl shadow-lg shadow-[#FF4D17]/20 text-sm"
              >
                Souscrire l'abonnement (30 000 FCFA)
              </button>
              <button
                onClick={() => setActivePage('services')}
                className="bg-[#272A30] hover:bg-[#31353E] text-white font-bold px-6 py-3.5 rounded-xl text-sm"
              >
                Comparer toutes les offres
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CLIENT TESTIMONIALS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-12 space-y-2">
          <span className="text-xs font-extrabold text-[#FF4D17] uppercase tracking-widest">
            Avis Certifiés
          </span>
          <h2 className="text-3xl font-extrabold text-white font-heading">
            Ce que disent nos membres
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {MOCK_TESTIMONIALS.map(item => (
            <div key={item.id} className="dark-panel p-6 space-y-4">
              <div className="flex items-center gap-1 text-[#FF4D17]">
                {[...Array(item.stars)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#FF4D17]" />
                ))}
              </div>
              <p className="text-xs text-slate-300 italic leading-relaxed">"{item.quote}"</p>
              <div className="flex items-center gap-3 pt-2 border-t border-[#2B2E34]">
                <img src={item.avatar} alt={item.name} className="w-10 h-10 rounded-full object-cover" />
                <div>
                  <h4 className="font-bold text-white text-sm">{item.name}</h4>
                  <span className="text-[11px] text-[#FF4D17]">{item.result}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* INTERACTIVE FAQ */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 space-y-2">
          <h2 className="text-3xl font-extrabold text-white font-heading">
            Foire Aux Questions
          </h2>
          <p className="text-slate-400 text-xs">
            Toutes les réponses à vos questions pour démarrer votre entraînement avec Coach Matar.
          </p>
        </div>

        <div className="space-y-3">
          {MOCK_FAQS.map((faq, index) => {
            const isOpen = openFaqIndex === index;
            return (
              <div key={index} className="dark-panel overflow-hidden">
                <button
                  onClick={() => setOpenFaqIndex(isOpen ? -1 : index)}
                  className="w-full px-6 py-4 text-left font-bold text-white text-sm flex items-center justify-between gap-4"
                >
                  <span>{faq.question}</span>
                  {isOpen ? <ChevronUp className="w-4 h-4 text-[#FF4D17] shrink-0" /> : <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />}
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-xs text-slate-300 leading-relaxed border-t border-[#2B2E34]">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

    </div>
  );
}
