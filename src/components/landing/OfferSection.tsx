import { useEffect, useState } from "react";
import { BookMockup, CTA, Section } from "./shared";
import page1 from "@/assets/ebook-page-1.jpg.asset.json";
import page2 from "@/assets/ebook-page-2.jpg.asset.json";
import page3 from "@/assets/ebook-page-3.jpg.asset.json";
import ebookMockup from "@/assets/ebook-mockup-editorial.jpg.asset.json";
import {
  COUNTDOWN_DURATION,
  COUNTDOWN_ENABLED,
  GUARANTEE_ENABLED,
  GUARANTEE_TEXT,
  OLD_PRICE,
  PRICE,
  PRODUCT_NAME,
  PRODUCT_SUBTITLE,
} from "@/config/site";


const DISCOUNT = "-53%";

const includes = [
  "eBook digital completo",
  "Método de 7 fases",
  "Ejercicios prácticos",
  "Herramientas de conversación",
  "Plan de 90 días",
];

export function OfferSection() {
  return (
    <Section id="oferta" tone="dark">
      <div className="text-center">
        <span className="eyebrow inline-block rounded-full border border-gold/40 px-4 py-1.5 text-gold">
          Acceso digital inmediato
        </span>
        <h2 className="mt-6 font-display text-[1.9rem] leading-tight text-background sm:text-[2.5rem]">
          Empieza hoy tu proceso de Reconexión
        </h2>
        <div className="mx-auto mt-6 inline-flex flex-col items-center gap-2 rounded-2xl border border-gold/30 bg-gold/10 px-6 py-4">
          <span className="eyebrow text-gold">
            Oferta por tiempo limitado • {DISCOUNT} de descuento
          </span>
          {COUNTDOWN_ENABLED ? <OfferCountdown /> : null}
        </div>
      </div>

      <div className="mx-auto mt-8 flex w-fit max-w-full flex-col items-center gap-2 rounded-3xl border border-dashed border-gold/45 bg-gold/10 px-8 py-5 text-center sm:flex-row sm:gap-6">
        <span className="font-display text-[3.2rem] leading-none text-gold sm:text-[4.5rem]">
          {DISCOUNT}
        </span>
        <div className="flex flex-col items-center sm:items-start">
          <span className="text-[1.1rem] font-semibold text-background sm:text-[1.25rem]">
            DE DESCUENTO HOY
          </span>
          <span className="text-[0.95rem] text-background/80">
            Ahorras US$ 8,00 en tu inscripción
          </span>
        </div>
      </div>

      <div className="mt-12 grid items-center gap-10 rounded-2xl bg-background/5 p-6 sm:p-10 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="flex justify-center">
          <BookMockup />
        </div>
        <div>
          <h3 className="font-display text-[1.6rem] text-background">{PRODUCT_NAME}</h3>
          <p className="mt-2 text-[0.95rem] leading-relaxed text-background/70">
            {PRODUCT_SUBTITLE}
          </p>

          <p className="eyebrow mt-7 text-gold">Incluye</p>
          <ul className="mt-3 grid gap-2 text-[0.95rem] text-background/85">
            {includes.map((i) => (
              <li key={i}>✓ {i}</li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap items-end gap-3">
            <span className="text-background/60 line-through">{OLD_PRICE}</span>
            <span className="font-display text-[2.6rem] leading-none text-gold">{PRICE}</span>
            <span className="rounded-full bg-gold px-4 py-1.5 text-[0.95rem] font-semibold text-primary-dark">
              {DISCOUNT} HOY
            </span>
          </div>
          <p className="mt-2 text-[0.85rem] text-background/70">
            Pago único. No es una suscripción.
          </p>
          <p className="mt-1 text-[0.75rem] text-background/55">
            En la pantalla de pago se mostrará convertido a tu moneda local.
          </p>
          <p className="mt-1 text-[0.9rem] font-medium text-gold">
            Ahorras US$ 8,00 comparado con el precio normal
          </p>

          <div className="mt-6">
            <CTA event="click_offer" className="w-full bg-background text-primary-dark ring-1 ring-gold/40 hover:bg-surface">
              QUIERO EL MÉTODO RECONEXIÓN →
            </CTA>
          </div>
          <p className="mt-3 text-[0.78rem] text-background/60">
            Acceso digital después de la compra.
          </p>
          {GUARANTEE_ENABLED && GUARANTEE_TEXT ? (
            <p className="mt-4 rounded-lg border border-gold/30 px-4 py-3 text-[0.85rem] text-background/80">
              {GUARANTEE_TEXT}
            </p>
          ) : null}
        </div>
      </div>

      <div className="mt-14 text-center">
        <p className="eyebrow text-gold">Mira por dentro</p>
        <h3 className="mt-3 font-display text-[1.5rem] leading-tight text-background sm:text-[1.9rem]">
          Esto es lo que recibirás al instante
        </h3>
        <PagesMarquee />
      </div>

      <div className="mt-16 grid items-center gap-10 rounded-2xl border border-background/10 bg-background/[0.03] p-6 sm:p-10 lg:grid-cols-[1fr_1fr]">
        <div className="flex justify-center">
          <img
            src={ebookMockup.url}
            alt="Mockup editorial del eBook Método Reconexión en libro, tablet y celular"
            loading="lazy"
            draggable={false}
            className="w-full max-w-md rounded-xl object-contain shadow-soft"
          />
        </div>
        <div className="text-center lg:text-left">
          <p className="eyebrow text-gold">Tu guía completa</p>
          <h3 className="mt-3 font-display text-[1.5rem] leading-tight text-background sm:text-[1.9rem]">
            Todo lo que incluye el Método Reconexión
          </h3>
          <p className="mt-4 text-[0.95rem] leading-relaxed text-background/75">
            Un material pensado para aplicar desde el primer día, con estructura clara y pasos concretos que puedes seguir en pareja.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              { value: "49", label: "Páginas de contenido práctico" },
              { value: "12", label: "Capítulos organizados paso a paso" },
              { value: "7", label: "Fases del método de reconexión" },
              { value: "90", label: "Días de plan de acompañamiento" },
              { value: "∞", label: "Acceso de por vida al eBook" },
              { value: "1", label: "Pago único, sin suscripciones" },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-xl border border-background/10 bg-background/[0.05] p-4 text-center transition-colors hover:bg-background/[0.08]"
              >
                <span className="font-display text-[2rem] leading-none text-gold">{item.value}</span>
                <p className="mt-2 text-[0.85rem] leading-snug text-background/80">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <p className="mx-auto mt-10 max-w-2xl text-center text-[0.82rem] leading-relaxed text-background/55">
        El método sintetiza herramientas y aportaciones del campo de las relaciones de pareja,
        incluyendo trabajos asociados a John y Julie Gottman, Sue Johnson y Marshall Rosenberg.
      </p>
    </Section>
  );
}

function pad(n: number) {
  return String(Math.max(0, n)).padStart(2, "0");
}

function OfferCountdown() {
  const [left, setLeft] = useState<number | null>(null);

  useEffect(() => {
    const deadline = Date.now() + COUNTDOWN_DURATION * 60 * 1000;
    const tick = () => setLeft(Math.max(0, deadline - Date.now()));
    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, []);

  const s = Math.floor((left ?? COUNTDOWN_DURATION * 60 * 1000) / 1000);
  const h = Math.floor(s / 3600);
  const m = Math.floor((s % 3600) / 60);
  const sec = s % 60;

  return (
    <span
      className="font-mono text-[1.15rem] tracking-[0.15em] text-gold tabular-nums"
      aria-live="off"
    >
      {pad(h)} : {pad(m)} : {pad(sec)}
    </span>
  );
}

const pages = [
  { src: page1.url, alt: "Portada del eBook Método Reconexión" },
  { src: page2.url, alt: "Capítulo 11: Cuando solo uno quiere" },
  { src: page3.url, alt: "Capítulo 12: El plan de 90 días" },
];

function PagesMarquee() {
  return (
    <div
      className="relative mt-8 overflow-hidden"
      role="region"
      aria-label="Páginas del eBook"
    >
      <div
        className="flex w-max [animation:mr-marquee_14s_linear_infinite]"
        style={{ willChange: "transform", transform: "translateZ(0)" }}
      >
        {[0, 1].map((copy) => (
          <div key={copy} className="flex shrink-0 gap-5 pr-5">
            {pages.map((p, i) => (
              <img
                key={i}
                src={p.src}
                alt={copy === 0 ? p.alt : ""}
                aria-hidden={copy === 1}
                loading="eager"
                decoding="async"
                draggable={false}
                className="h-[260px] w-auto shrink-0 rounded-xl border border-background/15 object-contain shadow-soft sm:h-[340px]"
              />
            ))}
          </div>
        ))}
      </div>

      <div className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-primary-dark to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-primary-dark to-transparent" />
    </div>
  );
}

