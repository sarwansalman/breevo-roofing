import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  ShieldCheck, 
  Sparkles, 
  X, 
  Phone, 
  AlertTriangle, 
  ArrowRight,
  ChevronRight,
  Star
} from "lucide-react";

// Import Modular Components
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import ServicesSection from "./components/ServicesSection";
import BeforeAfterGallery from "./components/BeforeAfterGallery";
import ProcessSection from "./components/ProcessSection";
import StatsSection from "./components/StatsSection";
import TestimonialsSection from "./components/TestimonialsSection";
import AreasWeServeSection from "./components/AreasWeServeSection";
import FaqSection from "./components/FaqSection";
import ContactFormSection from "./components/ContactFormSection";
import Footer from "./components/Footer";
import AboutPage from "./components/AboutPage";
import PrivacyPolicyPage from "./components/PrivacyPolicyPage";

export default function App() {
  const [currentPage, setCurrentPage] = useState<string>("home");
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState<boolean>(false);
  const [selectedServiceForQuote, setSelectedServiceForQuote] = useState<string>("");
  
  // Custom states for the modular quote request modal
  const [modalName, setModalName] = useState("");
  const [modalEmail, setModalEmail] = useState("");
  const [modalPhone, setModalPhone] = useState("");
  const [modalAddress, setModalAddress] = useState("");
  const [modalComments, setModalComments] = useState("");
  const [modalSubmitting, setModalSubmitting] = useState(false);
  const [modalFeedback, setModalFeedback] = useState(false);

  // Trigger initial luxury loading splash
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const handleOpenConsultation = () => {
    setIsQuoteModalOpen(true);
  };

  const handleModalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setModalSubmitting(true);
    setTimeout(() => {
      setModalSubmitting(false);
      setModalFeedback(true);
    }, 1200);
  };

  const handleCloseModalFeedback = () => {
    setModalFeedback(false);
    setIsQuoteModalOpen(false);
    setModalName("");
    setModalEmail("");
    setModalPhone("");
    setModalAddress("");
    setModalComments("");
    setSelectedServiceForQuote("");
  };

  return (
    <div id="apex-crest-root" className="min-h-screen bg-[#fafbfc] text-[#1a2327] selection:bg-accent-gold-400 selection:text-slate-950 flex flex-col justify-between">
      
      {/* 1. Tasteful Entrance Loading Splash Animation */}
      <AnimatePresence mode="wait">
        {isLoading && (
          <motion.div
            id="loading-splash"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="fixed inset-0 z-100 bg-slate-950 flex flex-col items-center justify-center text-white"
          >
            <div className="space-y-6 text-center">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, repeat: 0 }}
                className="bg-gradient-to-br from-accent-gold-400 to-accent-gold-600 p-4 rounded-2xl inline-block shadow-2xl"
              >
                <ShieldCheck className="h-10 w-10 text-slate-950" />
              </motion.div>
              
              <div className="space-y-2">
                <motion.h2
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="font-display text-2xl font-black uppercase tracking-widest text-white"
                >
                  Apex Crest
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="text-[10px] font-mono tracking-widest text-accent-gold-400 uppercase"
                >
                  Engineered for Canadian Weather
                </motion.p>
              </div>

              {/* Minimalist animated linear bar */}
              <div className="w-32 h-1 bg-slate-900 rounded-full mx-auto overflow-hidden">
                <motion.div
                  initial={{ left: "-100%" }}
                  animate={{ left: "100%" }}
                  transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
                  className="h-full bg-accent-gold-400 rounded-full relative w-1/2"
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Website Frame */}
      {!isLoading && (
        <>
          {/* Sticky Navigation bar */}
          <Navbar 
            currentPage={currentPage} 
            setCurrentPage={setCurrentPage} 
            onOpenConsultation={handleOpenConsultation}
          />

          {/* Page Routing Switch */}
          <main className="flex-grow">
            <AnimatePresence mode="wait">
              {currentPage === "home" && (
                <motion.div
                  key="home-page"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  {/* Homepage Sections */}
                  <Hero onOpenConsultation={handleOpenConsultation} setCurrentPage={setCurrentPage} />
                  <Features />
                  <ServicesSection onOpenConsultation={handleOpenConsultation} onSelectServiceForQuote={setSelectedServiceForQuote} />
                  <BeforeAfterGallery />
                  <ProcessSection />
                  <StatsSection />
                  <TestimonialsSection />
                  <AreasWeServeSection />
                  <FaqSection />
                  <ContactFormSection preselectedService={selectedServiceForQuote} />
                </motion.div>
              )}

              {currentPage === "about" && (
                <motion.div
                  key="about-page"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <AboutPage />
                  <StatsSection />
                </motion.div>
              )}

              {currentPage === "services" && (
                <motion.div
                  key="services-page"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="pt-32 bg-slate-900">
                    <ServicesSection onOpenConsultation={handleOpenConsultation} onSelectServiceForQuote={setSelectedServiceForQuote} />
                  </div>
                  <ProcessSection />
                </motion.div>
              )}

              {currentPage === "gallery" && (
                <motion.div
                  key="gallery-page"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="pt-16">
                    <BeforeAfterGallery />
                  </div>
                  <ProcessSection />
                </motion.div>
              )}

              {currentPage === "reviews" && (
                <motion.div
                  key="reviews-page"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="pt-16">
                    <TestimonialsSection />
                  </div>
                </motion.div>
              )}

              {currentPage === "faq" && (
                <motion.div
                  key="faq-page"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="pt-16">
                    <FaqSection />
                  </div>
                </motion.div>
              )}

              {currentPage === "contact" && (
                <motion.div
                  key="contact-page"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="pt-16">
                    <ContactFormSection preselectedService={selectedServiceForQuote} />
                  </div>
                </motion.div>
              )}

              {currentPage === "privacy" && (
                <motion.div
                  key="privacy-page"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <PrivacyPolicyPage />
                </motion.div>
              )}
            </AnimatePresence>
          </main>

          {/* Persistent Premium Corporate Footer */}
          <Footer setCurrentPage={setCurrentPage} onOpenConsultation={handleOpenConsultation} />

          {/* 2. Interactive Global Quote scheduling Modal */}
          <AnimatePresence>
            {isQuoteModalOpen && (
              <div id="quote-modal-overlay" className="fixed inset-0 z-100 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
                <motion.div
                  id="quote-modal-content"
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: 20 }}
                  transition={{ duration: 0.4 }}
                  className="bg-white border border-slate-200 rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl relative text-left"
                >
                  {/* Close button */}
                  <button
                    id="close-quote-modal-btn"
                    onClick={() => setIsQuoteModalOpen(false)}
                    className="absolute top-5 right-5 text-slate-400 hover:text-slate-800 bg-slate-100 hover:bg-slate-200 p-2 rounded-xl transition-colors cursor-pointer"
                  >
                    <X className="h-5 w-5" />
                  </button>

                  <div className="space-y-6">
                    {/* Header */}
                    <div className="flex items-start space-x-3.5">
                      <div className="bg-slate-950 p-2.5 rounded-xl border border-slate-800 text-accent-gold-400 shrink-0">
                        <Sparkles className="h-6 w-6" />
                      </div>
                      <div>
                        <span className="text-[10px] font-mono tracking-widest text-accent-gold-600 uppercase font-bold">Appraisal Sequence</span>
                        <h3 className="font-display text-2xl font-black text-slate-950 mt-0.5">Free System Assessment</h3>
                      </div>
                    </div>

                    {/* Form body */}
                    <form onSubmit={handleModalSubmit} className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-mono text-slate-500 uppercase mb-1">Your Full Name</label>
                          <input
                            type="text"
                            required
                            value={modalName}
                            onChange={(e) => setModalName(e.target.value)}
                            placeholder="e.g., Donald Campbell"
                            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:bg-white focus:border-slate-400 outline-none transition-all"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-mono text-slate-500 uppercase mb-1">Email Coordinates</label>
                          <input
                            type="email"
                            required
                            value={modalEmail}
                            onChange={(e) => setModalEmail(e.target.value)}
                            placeholder="e.g., donald@domain.ca"
                            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:bg-white focus:border-slate-400 outline-none transition-all"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-mono text-slate-500 uppercase mb-1">Phone Line</label>
                          <input
                            type="tel"
                            required
                            value={modalPhone}
                            onChange={(e) => setModalPhone(e.target.value)}
                            placeholder="e.g., (905) 555-0144"
                            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:bg-white focus:border-slate-400 outline-none transition-all"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-mono text-slate-500 uppercase mb-1">Property Location</label>
                          <input
                            type="text"
                            required
                            value={modalAddress}
                            onChange={(e) => setModalAddress(e.target.value)}
                            placeholder="e.g., Burlington, ON"
                            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:bg-white focus:border-slate-400 outline-none transition-all"
                          />
                        </div>
                      </div>

                      {/* Service Selection prefilled */}
                      <div>
                        <label className="block text-xs font-mono text-slate-500 uppercase mb-1">Requested Service Profile</label>
                        <select
                          value={selectedServiceForQuote || "standing-seam-metal"}
                          onChange={(e) => setSelectedServiceForQuote(e.target.value)}
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:bg-white focus:border-slate-400 outline-none transition-all"
                        >
                          <option value="standing-seam-metal">Continuous Panel Standing Seam Metal</option>
                          <option value="architectural-shingles">Premium Architectural Laminated Shingles</option>
                          <option value="flat-membrane">High-Density Flat Slope Membrane (TPO/EPDM)</option>
                          <option value="cedar-shakes">Grade-1 Western Red Cedar Shakes</option>
                          <option value="inspections">Extreme-Weather Structural Inspection</option>
                          <option value="emergency-repair">Emergency Damage Tarping & Repair</option>
                        </select>
                      </div>

                      {/* Additional notes */}
                      <div>
                        <label className="block text-xs font-mono text-slate-500 uppercase mb-1">Additional Project Details (Optional)</label>
                        <textarea
                          value={modalComments}
                          onChange={(e) => setModalComments(e.target.value)}
                          rows={3}
                          placeholder="Briefly describe your roof age, height, or ice concerns..."
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:bg-white focus:border-slate-400 outline-none transition-all"
                        />
                      </div>

                      {/* Compliance checkmark list */}
                      <div className="bg-slate-50 border border-slate-100 p-3 rounded-xl space-y-1.5 text-xs text-slate-500">
                        <div className="flex items-center space-x-2">
                          <ShieldCheck className="h-4 w-4 text-emerald-600" />
                          <span>Includes Free High-Res Thermal Drone Diagnostics Scan</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <ShieldCheck className="h-4 w-4 text-emerald-600" />
                          <span>WSIB & safety compliance certified site execution</span>
                        </div>
                      </div>

                      {/* Action buttons */}
                      <div className="flex items-center justify-end space-x-3 pt-4 border-t border-slate-150">
                        <button
                          id="modal-cancel-quote-btn"
                          type="button"
                          onClick={() => setIsQuoteModalOpen(false)}
                          className="px-5 py-3 border border-slate-200 hover:bg-slate-50 text-slate-600 rounded-xl text-sm font-semibold transition-colors cursor-pointer"
                        >
                          Cancel
                        </button>
                        <button
                          id="modal-submit-quote-btn"
                          type="submit"
                          disabled={modalSubmitting}
                          className="bg-gradient-to-r from-accent-gold-500 to-accent-gold-600 text-slate-950 font-bold px-6 py-3 rounded-xl text-sm shadow-md flex items-center justify-center space-x-2 cursor-pointer disabled:opacity-55"
                        >
                          {modalSubmitting ? (
                            <>
                              <div className="animate-spin rounded-full h-4 w-4 border-2 border-slate-950 border-t-transparent" />
                              <span>Transmitting Request...</span>
                            </>
                          ) : (
                            <>
                              <span>Request Evaluation</span>
                            </>
                          )}
                        </button>
                      </div>
                    </form>
                  </div>

                  {/* Demo Feedback Overlay */}
                  <AnimatePresence>
                    {modalFeedback && (
                      <motion.div
                        id="modal-demo-feedback-overlay"
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.98 }}
                        className="absolute inset-0 bg-slate-950 text-white rounded-3xl p-8 flex flex-col items-center justify-center text-center space-y-6 z-30"
                      >
                        <div className="bg-red-950/50 border border-red-500/20 p-4 rounded-full text-red-400 animate-bounce">
                          <AlertTriangle className="h-10 w-10" />
                        </div>

                        <div className="space-y-2 max-w-sm">
                          <h4 className="font-display text-xl font-bold text-white">Demo Website Notice</h4>
                          <p className="text-xs text-red-400 font-bold uppercase tracking-wider font-mono">
                            "Demo Website — Form submission disabled."
                          </p>
                          <p className="text-xs text-slate-400 font-light leading-relaxed pt-2">
                            This is a fictional local business showcase page. Your evaluation coordinates have not been stored or posted. In a live production environment, this triggers direct automated sales alert sequences to your local estimators.
                          </p>
                        </div>

                        <button
                          id="modal-close-feedback-btn"
                          onClick={handleCloseModalFeedback}
                          className="bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-slate-200 font-bold px-6 py-2.5 rounded-xl text-xs sm:text-sm transition-all cursor-pointer"
                        >
                          Return to Site
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </div>
            )}
          </AnimatePresence>
        </>
      )}

    </div>
  );
}
