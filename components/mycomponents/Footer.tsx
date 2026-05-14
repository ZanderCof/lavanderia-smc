"use client";

import { Mail, MapPin, Phone, ArrowRight, FileText } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import logo_lavanderia from "@/public/logo_lavanderia.png";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const sections = [
    {
      title: "Servizi",
      links: [
        { name: "Lavaggio a secco", href: "/servizi" },
        { name: "Lavanderia Self", href: "/servizi" },
        { name: "Stireria professionale", href: "/servizi" },
        { name: "Abiti da Cerimonia", href: "/cerimonia" },
      ],
    },
    {
      title: "Supporto",
      links: [
        { name: "Listino Prezzi", href: "/prezzi" },
        { name: "Chi Siamo", href: "/chi-siamo" },
        { name: "Contattaci", href: "/contatti" },
      ],
    },
    {
      title: "Legale",
      links: [
        { name: "Privacy Policy", href: "/privacy" },
      ],
    },
  ];

  return (
    <footer className="relative bg-slate-50/50 border-t border-slate-100 overflow-hidden font-sans">
      {/* Decorazione "Bolle" soffuse */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-100/40 rounded-full blur-[120px] -z-10 -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-cyan-100/30 rounded-full blur-[100px] -z-10 translate-y-1/2 translate-x-1/2" />
      
      <div className="container mx-auto px-6 max-w-7xl pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          
          {/* LOGO & INFO */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="flex items-center gap-3 group w-fit">
              <div className="relative w-10 h-10 transition-transform group-hover:scale-110">
                 <Image
                    src={logo_lavanderia}
                    fill
                    className="object-contain"
                    alt="Logo Lavanderia"
                  />
              </div>
              <span className="text-2xl font-bold tracking-tight text-slate-900">
                Lavasecco<span className="text-blue-600">SCM</span>
              </span>
            </Link>
            <p className="text-slate-500 max-w-sm leading-relaxed text-sm">
              Diamo nuova vita ai tuoi capi con tecnologie all&apos;avanguardia e prodotti ecologici. 
              Fiducia e freschezza, direttamente a casa tua.
            </p>
            
            {/* CONTATTI RAPIDI */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-slate-600">
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm border border-slate-100">
                  <Phone size={14} className="text-blue-500" />
                </div>
                +39 02 99050084
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-600">
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm border border-slate-100">
                  <MapPin size={14} className="text-blue-500" />
                </div>
                Via Volta 219, Senago (MI)
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-600">
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm border border-slate-100">
                  <FileText size={14} className="text-blue-500" />
                </div>
                P.IVA: 1147860151
              </div>
            </div>
          </div>

          {/* MAPPING SEZIONI */}
          {sections.map((section) => (
            <div key={section.title} className="space-y-6">
              <h4 className="font-bold text-slate-800 uppercase tracking-widest text-[10px]">
                {section.title}
              </h4>
              <ul className="space-y-4">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href} 
                      className="text-slate-500 hover:text-blue-600 transition-colors text-sm font-medium flex items-center group"
                    >
                      <ArrowRight size={12} className="mr-0 opacity-0 -ml-4 group-hover:opacity-100 group-hover:mr-2 transition-all" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* BOTTOM BAR */}
        <div className="pt-8 border-t border-slate-200/60 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="space-y-1 text-center md:text-left">
            <p className="text-slate-400 text-[11px] font-medium tracking-tight">
              © {currentYear} Lavanderia SCM — Prendetevi cura dei vostri capi.
            </p>
            <p className="text-slate-400 text-[10px] uppercase tracking-wider">
              P.IVA 1147860151
            </p>
          </div>

          {/* EMAIL & CREDIT STARTINGLINE */}
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
             <Link href="mailto:info@lavanderiascm.it" className="flex items-center gap-2 text-xs font-semibold text-slate-500 hover:text-blue-600 transition-colors">
              <Mail size={14} />
              info@lavanderiascm.it
            </Link>
            
            {/* BADGE CREDITI STARTINGLINE */}
            <Link 
              href="vercel.app" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[10px] uppercase tracking-wider font-bold text-slate-400 hover:text-slate-600 bg-slate-100/80 px-3 py-1.5 rounded-full border border-slate-200/50 transition-all active:scale-95"
            >
              <span>Made by</span>
              <span className="text-slate-800 font-black">StartingLine</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
