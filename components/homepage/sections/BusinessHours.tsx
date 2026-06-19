import OpenStatus from "@/components/ui/OpenStatus";
// MODIFICA QUI: Importa anche WEEK_DAYS
import { OP_HOURS, WEEK_DAYS } from "@/lib/constants/business-hours"; 
import { Clock, Sparkles } from "lucide-react";

export function BusinessHours() {
  const cardClass =
    "bg-white/60 backdrop-blur-xl border border-white/40 rounded-[2.5rem] shadow-xl shadow-blue-900/5";

  const now = new Date().getDay();

  return (
    <div className={`${cardClass} p-8 max-w-md w-full mx-auto lg:mx-0 mb-10 lg:mb-0`}>
      {/* HEADER */}
      <div className="flex justify-between items-start gap-4 mb-6">
        <div className="space-y-3 pt-2">
          <div className="flex items-center gap-2 text-slate-500 font-bold uppercase tracking-widest text-[10px]">
            <Clock size={12} className="text-blue-500" />
            <span>Orari di Lavoro</span>
          </div>

          <h3 className="text-2xl font-black text-slate-900 tracking-tight">
            Quando Trovarci
          </h3>
        </div>

        <OpenStatus />
      </div>

      {/* LISTA GIORNI */}
      <div className="space-y-3">
        {WEEK_DAYS.map((name, index) => {
          const hours = OP_HOURS[index];
          const isToday = now === index;

          return (
            <div
              key={name}
              className={`flex justify-between items-center py-2 px-3 rounded-xl transition-all ${
                isToday
                  ? "bg-blue-50/70 border border-blue-100 text-blue-900 font-bold shadow-sm shadow-blue-200/50"
                  : "text-slate-600 font-medium text-sm"
              }`}
            >
              <div className="flex items-center gap-2">
                {name}

                {isToday && (
                  <span className="text-[9px] bg-blue-600 text-white font-bold px-1.5 py-0.5 rounded-md uppercase tracking-wider">
                    Oggi
                  </span>
                )}
              </div>

              {hours ? (
                <div className="text-right text-sm">
                  {hours.morning && (
                    <div>
                      {hours.morning.open} - {hours.morning.close}
                    </div>
                  )}

                  {hours.afternoon && (
                    <div>
                      {hours.afternoon.open} - {hours.afternoon.close}
                    </div>
                  )}
                </div>
              ) : (
                <span className="text-slate-400 italic text-xs">
                  Chiuso
                </span>
              )}
            </div>
          );
        })}
      </div>

      {/* FOOTER */}
      <div className="mt-8 pt-5 border-t border-slate-100 flex items-center gap-3 text-xs text-slate-400 leading-relaxed font-medium">
        <Sparkles size={16} className="text-amber-500 shrink-0" />
        <p>
          I tempi di consegna standard per lavaggio e stiratura sono di 48 ore.
        </p>
      </div>
    </div>
  );
}