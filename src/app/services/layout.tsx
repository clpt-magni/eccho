import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services | End-to-End Study Abroad Solutions",
  description: "Explore our premium services: University selection, Visa assistance, IELTS/GRE coaching, and post-landing support. We handle the complexity, you focus on your future.",
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
