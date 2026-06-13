"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import OpenStatus from "@/components/ui/OpenStatus";
import logo_lavanderia from "@/public/logo_lavanderia.png";
import nome_navbar from "@/public/nome_navbar.png";
import { NAVBAR_LINKS } from "@/lib/constants/navigation";
import { CONTACT_ACTIONS } from "@/lib/constants/contacts";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);
  

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-out ${isScrolled
        ? "pt-3 pb-0"
        : "pt-6 pb-0"
        }`}
    >
      <nav
        className={`mx-auto max-w-6xl transition-all duration-200 ease-out px-4 ${isScrolled
          ? "bg-white/45 backdrop-blur-xl backdrop-saturate-150 rounded-full shadow-lg shadow-black/5"
          : ""
          }`}
      >
        <div className="flex items-center justify-between h-16 px-2">

          {/* LOGO */}
          <Link
            href="/"
            className="flex items-center gap-3 group shrink-0 min-w-0"
          >
            {/* ICONA */}
            <motion.div
              whileHover={{ rotate: 15, scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
              className={`relative shrink-0 w-11 h-11 rounded-2xl overflow-hidden flex items-center justify-center transition-all duration-500 `}
            >
              <Image
                src={logo_lavanderia}
                fill
                alt="Logo LavaseccoSCM"
                className="object-contain"
              />
            </motion.div>

            {/* TESTO LOGO */}
            <div className="flex flex-col justify-center min-w-0 leading-none">
              <div className="relative min-w-11 sm:w-50 h-9">
                <Image
                  src={nome_navbar}
                  alt="Lavasecco SCM"
                  fill
                  priority
                  className="object-contain object-left"
                  sizes="(max-width: 640px) 175px, 200px"
                />
              </div>

              <span className="self-end text-[8px] sm:text-[9px] font-semibold tracking-[0.2em] text-slate-400 uppercase mt-0.5 pl-0.5">
                Dal 1995 · Senago
              </span>
            </div>
          </Link>

          <div className="hidden md:flex lg:flex items-center">
            <OpenStatus />
          </div>

          {/* DESKTOP NAV */}
          <div className="hidden md:flex items-center">
            {NAVBAR_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`relative px-4 py-1.5 text-[13px] font-semibold transition-colors rounded-lg  "text-slate-600 hover:text-slate-900"`}
              >
                <span className="relative z-10">{link.name}</span>
              </Link>
            ))}
          </div>

          {/* STATUS */}
          <div className="md:hidden scale-90 origin-right shrink-0 whitespace-nowrap">
            <OpenStatus />
          </div>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-full transition-all bg-white/10"
            aria-label="Apri menu"
          >

            <div className="w-5 h-4 flex flex-col justify-between">
              <span className="h-0.5 bg-slate-700 rounded" />
              <span className="h-0.5 bg-slate-700 rounded" />
              <span className="h-0.5 bg-slate-700 rounded" />
            </div>
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/40 backdrop-blur-md z-50"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              className="fixed top-0 right-0 h-full w-72 bg-white z-50 flex flex-col"
            >
              {/* HEADER */}
              <div className="p-6 border-b border-slate-100 flex flex-col gap-2">

                <div className="flex items-center justify-between">
                  <p className="text-xs font-bold text-blue-600 uppercase">
                    Menu
                  </p>

                  <div className="scale-90 origin-right shrink-0 whitespace-nowrap">
                    <OpenStatus />
                  </div>
                </div>

                <p className="text-xs text-slate-400">
                  Lavasecco SCM · Senago
                </p>
              </div>

              {/* NAV LINKS */}
              <div className="p-4 flex flex-col gap-2">
                {NAVBAR_LINKS.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="px-4 py-3 rounded-xl text-slate-700 hover:bg-slate-50 font-medium"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>

              {/* SPACER */}
              <div className="flex-1" />

              {/* CONTACT ICONS (NEW DESIGN) */}
              <div className="px-12 pb-4">
                <div className="flex justify-between items-center">

                  {CONTACT_ACTIONS.map((action, i) => {
                    const Icon = action.icon;

                    return (
                      <motion.a
                        key={action.label}
                        href={action.href}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 + i * 0.08 }}
                        className={`w-12 h-12 flex items-center justify-center rounded-full bg-linear-to-r ${action.color} text-white shadow-md active:scale-90 transition-transform`}
                      >
                        <Icon size={18} />
                      </motion.a>
                    );
                  })}

                </div>
              </div>

              {/* FOOTER */}
              <div className="px-6 py-4 border-t border-slate-100">
                <p className="text-[10px] text-slate-300 text-center tracking-wider">
                  LavaseccoSCM · P.IVA 01234567890
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}