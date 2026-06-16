"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "NexaForge completely transformed how we operate. Our patients can book online, our AI chatbot answers questions 24/7, and our admin team saves 15 hours a week. Best investment we've made.",
    author: "Dr. Sarah Chen",
    role: "Owner, Metro Dental Clinic",
    rating: 5,
  },
  {
    quote:
      "I was skeptical about AI for my restaurant, but the results speak for themselves. Online reservations are up 340%, and the automated email system brings back customers every week.",
    author: "Marco Rossi",
    role: "Owner, Taste of Italy",
    rating: 5,
  },
  {
    quote:
      "The team understood our real estate business immediately. The AI lead qualification system alone has doubled our qualified leads. Response time went from hours to under a minute.",
    author: "Jennifer Walsh",
    role: "Broker, Summit Real Estate",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section className="py-20 lg:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block text-sm font-semibold text-primary-600 uppercase tracking-wider mb-3">
            Client Stories
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Trusted by Business Owners
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-2xl border border-slate-200 p-8 hover:shadow-lg transition-shadow"
            >
              <Quote className="w-8 h-8 text-primary-200 mb-4" />

              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-accent-400 text-accent-400" />
                ))}
              </div>

              <p className="text-slate-700 leading-relaxed mb-6">"{t.quote}"</p>

              <div className="border-t border-slate-100 pt-5">
                <p className="font-semibold text-slate-900">{t.author}</p>
                <p className="text-sm text-slate-500">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
