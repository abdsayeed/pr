"use client";

import { motion } from "framer-motion";
import { Award } from "lucide-react";

const certs = [
  {
    title: "Microcredential Preview Experience",
    issuer: "AWS Training & Certification",
    date: "Jan 2026",
    color: "#FF9900",
    badge: (
      <svg viewBox="0 0 40 40" className="w-8 h-8 shrink-0">
        <rect width="40" height="40" rx="8" fill="#232F3E"/>
        <path fill="#FF9900" d="M20 8c-6.6 0-12 5.4-12 12s5.4 12 12 12 12-5.4 12-12S26.6 8 20 8zm0 2c5.5 0 10 4.5 10 10s-4.5 10-10 10S10 25.5 10 20 14.5 10 20 10z"/>
        <path fill="#FF9900" d="M14 22.5c1.7 1.3 3.8 2 6 2s4.3-.7 6-2M20 14v6l3 3"/>
      </svg>
    ),
  },
  {
    title: "AWS Cloud Practitioner Essentials",
    issuer: "AWS Training & Certification",
    date: "Jan 2026",
    color: "#FF9900",
    badge: (
      <svg viewBox="0 0 40 40" className="w-8 h-8 shrink-0">
        <rect width="40" height="40" rx="8" fill="#232F3E"/>
        <path fill="#FF9900" d="M8 24l4-8 4 5 4-9 4 7 4-4 4 9H8z"/>
        <path fill="#FF9900" d="M10 28h20v2H10z"/>
      </svg>
    ),
  },
  {
    title: "MongoDB Tutorial",
    issuer: "Great Learning Academy",
    date: "Jul 2024",
    color: "#00ED64",
    badge: (
      <svg viewBox="0 0 40 40" className="w-8 h-8 shrink-0">
        <rect width="40" height="40" rx="8" fill="#001E2B"/>
        <path fill="#00ED64" d="M20 6c-1 5-4 8-4 14 0 4 1.8 7 4 8 2.2-1 4-4 4-8 0-6-3-9-4-14z"/>
        <ellipse fill="#00ED64" cx="20" cy="30" rx="2.5" ry="3"/>
      </svg>
    ),
  },
  {
    title: "Intro to Career Skills in Data Analytics",
    issuer: "LinkedIn Learning",
    date: "May 2024",
    color: "#0A66C2",
    badge: (
      <svg viewBox="0 0 40 40" className="w-8 h-8 shrink-0">
        <rect width="40" height="40" rx="8" fill="#0A66C2"/>
        <path fill="#fff" d="M10 16h5v14h-5zm2.5-7a2.5 2.5 0 110 5 2.5 2.5 0 010-5zM18 16h5v2s1.5-2.5 5-2.5c4 0 5 2.5 5 6V30h-5v-7c0-2-.5-3-2-3s-3 1-3 3v7h-5V16z"/>
      </svg>
    ),
  },
  {
    title: "Learning Data Analytics: 1 Foundations",
    issuer: "LinkedIn Learning",
    date: "May 2024",
    color: "#0A66C2",
    badge: (
      <svg viewBox="0 0 40 40" className="w-8 h-8 shrink-0">
        <rect width="40" height="40" rx="8" fill="#0A66C2"/>
        <path fill="#fff" d="M10 16h5v14h-5zm2.5-7a2.5 2.5 0 110 5 2.5 2.5 0 010-5zM18 16h5v2s1.5-2.5 5-2.5c4 0 5 2.5 5 6V30h-5v-7c0-2-.5-3-2-3s-3 1-3 3v7h-5V16z"/>
      </svg>
    ),
  },
  {
    title: "Python 101 for Data Science",
    issuer: "IBM / Cognitive Class",
    date: "Jun 2024",
    color: "#054ADA",
    badge: (
      <svg viewBox="0 0 40 40" className="w-8 h-8 shrink-0">
        <rect width="40" height="40" rx="8" fill="#054ADA"/>
        <path fill="#fff" d="M13 12h6c3 0 5 1.5 5 4s-2 4-5 4h-3v6h-3V12zm3 6h3c1.5 0 2-.7 2-2s-.5-2-2-2h-3v4zM26 12h3v14h-3z"/>
      </svg>
    ),
  },
];

export default function CertMarquee() {
  const items = [...certs, ...certs];

  return (
    <div className="relative flex overflow-hidden mask-image-gradient">
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, ease: "linear", duration: 35 }}
        className="flex w-max gap-4"
      >
        {items.map((cert, i) => (
          <div
            key={i}
            className="shrink-0 w-72 bg-muted border border-white/5 rounded-2xl p-5 flex flex-col gap-3 hover:border-white/10 transition-colors"
          >
            {/* Top row: badge + issuer */}
            <div className="flex items-center gap-3">
              {cert.badge}
              <span
                className="text-xs font-semibold uppercase tracking-wider"
                style={{ color: cert.color }}
              >
                {cert.issuer}
              </span>
            </div>

            {/* Title */}
            <p className="text-sm font-semibold text-white leading-snug">{cert.title}</p>

            {/* Date */}
            <div className="flex items-center gap-1.5 mt-auto">
              <Award className="w-3.5 h-3.5 text-muted-foreground" />
              <span className="text-xs text-muted-foreground">Completed {cert.date}</span>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
