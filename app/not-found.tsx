"use client";

import { motion } from "framer-motion";
import { WashingMachine, ArrowLeft, Home } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="mt-20 flex flex-col items-center justify-center min-h-[80vh] px-6 text-center">
      {/* Animazione della lavatrice che "shakerà" per l'errore */}
      <motion.div
        animate={{ 
          rotate: [0, -10, 10, -10, 0],
          y: [0, -5, 0]
        }}
        transition={{ 
          duration: 0.5, 
          repeat: Infinity, 
          repeatDelay: 2 
        }}
        className="relative mb-8"
      >
        <div className="bg-blue-100 p-8 rounded-[2.5rem] relative z-10">
          <WashingMachine size={80} className="text-blue-600" strokeWidth={1.5} />
        </div>
        {/* Ombra soffusa sotto */}
        <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-20 h-4 bg-slate-200 blur-xl rounded-full -z-10" />
      </motion.div>

      {/* Testo dell'errore */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="space-y-4"
      >
        <h1 className="text-8xl font-black text-slate-900 tracking-tighter">
          4<span className="text-blue-600">0</span>4
        </h1>
        <h2 className="text-2xl font-bold text-slate-800">
          Ops! Questa pagina è finita in centrifuga.
        </h2>
        <p className="text-slate-500 max-w-md mx-auto leading-relaxed">
          Sembra che il link che stai cercando sia stato lavato via o non sia mai esistito. Non preoccuparti, ti riportiamo noi all&apos;asciutto.
        </p>
      </motion.div>

      {/* Pulsanti di azione */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="flex flex-col sm:flex-row gap-4 mt-12"
      >
        <Link href="/">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 h-14 font-bold shadow-lg shadow-blue-200 transition-all hover:scale-105">
            <Home size={18} className="mr-2" />
            Torna alla Home
          </Button>
        </Link>
        
        <Button 
          variant="outline" 
          onClick={() => window.history.back()}
          className="rounded-full px-8 h-14 font-bold border-2 border-slate-200 hover:bg-slate-50 transition-all"
        >
          <ArrowLeft size={18} className="mr-2" />
          Torna indietro
        </Button>
      </motion.div>

      {/* Elementi decorativi (le bolle che abbiamo usato nello sfondo) */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-64 h-64 bg-blue-100/50 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-cyan-100/40 rounded-full blur-3xl" />
      </div>
    </div>
  );
}
