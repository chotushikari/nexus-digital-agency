import React from "react";
import { Hero } from "@/components/sections/home/Hero";
import { Logos } from "@/components/sections/home/Logos";
import { Services } from "@/components/sections/home/Services";
import { Process } from "@/components/sections/home/Process";
import { Results } from "@/components/sections/home/Results";
import { CaseStudies } from "@/components/sections/home/CaseStudies";
import { Testimonials } from "@/components/sections/home/Testimonials";
import { CTA } from "@/components/sections/home/CTA";

export default function HomePage() {
  return (
    <>
      {/* 1. Hero visual block */}
      <Hero />

      {/* 2. client logo scroll marquee */}
      <Logos />

      {/* 3. 3D tilt services grid */}
      <Services />

      {/* 4. scroll-triggered process timeline */}
      <Process />

      {/* 5. counting stat dashboard */}
      <Results />

      {/* 6. portfolio case studies bento */}
      <CaseStudies />

      {/* 7. client draggable testimonials */}
      <Testimonials />

      {/* 8. Conversion trigger footer CTA */}
      <CTA />
    </>
  );
}
