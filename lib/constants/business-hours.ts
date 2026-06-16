export const OP_HOURS = {
  1: { open: "08:30", close: "19:30" },
  2: { open: "08:30", close: "19:30" },
  3: { open: "08:30", close: "19:30" },
  4: { open: "08:30", close: "19:30" },
  5: { open: "08:30", close: "19:30" },
  6: { open: "08:30", close: "13:00" },
  0: null,
} as const;

export const WEEK_DAYS = [
  "Domenica",
  "Lunedì",
  "Martedì",
  "Mercoledì",
  "Giovedì",
  "Venerdì",
  "Sabato",
] as const;

export const HOURS_SUMMARY =
  "Lun–Ven 08:30–19:30\nSabato 08:30–13:00";