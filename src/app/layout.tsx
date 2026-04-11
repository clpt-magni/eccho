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
    default: "Eccho Overseas | Premium Study Abroad Consultancy",
    template: "%s | Eccho Overseas"
  },
  description: "Global education guidance for USA, UK, Canada, Australia and more. Top-rated study abroad consultants with over 99% visa success rate.",
  keywords: ["study abroad", "visa consultancy", "USA visa", "UK admission", "overseas education", "student visa", "Eccho Overseas"],
  authors: [{ name: "Eccho Overseas" }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://ecchouk.co.uk",
    siteName: "Eccho Overseas",
    title: "Eccho Overseas | Premium Study Abroad Consultancy",
    description: "Expert guidance for international education. Higher success rates for USA, UK, and Canada.",
    images: ["/images/og-image.jpg"]
  },
  twitter: {
    card: "summary_large_image",
    title: "Eccho Overseas | Premium Study Abroad Consultancy",
    description: "Your bridge to global education. Expert visa & admission support.",
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
