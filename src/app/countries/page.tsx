'use client';

import { ArrowRight, Globe, CheckCircle2, Award, Zap, ShieldCheck, MapPin } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { countriesData } from "@/data/countries";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};



export default function CountriesPage() {
  return (
    <div className="pb-24 bg-[#fcfdfc]">
      {/* Cinematic Hero */}
      <section className="bg-[#022c22] text-white py-32 lg:py-48 text-center relative overflow-hidden">
        {/* Abstract Background Accents */}
        <div className="absolute top-0 left-0 w-full h-full opacity-20">
          <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-emerald-500 rounded-full blur-[150px] -translate-y-1/2 animate-pulse" />
          <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-accent rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-3 bg-white/10 px-6 py-2 rounded-full text-xs font-black uppercase tracking-[0.3em] mb-8 border border-white/20 backdrop-blur-md">
              <Globe className="text-accent" size={16} />
              <span>World-Class Destinations</span>
            </div>
            <h1 className="text-6xl lg:text-8xl font-black font-outfit mb-8 tracking-tighter leading-[0.9]">
              Explore Your <br />
              <span className="text-accent italic">Global Future.</span>
            </h1>
            <p className="text-xl lg:text-2xl text-white/70 max-w-3xl mx-auto leading-relaxed font-medium mb-16 px-4">
              Explore 800+ top universities across the world's most welcoming study destinations, curated specifically for your career goals.
            </p>

            {/* Authority Stats */}
            <div className="flex flex-wrap justify-center gap-8 lg:gap-16 pt-8 border-t border-white/10">
              {[
                { icon: <Award className="text-accent" />, label: "800+", sub: "Uni Partners" },
                { icon: <Zap className="text-accent" />, label: "99%", sub: "Visa Success" },
                { icon: <ShieldCheck className="text-accent" />, label: "15k+", sub: "Students Placed" }
              ].map((stat, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10">{stat.icon}</div>
                  <div className="text-left">
                    <p className="text-2xl font-black tracking-tight">{stat.label}</p>
                    <p className="text-[10px] uppercase font-bold text-white/40 tracking-[0.2em]">{stat.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Interactive Hub Selection */}
      <section className="max-w-7xl mx-auto px-6 py-32 relative">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl lg:text-5xl font-black font-outfit text-primary mb-6 tracking-tight uppercase">Featured Destinations</h2>
            <p className="text-slate-600 text-lg font-medium leading-relaxed italic">
              From the research hubs of North America to the cultural heritage of Europe, choose a destination that matches your ambition.
            </p>
          </div>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12 mb-24"
        >
          {countriesData.map((c, i) => {
            const countryImages: Record<string, string> = {
              "United States": "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?q=80&w=2070&auto=format&fit=crop",
              "United Kingdom": "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=2070&auto=format&fit=crop",
              "Canada": "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?q=80&w=2111&auto=format&fit=crop",
              "Australia": "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?q=80&w=2130&auto=format&fit=crop",
              "Germany": "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?q=80&w=2070&auto=format&fit=crop",
              "Ireland": "https://images.unsplash.com/photo-1590089415225-401ed6f9db8e?q=80&w=1974&auto=format&fit=crop",
              "New Zealand": "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2021&auto=format&fit=crop",
              "France": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=2073&auto=format&fit=crop",
              "Italy": "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?q=80&w=2070&auto=format&fit=crop",
              "Dubai": "https://images.unsplash.com/photo-1512453979798-5eaad0df3bdc?q=80&w=2070&auto=format&fit=crop"
            };
            const countryImg = countryImages[c.name] || "https://images.unsplash.com/photo-1523050335102-c6744740bb16?q=80&w=2070&auto=format&fit=crop";

            return (
              <Link href={`/countries/${c.slug}`} key={i}>
                <motion.div
                  variants={item}
                  className="group relative overflow-hidden rounded-[80px] aspect-[10/14] cursor-pointer shadow-2xl hover:shadow-primary/30 transition-all duration-700 bg-slate-900 border-8 border-white"
                >
                  {/* Visual Foundation */}
                  <img
                    src={countryImg}
                    alt={c.name}
                    className="absolute inset-0 w-full h-full object-cover object-[center_30%] group-hover:scale-110 transition-transform duration-1000"
                  />

                  {/* Contrast Gradients */}
                  <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-black/20 to-transparent" />

                  {/* Top-Right Flag Orb */}
                  <div className="absolute top-8 right-8 z-30">
                    <div className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-xl flex items-center justify-center border border-white/20 shadow-2xl">
                      <span className="text-2xl filter drop-shadow-md">{c.flag}</span>
                    </div>
                  </div>

                  {/* Consistent Glass Shelf (Clickable Layout) */}
                  <div className="absolute bottom-6 left-6 right-6 z-20">
                    <div className="backdrop-blur-3xl bg-white/5 p-6 rounded-[40px] border border-white/10 shadow-3xl text-left relative overflow-hidden group-hover:bg-white/10 transition-colors">
                      <div className="absolute top-0 right-0 w-24 h-24 bg-accent/10 blur-[40px] -mr-12 -mt-12" />

                      <div className="flex items-center justify-between gap-4">
                        <div className="flex-1 min-w-0">
                          <h3 className="text-xl md:text-2xl font-black font-outfit text-white uppercase tracking-tighter leading-tight break-words">
                            {c.name}
                          </h3>
                          <div className="flex items-center gap-2 mt-1">
                            <div className="w-6 h-[2px] bg-accent rounded-full" />
                            <p className="text-[9px] text-accent/80 font-black uppercase tracking-[0.2em]">Explore Hub</p>
                          </div>
                        </div>

                        <div className="bg-white text-primary w-10 h-10 rounded-2xl flex items-center justify-center group-hover:bg-accent transition-all shadow-xl flex-shrink-0">
                          <ArrowRight size={18} />
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </Link>
            );
          })}
        </motion.div>
      </section>

      {/* Authority Roadmap */}
      <section className="bg-slate-50 py-24 md:py-40">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-24 space-y-6">
            <h2 className="text-[11px] font-black uppercase tracking-[0.4em] text-accent">The Success Strategy</h2>
            <h3 className="text-4xl md:text-6xl font-black text-primary font-outfit uppercase tracking-tighter leading-none">Your Journey to Success</h3>
            <p className="text-lg text-slate-500 font-medium">A streamlined, scientific approach from your home city to the world's best global universities.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
            {[
              { step: "01", title: "Profile Analysis", desc: "Expert assessment of your academics, finances, and long-term career ambitions." },
              { step: "02", title: "Global Matching", desc: "Selecting the perfect university from our 800+ partners across the globe." },
              { step: "03", title: "Visa Excellence", desc: "Strategic documentation and mock interviews with a 99.8% success rate." }
            ].map((p, i) => (
              <div key={i} className="bg-white p-12 rounded-[50px] border border-slate-100 shadow-sm hover:shadow-2xl hover:-translate-y-3 transition-all group relative overflow-hidden">
                <span className="text-7xl font-black text-primary/5 group-hover:text-accent/10 transition-colors mb-6 block leading-none font-outfit">{p.step}</span>
                <h4 className="text-2xl font-black text-primary uppercase tracking-tight mb-4 leading-none">{p.title}</h4>
                <p className="text-sm text-slate-500 leading-relaxed font-bold">{p.desc}</p>
                <div className="absolute top-0 right-0 w-2 h-0 bg-accent group-hover:h-full transition-all duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ultimate CTA */}
      <section className="max-w-7xl mx-auto px-6 py-24 md:py-48">
        <div className="relative rounded-[80px] overflow-hidden bg-accent p-12 lg:p-40 text-center shadow-3xl shadow-emerald-900/20 border-8 border-white">
          <div className="absolute inset-0 bg-gradient-to-br from-accent to-emerald-400/50" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/20 rounded-full -mt-48 -mr-48 blur-[100px] animate-pulse" />

          <div className="relative z-10 max-w-4xl mx-auto space-y-12">
            <h2 className="text-5xl lg:text-9xl font-black text-primary mb-6 font-outfit uppercase tracking-tighter leading-[0.85]">Ready to <br /> Go Global?</h2>
            <p className="text-primary/70 text-xl md:text-2xl font-black leading-relaxed italic max-w-2xl mx-auto">"Schedule your elite strategy session with our advisors and join the league of global success stories."</p>
            <Link
              href="/contact"
              className="inline-flex bg-primary text-white text-[11px] font-black px-16 py-7 rounded-3xl shadow-2xl hover:scale-105 transition-all uppercase tracking-[0.3em] active:scale-95 border-b-8 border-emerald-950"
            >
              Start Free Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}


