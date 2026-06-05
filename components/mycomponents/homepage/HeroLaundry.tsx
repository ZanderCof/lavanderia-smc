"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Shirt, Truck } from "lucide-react";
import Image from "next/image";
import camicia from "@/public/camicia_volante.png";
import Link from "next/link";
import { useRef, useEffect, useState } from "react";

export function HeroLaundry() {
  const ref = useRef<HTMLDivElement>(null);

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

  const [angle, setAngle] = useState(0);

  useEffect(() => {
    let frame: number;

    const animate = () => {
      setAngle((prev) => prev + 0.40); // Controllo velocità orbitale
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

  const radiusX = 220;
  const radiusY = 90;

  return (
    <section className="relative overflow-hidden px-6 pt-20 pb-14">      {/* glow soft */}
      <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-100/30 blur-[120px] rounded-full" />

      <div
        ref={ref}
        onMouseMove={handleMouseMove}
        className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-2 items-center"
      >

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="space-y-7 max-w-xl lg:mx-16 lg:pl-10 pt-8"
        >

          {/* TITLE */}
          <div className="space-y-4">
            <h1 className="text-5xl lg:text-[64px] font-black leading-[0.92] tracking-tight text-slate-900">
              Cura Perfetta <br />
              Per I Tuoi{" "}
              <span className="text-blue-600 relative">
                Capi
                <span className="absolute -bottom-2 left-0 w-full h-[6px] bg-blue-100 rounded-full -z-10" />
              </span>
            </h1>

            <p className="text-lg text-slate-500 leading-relaxed max-w-lg">
              Lavaggio professionale di capi delicati, abiti da cerimonia,
              piumoni e tessuti tecnici con cura artigianale premium.
            </p>
          </div>

          {/* FEATURES */}
          <div className="flex flex-col gap-3 pt-1">
            <div className="flex items-center gap-3 text-slate-700">
              <div className="w-10 h-10 rounded-2xl bg-blue-100 flex items-center justify-center">
                <Sparkles className="w-4.5 h-4.5 text-blue-600" />
              </div>
              <span className="font-medium text-[15px]">
                Trattamenti igienizzanti premium
              </span>
            </div>

            <div className="flex items-center gap-3 text-slate-700">
              <div className="w-10 h-10 rounded-2xl bg-slate-100 flex items-center justify-center">
                <Shirt className="w-4.5 h-4.5 text-slate-700" />
              </div>
              <span className="font-medium text-[15px]">
                Cura specifica per ogni tessuto
              </span>
            </div>

            <div className="flex items-center gap-3 text-slate-700">
              <div className="w-10 h-10 rounded-2xl bg-blue-100 flex items-center justify-center">
                <Truck className="w-4.5 h-4.5 text-blue-600" />
              </div>
              <span className="font-medium text-[15px]">
                Servizio rapido e affidabile
              </span>
            </div>
          </div>

          {/* BUTTONS */}
          <div className="flex flex-wrap gap-4 pt-4">
            <Link href="tel:+390299050084">
              <Button className="h-12 px-7 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow-lg hover:scale-105 transition-all">
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

        {/* RIGHT — ORBIT "SOFT LUXURY MODE" */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative h-[520px] flex items-center justify-center"
        >

          {/* glow centrale */}
          <div className="absolute w-[260px] h-[260px] bg-blue-100/20 blur-3xl rounded-full" />

          {/* camicia */}
          <motion.div
            style={{
              rotateX,
              rotateY,
              transformPerspective: 1000,
            }}
            animate={{ y: [0, -8, 0] }}
            transition={{
              duration: 5,
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
              className="object-contain drop-shadow-[0_25px_35px_rgba(15,23,42,0.15)]"
            />
          </motion.div>

          {/* ORBIT — meno elementi visibili (mobile safe) */}
          {bubbles.map((b, i) => {
            const offset = (360 / bubbles.length) * i;
            const rad = ((angle + offset) * Math.PI) / 180;

            const xPos = Math.cos(rad) * radiusX;
            const yPos = Math.sin(rad) * radiusY;

            const depth = Math.sin(rad);
            const isBack = depth < 0;

            return (
              <motion.div
                key={b.label}
                className={`absolute px-3 py-1.5 rounded-full text-xs font-semibold border shadow-md ${b.color === "blue"
                  ? "bg-blue-50 text-blue-700 border-blue-100"
                  : b.color === "premium"
                    ? "bg-white text-slate-900 border-slate-200 font-bold"
                    : "bg-white text-slate-700 border-slate-100"
                  }`}
                animate={{
                  x: xPos,
                  y: yPos,
                  scale: isBack ? 0.85 : b.color === "premium" ? 1.05 : 1,
                }}
                style={{
                  zIndex: isBack ? 5 : 30,
                  opacity: isBack ? 0.45 : 1,
                }}
                transition={{
                  type: "spring",
                  stiffness: 40,
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