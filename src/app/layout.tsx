import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ecchouk.co.uk"),
  title: {
    default: "Eccho Overseas | Best Study Abroad Consultants | UK, USA, Ireland, Australia, Europe",
    template: "%s | Eccho Overseas"
  },
  description: "India's most trusted study abroad consultancy. Expert guidance for UK, USA, Ireland, Australia, Canada & Europe admissions. 99% visa success rate. 15,000+ students placed at 800+ partner universities worldwide. Free consultation available.",
  keywords: ["study abroad", "visa consultancy", "USA visa", "UK admission", "overseas education", "student visa", "Eccho Overseas", "study in UK", "study in USA", "study in Ireland", "study in Europe", "study in Australia", "best overseas education consultants", "study abroad consultants India", "IELTS coaching", "university admissions"],
  authors: [{ name: "Eccho Overseas", url: "https://ecchouk.co.uk" }],
  creator: "Eccho Overseas",
  publisher: "Eccho Overseas",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://ecchouk.co.uk",
    siteName: "Eccho Overseas",
    title: "Eccho Overseas | India's #1 Study Abroad Consultancy",
    description: "Expert guidance for international education. 99% visa success rate for UK, USA, Ireland, Australia & Europe. 15,000+ students placed.",
    images: ["/images/og-image.jpg"]
  },
  twitter: {
    card: "summary_large_image",
    title: "Eccho Overseas | Best Study Abroad Consultants in India",
    description: "Your bridge to global education. Expert visa & admission support for UK, USA, Ireland, Australia & Europe.",
    images: ["/images/og-image.jpg"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: "https://ecchouk.co.uk",
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${outfit.variable} font-sans antialiased text-primary`}>
        <Navbar />
        <main className="min-h-screen pt-20">
          {children}
        </main>
        <Footer />

        {/* Global Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Eccho Overseas",
              "url": "https://ecchouk.co.uk",
              "logo": "https://ecchouk.co.uk/logo.png",
              "sameAs": [
                "https://facebook.com/ecchooverseas",
                "https://instagram.com/ecchooverseas"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91-7842489864",
                "contactType": "customer service"
              }
            })
          }}
        />
      </body>
    </html>
  );
}
