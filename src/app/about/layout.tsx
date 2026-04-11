import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | India's Leading Study Abroad Consultancy",
  description: "Learn about Eccho Overseas' journey, our mission to empower students, and our global network of 800+ universities. Trusted by thousands of successful graduates.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
