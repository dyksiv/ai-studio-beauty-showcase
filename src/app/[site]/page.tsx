import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BeautyLanding } from "@/components/beauty-landing";
import { beautySites, getBeautySite } from "@/lib/beauty-sites";

type PageProps = {
  params: Promise<{ site: string }>;
};

export function generateStaticParams() {
  return beautySites.map((site) => ({ site: site.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { site: slug } = await params;
  const site = getBeautySite(slug);

  if (!site) {
    return {};
  }

  return {
    title: `${site.brand} | Премиальный лендинг для мастера красоты`,
    description: `${site.brand}: демонстрационный premium landing page AI Studio для ниши ${site.niche}.`,
  };
}

export default async function BeautySitePage({ params }: PageProps) {
  const { site: slug } = await params;
  const site = getBeautySite(slug);

  if (!site) {
    notFound();
  }

  return <BeautyLanding site={site} />;
}
