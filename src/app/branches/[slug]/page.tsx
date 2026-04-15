import { supabase } from "@/lib/supabase";
import { notFound } from "next/navigation";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  ShieldCheck, 
  Star, 
  ArrowLeft, 
  ArrowRight, 
  ExternalLink, 
  Globe, 
  GraduationCap, 
  CheckCircle2, 
  UserCheck 
} from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const { data: branches } = await supabase.from('branches').select('slug');
  return (branches || []).map((branch) => ({
    slug: branch.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const { data: branch } = await supabase
    .from('branches')
    .select('name, city')
    .eq('slug', slug)
    .single();
  
  if (!branch) return { title: "Branch Not Found | Eccho Overseas" };
  
  return {
    title: `Best Study Abroad Consultancy in ${branch.city} | ${branch.name} - Eccho Overseas`,
    description: `Contact Eccho Overseas ${branch.city} for expert USA, UK, Canada visa and university admissions. High success rate and local expertise.`,
  };
}

export default async function BranchDetailPage({ params }: PageProps) {
  const { slug } = await params;
  
  // 1. Fetch branch details
  const { data: branch } = await supabase
    .from('branches')
    .select('*')
    .eq('slug', slug)
    .single();

  if (!branch) notFound();

  const { data: counselorData } = await supabase
    .from('counsellors')
    .select('*')
    .eq('city_name', branch.city)
    .order('order_id', { ascending: true });

  const expertiseList = branch.expertise || ['USA Visa Counseling', 'UK Admission Hub', 'Canada Visa Shield', 'IELTS Expert Coaching'];
  const counsellors = counselorData || [];

  return (
    <div className="pb-32 bg-[#fafbfc]">
      {/* Refined Minimalist Hero */}
      <section className="bg-primary text-white pt-20 pb-40 lg:pt-48 lg:pb-64 relative overflow-hidden">
        {/* Locality Texture Overlay */}
        <div className="absolute inset-0 bg-cover bg-center opacity-10 mix-blend-overlay scale-110 blur-[2px]" style={{ backgroundImage: `url(${branch.image_url || `https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop`})` }} />
        <div className="absolute inset-0 bg-gradient-to-b from-primary via-primary/95 to-transparent" />
        
        <div className="max-w-7xl mx-auto px-5 relative z-10">
          <Link href="/branches" className="inline-flex items-center gap-3 text-accent text-xs font-black uppercase tracking-[0.3em] mb-10 hover:gap-5 transition-all opacity-80">
             <ArrowLeft size={14} /> All Centers
          </Link>
          
          <div className="max-w-4xl">
            <div className="flex flex-wrap items-center gap-3 mb-6">
               <span className="bg-accent/10 border border-accent/20 text-accent px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest backdrop-blur-sm">
                  Official Branch • {branch.city}
               </span>
               <div className="flex items-center gap-2 text-white/50 text-[10px] font-black uppercase tracking-widest">
                  <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full shadow-[0_0_8px_#10b981]" /> Active Now
               </div>
            </div>
            
            <h1 className="text-3xl md:text-5xl lg:text-8xl font-black font-outfit mb-6 md:mb-8 tracking-tighter leading-[0.95] md:leading-[0.9] uppercase text-white">
              {branch.name}
            </h1>
            
            <p className="text-white/60 text-base md:text-xl font-medium max-w-2xl leading-relaxed">
               "{branch.description || `Specialized study abroad guidance for students in ${branch.city}, focusing on high-authority university admissions and end-to-end visa counseling.`}"
            </p>
          </div>
        </div>
      </section>

      {/* Modern Performance Bar */}
      <div className="max-w-7xl mx-auto px-5 -mt-20 lg:-mt-24 relative z-20">
         <div className="bg-white rounded-[32px] md:rounded-[40px] shadow-2xl shadow-emerald-900/5 p-6 md:p-12 border border-slate-100 flex flex-wrap justify-center lg:justify-between items-center gap-6 md:gap-10">
            <div className="flex items-center gap-4 md:gap-6 min-w-full md:min-w-[240px]">
               <div className="w-12 h-12 md:w-14 md:h-14 bg-emerald-50 rounded-xl md:rounded-2xl flex items-center justify-center text-accent"><Globe size={24} /></div>
               <div>
                  <h4 className="text-[10px] md:text-sm font-black text-primary uppercase tracking-tighter opacity-60">Global Success</h4>
                  <p className="text-2xl md:text-3xl font-black tracking-tighter text-slate-800">{branch.visa_rate || '99.8%'} <span className="text-[10px] text-slate-400 font-bold ml-1 uppercase tracking-widest leading-none">Visa Rate</span></p>
               </div>
            </div>
            <div className="hidden lg:block h-12 w-px bg-slate-100" />
            <div className="flex items-center gap-4 md:gap-6 min-w-full md:min-w-[240px]">
               <div className="w-12 h-12 md:w-14 md:h-14 bg-emerald-50 rounded-xl md:rounded-2xl flex items-center justify-center text-accent"><UserCheck size={24} /></div>
               <div>
                  <h4 className="text-[10px] md:text-sm font-black text-primary uppercase tracking-tighter opacity-60">Student Trust</h4>
                  <p className="text-2xl md:text-3xl font-black tracking-tighter text-slate-800">{branch.student_count || '2,500+'} <span className="text-[10px] text-slate-400 font-bold ml-1 uppercase tracking-widest leading-none">Placed</span></p>
               </div>
            </div>
            <div className="hidden lg:block h-12 w-px bg-slate-100" />
            <div className="w-full lg:w-auto">
               <Link href="/contact" className="w-full lg:w-auto bg-primary text-white px-8 py-4 md:px-10 md:py-5 rounded-2xl md:rounded-[22px] font-black text-[10px] md:text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-3 hover:translate-y-[-3px] transition-all active:scale-95">
                  Book Local Consultation <ArrowRight size={16} />
               </Link>
            </div>
         </div>
      </div>

      <section className="max-w-7xl mx-auto px-5 py-12 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          
          {/* Main Content Column */}
          <div className="lg:col-span-8 space-y-10 md:space-y-12">
            
            {/* Mobile-Only Leadership - Priority 1 */}
            <div className="lg:hidden bg-white rounded-[40px] p-8 border border-slate-100 shadow-sm space-y-8 relative overflow-hidden">
               <div className="flex items-center gap-5">
                  <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-white shadow-xl shadow-primary/20">
                     <UserCheck size={24} />
                  </div>
                  <div>
                     <p className="text-[9px] text-slate-400 uppercase font-black tracking-widest mb-1 leading-none">Leadership</p>
                     <h4 className="text-base font-black uppercase tracking-tighter text-primary leading-none">{branch.manager_name || 'Senior Case Officer'}</h4>
                  </div>
               </div>
               
               <div className="space-y-3">
                  {branch.phone?.split(',').map((num: string, idx: number) => (
                    <Link key={idx} href={`tel:${num.trim()}`} className="flex items-center p-4 bg-slate-50 rounded-2xl border border-slate-50">
                       <Phone size={18} className="text-accent mr-4 shrink-0" />
                       <span className="text-[11px] font-black text-primary tracking-tight truncate">{num.trim()}</span>
                    </Link>
                  ))}
                  <Link href={`mailto:${branch.email}`} className="flex items-center p-4 bg-slate-50 rounded-2xl border border-slate-50 overflow-hidden">
                     <Mail size={18} className="text-accent mr-4 shrink-0" />
                     <span className="text-[11px] font-black text-primary tracking-tight truncate">{branch.email}</span>
                  </Link>
               </div>
            </div>

            {/* Expert Guidance Council - Priority 2 (Next) */}
            {counsellors.length > 0 && (
              <div className="bg-white rounded-[40px] md:rounded-[50px] p-6 md:p-16 border border-slate-100 shadow-sm relative overflow-hidden group">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 md:gap-8 mb-8 md:mb-12">
                   <div className="flex items-center gap-4">
                      <div className="w-10 h-10 md:w-14 md:h-14 bg-emerald-50 rounded-xl md:rounded-2xl flex items-center justify-center text-primary border border-emerald-100/50"><UserCheck size={20} className="md:w-7 md:h-7" /></div>
                      <div>
                        <h2 className="text-2xl md:text-3xl font-black font-outfit text-primary uppercase tracking-tighter leading-none">Expert Council</h2>
                        <p className="text-slate-400 text-[10px] font-bold mt-1 uppercase tracking-widest leading-none">Success Architects</p>
                      </div>
                   </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                   {counsellors.map((expert: any) => (
                      <div key={expert.id} className="p-6 md:p-10 bg-slate-50/50 rounded-[32px] md:rounded-[45px] border border-slate-100/50 relative group/item hover:bg-white hover:border-accent transition-all duration-500 flex flex-col items-center text-center">
                         {/* Institutional Avatar Seal */}
                         <div className="w-16 h-16 md:w-24 md:h-24 bg-primary rounded-[24px] md:rounded-[32px] flex items-center justify-center text-white font-black text-lg md:text-2xl shadow-xl shadow-primary/20 mb-6 md:mb-8 border-4 border-white">
                            {expert.name.split(' ').map((n: string) => n[0]).join('')}
                         </div>
                         
                         <div className="space-y-1 md:space-y-2 mb-6 md:mb-8">
                            <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-[8px] md:text-[9px] font-black uppercase tracking-widest mb-2 inline-block">Success Architect</span>
                            <h4 className="text-lg md:text-xl font-black text-primary uppercase tracking-tight leading-none">{expert.name}</h4>
                            <p className="text-[10px] md:text-xs text-slate-400 font-bold uppercase tracking-widest">{expert.designation}</p>
                         </div>

                         <Link 
                            href={`tel:${expert.phone}`} 
                            className="w-full bg-white text-primary px-5 py-3.5 rounded-[18px] md:rounded-[20px] border border-slate-100 shadow-sm font-black text-[9px] md:text-[10px] uppercase tracking-widest flex items-center justify-center gap-2 md:gap-3 hover:bg-primary hover:text-white transition-all group/btn"
                          >
                             <Phone size={14} className="text-accent group-hover/btn:text-white" /> Contact Expert
                         </Link>

                         <div className="absolute top-6 right-6 md:right-8">
                            <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                         </div>
                      </div>
                   ))}
                </div>
              </div>
            )}
            
            {/* Expertise Cloud - Professional Styling */}
            <div className="bg-white rounded-[40px] md:rounded-[50px] p-6 md:p-16 border border-slate-100 shadow-sm relative overflow-hidden group">
               <div className="flex items-center gap-4 mb-8 md:mb-12">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/5 rounded-xl md:rounded-2xl flex items-center justify-center text-primary"><ShieldCheck size={20} /></div>
                  <h2 className="text-2xl md:text-3xl font-black font-outfit text-primary uppercase tracking-tighter leading-none">Regional Expertise</h2>
               </div>
               
               <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                  {expertiseList.map((skill: string, index: number) => (
                    <div key={index} className="px-6 py-4 md:px-8 md:py-6 bg-slate-50/50 rounded-2xl md:rounded-3xl border border-slate-50 flex items-center gap-3 md:gap-4 group/item hover:bg-white hover:border-accent transition-all duration-300">
                       <CheckCircle2 size={18} className="text-accent shrink-0" />
                       <span className="text-[11px] md:text-sm font-black text-primary uppercase tracking-tight">{skill}</span>
                    </div>
                  ))}
               </div>
               
               <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 blur-[40px] -mt-16 -mr-16 group-hover:bg-accent/10 transition-colors" />
            </div>

            {/* Visit & Navigation Dashboard */}
            <div className="bg-white rounded-[40px] md:rounded-[50px] overflow-hidden border border-slate-100 shadow-sm">
               <div className="p-6 md:p-16">
                  <div className="flex flex-col md:flex-row justify-between items-start gap-8 md:gap-12">
                    <div className="space-y-4 md:space-y-6 flex-1">
                       <div className="flex items-center gap-3 md:gap-4">
                          <div className="w-8 h-8 md:w-10 md:h-10 bg-primary/5 rounded-lg md:rounded-2xl flex items-center justify-center text-primary"><MapPin size={16} className="md:w-5 md:h-5" /></div>
                          <h3 className="text-lg md:text-xl font-black font-outfit text-primary uppercase tracking-tight">Center HQ</h3>
                       </div>
                       <p className="text-slate-600 text-sm md:text-base font-bold leading-relaxed max-w-sm">
                          {branch.address?.toLowerCase().split(' ').map((word: string) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                       </p>
                    </div>
                    <div className="space-y-4 md:space-y-6 flex-1">
                       <div className="flex items-center gap-3 md:gap-4">
                          <div className="w-8 h-8 md:w-10 md:h-10 bg-primary/5 rounded-lg md:rounded-2xl flex items-center justify-center text-primary"><Clock size={16} className="md:w-5 md:h-5" /></div>
                          <h3 className="text-lg md:text-xl font-black font-outfit text-primary uppercase tracking-tight">Hours</h3>
                       </div>
                       <div className="space-y-2">
                          <p className="text-slate-800 text-sm md:text-base font-bold uppercase tracking-wide leading-relaxed">
                            {branch.timings || 'Mon - Sat: 09:30 AM - 07:30 PM'}
                          </p>
                          <div className="inline-flex items-center gap-2 text-rose-500 text-[10px] md:text-xs font-black uppercase tracking-widest opacity-60">
                             <div className="w-1.5 h-1.5 bg-rose-500 rounded-full" /> Closed Sundays
                          </div>
                       </div>
                    </div>
                  </div>
               </div>

               {/* Integrated Professional Map */}
               <div className="h-[300px] md:h-[450px] relative border-t border-slate-100">
                   <iframe 
                    width="100%" 
                    height="100%" 
                    frameBorder="0" 
                    scrolling="no" 
                    marginHeight={0} 
                    marginWidth={0} 
                    src={`https://maps.google.com/maps?q=${encodeURIComponent(branch.address || branch.city)}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                    className="grayscale opacity-90"
                  />
                  <div className="absolute bottom-5 right-5 md:bottom-8 md:right-8 z-20">
                     {branch.map_url && (
                        <Link 
                          href={branch.map_url} 
                          target="_blank" 
                          className="bg-white text-primary px-6 py-3.5 md:px-10 md:py-5 rounded-xl md:rounded-[22px] font-black text-[9px] md:text-xs uppercase tracking-widest md:tracking-[0.2em] shadow-2xl border border-slate-100 hover:bg-primary hover:text-white transition-all active:scale-95 flex items-center gap-2 md:gap-3"
                        >
                           Navigate <ExternalLink size={14} className="md:w-4 md:h-4" />
                        </Link>
                     )}
                  </div>
               </div>
            </div>
          </div>

          {/* Professional Sidebar Hub */}
          <div className="lg:col-span-4 space-y-8 md:space-y-10">
            
            {/* High-Authority Leadership Card - Desktop only in sidebar */}
            <div className="hidden lg:block bg-white rounded-[40px] md:rounded-[50px] p-8 md:p-10 border border-slate-100 shadow-sm space-y-8 md:space-y-10 relative overflow-hidden">
               <div className="flex items-center gap-5 md:gap-6">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-primary rounded-xl md:rounded-[22px] flex items-center justify-center text-white shadow-xl shadow-primary/20">
                     <UserCheck size={24} className="md:w-7 md:h-7" />
                  </div>
                  <div>
                     <p className="text-[9px] text-slate-400 uppercase font-black tracking-widest mb-1 leading-none">Leadership</p>
                     <h4 className="text-base md:text-lg font-black uppercase tracking-tighter text-primary leading-none">{branch.manager_name || 'Senior Case Officer'}</h4>
                  </div>
               </div>
               
               <div className="space-y-3 md:space-y-4">
                  {branch.phone?.split(',').map((num: string, idx: number) => (
                    <Link key={idx} href={`tel:${num.trim()}`} className="flex items-center p-4 md:p-5 bg-slate-50 rounded-2xl md:rounded-[28px] border border-slate-50 hover:bg-white hover:border-accent transition-all group">
                       <Phone size={18} className="text-accent mr-4 md:mr-5 shrink-0" />
                       <span className="text-[11px] md:text-sm font-black text-primary tracking-tight truncate">{num.trim()}</span>
                    </Link>
                  ))}
                  <Link href={`mailto:${branch.email}`} className="flex items-center p-4 md:p-5 bg-slate-50 rounded-2xl md:rounded-[28px] border border-slate-50 hover:bg-white hover:border-accent transition-all group overflow-hidden">
                     <Mail size={18} className="text-accent mr-4 md:mr-5 shrink-0" />
                     <span className="text-[11px] md:text-sm font-black text-primary tracking-tight truncate">{branch.email}</span>
                  </Link>
               </div>

               <div className="pt-6 md:pt-8 border-t border-slate-50">
                  <p className="text-[9px] text-slate-400 uppercase font-black tracking-widest mb-4">Social Hub</p>
                  <div className="flex gap-3 h-10 md:h-auto">
                    {branch.facebook_url && (
                      <Link href={branch.facebook_url} target="_blank" className="w-10 h-10 md:w-12 md:h-12 bg-slate-50 rounded-xl md:rounded-2xl flex items-center justify-center hover:bg-[#1877F2] hover:text-white transition-all">
                          <svg className="w-5 h-5 md:w-6 md:h-6 fill-current" viewBox="0 0 24 24"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"/></svg>
                      </Link>
                    )}
                    {branch.instagram_url && (
                      <Link href={branch.instagram_url} target="_blank" className="w-10 h-10 md:w-12 md:h-12 bg-slate-50 rounded-xl md:rounded-2xl flex items-center justify-center hover:bg-[#E4405F] hover:text-white transition-all">
                          <svg className="w-5 h-5 md:w-6 md:h-6 stroke-current fill-none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                      </Link>
                    )}
                  </div>
               </div>
            </div>

            {/* Support Trust Sidebar */}
            <div className="bg-white rounded-[40px] md:rounded-[50px] p-8 md:p-12 border border-slate-100 shadow-sm divide-y divide-slate-50">
               <div className="pb-8 md:pb-10 text-center lg:text-left">
                  <div className="flex flex-col lg:flex-row items-center gap-4 mb-4 md:mb-6">
                    <GraduationCap className="text-accent" size={24} md-size={28} />
                    <h4 className="text-base md:text-lg font-black font-outfit text-primary uppercase tracking-tight leading-none">Global Network</h4>
                  </div>
                  <p className="text-slate-500 text-xs md:text-sm font-bold md:font-medium leading-relaxed">Direct representation with 800+ universities globally.</p>
               </div>
               <div className="pt-8 md:pt-10 text-center lg:text-left">
                  <div className="flex flex-col lg:flex-row items-center gap-4 mb-4 md:mb-6">
                    <Star className="text-accent" size={24} md-size={28} />
                    <h4 className="text-base md:text-lg font-black font-outfit text-primary uppercase tracking-tight leading-none">Authority Ranking</h4>
                  </div>
                  <p className="text-slate-500 text-xs md:text-sm font-bold md:font-medium leading-relaxed">Leading consultant for USA & UK intakes.</p>
               </div>
            </div>
          </div>

        </div>

        {/* LocalBusiness Schema Injection */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              "name": branch.name,
              "description": branch.description,
              "address": {
                "@type": "PostalAddress",
                "streetAddress": branch.address,
                "addressLocality": branch.city,
                "addressCountry": "IN"
              },
              "telephone": branch.phone,
              "image": branch.image_url,
              "areaServed": branch.city,
              "url": `https://ecchouk.co.uk/branches/${slug}`
            })
          }}
        />
      </section>
    </div>
  );
}
