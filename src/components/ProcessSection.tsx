import React from "react";
import { motion } from "motion/react";
import { PROCESS_STEPS } from "../types";

export default function ProcessSection() {
  return (
    <section id="process-section" className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration lines */}
      <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-0.5 bg-slate-100 hidden lg:block" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-mono font-bold tracking-widest text-accent-gold-600 uppercase bg-accent-gold-50 border border-accent-gold-200/50 px-3.5 py-1.5 rounded-full inline-block mb-4">
            Systematic Delivery
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight mb-6">
            Our 6-Step Engineered Process
          </h2>
          <p className="text-slate-500 font-light leading-relaxed text-base sm:text-lg">
            We reject shortcuts. Every roof is constructed utilizing our rigorous, manufacturer-certified methodology, ensuring perfect sealing, load integrity, and insulation dynamics.
          </p>
        </div>

        {/* Timeline List */}
        <div className="space-y-12 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-16 lg:gap-y-20">
          {PROCESS_STEPS.map((step, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                id={`process-step-card-${step.step}`}
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`flex flex-col sm:flex-row items-start gap-6 bg-slate-50/50 hover:bg-white border border-slate-100/60 hover:border-slate-200 rounded-3xl p-8 transition-all duration-300 shadow-sm relative group`}
              >
                {/* Floating Large Digit Background */}
                <div className="absolute top-4 right-6 text-7xl font-display font-black text-slate-100/70 group-hover:text-accent-gold-500/10 transition-colors pointer-events-none select-none select-all-none">
                  0{step.step}
                </div>

                {/* Styled Badge */}
                <div className="bg-slate-950 text-accent-gold-400 font-mono text-xs font-bold w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 border border-slate-800 shadow-lg group-hover:bg-gradient-to-br group-hover:from-accent-gold-400 group-hover:to-accent-gold-600 group-hover:text-slate-950 transition-colors duration-500">
                  {step.step}
                </div>

                {/* Content */}
                <div className="space-y-3 text-left">
                  <h3 className="font-display text-lg sm:text-xl font-bold text-slate-950 group-hover:text-brand-700 transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-slate-500 font-light text-xs sm:text-sm leading-relaxed max-w-md">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
