import { Shirt, Sparkles, Truck, Gem, WashingMachine } from "lucide-react";

export type HeroBubbleColor =
  | "blue"
  | "white"
  | "premium";

export type HeroBubble = {
  label: string;
  color: HeroBubbleColor;
};

export const HERO_BUBBLES: readonly HeroBubble[] = [
  { label: "Igienizzazione", color: "blue" },
  { label: "Piumoni", color: "white" },
  { label: "Tappeti", color: "blue" },
  { label: "Pelle", color: "white" },
  { label: "Abiti da Cerimonia", color: "premium"},
];

export const HERO_FEATURES = [
  {
    icon: Sparkles,
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
    text: "Trattamenti igienizzanti premium",
  },
  {
    icon: Shirt,
    iconBg: "bg-slate-100",
    iconColor: "text-slate-700",
    text: "Cura specifica per ogni tessuto",
  },
  {
    icon: Truck,
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
    text: "Servizio rapido e affidabile",
  },
  {
    icon: Gem,
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
    text: "Specialisti negli Abiti da Cerimonia",
  },
];

export const HOMEPAGE_FEATURES = [
  {
    title: "Lavaggio a Secco",
    description: "Trattamento delicato per capi pregiati.",
    icon: Shirt,
    iconColor: "text-amber-600",
    cardColor: "bg-amber-500/10 border-amber-500/20",
  },
  {
    title: "Lavaggio Tradizionale",
    description: "Pulizia profonda per i tuoi capi quotidiani.",
    icon: WashingMachine,
    iconColor: "text-blue-600",
    cardColor: "bg-blue-500/10 border-blue-500/20",
  },
  {
    title: "Consegna Express",
    description: "Ritiriamo e consegniamo dove vuoi tu.",
    icon: Truck,
    iconColor: "text-green-600",
    cardColor: "bg-green-500/10 border-green-500/20",
  },
  {
    title: "Eco Friendly",
    description: "Usiamo solo prodotti biodegradabili.",
    icon: Sparkles,
    iconColor: "text-purple-600",
    cardColor: "bg-purple-500/10 border-purple-500/20",
  },
];