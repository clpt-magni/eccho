'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Globe, GraduationCap, Plane, Stamp, MapPin } from 'lucide-react';
import Link from 'next/link';

// Premium Background Elements with Focal Depth
const backgroundElements = [
  // Left side
  { content: '🇺🇸', top: '15%', left: '10%', size: 45, delay: 0, duration: 20, blur: '', opacity: 1, scale: 0.8 },
  { content: Plane, top: '35%', left: '5%', size: 35, delay: 2, duration: 18, blur: '', opacity: 0.9, scale: 0.9 },
  { content: '🇩🇪', top: '55%', left: '12%', size: 40, delay: 4, duration: 22, blur: '', opacity: 1, scale: 1 },
  { content: MapPin, top: '75%', left: '8%', size: 30, delay: 1, duration: 19, blur: 'blur-[1px]', opacity: 0.8, scale: 0.7 },
  { content: Stamp, top: '85%', left: '25%', size: 35, delay: 3, duration: 25, blur: '', opacity: 0.9, scale: 0.9 },
  
  // Center-ish (positioned to avoid blocking text)
  { content: Globe, top: '20%', left: '28%', size: 30, delay: 7, duration: 24, blur: 'blur-[1px]', opacity: 0.8, scale: 0.8 },
  { content: '🇮🇪', top: '80%', left: '40%', size: 40, delay: 6, duration: 26, blur: '', opacity: 1, scale: 1 },

  // Right side
  { content: '🇬🇧', top: '25%', left: '85%', size: 45, delay: 5, duration: 23, blur: '', opacity: 1, scale: 0.8 },
  { content: GraduationCap, top: '45%', left: '92%', size: 35, delay: 3, duration: 18, blur: '', opacity: 1, scale: 1 },
  { content: '🇦🇺', top: '15%', left: '75%', size: 40, delay: 4, duration: 21, blur: '', opacity: 0.9, scale: 0.9 },
  { content: '🇨🇦', top: '70%', left: '85%', size: 45, delay: 1, duration: 19, blur: 'blur-[1px]', opacity: 0.8, scale: 0.7 },
  { content: Plane, top: '85%', left: '75%', size: 30, delay: 2, duration: 24, blur: '', opacity: 0.9, scale: 0.9 },
];

const GlassBadge = ({ item }: { item: typeof backgroundElements[0] }) => {
  const isEmoji = typeof item.content === 'string';
  const Icon = !isEmoji ? (item.content as any) : null;

  return (
    <motion.div
      initial={{ opacity: item.opacity * 0.6 }}
      animate={{ 
        opacity: [item.opacity * 0.6, item.opacity, item.opacity * 0.6],
        x: [0, 30, -20, 0],
        y: [0, -30, 20, 0],
        rotate: [0, 8, -8, 0]
      }}
      transition={{
        duration: item.duration,
        repeat: Infinity,
        delay: item.delay,
        ease: "linear"
      }}
      className={`absolute pointer-events-none hidden md:flex items-center justify-center ${item.blur}`}
      style={{ top: item.top, left: item.left, scale: item.scale }}
    >
      <div className="relative group">
        <div className="absolute inset-0 bg-white/60 backdrop-blur-xl rounded-full border border-slate-200 shadow-xl" 
             style={{ width: item.size * 1.8, height: item.size * 1.8 }} />
        <div className="relative flex items-center justify-center" style={{ width: item.size * 1.8, height: item.size * 1.8 }}>
          {isEmoji ? (
            <span style={{ fontSize: item.size }} className="opacity-100 drop-shadow-md">{item.content as string}</span>
          ) : (
            <Icon size={item.size} className="text-primary drop-shadow-md" />
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* Premium Background Layering */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.03)_0%,transparent_70%)]" />
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.02] pointer-events-none" />
      
      {/* Interactive Global Mesh */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none overflow-hidden">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.1" className="text-primary" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Global Horizon Depth Layers */}
      {backgroundElements.map((item, i) => (
        <GlassBadge key={i} item={item} />
      ))}

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full pt-20">
        <div className="flex flex-col items-center text-center space-y-10 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-slate-50/50 backdrop-blur-sm text-primary text-[10px] md:text-xs font-black uppercase tracking-[0.3em] border border-slate-100 shadow-sm"
          >
            <Globe size={14} className="text-accent animate-pulse" />
            Architecting Global Futures
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-primary leading-[0.95] md:leading-[0.85] tracking-tighter font-outfit uppercase italic"
          >
            Study Without Borders. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-emerald-500 to-primary">Achieve Without Limits.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-2xl text-slate-500 max-w-2xl leading-relaxed font-medium"
          >
            Join 15,000+ students who have successfully launched their international careers with us. With personalized strategy and great expertise, we make the world's top universities accessible to you.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-row justify-center gap-6 pt-4 w-full"
          >
            <Link
              href="/contact"
              className="bg-primary text-white px-8 md:px-16 py-6 rounded-[2rem] font-black text-[11px] uppercase tracking-[0.3em] flex items-center gap-4 hover:shadow-3xl hover:shadow-primary/20 transition-all hover:-translate-y-1 active:scale-95 group"
            >
              Start Consultation <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </motion.div>

          {/* Hero Visual Showcase */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative w-full pt-16 pb-20 md:pb-16"
          >
            <div className="relative rounded-[60px] shadow-edge border-[1px] border-slate-100 bg-white p-3 md:p-8 pb-12 md:pb-8">
               <div className="rounded-[40px] overflow-hidden relative aspect-[4/3] md:aspect-[21/9]">
                  <img 
                    src="/images/hero_main.png" 
                    alt="Eccho Overseas Success Story" 
                    className="w-full h-full object-cover"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
               </div>
               
               {/* Floating Success Stats */}
               <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 flex items-center justify-between gap-2 md:gap-12 bg-white/95 backdrop-blur-xl p-4 md:p-10 rounded-[30px] md:rounded-[40px] shadow-2xl border border-slate-50 w-[95%] md:w-auto overflow-visible whitespace-nowrap">
                  <div className="text-center px-1 md:px-4">
                     <p className="text-2xl md:text-5xl font-black text-primary font-outfit leading-none mb-1 md:mb-2">99.8%</p>
                     <p className="text-[8px] md:text-[10px] text-slate-400 font-black uppercase tracking-widest leading-tight">Visa Success</p>
                  </div>
                  <div className="w-[1px] h-8 md:h-12 bg-slate-200 my-auto" />
                  <div className="text-center px-1 md:px-4">
                     <p className="text-2xl md:text-5xl font-black text-primary font-outfit leading-none mb-1 md:mb-2">800+</p>
                     <p className="text-[8px] md:text-[10px] text-slate-400 font-black uppercase tracking-widest leading-tight">Global Partners</p>
                  </div>
                  <div className="w-[1px] h-8 md:h-12 bg-slate-200 my-auto" />
                  <div className="text-center px-1 md:px-4">
                     <p className="text-2xl md:text-5xl font-black text-primary font-outfit leading-none mb-1 md:mb-2">15k+</p>
                     <p className="text-[8px] md:text-[10px] text-slate-400 font-black uppercase tracking-widest leading-tight">Placements</p>
                  </div>
               </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
