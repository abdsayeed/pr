"use client";

import { motion } from "framer-motion";

interface Testimonial {
  client: string;
  role: string;
  review: string;
}

export default function TestimonialMarquee({ testimonials }: { testimonials: Testimonial[] }) {
  // Duplicate the array to create a seamless infinite loop
  const items = [...testimonials, ...testimonials];

  return (
    <div className="relative flex overflow-hidden group mask-image-gradient py-4">
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 20, // Adjust speed here
        }}
        className="flex w-max gap-6 px-3"
      >
        {items.map((t, i) => (
          <div
            key={i}
            className="w-[350px] shrink-0 rounded-[2rem] border border-white/5 bg-muted p-8 flex flex-col gap-4 shadow-sm"
          >
            <p className="text-muted-foreground italic leading-relaxed text-sm flex-1">
              &quot;{t.review}&quot;
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-background border border-white/10 flex items-center justify-center shrink-0">
                <span className="font-bold text-accent text-sm">{t.client.charAt(0)}</span>
              </div>
              <div className="flex flex-col">
                <span className="font-semibold text-white text-sm">{t.client}</span>
                <span className="text-xs text-muted-foreground">{t.role}</span>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
