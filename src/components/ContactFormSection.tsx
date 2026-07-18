import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  Sparkles, 
  Check, 
  AlertTriangle 
} from "lucide-react";

interface ContactFormSectionProps {
  preselectedService?: string;
}

export default function ContactFormSection({ preselectedService = "" }: ContactFormSectionProps) {
  const [formName, setFormName] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [formPhone, setFormPhone] = useState("");
  const [formAddress, setFormAddress] = useState("");
  const [formService, setFormService] = useState(preselectedService || "standing-seam-metal");
  const [formMessage, setFormMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showDemoFeedback, setShowDemoFeedback] = useState(false);

  // Synchronize preselected service prop change
  React.useEffect(() => {
    if (preselectedService) {
      setFormService(preselectedService);
    }
  }, [preselectedService]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API delay
    setTimeout(() => {
      setIsSubmitting(false);
      setShowDemoFeedback(true);
    }, 1200);
  };

  const handleCloseFeedback = () => {
    setShowDemoFeedback(false);
    setFormName("");
    setFormEmail("");
    setFormPhone("");
    setFormAddress("");
    setFormMessage("");
  };

  return (
    <section id="contact-section" className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-brand-800/10 rounded-full filter blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-gold-500/5 rounded-full filter blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Premium Contact details */}
          <div className="lg:col-span-5 space-y-10 text-left">
            <div>
              <span className="text-xs font-mono font-bold tracking-widest text-accent-gold-400 uppercase bg-slate-800/80 border border-slate-700/50 px-3.5 py-1.5 rounded-full inline-block mb-4">
                Let's Build Together
              </span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
                Secure Your Physical Valuation
              </h2>
              <p className="text-slate-400 font-light mt-4 leading-relaxed">
                Our licensed engineering project managers are dispatched directly to your property to coordinate high-resolution scans, inspect timber structures, and engineer an accurate estimate.
              </p>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-6">
              
              {/* Phone card */}
              <a
                id="contact-phone-card"
                href="tel:0000000000"
                className="flex items-start space-x-4 bg-slate-950/40 border border-slate-800 p-5 rounded-2xl hover:border-slate-700 transition-all duration-300 block"
              >
                <div className="bg-slate-800 p-3 rounded-xl border border-slate-700 text-accent-gold-400 shrink-0">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <span className="block text-[10px] font-mono uppercase tracking-wider text-slate-500">Emergency Dispatch</span>
                  <span className="block text-base font-bold text-white mt-1">(000) 000-0000</span>
                  <span className="block text-xs text-slate-400 font-light mt-0.5">Toll-free across Ontario</span>
                </div>
              </a>

              {/* Email card */}
              <a
                id="contact-email-card"
                href="mailto:hello@example.ca"
                className="flex items-start space-x-4 bg-slate-950/40 border border-slate-800 p-5 rounded-2xl hover:border-slate-700 transition-all duration-300 block"
              >
                <div className="bg-slate-800 p-3 rounded-xl border border-slate-700 text-accent-gold-400 shrink-0">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <span className="block text-[10px] font-mono uppercase tracking-wider text-slate-500">Estimating Bureau</span>
                  <span className="block text-base font-bold text-white mt-1">hello@example.ca</span>
                  <span className="block text-xs text-slate-400 font-light mt-0.5">24-hour initial triage response</span>
                </div>
              </a>

              {/* Office Address Card */}
              <div className="flex items-start space-x-4 bg-slate-950/40 border border-slate-800 p-5 rounded-2xl">
                <div className="bg-slate-800 p-3 rounded-xl border border-slate-700 text-accent-gold-400 shrink-0">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <span className="block text-[10px] font-mono uppercase tracking-wider text-slate-500">Corporate Headquarters</span>
                  <span className="block text-base font-bold text-white mt-1">123 Main Street</span>
                  <span className="block text-sm text-slate-300 font-medium">Toronto, Ontario</span>
                </div>
              </div>

            </div>

            {/* Business Hours */}
            <div className="bg-slate-950/20 border border-slate-800/80 rounded-2xl p-6 space-y-3">
              <h4 className="font-display font-bold text-sm uppercase tracking-wider text-white">Bureau Operating Hours</h4>
              <div className="flex justify-between text-xs font-mono border-b border-slate-800/60 pb-2">
                <span className="text-slate-500">Monday - Friday</span>
                <span className="text-slate-300 font-medium">7:00 AM - 7:00 PM</span>
              </div>
              <div className="flex justify-between text-xs font-mono border-b border-slate-800/60 pb-2">
                <span className="text-slate-500">Saturday</span>
                <span className="text-slate-300 font-medium">8:00 AM - 4:00 PM</span>
              </div>
              <div className="flex justify-between text-xs font-mono text-red-400">
                <span>Emergency Storm Dispatch</span>
                <span className="font-bold uppercase tracking-wider">24 Hours / 7 Days</span>
              </div>
            </div>

          </div>

          {/* Right Column: Premium Form */}
          <div className="lg:col-span-7">
            <div className="bg-slate-950/60 border border-slate-800/80 rounded-3xl p-6 sm:p-10 shadow-2xl relative">
              <h3 className="font-display text-xl sm:text-2xl font-bold text-white mb-2">
                Appraisal Request Dossier
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 font-light mb-8">
                Input your coordinate details to trigger our automated localized estimating sequence.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-mono text-slate-400 uppercase mb-1.5">Property Director Name</label>
                    <input
                      type="text"
                      required
                      value={formName}
                      onChange={(e) => setFormName(e.target.value)}
                      placeholder="e.g., Alistair Miller"
                      className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-slate-700 transition-all font-sans"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-slate-400 uppercase mb-1.5">Email Coordinates</label>
                    <input
                      type="email"
                      required
                      value={formEmail}
                      onChange={(e) => setFormEmail(e.target.value)}
                      placeholder="e.g., alistair@domain.ca"
                      className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-slate-700 transition-all font-sans"
                    />
                  </div>
                </div>

                {/* Phone & Address Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-mono text-slate-400 uppercase mb-1.5">Phone (Canadian Format)</label>
                    <input
                      type="tel"
                      required
                      value={formPhone}
                      onChange={(e) => setFormPhone(e.target.value)}
                      placeholder="e.g., (416) 555-0199"
                      className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-slate-700 transition-all font-sans"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-slate-400 uppercase mb-1.5">Property Address</label>
                    <input
                      type="text"
                      required
                      value={formAddress}
                      onChange={(e) => setFormAddress(e.target.value)}
                      placeholder="e.g., 44 Lakeshore Road, Oakville"
                      className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-slate-700 transition-all font-sans"
                    />
                  </div>
                </div>

                {/* Service Selection */}
                <div>
                  <label className="block text-xs font-mono text-slate-400 uppercase mb-1.5">Desired Architectural System</label>
                  <select
                    value={formService}
                    onChange={(e) => setFormService(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none focus:border-slate-700 transition-all font-sans"
                  >
                    <option value="standing-seam-metal">Continuous Panel standing Seam Metal</option>
                    <option value="architectural-shingles">Premium Architectural Laminate Shingles</option>
                    <option value="flat-membrane">High-Density Flat Slope Membrane (TPO/SBS)</option>
                    <option value="cedar-shakes">Grade-1 Hand-Split BC Cedar Shakes</option>
                    <option value="inspections">Extreme-Weather Structural Inspection</option>
                    <option value="emergency-repair">Emergency Damage Tarping & Repair</option>
                  </select>
                </div>

                {/* Message Coordinates */}
                <div>
                  <label className="block text-xs font-mono text-slate-400 uppercase mb-1.5">Scope Description & Roof Pitch Details</label>
                  <textarea
                    required
                    value={formMessage}
                    onChange={(e) => setFormMessage(e.target.value)}
                    rows={5}
                    placeholder="Provide notes on approximate roof age, pitch, current issues, or winter ventilation ice concerns..."
                    className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-slate-700 transition-all font-sans"
                  />
                </div>

                {/* Compliance Disclaimer Badge */}
                <div className="bg-slate-900/50 border border-slate-800/80 p-4 rounded-xl flex items-center space-x-3 text-xs font-mono text-slate-400 leading-normal">
                  <ShieldCheck className="h-5 w-5 text-accent-gold-400 shrink-0" />
                  <span>Apex Crest respects privacy. Your metrics are fully secured using high-grade TLS encryption schemas.</span>
                </div>

                {/* Submit button */}
                <button
                  id="contact-form-submit-btn"
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-accent-gold-500 to-accent-gold-600 hover:from-accent-gold-600 hover:to-accent-gold-700 text-slate-950 font-extrabold text-sm sm:text-base py-4 rounded-xl shadow-xl shadow-accent-gold-600/10 hover:shadow-accent-gold-600/25 transition-all duration-300 flex items-center justify-center space-x-2.5 cursor-pointer disabled:opacity-55"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-2 border-slate-950 border-t-transparent" />
                      <span>Transmitting Dossier...</span>
                    </>
                  ) : (
                    <>
                      <span>Transmit Appraisal Request</span>
                    </>
                  )}
                </button>

              </form>

              {/* Demo Submission Success Dialog */}
              <AnimatePresence>
                {showDemoFeedback && (
                  <motion.div
                    id="demo-feedback-modal"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="absolute inset-0 bg-slate-950 rounded-3xl p-6 sm:p-10 flex flex-col items-center justify-center text-center space-y-6 z-20"
                  >
                    <div className="bg-red-950/50 border border-red-500/20 p-4 rounded-full text-red-400 animate-bounce">
                      <AlertTriangle className="h-12 w-12" />
                    </div>

                    <div className="space-y-2 max-w-md">
                      <h4 className="font-display text-2xl font-extrabold text-white">Demo Website Alert</h4>
                      <p className="text-sm text-red-400 font-semibold uppercase tracking-wider font-mono">
                        "Demo Website — Form submission disabled."
                      </p>
                      <p className="text-xs sm:text-sm text-slate-400 font-light leading-relaxed pt-2">
                        Apex Crest is a fictional business. No data has been logged or transmitted. In a production build, this would securely trigger automated email alerts, notify our estimating office, and log details inside your customer sales CRM.
                      </p>
                    </div>

                    <button
                      id="close-demo-feedback-btn"
                      onClick={handleCloseFeedback}
                      className="bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-slate-200 font-bold px-6 py-3 rounded-xl text-xs sm:text-sm transition-all cursor-pointer"
                    >
                      Return to Form
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>

        {/* Mock Google Map Section */}
        <div className="mt-20">
          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-4 shadow-xl overflow-hidden relative">
            <div className="absolute top-8 left-8 z-10 bg-slate-900/95 border border-slate-800 p-4 rounded-2xl max-w-xs shadow-lg text-left">
              <span className="inline-block bg-accent-gold-400/10 text-accent-gold-400 border border-accent-gold-400/20 text-[9px] font-mono tracking-widest uppercase px-2.5 py-0.5 rounded-full mb-3">
                Corporate Bureau
              </span>
              <h4 className="font-display font-extrabold text-white text-sm">Apex Crest Headquarters</h4>
              <p className="text-xs text-slate-400 font-light mt-1">
                123 Main Street, Toronto, Ontario, Canada
              </p>
              <div className="mt-3 text-[10px] font-mono text-emerald-500 flex items-center space-x-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                <span>GPS Coordinator Online</span>
              </div>
            </div>

            {/* Simulated Luxury Dark Map Background using standard SVG paths representing streets */}
            <div className="h-80 sm:h-96 w-full rounded-2xl overflow-hidden relative bg-[#0b0f19] flex items-center justify-center">
              {/* Complex Vector Grid representing map roads & coordinates */}
              <div className="absolute inset-0 opacity-15 pointer-events-none select-none">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#ffffff" strokeWidth="0.5"/>
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid)" />
                  {/* Diagonal avenues */}
                  <line x1="0" y1="0" x2="1000" y2="1000" stroke="#ffffff" strokeWidth="2" />
                  <line x1="200" y1="0" x2="1200" y2="1000" stroke="#ffffff" strokeWidth="1" />
                  <line x1="0" y1="500" x2="1000" y2="1500" stroke="#ffffff" strokeWidth="1" />
                  {/* Curved Lake Shoreline */}
                  <path d="M 0 350 Q 300 200 700 380 T 1500 320" fill="none" stroke="#22d3ee" strokeWidth="4" />
                </svg>
              </div>

              {/* Lake Ontario Gradient */}
              <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-cyan-950/30 to-transparent pointer-events-none" />

              {/* Glowing Pulse for office location */}
              <div className="relative z-0 flex flex-col items-center">
                <div className="absolute -top-12 bg-slate-900 border border-accent-gold-500/30 text-white text-[10px] font-mono px-3 py-1.5 rounded-lg shadow-md uppercase tracking-wider font-bold">
                  Apex Crest HQ
                </div>
                <div className="w-6 h-6 rounded-full bg-accent-gold-400 flex items-center justify-center relative animate-pulse shadow-lg shadow-accent-gold-400/45">
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-950" />
                </div>
                <div className="w-12 h-12 rounded-full border border-accent-gold-400/30 absolute animate-ping duration-1000" />
              </div>

              {/* Zoom buttons HUD mock */}
              <div className="absolute bottom-6 right-6 flex flex-col bg-slate-900 border border-slate-800 rounded-xl p-1.5 space-y-1 shadow-lg">
                <button type="button" className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-slate-700 text-white flex items-center justify-center text-sm font-bold cursor-pointer font-mono">+</button>
                <button type="button" className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-slate-700 text-white flex items-center justify-center text-sm font-bold cursor-pointer font-mono">-</button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
