import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface FeatureCardProps {
  title: string;
  description: string;
  tags: string[];
  link: string;
}

export default function FeatureCard({ title, description, tags, link }: FeatureCardProps) {
  return (
    <Link href={link} className="group block h-full">
      <div className="h-full rounded-[2rem] border border-white/5 bg-muted p-8 shadow-sm transition-all hover:bg-white/[0.03] hover:-translate-y-1 relative overflow-hidden flex flex-col">
        {/* Subtle accent glow */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-3xl -mr-10 -mt-10 transition-opacity opacity-0 group-hover:opacity-100" />
        
        <div className="flex justify-between items-start mb-6 align-top">
          <h3 className="text-2xl font-bold tracking-tight text-white">{title}</h3>
          <ArrowUpRight className="h-6 w-6 text-muted-foreground group-hover:text-accent transition-colors shrink-0 ml-4" />
        </div>
        <p className="text-muted-foreground mb-8 leading-relaxed flex-1">
          {description}
        </p>
        <div className="flex flex-wrap gap-2 mt-auto">
          {tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center rounded-full bg-white/5 border border-white/10 px-3 py-1 text-xs font-semibold text-white/80"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
