import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { SERVING_AREAS } from "../types";
import { MapPin, Search, CheckCircle2, AlertTriangle, ShieldCheck } from "lucide-react";

export default function AreasWeServeSection() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResult, setSearchResult] = useState<"in" | "out" | null>(null);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) {
      setSearchResult(null);
      return;
    }

    const matched = SERVING_AREAS.some(
      (area) => area.toLowerCase() === searchQuery.trim().toLowerCase()
    );

    if (matched) {
      setSearchResult("in");
    } else {
      setSearchResult("out");
    }
  };

  return (
    <section id="areas-serve-section" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Decorative accent background */}
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-brand-50 rounded-full filter blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Areas Description Text */}
          <div className="lg:col-span-7 space-y-8 text-left">
            <div>
              <span className="text-xs font-mono font-bold tracking-widest text-accent-gold-600 uppercase bg-accent-gold-50 border border-accent-gold-200/50 px-3.5 py-1.5 rounded-full inline-block mb-4">
                Territorial Coverage
              </span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight mb-6">
                Serving the Greater Toronto Area & Golden Horseshoe
              </h2>
              <p className="text-slate-500 font-light leading-relaxed text-sm sm:text-base">
                To maintain our industry-leading workmanship guarantees, we employ dedicated localized service units headquartered throughout Ontario. This ensures rapid emergency response times and localized engineering knowledge of shoreline wind zones and severe snow patterns.
              </p>
            </div>

            {/* Cities Grid with bullet highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {SERVING_AREAS.map((city) => (
                <div
                  id={`area-badge-${city.toLowerCase()}`}
                  key={city}
                  className="bg-white border border-slate-100/60 rounded-xl px-4 py-3.5 flex items-center space-x-2.5 shadow-sm hover:border-slate-300 hover:shadow-md transition-all duration-300"
                >
                  <MapPin className="h-4 w-4 text-accent-gold-500 shrink-0" />
                  <span className="font-display text-sm font-bold text-slate-900">{city}</span>
                </div>
              ))}
            </div>

            <div className="bg-white border border-slate-100 p-4 rounded-2xl flex items-start space-x-3 max-w-xl shadow-sm">
              <ShieldCheck className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
              <p className="text-xs text-slate-400 font-mono leading-relaxed">
                *Don't see your city? We routinely accept custom architectural builds on estates and heritage landmarks outside our standard radius. Contact our project manager directly.
              </p>
            </div>
          </div>

          {/* Interactive Coverage Checker Tool Card */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-slate-950 border border-slate-800 rounded-3xl p-8 text-white shadow-2xl relative overflow-hidden text-left"
            >
              {/* Gold light leakage */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent-gold-500/10 rounded-full filter blur-3xl" />

              <h3 className="font-display text-xl sm:text-2xl font-bold text-white mb-2">
                Coverage Zip-Checker
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 font-light mb-6">
                Input your municipality or postal zone to confirm active localized service crews.
              </p>

              <form onSubmit={handleSearch} className="space-y-4 mb-6">
                <div className="relative">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => {
                      setSearchQuery(e.target.value);
                      setSearchResult(null);
                    }}
                    placeholder="e.g., Oakville or L6H"
                    className="w-full bg-slate-900 border border-slate-800 rounded-xl pl-4 pr-12 py-3.5 text-sm font-mono text-white placeholder-slate-500 focus:outline-none focus:border-slate-600 transition-all"
                  />
                  <button
                    id="search-area-submit-btn"
                    type="submit"
                    className="absolute right-2.5 top-2.5 bg-slate-800 hover:bg-slate-700 p-2 rounded-lg text-accent-gold-400 cursor-pointer"
                  >
                    <Search className="h-4.5 w-4.5" />
                  </button>
                </div>
              </form>

              {/* Coverage Checker Results display */}
              <AnimatePresence mode="wait">
                {searchResult === "in" && (
                  <motion.div
                    id="coverage-result-in"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="bg-emerald-950/20 border border-emerald-900/30 text-emerald-400 p-4 rounded-xl flex items-start space-x-3 text-xs sm:text-sm"
                  >
                    <CheckCircle2 className="h-5 w-5 shrink-0 mt-0.5 text-emerald-500" />
                    <div>
                      <span className="block font-bold">Premium Territory Verified</span>
                      <span className="block text-slate-300 font-light mt-1">
                        Excellent! Your location falls under our active service radius. You qualify for a 100% free structural drone consultation. Zero travel dispatch tariffs apply.
                      </span>
                    </div>
                  </motion.div>
                )}

                {searchResult === "out" && (
                  <motion.div
                    id="coverage-result-out"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="bg-yellow-950/20 border border-yellow-900/30 text-yellow-400 p-4 rounded-xl flex items-start space-x-3 text-xs sm:text-sm"
                  >
                    <AlertTriangle className="h-5 w-5 shrink-0 mt-0.5 text-yellow-500" />
                    <div>
                      <span className="block font-bold">Extended Boundary Zone</span>
                      <span className="block text-slate-300 font-light mt-1">
                        While your town is outside our standardized daily crew dispatch area, our special-projects managers routinely authorize extended residential contracts. Please contact our coordinator.
                      </span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="space-y-3 mt-8 border-t border-slate-900 pt-6">
                <div className="flex items-center space-x-2 text-xs font-mono text-slate-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-gold-400" />
                  <span>Crews active 24/7 in Toronto/GTA</span>
                </div>
                <div className="flex items-center space-x-2 text-xs font-mono text-slate-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-gold-400" />
                  <span>Licensed under Ontario Building Safety Codes</span>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
