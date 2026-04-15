import { countriesData } from "@/data/countries";
import { notFound } from "next/navigation";
import {
   CheckCircle2,
   MapPin,
   GraduationCap,
   BookOpen,
   BadgeDollarSign,
   School,
   FileText,
   Clock,
   Briefcase,
   Home,
   TrendingUp,
   HelpCircle,
   ArrowRight,
   Stamp,
   Trophy,
   ArrowUpRight,
   Info,
   Globe,
   ShieldCheck,
   Target,
   Sparkles
} from "lucide-react";
import Link from "next/link";
import LeadForm from "@/components/LeadForm";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";

interface PageProps {
   params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
   return countriesData.map((country) => ({
      slug: country.slug,
   }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
   const { slug } = await params;
   const country = countriesData.find((c) => c.slug === slug);

   if (!country) return { title: "Country Not Found | Eccho Overseas" };

   const uniNames = country.universities.slice(0, 5).map(u => u.name).join(', ');

   return {
      title: `Study in ${country.name} 2025 | Top Universities, Fees, Visa & Admission Guide | Eccho Overseas`,
      description: `Complete guide to study in ${country.name}. Discover ${country.universities.length}+ top universities including ${uniNames}. Tuition: ${country.costs.tuition}. Visa type: ${country.visa.type}. ${country.career.pr}. Expert guidance from Eccho Overseas.`,
      keywords: [
        `study in ${country.name}`,
        `${country.name} student visa`,
        `${country.name} universities for Indian students`,
        `cost of studying in ${country.name}`,
        `${country.name} admission requirements`,
        `${country.name} visa process`,
        `best universities in ${country.name}`,
        `study abroad ${country.name}`,
        `Eccho Overseas ${country.name}`,
      ],
      openGraph: {
        title: `Study in ${country.name} | Universities, Visa & Career Guide`,
        description: `Everything you need to know about studying in ${country.name}. ${country.universities.length}+ university partners. ${country.hero.highlights.join(' • ')}.`,
        url: `https://ecchouk.co.uk/countries/${country.slug}`,
      },
   };
}

export default async function CountryPage({ params }: PageProps) {
   const { slug } = await params;
   const country = countriesData.find((c) => c.slug === slug);

   if (!country) notFound();

   return (
      <div className="pb-24 bg-slate-50">
         {/* 1. Hero */}
         <section className="bg-primary text-white py-24 lg:py-32 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary to-emerald-900 opacity-50" />
            <div className="max-w-7xl mx-auto px-6 relative z-10">
               <Link href="/countries" className="inline-flex items-center gap-2 text-accent text-xs font-bold uppercase tracking-widest mb-8 hover:gap-4 transition-all">
                  <ArrowRight size={14} className="rotate-180" /> Back to Countries
               </Link>
               <div className="flex items-center gap-6 mb-8">
                  <span className="text-6xl">{country.flag}</span>
                  <h1 className="text-5xl lg:text-7xl font-black font-outfit tracking-tighter leading-none m-0">Study in {country.name}</h1>
               </div>
               <p className="text-xl text-white/70 max-w-3xl leading-relaxed border-l-4 border-accent pl-6">
                  "{country.hero.intro}"
               </p>
            </div>
         </section>

         {/* 2. Content Grid */}
         <section className="max-w-7xl mx-auto px-6 -mt-10 relative z-20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

               <div className="lg:col-span-8 space-y-12">

                  {/* [RE-ORDERED: TOP] Why Study - Strategy Section */}
                  <div className="bg-white p-12 rounded-[40px] shadow-xl border border-slate-100 pb-16">
                     <div className="flex items-center gap-4 mb-10">
                        <div className="w-12 h-12 bg-primary/5 rounded-2xl flex items-center justify-center text-primary"><Target size={24} /></div>
                        <h2 className="text-3xl font-black text-primary uppercase tracking-tighter m-0">Why {country.name}?</h2>
                     </div>
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {country.whyStudy.points.map((p, i) => (
                           <div key={i} className="flex gap-6">
                              <CheckCircle2 className="text-accent shrink-0" size={24} />
                              <div>
                                 <h4 className="text-lg font-black text-primary mb-2 tracking-tight">{p.title}</h4>
                                 <p className="text-slate-500 text-sm leading-relaxed">{p.desc}</p>
                              </div>
                           </div>
                        ))}
                     </div>
                  </div>

                  {/* Top Universities - Professional Table Format with Tooltips */}
                  <div className="bg-white p-10 lg:p-12 rounded-[40px] shadow-xl border border-slate-100">
                     <div className="flex items-end justify-between mb-10">
                        <div className="flex items-center gap-4">
                           <div className="w-12 h-12 bg-primary/5 rounded-2xl flex items-center justify-center text-primary"><School size={24} /></div>
                           <h2 className="text-3xl font-black text-primary uppercase tracking-tighter m-0">Top Universities</h2>
                        </div>
                     </div>

                     {/* Table Header */}
                     <div className="hidden md:grid grid-cols-12 gap-4 px-5 py-3 mb-2 text-[10px] font-black uppercase tracking-widest text-slate-400">
                        <div className="col-span-1">#</div>
                        <div className="col-span-7">University</div>
                        <div className="col-span-4 text-right">Ranking</div>
                     </div>

                     {/* Table Rows */}
                     <div className="divide-y divide-slate-100">
                        {country.universities.map((uni, i) => (
                           <div key={i} className="group relative">
                              <div className="grid grid-cols-12 gap-4 items-center px-5 py-4 rounded-2xl hover:bg-accent/5 transition-all cursor-default">
                                 <div className="col-span-1 text-sm font-black text-slate-300">{String(i + 1).padStart(2, '0')}</div>
                                 <div className="col-span-7 md:col-span-7">
                                    <p className="text-sm font-bold text-primary leading-snug">{uni.name}</p>
                                    <p className="text-xs text-slate-400 font-medium mt-0.5 md:hidden">{uni.description}</p>
                                 </div>
                                 <div className="col-span-4 md:col-span-4 text-right">
                                    {uni.rank && (
                                       <span className="inline-block bg-accent/10 text-accent text-[9px] font-black uppercase tracking-wider px-3 py-1.5 rounded-lg">{uni.rank}</span>
                                    )}
                                 </div>
                              </div>
                              {/* Desktop Tooltip */}
                              <div className="hidden md:block absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-72 bg-primary text-white text-xs font-medium p-4 rounded-2xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 pointer-events-none">
                                 <p className="leading-relaxed">{uni.description}</p>
                                 <div className="absolute top-full left-1/2 -translate-x-1/2 w-3 h-3 bg-primary rotate-45 -mt-1.5" />
                              </div>
                           </div>
                        ))}
                     </div>
                  </div>

                  {/* Estimated Costs - Typography optimized for single line */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                     <div className="bg-white p-10 lg:p-12 rounded-[40px] shadow-xl border border-slate-100">
                        <h3 className="text-2xl font-black text-primary mb-8 flex items-center gap-3"><BadgeDollarSign className="text-accent" /> Estimated Costs</h3>
                        <div className="space-y-8">
                           <div>
                              <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Tuition Fees</p>
                              <p className="text-base lg:text-lg font-black text-primary tracking-tight m-0 leading-snug">{country.costs.tuition}</p>
                           </div>
                           <div>
                              <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Living Expenses</p>
                              <p className="text-base lg:text-lg font-black text-primary tracking-tight m-0 leading-snug">{country.costs.living}</p>
                           </div>
                        </div>
                        <div className="mt-8 pt-6 border-t border-slate-50">
                           <p className="bg-accent/5 text-accent text-[11px] font-bold p-4 rounded-2xl leading-relaxed">
                              {country.costs.variation}
                           </p>
                        </div>
                     </div>

                     <div className="bg-white p-10 lg:p-12 rounded-[40px] shadow-xl border border-slate-100">
                        <h3 className="text-2xl font-black text-primary mb-8 flex items-center gap-3"><FileText className="text-accent" /> Admission</h3>
                        <div className="space-y-6">
                           <div>
                              <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Academic</p>
                              <p className="text-sm font-bold text-primary leading-snug">{country.admission.academic}</p>
                           </div>
                           <div>
                              <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">English</p>
                              <p className="text-sm font-bold text-primary leading-snug">{country.admission.english}</p>
                           </div>
                           <div>
                              <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Standardized</p>
                              <p className="text-sm font-bold text-primary leading-snug">{country.admission.entrance}</p>
                           </div>
                        </div>
                     </div>
                  </div>

                  {/* Visa Info */}
                  <div className="bg-white p-12 rounded-[40px] shadow-xl border border-slate-100">
                     <h3 className="text-3xl font-black text-primary uppercase tracking-tighter mb-10 flex items-center gap-4"><Stamp className="text-accent" /> Visa Information</h3>
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        <div>
                           <p className="text-xs font-black uppercase tracking-widest text-slate-400 mb-4">Crucial Documents</p>
                           <ul className="space-y-3">
                              {country.visa.documents.map((d, i) => (
                                 <li key={i} className="flex items-center gap-3 text-sm font-bold text-slate-700">
                                    <CheckCircle2 size={16} className="text-accent" /> {d}
                                 </li>
                              ))}
                           </ul>
                        </div>
                        <div className="bg-slate-50 p-8 rounded-3xl">
                           <p className="text-xs font-black uppercase tracking-widest text-slate-400 mb-3">Visa Type</p>
                           <p className="text-xl font-black text-primary mb-6">{country.visa.type}</p>
                           <p className="text-xs font-black uppercase tracking-widest text-slate-400 mb-3">Processing</p>
                           <p className="text-lg font-bold text-primary opacity-80">{country.visa.processingTime}</p>
                        </div>
                     </div>
                  </div>

                  {/* Career & Jobs */}
                  <div className="bg-primary text-white p-12 lg:p-16 rounded-[50px] shadow-2xl relative overflow-hidden">
                     <div className="relative z-10">
                        <h2 className="text-3xl lg:text-4xl font-black font-outfit uppercase tracking-tight mb-8 text-white">Career <span className="text-accent">Prospects</span></h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                           <div className="space-y-1">
                              <p className="text-[10px] font-bold uppercase tracking-widest text-white/40">Market Scope</p>
                              <p className="text-sm font-bold text-white leading-relaxed">{country.career.scope}</p>
                           </div>
                           <div className="space-y-1">
                              <p className="text-[10px] font-bold uppercase tracking-widest text-white/40">Average Salary</p>
                              <p className="text-sm font-bold text-white leading-relaxed">{country.career.salary}</p>
                           </div>
                           <div className="space-y-1">
                              <p className="text-[10px] font-bold uppercase tracking-widest text-white/40">PR Pathway</p>
                              <p className="text-sm font-bold text-white leading-relaxed">{country.career.pr}</p>
                           </div>
                        </div>
                     </div>
                     <Globe className="absolute -bottom-10 -right-10 w-64 h-64 text-white/5" />
                  </div>

               </div>

               {/* Sidebar */}
               <div className="lg:col-span-4 space-y-10">
                  <LeadForm />

                  <div className="bg-white p-10 rounded-[40px] border border-slate-100 shadow-xl space-y-8">
                     <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-accent/10 rounded-2xl flex items-center justify-center text-accent"><Trophy size={24} /></div>
                        <h4 className="text-xl font-black text-primary uppercase tracking-tighter">Authority Seal</h4>
                     </div>
                     <div className="space-y-6">
                        <div className="flex justify-between items-center border-b border-slate-50 pb-4">
                           <span className="text-sm font-bold text-slate-500">Uni Partners</span>
                           <span className="text-xl font-black text-primary">800+</span>
                        </div>
                        <div className="flex justify-between items-center border-b border-slate-50 pb-4">
                           <span className="text-sm font-bold text-slate-500">Student Placed</span>
                           <span className="text-xl font-black text-primary">15,000+</span>
                        </div>
                        <div className="flex justify-between items-center pb-4">
                           <span className="text-sm font-bold text-slate-500">Visa Success</span>
                           <span className="text-xl font-black text-primary">99.8%</span>
                        </div>
                     </div>
                  </div>
               </div>

            </div>
         </section>
      </div>
   );
}
