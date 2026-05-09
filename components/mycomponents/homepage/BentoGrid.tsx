"use client";
import { motion } from "framer-motion";
import { WashingMachine, Shirt, Truck, Sparkles } from "lucide-react";

const features = [
  {
    title: "Lavaggio a Secco",
    desc: "Trattamento delicato per capi pregiati.",
    icon: <Shirt className="text-amber-600" />,
    color: "bg-amber-50",
  },
  {
    title: "Washing Machine",
    desc: "Pulizia profonda per i tuoi capi quotidiani.",
    icon: <WashingMachine className="text-blue-600" />,
    color: "bg-blue-50",
  },
  {
    title: "Consegna Express",
    desc: "Ritiriamo e consegniamo dove vuoi tu.",
    icon: <Truck className="text-green-600" />,
    color: "bg-green-50",
  },
  {
    title: "Eco-Friendly",
    desc: "Usiamo solo prodotti biodegradabili.",
    icon: <Sparkles className="text-purple-600" />,
    color: "bg-purple-50",
  },
];

export function FeaturesBento() {
  return (
    <section className="py-24 px-6 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-[2.5rem] bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-all group"
            >
              <div className={`w-14 h-14 ${f.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                {f.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{f.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                {f.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
