"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Sparkles, ShieldCheck, Clock, Truck } from "lucide-react";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  desc: string;
  delay?: number;
}

function FeatureCard({ icon, title, desc, delay = 0 }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ delay, duration: 0.4 }}
      className="group bg-white border border-slate-100 hover:border-blue-100 hover:shadow-[0_8px_30px_rgba(59,130,246,0.08)] rounded-2xl p-7 flex flex-col gap-4 transition-all duration-300"
    >
      <div className="w-11 h-11 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
        {icon}
      </div>
      <div>
        <h3 className="text-lg font-black text-slate-900 tracking-tight mb-1.5">{title}</h3>
        <p className="text-sm text-slate-500 leading-relaxed font-medium">{desc}</p>
      </div>
    </motion.div>
  );
}

const features: FeatureCardProps[] = [
  {
    icon: <Sparkles size={20} />,
    title: "Esperienza ventennale",
    desc: "Oltre 20 anni di esperienza nella cura di abiti da cerimonia preziosi. Ogni capo viene trattato con la massima attenzione.",
    delay: 0,
  },
  {
    icon: <ShieldCheck size={20} />,
    title: "Trattamenti su misura",
    desc: "Prodotti professionali dedicati a ogni tipo di tessuto: seta, pizzo, tulle, organza, lana e cashmere.",
    delay: 0.05,
  },
  {
    icon: <Clock size={20} />,
    title: "Conservazione a lungo termine",
    desc: "Servizio di boxatura e conservazione in busta acid-free per preservare il tuo abito nel tempo.",
    delay: 0.1,
  },
  {
    icon: <Truck size={20} />,
    title: "Ritiro e consegna",
    desc: "Ritiriamo l'abito direttamente a casa tua e lo riconsegnamo avvolto in tessuto non tessuto.",
    delay: 0.15,
  },
];

export function CerimoniaFeatures() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-24">
      <div className="text-center mb-12 space-y-4">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <Badge className="bg-blue-50 text-blue-600 border border-blue-100 px-4 py-1 rounded-full text-sm font-semibold uppercase tracking-wider">
            Perché sceglierci
          </Badge>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl lg:text-5xl font-black text-slate-900 tracking-tighter leading-tight"
        >
          La cura che il tuo abito
          <br />
          <span className="text-blue-600">merita davvero.</span>
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {features.map((f, i) => (
          <FeatureCard key={i} {...f} />
        ))}
      </div>
    </section>
  );
}
