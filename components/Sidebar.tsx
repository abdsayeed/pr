import Image from "next/image";
import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="w-full lg:w-64 lg:sticky lg:top-24 flex flex-col gap-4 shrink-0 self-start">
      {/* Profile Card */}
      <div className="bg-muted rounded-[2rem] border border-white/5 overflow-hidden shadow-lg flex flex-col">
        {/* Portrait photo — tall crop */}
        <div className="relative w-full aspect-[3/4]">
          <Image
            src="https://avatars.githubusercontent.com/abdsayeed"
            fill
            className="object-cover object-top"
            alt="Abdullah Al Sayeed"
          />
          {/* subtle gradient at bottom */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-transparent to-transparent" />
        </div>

        {/* Info below photo */}
        <div className="px-6 pt-4 pb-6 flex flex-col items-center text-center gap-3">
          <div>
            <h2 className="text-xl font-bold text-white">Abdullah Al Sayeed</h2>
            <p className="text-muted-foreground text-sm mt-0.5">Full-Stack &amp; ML Engineer</p>
            <p className="text-muted-foreground text-sm">London, United Kingdom</p>
          </div>

          {/* Socials */}
          <div className="flex items-center gap-3 mt-1">
            <Link href="https://github.com/abdsayeed" target="_blank" className="text-muted-foreground hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
            </Link>
            <Link href="https://www.linkedin.com/in/abdullah-al-sayeed-50522a22b/" target="_blank" className="text-muted-foreground hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </Link>
            <Link href="https://www.instagram.com/mr.t9vir" target="_blank" className="text-muted-foreground hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
              </svg>
            </Link>
            <Link href="mailto:abdsayeedofficial@gmail.com" className="text-muted-foreground hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="16" x="2" y="4" rx="2"/>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
              </svg>
            </Link>
          </div>

          {/* CTA */}
          <Link
            href="/contact"
            className="w-full mt-2 inline-flex h-11 items-center justify-center rounded-full bg-accent text-sm font-semibold text-white transition-all hover:opacity-90 shadow-[0_0_20px_rgba(136,85,255,0.3)]"
          >
            Let&apos;s Talk
          </Link>
        </div>
      </div>
    </aside>
  );
}
