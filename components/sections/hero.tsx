"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, CheckCircle, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-slate-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-primary-50 border border-primary-200 px-4 py-1.5 mb-6">
              <Sparkles className="w-4 h-4 text-primary-600" />
              <span className="text-sm font-medium text-primary-700">
                Now offering AI-powered solutions
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-[1.1] mb-6">
              Your Business,{" "}
              <span className="text-primary-600">Digitally Transformed</span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed mb-8 max-w-xl">
              We help small businesses, clinics, restaurants, and service companies
              modernize with professional websites, smart automation, and AI tools
              that actually work.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Link
                href="/audit/"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-accent-500 hover:bg-accent-600 text-white px-8 py-4 text-base font-semibold transition-all hover:gap-3 shadow-lg shadow-accent-500/25"
              >
                Get Your Free Audit
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/case-studies/"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white border-2 border-slate-200 hover:border-primary-300 text-slate-700 px-8 py-4 text-base font-semibold transition-all hover:bg-slate-50"
              >
                See Our Results
              </Link>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 text-sm text-slate-500">
              {[
                "No long-term contracts",
                "Results in 30 days",
                "Dedicated support",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary-500 flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="relative bg-white rounded-2xl shadow-2xl border border-slate-200/60 overflow-hidden">
              {/* Browser Chrome */}
              <div className="flex items-center gap-2 px-4 py-3 bg-slate-100 border-b border-slate-200">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <div className="flex-1 mx-4">
                  <div className="bg-white rounded-md px-3 py-1 text-xs text-slate-400 text-center border border-slate-200">
                    yourbusiness.com
                  </div>
                </div>
              </div>

              {/* Mock Website Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center">
                    <span className="text-white font-bold text-xs">B</span>
                  </div>
                  <div className="h-3 w-32 bg-slate-200 rounded" />
                  <div className="ml-auto flex gap-3">
                    <div className="h-3 w-16 bg-slate-200 rounded" />
                    <div className="h-3 w-16 bg-slate-200 rounded" />
                    <div className="h-3 w-16 bg-slate-200 rounded" />
                  </div>
                </div>

                <div className="space-y-3 pt-4">
                  <div className="h-8 w-3/4 bg-slate-100 rounded" />
                  <div className="h-4 w-full bg-slate-100 rounded" />
                  <div className="h-4 w-5/6 bg-slate-100 rounded" />
                </div>

                <div className="flex gap-3 pt-2">
                  <div className="h-10 w-32 bg-accent-400 rounded-lg" />
                  <div className="h-10 w-32 bg-slate-200 rounded-lg" />
                </div>

                <div className="grid grid-cols-3 gap-3 pt-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="bg-slate-50 rounded-xl p-3 space-y-2">
                      <div className="h-24 bg-slate-200 rounded-lg" />
                      <div className="h-3 w-3/4 bg-slate-200 rounded" />
                      <div className="h-2 w-full bg-slate-100 rounded" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating AI Badge */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-4 top-1/3 bg-white rounded-xl shadow-xl border border-primary-200 p-3 flex items-center gap-2"
              >
                <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-primary-600" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-900">AI Assistant</p>
                  <p className="text-[10px] text-slate-500">Active 24/7</p>
                </div>
              </motion.div>

              {/* Floating Stats Badge */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -left-4 bottom-1/4 bg-white rounded-xl shadow-xl border border-accent-200 p-3"
              >
                <p className="text-[10px] text-slate-500 uppercase tracking-wider">Conversions</p>
                <p className="text-lg font-bold text-accent-600">+147%</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
