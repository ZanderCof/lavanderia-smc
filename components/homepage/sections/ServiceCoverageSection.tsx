import { MapPin, ShieldCheck, Truck, MessageSquare } from "lucide-react";
import { BusinessHours } from "./BusinessHours";
import { LocaleMap } from "./LocaleMap";

export function ServiceCoverageSection() {
  return (
    <section className="max-w-7xl mx-auto px-6">

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch mb-6">

        <div id="business-hours" className="lg:col-span-1 flex">
          <BusinessHours />
        </div>

        <div className="lg:col-span-2 bg-white/60 backdrop-blur-xl border border-white/40 rounded-[2.5rem] p-8 lg:p-11 shadow-xl shadow-blue-900/5 flex flex-col justify-between">

          <div className="space-y-6">

            {/* BADGE CATEGORIA */}
            <div
              id="service-coverage"
              className="flex items-center gap-2 text-blue-600 font-bold uppercase tracking-widest text-[10px]"
            >
              <MapPin size={14} className="animate-bounce" />
              <span>Copertura Servizio</span>
            </div>

            {/* TITOLO PRINCIPALE */}
            <h3 className="text-3xl lg:text-4xl font-black text-slate-900 tracking-tight leading-none">
              Siamo a Senago, <br />
              <span className="bg-linear-to-r from-blue-600 to-sky-500 bg-clip-text text-transparent">
                ma veniamo anche da te.
              </span>
            </h3>

            <p className="text-slate-500 max-w-2xl text-sm lg:text-base leading-relaxed font-medium">
              Puoi portarci i tuoi capi in negozio oppure attivare il{" "}
              <span className="text-blue-600 font-bold border-b-2 border-blue-100 pb-0.5">
                Servizio a Domicilio
              </span>{" "}
              in tutta la zona.
            </p>
            
            {/* ALERT GESTIONALE WHATSAPP - STILE PREMIUM/WHATSAPP */}
            <div className="relative overflow-hidden flex flex-col sm:flex-row items-start sm:items-center gap-4 bg-emerald-50/40 border border-emerald-100/70 rounded-3xl p-4 max-w-2xl transition-all duration-300 hover:bg-emerald-50/60">
              <div className="p-2.5 bg-emerald-500 text-white rounded-2xl shadow-md shadow-emerald-500/20 shrink-0">
                <MessageSquare size={20} />
              </div>
              
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-[9px] font-black uppercase tracking-wider bg-emerald-600 text-white px-1.5 py-0.5 rounded-md">
                    Gestionale Smart
                  </span>
                  <span className="text-xs font-bold text-slate-700">Ritiro senza pensieri</span>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed font-medium">
                  Niente chiamate o attese: il nostro sistema ti invia un <strong className="text-emerald-700 font-bold">messaggio WhatsApp automatico</strong> non appena i tuoi capi sono lavati, stirati e pronti.
                </p>
              </div>
            </div>

            {/* PREMIUM BANNER */}
            <div className="relative overflow-hidden rounded-3xl bg-linear-to-r from-blue-600 via-sky-500 to-cyan-400 p-6 shadow-lg shadow-blue-900/10">

              <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/20 rounded-full blur-3xl" />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-white/10 rounded-full blur-3xl" />

              <div className="relative flex flex-col sm:flex-row items-start sm:items-center lg:justify-between justify-center gap-4">

                <div className="space-y-1.5">
                  <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-white border border-white/20">
                    <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                    Servizio Premium
                  </div>

                  <p className="text-base font-black text-white tracking-tight">
                    Ritiro e Consegna a Domicilio
                  </p>

                  <p className="text-white/80 text-xs font-medium max-w-md">
                    Stiamo finalizzando il servizio per offrirti la massima comodità direttamente a casa tua.
                  </p>
                </div>

                <div className="ml-auto sm:ml-0 shrink-0 flex items-center gap-3 rounded-2xl bg-white/15 backdrop-blur-xl border border-white/20 px-5 py-3">
                  <Truck size={18} className="text-white" />
                  <div className="leading-tight">
                    <span className="text-[10px] uppercase tracking-[0.15em] font-bold text-white/70 block">
                      Stato Servizio
                    </span>
                    <p className="text-xs font-black text-white tracking-wide uppercase">
                      In arrivo presto
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* CARATTERISTICHE FOOTER */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 border-t border-slate-100 pt-6 mt-8">

            <div className="flex items-center gap-3.5 group">
              <div className="p-3 bg-indigo-50 text-indigo-600 rounded-2xl shrink-0 transition-colors group-hover:bg-indigo-100">
                <Truck size={18} />
              </div>
              <div>
                <h4 className="font-bold text-slate-800 text-sm tracking-tight">
                  Ritiro Gratuito
                </h4>
                <p className="text-xs text-slate-400 font-medium">
                  Sopra soglia minima
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3.5 group">
              <div className="p-3 bg-emerald-50 text-emerald-600 rounded-2xl shrink-0 transition-colors group-hover:bg-emerald-100">
                <MessageSquare size={18} />
              </div>
              <div>
                <h4 className="font-bold text-slate-800 text-sm tracking-tight">
                  Notifiche istantanee
                </h4>
                <p className="text-xs text-slate-400 font-medium">
                  SMS & WhatsApp pronti
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3.5 group">
              <div className="p-3 bg-sky-50 text-sky-600 rounded-2xl shrink-0 transition-colors group-hover:bg-sky-100">
                <ShieldCheck size={18} />
              </div>
              <div>
                <h4 className="font-bold text-slate-800 text-sm tracking-tight">
                  Qualità Certificata
                </h4>
                <p className="text-xs text-slate-400 font-medium">
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