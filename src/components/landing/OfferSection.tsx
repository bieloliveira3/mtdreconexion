import { useEffect, useRef } from "react";
import { BookMockup, CTA, Section } from "./shared";
import { GuaranteeBadge } from "./GuaranteeBadge";
import { trackViewContent } from "@/lib/meta-pixel";
import { METHOD_CHECKOUT_URL, METHOD_PRICE, METHOD_PRICE_COP } from "@/config/site";

/** Siete items, no trece: lo que contiene el libro. La entrega y la ausencia
 *  de suscripción ya se dicen al lado del botón y en la barra fija. */
const includes = [
  "eBook digital completo, 53 páginas, en español",
  "El método de 7 fases explicado paso por paso",
  "Ejercicios prácticos en cada fase, la mayoría de veinte minutos o menos",
  "Guiones de conversación para los temas que siempre terminan mal",
  "Qué hacer con las heridas que quedaron sin cerrar",
  "Un capítulo entero para cuando solo uno de los dos quiere intentarlo",
  "El plan de 90 días, mes por mes",
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

      <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:gap-14">
        <div className="flex flex-col items-center gap-8 lg:sticky lg:top-24">
          <BookMockup size="md" />
          <GuaranteeBadge variant="full" className="w-full" />
        </div>

        <div>
          <h2 className="type-h2 mt-4 max-w-[22ch] text-paper">
            Empieza hoy, por menos de lo que gastan en una salida
          </h2>

          <div className="type-body mt-6 grid max-w-[62ch] gap-5 text-paper/90">
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

          <div id="incluye" className="mt-10 scroll-mt-24 border-t border-border pt-8">
            <h3 className="type-h3 text-paper">Lo que recibes</h3>
            <ul className="mt-5 grid gap-3">
              {includes.map((i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-[0.9375rem] leading-[1.6] text-paper/90"
                >
                  <span aria-hidden className="mt-[11px] h-px w-3.5 shrink-0 bg-lamp" />
                  <span>{i}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 max-w-[62ch] text-[0.875rem] leading-[1.55] text-mute">
              Puedes leerlo sin que nadie se entere. Llega a tu correo, se abre en tu celular, y no
              aparece en ninguna parte hasta que tú decidas contarlo.
            </p>
          </div>

          <div className="mt-10 border-t border-border pt-8">
            <p className="font-display text-[3rem] leading-none font-semibold tracking-[-0.02em] text-lamp sm:text-[3.5rem]">
              {METHOD_PRICE}
            </p>
            <p className="mt-3 text-[0.9375rem] text-mute">
              Cerca de {METHOD_PRICE_COP} · Pago único
            </p>
          </div>

          <div className="mt-8">
            <CTA event="click_offer" href={METHOD_CHECKOUT_URL} className="w-full">
              Quiero el Método Reconexión por {METHOD_PRICE} →
            </CTA>
            <p className="mt-3 text-center text-[0.875rem] leading-[1.55] text-mute">
              Pago procesado por Hotmart. No es suscripción, no se renueva, no se cobra nada más. En
              el checkout se convierte a tu moneda local.
            </p>
          </div>
        </div>
      </div>

      <p className="mx-auto mt-14 max-w-[62ch] text-center text-[0.875rem] leading-[1.55] text-mute">
        El método sintetiza herramientas y aportes del campo de las relaciones de pareja, incluidos
        trabajos asociados a John y Julie Gottman, Sue Johnson y Marshall Rosenberg. No es terapia
        ni sustituye atención psicológica profesional.
      </p>
    </Section>
  );
}
