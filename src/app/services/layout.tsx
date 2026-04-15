import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Study Abroad Services | Visa Assistance, University Selection, IELTS Coaching | Eccho Overseas",
  description: "Complete end-to-end study abroad services: university shortlisting, SOP & LOR drafting, visa filing, IELTS/PTE coaching, education loan assistance, and post-landing support. 99% visa success rate across UK, USA, Ireland, Australia & Europe.",
  keywords: ["study abroad services", "visa assistance India", "university selection", "IELTS coaching", "SOP writing", "education loan", "overseas education services", "student visa processing"],
  openGraph: {
    title: "Our Services | End-to-End Study Abroad Solutions | Eccho Overseas",
    description: "From university selection to post-landing support — we handle every step of your international education journey.",
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
