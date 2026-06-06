import React, { useState } from "react";
import { toast } from "sonner";
import { Mail, ArrowUpRight, Loader2 } from "lucide-react";
import { GithubIcon as Github, LinkedinIcon as Linkedin } from "../icons";
import Section from "./Section";
import { PROFILE } from "../../lib/portfolio-data";

const inputBase =
  "w-full bg-transparent border-b border-white/15 px-0 py-4 font-mono text-base text-white placeholder:text-white/30 focus:outline-none focus:border-lime transition-colors";

export const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Name, email and message are required.");
      return;
    }
    setLoading(true);
    try {
      // Simulate success (no backend in local dev)
      await new Promise((res) => setTimeout(res, 1200));
      toast.success("Message saved. Sarthak will reply within 48h.");
      setSent(true);
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch {
      toast.error("Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Section id="contact" label="Contact" title={null}>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
        {/* Left column */}
        <div className="lg:col-span-5">
          <p className="font-mono text-xs uppercase tracking-[0.28em] text-lime mb-4">
            // Let's build something
          </p>
          <h2
            data-testid="contact-title"
            className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[0.95]"
          >
            Got a problem
            <br />
            worth <span className="italic text-lime lime-text-shadow">solving</span>?
          </h2>
          <p className="mt-8 font-mono text-sm text-white/60 leading-relaxed max-w-md">
            I take on a small number of engagements each quarter — from MVPs to long-running platform
            builds. Send a brief, even a rough one, and I'll reply within 48 hours.
          </p>

          <div className="mt-12 space-y-4">
            <a
              href={`mailto:${PROFILE.email}`}
              data-testid="contact-email"
              className="group flex items-center justify-between border-t border-white/10 py-4 hover:text-lime transition-colors"
            >
              <span className="flex items-center gap-3 text-white group-hover:text-lime">
                <Mail className="w-4 h-4" />
                <span className="font-mono text-sm">{PROFILE.email}</span>
              </span>
              <ArrowUpRight className="w-4 h-4 text-white/40 group-hover:text-lime" />
            </a>
            <a
              href={PROFILE.github}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="contact-github"
              className="group flex items-center justify-between border-t border-white/10 py-4 hover:text-lime transition-colors"
            >
              <span className="flex items-center gap-3 text-white group-hover:text-lime">
                <Github className="w-4 h-4" />
                <span className="font-mono text-sm">github.com/sarthakJain1008</span>
              </span>
              <ArrowUpRight className="w-4 h-4 text-white/40 group-hover:text-lime" />
            </a>
            <a
              href={PROFILE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="contact-linkedin"
              className="group flex items-center justify-between border-t border-b border-white/10 py-4 hover:text-lime transition-colors"
            >
              <span className="flex items-center gap-3 text-white group-hover:text-lime">
                <Linkedin className="w-4 h-4" />
                <span className="font-mono text-sm">linkedin · sarthak-jain</span>
              </span>
              <ArrowUpRight className="w-4 h-4 text-white/40 group-hover:text-lime" />
            </a>
          </div>
        </div>

        {/* Right column — form */}
        <div className="lg:col-span-7">
          <form
            onSubmit={submit}
            data-testid="contact-form"
            className="border border-white/10 p-8 lg:p-12 bg-ink-surface"
          >
            <p className="font-mono text-xs uppercase tracking-[0.28em] text-white/40 mb-8">
              {sent ? "// Thanks for reaching out" : "// New project brief"}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-8">
              <div>
                <label className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/40">
                  01 · Your name
                </label>
                <input
                  data-testid="contact-input-name"
                  type="text"
                  value={form.name}
                  onChange={update("name")}
                  placeholder="Jane Cooper"
                  className={inputBase}
                  required
                />
              </div>
              <div>
                <label className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/40">
                  02 · Email
                </label>
                <input
                  data-testid="contact-input-email"
                  type="email"
                  value={form.email}
                  onChange={update("email")}
                  placeholder="you@company.com"
                  className={inputBase}
                  required
                />
              </div>
              <div className="sm:col-span-2">
                <label className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/40">
                  03 · Subject (optional)
                </label>
                <input
                  data-testid="contact-input-subject"
                  type="text"
                  value={form.subject}
                  onChange={update("subject")}
                  placeholder="AI workflow MVP / Spring Boot platform / etc."
                  className={inputBase}
                />
              </div>
              <div className="sm:col-span-2">
                <label className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/40">
                  04 · Tell me about the project
                </label>
                <textarea
                  data-testid="contact-input-message"
                  rows={5}
                  value={form.message}
                  onChange={update("message")}
                  placeholder="Goals, timeline, stack constraints, budget range…"
                  className={`${inputBase} resize-none`}
                  required
                />
              </div>
            </div>

            <div className="mt-10 flex flex-col sm:flex-row sm:items-center gap-4 justify-between">
              <p className="font-mono text-xs text-white/40">
                Replies within 48h · Mon–Fri, IST
              </p>
              <button
                type="submit"
                data-testid="contact-submit"
                disabled={loading}
                className="group inline-flex items-center justify-center gap-4 px-8 py-4 bg-lime text-black font-mono text-xs uppercase tracking-[0.22em] hover:bg-lime-hover transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" /> Sending…
                  </>
                ) : (
                  <>
                    Send message
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
