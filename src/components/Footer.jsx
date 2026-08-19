import React from 'react';
import { Dumbbell, MapPin, Phone, Mail, Clock, ShieldCheck, Heart } from 'lucide-react';

export default function Footer({ setActivePage }) {
  return (
    <footer className="bg-[#0D0E10] border-t border-[#25282E] text-slate-400 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Col 1: Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#FF4D17] flex items-center justify-center text-white">
                <Dumbbell className="w-5 h-5 -rotate-45" />
              </div>
              <span className="text-lg font-bold text-white font-heading">
                DIALAW <span className="text-[#FF4D17]">FITNESS</span>
              </span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Plateforme globale de coaching sportif & centre de remise en forme à Yenne. Équipements modernes, cours collectifs et suivi nutritionnel sur-mesure.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#FF4D17]/15 text-[#FF4D17] border border-[#FF4D17]/30 text-xs font-semibold">
                <ShieldCheck className="w-3.5 h-3.5" /> Centre Sportif & Coaching
              </span>
            </div>
          </div>

          {/* Col 2: Navigation rapide */}
          <div>
            <h4 className="text-white font-bold font-heading mb-4 text-sm uppercase tracking-wider">
              Navigation Rapide
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button onClick={() => { setActivePage('home'); window.scrollTo(0,0); }} className="hover:text-[#FF4D17] transition-colors">
                  Accueil Vitrine
                </button>
              </li>
              <li>
                <button onClick={() => { setActivePage('services'); window.scrollTo(0,0); }} className="hover:text-[#FF4D17] transition-colors">
                  Nos Offres & Tarifs
                </button>
              </li>
              <li>
                <button onClick={() => { setActivePage('schedule'); window.scrollTo(0,0); }} className="hover:text-[#FF4D17] transition-colors">
                  Planning des Cours
                </button>
              </li>
              <li>
                <button onClick={() => { setActivePage('client-dashboard'); window.scrollTo(0,0); }} className="hover:text-[#FF4D17] transition-colors">
                  Espace Membre Client
                </button>
              </li>
              <li>
                <button onClick={() => { setActivePage('admin-dashboard'); window.scrollTo(0,0); }} className="hover:text-[#FF4D17] transition-colors">
                  Espace Coach & Admin
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Horaires & Accès */}
          <div>
            <h4 className="text-white font-bold font-heading mb-4 text-sm uppercase tracking-wider">
              Horaires d'Ouverture
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#FF4D17] shrink-0 mt-0.5" />
                <div>
                  <span className="text-slate-200 font-medium block">Ouverture 7j/7</span>
                  <span className="text-xs text-slate-400">08h00 — 22h00</span>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#FF4D17] shrink-0 mt-0.5" />
                <div>
                  <span className="text-slate-200 font-medium block">Coaching & Encadrement</span>
                  <span className="text-xs text-slate-400">Sur rendez-vous & cours collectifs</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Adresse */}
          <div>
            <h4 className="text-white font-bold font-heading mb-4 text-sm uppercase tracking-wider">
              Contact & Localisation
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#FF4D17] shrink-0 mt-0.5" />
                <span>Yenne, Sénégal</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#FF4D17] shrink-0" />
                <a href="tel:+221770604707" className="hover:text-[#FF4D17] transition-colors">+221 77 060 47 07</a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#FF4D17] shrink-0" />
                <span>contact@dialawfitness.com</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-8 border-t border-[#1C1E22] flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© 2026 Dialaw Fitness Center — Yenne. Tous droits réservés.</p>
          <p className="flex items-center gap-1">
            Conçu avec <Heart className="w-3.5 h-3.5 text-[#FF4D17] fill-[#FF4D17]" /> pour la performance et le dépassement de soi.
          </p>
        </div>
      </div>
    </footer>
  );
}
