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
        : "pt-5 pb-0"
        }`}
    >
      <nav
        className={`mx-auto max-w-7xl transition-all duration-200 ease-out px-4 ${isScrolled
          ? "bg-white/45 backdrop-blur-xl backdrop-saturate-150 rounded-full shadow-lg shadow-black/5"
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
                <div className="relative min-w-11 sm:w-60 h-9">
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
          </div>

          {/* STATUS */}
          <div className="justify-self-center">
            <OpenStatus />
          </div>

          {/* CONTACTS */}
          <div className="justify-self-end flex items-center gap-2 md:gap-3">
            {CONTACT_ACTIONS.map((action, i) => {
              const Icon = action.icon;

              return (
                <motion.a
                  key={action.label}
                  href={action.href}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 + i * 0.08 }}
                  className={`
            flex items-center gap-2
            px-3 md:px-4
            h-11
            rounded-full
            bg-linear-to-r ${action.color}
            text-white
            shadow-md
            hover:shadow-lg
            active:scale-95
            transition-all
          `}
                >
                  <Icon size={18} />

                  <span className="hidden lg:inline text-sm font-medium">
                    {action.label}
                  </span>
                </motion.a>
              );
            })}
          </div>

        </div>

      </nav>

    </header>
  );
}