"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

const OP_HOURS = {
  1: { open: "08:30", close: "19:30" },
  2: { open: "08:30", close: "19:30" },
  3: { open: "08:30", close: "19:30" },
  4: { open: "08:30", close: "19:30" },
  5: { open: "08:30", close: "19:30" },
  6: { open: "08:30", close: "13:00" },
  0: null,
};

export default function OpenStatus() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const checkOpenStatus = () => {
      const now = new Date();
      const day = now.getDay();

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
    const interval = setInterval(checkOpenStatus, 60000);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isOpen ? (
        <motion.div
          key="open"
          className="flex items-center gap-2 bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full border border-emerald-100 text-xs font-bold"
        >
          <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
          Aperto Ora
        </motion.div>
      ) : (
        <motion.div
          key="closed"
          className="flex items-center gap-2 bg-rose-50 text-rose-700 px-2 py-1 rounded-full border border-rose-100 text-xs font-bold"
        >
          <span className="w-2 h-2 bg-rose-500 rounded-full" />
          Chiuso Ora
        </motion.div>
      )}
    </AnimatePresence>
  );
}