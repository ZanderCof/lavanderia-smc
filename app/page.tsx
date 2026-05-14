"use client";

import { FeaturesBento } from "@/components/mycomponents/homepage/BentoGrid";
import { BusinessHours } from "@/components/mycomponents/homepage/BusinessHours";
import { HeroLaundry } from "@/components/mycomponents/homepage/HeroLaundry";
import { LocaleMap } from "@/components/mycomponents/homepage/LocaleMap";
import { Truck, MapPin, ShieldCheck } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen"> 
      <main className="flex-1 w-full">
        {/* 1. Sezione Hero principale */}
        <HeroLaundry />

        {/* 2. Sezione Servizi a Griglia (Bento) */}
        <div className="pb-12">
           <FeaturesBento />
        </div>

        {/* 3. SEZIONE BENTO: ORARI + COPERTURA SERVIZIO + MAPPA PANORAMICA */}
        <section className="max-w-7xl mx-auto px-6 pb-24">
          
          {/* RIGA 1: Divisa in 3 colonne bilanciate */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch mb-6">
            
            {/* CARD 1: Orari (Prende 1 colonna su 3) */}
            <div className="lg:col-span-1 flex">
              <BusinessHours />
            </div>

            {/* CARD 2: Copertura Servizio (Prende 2 colonne su 3) */}
            <div className="lg:col-span-2 bg-white/60 backdrop-blur-xl border border-white/40 rounded-[2.5rem] p-8 lg:p-12 shadow-xl shadow-blue-900/5 flex flex-col justify-between">
              <div className="space-y-6">
                <div className="flex items-center gap-2 text-blue-600 font-bold uppercase tracking-widest text-[10px]">
                  <MapPin size={14} />
                  <span>Copertura Servizio</span>
                </div>
                <h3 className="text-3xl lg:text-4xl font-black text-slate-900 tracking-tight leading-tight">
                  Siamo a Senago, <br />ma veniamo anche da te.
                </h3>
                <p className="text-slate-500 max-w-xl leading-relaxed font-medium">
                  Puoi portarci i tuoi capi direttamente in negozio durante gli orari di apertura, oppure richiedere il nostro <span className="text-blue-600 font-bold">Servizio a Domicilio</span> attivo in tutta la zona.
                </p>
              </div>

              {/* Mini griglia interna con i vantaggi rapidi ripristinati */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 pt-6 border-t border-slate-100">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-blue-50 text-blue-600 rounded-xl">
                    <Truck size={18} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">Ritiro Gratuito</h4>
                    <p className="text-xs text-slate-400">Sopra una soglia minima di spesa</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-emerald-50 text-emerald-600 rounded-xl">
                    <ShieldCheck size={18} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">Qualità SCM</h4>
                    <p className="text-xs text-slate-400">Trattamenti ecologici e protettivi</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGA 2: LA MAPPA PANORAMICA (Messa fuori dalla griglia sopra, a tutta larghezza) */}
          <div className="w-full">
            <LocaleMap />
          </div>

        </section>

        {/* 4. Spazio per Call to Action Finale */}
        <section className="max-w-7xl mx-auto px-6 py-16 text-center">
            <div className="bg-slate-900 rounded-[3rem] p-12 lg:p-20 text-white relative overflow-hidden">
                <div className="relative z-10">
                    <h2 className="text-4xl lg:text-5xl font-bold mb-6">Pronto a far splendere i tuoi capi?</h2>
                    <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto">
                        Unisciti a centinaia di clienti che hanno scelto la qualità di Lavasecco SCM.
                    </p>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105">
                        Inizia Ora
                    </button>
                </div>
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 blur-[100px]" />
            </div>
        </section>
      </main>
    </div>
  );
}
