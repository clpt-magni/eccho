import { ArrowRight, Calendar, User, Tag } from "lucide-react";
import Link from "next/link";

const blogPosts = [
  {
    title: "How to Choose the Right University for 2026 Intake?",
    excerpt: "A comprehensive guide on factors like rankings, tuition fees, and job prospects.",
    date: "Oct 15, 2025",
    author: "Aditi Sharma",
    category: "Study Abroad",
    image: "🎓",
  },
  {
    title: "Top 5 Countries with Post-Study Work Visa Opportunities",
    excerpt: "Discover which countries offer the best staying options after graduation.",
    date: "Oct 10, 2025",
    author: "Rahul Varma",
    category: "Visa Tips",
    image: "🌍",
  },
  {
    title: "IELTS vs TOEFL: Which English Test Should You Take?",
    excerpt: "We break down the differences and help you choose the best fit for your target university.",
    date: "Oct 05, 2025",
    author: "John Smith",
    category: "Coaching",
    image: "✍️",
  },
];

export default function BlogPage() {
  return (
    <div className="pb-24">
      <section className="bg-primary text-white py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold font-outfit mb-6">Education <span className="text-accent">Blog</span></h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Insights, guides, and news for international students planning their global journey.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {blogPosts.map((post, i) => (
            <div key={i} className="group bg-white rounded-[40px] overflow-hidden border border-border/50 shadow-sm hover:shadow-2xl transition-all">
               <div className="aspect-[16/10] bg-muted/50 flex items-center justify-center text-7xl group-hover:scale-105 transition-transform duration-500">
                 {post.image}
               </div>
               <div className="p-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="bg-accent/10 text-accent text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest">{post.category}</div>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground"><Calendar size={14} /> {post.date}</div>
                  </div>
                  <h3 className="text-2xl font-bold font-outfit text-primary mb-4 leading-snug group-hover:text-accent transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-8">
                    {post.excerpt}
                  </p>
                  <div className="pt-8 border-t border-border flex items-center justify-between">
                     <div className="flex items-center gap-2 text-sm font-semibold text-primary">
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center"><User size={16} /></div>
                        {post.author}
                     </div>
                     <Link href="#" className="text-primary font-bold flex items-center gap-2 hover:translate-x-1 transition-transform">
                        Read <ArrowRight size={18} />
                     </Link>
                  </div>
               </div>
            </div>
          ))}
        </div>
        
        {/* Pagination Placeholder */}
        <div className="mt-16 flex justify-center gap-4">
           {[1, 2, 3].map(p => (
             <button key={p} className={`w-12 h-12 rounded-2xl font-bold transition-all ${p === 1 ? 'bg-primary text-white shadow-lg' : 'bg-muted/50 text-primary hover:bg-muted'}`}>
                {p}
             </button>
           ))}
        </div>
      </section>
    </div>
  );
}
