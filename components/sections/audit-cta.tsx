"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Search, CheckCircle } from "lucide-react";

const auditItems = [
  "Website speed & performance",
  "Mobile experience",
  "SEO health",
  "Conversion opportunities",
  "AI & automation potential",
];

export function AuditCTA() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl gradient-primary p-10 lg:p-16"
        >
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />

          <div className="relative grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 px-4 py-1.5 mb-6">
                <Search className="w-4 h-4 text-accent-300" />
                <span className="text-sm font-medium text-white/90">
                  Free — No commitment
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                Get a Free Digital Audit of Your Business
              </h2>
              <p className="text-lg text-white/80 mb-8 leading-relaxed">
                We'll analyze your current website, online presence, and operations — then send
                you a personalized report with actionable recommendations.
              </p>

              <Link
                href="/audit/"
                className="inline-flex items-center gap-2 rounded-full bg-white text-primary-700 hover:bg-slate-100 px-8 py-4 text-base font-bold transition-all hover:gap-3 shadow-xl"
              >
                Request Your Free Audit
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 p-8">
              <p className="text-sm font-semibold text-white/70 uppercase tracking-wider mb-6">
                Your audit includes:
              </p>
              <div className="space-y-4">
                {auditItems.map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-accent-400 flex-shrink-0" />
                    <span className="text-white/90">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
