import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Study Abroad Destinations | UK, USA, Ireland, Australia, Europe & More | Eccho Overseas",
  description: "Explore top study abroad destinations with Eccho Overseas. Compare universities, costs, visa requirements & career prospects across UK, USA, Ireland, Australia, Canada, Germany, France, Italy, New Zealand, Dubai & Europe. Find your ideal study destination.",
  keywords: ["study abroad destinations", "best countries to study abroad", "study in UK", "study in USA", "study in Ireland", "study in Australia", "study in Europe", "study in Canada", "study in Germany", "study in France", "international education guide", "compare study destinations"],
  openGraph: {
    title: "Explore Study Destinations | Eccho Overseas",
    description: "Compare 10+ top study abroad destinations. Find the best country for your career goals, budget, and lifestyle.",
  },
};

export default function CountriesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
