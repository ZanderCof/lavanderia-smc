"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { HERO_FEATURES } from "@/lib/constants/homepage";

export default function HeroContent() {
    return (
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
                        <span className="absolute -bottom-2 left-0 w-full h-1.5 bg-blue-100 rounded-full -z-10" />
                    </span>
                </h1>

                <p className="text-lg text-slate-500 leading-relaxed max-w-lg">
                    Lavaggio professionale di capi delicati, abiti da cerimonia,
                    piumoni e tessuti tecnici con cura artigianale premium.
                </p>
            </div>

            {/* FEATURES */}
            <div className="flex flex-col gap-3 pt-1">
                {HERO_FEATURES.map((feature) => {
                    const Icon = feature.icon;

                    return (
                        <div
                            key={feature.text}
                            className="flex items-center gap-3 text-slate-700"
                        >
                            <div
                                className={`w-10 h-10 rounded-2xl flex items-center justify-center ${feature.iconBg}`}
                            >
                                <Icon
                                    className={`w-4.5 h-4.5 ${feature.iconColor}`}
                                />
                            </div>

                            <span className="font-medium text-[15px]">
                                {feature.text}
                            </span>
                        </div>
                    );
                })}
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
        </motion.div>)
}