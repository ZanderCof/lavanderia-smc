"use client";

import { motion } from "framer-motion";
import { Shirt } from "lucide-react";

const garments = [
  { name: "Abito da Sposa", sub: "Seta, pizzo, tulle, organza" },
  { name: "Abito da Sposo", sub: "Lana, cashmere, smoking" },
  { name: "Vestito Cerimonia", sub: "Cocktail, gala, lungo" },
  { name: "Accessori Luxury", sub: "Guanti, veli, mantelli" },
];

export function CerimoniaGarments() {
  return (
    <section className="border-y border-slate-100 bg-slate-50/50">
      <div className="max-w-4xl mx-auto px-6 py-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-slate-200">
          {garments.map((g, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i + 0.5 }}
              className="bg-white hover:bg-blue-50/50 flex flex-col items-center gap-1.5 py-5 px-4 transition-colors duration-200 cursor-default"
            >
              <Shirt size={20} className="text-blue-600" />
              <span className="text-sm font-black text-slate-900 tracking-tight text-center">
                {g.name}
              </span>
              <span className="text-[11px] text-slate-400 font-semibold text-center">
                {g.sub}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
