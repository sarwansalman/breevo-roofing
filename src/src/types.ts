export interface Service {
  id: string;
  title: string;
  icon: string;
  shortDescription: string;
  longDescription: string;
  features: string[];
  warranty: string;
  slug: string;
}

export interface Review {
  id: string;
  name: string;
  location: string;
  rating: number;
  date: string;
  title: string;
  comment: string;
  serviceUsed: string;
}

export interface Project {
  id: string;
  title: string;
  category: "residential" | "commercial" | "specialty";
  material: string;
  location: string;
  imageBefore: string;
  imageAfter: string;
  description: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: "general" | "services" | "pricing" | "emergency";
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

export interface Stat {
  label: string;
  value: string;
  suffix?: string;
  description: string;
}

export const SERVICES_DATA: Service[] = [
  {
    id: "serv-1",
    slug: "architectural-shingles",
    title: "Premium Architectural Shingle Roofing",
    icon: "ShieldAlert",
    shortDescription: "High-wind and impact-resistant asphalt laminated shingles designed for severe Canadian climates.",
    longDescription: "Our premium fiberglass-asphalt architectural shingles represent the peak of residential protection. Combining heavy-weight durability with beautiful dimensional shadow lines, these roofs are engineered to withstand up to 210 km/h winds and heavy freeze-thaw cycles common in Ontario winters.",
    features: [
      "Algae-resistant streak protection",
      "Class 4 impact resistance option",
      "Dreadnought-grade underlayment barrier",
      "Enhanced wind warranty up to 130mph"
    ],
    warranty: "50-Year Non-Prorated Lifetime Manufacturer Warranty + 10-Year Craftsmanship Warranty",
  },
  {
    id: "serv-2",
    slug: "metal-standing-seam",
    title: "Standing Seam Metal Roofing",
    icon: "Layers",
    shortDescription: "Ultra-durable, lifetime steel roofing featuring hidden fasteners for zero leak potential and maximum snow shedding.",
    longDescription: "Engineered from thick 24-gauge Canadian steel, our standing seam metal roofs are the ultimate investment for your home or commercial structure. With hidden fasteners that contract and expand, they prevent the typical backing-out issues of exposed screws and offer unparalleled resistance to heavy snow loads.",
    features: [
      "No exposed fasteners to prevent leaks",
      "Reflective heat barrier saving up to 20% on cooling",
      "Effortless snow shedding (prevents ice damming)",
      "Fully recyclable, environmentally conscious materials"
    ],
    warranty: "50-Year Finish Integrity Warranty + Lifetime Structural Performance Warranty",
  },
  {
    id: "serv-3",
    slug: "flat-roofing",
    title: "Commercial & Residential Flat Roofing",
    icon: "Square",
    shortDescription: "High-performance TPO, EPDM, and 2-ply SBS modified bitumen systems engineered for perfect low-slope drainage.",
    longDescription: "Flat roofing requires surgical precision. We specialize in hot-air welded TPO (Thermoplastic Polyolefin) and high-density 2-ply Torch-Down SBS modified bitumen membranes. We carefully grade your roof deck, install proper scuppers, and guarantee absolute waterproof seals around all vents and HVAC units.",
    features: [
      "Perfect seams welded at 800°F for monolithic security",
      "High solar reflectance (Cool Roof rating)",
      "Puncture-resistant high-density core",
      "Comprehensive commercial-grade insulation custom slope layouts"
    ],
    warranty: "25-Year Certified System Warranty + 10-Year Workmanship Warranty",
  },
  {
    id: "serv-4",
    slug: "heritage-cedar-shakes",
    title: "Heritage Cedar Shake Roofing",
    icon: "TreePine",
    shortDescription: "Authentic, hand-split Canadian Western Red Cedar shakes providing classic elegance with modern preservatives.",
    longDescription: "For discerning homeowners looking for timeless natural beauty, we source premium Grade-1 Western Red Cedar from certified sustainable British Columbia forests. Naturally insulating and highly wind-resistant, our modern cedar shakes are treated with advanced rot-preventatives to last generations.",
    features: [
      "Premium Grade-1 Western Red Cedar shakes only",
      "Natural thermal resistance value (R-value)",
      "Staggered or straight installation options",
      "Copper/Zinc ridge caps to prevent moss and organic growth"
    ],
    warranty: "30-Year Timber Warranty + 10-Year Custom Craftsmanship Warranty",
  },
  {
    id: "serv-5",
    slug: "roof-maintenance-inspections",
    title: "Extreme-Weather Inspections & Maintenance",
    icon: "SearchCode",
    shortDescription: "Detailed multi-point structural inspections, high-resolution thermal imaging, and preventative ice damming treatments.",
    longDescription: "Don't wait for a leak to reveal structural dry rot. Our comprehensive inspections utilize advanced moisture-meters and thermal cameras to locate hidden condensation. We clean gutters, clear biological growth, repair flashings, and install heated cables for complete ice dam prevention.",
    features: [
      "Full digital photo-report with structural analysis",
      "Winter preparation and gutter system tuning",
      "Soffit, fascia, and ventilation balance calculation",
      "Priority seasonal storm monitoring plans"
    ],
    warranty: "1-Year Maintenance Guarantee on all serviced flashings and seals",
  },
  {
    id: "serv-6",
    slug: "emergency-leak-repair",
    title: "Emergency Storm Damage & Leak Repair",
    icon: "FlameKindling",
    shortDescription: "Rapid-response emergency tarping, temporary structural support, and guaranteed permanent leak resolutions.",
    longDescription: "High winds, fallen trees, and severe hailstorms require immediate professional action. Our dedicated rapid-response team is dispatched with fully equipped service vehicles to securely tarp and protect your interior from further water damage, followed by permanent structural framing and roofing repairs.",
    features: [
      "Emergency tarping response to protect your contents",
      "Insurance claim documentation and detailed adjuster estimates",
      "Soffit blowing, timber drying, and mold prevention counseling",
      "Direct communication with major Canadian insurance adjusters"
    ],
    warranty: "Fully guaranteed repair patches backed by a 5-Year Leak-Free Promise",
  }
];

export const REVIEWS_DATA: Review[] = [
  {
    id: "rev-1",
    name: "Dr. Alistair MacLeod",
    location: "Oakville, Ontario",
    rating: 5,
    date: "2026-05-14",
    title: "Flawless Execution from Start to Finish",
    comment: "Apex Crest replaced our aging shingle roof with a stunning Slate Gray standing seam metal system. The level of communication, cleanliness of the crew, and the flawless craftsmanship was remarkable. The metal sheds snow effortlessly, and our heating bills were noticeably lower last winter. Worth every dollar.",
    serviceUsed: "Standing Seam Metal Roofing",
  },
  {
    id: "rev-2",
    name: "Genevieve Tremblay",
    location: "High Park, Toronto",
    rating: 5,
    date: "2026-06-20",
    title: "Preserved Our Heritage Cedar Home",
    comment: "Our 1910 Victorian home required specialized hands for a full BC Red Cedar shake replacement. Apex Crest treated our property with the absolute highest respect. The hand-split shakes look breathtakingly authentic, and they even replaced our old copper valleys perfectly. Highly recommended for premium historical restorations.",
    serviceUsed: "Heritage Cedar Shake Roofing",
  },
  {
    id: "rev-3",
    name: "Marcus Sterling",
    location: "Bridle Path, Toronto",
    rating: 5,
    date: "2026-04-03",
    title: "World-Class Service & Premium Materials",
    comment: "Absolute professionals. From the initially detailed drone roof scan to the thorough magnetic sweeping of my driveway to ensure no nails were left behind, everything was calculated. I went with the designer Class 4 impact shingles. The roof looks majestic, and the team was an absolute pleasure to work with.",
    serviceUsed: "Premium Architectural Shingle Roofing",
  },
  {
    id: "rev-4",
    name: "Sanjay Patel",
    location: "Mississauga, Ontario",
    rating: 5,
    date: "2026-03-29",
    title: "Solved a Complex Flat Roof Leak",
    comment: "Three other roofers tried to solve a recurring low-slope leak near our skylight, but failed. Apex Crest's commercial team came out with thermal cameras, immediately identified the compromised insulation, and redid the entire flat TPO section. It has survived three major downpours now with zero moisture. Incredible diagnosis!",
    serviceUsed: "Commercial & Residential Flat Roofing",
  },
  {
    id: "rev-5",
    name: "Fiona Campbell",
    location: "Vaughan, Ontario",
    rating: 5,
    date: "2026-07-02",
    title: "Incredible Response During the Storm",
    comment: "During the high-wind storm last month, a branch damaged our side roof and water started leaking into the master bedroom. Apex Crest dispatched a team within 90 minutes. They safely tarped the roof in the pouring rain, documented everything for our TD Insurance agent, and repaired the decking and shingles the very next day.",
    serviceUsed: "Emergency Storm Damage & Leak Repair",
  },
  {
    id: "rev-6",
    name: "Robert D'Amico",
    location: "Richmond Hill, Ontario",
    rating: 5,
    date: "2026-05-30",
    title: "Highly Professional and Responsive Team",
    comment: "The team showed up exactly at 7:00 AM as promised and worked diligently. They utilized specialized trash-catchers to protect my landscaped gardens and expensive hydrangeas. The cleanup was immaculate, and the project estimator followed up with high-resolution drone photos of the completed architectural roof. Ten out of ten.",
    serviceUsed: "Premium Architectural Shingle Roofing",
  },
  {
    id: "rev-7",
    name: "Mei-Ling Zhou",
    location: "Markham, Ontario",
    rating: 5,
    date: "2026-04-18",
    title: "Superb Craftsmanship & Excellent Price Value",
    comment: "We collected four different quotes for our roof. Apex Crest was not the cheapest, but their presentation, clear detailed warranties, and refusal to cut corners won us over. Now that the job is complete, we are so glad we invested in them. The custom metal valleys, ridge venting, and drip edges look incredibly polished.",
    serviceUsed: "Premium Architectural Shingle Roofing",
  },
  {
    id: "rev-8",
    name: "David & Sarah Miller",
    location: "Burlington, Ontario",
    rating: 5,
    date: "2026-06-11",
    title: "Ultimate Confidence in Canadian Winter Prep",
    comment: "We had severe ice-damming issues that leaked into our plaster ceilings every February. Apex Crest did an complete ventilation assessment, installed heavy premium ice and water shield on the bottom 6 feet, and added proper soffit baffling. This is the first year we have absolute peace of mind going into the winter season.",
    serviceUsed: "Extreme-Weather Inspections & Maintenance",
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: "proj-1",
    title: "Modern Standing Seam Residence",
    category: "residential",
    material: "Standing Seam Matte Black Steel",
    location: "Oakville Waterfront",
    imageBefore: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=800", // Vintage/worn home look
    imageAfter: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800", // Luxurious modern dark steel roof house
    description: "Replaced an outdated, algae-stained shingle roof with a premium continuous-panel standing seam metal roofing system. The modern matte black finish complements the modern architecture while delivering a lifetime of protection."
  },
  {
    id: "proj-2",
    title: "Heritage Western Red Cedar Restoration",
    category: "specialty",
    material: "BC Grade-1 Western Red Cedar Shakes",
    location: "Forest Hill, Toronto",
    imageBefore: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=800", // Old mansion
    imageAfter: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800", // Luxury cedar roof aesthetic
    description: "Surgically stripped failing wood shingles down to the rafters. Re-sheathed with spacing lath for proper breathability and hand-laid premium cedar shakes accented with heavy-gauge custom copper valley flashing."
  },
  {
    id: "proj-3",
    title: "High-Performance TPO Commercial Plaza",
    category: "commercial",
    material: "60-Mil Firestone TPO Welded System",
    location: "Vaughan Business Park",
    imageBefore: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800", // Office plaza
    imageAfter: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800", // Under construction perfect commercial
    description: "Overlaid a failing multi-ply built-up asphalt system with advanced polyisocyanurate (ISO) insulation boards and heat-welded white TPO, introducing positive drainage slopes and reducing building HVAC energy usage by 24%."
  },
  {
    id: "proj-4",
    title: "Luxury Designer Architectural Shingles",
    category: "residential",
    material: "GAF Glenwood Lifetime Shingles",
    location: "Mississauga Road Estate",
    imageBefore: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&q=80&w=800", // Classic house
    imageAfter: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=800", // Upscale clean architecture
    description: "Upgraded a large custom estate using triple-layer laminated asphalt shingles. Designed to replicate the ultra-thick, hand-cut look of natural wood shakes, backed by a non-prorated system-plus manufacturer warranty."
  }
];

export const FAQS_DATA: FAQItem[] = [
  {
    id: "faq-1",
    question: "Why should I choose metal roofing over traditional asphalt shingles in Canada?",
    answer: "Standing seam metal roofing is highly recommended for Canadian climates. It sheds heavy winter snow quickly (preventing heavy roof loading and ice dams), has a Class 4 impact rating against hail, resists rot and moss, and can last up to 50-70 years. While the initial investment is higher, it represents a much lower lifecycle cost because it never needs replacing.",
    category: "general"
  },
  {
    id: "faq-2",
    question: "What is ice damming, and how does Apex Crest prevent it?",
    answer: "Ice damming occurs when heat escaping your house melts snow on the upper roof. The water flows down and refreezes at the colder eaves, forming a dam that traps water, which then leaks under shingles. We prevent this by ensuring a perfect insulation envelope, calculating and balance-installing intake/exhaust ventilation (soffit/ridge vents), and applying an industrial-strength waterproof rubberized 'Ice & Water Shield' membrane underlayment.",
    category: "services"
  },
  {
    id: "faq-3",
    question: "Do you offer financing options for larger roofing replacements?",
    answer: "Yes, we partner with premier Canadian financial institutions to offer flexible, low-interest payment structures, including up to 12 months with no interest or payments. Our project managers can customize a plan that fits comfortably within your monthly budget during your free consultation.",
    category: "pricing"
  },
  {
    id: "faq-4",
    question: "What is your emergency response time for active leaks or storm damage?",
    answer: "Our dedicated Emergency Leak Team is on call 24/7. For severe storm damage, tree impacts, or massive leaks in the Greater Toronto Area, we typically arrive within 90 to 120 minutes to perform emergency tarping, secure the premises, and mitigate further property damage.",
    category: "emergency"
  },
  {
    id: "faq-5",
    question: "How long does a typical residential roof replacement take?",
    answer: "Most residential roof replacements are completed in just 1 to 2 days. This includes complete tear-off of old shingles, structural repairs to rotting plywood deck, installation of premium synthetic underlayment, new flashing, roofing material application, and meticulous multi-pass magnetic sweep cleanup.",
    category: "services"
  },
  {
    id: "faq-6",
    question: "Are your roofing technicians fully licensed and insured in Ontario?",
    answer: "Absolutely. Safety and trust are our top priorities. All Apex Crest installers are fully certified, covered by the Workplace Safety and Insurance Board (WSIB), and carry $5,000,000 in comprehensive commercial general liability insurance. We are also certified Master Elite Contractors with manufacturers, allowing us to offer exclusive warranties.",
    category: "general"
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: 1,
    title: "Advanced Digital Diagnostics",
    description: "We utilize commercial thermal drone imagery and moisture probes to conduct a meticulous, physical assessment of your structural decking, attic ventilation, and current barrier health."
  },
  {
    step: 2,
    title: "Tailored Material Engineering",
    description: "Select from our curated portfolio of ultra-durable metal profiles, BC cedar shakes, or heavy-weight architectural designer shingles. We detail every flashing point, gutter size, and drip edge."
  },
  {
    step: 3,
    title: "Surgical Tear-Off & Structural Repair",
    description: "Our WSIB-certified experts strip existing materials completely, clean the substrate, and replace any moisture-compromised plywood decking, reinforcing support beams where necessary."
  },
  {
    step: 4,
    title: "Multi-Shield Barrier Installation",
    description: "We apply a heavy-duty self-adhering waterproof membrane to valleys and eaves, followed by a breathable premium synthetic underlayment and seamless heavy-gauge metal valleys."
  },
  {
    step: 5,
    title: "Precision Application & Cleanup",
    description: "Our team meticulously installs the chosen materials following strict manufacturer guidelines. We complete the project with a rigorous, multi-pass magnetic sweeping and clean up every trace."
  },
  {
    step: 6,
    title: "Certified Inspector Sign-Off",
    description: "A senior quality auditor performs a 50-point inspection of all valleys, drip lines, ventilation baffles, and seals, issuing your lifetime non-prorated manufacturer warranty certificate."
  }
];

export const STATS_DATA: Stat[] = [
  {
    label: "Completed Masterpieces",
    value: "2,450",
    suffix: "+",
    description: "Homes and commercial properties protected with lifetime roofs across Ontario."
  },
  {
    label: "Years of Trust",
    value: "25",
    suffix: " Yrs",
    description: "Delivering uncompromising architectural design and extreme winter durability."
  },
  {
    label: "WSIB-Certified Crews",
    value: "100",
    suffix: "%",
    description: "Completely licensed, safety-trained, and fully insured in-house roofing craftsmen."
  },
  {
    label: "Customer Trust Rating",
    value: "4.9",
    suffix: " / 5",
    description: "Backed by hundreds of verified five-star reviews on Google and HomeStars."
  }
];

export const SERVING_AREAS = [
  "Toronto", "Oakville", "Mississauga", "Burlington", "Vaughan", "Richmond Hill",
  "Markham", "Stouffville", "Aurora", "Newmarket", "Brampton", "Milton"
];
