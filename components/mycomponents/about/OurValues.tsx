"use client";
import { motion } from "framer-motion";
import { ShieldCheck, Leaf, Zap } from "lucide-react";

const values = [
  {
    title: "Massima Qualità",
    desc: "Ispezioniamo ogni capo prima e dopo il trattamento per assicurare risultati perfetti.",
    icon: <ShieldCheck className="text-blue-600" size={22} />,
    color: "bg-blue-500/10 border-blue-500/20",
  },
  {
    title: "Rispetto Ambientale",
    desc: "Utilizziamo lavaggi ecologici e detergenti biodegradabili cruelty-free.",
    icon: <Leaf className="text-emerald-600" size={22} />,
    color: "bg-emerald-500/10 border-emerald-500/20",
  },
  {
    title: "Velocità & Cortesia",
    desc: "I tuoi abiti pronti in 24/48 ore, trattati con il sorriso e la massima disponibilità.",
    icon: <Zap className="text-amber-600" size={22} />,
    color: "bg-amber-500/10 border-amber-500/20",
  },
];

export function OurValues() {
  return (
    <section className="py-12 md:py-24 px-4 md:px-6">
      <div className="max-w-5xl mx-auto space-y-12">
        <div className="text-center md:text-left space-y-2">
          <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest block">I Nostri Valori</span>
          <h2 className="text-3xl font-black text-slate-900 tracking-tight">Cosa ci guida ogni giorno</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {values.map((v, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="p-6 md:p-8 rounded-[2rem] md:rounded-[2.5rem] bg-white/60 backdrop-blur-xl border border-white/40 shadow-xl shadow-blue-900/5 flex flex-row md:flex-col items-center md:items-start gap-4 md:gap-0 min-h-30 md:min-h-55 justify-start md:justify-between"
            >
              <div className={`w-12 h-12 md:w-14 md:h-14 ${v.color} border rounded-2xl flex items-center justify-center md:mb-6 shrink-0`}>
                {v.icon}
              </div>
              
              <div className="flex flex-col justify-center">
                <h3 className="text-lg md:text-xl font-black text-slate-900 mb-1 tracking-tight">
                  {v.title}
                </h3>
                <p className="text-slate-500 text-xs md:text-sm leading-snug font-medium">
                  {v.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
