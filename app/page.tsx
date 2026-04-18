import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";
import FeatureCard from "@/components/FeatureCard";
import TechMarquee from "@/components/TechMarquee";
import GitHubStats from "@/components/GitHubStats";
import CertMarquee from "@/components/CertMarquee";
import BlogCard from "@/components/BlogCard";
import FAQ from "@/components/FAQ";

import projectsData from "@/data/projects.json";
import blogsData from "@/data/blogs.json";
import faqsData from "@/data/faqs.json";

export default function Home() {
  return (
    <div className="flex flex-col gap-10 pb-16">

      {/* Hero */}
      <section>
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-4 text-white leading-[1.05]">
          Transforming Your<br />
          Ideas into <span className="text-accent">Reality</span>
        </h1>
        <p className="text-muted-foreground text-sm md:text-base mb-8 max-w-md leading-relaxed">
          Passionate about creating intuitive and engaging user experiences. London-based full-stack developer building web applications that solve real problems.
        </p>

        {/* Stats inline */}
        <div className="flex gap-8 mb-8">
          {[
            { value: "+3", top: "YEARS OF",  bot: "EXPERIENCE" },
            { value: "+10", top: "PROJECTS",  bot: "COMPLETED" },
          ].map((s) => (
            <div key={s.top} className="flex flex-col">
              <span className="text-3xl md:text-4xl font-bold text-white">{s.value}</span>
              <span className="text-[10px] text-muted-foreground uppercase tracking-wider font-semibold leading-tight mt-1">{s.top}</span>
              <span className="text-[10px] text-muted-foreground uppercase tracking-wider font-semibold leading-tight">{s.bot}</span>
            </div>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-5 mb-10">
          <Link
            href="/contact"
            className="inline-flex h-11 items-center justify-center rounded-full bg-accent px-7 text-sm font-semibold text-white transition-all hover:opacity-90 shadow-[0_0_24px_rgba(136,85,255,0.4)]"
          >
            Let&apos;s Talk
          </Link>
          <Link
            href="/projects"
            className="inline-flex h-11 items-center gap-2 text-sm font-semibold text-white hover:text-accent transition-colors"
          >
            My Work <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Tech marquee — small icons */}
        <TechMarquee />
      </section>

      {/* Projects */}
      <SectionWrapper delay={0.05}>
        <div className="mb-5 flex items-start justify-between">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white leading-tight">
            Recent Projects<br />and <span className="text-accent">Achievements</span>
          </h2>
          <Link href="/projects" className="group hidden md:flex items-center gap-1.5 text-sm text-muted-foreground hover:text-accent transition-colors shrink-0 ml-4 mt-1">
            View all <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {projectsData.slice(0, 4).map((p) => (
            <FeatureCard key={p.title} {...p} />
          ))}
        </div>
      </SectionWrapper>

      {/* Tools marquee */}
      <SectionWrapper delay={0.05}>
        <div className="mb-5">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white leading-tight">
            Top-Tier Tools for<br />Exceptional <span className="text-accent">Results</span>
          </h2>
        </div>
        <TechMarquee showLabel />
      </SectionWrapper>

      {/* GitHub Stats */}
      <SectionWrapper delay={0.05}>
        <div className="mb-5">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white leading-tight">
            Open Source &amp;<br /><span className="text-accent">GitHub</span> Activity
          </h2>
        </div>
        <GitHubStats />
      </SectionWrapper>

      {/* Certifications marquee */}
      <SectionWrapper delay={0.05}>
        <div className="mb-5">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white leading-tight">
            Certifications &amp;<br /><span className="text-accent">Credentials</span>
          </h2>
        </div>
        <CertMarquee />
      </SectionWrapper>

      {/* Blog */}
      <SectionWrapper delay={0.05}>
        <div className="mb-5 flex items-start justify-between">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white leading-tight">
            Design Thoughts<br />and <span className="text-accent">Perspectives</span>
          </h2>
          <Link href="/blog" className="group hidden md:flex items-center gap-1.5 text-sm text-muted-foreground hover:text-accent transition-colors shrink-0 ml-4 mt-1">
            View all <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {blogsData.slice(0, 4).map((b) => (
            <BlogCard key={b.slug} title={b.title} date={b.date} thumbnail={b.thumbnail} link={`/blog/${b.slug}`} />
          ))}
        </div>
      </SectionWrapper>

      {/* FAQ */}
      <SectionWrapper delay={0.05}>
        <FAQ faqs={faqsData} />
      </SectionWrapper>

      {/* CTA */}
      <SectionWrapper delay={0.05}>
        <div className="bg-muted border border-white/5 rounded-[2rem] p-8 md:p-12 flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight mb-2">
              Let&apos;s<br /><span className="text-accent">collaborate</span>
            </h2>
            <p className="text-muted-foreground max-w-sm leading-relaxed text-sm">
              Unlock the potential of your product with expert full-stack development and cloud engineering. Let&apos;s build something that holds up under real-world pressure.
            </p>
          </div>
          <Link
            href="/contact"
            className="shrink-0 w-14 h-14 rounded-full bg-accent flex items-center justify-center shadow-[0_0_30px_rgba(136,85,255,0.4)] hover:scale-110 transition-transform"
          >
            <ArrowRight className="w-6 h-6 text-white" />
          </Link>
        </div>
      </SectionWrapper>

    </div>
  );
}
