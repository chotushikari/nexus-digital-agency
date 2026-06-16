"use client";

import React from "react";

const clientNames = [
  "Metro Clinic",
  "Bistro 42",
  "Summit Realty",
  "Greenfield School",
  "FitCore Gym",
  "TechStart Hub",
  "Artisan Bakery",
  "Law & Order Firm"
];

export function Logos() {
  // Double the list to create a seamless infinite scrolling track
  const scrollingLogos = [...clientNames, ...clientNames];

  return (
    <section className="relative w-full py-10 bg-void border-y border-border overflow-hidden">
      {/* Gradient Fades for left and right edges */}
      <div className="absolute inset-y-0 left-0 w-24 sm:w-40 bg-gradient-to-r from-void via-void/50 to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 sm:w-40 bg-gradient-to-l from-void via-void/50 to-transparent z-10 pointer-events-none" />

      {/* Marquee Container */}
      <div className="w-full flex items-center">
        <div className="marquee-track flex gap-12 sm:gap-20 items-center">
          {scrollingLogos.map((name, index) => (
            <div
              key={index}
              className="text-text-muted hover:text-text-primary text-base sm:text-lg font-bold uppercase tracking-widest whitespace-nowrap transition-colors duration-300 select-none"
            >
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Logos;
