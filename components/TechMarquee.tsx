"use client";

import { motion } from "framer-motion";

const tools = [
  {
    name: "TypeScript",
    svg: (
      <svg viewBox="0 0 128 128" className="w-7 h-7">
        <rect width="128" height="128" rx="6" fill="#3178C6"/>
        <path fill="#fff" d="M22 63h22v8H34v37h-9V71H22v-8zm44 0h-9v45h9V63zm-4-10c-3 0-5 2-5 5s2 5 5 5 5-2 5-5-2-5-5-5zm18 10h-8l12 22-13 23h8l9-17 9 17h8L83 85l12-22h-8l-9 16-9-16z"/>
      </svg>
    ),
  },
  {
    name: "Python",
    svg: (
      <svg viewBox="0 0 128 128" className="w-7 h-7">
        <path fill="#3776AB" d="M63.4 3C44.6 3 45.8 11 45.8 11l.02 8.3h18v2.5H29.5S18 20.3 18 39.3s9.9 18.3 9.9 18.3h5.9v-8.8s-.3-9.9 9.7-9.9h16.7s9.4.2 9.4-9.1V12.1S70.8 3 63.4 3zm-9.3 5.4c1.7 0 3 1.3 3 3s-1.3 3-3 3-3-1.3-3-3 1.3-3 3-3z"/>
        <path fill="#FFD43B" d="M64.6 125c18.8 0 17.6-8 17.6-8l-.02-8.3h-18v-2.5h34.3s11.5 1.2 11.5-17.8-9.9-18.3-9.9-18.3h-5.9v8.8s.3 9.9-9.7 9.9H67.8s-9.4-.2-9.4 9.1v15.7s-1.4 9.4 6.2 9.4zm9.3-5.4c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3z"/>
      </svg>
    ),
  },
  {
    name: "React",
    svg: (
      <svg viewBox="0 0 128 128" className="w-7 h-7">
        <circle cx="64" cy="64" r="11.4" fill="#61DAFB"/>
        <g fill="none" stroke="#61DAFB" strokeWidth="5">
          <ellipse cx="64" cy="64" rx="50" ry="19"/>
          <ellipse cx="64" cy="64" rx="50" ry="19" transform="rotate(60 64 64)"/>
          <ellipse cx="64" cy="64" rx="50" ry="19" transform="rotate(120 64 64)"/>
        </g>
      </svg>
    ),
  },
  {
    name: "Node.js",
    svg: (
      <svg viewBox="0 0 128 128" className="w-7 h-7">
        <path fill="#83CD29" d="M64 8L12 38v52l52 30 52-30V38L64 8z"/>
        <path fill="#404137" d="M64 8v120l52-30V38L64 8z"/>
        <path fill="#fff" d="M64 32L40 46v28l24 14 24-14V46L64 32zm0 10l16 9v18l-16 9-16-9V51l16-9z"/>
      </svg>
    ),
  },
  {
    name: "MongoDB",
    svg: (
      <svg viewBox="0 0 128 128" className="w-7 h-7">
        <path fill="#439934" d="M88.4 22.1C81.2 13.3 72.5 7.4 65.5 3c0 0-1.5 2.2-1.5 8.5 0 10.5 5.5 18.5 13.5 24.5 8 6 13 14.5 13 24.5 0 10-5 18.5-13 24.5-8 6-13.5 14-13.5 24.5 0 6.3 1.5 8.5 1.5 8.5 7-4.4 15.7-10.3 22.9-19.1 7.2-8.8 11.1-19.5 11.1-30.4 0-10.9-3.9-21.6-11.1-30.4z"/>
        <path fill="#4FAA41" d="M64 118s-1.5-2.2-1.5-8.5c0-10.5 5.5-18.5 13.5-24.5 8-6 13-14.5 13-24.5 0-10-5-18.5-13-24.5C68 29.9 62.5 21.9 62.5 11.5 62.5 5.2 64 3 64 3c-7 4.4-15.7 10.3-22.9 19.1C33.9 30.9 30 41.6 30 52.5c0 10.9 3.9 21.6 11.1 30.4C48.3 91.7 57 97.6 64 102v16z"/>
        <ellipse fill="#fff" cx="64" cy="108" rx="4" ry="6"/>
      </svg>
    ),
  },
  {
    name: "Azure",
    svg: (
      <svg viewBox="0 0 96 96" className="w-7 h-7">
        <defs>
          <linearGradient id="az" x1="0.5" y1="0" x2="0.5" y2="1">
            <stop offset="0" stopColor="#114A8B"/>
            <stop offset="1" stopColor="#0669BC"/>
          </linearGradient>
        </defs>
        <path fill="url(#az)" d="M33.3 6h27.4L33.8 90H6.5L33.3 6z"/>
        <path fill="#0078D4" d="M62.1 57.2L80.5 6H53.2L34.8 57.2h27.3z"/>
        <path fill="#1490DF" d="M89.5 90H62.2L44.8 57.2h17.3L89.5 90z"/>
      </svg>
    ),
  },
  {
    name: "Docker",
    svg: (
      <svg viewBox="0 0 128 128" className="w-7 h-7">
        <path fill="#2496ED" d="M124.8 52.1c-2.8-1.9-9.2-2.6-14.1-1.7-.6-4.9-3.4-9.2-8.4-13l-2.8-1.9-1.9 2.8c-2.4 3.6-3.6 8.6-3.2 13.4.2 1.6.7 4.5 2.4 7-1.7.9-5.1 2.2-9.6 2.1H4.4l-.3 1.5c-.9 5.4-.7 22.3 9.9 35.3 7.9 9.7 19.7 14.6 35.1 14.6 33.4 0 58.1-15.4 69.7-43.4 4.5.1 14.3.3 19.3-9.5.1-.3 1.3-2.6 1.7-3.4l-15-7.8zM68 55.5H55.5V43H68v12.5zm0-15.5H55.5V27.5H68V40zm15.5 15.5H71V43h12.5v12.5zm0-15.5H71V27.5h12.5V40zM40 55.5H27.5V43H40v12.5zm15.5 0H43V43h12.5v12.5z"/>
      </svg>
    ),
  },
  {
    name: "Flask",
    svg: (
      <svg viewBox="0 0 128 128" className="w-7 h-7">
        <path fill="#fff" d="M76 24c0-6.6-5.4-12-12-12S52 17.4 52 24c0 4.1 2.1 7.8 5.2 10L44 80H84L70.8 34c3.1-2.2 5.2-5.9 5.2-10z"/>
        <path fill="#fff" d="M36 80l-8 32h72l-8-32H36zm8 8h40l6 16H38l6-16z"/>
      </svg>
    ),
  },
  {
    name: "Angular",
    svg: (
      <svg viewBox="0 0 128 128" className="w-7 h-7">
        <path fill="#DD0031" d="M64 4L8 24l8.6 74.6L64 124l47.4-25.4L120 24z"/>
        <path fill="#C3002F" d="M64 4v120l47.4-25.4L120 24z"/>
        <path fill="#fff" d="M64 18L32 96h11.8l6.4-16h27.6l6.4 16H96L64 18zm0 22l10.4 26H53.6L64 40z"/>
      </svg>
    ),
  },
  {
    name: "Next.js",
    svg: (
      <svg viewBox="0 0 128 128" className="w-7 h-7">
        <circle cx="64" cy="64" r="56" fill="#000"/>
        <circle cx="64" cy="64" r="54" fill="none" stroke="#fff" strokeWidth="2"/>
        <path fill="#fff" d="M42 88V40h8l32 36V40h8v48h-8L50 52v36h-8z"/>
      </svg>
    ),
  },
  {
    name: "Git",
    svg: (
      <svg viewBox="0 0 128 128" className="w-7 h-7">
        <path fill="#F05032" d="M124.7 58.3L69.7 3.3a11.2 11.2 0 00-15.8 0L42.1 15.1l15.8 15.8a13.3 13.3 0 0116.8 16.9l15.2 15.2a13.3 13.3 0 11-8 7.6L66.5 55.2v34.1a13.3 13.3 0 11-10.9-.4V54.4a13.3 13.3 0 01-7.2-17.4L32.8 21.4 3.3 50.9a11.2 11.2 0 000 15.8l55 55a11.2 11.2 0 0015.8 0l50.6-50.6a11.2 11.2 0 000-15.8z"/>
      </svg>
    ),
  },
];

interface TechMarqueeProps {
  showLabel?: boolean;
}

export default function TechMarquee({ showLabel = false }: TechMarqueeProps) {
  const items = [...tools, ...tools];

  return (
    <div className="relative flex overflow-hidden mask-image-gradient">
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, ease: "linear", duration: 28 }}
        className="flex w-max items-center gap-8"
      >
        {items.map((tool, i) =>
          showLabel ? (
            <div
              key={i}
              className="flex items-center gap-3 bg-muted border border-white/5 rounded-2xl px-5 py-3 shrink-0 hover:border-accent/30 transition-colors"
            >
              <div className="opacity-80">{tool.svg}</div>
              <div>
                <p className="text-sm font-semibold text-white">{tool.name}</p>
              </div>
            </div>
          ) : (
            <div key={i} className="flex flex-col items-center gap-1.5 opacity-30 hover:opacity-70 transition-opacity shrink-0">
              {tool.svg}
              <span className="text-[10px] text-muted-foreground font-medium whitespace-nowrap">{tool.name}</span>
            </div>
          )
        )}
      </motion.div>
    </div>
  );
}
