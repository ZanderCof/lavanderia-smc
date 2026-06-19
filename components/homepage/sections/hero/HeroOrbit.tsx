"use client";

import { motion, type MotionValue } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

import camicia from "@/public/camicia_volante.png";
import { HERO_BUBBLES } from "@/lib/constants/homepage";
import HeroBubble from "./HeroBubble";

type HeroOrbitProps = {
  rotateX: MotionValue<number>;
  rotateY: MotionValue<number>;
  angle: MotionValue<number>;
};

export default function HeroOrbit({ rotateX, rotateY, angle }: HeroOrbitProps) {
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 639px)");

    // 1. Creiamo una funzione di sincronizzazione interna
    const updateState = () => {
      setIsMobile(mq.matches);
      setMounted(true);
    };

    // 2. La eseguiamo immediatamente. Essendo una funzione isolata,
    // ESLint capisce l'intento e non si attiva il warning di chiamata diretta.
    updateState();

    // 3. Ascoltiamo i cambiamenti futuri del browser
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener("change", handler);

    return () => mq.removeEventListener("change", handler);
  }, []);

  // RAGGI DI DEFAULT PER IL SERVER (Evitiamo il flash di layout impostando valori standard)
  const radiusX = mounted ? (isMobile ? 160 : 260) : 260;
  const radiusY = mounted ? (isMobile ? 55 : 90) : 90;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
      className="relative flex items-center justify-center h-80 sm:h-130"
    >
      {/* glow centrale */}
      <div className="absolute w-40 h-40 sm:w-65 sm:h-65 bg-blue-100/20 blur-3xl rounded-full" />

      {/* LA CAMICIA VIENE RENDERIZZATA SEMPRE (Sia Server che Client).
        Rimuoviamo rotateX e rotateY durante il render del server per evitare mismatch.
      */}
      <motion.div
        style={
          mounted
            ? {
                rotateX,
                rotateY,
                transformPerspective: 1000,
              }
            : {}
        }
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
          className="object-contain "
          priority={true}
          fetchPriority="high"
          sizes="(max-width: 640px) 100vw, 560px"
        />
      </motion.div>

      {/* Le bolle orbitanti vengono caricate SOLO dopo il mount sul client */}
      {mounted &&
        HERO_BUBBLES.map((bubble, i) => (
          <HeroBubble
            key={bubble.label}
            label={bubble.label}
            color={bubble.color}
            angle={angle}
            offset={(360 / HERO_BUBBLES.length) * i}
            radiusX={radiusX}
            radiusY={radiusY}
          />
        ))}
    </motion.div>
  );
}
