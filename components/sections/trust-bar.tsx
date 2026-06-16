"use client";

import { motion } from "framer-motion";

const industries = [
  "Restaurants",
  "Dental Clinics",
  "Real Estate",
  "Law Firms",
  "Gyms",
  "Schools",
  "Coaches",
  "Retail",
  "Contractors",
  "Salons",
];

export function TrustBar() {
  return (
    <section className="py-12 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-medium text-slate-400 uppercase tracking-wider mb-8">
          Trusted by businesses across industries
        </p>
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
          {industries.map((industry, i) => (
            <motion.span
              key={industry}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="text-slate-400 font-medium text-sm hover:text-slate-600 transition-colors cursor-default"
            >
              {industry}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}
