"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, TrendingUp, Users, Clock, DollarSign } from "lucide-react";

const caseStudies = [
  {
    client: "Metro Dental Clinic",
    industry: "Healthcare",
    title: "From Phone-Only to Fully Booked Online",
    description:
      "We built a modern website with online booking, automated appointment reminders, and an AI chatbot for patient questions.",
    results: [
      { icon: Users, label: "Online Bookings", value: "+340%" },
      { icon: Clock, label: "Admin Time Saved", value: "15 hrs/wk" },
      { icon: TrendingUp, label: "New Patients", value: "+89%" },
    ],
    tags: ["Website", "Booking System", "AI Chatbot"],
    color: "bg-blue-50",
    accent: "text-blue-600",
  },
  {
    client: "Taste of Italy Restaurant",
    industry: "Food & Beverage",
    title: "Turning Walk-ins Into Loyal Regulars",
    description:
      "A complete digital overhaul: new website, online reservations, email automation for promotions, and a review collection system.",
    results: [
      { icon: DollarSign, label: "Revenue Increase", value: "+52%" },
      { icon: Users, label: "Repeat Customers", value: "+120%" },
      { icon: TrendingUp, label: "Google Reviews", value: "4.8 ★" },
    ],
    tags: ["Website Redesign", "Email Automation", "Reviews"],
    color: "bg-amber-50",
    accent: "text-amber-600",
  },
  {
    client: "Summit Real Estate",
    industry: "Real Estate",
    title: "AI-Powered Lead Qualification System",
    description:
      "Built a property website with an AI assistant that pre-qualifies buyers, automated follow-ups, and a CRM integration for the sales team.",
    results: [
      { icon: TrendingUp, label: "Lead Quality", value: "+200%" },
      { icon: Clock, label: "Response Time", value: "< 1 min" },
      { icon: DollarSign, label: "Deals Closed", value: "+67%" },
    ],
    tags: ["AI Assistant", "CRM Automation", "Lead Gen"],
    color: "bg-purple-50",
    accent: "text-purple-600",
  },
];

export function Results() {
  return (
    <section id="results" className="py-20 lg:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block text-sm font-semibold text-primary-600 uppercase tracking-wider mb-3">
            Real Results
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Businesses Like Yours,{" "}
            <span className="text-primary-600">Transformed</span>
          </h2>
          <p className="text-lg text-slate-600">
            See how we helped real businesses solve real problems with websites,
            automation, and AI.
          </p>
        </motion.div>

        {/* Case Studies */}
        <div className="space-y-8">
          {caseStudies.map((study, i) => (
            <motion.div
              key={study.client}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Content */}
                <div className="p-8 lg:p-10">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                      {study.industry}
                    </span>
                    <span className="w-1 h-1 rounded-full bg-slate-300" />
                    <span className="text-xs font-medium text-slate-400">
                      {study.client}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900 mb-4">
                    {study.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed mb-6">
                    {study.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {study.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-medium px-3 py-1 rounded-full bg-slate-100 text-slate-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Link
                    href="/case-studies/"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-primary-600 hover:text-primary-700 transition-colors"
                  >
                    Read full story
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>

                {/* Results */}
                <div className={`${study.color} p-8 lg:p-10 flex flex-col justify-center`}>
                  <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-6">
                    Key Results
                  </p>
                  <div className="grid grid-cols-3 gap-6">
                    {study.results.map((result) => (
                      <div key={result.label} className="text-center">
                        <div className="w-10 h-10 rounded-xl bg-white/80 flex items-center justify-center mx-auto mb-3">
                          <result.icon className={`w-5 h-5 ${study.accent}`} />
                        </div>
                        <p className="text-2xl font-bold text-slate-900 mb-1">
                          {result.value}
                        </p>
                        <p className="text-xs text-slate-500">{result.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            href="/case-studies/"
            className="inline-flex items-center gap-2 rounded-full border-2 border-slate-300 hover:border-primary-400 text-slate-700 hover:text-primary-700 px-8 py-3 text-sm font-semibold transition-all"
          >
            View All Results
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
