import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";
import FeatureCard from "@/components/FeatureCard";
import FAQ from "@/components/FAQ";
import projectsData from "@/data/projects.json";
import faqsData from "@/data/faqs.json";

export default function Projects() {
  return (
    <div className="flex flex-col gap-10 pb-16">

      <section>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-3 text-white leading-tight">
          Recent Projects<br />and <span className="text-accent">Achievements</span>
        </h1>
        <p className="max-w-2xl text-base text-muted-foreground mb-8 leading-relaxed">
          Every project is built with the same principles: clean architecture, security by design, and code that holds up under real-world pressure.
        </p>
        <div className="grid gap-4 md:grid-cols-2">
          {projectsData.map((p) => (
            <FeatureCard key={p.title} {...p} />
          ))}
        </div>
      </section>

      <SectionWrapper delay={0.05}>
        <FAQ faqs={faqsData} />
      </SectionWrapper>

      <SectionWrapper delay={0.05}>
        <div className="bg-muted border border-white/5 rounded-[2rem] p-8 md:p-12 flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight mb-2">
              Let&apos;s<br /><span className="text-accent">collaborate</span>
            </h2>
            <p className="text-muted-foreground max-w-sm leading-relaxed text-sm">
              Unlock the potential of your product with expert full-stack development and cloud engineering services.
            </p>
          </div>
          <Link href="/contact" className="shrink-0 w-14 h-14 rounded-full bg-accent flex items-center justify-center shadow-[0_0_30px_rgba(136,85,255,0.4)] hover:scale-110 transition-transform">
            <ArrowRight className="w-6 h-6 text-white" />
          </Link>
        </div>
      </SectionWrapper>

    </div>
  );
}
