import React from 'react';
import { Check, Sparkles, ShieldCheck, Zap, ArrowRight, HelpCircle } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { MOCK_SERVICES } from '../data/mockData';

export default function Services() {
  const { openBookingModal, openCheckoutModal } = useAuth();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16 bg-[#121315]">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="px-3 py-1 rounded-md bg-[#FF4D17]/15 text-[#FF4D17] border border-[#FF4D17]/30 text-xs font-extrabold uppercase tracking-wider">
          Transparence & Liberté
        </span>
        <h1 className="text-4xl sm:text-5xl font-black text-white font-heading">
          Nos Formules & Tarifs en Francs CFA
        </h1>
        <p className="text-slate-300 text-sm leading-relaxed">
          Sélectionnez la formule qui correspond à votre rythme et vos objectifs à Yenne. Tous nos abonnements sont <strong className="text-[#FF4D17]">sans engagement de durée</strong> avec résiliation simplifiée.
        </p>
      </div>

      {/* Pricing Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
        {MOCK_SERVICES.map(plan => (
          <div
            key={plan.id}
            className={`relative rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 ${
              plan.popular
                ? 'bg-[#1C1E22] border-2 border-[#FF4D17] shadow-2xl shadow-[#FF4D17]/20 scale-105 z-10'
                : 'dark-panel border-[#2B2E34]'
            }`}
          >
            {plan.popular && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#FF4D17] text-white font-black text-xs uppercase tracking-widest shadow-lg">
                ★ {plan.badge} ★
              </div>
            )}

            <div className="space-y-6">
              <div>
                <span className="text-xs font-bold uppercase text-slate-400 tracking-wider block">
                  {plan.badge && !plan.popular ? plan.badge : 'Formule'}
                </span>
                <h3 className="text-2xl font-black text-white font-heading mt-1">{plan.title}</h3>
                <p className="text-xs text-slate-400 mt-2 min-h-[36px]">{plan.description}</p>
              </div>

              {/* Price Tag */}
              <div className="py-4 border-y border-[#2B2E34] flex items-baseline gap-2">
                <span className="text-3xl sm:text-4xl font-black text-white font-heading">
                  {plan.formattedPrice || `${plan.price.toLocaleString('fr-FR')} FCFA`}
                </span>
                <span className="text-xs text-slate-400 font-semibold">{plan.billing}</span>
              </div>

              {/* Features checklist */}
              <ul className="space-y-3">
                {plan.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-xs text-slate-300">
                    <Check className="w-4 h-4 text-[#FF4D17] shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-8">
              {plan.id === 'pass-seance' ? (
                <button
                  onClick={() => openBookingModal()}
                  className="w-full bg-[#272A30] hover:bg-[#32363E] text-white font-bold py-3.5 rounded-xl transition-all text-sm flex items-center justify-center gap-2"
                >
                  <span>{plan.cta}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  onClick={() => openCheckoutModal(plan)}
                  className={`w-full font-extrabold py-3.5 rounded-xl transition-all text-sm flex items-center justify-center gap-2 shadow-lg ${
                    plan.popular
                      ? 'bg-[#FF4D17] hover:bg-[#E63E0C] text-white shadow-[#FF4D17]/25'
                      : 'bg-[#FF4D17]/15 hover:bg-[#FF4D17]/25 text-[#FF4D17] border border-[#FF4D17]/40'
                  }`}
                >
                  <span>{plan.cta}</span>
                  <Sparkles className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Feature comparison table */}
      <div className="dark-panel p-8 rounded-3xl space-y-6">
        <h3 className="text-xl font-bold text-white font-heading">Tableau comparatif des fonctionnalités</h3>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-slate-300">
            <thead>
              <tr className="border-b border-[#2B2E34] text-slate-400 uppercase tracking-wider">
                <th className="py-3 px-4 font-semibold">Fonctionnalités</th>
                <th className="py-3 px-4 font-semibold">Pass Séance</th>
                <th className="py-3 px-4 font-semibold text-[#FF4D17]">Flex (30 000 FCFA/m)</th>
                <th className="py-3 px-4 font-semibold text-[#FF4D17]">VIP Elite (60 000 FCFA/m)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#2B2E34]">
              <tr>
                <td className="py-3.5 px-4 font-semibold text-white">Accès équipements 7j/7 (08h-22h)</td>
                <td className="py-3.5 px-4 text-slate-500">Séance unique</td>
                <td className="py-3.5 px-4 text-[#FF4D17] font-bold">Illimité</td>
                <td className="py-3.5 px-4 text-[#FF4D17] font-bold">Illimité</td>
              </tr>
              <tr>
                <td className="py-3.5 px-4 font-semibold text-white">Cours Collectifs inclus</td>
                <td className="py-3.5 px-4 text-slate-500">1 cours</td>
                <td className="py-3.5 px-4 text-slate-200">2 par semaine</td>
                <td className="py-3.5 px-4 text-[#FF4D17] font-bold">Illimité Prioritaire</td>
              </tr>
              <tr>
                <td className="py-3.5 px-4 font-semibold text-white">Coaching Individuel 1-sur-1</td>
                <td className="py-3.5 px-4 text-slate-500">—</td>
                <td className="py-3.5 px-4 text-slate-500">En option</td>
                <td className="py-3.5 px-4 text-[#FF4D17] font-bold">1 séance / semaine</td>
              </tr>
              <tr>
                <td className="py-3.5 px-4 font-semibold text-white">Plan Nutritionnel Personnalisé</td>
                <td className="py-3.5 px-4 text-slate-500">—</td>
                <td className="py-3.5 px-4 text-slate-500">Guide de base</td>
                <td className="py-3.5 px-4 text-[#FF4D17] font-bold">Inclus & Mis à jour</td>
              </tr>
              <tr>
                <td className="py-3.5 px-4 font-semibold text-white">Application & Suivi Espace Client</td>
                <td className="py-3.5 px-4 text-slate-500 font-medium">Temporaire</td>
                <td className="py-3.5 px-4 text-[#FF4D17] font-bold">Oui</td>
                <td className="py-3.5 px-4 text-[#FF4D17] font-bold">Oui Premium</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}
