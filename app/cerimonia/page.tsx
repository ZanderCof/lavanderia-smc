import { CeremoniaCtaFinale } from "@/components/cerimonia/CeremoniaCtaFinale";
import { CerimoniaChecklist } from "@/components/cerimonia/CerimoniaChecklist";
import { CerimoniaFeatures } from "@/components/cerimonia/CerimoniaFeatures";
import { CerimoniaGarments } from "@/components/cerimonia/CerimoniaGarments";
import { CerimoniaHero } from "@/components/cerimonia/CerimoniaHero";
import { CerimoniaProcess } from "@/components/cerimonia/CerimoniaProcess";
import { CerimoniaTestimonials } from "@/components/cerimonia/CerimoniaTestimonials";

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
