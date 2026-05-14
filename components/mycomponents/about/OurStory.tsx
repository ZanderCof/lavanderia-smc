"use client";
import { motion } from "framer-motion";
import { History, Award, Heart } from "lucide-react";

export function OurStory() {
  return (
    <section className="py-12 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          
          {/* Card grande: La Storia */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2 bg-white/60 backdrop-blur-xl border border-white/40 rounded-[2.5rem] p-8 lg:p-10 shadow-xl shadow-blue-900/5 flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 bg-blue-500/10 border border-blue-500/20 rounded-2xl flex items-center justify-center text-blue-600">
                <History size={22} />
              </div>
              <h2 className="text-3xl font-black text-slate-900 tracking-tight">Una tradizione di famiglia</h2>
              <p className="text-slate-500 leading-relaxed font-medium text-sm lg:text-base">
                Fondata nel **1995 a Senago**, Lavasecco SCM nasce con l&apos;obiettivo di offrire un servizio di lavanderia artigianale d&apos;eccellenza. Nel corso degli anni abbiamo saputo evolverci, affiancando alla nostra esperienza storica macchinari di ultima generazione e prodotti detergenti a ridotto impatto ambientale.
              </p>
            </div>
            <div className="text-xs font-black text-blue-600/40 uppercase tracking-widest mt-6">
              Oltre 30 anni di esperienza
            </div>
          </motion.div>

          {/* Card verticale: I Numeri o Riconoscimenti */}
          <div className="grid grid-cols-1 gap-6 md:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-slate-900 rounded-[2.5rem] p-8 text-white flex flex-col justify-between min-h-50"
            >
              <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center text-blue-400">
                <Award size={20} />
              </div>
              <div>
                <span className="text-5xl font-black tracking-tighter block mb-1 text-blue-400">100%</span>
                <p className="text-sm font-bold text-slate-300">Soddisfazione e cura del tessuto garantita.</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white/60 backdrop-blur-xl border border-white/40 rounded-[2.5rem] p-8 shadow-xl shadow-blue-900/5 flex flex-col justify-between min-h-50"
            >
              <div className="w-10 h-10 bg-emerald-500/10 border border-emerald-500/20 rounded-xl flex items-center justify-center text-emerald-600">
                <Heart size={20} />
              </div>
              <div>
                <span className="text-sm font-black text-slate-900 block mb-1 uppercase tracking-wider">Clienti Affezionati</span>
                <p className="text-xs lg:text-sm font-medium text-slate-500">Generazioni di famiglie a Senago si affidano a noi ogni giorno.</p>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
