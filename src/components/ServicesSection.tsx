import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Shield, 
  Layers, 
  Square, 
  Trees, 
  Search, 
  Flame, 
  ArrowRight, 
  X, 
  Clock, 
  CheckCircle2, 
  Star 
} from "lucide-react";
import { SERVICES_DATA, REVIEWS_DATA, Service } from "../types";

interface ServicesSectionProps {
  onOpenConsultation: () => void;
  onSelectServiceForQuote?: (serviceTitle: string) => void;
}

export default function ServicesSection({ onOpenConsultation, onSelectServiceForQuote }: ServicesSectionProps) {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  // Map icon strings to Lucide components
  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case "ShieldAlert": return Shield;
      case "Layers": return Layers;
      case "Square": return Square;
      case "TreePine": return Trees;
      case "SearchCode": return Search;
      case "FlameKindling": return Flame;
      default: return Shield;
    }
  };

  // Find a matching testimonial for a given service
  const getServiceTestimonial = (serviceTitle: string) => {
    return REVIEWS_DATA.find(r => r.serviceUsed.toLowerCase() === serviceTitle.toLowerCase()) || REVIEWS_DATA[0];
  };

  const handleCtaClick = (service: Service) => {
    if (onSelectServiceForQuote) {
      onSelectServiceForQuote(service.title);
    }
    setSelectedService(null);
    onOpenConsultation();
  };

  return (
    <section id="services-highlight-section" className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-800/10 rounded-full filter blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-gold-500/5 rounded-full filter blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl text-left">
            <span className="text-xs font-mono font-bold tracking-widest text-accent-gold-400 uppercase bg-slate-800/80 border border-slate-700/50 px-3.5 py-1.5 rounded-full inline-block mb-4">
              Our Curated Offerings
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Elite Architectural Services
            </h2>
            <p className="text-slate-400 font-light mt-4 leading-relaxed">
              We specialize in state-of-the-art building envelopes designed to protect your luxury residential assets and commercial structures from extreme Canadian wind, freeze, and rain events.
            </p>
          </div>
          <button
            id="all-services-cta"
            onClick={onOpenConsultation}
            className="group flex items-center space-x-2 text-accent-gold-400 hover:text-accent-gold-300 font-bold tracking-wider text-sm uppercase self-start md:self-end cursor-pointer"
          >
            <span>Consult our design engineer</span>
            <ArrowRight className="h-4.5 w-4.5 transition-transform duration-300 group-hover:translate-x-1.5" />
          </button>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_DATA.map((service, index) => {
            const IconComponent = getIconComponent(service.icon);
            const review = getServiceTestimonial(service.title);
            return (
              <motion.div
                id={`service-card-${service.id}`}
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-950/80 border border-slate-800/80 hover:border-slate-700/60 rounded-3xl p-8 hover:shadow-2xl hover:shadow-slate-950/50 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group relative"
              >
                <div>
                  {/* Icon Block */}
                  <div className="bg-slate-900 border border-slate-800 p-3.5 rounded-2xl w-fit mb-6 group-hover:bg-accent-gold-500/10 group-hover:border-accent-gold-500/30 transition-colors duration-300">
                    <IconComponent className="h-6 w-6 text-accent-gold-400 group-hover:scale-110 transition-transform" />
                  </div>

                  <h3 className="font-display text-lg sm:text-xl font-bold text-white group-hover:text-accent-gold-300 transition-colors duration-200 mb-3">
                    {service.title}
                  </h3>
                  
                  <p className="text-slate-400 font-light text-xs sm:text-sm leading-relaxed mb-6">
                    {service.shortDescription}
                  </p>
                </div>

                <div className="space-y-4">
                  {/* Warranty Tag */}
                  <div className="bg-slate-900/50 border border-slate-800 rounded-xl px-3.5 py-2 text-[11px] font-mono text-slate-300 flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-gold-400 shrink-0" />
                    <span className="truncate">{service.warranty.split("+")[0]}</span>
                  </div>

                  {/* Button trigger modal */}
                  <button
                    id={`open-service-modal-${service.id}`}
                    onClick={() => setSelectedService(service)}
                    className="w-full bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-200 hover:text-white font-semibold py-3 px-4 rounded-xl text-xs sm:text-sm transition-all duration-300 flex items-center justify-center space-x-2 group/btn cursor-pointer"
                  >
                    <span>Analyze Specifications</span>
                    <ArrowRight className="h-4 w-4 text-slate-500 group-hover/btn:text-accent-gold-400 transition-colors duration-300" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Modal - Service Detail Overlay */}
      <AnimatePresence>
        {selectedService && (() => {
          const IconComponent = getIconComponent(selectedService.icon);
          const review = getServiceTestimonial(selectedService.title);
          return (
            <div id="service-modal-overlay" className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
              <motion.div
                id="service-modal-content"
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.4 }}
                className="bg-slate-900 border border-slate-800 rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative"
              >
                {/* Close Button */}
                <button
                  id="close-service-modal-btn"
                  onClick={() => setSelectedService(null)}
                  className="absolute top-5 right-5 text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 p-2 rounded-xl transition-colors cursor-pointer"
                >
                  <X className="h-5 w-5" />
                </button>

                <div className="p-8 sm:p-10 space-y-8 text-left">
                  {/* Modal Header */}
                  <div className="flex items-start space-x-4">
                    <div className="bg-slate-800 border border-slate-700 p-4 rounded-2xl w-fit shrink-0">
                      <IconComponent className="h-7 w-7 text-accent-gold-400" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono tracking-widest text-accent-gold-400 uppercase">Service Dossier</span>
                      <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white mt-1">
                        {selectedService.title}
                      </h3>
                    </div>
                  </div>

                  {/* Long Description */}
                  <div className="space-y-4">
                    <h4 className="text-xs font-mono tracking-wider text-slate-400 uppercase">Engineering & Composition</h4>
                    <p className="text-slate-300 font-light text-sm sm:text-base leading-relaxed">
                      {selectedService.longDescription}
                    </p>
                  </div>

                  {/* Split Features and Warranty */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-slate-800">
                    <div className="space-y-4">
                      <h4 className="text-xs font-mono tracking-wider text-slate-400 uppercase">Technical Specifications</h4>
                      <ul className="space-y-3">
                        {selectedService.features.map((feat, idx) => (
                          <li key={idx} className="flex items-center space-x-2.5 text-xs sm:text-sm text-slate-300">
                            <CheckCircle2 className="h-4.5 w-4.5 text-accent-gold-400 shrink-0" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="space-y-4 bg-slate-950/60 p-5 rounded-2xl border border-slate-800/80">
                      <h4 className="text-xs font-mono tracking-wider text-accent-gold-400 uppercase flex items-center space-x-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent-gold-400" />
                        <span>System Warranty</span>
                      </h4>
                      <p className="text-slate-300 text-xs sm:text-sm font-medium leading-relaxed">
                        {selectedService.warranty}
                      </p>
                      <div className="text-[11px] text-slate-500 font-mono">
                        *Guarantees are fully transferrable to secondary buyers, bolstering home equity resale values.
                      </div>
                    </div>
                  </div>

                  {/* Customer Review Section (Required by User Guidelines) */}
                  {review && (
                    <div className="bg-slate-950/40 border border-slate-800 p-6 rounded-2xl space-y-4">
                      <div className="flex items-center justify-between">
                        <h4 className="text-xs font-mono tracking-wider text-slate-400 uppercase">Service Testimonial</h4>
                        <div className="flex items-center space-x-0.5">
                          {[...Array(review.rating)].map((_, i) => (
                            <Star key={i} className="h-3.5 w-3.5 fill-accent-gold-400 text-accent-gold-400" />
                          ))}
                        </div>
                      </div>
                      <blockquote className="text-slate-300 italic text-xs sm:text-sm font-light">
                        "{review.comment}"
                      </blockquote>
                      <div className="flex items-center justify-between text-xs font-mono">
                        <span className="text-white font-medium">{review.name}</span>
                        <span className="text-slate-500">{review.location}</span>
                      </div>
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-end space-y-3 sm:space-y-0 sm:space-x-4 pt-6 border-t border-slate-800">
                    <button
                      id="modal-cancel-btn"
                      onClick={() => setSelectedService(null)}
                      className="px-6 py-3 border border-slate-700 hover:border-slate-600 hover:bg-slate-800 text-slate-300 rounded-xl text-sm font-semibold transition-colors cursor-pointer text-center"
                    >
                      Close Dossier
                    </button>
                    <button
                      id="modal-cta-quote-btn"
                      onClick={() => handleCtaClick(selectedService)}
                      className="bg-gradient-to-r from-accent-gold-500 to-accent-gold-600 hover:from-accent-gold-600 hover:to-accent-gold-700 text-slate-950 px-6 py-3 rounded-xl text-sm font-bold shadow-lg flex items-center justify-center space-x-2 cursor-pointer transition-all"
                    >
                      <span>Book Free Valuation</span>
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          );
        })()}
      </AnimatePresence>
    </section>
  );
}
