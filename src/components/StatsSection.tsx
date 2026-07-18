import React from "react";
import { motion } from "motion/react";
import { STATS_DATA } from "../types";
import { Star, ShieldAlert, Sparkles } from "lucide-react";

export default function StatsSection() {
  return (
    <section id="statistics-section" className="relative py-20 bg-slate-950 text-white overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-brand-500 rounded-full filter blur-3xl" />
        <div className="absolute bottom-1/2 right-1/4 w-96 h-96 bg-accent-gold-500 rounded-full filter blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {STATS_DATA.map((stat, index) => {
            return (
              <motion.div
                id={`stat-card-${index}`}
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-900/60 border border-slate-800/80 hover:border-slate-700/60 p-8 rounded-3xl backdrop-blur-md flex flex-col justify-between text-left group hover:-translate-y-1 transition-all duration-300 shadow-xl"
              >
                <div>
                  {/* Decorative Spark */}
                  <div className="flex justify-between items-start mb-6">
                    <span className="text-slate-500 font-mono text-xs">METRIC_0{index + 1}</span>
                    {index === 3 && (
                      <div className="flex items-center space-x-0.5 text-accent-gold-400">
                        <Star className="h-4.5 w-4.5 fill-current" />
                        <Star className="h-4.5 w-4.5 fill-current" />
                        <Star className="h-4.5 w-4.5 fill-current" />
                        <Star className="h-4.5 w-4.5 fill-current" />
                        <Star className="h-4.5 w-4.5 fill-current" />
                      </div>
                    )}
                  </div>

                  {/* Stat Value */}
                  <div className="font-display text-4xl sm:text-5xl font-extrabold text-white tracking-tight flex items-baseline">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-gold-300 via-accent-gold-400 to-accent-gold-500 font-bold">
                      {stat.value}
                    </span>
                    <span className="text-accent-gold-400 text-2xl font-bold ml-1">{stat.suffix}</span>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-slate-800/60 space-y-2">
                  <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider">
                    {stat.label}
                  </h4>
                  <p className="text-slate-400 text-xs sm:text-sm font-light leading-relaxed">
                    {stat.description}
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
