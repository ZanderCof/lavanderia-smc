"use client";

import { FeaturesBento } from "@/components/mycomponents/homepage/BentoGrid";
import { HeroLaundry } from "@/components/mycomponents/homepage/HeroLaundry";



export default function Home() {
  return (
    // Rimosso max-w-3xl per permettere alla navbar e alla hero di respirare a pieno schermo
    <div className="flex flex-col min-h-screen "> 
      
      <main className="flex-1 w-full">
        {/* Sezione Hero principale */}
        <HeroLaundry />

        {/* Sezione Servizi a Griglia (Bento) */}
        <div className="pb-24">
           <FeaturesBento />
        </div>

        {/* Spazio per altre sezioni future (Recensioni, FAQ, etc.) */}
        <section className="max-w-7xl mx-auto px-6 py-16 text-center">
            <div className="bg-slate-900 rounded-[3rem] p-12 lg:p-20 text-white relative overflow-hidden">
                <div className="relative z-10">
                    <h2 className="text-4xl lg:text-5xl font-bold mb-6">Pronto a far splendere i tuoi capi?</h2>
                    <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto">
                        Unisciti a centinaia di clienti a Senago che hanno scelto la qualità di Lavasecco SCM.
                    </p>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105">
                        Inizia Ora
                    </button>
                </div>
                {/* Effetto luce soffusa sullo sfondo della card nera */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 blur-[100px]" />
            </div>
        </section>
      </main>

    </div>
  );
}
