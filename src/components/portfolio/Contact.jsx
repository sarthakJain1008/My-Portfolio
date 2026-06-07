import React, { useState } from "react";
import { toast } from "sonner";
import { Mail, ArrowUpRight, Loader2 } from "lucide-react";
import { GithubIcon as Github, LinkedinIcon as Linkedin } from "../icons";
import Section from "./Section";
import { PROFILE } from "../../lib/portfolio-data";

const inputBase =
  "w-full bg-warm-alt border border-slate-200 rounded-xl px-4 py-3.5 text-base text-charcoal placeholder:text-charcoal-muted/50 focus:outline-none focus:ring-2 focus:ring-teal/30 focus:border-teal transition-all";

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
    <Section id="contact" label="Contact" title={null} altBg>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        {/* Left column */}
        <div className="lg:col-span-5">
          <p className="text-sm font-medium text-teal mb-4">
            Let's build something
          </p>
          <h2
            data-testid="contact-title"
            className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold tracking-tight text-charcoal leading-[1.08]"
          >
            Ready to automate{" "}
            <span className="gradient-text">the chaos</span>?
          </h2>
          <p className="mt-6 text-base text-charcoal-muted leading-relaxed max-w-md">
            I take on a small number of engagements each quarter — from MVPs to long-running platform
            builds. Send a brief, even a rough one, and I'll reply within 48 hours.
          </p>

          <div className="mt-10 space-y-2">
            <a
              href={`mailto:${PROFILE.email}`}
              data-testid="contact-email"
              className="group flex items-center justify-between bg-white rounded-xl px-5 py-4 border border-slate-100 hover:border-teal/20 hover:shadow-sm transition-all"
            >
              <span className="flex items-center gap-3 text-charcoal group-hover:text-teal transition-colors">
                <Mail className="w-4 h-4" />
                <span className="text-sm font-medium">{PROFILE.email}</span>
              </span>
              <ArrowUpRight className="w-4 h-4 text-charcoal-muted group-hover:text-teal transition-colors" />
            </a>
            <a
              href={PROFILE.github}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="contact-github"
              className="group flex items-center justify-between bg-white rounded-xl px-5 py-4 border border-slate-100 hover:border-teal/20 hover:shadow-sm transition-all"
            >
              <span className="flex items-center gap-3 text-charcoal group-hover:text-teal transition-colors">
                <Github className="w-4 h-4" />
                <span className="text-sm font-medium">github.com/sarthakJain1008</span>
              </span>
              <ArrowUpRight className="w-4 h-4 text-charcoal-muted group-hover:text-teal transition-colors" />
            </a>
            <a
              href={PROFILE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="contact-linkedin"
              className="group flex items-center justify-between bg-white rounded-xl px-5 py-4 border border-slate-100 hover:border-teal/20 hover:shadow-sm transition-all"
            >
              <span className="flex items-center gap-3 text-charcoal group-hover:text-teal transition-colors">
                <Linkedin className="w-4 h-4" />
                <span className="text-sm font-medium">LinkedIn · Sarthak Jain</span>
              </span>
              <ArrowUpRight className="w-4 h-4 text-charcoal-muted group-hover:text-teal transition-colors" />
            </a>
          </div>
        </div>

        {/* Right column — form */}
        <div className="lg:col-span-7">
          <form
            onSubmit={submit}
            data-testid="contact-form"
            className="bg-white rounded-2xl p-8 lg:p-10 border border-slate-100 shadow-sm"
          >
            <p className="text-sm font-medium text-charcoal-muted mb-6">
              {sent ? "Thanks for reaching out!" : "New project brief"}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="text-sm font-medium text-charcoal mb-1.5 block">
                  Your name
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
                <label className="text-sm font-medium text-charcoal mb-1.5 block">
                  Email
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
                <label className="text-sm font-medium text-charcoal mb-1.5 block">
                  Subject <span className="text-charcoal-muted font-normal">(optional)</span>
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
                <label className="text-sm font-medium text-charcoal mb-1.5 block">
                  Tell me about the project
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

            <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-4 justify-between">
              <p className="text-sm text-charcoal-muted">
                Replies within 48h · Mon–Fri
              </p>
              <button
                type="submit"
                data-testid="contact-submit"
                disabled={loading}
                className="group inline-flex items-center justify-center gap-3 px-8 py-3.5 text-white font-medium rounded-2xl transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed shadow-[0_4px_16px_rgba(13,148,136,0.35)]"
                style={{ background: "linear-gradient(135deg, #0D9488, #0F766E)" }}
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" /> Sending…
                  </>
                ) : (
                  <>
                    Send message
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
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
