// ───────────────────────────────────────────────────────────────
//  EDIT EVERYTHING HERE. No need to touch App.jsx.
//  Drop your images in /public/images and reference them as
//  "images/your-file.jpg" (relative path = works on GitHub Pages).
// ───────────────────────────────────────────────────────────────

export const profile = {
  name: "ZM Masum",
  tagline: "Transport Entrepreneur & Compliance Consultant",
  headline: "Delivering trusted transport solutions through leadership, compliance, and operational excellence.",
  intro:
    "An accomplished transport entrepreneur and business leader with extensive expertise in transport operations, commercial logistics, and regulatory compliance. Through ZSM Transport Agency and Alishan Transport, ZM Masum delivers professional consultancy and comprehensive document solutions, ensuring transport businesses and vehicle owners meet regulatory requirements with confidence, efficiency, and reliability.",
  // Replace with your portrait. Square image looks best (e.g. 800×800).
  photo: "images/portrait.jpg",
  location: "Dhaka, Bangladesh",

  // CTA contacts
  phone: "+8801576925951",      
  phoneDisplay: "+880 1576-925951",  
  whatsapp: "+8801922552100", 
  whatsappDisplay: "+880 1922-552100",
  email: "zmmasum007@gamil.com",     
  zsmWebsite: "https://zsm-transport-agency.vercel.app/",
};

// Current & past positions. Reorder, add, or remove freely.
export const roles = [
  {
    company: "ZSM Transport Agency",
    position: "CEO & Founder",
    period: "Present",
    current: true,
    note: "Founded and leads the agency’s fleet operations and client documentation services.",
    image: "images/zsm.svg",
  },
  {
    company: "Alishan Transport",
    position: "Managing Director & Co-Founder",
    period: "Present",
    current: true,
    note: "Co-founded the company and directs route management and partner coordination.",
    image: "images/alishan.svg",
  },
  {
    company: "Sonar Bangla Transport Agency",
    position: "Former - Operations",
    period: "Past",
    current: false,
    note: "Built early experience in transport operations and documentation handling.",
    image: "images/sonarbangla.svg",
  },
];

// What he handles — the documentation expertise.
export const services = [
  {
    title: "Vehicle Tax",
    desc: "Annual tax assessment and timely payment so vehicles stay compliant.",
  },
  {
    title: "Token Renewal",
    desc: "Tracking and renewing road tokens before they lapse - no gaps.",
  },
  {
    title: "Route Permit",
    desc: "Securing and renewing route permits for legal, uninterrupted operation.",
  },
  {
    title: "Fitness & Registration",
    desc: "Fitness certificates and registration paperwork managed start to finish.",
  },
];

// Quick proof stats. Edit numbers/labels as you like.
export const stats = [
  { value: "2", label: "Companies founded" },
  { value: "20+", label: "Years in transport" },
  { value: "100%", label: "Documents handled in-house" },
];

// Optional gallery — drop transport / fleet photos here.
export const gallery = [
  { src: "images/fleet-1.jpg", caption: "Fleet on route" },
  { src: "images/fleet-2.jpg", caption: "Loading operations" },
  { src: "images/fleet-3.jpg", caption: "Documentation desk" },
];
