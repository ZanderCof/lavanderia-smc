"use client";

import { FeaturesBento } from "@/components/homepage/sections/FeaturesBento";
import { CtaSection } from "@/components/homepage/sections/CtaSection";
import { HeroLaundry } from "@/components/homepage/sections/HeroLaundry";
import { ServiceCoverageSection } from "@/components/homepage/sections/ServiceCoverageSection";

export default function Home() {
  return (
    <div className="origin-top">

      {/* HERO = FULL SIZE */}
      <HeroLaundry />

      {/* RESTO = SOFT RESPONSIVE SCALE WRAPPER */}
      <div className=" origin-top ">

        {/* BENTO */}
        <div id="features-bento" className="pb-12">
          <FeaturesBento />
        </div>

        {/* SECTION GRID */}
        <ServiceCoverageSection />

        {/* CTA RICHIAMATA QUI 🚀 */}
        <CtaSection />

      </div>
    </div>
  );
}