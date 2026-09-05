import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { UrgencyBar } from "@/components/landing/UrgencyBar";
import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { ProblemSection } from "@/components/landing/ProblemSection";
import { GalleryCarousel } from "@/components/landing/GalleryCarousel";
import { MethodSection } from "@/components/landing/MethodSection";
import carousel1 from "@/assets/casal-briga.jpg.asset.json";
import carousel2 from "@/assets/pareja-conversando.png.asset.json";
import carousel3 from "@/assets/pareja-reconectada.png.asset.json";

const carouselImages = [
  { src: carousel1.url, alt: "Pareja distante en la cama: el silencio antes de la reconexión" },
  { src: carousel2.url, alt: "Pareja conversando con calma: escucha sin defensas" },
  { src: carousel3.url, alt: "Pareja reconectada: de la distancia al abrazo" },
];
import { InsideBookSection } from "@/components/landing/InsideBookSection";
import { AuthorSection } from "@/components/landing/AuthorSection";
import { TestimonialsSection } from "@/components/landing/TestimonialsSection";
import { NinetyDaySection } from "@/components/landing/NinetyDaySection";
import { OnePersonSection } from "@/components/landing/OnePersonSection";
import { OfferSection } from "@/components/landing/OfferSection";
import { FAQ } from "@/components/landing/FAQ";
import { SafetyNote } from "@/components/landing/SafetyNote";
import { FinalCTA } from "@/components/landing/FinalCTA";
import { Footer } from "@/components/landing/Footer";
import { MobileStickyCTA } from "@/components/landing/MobileStickyCTA";
import { track } from "@/lib/analytics";
import { SITE_URL } from "@/config/site";
import ogImage from "@/assets/metodo-3d-900.webp";

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
        <GalleryCarousel images={carouselImages} />
        <MethodSection />
        <InsideBookSection />
        <AuthorSection />
        <TestimonialsSection />
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
