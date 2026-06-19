import { Phone, MessageCircle, Mail, MapPin, Clock, } from "lucide-react";

export const BUSINESS_NAME = "LavaseccoSCM";
export const BUSINESS_SUBTITLE = "Lavanderia & Lavasecco";

export const PHONE = "+39 02 99050084";
export const PHONE_HREF = "tel:+390299050084";

export const EMAIL = "lavasecco.scm@gmail.com";
export const EMAIL_HREF = "mailto:lavasecco.scm@gmail.com";

export const WHATSAPP = "393274346729";
export const WHATSAPP_HREF = `https://wa.me/${WHATSAPP}`;

export const ADDRESS = "Via A. Volta 219, 20030 Senago (MI)";
export const MAPS_URL = "https://maps.google.com/?q=Via+A.+Volta+219+Senago";

export const VAT = "1147860151";

export const CONTACT_ACTIONS = [
  {
    icon: Phone,
    href: PHONE_HREF,
    label: "Chiama",
    color: "from-blue-500 to-blue-700",
  },
  {
    icon: MessageCircle,
    href: WHATSAPP_HREF,
    label: "WhatsApp",
    color: "from-emerald-400 to-emerald-600",
  },
  /*{
    *icon: Mail,
    href: EMAIL_HREF,
    label: "Email",
    color: "from-slate-600 to-slate-800",
  },*/
];

export const CONTACT_INFO_ICONS = {
  address: MapPin,
  hours: Clock,
  phone: Phone,
  email: Mail,
};