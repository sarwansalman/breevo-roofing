import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { REVIEWS_DATA, Review } from "../types";
import { Star, MapPin, Quote, ShieldCheck, PenTool, Check, MessageSquare } from "lucide-react";

export default function TestimonialsSection() {
  const [filterService, setFilterService] = useState<string>("all");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [demoAlert, setDemoAlert] = useState(false);

  // Form State
  const [formName, setFormName] = useState("");
  const [formLocation, setFormLocation] = useState("");
  const [formRating, setFormRating] = useState(5);
  const [formService, setFormService] = useState("Standing Seam Metal Roofing");
  const [formComment, setFormComment] = useState("");

  const services = [
    { label: "All Reviews", id: "all" },
    { label: "Metal Roofing", id: "Standing Seam Metal Roofing" },
    { label: "Architectural Shingles", id: "Premium Architectural Shingle Roofing" },
    { label: "Cedar Shakes", id: "Heritage Cedar Shake Roofing" },
    { label: "Flat Roofing", id: "Commercial & Residential Flat Roofing" }
  ];

  const filteredReviews = filterService === "all"
    ? REVIEWS_DATA
    : REVIEWS_DATA.filter(rev => rev.serviceUsed === filterService);

  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setDemoAlert(true);
    setTimeout(() => {
      setDemoAlert(false);
      setIsModalOpen(false);
      setFormName("");
      setFormLocation("");
      setFormComment("");
    }, 3000);
  };

  return (
    <section id="reviews-section" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-brand-50 rounded-full filter blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl text-left">
            <span className="text-xs font-mono font-bold tracking-widest text-accent-gold-600 uppercase bg-accent-gold-50 border border-accent-gold-200/50 px-3.5 py-1.5 rounded-full inline-block mb-4">
              Verified Patron Testimonials
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight">
              A Legacy of Protection & Praise
            </h2>
            <p className="text-slate-500 font-light mt-4 leading-relaxed">
              We take pride in our impeccable customer satisfaction scores. Explore verified accounts from Ontario homeowners and property directors who have invested in an Apex Crest system.
            </p>
          </div>
          <button
            id="write-review-trigger"
            onClick={() => setIsModalOpen(true)}
            className="bg-slate-950 hover:bg-slate-900 border border-slate-900 text-accent-gold-400 hover:text-accent-gold-300 font-bold px-6 py-3.5 rounded-xl text-sm transition-all flex items-center justify-center space-x-2.5 cursor-pointer shadow-lg shrink-0 self-start md:self-end"
          >
            <PenTool className="h-4.5 w-4.5" />
            <span>Author a Review</span>
          </button>
        </div>

        {/* Aggregated Score Bar */}
        <div className="bg-slate-50 border border-slate-100 rounded-3xl p-6 sm:p-8 mb-12 flex flex-col md:flex-row items-center justify-between gap-6 text-left">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
            <div className="text-5xl font-display font-black text-slate-950">4.96</div>
            <div>
              <div className="flex items-center space-x-0.5 text-accent-gold-500 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current" />
                ))}
              </div>
              <p className="text-slate-500 text-xs sm:text-sm font-light">
                Average across 240+ verified residential and commercial contracts in Ontario.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <span className="bg-white border border-slate-200/80 px-3.5 py-1.5 rounded-xl text-xs font-mono text-slate-600 font-bold flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>Google Verified</span>
            </span>
            <span className="bg-white border border-slate-200/80 px-3.5 py-1.5 rounded-xl text-xs font-mono text-slate-600 font-bold flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>HomeStars Certified</span>
            </span>
          </div>
        </div>

        {/* Filters Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-10 border-b border-slate-100 pb-6">
          <span className="text-xs font-mono text-slate-400 mr-2">Filter by Service:</span>
          {services.map((item) => (
            <button
              id={`review-filter-tab-${item.id}`}
              key={item.id}
              onClick={() => setFilterService(item.id)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-300 border cursor-pointer ${
                filterService === item.id
                  ? "bg-brand-50 border-brand-200 text-brand-700 shadow-inner"
                  : "bg-white text-slate-500 border-slate-100 hover:border-slate-200 hover:text-slate-800"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredReviews.map((rev, index) => (
              <motion.div
                id={`review-card-${rev.id}`}
                key={rev.id}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-slate-50/50 hover:bg-white border border-slate-100/80 hover:border-slate-200 p-8 rounded-3xl flex flex-col justify-between transition-all duration-300 group shadow-sm relative overflow-hidden"
              >
                {/* Accent Watermark */}
                <Quote className="absolute right-6 top-6 text-slate-200/40 h-16 w-16 pointer-events-none" />

                <div className="space-y-4">
                  {/* Rating & Service */}
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div className="flex items-center space-x-0.5 text-accent-gold-500">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                    <span className="bg-slate-200/50 border border-slate-300/40 text-slate-600 font-mono text-[10px] tracking-wide font-bold px-3 py-1 rounded-lg">
                      {rev.serviceUsed}
                    </span>
                  </div>

                  {/* Title & Comment */}
                  <h3 className="font-display font-bold text-slate-950 text-lg group-hover:text-brand-700 transition-colors">
                    "{rev.title}"
                  </h3>
                  <p className="text-slate-500 font-light text-sm leading-relaxed">
                    {rev.comment}
                  </p>
                </div>

                {/* Author Info */}
                <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <span className="block font-display font-bold text-slate-950 text-sm">{rev.name}</span>
                    <span className="flex items-center space-x-1.5 text-slate-400 text-xs font-mono mt-0.5">
                      <MapPin className="h-3.5 w-3.5 text-slate-300" />
                      <span>{rev.location}</span>
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-slate-400">{rev.date}</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>

      {/* Write a Review Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div id="review-modal-overlay" className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
            <motion.div
              id="review-modal-content"
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white border border-slate-200 rounded-3xl max-w-xl w-full p-8 shadow-2xl relative text-left"
            >
              <div className="space-y-6">
                <div>
                  <h3 className="font-display text-2xl font-bold text-slate-950">Write a Verification Review</h3>
                  <p className="text-slate-500 font-light text-sm mt-1">
                    Your feedback undergoes our quality screening to ensure high-integrity feedback is logged.
                  </p>
                </div>

                {demoAlert && (
                  <div id="demo-mode-alert" className="bg-red-50 border border-red-200 text-red-600 p-4 rounded-2xl flex items-center space-x-3 text-sm font-semibold shadow-inner">
                    <MessageSquare className="h-5 w-5 shrink-0" />
                    <span>Demo Website — Review submission is simulated and disabled.</span>
                  </div>
                )}

                <form onSubmit={handleReviewSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-slate-500 uppercase mb-1">Your Full Name</label>
                      <input
                        type="text"
                        required
                        value={formName}
                        onChange={(e) => setFormName(e.target.value)}
                        placeholder="e.g., Jonathan Sterling"
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:bg-white focus:border-slate-400 outline-none transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-slate-500 uppercase mb-1">Your Location (Ontario)</label>
                      <input
                        type="text"
                        required
                        value={formLocation}
                        onChange={(e) => setFormLocation(e.target.value)}
                        placeholder="e.g., Oakville, ON"
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:bg-white focus:border-slate-400 outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-slate-500 uppercase mb-1">Service Performed</label>
                      <select
                        value={formService}
                        onChange={(e) => setFormService(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:bg-white focus:border-slate-400 outline-none transition-all"
                      >
                        <option value="Standing Seam Metal Roofing">Standing Seam Metal Roofing</option>
                        <option value="Premium Architectural Shingle Roofing">Premium Architectural Shingle Roofing</option>
                        <option value="Heritage Cedar Shake Roofing">Heritage Cedar Shake Roofing</option>
                        <option value="Commercial & Residential Flat Roofing">Commercial & Residential Flat Roofing</option>
                        <option value="Extreme-Weather Inspections & Maintenance">Extreme Inspections</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-slate-500 uppercase mb-1">Rating Selection</label>
                      <div className="flex items-center space-x-1.5 py-2">
                        {[1, 2, 3, 4, 5].map((num) => (
                          <button
                            id={`rating-star-select-${num}`}
                            key={num}
                            type="button"
                            onClick={() => setFormRating(num)}
                            className="text-accent-gold-500 hover:scale-110 transition-transform cursor-pointer"
                          >
                            <Star className={`h-6 w-6 ${num <= formRating ? "fill-current" : ""}`} />
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-500 uppercase mb-1">Review Commentary</label>
                    <textarea
                      required
                      value={formComment}
                      onChange={(e) => setFormComment(e.target.value)}
                      rows={4}
                      placeholder="Share details of your experience with the team, cleanup, and material visual quality..."
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:bg-white focus:border-slate-400 outline-none transition-all"
                    />
                  </div>

                  <div className="flex items-center justify-end space-x-3 pt-4 border-t border-slate-100">
                    <button
                      id="close-review-modal-btn"
                      type="button"
                      onClick={() => setIsModalOpen(false)}
                      className="px-5 py-3 border border-slate-200 hover:bg-slate-50 text-slate-600 rounded-xl text-sm font-semibold transition-colors cursor-pointer"
                    >
                      Cancel
                    </button>
                    <button
                      id="submit-review-form-btn"
                      type="submit"
                      className="bg-slate-950 text-accent-gold-400 hover:text-accent-gold-300 font-bold px-6 py-3 rounded-xl text-sm transition-all shadow-md flex items-center justify-center space-x-2 cursor-pointer"
                    >
                      <Check className="h-4.5 w-4.5" />
                      <span>Log Verified Review</span>
                    </button>
                  </div>
                </form>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
