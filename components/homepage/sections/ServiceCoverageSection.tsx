import { MapPin, ShieldCheck, Truck } from "lucide-react";
import { BusinessHours } from "./BusinessHours";
import { LocaleMap } from "./LocaleMap";

export function ServiceCoverageSection() {
  return (

        <section className="max-w-7xl mx-auto px-6 pb-24">

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch mb-6">

            <div id="business-hours" className="lg:col-span-1 flex">
              <BusinessHours />
            </div>

            <div className="lg:col-span-2 bg-white/60 backdrop-blur-xl border border-white/40 rounded-[2.5rem] p-8 lg:p-12 shadow-xl shadow-blue-900/5 flex flex-col justify-between">

              <div className="space-y-6">

                <div id="map-pin" className="flex items-center gap-2 text-blue-600 font-bold uppercase tracking-widest text-[10px]">
                  <MapPin size={14} />
                  <span>Copertura Servizio</span>
                </div>

                <h3 className="text-3xl lg:text-4xl font-black text-slate-900 tracking-tight leading-tight">
                  Siamo a Senago, <br />ma veniamo anche da te.
                </h3>

                <p className="text-slate-500 max-w-max leading-relaxed font-medium pb-8">
                  Puoi portarci i tuoi capi in negozio oppure attivare il{" "}
                  <span className="text-blue-600 font-bold">
                    Servizio a Domicilio
                  </span>{" "}
                  in tutta la zona.
                </p>

                {/* 🚀 PREMIUM BANNER */}
                <div className="relative overflow-hidden rounded-3xl bg-linear-to-r from-blue-600 via-sky-500 to-cyan-400 p-5 shadow-lg shadow-blue-900/10 ">

                  <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/20 rounded-full blur-3xl" />
                  <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-white/10 rounded-full blur-3xl" />

                  <div className="relative flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">

                    <div className="space-y-2 items-center">
                      <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-white border border-white/20">
                        <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                        Servizio Premium
                      </div>

                      <p className="text-base font-bold text-white">
                        Ritiro e Consegna a Domicilio
                      </p>

                      <p className="text-white/80 text-sm">
                        Stiamo finalizzando il servizio per offrirti la massima comodità.
                      </p>
                    </div>

                    <div className="flex items-center gap-3 rounded-2xl bg-white/15 backdrop-blur-xl border border-white/20 px-5 py-3">

                      <Truck size={18} className="text-white" />

                      <div className="leading-tight">
                        <span className="text-[11px] uppercase tracking-[0.15em] font-semibold text-white/80">
                          Stato Servizio
                        </span>

                        <p className="text-sm font-black text-white tracking-wide">
                          IN ARRIVO PRESTO
                        </p>
                      </div>

                    </div>

                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-slate-100">

                <div className="flex items-start justify-center gap-3 ">
                  <div className="p-2 bg-blue-50 text-blue-600 rounded-xl">
                    <Truck size={18} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">
                      Ritiro Gratuito
                    </h4>
                    <p className="text-xs text-slate-400">
                      Sopra soglia minima
                    </p>
                  </div>
                </div>

                <div className="flex items-start justify-center gap-3">
                  <div className="p-2 bg-emerald-50 text-emerald-600 rounded-xl">
                    <ShieldCheck size={18} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">
                      Qualità SCM
                    </h4>
                    <p className="text-xs text-slate-400">
                      Trattamenti ecologici
                    </p>
                  </div>
                </div>

              </div>

            </div>
          </div>

          <div className="w-full">
            <LocaleMap />
          </div>

        </section>
  );
}