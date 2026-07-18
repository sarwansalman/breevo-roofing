import React from "react";
import { motion } from "motion/react";
import { Award, ShieldCheck, Heart, Sparkles, CheckCircle2 } from "lucide-react";

export default function AboutPage() {
  const safetyBadges = [
    "Workplace Safety & Insurance Board (WSIB) Certified",
    "Ontario working-at-heights credentials for all crew",
    "$5,000,000 Comprehensive General Liability coverage",
    "Post-project magnetic sweep & pristine garden cleanup guarantee"
  ];

  const coreTeam = [
    {
      name: "David Harrison",
      role: "Founder & Managing Director",
      experience: "25+ Years Experience",
      bio: "David completed his structural Red Seal carpentry apprenticeship in Vancouver before returning home to Toronto to launch Apex Crest. He supervises our commercial engineering contracts.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=300"
    },
    {
      name: "Sarah Tremblay",
      role: "Lead Estimator & Diagnostics Engineer",
      experience: "12+ Years Experience",
      bio: "An expert in thermo-imaging and structural ventilation analysis, Sarah determines the thermal drafts and drafts calculations necessary to optimize long-term attic health and roof durability.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=300"
    },
    {
      name: "Arthur Campbell",
      role: "Master Red-Seal Carpenter",
      experience: "18+ Years Experience",
      bio: "Arthur coordinates our high-end cedar restorations and heavy plywood framing repairs. His meticulous attention to copper valley detailing is renowned in historic Toronto neighborhoods.",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=300"
    }
  ];

  return (
    <div id="about-page" className="bg-white min-h-screen pt-32 pb-24 text-slate-900 relative">
      {/* Background patterns */}
      <div className="absolute top-1/4 left-0 w-80 h-80 bg-brand-50/40 rounded-full filter blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Intro Header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <span className="text-xs font-mono font-bold tracking-widest text-accent-gold-600 uppercase bg-accent-gold-50 border border-accent-gold-200/50 px-3.5 py-1.5 rounded-full inline-block mb-4">
            Our Architectural Heritage
          </span>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-950 tracking-tight leading-none mb-6">
            Canadian Craftsmanship Built to Endure
          </h1>
          <p className="text-slate-500 font-light text-base sm:text-lg leading-relaxed">
            Apex Crest Roofing was founded on a simple, uncompromising ethos: Canadian structures deserve building materials engineered to withstand severe, sub-zero winters.
          </p>
        </div>

        {/* Narrative & Image Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          <div className="lg:col-span-6 space-y-6 text-left">
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-950">
              Preserving Home Equity for Generations
            </h2>
            <p className="text-slate-600 font-light text-sm sm:text-base leading-relaxed">
              We started over two decades ago replacing basic residential asphalt shingle roofs in the Greater Toronto Area. We quickly realized that standard builder-grade products were failing prematurely due to inadequate ventilation design, intense humidity shifts, and freeze-thaw cracking.
            </p>
            <p className="text-slate-600 font-light text-sm sm:text-base leading-relaxed">
              To solve this, we expanded our services to structural timber restoration, standing seam metal engineering, and custom thermal diagnostics. Today, Apex Crest works in partnership with certified North American manufacturers to deliver pristine, transferrable lifetime warranties that significantly bolster the equity and resale value of your property.
            </p>

            {/* Core Pillars */}
            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="space-y-2">
                <span className="text-accent-gold-600 font-display font-bold text-lg block">100% In-house Crew</span>
                <p className="text-xs text-slate-400 font-light">We never utilize low-bid third-party subcontractors. All specialists are fully vetted and safety trained.</p>
              </div>
              <div className="space-y-2">
                <span className="text-accent-gold-600 font-display font-bold text-lg block">$5M Liability Guard</span>
                <p className="text-xs text-slate-400 font-light">Absolute financial security and complete peace of mind while we coordinate on your residential property.</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            {/* Visual Frame */}
            <div className="aspect-4/3 rounded-3xl overflow-hidden bg-slate-900 shadow-2xl relative group">
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800"
                alt="Apex Crest Roofing Crew working on a premium installation"
                className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-500"
              />
              {/* Highlight Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60" />
              <div className="absolute bottom-6 left-6 right-6 text-left text-white">
                <span className="text-[10px] font-mono tracking-widest text-accent-gold-400 uppercase">Operational Safety</span>
                <h3 className="font-display font-bold text-lg mt-1">Ontario Safety-Compliant Workflows</h3>
              </div>
            </div>
          </div>
        </div>

        {/* Safety & Compliance banner */}
        <div className="bg-slate-950 text-white rounded-3xl p-8 sm:p-12 mb-24 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center text-left">
          <div className="lg:col-span-5 space-y-4">
            <span className="text-xs font-mono font-bold tracking-widest text-accent-gold-400 uppercase">Uncompromised Standard</span>
            <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white">
              Zero-Risk Safety Frameworks
            </h3>
            <p className="text-slate-400 font-light text-xs sm:text-sm leading-relaxed">
              Roofing is high-risk. We eliminate any liability concerns for homeowners by enforcing rigid, systematic safety protocols on every site.
            </p>
          </div>
          <div className="lg:col-span-7">
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {safetyBadges.map((badge, idx) => (
                <li key={idx} className="bg-slate-900 border border-slate-850 p-4 rounded-xl flex items-start space-x-3 text-xs">
                  <CheckCircle2 className="h-5 w-5 text-accent-gold-400 shrink-0 mt-0.5" />
                  <span className="text-slate-300 font-medium leading-relaxed">{badge}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Leadership Bios */}
        <div className="space-y-16">
          <div className="text-center max-w-xl mx-auto">
            <span className="text-xs font-mono font-bold tracking-widest text-accent-gold-600 uppercase bg-accent-gold-50 border border-accent-gold-200/50 px-3.5 py-1.5 rounded-full inline-block mb-4">
              The Directorate
            </span>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-950 tracking-tight">
              Our Professional Staff
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm font-light leading-relaxed mt-2">
              Learn about the master craftsmen and licensed engineers guiding our diagnostic, estimation, and carpentry teams.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coreTeam.map((member, idx) => (
              <div
                id={`team-card-${idx}`}
                key={idx}
                className="bg-slate-50 border border-slate-100/60 hover:border-slate-300 rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 shadow-sm text-left group"
              >
                <div className="space-y-6">
                  {/* Portrait frame */}
                  <div className="aspect-square rounded-2xl overflow-hidden bg-slate-200 shadow-inner">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-500"
                    />
                  </div>

                  <div className="space-y-1">
                    <span className="block text-[11px] font-mono tracking-wider text-accent-gold-600 font-bold uppercase">{member.role}</span>
                    <h3 className="font-display font-bold text-slate-950 text-xl">{member.name}</h3>
                    <span className="inline-block text-[10px] bg-slate-200/60 border border-slate-300/40 text-slate-500 font-mono px-2 py-0.5 rounded-lg font-bold">{member.experience}</span>
                  </div>

                  <p className="text-slate-500 font-light text-xs sm:text-sm leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
