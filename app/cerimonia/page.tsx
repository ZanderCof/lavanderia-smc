import { CeremoniaCtaFinale } from "@/components/mycomponents/cerimonia/CeremoniaCtaFinale";
import { CerimoniaChecklist } from "@/components/mycomponents/cerimonia/CerimoniaChecklist";
import { CerimoniaFeatures } from "@/components/mycomponents/cerimonia/CerimoniaFeatures";
import { CerimoniaGarments } from "@/components/mycomponents/cerimonia/CerimoniaGarments";
import { CerimoniaHero } from "@/components/mycomponents/cerimonia/CerimoniaHero";
import { CerimoniaProcess } from "@/components/mycomponents/cerimonia/CerimoniaProcess";
import { CerimoniaTestimonials } from "@/components/mycomponents/cerimonia/CerimoniaTestimonials";

export default function CerimoniaPage() {
  return (
    <main className="min-h-screen bg-white">
      <CerimoniaHero />
      <CerimoniaGarments />
      <CerimoniaFeatures />
      <CerimoniaProcess />
      <CerimoniaChecklist />
      <CerimoniaTestimonials />
      <CeremoniaCtaFinale />
    </main>
  );
}
