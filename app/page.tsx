"use client";

import { CtaSection } from "@/components/homepage/sections/CtaSection";
import { HeroLaundry } from "@/components/homepage/sections/HeroLaundry";
import { ServiceCoverageSection } from "@/components/homepage/sections/ServiceCoverageSection";
import Prezzi from "@/components/homepage/sections/Prezzi";

export default function Home() {
  return (
    <div className="origin-top">

      {/* HERO = FULL SIZE */}
      <HeroLaundry />

      {/* RESTO = SOFT RESPONSIVE SCALE WRAPPER */}
      <div className=" origin-top ">

        {/* SECTION GRID */}
        <ServiceCoverageSection />

        {/* PREZZI */}
        <Prezzi />

        {/* CTA RICHIAMATA QUI 🚀 */}
        <CtaSection />

      </div>
    </div>
  );
}