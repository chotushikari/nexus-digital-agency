"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Globe,
  Bot,
  Zap,
  BarChart3,
  ArrowRight,
  Layers,
  MessageSquare,
  Workflow,
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Website Development",
    description:
      "Modern, fast, mobile-first websites that convert visitors into customers. From landing pages to full business sites.",
    features: ["Custom Design", "SEO Optimized", "Mobile First", "Fast Loading"],
    color: "bg-blue-50 text-blue-600",
    borderColor: "border-blue-200",
  },
  {
    icon: Bot,
    title: "AI Integration",
    description:
      "Smart chatbots, AI assistants, and knowledge bases that handle customer support and lead qualification 24/7.",
    features: ["Chatbots", "AI Assistants", "Knowledge Bases", "Lead Qualification"],
    color: "bg-purple-50 text-purple-600",
    borderColor: "border-purple-200",
  },
  {
    icon: Zap,
    title: "Business Automation",
    description:
      "Automate repetitive tasks, CRM workflows, email sequences, and appointment booking to save hours every week.",
    features: ["CRM Automation", "Email Sequences", "Booking Systems", "Workflows"],
    color: "bg-amber-50 text-amber-600",
    borderColor: "border-amber-200",
  },
  {
    icon: BarChart3,
    title: "Digital Improvement",
    description:
      "Audit and optimize your existing website for better speed, conversions, user experience, and mobile performance.",
    features: ["Speed Optimization", "UX Improvements", "Conversion Rate", "Mobile UX"],
    color: "bg-emerald-50 text-emerald-600",
    borderColor: "border-emerald-200",
  },
];

const processSteps = [
  {
    icon: Layers,
    title: "Audit & Strategy",
    description: "We analyze your current setup and create a roadmap.",
  },
  {
    icon: MessageSquare,
    title: "Design & Build",
    description: "We design and develop your solution with your feedback.",
  },
  {
    icon: Workflow,
    title: "Launch & Optimize",
    description: "We go live and continuously improve based on data.",
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block text-sm font-semibold text-primary-600 uppercase tracking-wider mb-3">
            What We Do
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Everything Your Business Needs to{" "}
            <span className="text-primary-600">Grow Online</span>
          </h2>
          <p className="text-lg text-slate-600">
            From a simple website to full AI-powered automation, we help you move from
            manual processes to a modern, efficient digital operation.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-20">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`group relative bg-white rounded-2xl border ${service.borderColor} p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}
            >
              <div
                className={`w-12 h-12 rounded-xl ${service.color} flex items-center justify-center mb-6`}
              >
                <service.icon className="w-6 h-6" />
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">{service.description}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {service.features.map((feature) => (
                  <span
                    key={feature}
                    className="text-xs font-medium px-3 py-1 rounded-full bg-slate-100 text-slate-600"
                  >
                    {feature}
                  </span>
                ))}
              </div>

              <Link
                href="/services/"
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary-600 hover:text-primary-700 transition-colors group/link"
              >
                Learn more
                <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Process */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-2xl font-bold text-slate-900 mb-3">How We Work</h3>
          <p className="text-slate-600">Simple process, clear results.</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {processSteps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="relative text-center"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary-50 border border-primary-200 flex items-center justify-center mx-auto mb-5">
                <step.icon className="w-6 h-6 text-primary-600" />
              </div>
              <div className="absolute top-7 left-1/2 w-full hidden md:block">
                {i < processSteps.length - 1 && (
                  <div className="h-0.5 bg-slate-200 w-[calc(100%-3.5rem)] ml-7" />
                )}
              </div>
              <h4 className="text-lg font-bold text-slate-900 mb-2">{step.title}</h4>
              <p className="text-slate-600 text-sm">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
