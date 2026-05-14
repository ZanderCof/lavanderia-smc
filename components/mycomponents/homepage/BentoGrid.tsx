"use client";
import { motion } from "framer-motion";
import { WashingMachine, Shirt, Truck, Sparkles } from "lucide-react";

const features = [
  {
    title: "Lavaggio a Secco",
    desc: "Trattamento delicato per capi pregiati.",
    icon: <Shirt className="text-amber-600" size={24} />,
    color: "bg-amber-500/10 border-amber-500/20",
  },
  {
    title: "Washing Machine",
    desc: "Pulizia profonda per i tuoi capi quotidiani.",
    icon: <WashingMachine className="text-blue-600" size={24} />,
    color: "bg-blue-500/10 border-blue-500/20",
  },
  {
    title: "Consegna Express",
    desc: "Ritiriamo e consegniamo dove vuoi tu.",
    icon: <Truck className="text-green-600" size={24} />,
    color: "bg-green-500/10 border-green-500/20",
  },
  {
    title: "Eco-Friendly",
    desc: "Usiamo solo prodotti biodegradabili.",
    icon: <Sparkles className="text-purple-600" size={24} />,
    color: "bg-purple-500/10 border-purple-500/20",
  },
];

export function FeaturesBento() {
  return (
    <section className="py-12 md:py-24 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {features.map((f, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -6 }}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
              className="p-5 md:p-8 rounded-[2rem] md:rounded-[2.5rem] bg-white/60 backdrop-blur-xl border border-white/40 shadow-xl shadow-blue-900/5 hover:shadow-2xl hover:shadow-blue-900/10 hover:bg-white/80 transition-all group flex flex-row md:flex-col items-center md:items-start gap-4 md:gap-0 min-h-30 md:min-h-60 justify-start md:justify-between"
            >
              {/* Icona con badge più curato */}
              <div className={`w-12 h-12 md:w-14 md:h-14 ${f.color} border rounded-2xl flex items-center justify-center md:mb-6 group-hover:scale-110 transition-transform shrink-0`}>
                {f.icon}
              </div>
              
              {/* Contenitore testi: allineato di fianco su mobile, sotto su desktop */}
              <div className="flex flex-col justify-center">
                <h3 className="text-lg md:text-xl font-black text-slate-900 mb-0.5 md:mb-2 tracking-tight">
                  {f.title}
                </h3>
                <p className="text-slate-500 text-xs md:text-sm leading-snug md:leading-relaxed font-medium">
                  {f.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
