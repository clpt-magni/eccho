'use client';

import React, { useState } from 'react';
import { Plus, Minus, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    question: "How do I choose the best country for my study abroad journey?",
    answer: "Choosing the right destination depends on your career goals, budget, and academic background. At Eccho Overseas, we provide a personalized assessment to match your profile with countries like the USA for tech, the UK for business/law, or Canada for post-study work opportunities."
  },
  {
    question: "What is the success rate for student visas with Eccho Overseas?",
    answer: "We maintain an industry-leading visa success rate of 99.8%. Our team of certified visa experts meticulously audits every document and provides intensive mock interview sessions to ensure you are fully prepared for the consulate."
  },
  {
    question: "Do you provide coaching for IELTS, GRE, and GMAT?",
    answer: "Yes, we provide premium, result-oriented coaching for all major standardized tests including IELTS, TOEFL, GRE, GMAT, and Duolingo. Our trainers are experts in identifying your weak areas and using proven strategies to boost your scores."
  },
  {
    question: "Can I get a scholarship for international universities?",
    answer: "Absolutely. Many of our partner universities offer merit-based and need-based scholarships. We help you identify these opportunities and guide you through the scholarship application process to minimize your financial burden."
  },
  {
    question: "How long is the entire process from counseling to landing?",
    answer: "The timeline typically ranges from 4 to 8 months, depending on the intake and country. We recommend starting early to ensure enough time for university admissions, standardized tests, and visa processing."
  }
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="max-w-7xl mx-auto px-6 py-24 md:py-40">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
        <div className="space-y-8 lg:sticky lg:top-32 relative z-10">
          <div className="space-y-4">
            <h2 className="text-[11px] font-black uppercase tracking-[0.4em] text-accent">Expert Guidance</h2>
            <h3 className="text-4xl md:text-6xl font-black text-primary font-outfit uppercase tracking-tighter leading-none">Frequently <br /> Asked Questions</h3>
            <p className="text-lg text-slate-500 font-medium max-w-md">Everything you need to know about your international education journey, answered by our senior consultants.</p>
          </div>
          
          <div className="p-10 bg-primary rounded-[50px] text-white space-y-6 relative overflow-hidden group">
             <div className="relative z-10">
                <h4 className="text-2xl font-black font-outfit uppercase tracking-tight mb-2">Still have questions?</h4>
                <p className="text-white/60 text-sm font-medium mb-8">Our expert advisors are available for a 1-on-1 strategy session to map out your global future.</p>
                <a href="/contact" className="inline-flex items-center gap-3 px-8 py-4 bg-accent text-primary rounded-2xl font-black text-[10px] uppercase tracking-widest hover:scale-105 transition-all">
                   Chat with an Expert
                </a>
             </div>
             <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 blur-[50px] -z-0" />
          </div>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className={`rounded-[40px] border transition-all duration-500 overflow-hidden ${
                openIndex === index 
                ? "bg-white border-accent shadow-2xl shadow-emerald-900/10" 
                : "bg-white border-slate-100 hover:border-slate-200"
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-8 md:p-10 text-left transition-all"
              >
                <span className={`text-lg md:text-xl font-black font-outfit uppercase tracking-tight leading-tight ${
                  openIndex === index ? "text-primary" : "text-slate-600"
                }`}>
                  {faq.question}
                </span>
                <div className={`shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                  openIndex === index ? "bg-accent text-primary rotate-180" : "bg-slate-50 text-slate-400"
                }`}>
                  <ChevronDown size={20} />
                </div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                  >
                    <div className="px-8 md:px-10 pb-10">
                       <div className="pt-6 border-t border-slate-50 text-slate-500 text-base md:text-lg font-medium leading-relaxed italic">
                         "{faq.answer}"
                       </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ Schema for SEO Rich Snippets */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
          })
        }}
      />
    </section>
  );
}
