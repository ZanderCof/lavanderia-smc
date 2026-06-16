import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function HeroButtons() {
    return (
        <div className="flex flex-wrap gap-4 pt-14 justify-center lg:justify-start">
            <Link href="tel:+390299050084">
                <Button className="h-12 px-7 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow-lg hover:scale-105 transition-all">
                    Prenota Ora
                </Button>
            </Link>

            <Link href="/servizi">
                <Button
                    variant="outline"
                    className="h-12 px-7 rounded-full border-slate-300 text-slate-700 hover:bg-slate-100 font-semibold"
                >
                    Scopri i Servizi
                </Button>
            </Link>
        </div>
    )
}