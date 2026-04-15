import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Eccho Overseas | Trusted Study Abroad Consultancy Since Day One",
  description: "Learn about Eccho Overseas — India's leading overseas education consultancy. With 15,000+ successful admissions, 800+ university partners, and a 99% visa success rate, we are the most trusted name in international education consulting.",
  keywords: ["about Eccho Overseas", "study abroad consultancy India", "overseas education experts", "trusted visa consultants", "study abroad company"],
  openGraph: {
    title: "About Eccho Overseas | Our Mission & Leadership",
    description: "Meet the visionaries behind India's most successful study abroad consultancy. 15,000+ students placed globally.",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
