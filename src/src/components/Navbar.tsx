import React, { useState, useEffect } from "react";
import { Phone, Menu, X, ShieldCheck, ArrowRight } from "lucide-react";

interface NavbarProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
  onOpenConsultation: () => void;
}

export default function Navbar({ currentPage, setCurrentPage, onOpenConsultation }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Services", id: "services" },
    { label: "Projects & Gallery", id: "gallery" },
    { label: "Reviews", id: "reviews" },
    { label: "FAQ", id: "faq" },
    { label: "Contact", id: "contact" },
  ];

  const handleNavClick = (id: string) => {
    setCurrentPage(id);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header
      id="navbar-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-slate-900/90 backdrop-blur-md border-b border-slate-800/60 py-3 shadow-lg"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <button
            id="brand-logo-btn"
            onClick={() => handleNavClick("home")}
            className="flex items-center space-x-3 cursor-pointer group text-left"
          >
            <div className="bg-gradient-to-br from-accent-gold-400 to-accent-gold-600 p-2.5 rounded-xl shadow-md group-hover:scale-105 transition-transform duration-300">
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

          {/* Desktop Navigation */}
          <nav id="desktop-nav" className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                id={`nav-item-${item.id}`}
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 relative cursor-pointer ${
                  currentPage === item.id
                    ? "text-accent-gold-400 font-semibold"
                    : "text-slate-300 hover:text-white hover:bg-slate-800/40"
                }`}
              >
                {item.label}
                {currentPage === item.id && (
                  <span
                    id={`active-indicator-${item.id}`}
                    className="absolute bottom-0 left-4 right-4 h-0.5 bg-gradient-to-r from-accent-gold-400 to-accent-gold-500 rounded-full"
                  />
                )}
              </button>
            ))}
          </nav>

          {/* Action Callouts */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              id="phone-callout-link"
              href="tel:0000000000"
              className="flex items-center space-x-2 text-slate-300 hover:text-accent-gold-400 transition-colors duration-300"
            >
              <div className="bg-slate-800/80 p-2 rounded-lg border border-slate-700/50">
                <Phone className="h-4 w-4 text-accent-gold-400" />
              </div>
              <div className="text-right">
                <span className="block text-[10px] font-mono tracking-wider text-slate-400 uppercase">Emergency Support</span>
                <span className="block text-sm font-bold text-white">(000) 000-0000</span>
              </div>
            </a>

            <button
              id="navbar-cta-btn"
              onClick={onOpenConsultation}
              className="bg-gradient-to-r from-accent-gold-500 to-accent-gold-600 hover:from-accent-gold-600 hover:to-accent-gold-700 text-slate-950 font-semibold text-sm px-5 py-3 rounded-xl shadow-lg shadow-accent-gold-600/10 hover:shadow-accent-gold-600/20 hover:-translate-y-0.5 transition-all duration-300 flex items-center space-x-2 cursor-pointer"
            >
              <span>Get Free Quote</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex lg:hidden items-center space-x-3">
            <a
              id="mobile-phone-shortcut"
              href="tel:0000000000"
              className="bg-slate-800 p-2.5 rounded-xl border border-slate-700 text-accent-gold-400 hover:text-white"
            >
              <Phone className="h-5 w-5" />
            </a>
            <button
              id="mobile-menu-toggle"
              onClick={() => setIsOpen(!isOpen)}
              className="bg-slate-800/80 p-2.5 rounded-xl border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-700"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation Menu */}
      {isOpen && (
        <div
          id="mobile-nav-drawer"
          className="lg:hidden absolute top-full left-0 right-0 bg-slate-950/95 backdrop-blur-xl border-b border-slate-800 shadow-2xl animate-in fade-in slide-in-from-top-5 duration-300"
        >
          <div className="px-4 pt-4 pb-6 space-y-2">
            {navItems.map((item) => (
              <button
                id={`mobile-nav-item-${item.id}`}
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full text-left px-4 py-3 rounded-xl text-base font-semibold transition-all duration-200 flex items-center justify-between ${
                  currentPage === item.id
                    ? "bg-slate-800 text-accent-gold-400 border-l-4 border-accent-gold-400"
                    : "text-slate-300 hover:text-white hover:bg-slate-800/40"
                }`}
              >
                <span>{item.label}</span>
                {currentPage === item.id && (
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-gold-400" />
                )}
              </button>
            ))}
            <div className="pt-4 border-t border-slate-800/60 mt-4 space-y-4">
              <a
                id="mobile-emergency-banner"
                href="tel:0000000000"
                className="flex items-center justify-center space-x-3 bg-red-950/20 border border-red-900/30 text-red-400 py-3 rounded-xl text-sm font-semibold transition-all duration-300 hover:bg-red-950/30"
              >
                <Phone className="h-4 w-4" />
                <span>24/7 Emergency Line: (000) 000-0000</span>
              </a>
              <button
                id="mobile-cta-btn"
                onClick={() => {
                  setIsOpen(false);
                  onOpenConsultation();
                }}
                className="w-full bg-gradient-to-r from-accent-gold-500 to-accent-gold-600 text-slate-950 py-3.5 rounded-xl font-bold shadow-lg flex items-center justify-center space-x-2"
              >
                <span>Request Free Consultation</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
