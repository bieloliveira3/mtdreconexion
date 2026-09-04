import { BookMockup, CTA, Section } from "./shared";
import page1 from "@/assets/ebook-page-1.jpg.asset.json";
import page2 from "@/assets/ebook-page-2.jpg.asset.json";
import page3 from "@/assets/ebook-page-3.jpg.asset.json";
import reconexionCompletaPack from "@/assets/reconexion-completa-pack.jpg.asset.json";
import toolboxCover from "@/assets/caja-herramientas-cover.jpg.asset.json";
import toolboxPage1 from "@/assets/caja-herramientas-page-1.jpg.asset.json";
import toolboxPage2 from "@/assets/caja-herramientas-page-2.jpg.asset.json";
import {
  FULL_BUNDLE_CHECKOUT_URL,
  FULL_BUNDLE_DISCOUNT,
  FULL_BUNDLE_OLD_PRICE,
  FULL_BUNDLE_PRICE,
  FULL_BUNDLE_PRICE_COP,
  METHOD_CHECKOUT_URL,
  METHOD_DISCOUNT,
  METHOD_PRICE,
  METHOD_PRICE_COP,
  OLD_PRICE,
  TOOLBOX_PRICE,
} from "@/config/site";




const includes = [
  "eBook digital completo",
  "Método de 7 fases",
  "Ejercicios prácticos",
  "Herramientas de conversación",
  "Plan de 90 días",
];

export function OfferSection() {
  return (
    <Section id="oferta" tone="dark" className="pb-28 sm:pb-32">
      <div className="text-center">
        <span className="eyebrow inline-block rounded-full border border-gold/40 px-4 py-1.5 text-gold">
          Acceso digital inmediato
        </span>
        <h2 className="mt-6 font-display text-[1.9rem] leading-tight text-background sm:text-[2.5rem]">
          Empieza hoy tu proceso de Reconexión
        </h2>
        <div className="mx-auto mt-6 inline-flex flex-col items-center gap-2 rounded-2xl border border-gold/30 bg-gold/10 px-6 py-4">
          <span className="eyebrow text-gold">Precio especial por poco tiempo</span>
        </div>
      </div>

      <OfferChoice />

      <div className="mt-10 text-center">
        <p className="eyebrow text-gold">Mira por dentro</p>
        <PagesMarquee />
        <ToolboxMarquee />
      </div>

      <p className="mx-auto mt-8 max-w-2xl text-center text-[0.82rem] leading-relaxed text-background/55">
        El método sintetiza herramientas y aportaciones del campo de las relaciones de pareja,
        incluyendo trabajos asociados a John y Julie Gottman, Sue Johnson y Marshall Rosenberg.
      </p>
    </Section>
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

const toolboxPages = [
  { src: toolboxCover.url, alt: "Portada de la Caja de Herramientas de Reconexión" },
  { src: toolboxPage1.url, alt: "Cómo usar esta caja de herramientas" },
  { src: toolboxPage2.url, alt: "Guiones y situaciones prácticas para reconectar" },
];

function ToolboxMarquee() {
  return (
    <div
      className="relative mt-6 overflow-hidden"
      role="region"
      aria-label="Páginas de la Caja de Herramientas"
    >
      <div
        className="flex w-max [animation:mr-marquee_14s_linear_infinite]"
        style={{ willChange: "transform", transform: "translateZ(0)" }}
      >
        {[0, 1].map((copy) => (
          <div key={copy} className="flex shrink-0 gap-4 pr-4">
            {toolboxPages.map((p, i) => (
              <img
                key={i}
                src={p.src}
                alt={copy === 0 ? p.alt : ""}
                aria-hidden={copy === 1}
                loading="eager"
                decoding="async"
                draggable={false}
                className="h-[200px] w-auto shrink-0 rounded-xl border border-background/15 object-contain shadow-soft sm:h-[260px]"
              />
            ))}
          </div>
        ))}
      </div>

      <div className="pointer-events-none absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-primary-dark to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-primary-dark to-transparent" />
    </div>
  );
}


function OfferChoice() {
  return (
    <div className="mt-14">
      <div className="text-center">
        <p className="eyebrow text-gold">Elige cómo quieres empezar</p>
        <p className="mx-auto mt-3 max-w-2xl text-[0.95rem] leading-relaxed text-background/70">
          El Método es tu mapa para entender y reconstruir la conexión. La Caja de Herramientas
          reúne recursos prácticos para llevarlo a la acción.
        </p>
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        {/* Card 1 — Método Reconexión */}
        <div className="relative flex flex-col rounded-2xl border border-background/15 bg-background/[0.04] p-6 sm:p-8 lg:flex-row lg:items-stretch lg:gap-6">
          <div className="flex shrink-0 items-center justify-center lg:w-[180px] lg:items-start">
            <BookMockup size="sm" />
          </div>
          <div className="mt-5 flex flex-1 flex-col lg:mt-0">
            <h3 className="font-display text-[1.5rem] text-background">MÉTODO RECONEXIÓN</h3>
            <ul className="mt-4 grid gap-1.5 text-[0.9rem] text-background/85">
              {includes.map((i) => (
                <li key={i}>✓ {i}</li>
              ))}
            </ul>
            <div className="mt-auto pt-6">
              <div className="flex flex-wrap items-end gap-3">
                <span className="text-background/55 line-through">{OLD_PRICE}</span>
                <span className="font-display text-[2.3rem] leading-none text-gold">
                  {METHOD_PRICE}
                </span>
                <span className="mb-1.5 rounded-md bg-cta px-2 py-0.5 text-[0.75rem] font-semibold text-cta-foreground">
                  {METHOD_DISCOUNT}
                </span>
              </div>
              <p className="mt-1 font-display text-[1.05rem] leading-none text-gold/90">
                {METHOD_PRICE_COP}
              </p>
              <p className="mt-2 text-[0.8rem] text-background/60">
                Pago único. No es una suscripción.
              </p>
              <p className="mt-1 text-[0.72rem] text-background/50">
                En la pantalla de pago se mostrará convertido a tu moneda local.
              </p>
              <div className="mt-5">
                <CTA
                  event="click_offer"
                  href={METHOD_CHECKOUT_URL}
                  className="w-full bg-background text-primary-dark ring-1 ring-gold/40 hover:bg-surface"
                >
                  QUIERO EL MÉTODO RECONEXIÓN →
                </CTA>
              </div>
            </div>
          </div>
        </div>

        {/* Card 2 — Reconexión Completa */}
        <div className="relative flex flex-col rounded-2xl border border-gold/45 bg-background/[0.07] p-6 sm:p-8 lg:flex-row lg:items-stretch lg:gap-6">
          <span className="absolute -top-3 left-6 rounded-full border border-gold/50 bg-primary-dark px-3 py-1 text-[0.68rem] font-semibold tracking-[0.14em] text-gold">
            RECOMENDADA
          </span>
          <div className="flex shrink-0 items-center justify-center lg:w-[200px] lg:items-start">
            <img
              src={reconexionCompletaPack.url}
              alt="Pack Dúo: Método Reconexión + Caja de Herramientas de Reconexión"
              loading="eager"
              decoding="async"
              draggable={false}
              className="w-full max-w-[220px] rounded-xl object-contain shadow-soft sm:max-w-[260px] lg:max-w-full"
            />
          </div>
          <div className="mt-5 flex flex-1 flex-col lg:mt-0">
            <h3 className="font-display text-[1.5rem] text-background">RECONEXIÓN COMPLETA</h3>
            <p className="mt-2 text-[0.9rem] leading-relaxed text-background/70">
              Método Reconexión + Caja de Herramientas
            </p>
            <ul className="mt-4 grid gap-1.5 text-[0.88rem] text-background/85 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              <li>✓ Todo el Método Reconexión</li>
              <li>✓ Caja de Herramientas de Reconexión</li>
              <li>✓ 30 preguntas para volver a conversar</li>
              <li>✓ 20 mensajes para conversas difíciles</li>
              <li>✓ Guión de pedido de disculpas</li>
              <li>✓ Guión para expresar necesidades</li>
              <li>✓ Ejercicios rápidos solo/a</li>
              <li>✓ Ejercicios para hacer en pareja</li>
              <li>✓ Qué decir cuando tu pareja se cierra</li>
              <li>✓ Qué hacer después de una discusión</li>
              <li>✓ Checklist semanal de reconexión</li>
              <li>✓ Calendario de 30 días de acciones</li>
            </ul>
            <div className="mt-auto pt-6">
              <div className="flex flex-wrap items-end gap-3">
                <span className="text-background/55 line-through">{FULL_BUNDLE_OLD_PRICE}</span>
                <span className="font-display text-[2.6rem] leading-none text-gold">
                  {FULL_BUNDLE_PRICE}
                </span>
                <span className="mb-1.5 rounded-md bg-cta px-2 py-0.5 text-[0.75rem] font-semibold text-cta-foreground">
                  {FULL_BUNDLE_DISCOUNT}
                </span>
              </div>
              <p className="mt-1 font-display text-[1.1rem] leading-none text-gold/90">
                {FULL_BUNDLE_PRICE_COP}
              </p>
              <p className="mt-2 text-[0.8rem] text-background/65">
                Método {METHOD_PRICE} + Caja de Herramientas {TOOLBOX_PRICE}. Pago único.
              </p>
              <p className="mt-1 text-[0.72rem] text-background/50">
                En la pantalla de pago se mostrará convertido a tu moneda local.
              </p>
              <div className="mt-5">
                {FULL_BUNDLE_CHECKOUT_URL ? (
                  <CTA
                    event="click_offer"
                    href={FULL_BUNDLE_CHECKOUT_URL}
                    className="w-full bg-background text-primary-dark ring-1 ring-gold/40 hover:bg-surface"
                  >
                    QUIERO LA RECONEXIÓN COMPLETA →
                  </CTA>
                ) : (
                  <>
                    <span
                      aria-disabled="true"
                      className="inline-flex w-full cursor-not-allowed items-center justify-center rounded-xl border border-background/25 bg-background/10 px-8 py-4 text-center text-[0.95rem] font-semibold tracking-wide text-background/60"
                    >
                      QUIERO LA RECONEXIÓN COMPLETA →
                    </span>
                    <p className="mt-2 text-[0.72rem] text-background/50">
                      [PENDIENTE: enlace de checkout de Reconexión Completa]
                    </p>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
