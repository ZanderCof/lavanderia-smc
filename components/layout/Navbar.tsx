"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import OpenStatus from "@/components/ui/OpenStatus";
import logo_lavanderia from "@/public/logo_lavanderia.png";
import nome_navbar from "@/public/nome_navbar.png";
import { CONTACT_ACTIONS } from "@/lib/constants/contacts";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Gestione del blocco scroll + reset se la finestra si allarga oltre il mobile
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    const handleResize = () => {
      if (window.innerWidth >= 640) {
        // breakpoint 'sm' di Tailwind
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("resize", handleResize);
    };
  }, [isMobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-out ${
        isScrolled ? "pt-3 pb-0" : "pt-5 pb-0"
      }`}
    >
      <nav
        className={`mx-auto max-w-7xl transition-all duration-300 ease-out px-4 ${
          isScrolled
            ? "bg-white/50 backdrop-blur-xl backdrop-saturate-150 rounded-full shadow-lg shadow-black/5 border border-white/60"
            : ""
        }`}
      >
        <div className="grid grid-cols-3 items-center h-16 px-2">
          {/* LOGO */}
          <div className="justify-self-start">
            <Link
              href="/"
              className="flex items-center gap-3 group shrink-0 min-w-0"
            >
              <motion.div
                whileHover={{ rotate: 15, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                className="relative shrink-0 w-11 h-11 rounded-2xl overflow-hidden flex items-center justify-center"
              >
                <Image
                  src={logo_lavanderia}
                  fill
                  alt="Logo LavaseccoSCM"
                  className="object-contain"
                  // 💡 AGGIUNGI QUESTA RIGA:
                  sizes="44px"
                />
              </motion.div>

              {/* nome_navbar — nascosto su mobile */}
              <div className="hidden sm:flex flex-col justify-center min-w-0 leading-none">
                <div className="relative w-44 md:w-56 h-9">
                  <Image
                    src={nome_navbar}
                    alt="Lavasecco SCM"
                    fill
                    priority
                    className="object-contain object-left"
                    sizes="(max-width: 768px) 176px, 224px"
                  />
                </div>
                <span className="self-end text-[8px] sm:text-[9px] font-semibold tracking-[0.2em] text-slate-400 uppercase mt-0.5 pl-0.5">
                  Dal 1995 · Senago
                </span>
              </div>
            </Link>
          </div>

          {/* STATUS */}
          <div className="justify-self-center">
            <OpenStatus />
          </div>

          {/* CONTACTS — desktop */}
          <div className="justify-self-end hidden sm:flex items-center gap-2 md:gap-3">
            {CONTACT_ACTIONS.map((action, i) => {
              const Icon = action.icon;
              return (
                <motion.a
                  key={action.label}
                  href={action.href}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 + i * 0.08 }}
                  className={`flex items-center gap-2 px-3 md:px-4 h-10 rounded-full bg-linear-to-r ${action.color} text-white shadow-md hover:shadow-lg active:scale-95 transition-all`}
                >
                  <Icon size={17} />
                  <span className="hidden lg:inline text-sm font-medium">
                    {action.label}
                  </span>
                </motion.a>
              );
            })}
          </div>

          {/* HAMBURGER — solo mobile */}
          <button
            onClick={() => setIsMobileMenuOpen((v) => !v)}
            className="sm:hidden justify-self-end flex flex-col gap-1.5 p-2 z-50"
            aria-label="Menu"
          >
            <span
              className={`block w-5 h-0.5 bg-slate-600 rounded transition-all duration-300 ${
                isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block w-5 h-0.5 bg-slate-600 rounded transition-all duration-300 ${
                isMobileMenuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-5 h-0.5 bg-slate-600 rounded transition-all duration-300 ${
                isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>
      </nav>

      {/* MOBILE MENU DRAWER */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="sm:hidden fixed inset-x-4 top-24 bg-white/95 backdrop-blur-xl rounded-3xl shadow-xl border border-white/60 p-5 z-40"
          >
            <div className="flex flex-col gap-3">
              {CONTACT_ACTIONS.map((action) => {
                const Icon = action.icon;
                return (
                  <a
                    key={action.label}
                    href={action.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-2xl bg-linear-to-r ${action.color} text-white font-semibold text-sm shadow-sm active:scale-95 transition-all`}
                  >
                    <Icon size={18} />
                    {action.label}
                  </a>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
