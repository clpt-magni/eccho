import { supabase } from "@/lib/supabase";
import Link from "next/link";
import { 
  MapPin, 
  Phone, 
  Mail, 
  ArrowRight, 
  Globe, 
  ShieldCheck, 
  Map as MapIcon 
} from "lucide-react";

import type { Metadata } from "next";

export const revalidate = 60; // Revalidate every minute

export const metadata: Metadata = {
  title: "Our Branch Network | Find an Eccho Overseas Center Near You",
  description: "Connect with our expert study abroad consultants at our physical branch locations. Expert guidance available in Guntur, Vijayawada, and beyond.",
};

export default async function BranchesPage() {
  const { data: branches, error } = await supabase
    .from('branches')
    .select('*')
    .order('order_id', { ascending: true });

  return (
    <div className="pb-24 bg-[#fcfdfc]">
      {/* Premium Cinematic Hero */}
      <section className="bg-[#022c22] text-white py-24 lg:py-32 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#022c22] via-[#022c22] to-emerald-900/40" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div>
            <span className="text-accent text-xs font-black uppercase tracking-[0.4em] mb-6 block font-outfit">Local Support • Global Reach</span>
            <h1 className="text-5xl lg:text-7xl font-black font-outfit mb-8 tracking-tighter leading-tight">
              Our Global <br />
              <span className="text-accent italic">Network.</span>
            </h1>
            <p className="text-xl text-white/70 max-w-2xl mx-auto leading-relaxed font-medium">
              We operate across key academic hubs to ensure you have expert guidance right in your city.
            </p>
          </div>
        </div>
      </section>

      {/* Global Context Banner */}
      <div className="max-w-7xl mx-auto px-6 -mt-10 relative z-20">
         <div className="bg-white rounded-[40px] shadow-2xl shadow-emerald-900/10 p-8 lg:p-12 border border-slate-100 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-6">
               <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center text-accent"><Globe size={32} /></div>
               <div>
                  <h4 className="text-xl font-black text-primary uppercase tracking-tight">Multi-Country Operations</h4>
                  <p className="text-slate-500 font-medium">Headquartered in Guntur, spanning across India, UK, and Canada.</p>
               </div>
            </div>
            <div className="h-px w-full md:w-px md:h-12 bg-slate-100" />
            <div className="flex items-center gap-6">
               <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center text-accent"><ShieldCheck size={32} /></div>
               <div>
                  <h4 className="text-xl font-black text-primary uppercase tracking-tight">Verified Case Officers</h4>
                  <p className="text-slate-500 font-medium">Professional guidance at every location.</p>
               </div>
            </div>
         </div>
      </div>

      <section className="max-w-7xl mx-auto px-6 py-24">
        {(!branches || branches.length === 0) ? (
          <div className="text-center py-20 bg-slate-50 rounded-[40px] border border-dashed border-slate-200">
             <MapIcon className="mx-auto text-slate-300 mb-6" size={48} />
             <h3 className="text-2xl font-black text-primary uppercase tracking-tight">Expandig Our Reach</h3>
             <p className="text-slate-500 font-medium mt-2">New branches are launching soon. Check back shortly.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {branches.map((branch) => {
              return (
                <div 
                key={branch.id} 
                className="group bg-white rounded-[50px] overflow-hidden border border-slate-200/60 shadow-sm hover:shadow-[0_40px_80px_-20px_rgba(2,44,34,0.12)] transition-all duration-500 relative flex flex-col"
              >
                <div className="aspect-[4/3] relative overflow-hidden bg-slate-900">
                   {/* Main Branch Link (Covers Image Area) */}
                   <Link href={`/branches/${branch.slug}`} className="absolute inset-0 z-10" aria-label={`Explore ${branch.name}`}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img 
                        src={branch.image_url || `https://source.unsplash.com/featured/?${branch.city},landmark,city`} 
                        alt={`${branch.city} Landmark`} 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 group-hover:brightness-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-700" />
                   </Link>

                   <div className="absolute top-6 left-6 bg-accent text-primary px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-widest shadow-xl z-20">
                     {branch.city}
                   </div>
                   
                   {/* Social Bar (Elevated z-index to stay clickable) */}
                   <div className="absolute bottom-6 left-6 right-6 flex gap-2 translate-y-20 group-hover:translate-y-0 transition-transform duration-500 z-30">
                      {branch.facebook_url && (
                        <Link href={branch.facebook_url} target="_blank" className="w-10 h-10 bg-white/90 backdrop-blur rounded-xl flex items-center justify-center text-primary hover:bg-white hover:text-[#1877F2] transition-all shadow-lg">
                           <svg className="w-[18px] h-[18px] fill-current" viewBox="0 0 24 24"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"/></svg>
                        </Link>
                      )}
                      {branch.instagram_url && (
                        <Link href={branch.instagram_url} target="_blank" className="w-10 h-10 bg-white/90 backdrop-blur rounded-xl flex items-center justify-center text-primary hover:bg-white hover:text-[#E4405F] transition-all shadow-lg">
                           <svg className="w-[18px] h-[18px] stroke-current fill-none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                        </Link>
                      )}
                      {branch.linkedin_url && (
                        <Link href={branch.linkedin_url} target="_blank" className="w-10 h-10 bg-white/90 backdrop-blur rounded-xl flex items-center justify-center text-primary hover:bg-white hover:text-[#0A66C2] transition-all shadow-lg">
                           <svg className="w-[18px] h-[18px] fill-current" viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a2.7 2.7 0 0 0-2.7-2.7c-1.2 0-2 .7-2.3 1.2v-1h-2.5v7.8h2.5v-4.1c0-.6.4-1.1 1.1-1.1s1.1.5 1.1 1.1v4.1h2.8M8 18.5v-7.8H5.5v7.8H8M6.7 9.8a1.5 1.5 0 0 0 1.5-1.5c0-.8-.7-1.5-1.5-1.5s-1.5.7-1.5 1.5.7 1.5 1.5 1.5z"/></svg>
                        </Link>
                      )}
                      {branch.twitter_url && (
                        <Link href={branch.twitter_url} target="_blank" className="w-10 h-10 bg-white/90 backdrop-blur rounded-xl flex items-center justify-center text-primary hover:bg-white hover:text-[#000000] transition-all shadow-lg">
                           <svg className="w-[16px] h-[16px] fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                        </Link>
                      )}
                   </div>
                </div>
                
                <div className="p-10 lg:p-12 flex-1 flex flex-col">
                  <Link href={`/branches/${branch.slug}`}>
                    <h3 className="text-2xl font-black font-outfit text-primary mb-6 uppercase tracking-tight leading-tight group-hover:text-accent transition-colors">
                      {branch.name}
                    </h3>
                  </Link>
                  
                  <div className="space-y-4 mb-10 flex-1 text-slate-500">
                    <div className="flex items-start gap-4 text-sm font-medium leading-relaxed">
                      <MapPin size={20} className="text-accent shrink-0 mt-0.5" />
                      <span>{branch.address}</span>
                    </div>
                  </div>

                  <Link 
                    href={`/branches/${branch.slug}`}
                    className="w-full bg-[#022c22] text-white py-5 rounded-[22px] font-black text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-3 hover:bg-emerald-800 transition-all shadow-xl shadow-emerald-900/10 active:scale-95"
                  >
                    Explore Center <ArrowRight size={16} />
                  </Link>
                </div>

                {/* Status Indicator */}
                <div className="absolute top-0 right-0 p-8">
                   <div className="w-2 h-2 bg-accent rounded-full animate-pulse shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
                </div>
              </div>
            );
          })}
        </div>
      )}
      </section>

      {/* Global Support Box */}
      <section className="max-w-7xl mx-auto px-6 mb-32">
         <div className="bg-primary p-12 lg:p-24 rounded-[80px] text-center relative overflow-hidden text-white shadow-2xl">
            <h2 className="text-4xl lg:text-6xl font-black font-outfit uppercase tracking-tighter mb-8 max-w-4xl mx-auto leading-[0.9]">Can't find an office <br /> in your <span className="text-accent">City?</span></h2>
            <p className="text-white/60 text-xl font-medium mb-12 max-w-2xl mx-auto">Our senior counselors are available for virtual consultations globally. We bring our expertise directly to your screen.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
               <Link href="/contact" className="bg-white text-primary px-12 py-5 rounded-full font-black uppercase tracking-widest hover:bg-accent transition-all text-sm">Schedule Now</Link>
               <Link href="/services" className="border-2 border-white/20 text-white px-12 py-5 rounded-full font-black uppercase tracking-widest hover:bg-white/10 transition-all text-sm">View Success Journey</Link>
            </div>
            <div className="absolute top-0 left-0 w-64 h-64 bg-accent/5 blur-[100px] -ml-32 -mt-32" />
         </div>
      </section>
    </div>
  );
}

