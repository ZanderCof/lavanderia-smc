"use client";
import { motion } from "framer-motion";
import { Shirt, Home, Sparkles, CheckCircle2 } from "lucide-react";

const pricingCategories = [
  {
    title: "Capi Quotidiani",
    icon: <Shirt size={22} className="text-blue-600" />,
    color: "bg-blue-500/10 border-blue-500/20",
    items: [
      { name: "Camicia (lavata e stirata)", price: "€ 3,50", note: "Appesa o piegata" },
      { name: "Giacca / Blazer", price: "€ 8,00", note: "A secco o acqua" },
      { name: "Pantalone / Gonna", price: "€ 6,50", note: "Stiratura perfetta" },
      { name: "Cappotto / Soprabito", price: "€ 14,00", note: "Trattamento protettivo" },
      { name: "Maglione / Lana", price: "€ 5,50", note: "Idratante anti-infeltrente" },
    ]
  },
  {
    title: "Casa & Biancheria",
    icon: <Home size={22} className="text-amber-600" />,
    color: "bg-amber-500/10 border-amber-500/20",
    items: [
      { name: "Piumone Matrimoniale", price: "€ 22,00", note: "Custodia inclusa" },
      { name: "Trapunta Singola", price: "€ 18,00", note: "Igienizzazione profonda" },
      { name: "Tende (al mq)", price: "€ 4,50", note: "Smontaggio escluso" },
      { name: "Tovaglia grande", price: "€ 7,00", note: "Trattamento antimacchia" },
      { name: "Tappeto (al mq)", price: "€ 12,00", note: "Specialisti tappeti" },
    ]
  },
  {
    title: "Cerimonia & Capi Speciali",
    icon: <Sparkles size={22} className="text-purple-600" />,
    color: "bg-purple-500/10 border-purple-500/20",
    items: [
      { name: "Abito da Sposa", price: "da € 90", note: "In scatola protettiva" },
      { name: "Abito da Cerimonia", price: "€ 25,00", note: "Seta, strass, pizzi" },
      { name: "Giacca in Pelle / Antilope", price: "€ 45,00", note: "Nutriente e ravvivante" },
      { name: "Tuta da Sci (Giacca + Pant)", price: "€ 28,00", note: "Impermeabilizzazione" },
      { name: "Capi in Piuma d'Oca", price: "€ 16,00", note: "Asciugatura volumizzante" },
    ]
  }
];

export function PricingGrid() {
  return (
    <section className="py-12 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
          
          {pricingCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-white/60 backdrop-blur-xl border border-white/40 rounded-[2.5rem] p-6 md:p-8 shadow-xl shadow-blue-900/5 flex flex-col justify-between"
            >
              <div>
                {/* Intestazione Categoria */}
                <div className="flex items-center gap-4 mb-6 pb-4 border-b border-slate-100">
                  <div className={`w-12 h-12 ${category.color} border rounded-2xl flex items-center justify-center shrink-0`}>
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-black text-slate-900 tracking-tight">{category.title}</h3>
                </div>

                {/* Lista dei Capi */}
                <div className="space-y-4">
                  {category.items.map((item) => (
                    <div key={item.name} className="flex flex-col gap-1 py-1 group/item">
                      <div className="flex justify-between items-baseline gap-4">
                        <span className="text-sm font-bold text-slate-800 group-hover/item:text-blue-600 transition-colors leading-tight">
                          {item.name}
                        </span>
                        {/* Linea puntinata estetica su desktop */}
                        <div className="hidden sm:block flex-1 border-b border-dashed border-slate-200" />
                        <span className="text-base font-black text-slate-900 shrink-0">
                          {item.price}
                        </span>
                      </div>
                      <span className="text-[11px] font-medium text-slate-400">
                        {item.note}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer della Card con rassicurazione */}
              <div className="mt-8 pt-4 border-t border-slate-100 flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-slate-400">
                <CheckCircle2 size={12} className="text-emerald-500" />
                <span>Stiratura artigianale inclusa</span>
              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}
