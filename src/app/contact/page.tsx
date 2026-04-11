import LeadForm from "@/components/LeadForm";
import { Mail, Phone, MapPin, MessageSquare, Clock } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="pb-24">
      {/* Header */}
      <section className="bg-primary text-white py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold font-outfit mb-6">Let's Talk About <span className="text-accent underline">Your Future</span></h1>
          <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            Whether you have questions about universities, visas, or career paths, our expert counselors are ready to help.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 -mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div className="space-y-8 lg:pt-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-8 rounded-3xl shadow-lg border border-border/50">
                <div className="w-12 h-12 bg-accent/10 rounded-2xl flex items-center justify-center mb-6">
                  <Phone className="text-accent" />
                </div>
                <h4 className="text-lg font-bold text-primary mb-2">Call Us</h4>
                <p className="text-sm text-muted-foreground">+91 98765 43210</p>
                <p className="text-sm text-muted-foreground">+91 12345 67890</p>
              </div>

              <div className="bg-white p-8 rounded-3xl shadow-lg border border-border/50">
                <div className="w-12 h-12 bg-primary/5 rounded-2xl flex items-center justify-center mb-6">
                  <Mail className="text-primary" />
                </div>
                <h4 className="text-lg font-bold text-primary mb-2">Email Us</h4>
                <p className="text-sm text-muted-foreground">info@ecchooverseas.com</p>
                <p className="text-sm text-muted-foreground">support@ecchooverseas.com</p>
              </div>
            </div>

            <div className="bg-primary text-white p-10 rounded-[40px] shadow-xl relative overflow-hidden">
               <div className="relative z-10 flex gap-6">
                 <div className="shrink-0">
                    <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center">
                      <MessageSquare className="text-accent" size={32} />
                    </div>
                 </div>
                 <div>
                    <h3 className="text-2xl font-bold font-outfit mb-2">WhatsApp Support</h3>
                    <p className="text-white/70 mb-6">Quick answers on the go. Chat with our counselors instantly.</p>
                    <button className="bg-accent text-primary px-8 py-3 rounded-full font-bold hover:scale-105 transition-transform">
                      Open WhatsApp
                    </button>
                 </div>
               </div>
               <div className="absolute bottom-0 right-0 w-32 h-32 bg-accent/20 blur-[80px]" />
            </div>

            <div className="flex items-center gap-4 text-muted-foreground px-4">
               <Clock size={20} className="text-accent" />
               <span className="text-sm font-medium">Head Office Hours: 09:30 AM - 07:30 PM (Mon-Sat)</span>
            </div>
          </div>

          {/* Form */}
          <LeadForm />
        </div>
      </section>
    </div>
  );
}
