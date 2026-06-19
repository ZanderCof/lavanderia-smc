"use client";

import Image from "next/image";

export function CtaSection() {
  return (
    <section className="max-w-5xl mx-auto px-6 pt-6 pb-20">
      <div className="relative overflow-hidden rounded-[40px] bg-slate-900 text-white">
        {/* Glow effects */}
        <div className="absolute -top-20 -right-20 h-80 w-80 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl" />

        {/* 💡 FIX 1: items-stretch garantisce che le due colonne abbiano la stessa altezza di partenza */}
        <div className="relative z-10 grid lg:grid-cols-2 items-stretch gap-12 p-8 md:p-12 lg:p-16">
          
          {/* Testi */}
          {/* 💡 FIX 2: flex e justify-center tengono il testo centrato verticalmente senza farlo saltare al caricamento dell'immagine */}
          <div className="text-center lg:text-left flex flex-col justify-center">
            <div>
              <span className="inline-flex mb-6 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-300">
                Lavanderia Premium
              </span>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Pronto a far <span className="text-blue-400">splendere</span> i tuoi capi?
              </h2>

              {/* 💡 Il div che PageSpeed indicava come instabile ora è protetto dentro la struttura flex flessibile */}
              <div className="flex flex-col gap-3 pt-1 max-w-lg mx-auto lg:mx-0">
                <p className="mt-6 text-lg text-slate-300 leading-relaxed">
                  Affidaci i tuoi tessuti più preziosi. Trattamenti professionali,
                  attenzione ai dettagli e risultati impeccabili ad ogni lavaggio.
                </p>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-full font-semibold text-lg transition-all hover:scale-105 shadow-lg shadow-blue-600/25">
                  Inizia Ora
                </button>

                <button className="border border-slate-700 hover:border-slate-500 px-8 py-4 rounded-full font-semibold text-lg transition">
                  Scopri i Servizi
                </button>
              </div>
            </div>
          </div>

          {/* Immagine */}
          <div className="flex justify-center lg:justify-end lg:pr-12 pb-5 lg:pb-0 items-center">
            {/* 💡 FIX 3: Abbiamo definito un aspect ratio statico (420/700 equivale a aspect-[3/5]) 
                e usato le classi responsive di Tailwind corrispondenti al tuo max-w-105 (ovvero 420px).
                Il browser sa già lo spazio esatto che occuperà l'immagine prima ancora di scaricarla. */}
            <div className="relative w-full max-w-105 aspect-3/5 shrink-0">
              <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full" />
              <Image
                src="/Roberta_Vetrina.png"
                alt="Roberta"
                fill // 💡 Sostituito width e height con fill per farlo agganciare all'aspect-ratio del div padre
                priority
                sizes="(max-width: 480px) 100vw, 420px"
                className="object-contain drop-shadow-2xl"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}