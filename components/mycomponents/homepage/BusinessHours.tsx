"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Clock, Sparkles } from "lucide-react";

// Configurazione degli orari (Modifica qui i tuoi orari reali)
const OP_HOURS = {
  // 1 = Lunedì, 2 = Martedì, ..., 6 = Sabato, 0 = Domenica
  1: { open: "08:30", close: "19:30" },
  2: { open: "08:30", close: "19:30" },
  3: { open: "08:30", close: "19:30" },
  4: { open: "08:30", close: "19:30" },
  5: { open: "08:30", close: "19:30" },
  6: { open: "08:30", close: "13:00" }, // Sabato mezza giornata
  0: null, // Domenica chiuso
};

const DAYS_NAMES = ["Domenica", "Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì", "Sabato"];

export function BusinessHours() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentDay, setCurrentDay] = useState<number | null>(null);

  useEffect(() => {
    const checkOpenStatus = () => {
      const now = new Date();
      const day = now.getDay(); // 0-6
      setCurrentDay(day);

      const todayHours = OP_HOURS[day as keyof typeof OP_HOURS];
      if (!todayHours) {
        setIsOpen(false);
        return;
      }

      const currentTime = now.getHours() * 100 + now.getMinutes();
      const [openH, openM] = todayHours.open.split(":").map(Number);
      const [closeH, closeM] = todayHours.close.split(":").map(Number);

      const openTime = openH * 100 + openM;
      const closeTime = closeH * 100 + closeM;

      setIsOpen(currentTime >= openTime && currentTime <= closeTime);
    };

    checkOpenStatus();
    const interval = setInterval(checkOpenStatus, 60000); // Controlla ogni minuto
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white/60 backdrop-blur-xl border border-white/40 rounded-[2.5rem] p-8 shadow-xl shadow-blue-900/5 max-w-md w-full">
      <div className="flex justify-between items-start mb-6">
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-slate-500 font-bold uppercase tracking-widest text-[10px]">
            <Clock size={12} className="text-blue-500" />
            <span>Orari di Lavoro</span>
          </div>
          <h3 className="text-2xl font-black text-slate-900 tracking-tight">Quando Trovarci</h3>
        </div>

        {/* INDICATORE DINAMICO APERTO/CHIUSO */}
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="open"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="flex items-center gap-2 bg-emerald-50 text-emerald-700 px-4 py-1.5 rounded-full border border-emerald-100 text-xs font-bold"
            >
              <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.6)]" />
              Aperto Ora
            </motion.div>
          ) : (
            <motion.div
              key="closed"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="flex items-center gap-2 bg-rose-50 text-rose-700 px-4 py-1.5 rounded-full border border-rose-100 text-xs font-bold"
            >
              <span className="w-2 h-2 bg-rose-500 rounded-full" />
              Chiuso
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* LISTA GIORNI DELLA SETTIMANA */}
      <div className="space-y-3">
        {DAYS_NAMES.map((name, index) => {
          // Sposta la domenica alla fine della lista visiva per comodità italiana
          const adjustedIndex = index === 0 ? 0 : index; 
          const hours = OP_HOURS[adjustedIndex as keyof typeof OP_HOURS];
          const isToday = currentDay === adjustedIndex;

          return (
            <div
              key={name}
              className={`flex justify-between items-center py-2 px-3 rounded-xl transition-all ${
                isToday 
                  ? "bg-blue-50/70 border border-blue-100 text-blue-900 font-bold scale-[1.02]" 
                  : "text-slate-600 font-medium text-sm"
              }`}
            >
              <div className="flex items-center gap-2">
                {name}
                {isToday && <span className="text-[9px] bg-blue-600 text-white font-black px-1.5 py-0.5 rounded-md uppercase tracking-wider">Oggi</span>}
              </div>
              <div className="text-right">
                {hours ? (
                  <span>{hours.open} - {hours.close}</span>
                ) : (
                  <span className="text-slate-400 italic text-xs">Chiuso</span>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* FOOTER DELLA CARD CON AVVISO RAPIDO */}
      <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-3 text-xs text-slate-400 leading-relaxed font-medium">
        <Sparkles size={16} className="text-amber-500 shrink-0" />
        <p>I tempi di consegna standard per lavaggio e stiratura sono di 24/48 ore.</p>
      </div>
    </div>
  );
}
