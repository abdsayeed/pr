"use client";

import { motion } from "framer-motion";

const logos = [
  "Logoipsum", "logo ipsum", "Logoipsum", "logoipsum", "Logo ipsum", "Logoipsum", "logo ipsum",
];

export default function CompanyMarquee() {
  const items = [...logos, ...logos];

  return (
    <div>
      <p className="text-sm text-muted-foreground mb-5">
        Relied on by companies near, far, and worldwide
      </p>
      <div className="relative flex overflow-hidden mask-image-gradient">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
          className="flex w-max items-center gap-14"
        >
          {items.map((logo, i) => (
            <span
              key={i}
              className="text-xl font-bold text-white/20 whitespace-nowrap select-none"
            >
              {logo}
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
