"use client";
import { motion } from "framer-motion";
import { Waves, Sparkles, Snowflake, Trees, CheckCircle2 } from "lucide-react";

const detailedServices = [
  {
    title: "Lavaggio Piumoni & Trapunte",
    desc: "Igienizzazione profonda e asciugatura volumizzante controllata. Elimina acari e batteri restituendo la morbidezza originale alle piume d'oca e ai tessuti sintetici.",
    features: ["Asciugatura anti-grumi", "Trattamento igienizzante", "Custodia protettiva inclusa"],
    icon: <Waves className="text-blue-600" size={24} />,
    color: "bg-blue-500/10 border-blue-500/20",
    span: "lg:col-span-2", // Card più grande
  },
  {
    title: "Abiti da Cerimonia",
    desc: "Cura sartoriale per abiti da sposa, sposo e alta moda. Smacchiatura localizzata a mano e stiratura artigianale rigorosamente finale per preservare strass, pizzi e sete preziose.",
    features: ["Smacchiatura manuale", "Stiratura a vapore verticale", "Finitura protettiva"],
    icon: <Sparkles className="text-purple-600" size={24} />,
    color: "bg-purple-500/10 border-purple-500/20",
    span: "lg:col-span-1",
  },
  {
    title: "Capi in Pelle & Pellicceria",
    desc: "Trattamenti speciali nutrienti e ravvivanti per giacche in pelle, renna, antilope e pellicce. Rigeneriamo il colore e la morbidezza naturale delle fibre naturali.",
    features: ["Idratazione della pelle", "Ravvivante colore", "Trattamento anti-tarlo"],
    icon: <Snowflake className="text-amber-600" size={24} />,
    color: "bg-amber-500/10 border-amber-500/20",
    span: "lg:col-span-1",
  },
  {
    title: "Lavaggio ad Acqua & Wet Cleaning",
    desc: "Il nostro sistema di lavaggio ecologico avanzato che sostituisce il lavaggio a secco tradizionale sui capi compatibili. Pulizia impeccabile utilizzando acqua e detergenti biodegradabili.",
    features: ["100% Biodegradabile", "Sicuro su lane delicate", "Profumazione persistente"],
    icon: <Trees className="text-emerald-600" size={24} />,
    color: "bg-emerald-500/10 border-emerald-500/20",
    span: "lg:col-span-2", // Card più grande
  },
];

export function ServicesDetails() {
  return (
    <section className="py-12 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          
          {detailedServices.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className={`bg-white/60 backdrop-blur-xl border border-white/40 rounded-[2.5rem] p-6 md:p-8 shadow-xl shadow-blue-900/5 flex flex-col justify-between ${service.span}`}
            >
              <div className="space-y-4">
                {/* Intestazione Servizio */}
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 ${service.color} border rounded-2xl flex items-center justify-center shrink-0`}>
                    {service.icon}
                  </div>
                  <h3 className="text-xl md:text-2xl font-black text-slate-900 tracking-tight leading-tight">
                    {service.title}
                  </h3>
                </div>

                {/* Descrizione */}
                <p className="text-slate-500 text-sm leading-relaxed font-medium">
                  {service.desc}
                </p>
              </div>

              {/* Elenco Caratteristiche / Plus */}
              <div className="mt-6 pt-4 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-3 gap-2">
                {service.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-2 text-[11px] font-bold text-slate-600 uppercase tracking-tight">
                    <CheckCircle2 size={12} className="text-blue-500 shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}
