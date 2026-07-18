import React from "react";
import { ShieldCheck, Mail, FileText, Globe, MapPin } from "lucide-react";

export default function PrivacyPolicyPage() {
  const lastUpdated = "July 18, 2026";

  return (
    <div id="privacy-policy-page" className="bg-white min-h-screen pt-32 pb-24 text-slate-900 relative text-left">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Title */}
        <div className="border-b border-slate-100 pb-8 mb-10">
          <div className="flex items-center space-x-2 bg-slate-50 border border-slate-100 px-3.5 py-1.5 rounded-full w-fit mb-4">
            <FileText className="h-4 w-4 text-accent-gold-600" />
            <span className="text-xs font-mono font-bold text-slate-500 uppercase">Regulatory Disclosure</span>
          </div>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight leading-none mb-4">
            Privacy Policy & Terms
          </h1>
          <p className="text-slate-400 text-xs sm:text-sm font-mono">
            Last Reviewed & Documented: {lastUpdated} | Governing Law: Ontario PIPEDA
          </p>
        </div>

        {/* Legal Body */}
        <div className="space-y-8 text-slate-600 font-light text-sm sm:text-base leading-relaxed">
          
          {/* Section 1: Demonstration Disclaimer */}
          <div className="bg-red-50 border border-red-200/80 rounded-2xl p-6 sm:p-8 space-y-4 text-slate-900">
            <h2 className="font-display text-lg sm:text-xl font-bold flex items-center space-x-2 text-slate-950">
              <ShieldCheck className="h-5 w-5 text-red-600 shrink-0" />
              <span>Critical Demonstration Notice</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
              Apex Crest Roofing is a simulated marketing showcase website. All interactive components, including the "Appraisal Request Dossier" form, the "Write a Verification Review" portal, and the newsletter subscription field are implemented strictly to demonstrate user interface dynamics.
            </p>
            <p className="text-xs text-slate-500 font-mono leading-relaxed">
              *Any input credentials or contact coordinates provided inside these fields are immediately processed inside client-side React hooks, blocked from network posts, and completely discarded upon state cycle reset. No customer tracking database or CRM sync is present.
            </p>
          </div>

          {/* Section 2: Personal Information Collection */}
          <div className="space-y-3">
            <h3 className="font-display text-xl font-bold text-slate-950">1. Collection of Personal Coordinates</h3>
            <p>
              In a commercial production build, Apex Crest complies strictly with the Canadian Personal Information Protection and Electronic Documents Act (PIPEDA). Personal information is defined as any data that can uniquely identify a client, including:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm">
              <li>Individual contact details (Full name, phone lines, email coordinates).</li>
              <li>Structural property locations requiring physical valuation appraisal.</li>
              <li>Roof design specifications, drone thermal scan records, and financial assessment metrics.</li>
            </ul>
          </div>

          {/* Section 3: Intended Use of Information */}
          <div className="space-y-3">
            <h3 className="font-display text-xl font-bold text-slate-950">2. Intended Use of Information</h3>
            <p>
              When a client triggers a contract with Apex Crest, collected data serves strictly to:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm">
              <li>Deploy specialized diagnostic drone and estimating crews to the verified physical property.</li>
              <li>Draft accurate localized structural material pricing estimates.</li>
              <li>Formulate transferrable lifetime warranties with participating manufacturers.</li>
              <li>Coordinate safety compliance credentials with WSIB auditors.</li>
            </ul>
          </div>

          {/* Section 4: Cookie and Analytics Transparency */}
          <div className="space-y-3">
            <h3 className="font-display text-xl font-bold text-slate-950">3. Cookies & Analytical Telemetry</h3>
            <p>
              Our web servers utilize standard, non-sensitive cookies to store minor client preferences (such as language selection or menu active states). We utilize anonymous analytic telemetry to monitor layout loading speeds and improve visual layouts. No advertising tracking or cross-site remarketing pixels are deployed.
            </p>
          </div>

          {/* Section 5: Security Architecture */}
          <div className="space-y-3">
            <h3 className="font-display text-xl font-bold text-slate-950">4. Comprehensive Security Measures</h3>
            <p>
              We implement industry-standard cryptographic frameworks (including TLS 1.3 transfer encodings and AES-256 database storage) to shield all transactional databases from illegal intrusion. Staff members are trained on strict data-handling policies.
            </p>
          </div>

          {/* Section 6: Contact details */}
          <div className="border-t border-slate-100 pt-8 mt-12 space-y-4">
            <h3 className="font-display text-xl font-bold text-slate-950">5. Legal Inquiries & Redactions</h3>
            <p>
              For legal inquiries, PIPEDA compliance audits, or requests for complete records deletion, please reach our administrative director coordinates:
            </p>
            <div className="bg-slate-50 border border-slate-100 rounded-xl p-5 space-y-3 max-w-md font-mono text-xs text-slate-700">
              <div className="flex items-center space-x-2">
                <Globe className="h-4 w-4 text-slate-400 shrink-0" />
                <span>Apex Crest Compliance Bureau</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-slate-400 shrink-0" />
                <span>hello@example.ca</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-slate-400 shrink-0" />
                <span>123 Main Street, Toronto, Ontario</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
