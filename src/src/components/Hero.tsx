import React from "react";
import { motion } from "motion/react";
import { Shield, Award, Sparkles, ArrowRight, ArrowDown } from "lucide-react";

interface HeroProps {
  onOpenConsultation: () => void;
  setCurrentPage: (page: string) => void;
}

export default function Hero({ onOpenConsultation, setCurrentPage }: HeroProps) {
  const scrollToNextSection = () => {
    const nextSection = document.getElementById("why-choose-us-section");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero-section" className="relative min-h-screen bg-slate-950 flex items-center justify-center overflow-hidden pt-24 pb-16">
      {/* Background image with high contrast dark overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=90&w=1920"
          alt="Premium Standing Seam Metal Roof Residence"
          className="w-full h-full object-cover object-center opacity-40 scale-105 animate-pulse-slow"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/20" />
      </div>

      {/* Hero Content Grid */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-8 space-y-8 text-left">
            {/* Top Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center space-x-2 bg-slate-900/80 border border-slate-700/60 px-4 py-1.5 rounded-full backdrop-blur-md"
            >
              <Sparkles className="h-4 w-4 text-accent-gold-400" />
              <span className="text-xs font-mono tracking-wider text-slate-300 uppercase">
                Premium Architectural Roofing Systems
              </span>
            </motion.div>

            {/* Main Premium Heading */}
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="font-display text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white leading-none tracking-tight"
              >
                Engineered for <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-gold-300 via-accent-gold-400 to-accent-gold-500">
                  Extreme Winters
                </span>
                . <br />
                Built for a Lifetime.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-base sm:text-lg text-slate-300 max-w-2xl font-light leading-relaxed"
              >
                Apex Crest is Canada's premier roofing builder. We engineer elite standing-seam steel, authentic Western Red Cedar, and class-4 architectural shingles. Uncompromising craftsmanship backed by our signature 50-year non-prorated system warranty.
              </motion.p>
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 pt-4"
            >
              <button
                id="hero-cta-quote-btn"
                onClick={onOpenConsultation}
                className="bg-gradient-to-r from-accent-gold-500 via-accent-gold-500 to-accent-gold-600 hover:from-accent-gold-600 hover:to-accent-gold-700 text-slate-950 font-bold px-8 py-4 rounded-xl shadow-xl shadow-accent-gold-600/10 hover:shadow-accent-gold-600/25 transition-all duration-300 flex items-center justify-center space-x-3 group cursor-pointer text-base"
              >
                <span>Request Free Appraisal</span>
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1.5" />
              </button>

              <button
                id="hero-cta-gallery-btn"
                onClick={() => {
                  setCurrentPage("gallery");
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 hover:border-slate-600 text-white font-medium px-8 py-4 rounded-xl backdrop-blur-md transition-all duration-300 flex items-center justify-center space-x-2 cursor-pointer text-base"
              >
                <span>Browse Project Portfolios</span>
              </button>
            </motion.div>

            {/* Trust Badges Bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-10 border-t border-slate-800/60 max-w-3xl"
            >
              <div className="flex items-center space-x-3">
                <div className="bg-slate-900/60 p-2.5 rounded-lg border border-slate-800">
                  <Shield className="h-5 w-5 text-accent-gold-400" />
                </div>
                <div>
                  <span className="block text-xs font-mono text-slate-400 uppercase tracking-wider">Manufacturer</span>
                  <span className="block text-sm font-bold text-white">Master Elite Builder</span>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="bg-slate-900/60 p-2.5 rounded-lg border border-slate-800">
                  <Award className="h-5 w-5 text-accent-gold-400" />
                </div>
                <div>
                  <span className="block text-xs font-mono text-slate-400 uppercase tracking-wider">Protection</span>
                  <span className="block text-sm font-bold text-white">50-Yr Non-Prorated Warranty</span>
                </div>
              </div>

              <div className="flex items-center space-x-3 col-span-2 md:col-span-1">
                <div className="bg-slate-900/60 p-2.5 rounded-lg border border-slate-800">
                  <span className="font-bold text-xs text-accent-gold-400 font-mono">WSIB</span>
                </div>
                <div>
                  <span className="block text-xs font-mono text-slate-400 uppercase tracking-wider">Compliance</span>
                  <span className="block text-sm font-bold text-white">100% Fully Insured Team</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Feature Badge Side Card */}
          <div className="hidden lg:block lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="bg-slate-900/40 border border-slate-800/80 rounded-3xl p-8 backdrop-blur-md relative overflow-hidden"
            >
              {/* Subtle light leak */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent-gold-500/10 rounded-full filter blur-3xl" />
              
              <span className="inline-block bg-accent-gold-400/10 text-accent-gold-400 border border-accent-gold-400/20 text-[10px] font-mono tracking-widest uppercase px-3 py-1 rounded-full mb-6">
                Active Client Project
              </span>
              
              <h3 className="font-display text-xl font-bold text-white mb-2">
                The Oakville Waterfront Build
              </h3>
              <p className="text-sm text-slate-400 font-light mb-6">
                Full strip, timber reinforcement, and premium 24-gauge Slate Gray Standing Seam Metal replacement engineered to handle severe Ontario gale-force shoreline winds.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex justify-between text-xs font-mono border-b border-slate-800/60 pb-2">
                  <span className="text-slate-500">Materials:</span>
                  <span className="text-slate-300">Continuous Panel Steel</span>
                </div>
                <div className="flex justify-between text-xs font-mono border-b border-slate-800/60 pb-2">
                  <span className="text-slate-500">Snow Load Rating:</span>
                  <span className="text-slate-300">Extreme Peak Certified</span>
                </div>
                <div className="flex justify-between text-xs font-mono border-b border-slate-800/60 pb-2">
                  <span className="text-slate-500">Warranty Protection:</span>
                  <span className="text-slate-300">Lifetime Warranty</span>
                </div>
              </div>

              <button
                id="hero-badge-cta-btn"
                onClick={() => {
                  setCurrentPage("gallery");
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="w-full bg-slate-800/60 hover:bg-slate-800 border border-slate-700/50 hover:border-slate-600 text-white font-medium py-3 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2 text-sm group"
              >
                <span>View Full Spec Sheet</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator button */}
        <div className="flex justify-center mt-12 lg:mt-20">
          <motion.button
            id="scroll-indicator-btn"
            onClick={scrollToNextSection}
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center space-y-2 text-slate-500 hover:text-accent-gold-400 transition-colors duration-300 cursor-pointer"
          >
            <span className="text-[10px] font-mono uppercase tracking-widest">Learn Why Choose Us</span>
            <ArrowDown className="h-5 w-5" />
          </motion.button>
        </div>
      </div>
    </section>
  );
}
