"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, MessageCircle, Mail } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import logo_lavanderia from "@/public/logo_lavanderia.png";
import nome_navbar from "@/public/nome_navbar.png";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "unset";
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: "Chi Siamo", href: "/chi-siamo" },
    { name: "Servizi", href: "/servizi" },
    { name: "Listino Prezzi", href: "/prezzi" },
    { name: "Abiti da Cerimonia", href: "/cerimonia" },
  ];

  const contactActions = [
    {
      icon: <Phone size={18} />,
      href: "tel:+390299050084",
      label: "Chiama",
      color: "from-blue-500 to-blue-700",
      ring: "ring-blue-400/30",
    },
    {
      icon: <MessageCircle size={18} />,
      href: "https://wa.me/390299050084",
      label: "WhatsApp",
      color: "from-emerald-400 to-emerald-600",
      ring: "ring-emerald-400/30",
    },
    {
      icon: <Mail size={18} />,
      href: "mailto:info@lavanderiascm.it",
      label: "Email",
      color: "from-slate-600 to-slate-800",
      ring: "ring-slate-400/20",
    },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-out ${
        isScrolled ? "pt-3 pb-0" : "pt-6 pb-0"
      }`}
    >
      <nav
        className={`mx-auto max-w-5xl transition-all duration-700 ease-out px-4 ${
          isScrolled
            ? "bg-white/45 backdrop-blur-xl backdrop-saturate-150 rounded-full shadow-lg shadow-black/5"
            : "bg-white/5 rounded-full"
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
              <div className="relative min-w-10 sm:w-47.5 h-8.5">
                <Image
                  src={nome_navbar}
                  alt="Lavasecco SCM"
                  fill
                  priority
                  className="object-contain object-left"
                  sizes="(max-width: 640px) 165px, 190px"
                />
              </div>

              <span className="text-[8px] sm:text-[9px] font-semibold tracking-[0.2em] text-slate-400 uppercase mt-1 pl-0.5">
                Dal 1995 · Senago
              </span>
            </div>
          </Link>

          {/* DESKTOP NAV */}
          <div className="hidden md:flex items-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onMouseEnter={() => setActiveLink(link.name)}
                onMouseLeave={() => setActiveLink(null)}
                className={`relative px-4 py-1.5 text-[13px] font-semibold transition-colors rounded-lg  "text-slate-600 hover:text-slate-900"`}
              >
                <span className="relative z-10">{link.name}</span>
              </Link>
            ))}
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

      {/* MOBILE MENU (invariato) */}
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
              <div className="p-6 border-b border-slate-100">
                <p className="text-xs font-bold text-blue-600 uppercase">
                  Menu
                </p>
                <p className="text-xs text-slate-400">
                  Lavasecco SCM · Senago
                </p>
              </div>

              <div className="p-4 flex flex-col gap-2">
                {navLinks.map((link) => (
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
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}