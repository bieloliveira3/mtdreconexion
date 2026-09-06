import { BookMockup, CTA } from "./shared";
import { GUARANTEE_DAYS, PRICE } from "@/config/site";

const bullets = [
  "7 fases en orden, para saber qué hacer primero y qué dejar para después",
  "Ejercicios y guiones de conversación que caben en veinte minutos",
  "Un plan de 90 días para no intentar arreglarlo todo en una sola noche",
];

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[78vh] items-center px-5 py-16 sm:px-8 sm:py-24"
    >
      <div className="relative z-10 mx-auto grid w-full max-w-5xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="max-w-2xl">
          <p className="eyebrow text-lamp">Guía práctica · 7 fases · Plan de 90 días</p>
          <h1 className="type-h1 mt-5 max-w-[18ch] text-paper">
            Se quieren. Duermen en la misma cama. Y hace meses que no se dicen nada de verdad.
          </h1>
          <p className="type-body mt-6 max-w-xl text-paper/90">
            Método Reconexión es una guía práctica de 53 páginas. Siete fases, ejercicios cortos y
            guiones de conversación para salir del ciclo de siempre y volver a entenderse. No es
            terapia y no promete milagros. Es un método para trabajar, paso por paso.
          </p>

          <ul className="mt-7 grid max-w-xl gap-2.5 text-[0.9375rem] leading-[1.6] text-paper/90">
            {bullets.map((b) => (
              <li key={b} className="flex items-start gap-3">
                <span aria-hidden className="mt-[11px] h-px w-3.5 shrink-0 bg-lamp" />
                <span>{b}</span>
              </li>
            ))}
          </ul>

          <div className="mt-9">
            <CTA event="click_offer">Quiero empezar el método →</CTA>
            <p className="mt-4 max-w-md text-[0.875rem] leading-[1.55] text-mute">
              Pago único de {PRICE}. Garantía de {GUARANTEE_DAYS} días: si no es para ti, te
              devolvemos el 100%.
            </p>
          </div>
        </div>

        <div className="relative hidden justify-center lg:flex">
          <BookMockup />
        </div>
      </div>
    </section>
  );
}
