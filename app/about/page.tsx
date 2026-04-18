import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";
import FAQ from "@/components/FAQ";
import experiencesData from "@/data/experiences.json";
import faqsData from "@/data/faqs.json";

export default function About() {
  return (
    <div className="flex flex-col gap-10 pb-16">

      <section>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-3 text-white leading-tight">
          Over 3 Years of<br />Engineering <span className="text-accent">Expertise</span>
        </h1>
        <p className="text-base text-muted-foreground max-w-2xl leading-relaxed">
          London-based full-stack developer building web applications that solve real problems — from AI-powered platforms to cloud-deployed APIs.
        </p>
      </section>

      {/* Experience Timeline */}
      <SectionWrapper delay={0.05}>
        <div className="flex flex-col gap-4">
          {experiencesData.map((exp) => (
            <div key={exp.slug} className="bg-muted border border-white/5 rounded-[1.5rem] p-6 hover:border-white/10 transition-colors">
              <span className="text-xs font-semibold uppercase tracking-wider text-accent mb-2 block">{exp.period}</span>
              <h3 className="text-lg font-bold text-white mb-0.5">{exp.company}</h3>
              <p className="text-sm text-muted-foreground mb-3">{exp.role}</p>
              <p className="text-muted-foreground leading-relaxed text-sm mb-4">{exp.description}</p>
              <div className="flex flex-wrap gap-2">
                {exp.tags.map((tag) => (
                  <span key={tag} className="rounded-full bg-white/5 border border-white/10 px-3 py-1 text-xs font-semibold text-white/70">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Core Stack */}
      <SectionWrapper delay={0.05}>
        <div className="bg-muted p-6 md:p-8 rounded-[1.5rem] border border-white/5">
          <h2 className="text-xl font-bold mb-5 text-white">Core Stack</h2>
          <div className="flex flex-wrap gap-2">
            {["JavaScript", "TypeScript", "Python", "React", "Node.js", "Flask", "Angular", "MongoDB", "PostgreSQL", "Azure", "Docker", "Git", "HTML/CSS", "TensorFlow"].map((skill) => (
              <span key={skill} className="rounded-full bg-accent/10 border border-accent/20 px-3 py-1.5 text-sm font-semibold text-white/90">{skill}</span>
            ))}
          </div>
        </div>
      </SectionWrapper>

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
