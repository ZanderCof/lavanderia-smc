"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play } from "lucide-react";

export function HeroLaundry() {
  return (
    <section className="relative pt-32 pb-16 px-6 overflow-hidden bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <Badge className="bg-blue-100 text-blue-600 border-none px-4 py-1 rounded-full text-sm font-semibold uppercase tracking-wider">
            ✨ Professional Cleaning Service
          </Badge>
          
          <h1 className="text-6xl lg:text-7xl font-black text-slate-900 leading-[1.1] tracking-tight">
            Refresh Your <br /> 
            <span className="text-blue-600">Wardrobe</span> Daily.
          </h1>
          
          <p className="text-xl text-slate-500 max-w-lg leading-relaxed font-medium">
            Servizio professionale di lavanderia e stireria con ritiro e consegna a domicilio in 24 ore.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 h-14 text-lg shadow-xl shadow-blue-200">
              Prenota Ora
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-6 h-14 text-lg border-2 border-slate-200 group">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-2 group-hover:bg-blue-200 transition-colors">
                <Play size={16} className="text-blue-600 fill-blue-600" />
              </div>
              Come Funziona
            </Button>
          </div>
        </motion.div>

        {/* Hero Visual - Bento Style */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative grid grid-cols-2 gap-4 h-125"
        >
          <div className="rounded-[2.5rem] bg-blue-600 overflow-hidden shadow-2xl relative">
             <div className="absolute inset-0 bg-[url('https://unsplash.com')] bg-cover bg-center mix-blend-overlay opacity-60" />
          </div>
          <div className="grid gap-4">
            <div className="rounded-[2rem] bg-amber-100 overflow-hidden relative">
               <div className="absolute inset-0 bg-[url('https://unsplash.com')] bg-cover bg-center" />
            </div>
            <div className="rounded-[2rem] bg-slate-900 flex flex-col justify-end p-8 text-white">
              <span className="text-3xl font-bold">24h</span>
              <p className="text-slate-400 text-sm">Turnaround Time</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
