import Link from "next/link";
import * as Icons from "lucide-react";

interface ToolCardProps {
  name: string;
  category: string;
  icon: string;
  href?: string;
}

export default function ToolCard({ name, category, icon, href }: ToolCardProps) {
  // Dynamically resolve icon from Lucide
  const IconComponent = (Icons as any)[icon] || Icons.Box;

  const inner = (
    <div className="group flex items-center gap-4 p-4 rounded-[1.5rem] bg-muted border border-white/5 hover:bg-white/[0.03] transition-all relative overflow-hidden">
       {/* Hover glow */}
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-accent/20 rounded-full blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
       
      <div className="flex items-center justify-center w-12 h-12 bg-background border border-white/10 rounded-2xl shrink-0 group-hover:border-accent/50 group-hover:text-accent transition-colors">
        <IconComponent className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors" />
      </div>
      <div className="flex flex-col z-10">
        <h4 className="font-semibold text-white text-sm">{name}</h4>
        <span className="text-xs text-muted-foreground">{category}</span>
      </div>
    </div>
  );

  if (href) {
    return <Link href={href} className="block">{inner}</Link>;
  }
  return inner;
}
