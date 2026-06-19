"use client";

import { useMotionValue, useTransform } from "framer-motion";
import { useAnimationFrame } from "framer-motion";
import { useRef } from "react";
import HeroContent from "./hero/HeroContent";
import HeroOrbit from "./hero/HeroOrbit";
import HeroTitle from "./hero/HeroTitle";
import HeroFunctions from "./hero/HeroFunctions";


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

  const angle = useMotionValue(0);

  useAnimationFrame((_, delta) => {
    angle.set(angle.get() + delta * 0.025);
  });

  return (
    <section className="relative overflow-hidden px-6 pt-20 pb-14">      {/* glow soft */}
      <div className="absolute -top-50 left-1/2 -translate-x-1/2 w-150 h-150 bg-blue-100/30 blur-[120px] rounded-full" />

      <div
        ref={ref}
        onMouseMove={handleMouseMove}
        className="relative select-none z-10 max-w-7xl mx-auto grid gap-2 items-center"
      >

        {/* DESKTOP */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-2 items-center text-center lg:pt-8">
          {/* LEFT */}
          <HeroContent />

          {/* RIGHT — ORBIT "SOFT LUXURY MODE" */}
          <HeroOrbit
            rotateX={rotateX}
            rotateY={rotateY}
            angle={angle}
          />
        </div>

        {/* MOBILE / TABLET */}
        <div className="lg:hidden">
          {/* TITLE */}
          <div className=" items-center justify-center text-center mx-10">
            <HeroTitle />
          </div>

          {/* ORBIT SHIRT */}
          <HeroOrbit
            rotateX={rotateX}
            rotateY={rotateY}
            angle={angle}
          />

          {/* FEATURES */}
          <HeroFunctions />

        </div>
      </div>
    </section>
  );
}