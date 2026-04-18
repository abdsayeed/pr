import SectionWrapper from "@/components/SectionWrapper";
import ContactForm from "@/components/ContactForm";
import { Mail, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <div className="flex flex-col gap-10 pb-16">

      <section>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-3 text-white leading-tight">
          Let&apos;s <span className="text-accent">talk.</span>
        </h1>
        <p className="text-base text-muted-foreground mb-8 max-w-md leading-relaxed">
          Always open for exciting opportunities, collaborations, or just a chat about tech. Send a message and I&apos;ll get back to you.
        </p>

        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          <div className="bg-muted p-5 rounded-2xl border border-white/5 flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0">
              <Mail className="w-4 h-4 text-accent" />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-0.5">Email</p>
              <a href="mailto:abdsayeedofficial@gmail.com" className="text-white font-medium hover:text-accent transition-colors text-sm">
                abdsayeedofficial@gmail.com
              </a>
            </div>
          </div>
          <div className="bg-muted p-5 rounded-2xl border border-white/5 flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0">
              <MapPin className="w-4 h-4 text-accent" />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-0.5">Location</p>
              <p className="text-white font-medium text-sm">London, United Kingdom</p>
            </div>
          </div>
        </div>
      </section>

      <SectionWrapper delay={0.05}>
        <div className="bg-muted p-6 md:p-8 rounded-[1.5rem] border border-white/5">
          <h2 className="text-lg font-bold text-white mb-6">Send a message</h2>
          <ContactForm />
        </div>
      </SectionWrapper>

    </div>
  );
}
