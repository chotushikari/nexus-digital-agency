"use client";

import React from "react";
import { services } from "@/lib/data";
import { SectionHeader } from "../shared/SectionHeader";
import { ServiceCard } from "../shared/ServiceCard";
import { Container } from "../../layout/Container";
import { Globe, Zap, Bot, TrendingUp, ShoppingCart, BarChart3 } from "lucide-react";

const iconMap = {
  Globe,
  Zap,
  Bot,
  TrendingUp,
  ShoppingCart,
  BarChart3
};

export function Services() {
  return (
    <section className="py-24 bg-void relative overflow-hidden" id="services">
      {/* Decorative blurry gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo/5 rounded-full blur-[100px] pointer-events-none" />

      <Container>
        {/* Section Title */}
        <SectionHeader
          eyebrow="What We Do"
          title="Everything You Need to Go Digital"
          subtitle="From your first website to AI-powered operations — we build systems that scale."
          align="center"
        />

        {/* 3D Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {services.map((service, index) => {
            const IconComponent = iconMap[service.iconName];
            return (
              <ServiceCard
                key={service.id}
                index={index}
                icon={IconComponent}
                title={service.title}
                description={service.description}
                href={service.href}
              />
            );
          })}
        </div>
      </Container>
    </section>
  );
}
export default Services;
