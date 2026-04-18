import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";
import toolsData from "@/data/tools.json";

export function generateStaticParams() {
  return toolsData.map((tool) => ({ slug: tool.slug }));
}

export default async function ToolPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const tool = toolsData.find((t) => t.slug === slug);
  if (!tool) notFound();

  return (
    <div className="flex flex-col gap-8 pb-24">
      <SectionWrapper className="py-0 md:py-0 pt-0 md:pt-0">
        <div className="bg-muted p-8 md:p-12 rounded-[2rem] border border-white/5 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-[80px] -mr-20 -mt-20 pointer-events-none" />

          <Link
            href="/tools"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-white transition-colors mb-12 relative z-10"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Tools
          </Link>

          <span className="inline-block rounded-full bg-accent/10 border border-accent/20 px-4 py-1.5 text-xs font-semibold text-accent mb-6 relative z-10">
            {tool.category}
          </span>

          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-white relative z-10">
            {tool.name}
          </h1>

          <p className="text-xl text-muted-foreground mb-10 relative z-10 max-w-2xl leading-relaxed">
            {tool.description}
          </p>

          <div className="mt-8 pt-8 border-t border-white/5 relative z-10">
            <Link
              href={tool.link}
              target="_blank"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90 shadow-[0_0_20px_rgba(136,85,255,0.2)]"
            >
              Visit {tool.name} <ExternalLink className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
