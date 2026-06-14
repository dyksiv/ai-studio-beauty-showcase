import { BeautyLanding } from "@/components/beauty-landing";
import { getBeautySite } from "@/lib/beauty-sites";

export default function Home() {
  const site = getBeautySite("luna-beauty");

  if (!site) {
    return null;
  }

  return <BeautyLanding site={site} />;
}
