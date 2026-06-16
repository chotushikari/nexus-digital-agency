import Link from "next/link";
import { ArrowRight } from "lucide-react";

const footerLinks = {
  Services: [
    { label: "Website Development", href: "/services/" },
    { label: "AI Integration", href: "/services/" },
    { label: "Business Automation", href: "/services/" },
    { label: "Digital Improvement", href: "/services/" },
  ],
  Company: [
    { label: "About Us", href: "/about/" },
    { label: "Case Studies", href: "/case-studies/" },
    { label: "Contact", href: "/contact/" },
    { label: "Free Audit", href: "/audit/" },
  ],
  Industries: [
    { label: "Healthcare & Clinics", href: "/services/" },
    { label: "Restaurants & Food", href: "/services/" },
    { label: "Real Estate", href: "/services/" },
    { label: "Coaches & Consultants", href: "/services/" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center">
                <span className="text-white font-bold text-sm">N</span>
              </div>
              <span className="font-bold text-xl tracking-tight">
                Nexa<span className="text-primary-400">Forge</span>
              </span>
            </Link>
            <p className="text-slate-400 leading-relaxed mb-6 max-w-sm">
              Helping small businesses modernize with websites, AI, and automation.
              Based locally, serving businesses everywhere.
            </p>
            <Link
              href="/audit/"
              className="inline-flex items-center gap-2 text-sm font-semibold text-accent-400 hover:text-accent-300 transition-colors"
            >
              Get Your Free Audit
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-semibold text-white mb-4">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} NexaForge. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/" className="text-sm text-slate-500 hover:text-slate-300">
              Privacy
            </Link>
            <Link href="/" className="text-sm text-slate-500 hover:text-slate-300">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
