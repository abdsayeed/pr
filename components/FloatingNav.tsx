"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Home, FolderKanban, Wrench, Briefcase, BookOpen, Mail } from "lucide-react";

export default function FloatingNav() {
  const pathname = usePathname();
  const [copied, setCopied] = useState(false);

  const navLinks = [
    { name: "Home",       href: "/",          icon: <Home className="w-5 h-5" /> },
    { name: "Projects",   href: "/projects",  icon: <FolderKanban className="w-5 h-5" /> },
    { name: "Tools",      href: "/tools",     icon: <Wrench className="w-5 h-5" /> },
    { name: "Experience", href: "/about",     icon: <Briefcase className="w-5 h-5" /> },
    { name: "Thoughts",   href: "/blog",      icon: <BookOpen className="w-5 h-5" /> },
    { name: "Contact",    href: "/contact",   icon: <Mail className="w-5 h-5" /> },
  ];

  function handleCopy() {
    navigator.clipboard.writeText("abdsayeedofficial@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      <nav className="flex items-center gap-1 px-2 py-2 bg-muted/90 backdrop-blur-md border border-white/5 rounded-full shadow-2xl">
        {navLinks.map((link) => {
          const isActive =
            link.href === "/"
              ? pathname === "/"
              : pathname.startsWith(link.href);
          return (
            <Link
              key={link.href}
              href={link.href}
              title={link.name}
              className={`flex items-center justify-center w-10 h-10 rounded-full transition-all ${
                isActive
                  ? "bg-accent text-white shadow-[0_0_16px_rgba(136,85,255,0.5)]"
                  : "text-muted-foreground hover:text-white hover:bg-white/5"
              }`}
            >
              {link.icon}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
