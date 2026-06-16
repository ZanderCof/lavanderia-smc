import { AboutHero } from "@/components/about/AboutHero";
import { OurStory } from "@/components/about/OurStory";
import { OurValues } from "@/components/about/OurValues";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen pb-24">
      <AboutHero />
      <OurStory />
      <OurValues />
    </div>
  );
}
