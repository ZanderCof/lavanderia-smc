"use client";

import { motion } from "framer-motion";
import { MapPin, Clock, Phone, Mail } from "lucide-react";

const infoItems = [
  {
    icon: <MapPin size={18} className="text-blue-600 shrink-0 mt-0.5" />,
    label: "Indirizzo",
    value: "Via Tucidide 56, 20134 Milano",
  },
  {
    icon: <Clock size={18} className="text-blue-600 shrink-0 mt-0.5" />,
    label: "Orari",
    value: "Lun–Ven 8:30–19:00\nSabato 9:00–13:00",
  },
  {
    icon: <Phone size={18} className="text-blue-600 shrink-0 mt-0.5" />,
    label: "Telefono",
    value: "02 9905 0084",
    href: "tel:+390299050084",
  },
  {
    icon: <Mail size={18} className="text-blue-600 shrink-0 mt-0.5" />,
    label: "Email",
    value: "info@lavanderiascm.it",
    href: "mailto:info@lavanderiascm.it",
  },
];

export function LocaleMap() {
  return (
    <section className="border-y border-slate-100">
      <div className="max-w-4xl mx-auto px-6 py-24">

        {/* Grid: mappa + info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.5 }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-0 overflow-hidden rounded-2xl border border-slate-100 shadow-sm"
        >
          {/* MAPPA */}
          <div className="lg:col-span-2 h-72 lg:h-auto min-h-80">
            <iframe
              title="LavaseccoSCM - Via Tucidide 56, Milano"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2797.123456789!2d9.2345678!3d45.4654219!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786c6b8b1234567%3A0xabcdef1234567890!2sVia%20Tucidide%2C%2056%2C%2020134%20Milano%20MI!5e0!3m2!1sit!2sit!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0, display: "block", minHeight: "320px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* INFO */}
          <div className="bg-white border-t lg:border-t-0 lg:border-l border-slate-100 p-8 flex flex-col justify-center gap-6">
            <div>
              <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-1">
                LavaseccoSCM
              </p>
              <p className="text-lg font-black text-slate-900 tracking-tight leading-tight">
                Lavanderia & Lavasecco
              </p>
            </div>

            <div className="flex flex-col gap-5">
              {infoItems.map((item, i) => (
                <div key={i} className="flex gap-3">
                  {item.icon}
                  <div>
                    <p className="text-[11px] font-black text-slate-400 uppercase tracking-widest mb-0.5">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-sm font-semibold text-slate-700 whitespace-pre-line">
                        {item.value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <a
              href="https://maps.google.com/?q=Via+Tucidide+56+Milano"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-black text-sm px-4 py-3 rounded-xl transition-all duration-200 shadow-lg shadow-blue-600/20 active:scale-95 tracking-tight"
            >
              <MapPin size={15} />
              Apri in Google Maps
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}