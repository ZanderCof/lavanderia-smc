"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Shirt, Truck } from "lucide-react";
import Image from "next/image";
import camicia from "@/public/camicia_volante.png";

export function HeroLaundry() {
  return (
    <section className="relative overflow-hidden px-6 pt-32 pb-20 bg-gradient-to-b from-slate-50 to-white">
      {/* Background Blur */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-blue-100/40 blur-3xl rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="space-y-8"
        >
          <Badge className="bg-blue-50 text-blue-700 border border-blue-100 px-5 py-2 rounded-full text-xs tracking-widest uppercase font-bold w-fit">
            Lavanderia Professionale
          </Badge>

          <div className="space-y-4">
            <h1 className="text-5xl lg:text-7xl font-black leading-[0.95] tracking-tight text-slate-900">
              Cura Perfetta <br />
              Per I Tuoi <span className="text-blue-600">Capi</span>
            </h1>

            <p className="text-lg lg:text-xl text-slate-500 leading-relaxed max-w-xl">
              Lavaggio professionale di tappeti, piumoni, trapunte, capi
              delicati e pelle. Qualità, igiene e attenzione ai dettagli per
              risultati impeccabili.
            </p>
          </div>

          {/* FEATURES */}
          <div className="flex flex-col gap-4 pt-2">
            <div className="flex items-center gap-3 text-slate-700">
              <div className="w-11 h-11 rounded-2xl bg-blue-100 flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-blue-600" />
              </div>
              <span className="font-medium">
                Trattamenti professionali e igienizzanti
              </span>
            </div>

            <div className="flex items-center gap-3 text-slate-700">
              <div className="w-11 h-11 rounded-2xl bg-slate-100 flex items-center justify-center">
                <Shirt className="w-5 h-5 text-slate-700" />
              </div>
              <span className="font-medium">
                Cura specifica per ogni tessuto
              </span>
            </div>

            <div className="flex items-center gap-3 text-slate-700">
              <div className="w-11 h-11 rounded-2xl bg-blue-100 flex items-center justify-center">
                <Truck className="w-5 h-5 text-blue-600" />
              </div>
              <span className="font-medium">Servizio rapido e affidabile</span>
            </div>
          </div>

          {/* BUTTONS */}
          <div className="flex flex-wrap gap-4 pt-6">
            <Button
              size="lg"
              className="h-14 px-8 rounded-full bg-blue-600 hover:bg-blue-700 text-white text-base font-semibold shadow-xl hover:scale-105 transition-all"
            >
              Prenota Ora
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="h-14 px-8 rounded-full border-slate-300 text-slate-700 hover:bg-slate-100 text-base font-semibold"
            >
              Scopri i Servizi
            </Button>
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative h-[550px] flex items-center justify-center"
        >
          {/* CARD TOP - SOLO MOBILE */}
          <div className="absolute top-10 left-0 bg-white/90 backdrop-blur-xl border border-slate-100 shadow-2xl rounded-3xl px-6 py-5 z-30 lg:hidden">
            <p className="text-xs uppercase tracking-widest text-slate-400 font-bold">
              Qualità Garantita
            </p>
            <p className="text-lg font-black text-slate-900">
              Pulizia Professionale
            </p>
          </div>

          {/* SHIRT IMAGE */}
          <motion.div
            animate={{ y: [0, -18, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative z-20 w-full h-full"
          >
            <Image
              src={camicia}
              alt="Lavanderia Professionale"
              fill
              priority
              className="object-contain drop-shadow-[0_40px_45px_rgba(0,0,0,0.18)]"
            />
          </motion.div>

          {/* CARD BOTTOM - SOLO MOBILE */}
          <div className="absolute bottom-10 right-0 bg-white shadow-2xl rounded-3xl px-6 py-5 border border-slate-100 z-30 lg:hidden">
            <p className="text-xs uppercase tracking-widest text-slate-400 font-bold">
              Servizi
            </p>

            <div className="mt-2 space-y-1 text-sm font-semibold text-slate-700">
              <p>• Lavaggio Tappeti</p>
              <p>• Piumoni & Trapunte</p>
              <p>• Capi in Pelle</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
