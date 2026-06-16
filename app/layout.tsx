import type { Metadata } from "next";
import { Geist, Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

// Load fonts with CSS variables matching our tailwind theme configurations
const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

// Complete SEO + GEO optimized metadata settings
export const metadata: Metadata = {
  metadataBase: new URL("https://nexusdigital.vercel.app"),
  title: {
    default: "Nexus Digital | Web + AI + Automation Agency for Small Business",
    template: "%s | Nexus Digital"
  },
  description: "We help small businesses, clinics, restaurants, and service companies modernize with websites, automation, and AI. Get your free digital audit today.",
  keywords: [
    "web development agency", 
    "AI integration", 
    "business automation", 
    "digital transformation", 
    "small business website", 
    "clinic website",
    "restaurant automation", 
    "real estate website", 
    "AI chatbot",
    "CRM automation", 
    "Generative Engine Optimization", 
    "GEO agency"
  ],
  authors: [{ name: "Nexus Digital" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nexusdigital.vercel.app",
    siteName: "Nexus Digital",
    title: "Nexus Digital | Web + AI + Automation Agency",
    description: "Transform your business with modern digital solutions. Websites, AI, automation, and digital transformation for small businesses.",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630, alt: "Nexus Digital Agency" }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Nexus Digital | Web + AI + Automation",
    description: "Transform your business with modern digital solutions.",
    images: ["/images/og-image.jpg"]
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  alternates: { canonical: "https://nexusdigital.vercel.app" },
  verification: { google: "YOUR_GOOGLE_SEARCH_CONSOLE_TAG" }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Nexus Digital",
  "image": "https://nexusdigital.vercel.app/images/og-image.jpg",
  "@id": "https://nexusdigital.vercel.app/#agency",
  "url": "https://nexusdigital.vercel.app",
  "telephone": "+1-555-789-2026",
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Silicon Valley",
    "addressLocality": "San Jose",
    "addressRegion": "CA",
    "postalCode": "95112",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 37.3382,
    "longitude": -121.8863
  },
  "sameAs": [
    "https://twitter.com/nexusdigital",
    "https://linkedin.com/company/nexusdigital"
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geist.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased text-text-primary bg-void min-h-screen flex flex-col justify-between">
        {/* Sticky navbar */}
        <Navbar />
        
        {/* Page dynamic body */}
        <main className="flex-grow">{children}</main>
        
        {/* Elevating dark footer */}
        <Footer />
      </body>
    </html>
  );
}
