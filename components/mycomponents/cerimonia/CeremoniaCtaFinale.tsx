"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Phone, MessageCircle, ArrowRight, Sparkles, Info } from "lucide-react";

export function CeremoniaCtaFinale() {
  return (
    <section className="relative pt-24 pb-28 px-6 overflow-hidden">
      <div className="max-w-3xl mx-auto text-center space-y-6 relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <Badge className="bg-blue-50 text-blue-600 border border-blue-100 px-4 py-1 rounded-full text-sm font-semibold uppercase tracking-wider">
            <Sparkles size={14} className="mr-1.5 text-blue-500 animate-pulse" />
            Inizia adesso
          </Badge>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-5xl lg:text-7xl font-black text-slate-900 tracking-tighter leading-tight"
        >
          Porta il tuo abito
          <br />
          <span className="text-blue-600">in mani sicure.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-xl text-slate-500 max-w-xl mx-auto leading-relaxed font-medium"
        >
          Contattaci per un preventivo gratuito e senza impegno.
          Siamo a Milano, in via Tucidide 56.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="inline-flex items-center gap-3 bg-blue-50/50 backdrop-blur border border-blue-100 p-4 rounded-2xl max-w-sm text-left text-xs text-blue-800 font-medium leading-relaxed"
        >
          <Info size={20} className="text-blue-500 shrink-0" />
          <span>Lun–Sab 8:30–19:00 · Via Tucidide 56, Milano · info@lavanderiascm.it</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <a
            href="tel:+390299050084"
            className="group flex items-center gap-2.5 bg-blue-600 hover:bg-blue-700 text-white font-black text-sm px-8 py-4 rounded-2xl transition-all duration-200 shadow-lg shadow-blue-600/25 active:scale-95 tracking-tight"
          >
            <Phone size={16} strokeWidth={2.5} />
            02 9905 0084
            <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="https://wa.me/390299050084"
            className="flex items-center gap-2.5 bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 font-black text-sm px-8 py-4 rounded-2xl transition-all duration-200 active:scale-95 tracking-tight"
          >
            <MessageCircle size={16} />
            Scrivici su WhatsApp
          </a>
        </motion.div>

      </div>
    </section>
  );
}
