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
    const radiusX = 260;
    const radiusY = 90;

    const [mounted, setMounted] = useState(false);

    useEffect(() => { setMounted(true) }, []);

    if (!mounted) return null;

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative h-130 flex items-center justify-center"
        >
            {/* glow centrale */}
            <div className="absolute w-65 h-65 bg-blue-100/20 blur-3xl rounded-full" />

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

            {mounted && HERO_BUBBLES.map((bubble, i) => (
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