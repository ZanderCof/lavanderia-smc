"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, MessageCircle, Mail } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import logo_lavanderia from "@/public/logo_lavanderia.png";
import nome_navbar from "@/public/nome_navbar (2).png";

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
      href: "https://wa.me",
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
            ? "bg-white/75 backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.08)] border border-white/60 rounded-2xl"
            : "bg-transparent"
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
              className={`relative shrink-0 w-11 h-11 rounded-xl overflow-hidden flex items-center justify-center transition-all duration-500 ${
                isScrolled
                  ? "shadow-md shadow-blue-100"
                  : "bg-white/20 backdrop-blur-sm"
              }`}
            >
              <Image
                src={logo_lavanderia}
                width={42}
                height={42}
                alt="Logo LavaseccoSCM"
                className="object-contain"
              />
            </motion.div>

            {/* TESTO / LOGO */}
            <div className="flex flex-col justify-center min-w-0 leading-none">
              {/* WRAPPER IMMAGINE */}
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

              {/* SOTTOTITOLO */}
              <span className="text-[8px] sm:text-[9px] font-semibold tracking-[0.2em] text-slate-400 uppercase mt-1 pl-[2px]">
                Dal 1995 · Senago
              </span>
            </div>
          </Link>

          {/* DESKTOP NAV */}
          <div className="hidden md:flex items-center gap-1 bg-slate-50/80 rounded-xl px-1.5 py-1.5 border border-slate-100">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onMouseEnter={() => setActiveLink(link.name)}
                onMouseLeave={() => setActiveLink(null)}
                className="relative px-4 py-1.5 text-[13px] font-semibold text-slate-500 hover:text-slate-900 rounded-lg transition-all duration-200 group"
              >
                <motion.span
                  className="absolute inset-0 bg-white rounded-lg shadow-sm"
                  initial={false}
                  animate={{
                    opacity: activeLink === link.name ? 1 : 0,
                    scale: activeLink === link.name ? 1 : 0.96,
                  }}
                  transition={{ duration: 0.15 }}
                />
                <span className="relative z-10">{link.name}</span>
              </Link>
            ))}
          </div>

          {/* CTA DESKTOP + MOBILE BUTTON */}
          <div className="flex items-center gap-3">
            {/* CTA Desktop */}
            <motion.a
              href="tel:+390299050084"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              className="hidden md:flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-[13px] font-bold px-4 py-2 rounded-xl transition-colors duration-200 shadow-lg shadow-blue-600/20"
            >
              <Phone size={14} strokeWidth={2.5} />
              Prenota
            </motion.a>

            {/* MOBILE TOGGLE */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden w-10 h-10 flex items-center justify-center rounded-xl bg-white shadow-md shadow-slate-200/80 border border-slate-100 active:scale-90 transition-all duration-200"
              aria-label="Apri menu"
            >
              <div className="w-5 h-4 flex flex-col justify-between">
                <motion.span
                  className="block h-[2px] bg-slate-700 rounded-full origin-center"
                  animate={
                    isMobileMenuOpen
                      ? { rotate: 45, y: 7 }
                      : { rotate: 0, y: 0 }
                  }
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                />
                <motion.span
                  className="block h-[2px] bg-slate-700 rounded-full"
                  animate={
                    isMobileMenuOpen
                      ? { opacity: 0, scaleX: 0 }
                      : { opacity: 1, scaleX: 1 }
                  }
                  transition={{ duration: 0.2 }}
                />
                <motion.span
                  className="block h-[2px] bg-slate-700 rounded-full origin-center"
                  animate={
                    isMobileMenuOpen
                      ? { rotate: -45, y: -7 }
                      : { rotate: 0, y: 0 }
                  }
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* OVERLAY */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-slate-900/30 backdrop-blur-md z-[60]"
            />

            {/* DRAWER */}
            <motion.div
              initial={{ x: "100%", opacity: 0.5 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "100%", opacity: 0 }}
              transition={{
                type: "spring",
                damping: 30,
                stiffness: 250,
                mass: 0.8,
              }}
              className="fixed top-0 right-0 h-full w-72 bg-white z-[70] flex flex-col overflow-hidden"
              style={{
                boxShadow: "-20px 0 60px rgba(0,0,0,0.12)",
                borderLeft: "1px solid rgba(148,163,184,0.12)",
              }}
            >
              {/* HEADER DRAWER */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-slate-50">
                <div>
                  <p className="text-[10px] font-black tracking-[0.2em] text-blue-600 uppercase">
                    Navigazione
                  </p>
                  <p className="text-[11px] text-slate-400 mt-0.5">
                    LavaseccoSCM · Milano
                  </p>
                </div>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-8 h-8 bg-slate-100 hover:bg-slate-200 rounded-lg flex items-center justify-center transition-colors"
                >
                  <svg
                    className="w-4 h-4 text-slate-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              {/* LINKS */}
              <nav className="flex-1 px-4 pt-6 pb-4">
                <div className="flex flex-col gap-1">
                  {navLinks.map((link, i) => (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: 24 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: i * 0.06 + 0.1,
                        type: "spring",
                        stiffness: 300,
                        damping: 24,
                      }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="flex items-center justify-between px-4 py-3.5 rounded-xl text-slate-700 hover:text-slate-900 hover:bg-slate-50 active:bg-slate-100 transition-all group"
                      >
                        <span className="text-[15px] font-bold">
                          {link.name}
                        </span>
                        <motion.span
                          className="text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity"
                          initial={false}
                        >
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2.5}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </motion.span>
                      </Link>
                    </motion.div>
                  ))}
                </div>

                {/* DIVIDER */}
                <div className="mt-6 mb-4 flex items-center gap-3">
                  <div className="h-px flex-1 bg-slate-100" />
                  <span className="text-[10px] font-black tracking-[0.18em] text-slate-300 uppercase">
                    Contatti
                  </span>
                  <div className="h-px flex-1 bg-slate-100" />
                </div>

                {/* CONTACT BUTTONS */}
                <div className="flex flex-col gap-2">
                  {contactActions.map((action, i) => (
                    <motion.a
                      key={i}
                      href={action.href}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 + i * 0.07 }}
                      className={`flex items-center gap-3 px-4 py-3 rounded-xl bg-gradient-to-r ${action.color} text-white font-semibold text-[13px] ring-2 ${action.ring} active:scale-95 transition-transform`}
                    >
                      {action.icon}
                      {action.label}
                    </motion.a>
                  ))}
                </div>
              </nav>

              {/* FOOTER DRAWER */}
              <div className="px-6 py-4 border-t border-slate-50">
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
