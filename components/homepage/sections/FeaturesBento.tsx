"use client";
import { motion } from "framer-motion";
import { HOMEPAGE_FEATURES } from "@/lib/constants/homepage";


export function FeaturesBento() {
  return (
    <section className="py-12 md:py-24 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {HOMEPAGE_FEATURES.map((f) => {
            const Icon = f.icon;

            return (
              <motion.div key={f.title}>
                <div
                  className={`w-12 h-12 ${f.cardColor} border rounded-2xl flex items-center justify-center`}
                >
                  <Icon className={f.iconColor} size={24} />
                </div>

                <h3>{f.title}</h3>
                <p>{f.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
