"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { GitBranch, GitPullRequest, Code2 } from "lucide-react";

const stats = [
  { icon: <GitBranch className="w-5 h-5 text-accent" />, value: "20+", label: "Repositories" },
  { icon: <GitPullRequest className="w-5 h-5 text-accent" />, value: "100+", label: "Commits (2024)" },
  { icon: <Code2 className="w-5 h-5 text-accent" />, value: "6+", label: "Projects Shipped" },
];

const contributions = [
  { lang: "TypeScript", pct: 38, color: "#3178C6" },
  { lang: "Python",     pct: 28, color: "#3776AB" },
  { lang: "JavaScript", pct: 18, color: "#F7DF1E" },
  { lang: "HTML/CSS",   pct: 10, color: "#E34F26" },
  { lang: "Other",      pct: 6,  color: "#8855ff" },
];

export default function GitHubStats() {
  return (
    <div className="flex flex-col gap-4">
      {/* Stats grid — 3 cards */}
      <div className="grid grid-cols-3 gap-4">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.5 }}
            className="bg-muted border border-white/5 rounded-2xl p-5 flex flex-col gap-3"
          >
            <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center">
              {s.icon}
            </div>
            <div>
              <p className="text-2xl font-bold text-white">{s.value}</p>
              <p className="text-xs text-muted-foreground font-medium mt-0.5">{s.label}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Language breakdown */}
      <div className="bg-muted border border-white/5 rounded-2xl p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-semibold text-white">Language Breakdown</h3>
          <Link
            href="https://github.com/abdsayeed"
            target="_blank"
            className="text-xs text-muted-foreground hover:text-accent transition-colors flex items-center gap-1.5"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
              <path d="M9 18c-4.51 2-5-2-7-2" />
            </svg>
            github.com/abdsayeed
          </Link>
        </div>
        <div className="flex h-2.5 rounded-full overflow-hidden gap-0.5 mb-4">
          {contributions.map((c) => (
            <motion.div
              key={c.lang}
              initial={{ width: 0 }}
              whileInView={{ width: `${c.pct}%` }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              style={{ backgroundColor: c.color }}
              className="h-full rounded-full"
            />
          ))}
        </div>
        <div className="flex flex-wrap gap-x-5 gap-y-2">
          {contributions.map((c) => (
            <div key={c.lang} className="flex items-center gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: c.color }} />
              <span className="text-xs text-muted-foreground">{c.lang}</span>
              <span className="text-xs text-white/30">{c.pct}%</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
