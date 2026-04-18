import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";
import BlogCard from "@/components/BlogCard";
import blogsData from "@/data/blogs.json";

export default function Blog() {
  return (
    <div className="flex flex-col gap-10 pb-16">

      <section>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-3 text-white leading-tight">
          Design Thoughts<br />and <span className="text-accent">Perspectives</span>
        </h1>
        <p className="max-w-2xl text-base text-muted-foreground mb-8 leading-relaxed">
          Articles and tutorials about engineering, design, and the intersection of both.
        </p>
        <div className="grid gap-4 md:grid-cols-2">
          {blogsData.map((b) => (
            <BlogCard key={b.slug} title={b.title} date={b.date} thumbnail={b.thumbnail} link={`/blog/${b.slug}`} />
          ))}
        </div>
      </section>

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
