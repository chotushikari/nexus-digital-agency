"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How much does a typical project cost?",
    answer:
      "It depends on what you need. A basic business website starts around $2,500. A website with automation and AI integration typically ranges from $5,000–$15,000. We always start with a free audit so you know exactly what you're investing in before committing.",
  },
  {
    question: "How long does it take to build a website?",
    answer:
      "A standard business website takes 2–4 weeks from kickoff to launch. More complex projects with custom automation or AI features can take 4–8 weeks. We keep you updated weekly and you'll see progress in real time.",
  },
  {
    question: "Do you work with businesses outside tech?",
    answer:
      "Absolutely. Most of our clients are non-tech businesses: dental clinics, restaurants, real estate agencies, gyms, law firms, schools, and coaches. We speak your language, not just code.",
  },
  {
    question: "What if I already have a website?",
    answer:
      "We can improve it. We'll audit your existing site, identify what's working and what's not, and recommend specific improvements. Sometimes a redesign is best; other times, targeted optimization and automation additions deliver the biggest ROI.",
  },
  {
    question: "Do I need to know anything about AI or tech?",
    answer:
      "Not at all. We handle all the technical work. You just tell us your business goals and we'll recommend the right solutions. We explain everything in plain English and train your team on whatever we build.",
  },
  {
    question: "What happens after the website launches?",
    answer:
      "We offer ongoing support and optimization. Most clients stay with us for monthly maintenance, content updates, and continuous improvement. We also monitor performance and suggest new automation opportunities as your business grows.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sm font-semibold text-primary-600 uppercase tracking-wider mb-3">
            Common Questions
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
            Everything You Need to Know
          </h2>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="border border-slate-200 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left hover:bg-slate-50 transition-colors"
              >
                <span className="font-semibold text-slate-900 pr-4">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-slate-400 flex-shrink-0 transition-transform duration-200 ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="px-5 pb-5 text-slate-600 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
