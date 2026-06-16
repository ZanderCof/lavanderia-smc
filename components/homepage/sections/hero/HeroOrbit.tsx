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

export default function HeroOrbit({
    rotateX,
    rotateY,
    angle,
}: HeroOrbitProps) {
    const [mounted, setMounted] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

useEffect(() => {
    const mq = window.matchMedia("(max-width: 639px)");
    setIsMobile(mq.matches);
    
    // Sposta l'esecuzione al prossimo ciclo di eventi, risolvendo il cascading render sincrono
    setTimeout(() => {
        setMounted(true);
    }, 0);

    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
}, []);

    // Se non è montato sul client, evitiamo il render per prevenire hydration mismatch
    if (!mounted) return null;

    const radiusX = isMobile ? 160 : 260;
    const radiusY = isMobile ? 55 : 90;

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative flex items-center justify-center h-80 sm:h-130"
        >
            {/* glow centrale */}
            <div className="absolute w-40 h-40 sm:w-65 sm:h-65 bg-blue-100/20 blur-3xl rounded-full" />

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

            {HERO_BUBBLES.map((bubble, i) => (
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