"use client";

import React, { useRef, useState, useEffect } from "react";
import { Star } from "lucide-react";
import { Container } from "../../layout/Container";
import { SectionHeader } from "../shared/SectionHeader";
import { testimonials } from "@/lib/data";
import { motion } from "framer-motion";

export function Testimonials() {
  const [width, setWidth] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (carouselRef.current) {
      setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
    }
    
    const handleResize = () => {
      if (carouselRef.current) {
        setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="py-24 bg-void relative overflow-hidden" id="testimonials">
      {/* Decorative gradient highlights */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-indigo/5 rounded-full blur-[120px] pointer-events-none" />

      <Container>
        <SectionHeader
          eyebrow="Testimonials"
          title="What Our Clients Say"
          subtitle="Real quotes from business owners who transformed their operations with us."
          align="center"
        />

        {/* Draggable Carousel */}
        <div className="mt-12 overflow-hidden cursor-grab active:cursor-grabbing px-2" ref={carouselRef}>
          <motion.div
            drag="x"
            dragConstraints={{ right: 0, left: -Math.max(0, width) }}
            className="flex gap-6 md:gap-8 w-max pb-8"
          >
            {testimonials.map((item) => (
              <div
                key={item.id}
                className="card-premium w-[300px] sm:w-[420px] md:w-[460px] rounded-2xl p-6 sm:p-8 flex flex-col justify-between border-l-4 border-l-indigo select-none pointer-events-none"
              >
                {/* Quote */}
                <p className="text-text-primary text-base sm:text-lg italic leading-relaxed font-medium">
                  "{item.quote}"
                </p>

                <div className="mt-8">
                  {/* Star Rating */}
                  <div className="flex items-center gap-1.5 text-indigo">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-indigo" />
                    ))}
                  </div>

                  {/* Author Meta */}
                  <div className="mt-5 flex items-center gap-4">
                    {/* Avatar Initials */}
                    <div className="w-12 h-12 rounded-full bg-indigo/15 text-indigo flex items-center justify-center font-display font-black text-sm">
                      {item.avatarInitials}
                    </div>

                    <div>
                      <h4 className="font-semibold text-text-primary text-sm sm:text-base leading-tight">
                        {item.author}
                      </h4>
                      <p className="text-text-secondary text-xs sm:text-sm mt-0.5">
                        {item.company} &bull; {item.industry}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Drag Prompt Hint */}
        <div className="text-center text-xs text-text-muted mt-2 uppercase tracking-widest font-semibold animate-pulse">
          ← Drag horizontally to slide →
        </div>
      </Container>
    </section>
  );
}
export default Testimonials;
