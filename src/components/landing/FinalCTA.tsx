import { CTA, Section } from "./shared";
import { GUARANTEE_DAYS, PRICE } from "@/config/site";

export function FinalCTA() {
  return (
    <Section>
      <div className="max-w-[62ch]">
        <h2 className="type-h2 max-w-[22ch] text-paper">No hace falta volver a como eran antes</h2>

        <div className="type-body mt-6 grid gap-5 text-paper/90">
          <p>
            Tal vez a ese lugar ya no se puede volver, y está bien. Las personas que eran ustedes
            hace ocho años ya no existen.
          </p>
          <p>Lo que sí se puede es aprender a encontrarse otra vez, siendo quienes son hoy.</p>
        </div>

        {/* Tres líneas, no cinco. */}
        <p className="type-h3 mt-10 border-l border-lamp pl-5 text-paper">
          Una conversación que no termina mal.
          <br />
          Una petición sin reproche.
          <br />
          Un paso pequeño, hoy.
        </p>

        <div className="type-body mt-10 grid gap-5 text-paper/90">
          <p>Nada de esto pasa por leer una página de ventas. Pasa por empezar.</p>
          <p>
            Y si no empiezas hoy, mañana la conversación va a ser un poco más difícil que hoy. Acá
            no se acaba ninguna oferta. Lo que se gasta es el tiempo que llevan así.
          </p>
        </div>

        <div className="mt-10">
          <CTA event="click_offer">Quiero empezar el método por {PRICE} →</CTA>
          <p className="mt-4 text-[0.875rem] leading-[1.55] text-mute">
            Acceso inmediato · Pago único · Garantía de {GUARANTEE_DAYS} días, devolución del 100%
          </p>
        </div>
      </div>
    </Section>
  );
}
