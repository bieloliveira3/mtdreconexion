import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { UrgencyBar } from "@/components/landing/UrgencyBar";
import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { ProblemSection } from "@/components/landing/ProblemSection";
import { MethodSection } from "@/components/landing/MethodSection";
import { AuthorSection } from "@/components/landing/AuthorSection";
import { TestimonialsSection } from "@/components/landing/TestimonialsSection";
import { NinetyDaySection } from "@/components/landing/NinetyDaySection";
import { OnePersonSection } from "@/components/landing/OnePersonSection";
import { OfferSection } from "@/components/landing/OfferSection";
import { FAQ } from "@/components/landing/FAQ";
import { FinalCTA } from "@/components/landing/FinalCTA";
import { Footer } from "@/components/landing/Footer";
import { MobileStickyCTA } from "@/components/landing/MobileStickyCTA";
import { ScrollRule } from "@/components/landing/ScrollRule";
import { track } from "@/lib/analytics";
import { SITE_URL } from "@/config/site";
import ogImage from "@/assets/metodo-3d-900.webp";

const TITLE = "Método Reconexión | Guía práctica de 7 fases para parejas distanciadas";
const DESC =
  "eBook de 53 páginas con 7 fases, ejercicios, guiones de conversación y un plan de 90 días para parejas que dejaron de entenderse. Pago único de US$ 6,99, acceso inmediato y garantía de 7 días. No sustituye atención psicológica.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "product" },
      { property: "og:url", content: SITE_URL },
      { property: "og:image", content: `${SITE_URL}${ogImage}` },
      { name: "twitter:image", content: `${SITE_URL}${ogImage}` },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: SITE_URL }],
  }),
  component: Landing,
});

function Landing() {
  useEffect(() => {
    track("view_page");
    const seen = new Set<string>();
    const onScroll = () => {
      const p = (window.scrollY + window.innerHeight) / document.documentElement.scrollHeight;
      if (p >= 0.5 && !seen.has("50")) {
        seen.add("50");
        track("scroll_50");
      }
      if (p >= 0.75 && !seen.has("75")) {
        seen.add("75");
        track("scroll_75");
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <ScrollRule />
      <UrgencyBar />
      <Header />
      <main>
        <Hero />
        <ProblemSection />
        <MethodSection />
        <AuthorSection />
        <TestimonialsSection />
        <NinetyDaySection />
        <OnePersonSection />
        <OfferSection />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <MobileStickyCTA />
    </>
  );
}
