type TimeSlot = {
  open: string;
  close: string;
};

type DayHours = {
  morning: TimeSlot | null;
  afternoon: TimeSlot | null;
};

// AGGIUNGI QUESTO ARRAY (L'ordine 0-6 è: Domenica, Lunedì, Martedì...)
export const WEEK_DAYS = [
  "Domenica",
  "Lunedì",
  "Martedì",
  "Mercoledì",
  "Giovedì",
  "Venerdì",
  "Sabato",
];

export const OP_HOURS: Record<number, DayHours | null> = {
  0: null, // Domenica (Chiuso)
  1: { morning: null, afternoon: { open: "15:00", close: "19:00" } }, // Lunedì
  2: { morning: { open: "08:30", close: "12:30" }, afternoon: { open: "15:00", close: "19:00" } },
  3: { morning: { open: "08:30", close: "12:30" }, afternoon: { open: "15:00", close: "19:00" } },
  4: { morning: { open: "08:30", close: "12:30" }, afternoon: { open: "15:00", close: "19:00" } },
  5: { morning: { open: "08:30", close: "12:30" }, afternoon: { open: "15:00", close: "19:00" } },
  6: { morning: { open: "08:30", close: "12:30" }, afternoon: null }, // Sabato
};

export const HOURS_SUMMARY =
  "Lun–Ven 08:30–19:30\nSabato 08:30–13:00";