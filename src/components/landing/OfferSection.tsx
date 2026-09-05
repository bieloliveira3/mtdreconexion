import { useEffect, useRef } from "react";
import { BookMockup, CTA, Section } from "./shared";
import { GuaranteeBadge } from "./GuaranteeBadge";
import { trackViewContent } from "@/lib/meta-pixel";
import { METHOD_CHECKOUT_URL, METHOD_PRICE, METHOD_PRICE_COP } from "@/config/site";

const includes = [
  "eBook digital completo, 53 páginas, en español",
  "El método de 7 fases explicado paso por paso",
  "Ejercicios prácticos en cada fase, la mayoría de veinte minutos o menos",
  "Guiones de conversación para los temas que siempre terminan mal",
  "Técnicas de desescalada para frenar la pelea antes de que se salga de control",
  "La fórmula para pedir algo sin que suene a reproche",
  "Qué hacer con las heridas que quedaron sin cerrar",
  "Cómo recuperar la amistad y la intimidad, en ese orden",
  "Qué hacer con el conflicto que se repite hace años",
  "Un capítulo entero para cuando solo uno de los dos quiere intentarlo",
  "El plan de 90 días, mes por mes",
  "Acceso inmediato. Lo lees en el celular, la tablet o la computadora",
  "Es tuyo para siempre. Sin suscripción, sin renovación",
];

export function OfferSection() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          trackViewContent({ content_name: "Oferta Método Reconexión" });
          io.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Section id="oferta" tone="dark" className="pb-44 sm:pb-48">
      <div ref={ref} aria-hidden className="h-px w-full" />

      <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:gap-12">
        <div className="flex flex-col items-center gap-6">
          <BookMockup size="md" />
          <GuaranteeBadge variant="full" onDark className="w-full" />
        </div>

        <div>
          <p className="eyebrow text-background/85">Acceso digital inmediato</p>
          <h2 className="mt-3 max-w-[24ch] font-display text-[1.625rem] leading-[1.18] font-semibold tracking-[-0.015em] text-background sm:text-[2.25rem] sm:leading-[1.14]">
            Empieza hoy, por menos de lo que gastan en una salida
          </h2>

          <div className="mt-4 grid max-w-[65ch] gap-4 text-[1.0625rem] leading-[1.62] text-background/85">
            <p>
              Una sesión de terapia de pareja en tu ciudad cuesta entre 40 y 120 dólares. La
              primera. Y hay que ir dos.
            </p>
            <p>
              El Método Reconexión cuesta {METHOD_PRICE}. Una sola vez. Es menos que dos cafés,
              menos que un domicilio, menos que la mitad de una entrada de cine.
            </p>
            <p>
              No te estoy diciendo que esto valga lo mismo que un profesional, porque no es lo mismo
              y ya lo dije. Te estoy diciendo que si hoy no vas a ir a terapia, esto es lo que sí
              puedes empezar esta noche.
            </p>
          </div>

          <div id="incluye" className="mt-8 scroll-mt-24">
            <h3 className="text-[1.125rem] leading-[1.3] font-semibold tracking-[-0.01em] text-background sm:text-[1.25rem]">
              Lo que recibes
            </h3>
            <ul className="mt-4 grid gap-x-6 gap-y-2 sm:grid-cols-2">
              {includes.map((i) => (
                <li
                  key={i}
                  className="flex items-start gap-2.5 text-[0.9375rem] leading-[1.6] text-background/90"
                >
                  <span aria-hidden className="mt-[2px] shrink-0 text-gold">
                    ✓
                  </span>
                  <span>{i}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 max-w-[65ch] text-[0.8125rem] leading-[1.5] text-background/75">
              Puedes leerlo sin que nadie se entere. Llega a tu correo, se abre en tu celular, y no
              aparece en ninguna parte hasta que tú decidas contarlo.
            </p>
          </div>

          <div className="mt-8 rounded-2xl border border-gold/30 bg-background/[0.06] p-6">
            <p className="font-display text-[3rem] leading-none font-semibold tracking-[-0.02em] text-gold sm:text-[3.5rem]">
              {METHOD_PRICE}
            </p>
            <p className="mt-2 font-display text-[1.25rem] leading-none font-semibold text-gold">
              Cerca de {METHOD_PRICE_COP}
            </p>
            <p className="mt-3 text-[0.8125rem] leading-[1.5] text-background/85">Pago único</p>
          </div>

          <div className="mt-6">
            <CTA
              event="click_offer"
              href={METHOD_CHECKOUT_URL}
              className="w-full bg-background text-primary-dark ring-1 ring-gold/40 hover:bg-surface focus-visible:outline-gold"
            >
              Quiero el Método Reconexión por {METHOD_PRICE} →
            </CTA>
            <GuaranteeBadge variant="inline" className="mt-2 text-background/85" />
            <p className="mt-3 text-center text-[0.8125rem] leading-[1.5] text-background/85">
              Pago procesado por Hotmart. No es suscripción, no se renueva, no se cobra nada más.
            </p>
            <p className="mt-2 text-center text-[0.8125rem] leading-[1.5] text-background/75">
              En el checkout se convierte a tu moneda local.
            </p>
          </div>
        </div>
      </div>

      <p className="mx-auto mt-10 max-w-[65ch] text-center text-[0.8125rem] leading-[1.5] text-background/75">
        El método sintetiza herramientas y aportes del campo de las relaciones de pareja, incluidos
        trabajos asociados a John y Julie Gottman, Sue Johnson y Marshall Rosenberg. No es terapia
        ni sustituye atención psicológica profesional.
      </p>
    </Section>
  );
}
