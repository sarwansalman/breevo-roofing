import React, { useState } from "react";
import { ShieldCheck, ArrowRight, Phone, Mail, MapPin, Star, AlertCircle } from "lucide-react";

interface FooterProps {
  setCurrentPage: (page: string) => void;
  onOpenConsultation: () => void;
}

export default function Footer({ setCurrentPage, onOpenConsultation }: FooterProps) {
  const [emailInput, setEmailInput] = useState("");
  const [showDemoAlert, setShowDemoAlert] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowDemoAlert(true);
    setTimeout(() => {
      setShowDemoAlert(false);
      setEmailInput("");
    }, 3000);
  };

  const handlePageLinkClick = (pageId: string) => {
    setCurrentPage(pageId);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const linksMain = [
    { label: "Home", id: "home" },
    { label: "About Our Heritage", id: "about" },
    { label: "Architectural Services", id: "services" },
    { label: "Project Portfolio", id: "gallery" },
    { label: "Customer Reviews", id: "reviews" },
    { label: "Expert Advisory FAQ", id: "faq" },
    { label: "Corporate Contact", id: "contact" },
  ];

  const linksServices = [
    { label: "Standing Seam Metal", id: "services" },
    { label: "Architectural Shingles", id: "services" },
    { label: "Low-Slope Flat Roofing", id: "services" },
    { label: "Heritage Cedar Shakes", id: "services" },
    { label: "Extreme Weather Diagnostics", id: "services" },
  ];

  return (
    <footer id="corporate-footer" className="bg-slate-950 text-white pt-20 pb-8 border-t border-slate-900 relative overflow-hidden">
      {/* Background details */}
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-slate-900/40 rounded-full filter blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-slate-900">
          
          {/* Column 1: Company Brand Card */}
          <div className="lg:col-span-4 space-y-6 text-left">
            <button
              onClick={() => handlePageLinkClick("home")}
              className="flex items-center space-x-3 cursor-pointer text-left group"
            >
              <div className="bg-gradient-to-br from-accent-gold-400 to-accent-gold-600 p-2.5 rounded-xl">
                <ShieldCheck className="h-6 w-6 text-slate-950" />
              </div>
              <div>
                <span className="block font-display text-xl font-bold tracking-tight text-white uppercase">
                  Apex Crest
                </span>
                <span className="block text-[10px] font-mono tracking-widest text-accent-gold-400 uppercase">
                  Roofing Canada
                </span>
              </div>
            </button>

            <p className="text-slate-400 text-xs sm:text-sm font-light leading-relaxed">
              Apex Crest is Canada's premier roofing builder. We engineer elite standing-seam steel, authentic Western Red Cedar, and class-4 architectural shingles designed for extreme sub-zero weather patterns.
            </p>

            <div className="flex items-center space-x-0.5 text-accent-gold-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-current" />
              ))}
              <span className="text-xs text-slate-400 font-mono ml-2">4.96 Rating</span>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="lg:col-span-2.5 text-left">
            <h4 className="font-display font-bold text-xs sm:text-sm uppercase tracking-wider text-slate-200 mb-6">
              Our Directory
            </h4>
            <ul className="space-y-3">
              {linksMain.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => handlePageLinkClick(link.id)}
                    className="text-slate-400 hover:text-accent-gold-400 text-xs sm:text-sm font-light transition-colors cursor-pointer text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services shortcuts */}
          <div className="lg:col-span-2.5 text-left">
            <h4 className="font-display font-bold text-xs sm:text-sm uppercase tracking-wider text-slate-200 mb-6">
              Expertise Dossiers
            </h4>
            <ul className="space-y-3">
              {linksServices.map((link, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => handlePageLinkClick(link.id)}
                    className="text-slate-400 hover:text-accent-gold-400 text-xs sm:text-sm font-light transition-colors cursor-pointer text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Newsletter Subscriber */}
          <div className="lg:col-span-3 space-y-6 text-left">
            <h4 className="font-display font-bold text-xs sm:text-sm uppercase tracking-wider text-slate-200 mb-6">
              The Ridge Newsletter
            </h4>
            <p className="text-slate-400 text-xs font-light leading-relaxed">
              Subscribe to receive seasonal winterizing alerts, moss-prevention formulas, and timber health guides.
            </p>

            <form onSubmit={handleNewsletterSubmit} className="space-y-3 relative">
              <div className="flex">
                <input
                  type="email"
                  required
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  placeholder="name@domain.ca"
                  className="bg-slate-900 border border-slate-850 rounded-l-xl px-4 py-3 text-xs text-white placeholder-slate-650 w-full focus:outline-none focus:border-slate-700"
                />
                <button
                  id="newsletter-submit-btn"
                  type="submit"
                  className="bg-accent-gold-500 hover:bg-accent-gold-600 text-slate-950 p-3 rounded-r-xl transition-colors cursor-pointer"
                >
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>

              {showDemoAlert && (
                <div id="newsletter-demo-alert" className="bg-slate-900 border border-red-900/30 text-red-400 p-3 rounded-xl flex items-center space-x-2 text-[10px] font-mono leading-tight shadow-md animate-in fade-in duration-200 absolute left-0 right-0 z-10">
                  <AlertCircle className="h-4 w-4 shrink-0 text-red-500" />
                  <span>Demo Website — Newsletter subscription is simulated.</span>
                </div>
              )}
            </form>
          </div>

        </div>

        {/* Regulatory & Trade Certifications row */}
        <div className="py-10 grid grid-cols-2 md:grid-cols-4 gap-6 items-center justify-center border-b border-slate-900 opacity-65">
          <div className="flex flex-col items-center space-y-1.5 text-center">
            <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">WSIB Compliance</span>
            <span className="text-xs font-bold text-slate-300">100% Fully Insured Team</span>
          </div>
          <div className="flex flex-col items-center space-y-1.5 text-center">
            <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">Warranties</span>
            <span className="text-xs font-bold text-slate-300">50-Yr Non-Prorated System</span>
          </div>
          <div className="flex flex-col items-center space-y-1.5 text-center">
            <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">Licensing standards</span>
            <span className="text-xs font-bold text-slate-300">Certified GAF Master Elite</span>
          </div>
          <div className="flex flex-col items-center space-y-1.5 text-center">
            <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">Ontario Building Codes</span>
            <span className="text-xs font-bold text-slate-300">Passes Extreme Snow Criteria</span>
          </div>
        </div>

        {/* Bottom Credits row */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-[11px] font-mono text-slate-500 gap-4">
          <p>© 2026 Apex Crest Roofing Canada. Engineered for the Extreme.</p>
          <div className="flex items-center space-x-6">
            <button
              onClick={() => handlePageLinkClick("privacy")}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Privacy Policy & Terms
            </button>
            <span className="text-slate-750">|</span>
            <span className="text-slate-600">Demo Website</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
