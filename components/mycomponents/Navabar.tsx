"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight, Phone, MessageCircle, Mail } from "lucide-react"; // Aggiunte icone social
import Link from "next/link";
import Image from "next/image";
import logo_lavanderia from "@/public/logo_lavanderia.png";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: "Chi Siamo", href: "/chi-siamo" },
    { name: "Servizi", href: "/servizi" },
    { name: "Listino Prezzi", href: "/prezzi" },
  ];

  // Configurazione icone contatto
   // Configurazione icone contatto (Sostituisci questa parte nel tuo codice)
  const contactActions = [
    { 
      icon: <Phone size={20} />, 
      href: "tel:+390299050084", 
      bg: "bg-blue-600" 
    },
    {
      icon: <MessageCircle size={20} />,
      href: "https://wa.me",
      bg: "bg-green-500",
    },
    {
      icon: <Mail size={20} />,
      href: "mailto:info@lavanderiascm.it",
      bg: "bg-slate-800",
    },
  ];


  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? "py-3" : "py-5"}`}
    >
      <nav
        className={`mx-auto max-w-6xl transition-all duration-500 ease-in-out px-6 
          ${
            isScrolled
              ? "bg-white/80 backdrop-blur-lg shadow-lg border border-white/20 rounded-full py-2"
              : "bg-transparent py-4"
          }`}
      >
        <div className="grid grid-cols-2 md:grid-cols-3 items-center">
          <div className="flex justify-start">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-10 h-10 transition-transform duration-500 group-hover:rotate-12">
                <Image
                  src={logo_lavanderia}
                  width={40}
                  height={40}
                  alt="Logo"
                  className="object-contain"
                />
              </div>
              <span className="text-xl font-black tracking-tighter text-slate-900">
                Lavasecco<span className="text-blue-600">SCM</span>
              </span>
            </Link>
          </div>

          <div className="hidden md:flex justify-center">
            <div className="flex items-center gap-1 p-1 rounded-full border border-slate-200/10">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="px-5 py-2 text-sm font-bold text-slate-600 hover:text-blue-600 rounded-full hover:bg-white transition-all"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex justify-end">
            <button
              className="md:hidden p-2 text-slate-900 bg-white/50 backdrop-blur-sm rounded-full shadow-sm"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu size={24} />
            </button>
            <div className="hidden md:block w-10 h-10" />
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-[60]"
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-[280px] bg-white z-[70] shadow-2xl p-8 flex flex-col"
            >
              <div className="flex justify-between items-center mb-12">
                <span className="font-black text-blue-600 tracking-widest text-xs">
                  MENU
                </span>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 bg-slate-100 rounded-full hover:bg-slate-200 transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="flex flex-col gap-8">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-2xl font-bold text-slate-900 hover:text-blue-600 flex items-center justify-between group"
                    >
                      {link.name}
                      <ArrowRight
                        size={20}
                        className="opacity-0 group-hover:opacity-100 transition-all text-blue-600"
                      />
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* PULSANTI CONTATTO ROTONDI E PICCOLI */}
              <div className="mt-auto flex justify-center gap-4">
                {contactActions.map((action, i) => (
                  <motion.a
                    key={i}
                    href={action.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    className={`w-12 h-12 rounded-full ${action.bg} text-white flex items-center justify-center shadow-lg transform active:scale-90 transition-transform`}
                  >
                    {action.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
