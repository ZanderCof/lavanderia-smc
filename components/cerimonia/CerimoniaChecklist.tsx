"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2 } from "lucide-react";

const items = [
  "Analisi tessuto e valutazione macchie",
  "Trattamento pre-lavaggio localizzato",
  "Lavaggio a secco o ad acqua dedicato",
  "Finishing e stiratura manuale",
  "Controllo qualità finale",
  "Imbustamento in tessuto non tessuto",
  "Conservazione in scatola acid-free (su richiesta)",
  "Ritiro e consegna a domicilio (su richiesta)",
];

export function CerimoniaChecklist() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

        {/* Left: heading */}
        <div className="space-y-5">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex"
          >
            <Badge className="bg-blue-50 text-blue-600 border border-blue-100 px-4 py-1 rounded-full text-sm font-semibold uppercase tracking-wider">
              Cosa include il servizio
            </Badge>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl lg:text-5xl font-black text-slate-900 tracking-tighter leading-tight"
          >
            Tutto compreso,
            <br />
            <span className="text-blue-600">nessuna sorpresa.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base text-slate-500 leading-relaxed font-medium"
          >
            Il prezzo che concordiamo include tutto ciò che serve. Nessun costo
            nascosto, nessun extra a sorpresa. Solo la certezza di un lavoro fatto
            come si deve.
          </motion.p>
        </div>

        {/* Right: checklist */}
        <div className="flex flex-col gap-3 pt-2">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ delay: i * 0.05 }}
              className="flex items-center gap-3"
            >
              <CheckCircle2 size={17} className="text-blue-600 shrink-0" />
              <span className="text-sm text-slate-700 font-medium">{item}</span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
