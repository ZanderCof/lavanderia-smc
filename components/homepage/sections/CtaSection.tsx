"use client";

import Image from "next/image";

export function CtaSection() {
  return (
    <section className="max-w-5xl mx-auto px-6 pt-6 pb-20 ">
      <div className="relative overflow-hidden rounded-[40px] bg-slate-900 text-white ">
        
        {/* Glow effects */}
        <div className="absolute -top-20 -right-20 h-80 w-80 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl" />

        <div className="relative z-10 grid lg:grid-cols-2 items-center gap-12 p-8 md:p-12 lg:p-16">
          
          {/* Testi */}
          <div className="text-center lg:text-left">
            <span className="inline-flex mb-6 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-300">
              Lavanderia Premium
            </span>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Pronto a far{" "}
              <span className="text-blue-400">
                splendere
              </span>{" "}
              i tuoi capi?
            </h2>

            <p className="mt-6 text-lg text-slate-300 max-w-xl">
              Affidaci i tuoi tessuti più preziosi. Trattamenti professionali,
              attenzione ai dettagli e risultati impeccabili ad ogni lavaggio.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-full font-semibold text-lg transition-all hover:scale-105 shadow-lg shadow-blue-600/25">
                Inizia Ora
              </button>

              <button className="border border-slate-700 hover:border-slate-500 px-8 py-4 rounded-full font-semibold text-lg transition">
                Scopri i Servizi
              </button>
            </div>
          </div>

          {/* Immagine */}
          <div className="flex justify-center lg:justify-end lg:pr-12 pb-5 lg:pb-0">
            <div className="relative">
              <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full" />

              <Image
                src="/Roberta_Vetrina.png"
                alt="Roberta"
                width={420}
                height={700}
                className="relative z-10 object-contain drop-shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}