import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { GraduationCap, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Brand & Info */}
        <div className="space-y-6">
          <Link href="/" className="flex items-center gap-2">
            <div className="bg-white p-3 rounded-xl inline-block shadow-lg">
              <Image
                src="/images/logo.png"
                alt="Eccho Overseas"
                width={150}
                height={50}
                className="h-8 w-auto"
              />
            </div>
          </Link>

          <p className="text-white/85 text-sm leading-relaxed font-medium">
            Your gateway to global education. We provide expert guidance for study abroad across the USA, UK, Canada, Australia, and more.
          </p>
          <div className="flex items-center gap-4 text-xs font-black text-accent uppercase tracking-widest">
            <Link href="https://www.facebook.com/ecchooverseas/" className="hover:text-white transition-colors">Facebook</Link>
            <Link href="https://www.instagram.com/eccho.overseas/" className="hover:text-white transition-colors">Instagram</Link>
            <Link href="https://www.linkedin.com/company/ecchooverseas" className="hover:text-white transition-colors">LinkedIn</Link>
          </div>
        </div>


        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-bold mb-6 text-accent uppercase tracking-tight">Quick Links</h4>
          <ul className="space-y-4 text-sm text-white/85 font-medium">
            <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
            <li><Link href="/services" className="hover:text-white transition-colors">Our Services</Link></li>
            <li><Link href="/countries" className="hover:text-white transition-colors">Destinations</Link></li>
            <li><Link href="/branches" className="hover:text-white transition-colors">Find a Branch</Link></li>
            <li><Link href="/blog" className="hover:text-white transition-colors">Education Blog</Link></li>
          </ul>
        </div>

        {/* Countries */}
        <div>
          <h4 className="text-lg font-bold mb-6 text-accent uppercase tracking-tight">Top Destinations</h4>
          <ul className="space-y-4 text-sm text-white/85 font-medium">
            <li><Link href="/countries/usa" className="hover:text-white transition-colors">Study in USA</Link></li>
            <li><Link href="/countries/uk" className="hover:text-white transition-colors">Study in UK</Link></li>
            <li><Link href="/countries/canada" className="hover:text-white transition-colors">Study in Canada</Link></li>
            <li><Link href="/countries/australia" className="hover:text-white transition-colors">Study in Australia</Link></li>
            <li><Link href="/countries/germany" className="hover:text-white transition-colors">Study in Germany</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-bold mb-6 text-accent uppercase tracking-tight">Contact Support</h4>
          <ul className="space-y-4 text-sm text-white/90 font-medium tracking-tight">
            <li className="flex items-center gap-3">
              <Mail size={16} className="text-accent" />
              <span>info@ecchouk.co.uk</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={16} className="text-accent" />
              <span>78424 89864</span>
            </li>
            <li className="flex items-start gap-3">
              <MapPin size={16} className="text-accent mt-1 shrink-0" />
              <span>25-2 Sai Plaza 1st Lane, Chandramouli Nagar, Guntur, Andhra Pradesh 5220071</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-white/10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Copyright */}
          <p className="text-white/60 text-[10px] font-black uppercase tracking-[0.2em] order-2 md:order-1">
            &copy; {new Date().getFullYear()} Eccho Overseas Consultancy. All rights reserved.
          </p>

          {/* Web Counter */}
          <div className="order-1 md:order-2 bg-white/5 px-4 py-2 rounded-xl backdrop-blur-sm border border-white/5">
            <Link href="https://www.hitwebcounter.com" target="_blank">
              <img
                src="https://hitwebcounter.com/counter/counter.php?page=21488675&style=0024&nbdigits=5&type=page&initCount=0"
                title="Secure Visitor Counter"
                alt="Visitor Counter"
                className="opacity-80 hover:opacity-100 transition-opacity"
              />
            </Link>
          </div>

          {/* Developed By */}
          <div className="order-3">
            <Link
              href="https://magnidigitech.com"
              target="_blank"
              className="flex items-center gap-3 group px-4 py-2 rounded-xl bg-white/5 border border-white/10 transition-all shadow-sm"
            >
              <span className="text-white/50 text-[10px] font-black uppercase tracking-widest">Developed by</span>
              <Image
                src="/images/magnidigitech.png"
                alt="Magnidigitech"
                width={140}
                height={30}
                className="h-5 w-auto transition-all"
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>

  );
}
