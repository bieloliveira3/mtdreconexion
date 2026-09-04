import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { UrgencyBar } from "@/components/landing/UrgencyBar";
import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { ProblemSection } from "@/components/landing/ProblemSection";
import { MethodSection } from "@/components/landing/MethodSection";
import { InsideBookSection } from "@/components/landing/InsideBookSection";
import { NinetyDaySection } from "@/components/landing/NinetyDaySection";
import { OnePersonSection } from "@/components/landing/OnePersonSection";
import { OfferSection } from "@/components/landing/OfferSection";
import { FAQ } from "@/components/landing/FAQ";
import { SafetyNote } from "@/components/landing/SafetyNote";
import { FinalCTA } from "@/components/landing/FinalCTA";
import { Footer } from "@/components/landing/Footer";
import { MobileStickyCTA } from "@/components/landing/MobileStickyCTA";
import { track } from "@/lib/analytics";

const TITLE = "Método Reconexión | Guía práctica para reconstruir tu relación";
const DESC =
  "Descubre una guía práctica de 7 fases con ejercicios, herramientas de conversación y un plan de 90 días para trabajar la conexión en pareja.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "product" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Landing,
});

function Landing() {
  useEffect(() => {
    track("view_page");
    const seen = new Set<string>();
    const onScroll = () => {
      const p =
        (window.scrollY + window.innerHeight) / document.documentElement.scrollHeight;
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
      <UrgencyBar />
      <Header />
      <main>
        <Hero />
        <ProblemSection />
        <MethodSection />
        <InsideBookSection />
        <NinetyDaySection />
        <OnePersonSection />
        <OfferSection />
        <FAQ />
        <SafetyNote />
        <FinalCTA />
      </main>
      <Footer />
      <MobileStickyCTA />
    </>
  );
}
