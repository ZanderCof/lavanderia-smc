import OpenStatus from "@/components/ui/openStatus";
import { OP_HOURS } from "@/components/ui/hoursTable";
import { Clock, Sparkles } from "lucide-react";

export function BusinessHours() {
  return (
    <div className="bg-white/60 backdrop-blur-xl border border-white/40 rounded-[2.5rem] p-8 shadow-xl shadow-blue-900/5 max-w-md w-full">

      {/* HEADER */}
      <div className="flex justify-between items-start mb-6">
        <div className="space-y-3 pt-2">
          <div className="flex items-center gap-2 text-slate-500 font-bold uppercase tracking-widest text-[10px]">
            <Clock size={12} className="text-blue-500" />
            <span>Orari di Lavoro</span>
          </div>

          <h3 className="text-2xl font-black text-slate-900 tracking-tight">
            Quando Trovarci
          </h3>
        </div>

        {/* STATUS DINAMICO */}
        <OpenStatus />
      </div>

      {/* LISTA GIORNI DELLA SETTIMANA */}
      <div className="space-y-3">
        {[
          "Domenica",
          "Lunedì",
          "Martedì",
          "Mercoledì",
          "Giovedì",
          "Venerdì",
          "Sabato",
        ].map((name, index) => {

          const hours = OP_HOURS[index as keyof typeof OP_HOURS];
          const now = new Date();
          const isToday = now.getDay() === index;

          return (
            <div
              key={name}
              className={`flex justify-between items-center py-2 px-3 rounded-xl transition-all ${isToday
                  ? "bg-blue-50/70 border border-blue-100 text-blue-900 font-bold scale-[1.02]"
                  : "text-slate-600 font-medium text-sm"
                }`}
            >
              <div className="flex items-center gap-2">
                {name}
                {isToday && (
                  <span className="text-[9px] bg-blue-600 text-white font-black px-1.5 py-0.5 rounded-md uppercase tracking-wider">
                    Oggi
                  </span>
                )}
              </div>

              <div className="text-right">
                {hours ? (
                  <span>
                    {hours.open} - {hours.close}
                  </span>
                ) : (
                  <span className="text-slate-400 italic text-xs">
                    Chiuso
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* FOOTER */}
      <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-3 text-xs text-slate-400 leading-relaxed font-medium">
        <Sparkles size={16} className="text-amber-500 shrink-0" />
        <p>
          I tempi di consegna standard per lavaggio e stiratura sono di 24/48 ore.
        </p>
      </div>
    </div>
  );
}