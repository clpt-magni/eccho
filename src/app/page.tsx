import Hero from "@/components/Hero";
import FaqSection from "../components/FaqSection";
import { GraduationCap, Globe, BookOpen, Stamp, Headphones, MapPin, ArrowRight, Trophy, Users, ShieldCheck } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Eccho Overseas | Best Study Abroad Consultants in India | UK, USA, Ireland, Australia, Europe",
  description: "India's most trusted study abroad consultancy with 99% visa success rate. Expert guidance for UK, USA, Ireland, Australia & Europe admissions. 15,000+ successful students. Free consultation available. IELTS prep, university selection, visa processing & post-landing support.",
  keywords: ["study abroad consultants", "best study abroad consultants in India", "UK student visa", "study in UK", "study in USA", "study in Ireland", "study in Europe", "study in Australia", "overseas education consultancy", "visa consultancy India", "IELTS coaching", "university admissions", "Eccho Overseas", "study abroad Guntur", "study abroad Hyderabad"],
  openGraph: {
    title: "Eccho Overseas | India's #1 Study Abroad Consultancy",
    description: "Join 15,000+ students who achieved their dream of studying at top global universities. 99% visa success. Free expert consultation.",
    url: "https://ecchouk.co.uk",
    type: "website",
  },
};

const services = [
  {
    title: "University Selection",
    desc: "Finding the perfect match for your academic goals and budget.",
    icon: <GraduationCap />,
  },
  {
    title: "Visa Assistance",
    desc: "Stress-free documentation and interview preparation.",
    icon: <Stamp />,
  },
  {
    title: "Coaching",
    desc: "IELTS, TOEFL, GRE, and GMAT training from experts.",
    icon: <BookOpen />,
  },
  {
    title: "Post-Landing Support",
    desc: "Accommodation and part-time job guidance in your new home.",
    icon: <Headphones />,
  },
];

export default function Home() {
  return (
    <div className="pb-24">
      <Hero />

      {/* Authority Trust Grid */}
      <section className="max-w-7xl mx-auto px-6 py-12 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="relative group">
            <div className="rounded-[60px] overflow-hidden shadow-2xl relative z-10">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop"
                alt="Eccho Overseas Counselling session"
                className="w-full h-[600px] object-cover group-hover:scale-105 transition-transform duration-1000"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 w-80 h-80 bg-accent/20 rounded-full blur-[100px] -z-10" />
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/5 rounded-full blur-[60px] -z-10" />
          </div>
          <div className="space-y-10">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-primary text-[10px] font-black uppercase tracking-widest border border-accent/20">
                <ShieldCheck size={14} className="text-accent" />
                Verified Excellence
              </div>
              <h2 className="text-4xl lg:text-6xl font-black text-primary font-outfit leading-[1] md:leading-[0.9] uppercase tracking-tighter">India's Most Trusted <br /> <span className="text-accent">Study Abroad</span> Partner</h2>
              <p className="text-xl text-slate-500 font-medium leading-relaxed">We don't just process visas; we architect careers. With direct representation for over 800+ global universities, our success rate is unparalleled in the industry.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-8 bg-white border border-slate-100 rounded-[35px] shadow-sm hover:border-accent hover:shadow-xl transition-all group">
                <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:bg-accent group-hover:text-white transition-colors">
                  <Trophy size={24} />
                </div>
                <h4 className="text-3xl font-black text-primary mb-1">99.8%</h4>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Visa Success Rate</p>
              </div>
              <div className="p-8 bg-white border border-slate-100 rounded-[35px] shadow-sm hover:border-accent hover:shadow-xl transition-all group">
                <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:bg-accent group-hover:text-white transition-colors">
                  <Users size={24} />
                </div>
                <h4 className="text-3xl font-black text-primary mb-1">15k+</h4>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Admissions</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Success Roadmap */}
      <section className="bg-slate-50 py-24 md:py-40">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-24 space-y-6">
            <h2 className="text-[11px] font-black uppercase tracking-[0.4em] text-accent">The Success Strategy</h2>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-black text-primary font-outfit uppercase tracking-tighter leading-none">Your Journey to Success</h3>
            <p className="text-lg text-slate-500 font-medium">A streamlined, scientific approach from your home city to the world's best global universities.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            <div className="hidden lg:block absolute top-[25%] left-0 w-full h-[2px] bg-slate-200 -z-10" />

            {[
              { step: "01", title: "Assessment", desc: "Expert evaluation of your academic profile and potential." },
              { step: "02", title: "Test Preparation", desc: "Intensive, result-oriented training for IELTS, GRE & GMAT." },
              { step: "03", title: "Application", desc: "Strategic university selection and error-free documentation." },
              { step: "04", title: "Visa & Landing", desc: "Comprehensive visa filing and global post-landing aid." }
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

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-6 py-24 md:py-40">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-10">
          <div className="max-w-2xl space-y-6">
            <h2 className="text-[11px] font-black uppercase tracking-[0.4em] text-accent">Our Expertise</h2>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-black text-primary font-outfit uppercase tracking-tighter leading-none">Premium Solutions</h3>
            <p className="text-lg text-slate-500 font-medium">Every service is crafted to eliminate friction and maximize your global potential.</p>
          </div>
          <Link href="/services" className="px-10 py-5 bg-primary text-white rounded-2xl font-black text-[11px] uppercase tracking-[0.2em] shadow-xl hover:shadow-primary/20 hover:-translate-y-1 transition-all">
            View All Services
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((s, i) => (
            <div key={i} className="p-12 rounded-[60px] bg-white border border-slate-50 shadow-sm hover:shadow-3xl hover:-translate-y-2 transition-all group relative overflow-hidden">
              <div className="w-20 h-20 rounded-3xl bg-primary/5 flex items-center justify-center mb-10 group-hover:bg-primary group-hover:text-white transition-all text-primary border border-primary/5">
                {s.icon}
              </div>
              <h3 className="text-2xl font-black mb-4 font-outfit text-primary uppercase tracking-tight leading-none">{s.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed font-bold">{s.desc}</p>
              <div className="absolute top-0 right-0 w-40 h-40 bg-accent/5 blur-[50px] -z-10" />
            </div>
          ))}
        </div>
      </section>

      {/* Country Spotlight */}
      <section className="bg-primary py-24 md:py-48 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-row justify-between items-end mb-24 gap-10">
            <div className="max-w-2xl space-y-6">
              <h2 className="text-[11px] text-accent font-black uppercase tracking-[0.4em]">Global Gateways</h2>
              <h3 className="text-4xl md:text-6xl lg:text-7xl font-black font-outfit uppercase tracking-tighter leading-none">Top Destinations</h3>
              <p className="text-white/60 text-lg font-medium max-w-lg">Join a community of 15,000+ students across the most prestigious global hubs.</p>
            </div>
            <Link href="/countries" className="hidden md:flex text-accent items-center gap-4 font-black text-[11px] uppercase tracking-[0.3em] hover:gap-6 transition-all group">
              Explore Global Map <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
            {[
              { name: "United Kingdom", slug: "uk", students: "8,000+", img: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=2070&auto=format&fit=crop" },
              { name: "Ireland", slug: "ireland", students: "1,500+", img: "https://images.unsplash.com/photo-1590089415225-401ed6f9db8e?q=80&w=2070&auto=format&fit=crop" },
              { name: "USA", slug: "usa", students: "1,500+", img: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?q=80&w=2070&auto=format&fit=crop" },
              { name: "Australia", slug: "australia", students: "2,000+", img: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?q=80&w=2130&auto=format&fit=crop" },
              { name: "Europe", slug: "europe", students: "3,000+", img: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?q=80&w=2070&auto=format&fit=crop" }
            ].map((c, i) => (
              <Link key={i} href={`/countries/${c.slug}`} className="group relative overflow-hidden rounded-[60px] aspect-[10/14]">
                <img src={c.img} alt={c.name} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent" />
                <div className="absolute bottom-12 left-10 space-y-2">
                  <h4 className="text-3xl font-black font-outfit uppercase tracking-tight leading-none">{c.name}</h4>
                  <p className="text-[10px] text-accent font-black uppercase tracking-[0.2em]">{c.students} Students Placed</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Optimized FAQ Section */}
      <FaqSection />

      {/* Ultimate CTA */}
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        <div className="relative rounded-[40px] md:rounded-[60px] overflow-hidden bg-primary p-10 md:p-20 text-center shadow-2xl">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/10 rounded-full -mt-48 -mr-48 blur-[100px]" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full -mb-48 -ml-48 blur-[100px]" />

          <div className="relative z-10 max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white font-outfit uppercase tracking-tighter leading-[0.9]">
              Ready to <span className="text-accent">Go Global?</span>
            </h2>
            <p className="text-white/70 text-lg md:text-xl font-medium leading-relaxed max-w-2xl mx-auto">
              Schedule your elite strategy session with our advisors and join the league of global success stories.
            </p>
            <div className="pt-4">
              <Link
                href="/contact"
                className="inline-flex bg-accent text-primary text-[11px] font-black px-10 py-5 rounded-2xl shadow-xl hover:shadow-accent/20 hover:-translate-y-1 transition-all uppercase tracking-[0.2em] active:scale-95"
              >
                Start Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
