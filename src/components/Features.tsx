import React from "react";
import { motion } from "motion/react";
import { Award, ShieldCheck, Flame, Wind, Eye, CheckCircle2 } from "lucide-react";

export default function Features() {
  const coreFeatures = [
    {
      id: "feat-1",
      icon: Eye,
      title: "Advanced Drone Diagnostics",
      description: "We execute comprehensive thermal and high-resolution drone scans of your entire structure, locating micro-fissures and thermal breaches without leaving a footprint on your property.",
      bullets: ["Pinpoint leak locations", "No physical damage", "Detailed digital health logs"]
    },
    {
      id: "feat-2",
      icon: ShieldCheck,
      title: "Landscaping Protection Shield",
      description: "Our dedicated crews deploy structural catch-nets and heavy protective shields to prevent any falling debris or heavy machinery from ever harming your gardens, lawns, or hardscaping.",
      bullets: ["100% garden preservation", "Triple magnetic sweeping", "Pristine site-restoration"]
    },
    {
      id: "feat-3",
      icon: Award,
      title: "Red-Seal Timber Specialists",
      description: "Because premium roofing relies on perfect framing structure, we employ certified in-house Red Seal carpenters to rebuild, crown, and reinforce any damaged rafter supports.",
      bullets: ["Certified structural repair", "Grade-A Canadian lumber", "Decay-proof reinforcement"]
    },
    {
      id: "feat-4",
      icon: Wind,
      title: "Balanced Attic Ventilation",
      description: "We carefully calculate your attic's cubic volume to achieve a pristine 1:300 net-free ventilation balance, keeping your insulation dry, slashing HVAC costs, and neutralizing ice-dams.",
      bullets: ["Prevents winter ice-damming", "Cooler summer attic temps", "Extended material lifespan"]
    }
  ];

  return (
    <section id="why-choose-us-section" className="py-24 bg-white relative overflow-hidden">
      {/* Subtle abstract backgrounds */}
      <div className="absolute top-1/4 left-0 w-80 h-80 bg-brand-50/40 rounded-full filter blur-3xl -z-10" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-accent-gold-50/40 rounded-full filter blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header content with luxury spacing */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-mono font-bold tracking-widest text-accent-gold-600 uppercase bg-accent-gold-50 border border-accent-gold-200/50 px-3.5 py-1.5 rounded-full inline-block mb-4">
            The Apex Crest Difference
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight mb-6">
            Engineered Beyond Canadian Building Codes
          </h2>
          <p className="text-slate-500 font-light leading-relaxed text-base sm:text-lg">
            We don't merely install roofing shingles. We orchestrate comprehensive architectural systems custom-calibrated for severe Canadian seasons, combining aerospace diagnostics with historical craftsmanship.
          </p>
        </div>

        {/* Features Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {coreFeatures.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                id={`feature-card-${item.id}`}
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-50 hover:bg-white border border-slate-100 hover:border-slate-200 rounded-3xl p-8 lg:p-10 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
              >
                {/* Accent line on hover */}
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-accent-gold-400 to-accent-gold-600 scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top" />

                <div>
                  {/* Icon Block */}
                  <div className="bg-brand-50 border border-brand-100 p-3.5 rounded-2xl w-fit mb-6 group-hover:bg-accent-gold-50 group-hover:border-accent-gold-200 transition-colors duration-300">
                    <Icon className="h-6 w-6 text-brand-600 group-hover:text-accent-gold-600 transition-colors duration-300" />
                  </div>

                  <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-950 mb-4">
                    {item.title}
                  </h3>
                  <p className="text-slate-500 font-light text-sm sm:text-base leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                {/* Bullets List */}
                <ul className="space-y-3 pt-4 border-t border-slate-100">
                  {item.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-center space-x-2.5 text-xs sm:text-sm text-slate-600 font-medium">
                      <CheckCircle2 className="h-4.5 w-4.5 text-accent-gold-500 shrink-0" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Trust CTA */}
        <div className="mt-16 text-center">
          <p className="text-slate-400 text-sm font-mono tracking-wide">
            Backed by <span className="text-slate-800 font-bold">$5M Comprehensive Liability Coverage</span> & 100% WSIB Compliance.
          </p>
        </div>

      </div>
    </section>
  );
}
