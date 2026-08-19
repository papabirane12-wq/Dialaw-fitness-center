import React from 'react';
import { X, Printer, Download, Dumbbell, ShieldCheck } from 'lucide-react';

export default function InvoiceModal({ invoice, onClose }) {
  if (!invoice) return null;

  const handlePrint = () => {
    window.print();
  };

  const amountStr = invoice.formattedAmount || `${invoice.amount.toLocaleString('fr-FR')} FCFA`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 modal-backdrop">
      <div className="relative w-full max-w-lg bg-[#181A1E] border border-[#2B2E36] rounded-2xl shadow-2xl overflow-hidden text-slate-100 p-6 space-y-6">
        
        {/* Actions Bar */}
        <div className="flex items-center justify-between border-b border-[#25282F] pb-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-[#FF4D17]/20 text-[#FF4D17] flex items-center justify-center">
              <Dumbbell className="w-4 h-4 -rotate-45" />
            </div>
            <span className="font-bold text-white text-sm font-heading">Reçu / Facture Officielle</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="p-2 rounded-lg bg-[#272A30] hover:bg-[#32363E] text-slate-300 text-xs flex items-center gap-1.5"
            >
              <Printer className="w-4 h-4 text-[#FF4D17]" /> Imprimer / PDF
            </button>
            <button
              onClick={onClose}
              className="text-slate-400 hover:text-white p-2 rounded-lg hover:bg-[#25282F]"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Invoice Printable Sheet */}
        <div className="bg-[#121315] p-6 rounded-xl border border-[#2E323A] space-y-6 text-xs">
          <div className="flex justify-between items-start">
            <div>
              <h4 className="font-extrabold text-white font-heading text-base">DIALAW FITNESS CENTER</h4>
              <p className="text-xs text-slate-400">Yenne, Sénégal</p>
              <p className="text-xs text-slate-400">Tél : +221 77 060 47 07</p>
            </div>
            <div className="text-right">
              <span className="text-xs text-[#FF4D17] font-mono font-bold block">{invoice.id}</span>
              <span className="text-xs text-slate-400 block">Émise le {invoice.date}</span>
            </div>
          </div>

          <div className="border-t border-[#25282F] pt-4 flex justify-between">
            <div>
              <span className="text-[10px] uppercase font-bold text-slate-400 block">Facturé à :</span>
              <p className="font-semibold text-white">Alex Dupont</p>
              <p className="text-xs text-slate-400">alex.dupont@email.fr</p>
            </div>
            <div className="text-right">
              <span className="text-[10px] uppercase font-bold text-slate-400 block">Statut :</span>
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#FF4D17]/20 text-[#FF4D17] text-xs font-bold border border-[#FF4D17]/30">
                <ShieldCheck className="w-3 h-3" /> {invoice.status}
              </span>
            </div>
          </div>

          <div className="border-t border-b border-[#25282F] py-3">
            <div className="flex justify-between text-xs font-bold text-slate-400 mb-2">
              <span>Description</span>
              <span>Montant Net</span>
            </div>
            <div className="flex justify-between text-sm font-semibold text-white">
              <span>{invoice.description}</span>
              <span>{amountStr}</span>
            </div>
          </div>

          <div className="flex justify-between items-center text-base font-black text-white font-heading">
            <span>TOTAL RÉGLÉ</span>
            <span className="text-[#FF4D17] text-lg">{amountStr}</span>
          </div>

          <div className="text-[10px] text-slate-500 text-center pt-2">
            Mode de règlement : {invoice.paymentMethod || 'Paiement Sécurisé'}. Merci pour votre confiance !
          </div>
        </div>

      </div>
    </div>
  );
}
