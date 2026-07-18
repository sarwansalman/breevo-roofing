import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FAQS_DATA } from "../types";
import { Plus, Minus, HelpCircle, ArrowRight } from "lucide-react";

export default function FaqSection() {
  const [activeTab, setActiveTab] = useState<string>("all");
  const [openId, setOpenId] = useState<string | null>("faq-1");

  const categories = [
    { label: "All Questions", id: "all" },
    { label: "General Questions", id: "general" },
    { label: "Services & Tech", id: "services" },
    { label: "Pricing & Warranties", id: "pricing" },
    { label: "Emergency Support", id: "emergency" }
  ];

  const filteredFaqs = activeTab === "all"
    ? FAQS_DATA
    : FAQS_DATA.filter(faq => faq.category === activeTab);

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq-section" className="py-24 bg-white relative overflow-hidden">
      {/* Subtle details */}
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-accent-gold-50/50 rounded-full filter blur-3xl -z-10" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold tracking-widest text-accent-gold-600 uppercase bg-accent-gold-50 border border-accent-gold-200/50 px-3.5 py-1.5 rounded-full inline-block mb-4">
            Curated Knowledge Base
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight mb-6">
            Expert Advisory FAQs
          </h2>
          <p className="text-slate-500 font-light leading-relaxed text-sm sm:text-base">
            Understand the science of premium architectural roofing systems, winter thermal dynamics, and heavy storm resilience before scheduling your physical property evaluation.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12 border-b border-slate-100 pb-6">
          {categories.map((cat) => (
            <button
              id={`faq-tab-${cat.id}`}
              key={cat.id}
              onClick={() => {
                setActiveTab(cat.id);
                // Auto-open first item in category if available
                const firstInCat = FAQS_DATA.find(faq => cat.id === "all" || faq.category === cat.id);
                setOpenId(firstInCat ? firstInCat.id : null);
              }}
              className={`px-4.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 border cursor-pointer ${
                activeTab === cat.id
                  ? "bg-slate-950 text-accent-gold-400 border-slate-950 shadow-md"
                  : "bg-white text-slate-500 border-slate-200/60 hover:border-slate-300 hover:text-slate-950"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Accordions Frame */}
        <div className="space-y-4">
          <AnimatePresence mode="popLayout">
            {filteredFaqs.map((faq) => {
              const isOpen = openId === faq.id;
              return (
                <motion.div
                  id={`faq-accordion-${faq.id}`}
                  key={faq.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.3 }}
                  className={`border rounded-2xl transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? "border-slate-200 bg-slate-50/50 shadow-md"
                      : "border-slate-100/80 hover:border-slate-200 bg-white"
                  }`}
                >
                  {/* Accordion Trigger */}
                  <button
                    id={`faq-trigger-${faq.id}`}
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full flex items-center justify-between p-5 sm:p-6 text-left font-display font-bold text-slate-950 text-sm sm:text-base transition-colors hover:text-accent-gold-600 cursor-pointer"
                  >
                    <span className="pr-4 leading-snug">{faq.question}</span>
                    <div className={`p-1.5 rounded-lg border transition-colors ${
                      isOpen
                        ? "bg-slate-900 border-slate-800 text-accent-gold-400"
                        : "bg-slate-50 border-slate-200 text-slate-400"
                    }`}>
                      {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                    </div>
                  </button>

                  {/* Accordion Content with smooth height and opacity */}
                  <div
                    id={`faq-content-${faq.id}`}
                    className={`transition-all duration-300 ease-in-out ${
                      isOpen ? "max-h-[500px] border-t border-slate-100" : "max-h-0"
                    }`}
                  >
                    <div className="p-5 sm:p-6 text-xs sm:text-sm text-slate-500 font-light leading-relaxed">
                      {faq.answer}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Still Have Questions CTA */}
        <div className="mt-16 bg-slate-50 border border-slate-100 rounded-2xl p-6 text-center max-w-2xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-3 text-left">
            <div className="bg-white border border-slate-200 p-2.5 rounded-xl shrink-0">
              <HelpCircle className="h-5 w-5 text-accent-gold-500" />
            </div>
            <div>
              <h4 className="font-display font-bold text-slate-900 text-sm">Have custom structural questions?</h4>
              <p className="text-slate-400 text-xs">Our engineering team answers architectural queries.</p>
            </div>
          </div>
          <a
            id="faq-custom-consult-link"
            href="#contact"
            className="flex items-center space-x-1 text-xs font-mono font-bold tracking-wider text-accent-gold-600 hover:text-accent-gold-700 uppercase"
          >
            <span>Ask our engineers</span>
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
