import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";
import TechMarquee from "@/components/TechMarquee";
import FAQ from "@/components/FAQ";
import faqsData from "@/data/faqs.json";

export default function Tools() {
  return (
    <div className="flex flex-col gap-10 pb-16">

      <section>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-3 text-white leading-tight">
          Top-Tier Tools for<br />Exceptional <span className="text-accent">Results</span>
        </h1>
        <p className="max-w-2xl text-base text-muted-foreground mb-8 leading-relaxed">
          The stack I rely on to build fast, scalable, and reliable products. Each tool was chosen for a reason.
        </p>
        <TechMarquee showLabel />
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
