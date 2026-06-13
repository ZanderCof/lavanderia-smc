"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";

interface TestimonialProps {
  quote: string;
  name: string;
  event: string;
  stars: number;
  delay?: number;
}

function TestimonialCard({ quote, name, event, stars, delay = 0 }: TestimonialProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.97 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay, duration: 0.4 }}
      className="bg-slate-50 border border-slate-100 rounded-2xl p-6 flex flex-col gap-4"
    >
      <div className="flex gap-1">
        {Array.from({ length: stars }).map((_, i) => (
          <Star key={i} size={13} className="fill-blue-500 text-blue-500" />
        ))}
      </div>
      <p className="text-sm text-slate-600 leading-relaxed font-medium">"{quote}"</p>
      <div className="mt-auto pt-4 border-t border-slate-200">
        <p className="text-sm font-black text-slate-900 tracking-tight">{name}</p>
        <p className="text-xs text-blue-600 font-semibold tracking-wider uppercase mt-0.5">{event}</p>
      </div>
    </motion.div>
  );
}

const testimonials: TestimonialProps[] = [
  {
    quote: "Il mio abito da sposa, dopo 15 anni, è tornato esattamente come il giorno del matrimonio. Un miracolo di professionalità.",
    name: "Francesca M.",
    event: "Sposa · Milano",
    stars: 5,
    delay: 0,
  },
  {
    quote: "Smoking di sartoria trattato con cura incredibile. Li consiglio a chiunque abbia capi importanti da valorizzare.",
    name: "Marco B.",
    event: "Cerimonia di laurea",
    stars: 5,
    delay: 0.1,
  },
  {
    quote: "Ho portato il vestito da damigella con una macchia di vino. È tornato perfetto. Grazie LavaseccoSCM!",
    name: "Giulia R.",
    event: "Damigella d'onore",
    stars: 5,
    delay: 0.2,
  },
];

export function CerimoniaTestimonials() {
  return (
    <section className="bg-slate-50 border-y border-slate-100">
      <div className="max-w-4xl mx-auto px-6 py-24">
        <div className="text-center mb-12 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <Badge className="bg-blue-50 text-blue-600 border border-blue-100 px-4 py-1 rounded-full text-sm font-semibold uppercase tracking-wider">
              Le loro parole
            </Badge>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl lg:text-5xl font-black text-slate-900 tracking-tighter"
          >
            Chi si è fidato di noi.
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {testimonials.map((t, i) => (
            <TestimonialCard key={i} {...t} />
          ))}
        </div>
      </div>
    </section>
  );
}
