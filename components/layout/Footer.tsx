"use client";

import React, { FormEvent, useState } from "react";
import Link from "next/link";
import { Container } from "./Container";
import { Input, Button } from "../ui/custom-ui";
import { ArrowRight, Twitter, Github, Linkedin, Send } from "lucide-react";

export function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "loading">("idle");

  const handleSubscribe = (e: FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");
    setTimeout(() => {
      setStatus("success");
      setEmail("");
    }, 1200);
  };

  return (
    <footer className="bg-[#050508] border-t border-border py-16 lg:py-24 relative overflow-hidden">
      {/* Decorative Grid/Light Effects */}
      <div className="absolute inset-0 bg-radial-at-b from-indigo/5 via-transparent to-transparent pointer-events-none" />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-border">
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-4 space-y-5">
            <Link href="/" className="inline-block">
              <span className="font-display font-black text-xl tracking-tighter text-text-primary">
                NEXUS
              </span>
            </Link>
            <p className="text-text-secondary text-sm leading-relaxed max-w-sm">
              We help local businesses, clinics, restaurants, and professional services modernize with high-conversion websites, CRM automation, and tailored AI integrations.
            </p>
            <div className="flex items-center gap-3.5 text-text-muted">
              <a href="#" className="hover:text-indigo transition-colors" aria-label="Twitter">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="hover:text-indigo transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="hover:text-indigo transition-colors" aria-label="GitHub">
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Services Links */}
          <div className="lg:col-span-2.5 space-y-4 lg:col-start-6">
            <h4 className="text-xs font-semibold text-text-primary tracking-wider uppercase">
              Services
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/services#websites" className="text-text-secondary hover:text-text-primary transition-colors">
                  Web Development
                </Link>
              </li>
              <li>
                <Link href="/services#automation" className="text-text-secondary hover:text-text-primary transition-colors">
                  Automation & Workflows
                </Link>
              </li>
              <li>
                <Link href="/services#ai" className="text-text-secondary hover:text-text-primary transition-colors">
                  AI System Integrations
                </Link>
              </li>
              <li>
                <Link href="/services#improvement" className="text-text-secondary hover:text-text-primary transition-colors">
                  UX & Speed Optimization
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Agency Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-semibold text-text-primary tracking-wider uppercase">
              Agency
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/about/" className="text-text-secondary hover:text-text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/case-studies/" className="text-text-secondary hover:text-text-primary transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/contact/" className="text-text-secondary hover:text-text-primary transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/audit/" className="text-text-secondary hover:text-text-primary transition-colors">
                  Free Digital Audit
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Newsletter Signup */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-semibold text-text-primary tracking-wider uppercase">
              Stay Updated
            </h4>
            <p className="text-text-secondary text-sm leading-relaxed">
              Subscribe to get actionable digital tips and AI automations for your business.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-2 relative">
              <div className="relative flex items-center">
                <Input
                  type="email"
                  required
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pr-12 text-sm bg-void border-border focus:border-indigo"
                  disabled={status === "success"}
                />
                <button
                  type="submit"
                  className="absolute right-2 p-2 rounded-lg bg-indigo text-white hover:bg-indigo/90 active:scale-95 transition-all disabled:opacity-50"
                  disabled={status === "loading" || status === "success"}
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
              {status === "success" && (
                <p className="text-xs text-success font-medium">
                  Thanks for subscribing! Check your inbox.
                </p>
              )}
            </form>
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-text-muted">
          <p>&copy; {new Date().getFullYear()} Nexus Digital. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
