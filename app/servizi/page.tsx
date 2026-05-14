import { ServicesHeader } from "@/components/mycomponents/services/ServicesHeader";
import { ServicesDetails } from "@/components/mycomponents/services/ServicesDetails";

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen pb-24">
      <ServicesHeader />
      <ServicesDetails />
    </div>
  );
}
