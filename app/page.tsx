"use client";

import { FeaturesBento } from "@/components/homepage/sections/FeaturesBento";
import { BusinessHours } from "@/components/homepage/sections/BusinessHours";
import { CtaSection } from "@/components/homepage/sections/CtaSection";
import { HeroLaundry } from "@/components/homepage/sections/HeroLaundry";
import { LocaleMap } from "@/components/homepage/sections/LocaleMap";
import { Truck, MapPin, ShieldCheck } from "lucide-react";
import { Delivery } from "@/components/homepage/sections/ServiceCoverageSection";

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
        <Delivery />

        {/* CTA RICHIAMATA QUI 🚀 */}
        <CtaSection />

      </div>
    </div>
  );
}