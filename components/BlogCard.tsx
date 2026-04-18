import Image from "next/image";
import Link from "next/link";

interface BlogCardProps {
  title: string;
  date: string;
  thumbnail: string;
  link: string;
}

export default function BlogCard({ title, date, thumbnail, link }: BlogCardProps) {
  return (
    <Link href={link} className="group block relative rounded-[1.5rem] overflow-hidden aspect-[4/3] bg-muted border border-white/5">
      <Image
        src={thumbnail}
        alt={title}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />
      {/* Gradient overlay — always visible at bottom */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

      {/* Text overlaid on image */}
      <div className="absolute bottom-0 left-0 right-0 p-5">
        <span className="text-xs font-semibold text-white/60 mb-1 block">{date}</span>
        <h3 className="text-base font-bold text-white leading-snug group-hover:text-accent transition-colors">
          {title}
        </h3>
      </div>
    </Link>
  );
}
