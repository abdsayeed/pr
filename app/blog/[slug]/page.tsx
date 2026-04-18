import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";
import blogsData from "@/data/blogs.json";

export function generateStaticParams() {
  return blogsData.map((blog) => ({ slug: blog.slug }));
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const blog = blogsData.find((b) => b.slug === slug) as typeof blogsData[0] & { architectureDiagram?: string };
  if (!blog) notFound();

  // Use architecture diagram as hero if available, otherwise use thumbnail
  const heroImage = blog.architectureDiagram ?? blog.thumbnail;

  return (
    <div className="flex flex-col gap-8 pb-16">
      <SectionWrapper>
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-white transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4" /> Back to Blog
        </Link>

        {/* Hero image — architecture diagram for Aero, thumbnail for others */}
        <div className="relative w-full aspect-[16/7] rounded-[1.5rem] overflow-hidden border border-white/5 mb-8">
          <Image
            src={heroImage}
            alt={blog.title}
            fill
            className="object-cover"
          />
          {!blog.architectureDiagram && (
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
          )}
        </div>

        <span className="text-xs font-semibold uppercase tracking-wider text-accent mb-3 block">
          {blog.date}
        </span>
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-8 text-white leading-tight">
          {blog.title}
        </h1>

        <div className="bg-muted p-6 md:p-10 rounded-[1.5rem] border border-white/5">
          <div className="flex flex-col gap-5">
            {blog.content.map((paragraph, i) => (
              <p key={i} className="text-muted-foreground leading-relaxed text-sm md:text-base">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
