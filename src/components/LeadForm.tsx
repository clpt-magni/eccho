'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { supabase } from '@/lib/supabase';
import { cn } from '@/lib/utils';

export default function LeadForm({ branchId }: { branchId?: string }) {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      phone: formData.get('phone'),
      email: formData.get('email'),
      country_preference: formData.get('country'),
      branch_id: branchId || null,
    };

    try {
      const { error: submitError } = await supabase.from('leads').insert([data]);
      
      if (submitError) throw submitError;
      
      setSuccess(true);
    } catch (err: any) {
      console.error(err);
      setError(err.message || 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white p-12 rounded-[40px] text-center shadow-2xl border border-border/50"
      >
        <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 size={40} />
        </div>
        <h3 className="text-3xl font-bold text-primary font-outfit mb-4">Application Sent!</h3>
        <p className="text-muted-foreground mb-8">Thank you for choosing Eccho Overseas. One of our senior counselors will call you within 24 hours.</p>
        <button 
          onClick={() => setSuccess(false)}
          className="bg-primary text-white px-8 py-3 rounded-full font-bold"
        >
          Send Another
        </button>
      </motion.div>
    );
  }

  return (
    <div className="bg-white p-10 lg:p-12 rounded-[40px] shadow-2xl border border-border/50 relative overflow-hidden">
      <div className="relative z-10">
        <h3 className="text-3xl font-bold text-primary font-outfit mb-2 leading-tight">Book Free Consultation</h3>
        <p className="text-slate-600 mb-10 font-medium">Fill the form below to start your global education journey.</p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label className="text-xs font-black uppercase tracking-widest text-primary/70 ml-1">Full Name</label>
            <input 
              required
              name="name"
              placeholder="John Doe"
              className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-accent transition-all outline-none font-medium"
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-black uppercase tracking-widest text-primary/70 ml-1">Phone Number</label>
            <input 
              required
              name="phone"
              type="tel"
              placeholder="+91 00000 00000"
              className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-accent transition-all outline-none font-medium"
            />
          </div>

          <div className="space-y-2">
            <label className="text-xs font-black uppercase tracking-widest text-primary/70 ml-1">Email Address</label>
            <input 
              required
              name="email"
              type="email"
              placeholder="john@example.com"
              className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-accent transition-all outline-none font-medium"
            />
          </div>

          <div className="space-y-2">
            <label className="text-xs font-black uppercase tracking-widest text-primary/70 ml-1">Preferred Country</label>
            <select 
              name="country"
              className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-accent transition-all outline-none appearance-none font-medium cursor-pointer"
            >
              <option value="USA">USA</option>
              <option value="UK">UK</option>
              <option value="Canada">Canada</option>
              <option value="Australia">Australia</option>
              <option value="Germany">Germany</option>
              <option value="Ireland">Ireland</option>
              <option value="New Zealand">New Zealand</option>
              <option value="France">France</option>
              <option value="Italy">Italy</option>
              <option value="Dubai">Dubai</option>
            </select>

          </div>
          {/* ... */}
          <button 
            type="submit"
            disabled={loading}
            className="w-full bg-primary text-white py-5 rounded-2xl font-bold flex items-center justify-center gap-3 hover:shadow-2xl hover:shadow-accent/20 hover:scale-[1.01] transition-all disabled:opacity-50 active:scale-[0.98]"
          >
            {loading ? <Loader2 className="animate-spin" /> : <><Send size={20} /> Submit Application</>}
          </button>
          
          <p className="text-[11px] text-center text-slate-500 font-bold mt-4 px-6 leading-tight uppercase tracking-tight">
            By submitting this form, you agree to be contacted by Eccho Overseas.
          </p>
        </form>
      </div>
      
      {/* Decorative Blur */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-accent/20 blur-3xl -mr-16 -mt-16" />
    </div>

  );
}
