"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { HERO_FEATURES } from "@/lib/constants/homepage";
import HeroTitle from "./HeroTitle";
import HeroFunctions from "./HeroFunctions";
import HeroButtons from "./HeroButtons";

export default function HeroContent() {
    return (
        <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-7 max-w-xl lg:mx-16 lg:pl-10 lg:pt-8"
        >

            {/* TITLE */}
            <HeroTitle />

            {/* FEATURES */}
            <HeroFunctions />

            {/* BUTTONS */}
            <HeroButtons />
            
        </motion.div>)
}