import { PricingHeader } from "@/components/pricing/PricingHeader";
import { PricingGrid } from "@/components/pricing/PricingGrid";

export default function PricingPage() {
  return (
    <div className="flex flex-col min-h-screen pb-24">
      <PricingHeader />
      <PricingGrid />
    </div>
  );
}
