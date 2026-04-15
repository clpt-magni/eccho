'use client';

import React from 'react';
import { 
  Headset, 
  Map, 
  School, 
  CircleDollarSign, 
  Users2, 
  FileCheck2, 
  PlaneTakeoff, 
  Home, 
  ArrowRight, 
  Globe2, 
  ShieldCheck, 
  CheckCircle2, 
  Clock 
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";


const serviceJourney = [
  {
    step: "01",
    title: "Academic Counselling",
    desc: "Personalized profile assessment to align your aspirations with global opportunities.",
    icon: <Headset size={36} />,
    longDesc: "Expert guidance on selecting the right academic path based on your background and future goals."
  },
  {
    step: "02",
    title: "Country Selection",
    desc: "Analyzing global markets and post-study opportunities to find your perfect destination.",
    icon: <Globe2 size={36} />,
    longDesc: "From USA to Germany, we help you choose the country that offers the best ROI for your career."
  },
  {
    step: "03",
    title: "University Selection",
    desc: "Shortlisting institutions from our 800+ partners that match your profile and budget.",
    icon: <School size={36} />,
    longDesc: "Direct partnerships with top-tier universities ensuring transparent admissions and priority processing."
  },
  {
    step: "04",
    title: "Education Loan",
    desc: "Financial assistance and loan processing with competitive interest rates and minimal paperwork.",
    icon: <CircleDollarSign size={36} />,
    longDesc: "End-to-end support for bank loans, forex services, and scholarship applications."
  },
  {
    step: "05",
    title: "Mock Preparation",
    desc: "Rigorous interview drills and test prep to build your confidence for the official process.",
    icon: <Users2 size={36} />,
    longDesc: "Expert-led sessions for IELTS/GRE and specific university entrance interviews."
  },
  {
    step: "06",
    title: "Visa Approved",
    desc: "Strategic documentation and high-precision filing to ensure a 99% visa success rate.",
    icon: <FileCheck2 size={36} />,
    longDesc: "We handle the complexities of visa documentation, so you can focus on your studies."
  },
  {
    step: "07",
    title: "Pre-Departure",
    desc: "Comprehensive orientation to prepare you for cultural changes and academic life abroad.",
    icon: <PlaneTakeoff size={36} />,
    longDesc: "Logistical support for flight bookings, travel insurance, and packing essentials."
  },
  {
    step: "08",
    title: "Accommodation",
    desc: "Securing safe and affordable living spaces before you even land in your destination.",
    icon: <Home size={36} />,
    longDesc: "Partnerships with student housing providers globally to ensure a home away from home."
  }
];



const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8 } 
  }
};


export default function ServicesPage() {
  return (
    <div className="pb-24 bg-[#fcfdfc]">
      {/* Cinematic Hero */}
      <section className="bg-[#022c22] text-white py-32 lg:py-48 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#022c22] via-[#022c22] to-emerald-900/40" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-accent text-xs font-black uppercase tracking-[0.4em] mb-6 block">Our Methodology</span>
            <h1 className="text-6xl lg:text-8xl font-black font-outfit mb-8 tracking-tighter leading-[0.9]">
              End-to-End <br />
              <span className="text-accent">Excellence.</span>
            </h1>
            <p className="text-xl text-white/70 max-w-2xl mx-auto leading-relaxed font-medium mb-12">
              We go beyond counseling. We manage the entire lifecycle of your international education journey with professional precision.
            </p>
            <div className="flex justify-center gap-12 pt-12 border-t border-white/10">
               <div>
                  <p className="text-3xl font-black text-white">100%</p>
                  <p className="text-[10px] uppercase font-bold text-white/40 tracking-widest">Transparency</p>
               </div>
               <div>
                  <p className="text-3xl font-black text-white">24/7</p>
                  <p className="text-[10px] uppercase font-bold text-white/40 tracking-widest">Global Support</p>
               </div>
               <div>
                  <p className="text-3xl font-black text-white">99%</p>
                  <p className="text-[10px] uppercase font-bold text-white/40 tracking-widest">Visa Success</p>
               </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Vertical Interactive Timeline Section */}
      <section className="max-w-7xl mx-auto px-6 py-32 relative overflow-hidden">
        <div className="text-center mb-32">
           <h2 className="text-4xl lg:text-6xl font-black font-outfit text-primary tracking-tight uppercase mb-6">The Success Journey</h2>
           <p className="text-slate-600 text-xl font-medium max-w-2xl mx-auto">
             A high-precision, 8-stage methodology that transforms global ambition into reality.
           </p>
        </div>

        {/* Central Track (Desktop Only) */}
        <div className="absolute left-1/2 top-[400px] bottom-[200px] w-1 bg-slate-100 -translate-x-1/2 hidden lg:block">
           <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-accent to-transparent opacity-50" />
        </div>

        <div className="space-y-32 relative">
          {serviceJourney.map((s, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-0 ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
            >
               {/* Content Card */}
               <div className={`w-full lg:w-[45%] ${i % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                  <div className="group bg-white rounded-[50px] p-10 lg:p-14 border border-slate-200/60 hover:shadow-[0_40px_80px_-20px_rgba(2,44,34,0.15)] transition-all cursor-pointer relative">
                     <span className="text-xs font-black text-accent uppercase tracking-[0.4em] mb-4 block">Step {s.step}</span>
                     <h3 className="text-3xl font-black font-outfit text-primary mb-6 uppercase tracking-tighter leading-tight group-hover:text-emerald-900 transition-colors">
                        {s.title}
                     </h3>
                     <p className="text-slate-700 text-lg font-bold leading-relaxed mb-8">
                        {s.desc}
                     </p>
                     <div className={`flex items-center gap-3 bg-slate-50 p-6 rounded-3xl group-hover:bg-emerald-50 transition-colors ${i % 2 === 0 ? 'lg:justify-end' : 'lg:justify-start'}`}>
                        <p className="text-xs uppercase font-black text-slate-500 tracking-widest leading-relaxed">
                          {s.longDesc}
                        </p>
                        <div className="w-1.5 h-1.5 bg-accent rounded-full shrink-0" />
                     </div>
                     {/* Connector Arrow */}
                     <div className={`absolute top-1/2 -translate-y-1/2 w-8 h-8 bg-white border-t border-r border-slate-200/60 rotate-45 hidden lg:block ${i % 2 === 0 ? '-right-4' : '-left-4'}`} />
                  </div>
               </div>

               {/* Center Marker */}
               <div className="relative z-10 flex items-center justify-center w-full lg:w-[10%]">
                  <div className="w-20 h-20 bg-[#022c22] rounded-[28px] flex items-center justify-center shadow-2xl shadow-emerald-900/40 border-4 border-white group transition-transform hover:scale-110 duration-500">
                     <div className="text-accent">
                       {s.icon}
                     </div>
                  </div>
               </div>



               {/* Spacer for 2-column feel */}
               <div className="hidden lg:block lg:w-[45%]" />
            </motion.div>
          ))}
        </div>
      </section>


      {/* Premium Support Section */}
      <section className="py-32 bg-slate-50 relative overflow-hidden">
         <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
               <div>
                  <h2 className="text-4xl lg:text-5xl font-black font-outfit text-primary tracking-tight uppercase mb-8">Dedicated Global Support</h2>
                  <div className="space-y-10">
                     <div className="flex gap-6">
                        <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm border border-slate-100 text-accent shrink-0"><ShieldCheck /></div>
                        <div>
                           <h4 className="text-xl font-black text-primary mb-2">Government Authorized</h4>
                           <p className="text-slate-600 font-medium">Fully licensed consultancy with direct tie-ups with global diplomatic and educational bodies.</p>
                        </div>
                     </div>
                     <div className="flex gap-6">
                        <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm border border-slate-100 text-accent shrink-0"><Clock /></div>
                        <div>
                           <h4 className="text-xl font-black text-primary mb-2">24/7 Crisis Assistance</h4>
                           <p className="text-slate-600 font-medium">Emergency support for our students once they are abroad, covering health, safety, and legal queries.</p>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="bg-[#022c22] rounded-[60px] p-12 lg:p-20 text-white relative overflow-hidden shadow-2xl">
                  <h3 className="text-3xl font-black font-outfit mb-6">Need a custom service roadmap?</h3>
                  <p className="text-white/60 mb-10 leading-relaxed font-medium">Our senior case officers provide a 1-on-1 strategy session to map out your unique international journey.</p>
                  <Link href="/contact" className="inline-flex bg-accent text-[#022c22] px-10 py-4 rounded-full font-black text-lg hover:shadow-xl transition-all">
                    Schedule Now <ArrowRight className="ml-2" />
                  </Link>
                  <div className="absolute bottom-0 right-0 w-64 h-64 bg-accent/10 blur-[100px] -mr-32 -mb-32" />
               </div>
            </div>
         </div>
      </section>

      {/* Trust & Results */}
      <section className="max-w-7xl mx-auto px-6 py-32 text-center">
         <div className="bg-white border border-slate-200 rounded-[80px] p-12 lg:p-24 relative overflow-hidden shadow-sm">
            <div className="relative z-10 max-w-4xl mx-auto">
               <h2 className="text-4xl lg:text-6xl font-black font-outfit text-primary tracking-tighter mb-12 uppercase">Why 15,000+ Students <br /> Trust Eccho Overseas</h2>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
                  {[
                    "Unbiased & Certified Counselors",
                    "Direct Partner with 800+ Universities",
                    "A-Z Documentation Support",
                    "Transparent, No-Hidden Costs Policy"
                  ].map((trust, i) => (
                    <div key={i} className="flex items-center gap-4 group">
                       <div className="w-10 h-10 bg-emerald-50 rounded-xl flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all"><CheckCircle2 size={20} /></div>
                       <span className="text-lg font-black text-slate-700 tracking-tight">{trust}</span>
                    </div>
                  ))}
               </div>
            </div>
            <div className="absolute top-0 left-0 w-32 h-32 bg-accent/5 rounded-full blur-3xl -ml-16 -mt-16" />
         </div>
      </section>
    </div>
  );
}

