import { HERO_FEATURES } from "@/lib/constants/homepage";

export default function HeroFunctions() {
    return (
        <div className="flex flex-col gap-3 pt-1 max-w-lg mx-auto lg:mx-0">
            {HERO_FEATURES.map((feature) => {
                const Icon = feature.icon;

                return (
                    <div
                        key={feature.text}
                        className="flex items-center gap-3 text-slate-700 "
                    >
                        <div
                            className={`w-10 h-10 rounded-2xl flex items-center justify-center ${feature.iconBg}`}
                        >
                            <Icon
                                className={`w-4.5 h-4.5 ${feature.iconColor}`}
                            />
                        </div>

                        <span className="font-medium text-[15px]">
                            {feature.text}
                        </span>
                    </div>
                );
            })}
        </div>
    )
}