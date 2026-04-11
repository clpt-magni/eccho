'use client';

import React from 'react';
import { 
  Trophy, 
  Users, 
  Globe, 
  Target, 
  Briefcase, 
  GraduationCap, 
  Phone, 
  MapPin, 
  Mail, 
  ArrowRight,
  ShieldCheck,
  Zap
} from "lucide-react";
import { motion } from "framer-motion";
import Link from 'next/link';

const directors = [
  {
    name: "Balamurali Konikineni",
    role: "Director",
    focus: "Global Strategy & UK Partnerships",
    phone: "+44 7438 530438",
    location: "United Kingdom • India",
    email: "info@ecchouk.co.uk",
    initials: "BK"
  },
  {
    name: "Ramesh Nalabothu",
    role: "Director",
    focus: "University Relations & Canada Operations",
    phone: "+1 (403) 471-7298",
    location: "Canada • India",
    email: "info@ecchouk.co.uk",
    initials: "RN"
  },
  {
    name: "N Koteswara Rao",
    role: "Director",
    focus: "Head of Operations & Strategic Growth",
    phone: "+91 78424 89864",
    location: "Guntur • Hyderabad",
    email: "info@ecchouk.co.uk",
    initials: "NK"
  }
];

export default function AboutPage() {
  return (
    <div className="pb-32 bg-[#fcfdfc]">
      {/* Cinematic Hero */}
      <section className="bg-[#022c22] text-white py-32 lg:py-48 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#022c22] via-[#022c22] to-emerald-900/40" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-accent text-xs font-black uppercase tracking-[0.4em] mb-6 block">Establishing Excellence</span>
            <h1 className="text-6xl lg:text-8xl font-black font-outfit mb-8 tracking-tighter leading-[0.9]">
              Driven by <br />
              <span className="text-accent italic">Visionaries.</span>
            </h1>
            <p className="text-xl text-white/70 max-w-2xl mx-auto leading-relaxed font-medium">
              We are more than a consultancy. We are a global network of educators and strategists dedicated to bridging the gap between local talent and international opportunity.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="max-w-7xl mx-auto px-6 -mt-24 relative z-20 mb-32">
        <div className="text-center mb-16 lg:hidden">
           <h2 className="text-white text-3xl font-black font-outfit uppercase tracking-wider mb-4">The Board</h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {directors.map((d, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              className="group bg-white rounded-[50px] p-10 lg:p-14 border border-slate-200/60 shadow-2xl shadow-emerald-900/5 hover:border-accent/40 transition-all relative overflow-hidden"
            >
               <div className="flex flex-col items-center text-center">
                  <div className="w-24 h-24 bg-[#022c22] rounded-[32px] flex items-center justify-center mb-8 shadow-xl shadow-emerald-900/20 group-hover:scale-110 transition-transform duration-500">
                     <span className="text-3xl font-black text-accent">{d.initials}</span>
                  </div>
                  
                  <h3 className="text-2xl font-black font-outfit text-primary mb-2 uppercase tracking-tight truncate w-full">{d.name}</h3>
                  <p className="text-accent text-xs font-black uppercase tracking-[0.2em] mb-6">{d.role}</p>
                  
                  <div className="w-full h-px bg-slate-100 mb-8" />
                  
                  <div className="space-y-4 w-full">
                     <div className="flex items-center gap-4 text-slate-600 bg-slate-50 p-4 rounded-2xl group-hover:bg-emerald-50 transition-colors">
                        <Phone size={18} className="text-accent shrink-0" />
                        <span className="text-sm font-bold tracking-tight">{d.phone}</span>
                     </div>
                     <div className="flex items-center gap-4 text-slate-600 bg-slate-50 p-4 rounded-2xl group-hover:bg-emerald-50 transition-colors">
                        <MapPin size={18} className="text-accent shrink-0" />
                        <span className="text-sm font-bold tracking-tight uppercase leading-none">{d.location}</span>
                     </div>
                  </div>

                  <div className="mt-8 pt-8 border-t border-slate-50 w-full">
                     <p className="text-[10px] uppercase font-bold text-slate-400 tracking-widest leading-relaxed">
                        {d.focus}
                     </p>
                  </div>
               </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Mission & Purpose */}
      <section className="max-w-7xl mx-auto px-6 py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
           <div>
              <span className="text-accent text-xs font-black uppercase tracking-[0.4em] mb-6 block">Our Essence</span>
              <h2 className="text-4xl lg:text-6xl font-black font-outfit text-primary tracking-tighter uppercase mb-10 leading-[0.9]">
                Transparency is <br /> our <span className="text-accent">Currency.</span>
              </h2>

              <div className="space-y-8">
                 <div className="flex gap-6">
                    <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm border border-slate-100 text-accent shrink-0"><ShieldCheck /></div>
                    <div>
                       <h4 className="text-xl font-black text-primary mb-2">The Ethical Path</h4>
                       <p className="text-slate-600 font-medium leading-relaxed">Founded with a simple mission: to make international education accessible and transparent for every aspiring student through ethical consultancy.</p>
                    </div>
                 </div>
                 <div className="flex gap-6">
                    <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm border border-slate-100 text-accent shrink-0"><Zap /></div>
                    <div>
                       <h4 className="text-xl font-black text-primary mb-2">The Eccho Vision</h4>
                       <p className="text-slate-600 font-medium leading-relaxed">To become the world's most trusted education consultancy, known for our student-first approach and unbeatable visa success rates across UK, USA, and Canada.</p>
                    </div>
                 </div>
              </div>
           </div>
           
           <div className="bg-slate-100 rounded-[80px] aspect-square relative overflow-hidden group">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center group-hover:scale-110 transition-transform duration-1000 grayscale group-hover:grayscale-0" />
              <div className="absolute inset-0 bg-primary/40 group-hover:bg-primary/10 transition-colors duration-700" />
              <div className="absolute bottom-12 left-12 right-12 bg-white/95 backdrop-blur-md p-10 rounded-[40px] shadow-2xl">
                 <p className="text-primary text-xl font-bold leading-tight font-outfit uppercase">"We don't just process applications; we architect careers."</p>
                 <p className="text-accent text-xs font-black uppercase tracking-widest mt-4">— ECCHO BOARD OF DIRECTORS</p>
              </div>
           </div>
        </div>
      </section>

      {/* Global Impact Stats */}
      <section className="bg-[#022c22] py-32 rounded-[100px] mx-6">
        <div className="max-w-7xl mx-auto px-6">
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-8">
              {[
                { label: "Placements", value: "15,000+", icon: <GraduationCap size={40} /> },
                { label: "Partners", value: "800+", icon: <Briefcase size={40} /> },
                { label: "Visa Success", value: "99%", icon: <Trophy size={40} /> },
                { label: "Presence", value: "UK • CA • IN", icon: <Globe size={40} /> },
              ].map((stat, i) => (
                <div key={i} className="text-center group">
                  <div className="mx-auto w-20 h-20 bg-white/5 rounded-[30px] flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-primary transition-all duration-500 mb-8 border border-white/10">
                    {stat.icon}
                  </div>
                  <h3 className="text-5xl font-black font-outfit text-white mb-2 tracking-tighter">{stat.value}</h3>
                  <p className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40">{stat.label}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 py-32 text-center">
         <h2 className="text-4xl font-black font-outfit text-primary tracking-tight uppercase mb-8">Ready to start <br /> your journey?</h2>
         <Link href="/contact" className="inline-flex bg-accent text-[#022c22] px-12 py-5 rounded-full font-black text-lg hover:shadow-2xl transition-all hover:scale-105 active:scale-95">
           Get in touch with us <ArrowRight className="ml-2" />
         </Link>
      </section>
    </div>
  );
}

