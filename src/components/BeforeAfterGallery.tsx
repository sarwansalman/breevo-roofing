import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, MapPin, Hammer, Grid, ShieldCheck, HelpCircle } from "lucide-react";
import { PROJECTS_DATA, Project } from "../types";

export default function BeforeAfterGallery() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  // State to track which projects are showing the 'after' image.
  // Defaults to everything showing 'after'.
  const [toggleStates, setToggleStates] = useState<Record<string, "before" | "after">>(
    PROJECTS_DATA.reduce((acc, proj) => ({ ...acc, [proj.id]: "after" }), {})
  );

  const handleToggle = (id: string, state: "before" | "after") => {
    setToggleStates(prev => ({
      ...prev,
      [id]: state
    }));
  };

  const categories = [
    { label: "All Builds", id: "all" },
    { label: "Residential", id: "residential" },
    { label: "Commercial Flat", id: "commercial" },
    { label: "Specialty / Heritage", id: "specialty" }
  ];

  const filteredProjects = activeCategory === "all"
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter(proj => proj.category === activeCategory);

  return (
    <section id="gallery-section" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold tracking-widest text-accent-gold-600 uppercase bg-accent-gold-50 border border-accent-gold-200/50 px-3.5 py-1.5 rounded-full inline-block mb-4">
            Recent Transformations
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight mb-6">
            Architectural Case Studies
          </h2>
          <p className="text-slate-500 font-light leading-relaxed text-base sm:text-lg">
            Witness the engineering transition. Explore actual Canadian properties restored from failing asphalt systems to premier, lifetime structural solutions.
          </p>
        </div>

        {/* Categories Tab Bar */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-16">
          {categories.map((cat) => (
            <button
              id={`category-tab-${cat.id}`}
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 border cursor-pointer ${
                activeCategory === cat.id
                  ? "bg-slate-950 text-accent-gold-400 border-slate-950 shadow-md"
                  : "bg-white text-slate-600 border-slate-200/60 hover:border-slate-300 hover:text-slate-950"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => {
              const showState = toggleStates[project.id] || "after";
              const displayImage = showState === "after" ? project.imageAfter : project.imageBefore;

              return (
                <motion.div
                  id={`project-case-card-${project.id}`}
                  key={project.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white border border-slate-100 rounded-3xl p-6 sm:p-8 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="space-y-6">
                    {/* Before/After Visual Frame */}
                    <div className="relative aspect-video rounded-2xl overflow-hidden bg-slate-950 shadow-inner group">
                      
                      {/* Image container with smooth crossfade */}
                      <AnimatePresence mode="wait">
                        <motion.img
                          key={displayImage}
                          src={displayImage}
                          alt={`${project.title} - ${showState}`}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.4 }}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-500"
                        />
                      </AnimatePresence>

                      {/* Floating Badges */}
                      <div className="absolute top-4 left-4 z-10 flex items-center space-x-2">
                        <span className={`text-[10px] font-mono font-bold uppercase tracking-widest px-3 py-1.5 rounded-lg shadow-md backdrop-blur-md border ${
                          showState === "after"
                            ? "bg-slate-900/90 text-accent-gold-400 border-accent-gold-500/20"
                            : "bg-red-950/90 text-red-400 border-red-500/20"
                        }`}>
                          {showState === "after" ? "Completed System" : "Prior Structure"}
                        </span>
                      </div>

                      {/* Interactive toggle control on the image */}
                      <div className="absolute bottom-4 right-4 left-4 z-10 flex items-center justify-between bg-slate-950/80 backdrop-blur-md rounded-xl p-2.5 border border-slate-800/80">
                        <span className="text-[11px] font-mono text-slate-400 pl-2">Toggle View:</span>
                        <div className="flex bg-slate-900 p-0.5 rounded-lg border border-slate-800">
                          <button
                            id={`toggle-before-${project.id}`}
                            onClick={() => handleToggle(project.id, "before")}
                            className={`px-3 py-1.5 rounded-md text-[10px] font-mono tracking-wider font-bold uppercase transition-all duration-200 cursor-pointer ${
                              showState === "before"
                                ? "bg-red-950/80 text-red-400 shadow-sm"
                                : "text-slate-400 hover:text-white"
                            }`}
                          >
                            Before
                          </button>
                          <button
                            id={`toggle-after-${project.id}`}
                            onClick={() => handleToggle(project.id, "after")}
                            className={`px-3 py-1.5 rounded-md text-[10px] font-mono tracking-wider font-bold uppercase transition-all duration-200 cursor-pointer ${
                              showState === "after"
                                ? "bg-accent-gold-500 text-slate-950 shadow-sm"
                                : "text-slate-400 hover:text-white"
                            }`}
                          >
                            After
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Metadata Details */}
                    <div className="space-y-3">
                      <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-slate-500">
                        <span className="flex items-center space-x-1">
                          <MapPin className="h-3.5 w-3.5 text-slate-400" />
                          <span>{project.location}</span>
                        </span>
                        <span className="w-1 h-1 rounded-full bg-slate-300" />
                        <span className="flex items-center space-x-1">
                          <Hammer className="h-3.5 w-3.5 text-slate-400" />
                          <span>{project.material}</span>
                        </span>
                      </div>

                      <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-950">
                        {project.title}
                      </h3>
                      
                      <p className="text-slate-500 font-light text-sm leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                  </div>

                  {/* Badges footer */}
                  <div className="mt-6 pt-6 border-t border-slate-100 flex items-center justify-between text-xs font-mono">
                    <span className="text-slate-400 uppercase tracking-wider">Project Audit:</span>
                    <span className="text-emerald-600 font-bold flex items-center space-x-1">
                      <ShieldCheck className="h-4 w-4 shrink-0" />
                      <span>Passed 100% Quality Standards</span>
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
