"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

interface StepProps {
  number: string;
  title: string;
  desc: string;
  delay?: number;
  last?: boolean;
}

function ProcessStep({ number, title, desc, delay = 0, last = false }: StepProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay, duration: 0.4 }}
      className="flex gap-5"
    >
      <div className="flex flex-col items-center shrink-0">
        <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center shrink-0 shadow-lg shadow-blue-600/20">
          <span className="text-white font-black text-xs">{number}</span>
        </div>
        {!last && <div className="w-px flex-1 mt-2 bg-blue-100 min-h-[36px]" />}
      </div>
      <div className="pb-7">
        <h4 className="text-base font-black text-slate-900 tracking-tight mb-1">{title}</h4>
        <p className="text-sm text-slate-500 leading-relaxed font-medium">{desc}</p>
      </div>
    </motion.div>
  );
}

const steps: StepProps[] = [
  {
    number: "01",
    title: "Analisi e ispezione",
    desc: "Riceviamo l'abito e lo analizziamo centimetro per centimetro: tessuto, struttura, macchie, decorazioni.",
    delay: 0,
  },
  {
    number: "02",
    title: "Trattamento su misura",
    desc: "Selezioniamo il processo ottimale: lavaggio a secco, ad acqua, o combinato, con prodotti specifici per ogni fibra.",
    delay: 0.1,
  },
  {
    number: "03",
    title: "Finishing e controllo",
    desc: "Stiratura manuale, ricostruzione del volume, controllo visivo finale da parte del nostro esperto.",
    delay: 0.2,
  },
  {
    number: "04",
    title: "Consegna e conservazione",
    desc: "Restituiamo l'abito avvolto in busta anti-ossidazione, pronto per essere indossato o conservato.",
    delay: 0.3,
    last: true,
  },
];

export function CerimoniaProcess() {
  return (
    <section className="bg-slate-50 border-y border-slate-100">
      <div className="max-w-4xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left */}
          <div className="space-y-5">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex"
            >
              <Badge className="bg-blue-50 text-blue-600 border border-blue-100 px-4 py-1 rounded-full text-sm font-semibold uppercase tracking-wider">
                Il nostro processo
              </Badge>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl lg:text-5xl font-black text-slate-900 tracking-tighter leading-tight"
            >
              Ogni abito segue
              <br />
              <span className="text-blue-600">un percorso dedicato.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-base text-slate-500 leading-relaxed font-medium"
            >
              Non esiste una ricetta unica. Prima di toccare il tuo abito, lo analizziamo
              in ogni dettaglio: tessuto, decorazioni, macchie, costruzione. Solo allora
              selezioniamo il trattamento più adatto.
            </motion.p>

            <motion.a
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              href="tel:+390299050084"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-black text-sm tracking-tight transition-colors"
            >
              Parlaci del tuo abito
              <ArrowRight size={14} />
            </motion.a>
          </div>

          {/* Right: steps */}
          <div className="pt-2">
            {steps.map((step, i) => (
              <ProcessStep key={i} {...step} />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
