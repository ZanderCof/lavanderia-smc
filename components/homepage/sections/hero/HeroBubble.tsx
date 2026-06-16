"use client";

import { HeroBubbleColor } from "@/lib/constants/homepage";
import { motion, useTransform, type MotionValue } from "framer-motion";

type HeroBubbleProps = {
    label: string;
    color: HeroBubbleColor;
    angle: MotionValue<number>;
    offset: number;
    radiusX: number;
    radiusY: number;
};

export default function HeroBubble({
    label,
    color,
    angle,
    offset,
    radiusX,
    radiusY,
}: HeroBubbleProps) {
    const rad = useTransform(angle, (a) => ((a + offset) * Math.PI) / 180);

    const x = useTransform(rad, (r) => Math.cos(r) * radiusX);

    const y = useTransform(rad, (r) => Math.sin(r) * radiusY);

    const depth = useTransform(rad, (r) => Math.sin(r));

    const opacity = useTransform(depth, [-1, 0, 1], [0.35, 0.65, 1]);

    const scale = useTransform(depth,
        [-1, 0, 1],
        [0.82,
            color === "premium" ? 0.95 : 0.9,
            color === "premium" ? 1.05 : 1
        ]
    );

    const zIndex = useTransform(depth, (d) => (d < 0 ? 5 : 30));

    return (
        <motion.div
            style={{
                x,
                y,
                opacity,
                scale,
                zIndex
            }}
            className={`absolute px-3 py-1.5 rounded-full text-xs font-semibold border shadow-md ${color === "blue"
                ? "bg-blue-50 text-blue-700 border-blue-100"
                : color === "premium"
                    ? "bg-white text-slate-900 border-slate-200 font-bold"
                    : "bg-white text-slate-700 border-slate-100"
                }`}
        >
            {label}
        </motion.div>
    );
}