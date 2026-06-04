"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import camicia from "@/public/camicia_volante.png";
import Link from "next/link";
import { useRef, useEffect, useState } from "react";

export function HeroLaundry() {
  const ref = useRef<HTMLDivElement>(null);

  // mouse parallax
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-300, 300], [8, -8]);
  const rotateY = useTransform(x, [-300, 300], [-8, 8]);

  function handleMouseMove(e: React.MouseEvent) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;

    const offsetX = e.clientX - rect.left - rect.width / 2;
    const offsetY = e.clientY - rect.top - rect.height / 2;

    x.set(offsetX);
    y.set(offsetY);
  }

  // ORBIT ANIMATION
  const [angle, setAngle] = useState(0);

  useEffect(() => {
    let frame: number;

    const animate = () => {
      setAngle((prev) => prev + 0.1);
      frame = requestAnimationFrame(animate);
    };

    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, []);

  const bubbles = [
    { label: "Igienizzazione", color: "blue" },
    { label: "Piumoni", color: "white" },
    { label: "Tappeti", color: "blue" },
    { label: "Pelle", color: "white" },
    { label: "Abiti da Cerimonia", color: "premium" },
  ];

  const radiusX = 250;
  const radiusY = 100;

  return (
    <section className="relative overflow-hidden px-6 pt-24 pb-14 bg-linear-to-b from-slate-50 to-white">

      {/* GLOBAL GLOW */}
      <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-100/40 blur-[120px] rounded-full" />

      <div
        ref={ref}
        onMouseMove={handleMouseMove}
        className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-[1fr_1fr] gap-12 items-center"
      >

        {/* LEFT (UPGRADED UI SYSTEM) */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="space-y-7 max-w-xl lg:mx-auto"
        >

          {/* BADGE */}
          <Badge className="bg-blue-50 text-blue-700 border border-blue-100 px-5 py-2 rounded-full text-[11px] tracking-[0.22em] uppercase font-bold w-fit shadow-sm">
            Specialisti in Abiti da Cerimonia & capi delicati
          </Badge>

          {/* TITLE */}
          <h1 className="text-4xl lg:text-[58px] font-black leading-[0.92] tracking-tight text-slate-900">
            Cura Perfetta
            <br />
            Per I Tuoi{" "}
            <span className="text-blue-600 relative">
              Capi
              <span className="absolute -bottom-2 left-0 w-full h-[6px] bg-blue-100 rounded-full -z-10" />
            </span>
          </h1>

          {/* SUBTEXT (più elegante e centrato mentalmente) */}
          <p className="text-base lg:text-lg text-slate-500 leading-relaxed max-w-lg">
            Trattamenti professionali per abiti da cerimonia, tessuti delicati, piumoni, tappeti e capi tecnici. 
            Cura artigianale con standard premium.
          </p>

          {/* PILLS (more premium spacing) */}
          <div className="flex flex-wrap gap-2.5 pt-1">
            {[
              "30+ anni esperienza",
              "Qualità premium",
              "Cura artigianale",
            ].map((t) => (
              <span
                key={t}
                className="px-4 py-1.5 rounded-full bg-white/70 backdrop-blur border border-slate-100 text-[13px] font-semibold text-slate-700 shadow-sm"
              >
                {t}
              </span>
            ))}
          </div>

          {/* CTA */}
          <div className="flex flex-wrap gap-4 pt-3">
            <Link href="tel:+390299050084">
              <Button className="h-12 px-7 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow-lg hover:scale-[1.03] transition">
                Prenota Ora
              </Button>
            </Link>

            <Link href="/servizi">
              <Button
                variant="outline"
                className="h-12 px-7 rounded-full border-slate-300 text-slate-700 hover:bg-slate-100 font-semibold"
              >
                Scopri i Servizi
              </Button>
            </Link>
          </div>
        </motion.div>

        {/* RIGHT (ORBITAL SYSTEM unchanged) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative h-[520px] flex items-center justify-center"
        >

          {/* GLOW */}
          <div className="absolute w-[280px] h-[280px] bg-blue-100/30 blur-3xl rounded-full" />

          {/* CAMICIA */}
          <motion.div
            style={{
              rotateX,
              rotateY,
              transformPerspective: 1000,
            }}
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative z-20 w-full h-full"
          >
            <Image
              src={camicia}
              alt="Lavanderia Professionale"
              fill
              priority
              className="object-contain drop-shadow-[0_30px_40px_rgba(15,23,42,0.18)]"
            />
          </motion.div>

          {/* ORBIT BUBBLES */}
          {bubbles.map((b, i) => {
            const offset = (360 / bubbles.length) * i;
            const rad = ((angle * 1 + offset) * Math.PI) / 180;

            const xPos = Math.cos(rad) * radiusX;
            const yPos = Math.sin(rad) * radiusY;

            const depth = Math.sin(rad);
            const isBack = depth < 0;

            return (
              <motion.div
                key={b.label}
                className={`absolute px-4 py-2 rounded-full text-sm font-semibold shadow-lg border ${
                  b.color === "blue"
                    ? "bg-blue-50 text-blue-700 border-blue-100"
                    : b.color === "premium"
                    ? "bg-white text-slate-900 border-slate-200 shadow-xl font-bold"
                    : "bg-white text-slate-700 border-slate-100"
                }`}
                animate={{
                  x: xPos,
                  y: yPos,
                  scale: isBack ? 0.9 : b.color === "premium" ? 1.08 : 1,
                }}
                style={{
                  zIndex: isBack ? 10 : 30,
                  opacity: isBack ? 0.55 : 1,
                }}
                transition={{
                  type: "spring",
                  stiffness: 60,
                  damping: 18,
                }}
              >
                {b.label}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}