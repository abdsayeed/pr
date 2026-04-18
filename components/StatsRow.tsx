"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "+3", label: "Years of Experience" },
  { value: "+6", label: "Projects Completed" },
  { value: "+5", label: "Worldwide Clients" },
];

export default function StatsRow() {
  return (
    <div className="grid grid-cols-3 divide-x divide-white/10 bg-muted border border-white/5 rounded-[2rem] p-6 shadow-sm overflow-hidden">
      {stats.map((stat, i) => (
        <motion.div
          key={i}
          className="flex flex-col items-center justify-center text-center px-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1, duration: 0.5 }}
        >
          <span className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</span>
          <span className="text-xs sm:text-sm text-muted-foreground uppercase tracking-wider font-semibold">{stat.label}</span>
        </motion.div>
      ))}
    </div>
  );
}
