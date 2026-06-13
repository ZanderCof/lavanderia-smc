"use client";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Info, Sparkles } from "lucide-react";

export function PricingHeader() {
  return (
    <section className="relative pt-32 pb-8 px-6 overflow-hidden">
      <div className="max-w-4xl mx-auto text-center space-y-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex justify-center"
        >
          <Badge className="bg-blue-50 text-blue-600 border border-blue-100 px-4 py-1 rounded-full text-sm font-semibold uppercase tracking-wider">
            <Sparkles size={14} className="mr-1.5 text-blue-500 animate-pulse" />
            Trasparenza Garantita
          </Badge>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl lg:text-7xl font-black text-slate-900 tracking-tighter leading-tight"
        >
          Prezzi chiari, <br />
          <span className="text-blue-600">senza sorprese.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed font-medium"
        >
          Trattamenti professionali artigianali per ogni tipo di tessuto. 
          Se non trovi un capo specifico nel listino, contattaci direttamente!
        </motion.p>

        {/* Avviso standard di consegna */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="inline-flex items-center gap-3 bg-blue-50/50 backdrop-blur border border-blue-100 p-4 rounded-2xl max-w-md text-left text-xs text-blue-800 font-medium leading-relaxed"
        >
          <Info size={20} className="text-blue-500 shrink-0" />
          <span>I tempi medi di riconsegna variano da 24 a 48 ore. Per capi speciali o abiti da cerimonia potrebbero essere necessari tempi superiori.</span>
        </motion.div>
      </div>
    </section>
  );
}
