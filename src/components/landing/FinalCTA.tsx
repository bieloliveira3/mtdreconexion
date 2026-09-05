import { CTA, Section } from "./shared";
import { GUARANTEE_DAYS, PRICE } from "@/config/site";

export function FinalCTA() {
  return (
    <Section className="text-center">
      <h2 className="mx-auto max-w-[24ch] font-display text-[1.625rem] leading-[1.18] font-semibold tracking-[-0.015em] sm:text-[2.25rem] sm:leading-[1.14]">
        No hace falta volver a como eran antes
      </h2>

      <div className="mx-auto mt-4 grid max-w-[60ch] gap-4 text-[1.0625rem] leading-[1.62] text-foreground">
        <p>
          Tal vez a ese lugar ya no se puede volver, y está bien. Las personas que eran ustedes hace
          ocho años ya no existen.
        </p>
        <p>Lo que sí se puede es aprender a encontrarse otra vez, siendo quienes son hoy.</p>
      </div>

      <p className="mx-auto mt-6 max-w-md font-display text-[1.125rem] leading-[1.8] text-primary-dark">
        Una conversación que no termina mal.
        <br />
        Una pausa antes de responder.
        <br />
        Una petición sin reproche.
        <br />
        Una reparación.
        <br />
        Un paso pequeño, hoy.
      </p>

      <div className="mx-auto mt-6 grid max-w-[60ch] gap-4 text-[1.0625rem] leading-[1.62] text-foreground">
        <p>Nada de esto pasa por leer una página de ventas. Pasa por empezar.</p>
        <p>
          Y si no empiezas hoy, mañana la conversación va a ser un poco más difícil que hoy. Acá no
          se acaba ninguna oferta. Lo que se gasta es el tiempo que llevan así.
        </p>
      </div>

      <div className="mt-8">
        <CTA event="click_offer">Quiero empezar el método por {PRICE} →</CTA>
        <p className="mt-3 text-[0.8125rem] leading-[1.5] text-muted-foreground">
          Acceso inmediato · Pago único · Garantía de {GUARANTEE_DAYS} días, devolución del 100%
        </p>
      </div>
    </Section>
  );
}
