import { AboutHero } from "@/components/mycomponents/about/AboutHero";
import { OurStory } from "@/components/mycomponents/about/OurStory";
import { OurValues } from "@/components/mycomponents/about/OurValues";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen pb-24">
      <AboutHero />
      <OurStory />
      <OurValues />
    </div>
  );
}
