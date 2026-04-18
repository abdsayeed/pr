"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Send } from "lucide-react";

// Replace these with your actual EmailJS credentials
const EMAILJS_SERVICE_ID  = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID  ?? "";
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "";
const EMAILJS_PUBLIC_KEY  = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY  ?? "";

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!formRef.current) return;
    setStatus("loading");

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      );
      setStatus("success");
      formRef.current.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-green-500/20 bg-green-500/10 p-8 text-center">
        <h3 className="text-lg font-semibold text-green-400 mb-1">Message sent!</h3>
        <p className="text-sm text-muted-foreground">Thanks for reaching out — I&apos;ll get back to you soon.</p>
      </div>
    );
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="from_name" className="block text-sm font-medium text-muted-foreground mb-2">Name</label>
          <input
            id="from_name"
            name="from_name"
            required
            className="w-full rounded-xl border border-white/10 bg-background px-4 py-3 text-sm text-white outline-none transition-colors focus:border-accent placeholder:text-muted-foreground/50"
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="reply_to" className="block text-sm font-medium text-muted-foreground mb-2">Email</label>
          <input
            id="reply_to"
            name="reply_to"
            type="email"
            required
            className="w-full rounded-xl border border-white/10 bg-background px-4 py-3 text-sm text-white outline-none transition-colors focus:border-accent placeholder:text-muted-foreground/50"
            placeholder="your@email.com"
          />
        </div>
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-muted-foreground mb-2">Message</label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full rounded-xl border border-white/10 bg-background px-4 py-3 text-sm text-white outline-none transition-colors focus:border-accent resize-none placeholder:text-muted-foreground/50"
          placeholder="Tell me about your project..."
        />
      </div>
      <button
        type="submit"
        disabled={status === "loading"}
        className="inline-flex items-center gap-2 rounded-full bg-accent px-8 py-3 text-sm font-semibold text-white transition-all hover:opacity-90 disabled:opacity-50 shadow-[0_0_20px_rgba(136,85,255,0.3)]"
      >
        {status === "loading" ? "Sending..." : "Send Message"}
        <Send className="h-4 w-4" />
      </button>
      {status === "error" && (
        <p className="text-red-400 text-sm">Something went wrong. Please try again or email me directly.</p>
      )}
    </form>
  );
}
