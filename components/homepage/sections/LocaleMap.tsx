"use client";

import { motion } from "framer-motion";
import { ADDRESS, EMAIL, EMAIL_HREF, MAPS_URL, PHONE, PHONE_HREF, CONTACT_INFO_ICONS } from "@/lib/constants/contacts";

export function LocaleMap() {
  const infoItems = [
    {
      icon: CONTACT_INFO_ICONS.address,
      label: "Indirizzo",
      value: ADDRESS,
    },
    // {
    //   icon: CONTACT_INFO_ICONS.hours,
    //   label: "Orari",
    //   value: HOURS_SUMMARY,
    // },
    {
      icon: CONTACT_INFO_ICONS.phone,
      label: "Telefono",
      value: PHONE,
      href: PHONE_HREF,
    },
    {
      icon: CONTACT_INFO_ICONS.email,
      label: "Email",
      value: EMAIL,
      href: EMAIL_HREF,
    },
  ];

  return (
    <section className="border-y border-slate-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 lg:py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.5 }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-0 overflow-hidden rounded-2xl border border-slate-100 shadow-sm"
        >
          {/* MAPPA: Più bassa su mobile per non obbligare a uno scroll infinito */}
          <div className="lg:col-span-2 h-56 sm:h-72 lg:h-auto min-h-60 sm:min-h-80">
            <iframe
              title="LavaseccoSCM - Via A. Volta 219, Senago"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2792.5362840461125!2d9.1378355!3d45.579763!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786be2d9359dccf%3A0xb8e1f35e008c9937!2sLavasecco%20Scm%20Di%20Ceresa%20Roberta!5e0!3m2!1sit!2sit!4v1780771126697!5m2!1sit!2sit"
              width="100%"
              height="100%"
              style={{
                border: 0,
                display: "block",
              }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* INFO: Spaziature interne (padding) e distanze ridotte su mobile */}
          <div className="bg-white border-t lg:border-t-0 lg:border-l border-slate-100 p-5 sm:p-8 flex flex-col justify-center gap-4 sm:gap-6">
            <div>
              <p className="text-[10px] sm:text-xs font-black text-slate-400 uppercase tracking-widest mb-0.5">
                LavaseccoSCM
              </p>
              <p className="text-base sm:text-lg font-black text-slate-900 tracking-tight leading-tight">
                Lavanderia & Lavasecco
              </p>
            </div>

            <div className="flex flex-col gap-3.5 sm:gap-5">
              {infoItems.map((item) => {
                const Icon = item.icon;

                return (
                  <div key={item.label} className="flex gap-2.5 sm:gap-3 items-start">
                    <Icon
                      size={16}
                      className="text-blue-600 shrink-0 mt-0.5 lg:scale-110"
                    />

                    <div>
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-0.5">
                        {item.label}
                      </p>

                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-xs sm:text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors break-all"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-xs sm:text-sm font-semibold text-slate-700 whitespace-pre-line">
                          {item.value}
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Pulsante leggermente più compatto */}
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-black text-xs sm:text-sm px-4 py-2.5 sm:py-3 rounded-xl transition-all duration-200 shadow-lg shadow-blue-600/20 active:scale-95 tracking-tight"
            >
              <CONTACT_INFO_ICONS.address size={14} />
              Apri in Google Maps
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}