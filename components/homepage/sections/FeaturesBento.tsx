"use client";

import { motion } from "framer-motion";
import { HOMEPAGE_FEATURES } from "@/lib/constants/homepage";

export function FeaturesBento() {
  return (
    <section className="sx:hidden py-12 sx:py-24 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {HOMEPAGE_FEATURES.map((f, i) => {
            const Icon = f.icon;

            return (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{
                  y: -6,
                }}
                className={`
                  p-8
                  rounded-[2.5rem]
                  border
                  shadow-sm
                  hover:shadow-xl
                  transition-all
                  duration-300X
                  group
                  max-w-sm w-full mx-auto
                  text-center
                  ${f.cardColor}
                `}
              >
                <div
                  className={`
                    w-14 h-14
                    bg-white/70
                    rounded-2xl
                    flex items-center justify-center
                    mx-auto mb-6
                    backdrop-blur-sm
                    group-hover:scale-110
                    transition-transform
                    duration-100
                  `}
                >
                  <Icon
                    className={f.iconColor}
                    size={26}
                  />
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-2 justify-center">
                  {f.title}
                </h3>

                <p className="text-slate-500 text-sm leading-relaxed justify-center">
                  {f.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}