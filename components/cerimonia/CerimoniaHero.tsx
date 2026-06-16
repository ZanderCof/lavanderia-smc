"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Phone, MessageCircle, ArrowRight, Sparkles, Info } from "lucide-react";

export function CerimoniaHero() {
  return (
    <section className="relative pt-32 pb-12 px-6 overflow-hidden">
      <div className="max-w-4xl mx-auto text-center space-y-6 relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex justify-center"
        >
          <Badge className="bg-blue-50 text-blue-600 border border-blue-100 px-4 py-1 rounded-full text-sm font-semibold uppercase tracking-wider">
            <Sparkles size={14} className="mr-1.5 text-blue-500 animate-pulse" />
            Servizio Dedicato · Abiti da Cerimonia
          </Badge>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl lg:text-7xl font-black text-slate-900 tracking-tighter leading-tight"
        >
          Il tuo abito speciale,
          <br />
          <span className="text-blue-600">in mani esperte.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed font-medium"
        >
          Da oltre 20 anni, LavaseccoSCM è il riferimento a Milano per il lavaggio
          professionale e la conservazione degli abiti da cerimonia.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="inline-flex items-center gap-3 bg-blue-50/50 backdrop-blur border border-blue-100 p-4 rounded-2xl max-w-md text-left text-xs text-blue-800 font-medium leading-relaxed"
        >
          <Info size={20} className="text-blue-500 shrink-0" />
          <span>
            Per gli abiti da cerimonia i tempi di lavorazione variano da 3 a 7 giorni
            lavorativi. Contattaci per una valutazione personalizzata.
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-wrap gap-4 justify-center pt-2"
        >
          <a
            href="tel:+390299050084"
            className="group flex items-center gap-2.5 bg-blue-600 hover:bg-blue-700 text-white font-black text-sm px-7 py-3.5 rounded-2xl transition-all duration-200 shadow-lg shadow-blue-600/25 active:scale-95 tracking-tight"
          >
            <Phone size={16} strokeWidth={2.5} />
            Chiama ora
            <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="https://wa.me/390299050084"
            className="flex items-center gap-2.5 bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 font-black text-sm px-7 py-3.5 rounded-2xl transition-all duration-200 active:scale-95 tracking-tight"
          >
            <MessageCircle size={16} />
            WhatsApp
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex flex-wrap gap-10 justify-center pt-8 border-t border-slate-100"
        >
          {[
            { value: "20+", label: "Anni di esperienza" },
            { value: "5.000+", label: "Abiti trattati" },
            { value: "98%", label: "Clienti soddisfatti" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-3xl font-black text-slate-900 tracking-tighter">{s.value}</div>
              <div className="text-xs text-slate-500 font-semibold mt-0.5">{s.label}</div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
