"use client";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Sparkles } from "lucide-react";

export function AboutHero() {
  return (
    <section className="relative pt-32 pb-12 px-6 overflow-hidden">
      <div className="max-w-4xl mx-auto text-center space-y-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center"
        >
          <Badge className="bg-blue-50 text-blue-600 border border-blue-100 px-4 py-1 rounded-full text-sm font-semibold uppercase tracking-wider">
            <Sparkles size={14} className="mr-1.5 text-blue-500 animate-pulse" />
            La Nostra Passione
          </Badge>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl lg:text-7xl font-black text-slate-900 tracking-tighter leading-tight"
        >
          Ci prendiamo cura dei tuoi capi, <br />
          <span className="text-blue-600">come faresti tu.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed font-medium"
        >
          Dal lavaggio a secco tradizionale alle più moderne tecniche ecologiche. 
          Scopri la storia e i valori di Lavasecco SCM a Senago.
        </motion.p>
      </div>
    </section>
  );
}
