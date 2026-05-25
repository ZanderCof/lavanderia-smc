import { PricingHeader } from "@/components/mycomponents/pricing/PricingHeader";
import { PricingGrid } from "@/components/mycomponents/pricing/PricingGrid";

export default function PricingPage() {
  return (
    <div className="flex flex-col min-h-screen pb-24">
      <PricingHeader />
      <PricingGrid />
    </div>
  );
}
