'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Countries', href: '/countries' },
  { name: 'Branches', href: '/branches' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6',
        scrolled ? 'bg-white py-2 shadow-md border-b border-slate-100' : 'bg-white py-4'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <Image 
            src="/images/logo.png" 
            alt="Eccho Overseas" 
            width={180} 
            height={60} 
            className="h-10 w-auto md:h-12"
            priority
          />
        </Link>


        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-bold text-primary hover:text-accent transition-colors uppercase tracking-widest text-[10px]"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/contact"
            className="bg-accent text-white px-8 py-3 rounded-full text-[11px] font-black hover:shadow-xl hover:shadow-accent/20 transition-all active:scale-95 uppercase tracking-widest border-b-4 border-emerald-700"
          >
            Book Consultation
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-primary p-1"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white mt-4 rounded-3xl overflow-hidden shadow-2xl border border-slate-100"
          >
            <div className="flex flex-col p-8 gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm font-black text-primary hover:text-accent uppercase tracking-widest"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="/contact"
                className="bg-accent text-white px-6 py-5 rounded-2xl text-center font-black uppercase tracking-widest text-xs shadow-xl active:scale-95"
                onClick={() => setIsOpen(false)}
              >
                Book Consultation
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
