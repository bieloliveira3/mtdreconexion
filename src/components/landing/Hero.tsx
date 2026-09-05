import { BookMockup, CTA } from "./shared";
import { GUARANTEE_DAYS, PRICE } from "@/config/site";
import heroCover from "@/assets/hero-cover-new.jpg.asset.json";

const bullets = [
  "7 fases en orden, para saber qué hacer primero y qué dejar para después",
  "Ejercicios y guiones de conversación que caben en veinte minutos",
  "Un plan de 90 días para no intentar arreglarlo todo en una sola noche",
];

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[84vh] items-center overflow-hidden px-5 py-12 sm:px-8 sm:py-20"
    >
      {/* Imagem de capa em tamanho apresentativo */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroCover.url})` }}
        aria-hidden="true"
      />
      {/* Overlay escuro para garantir legibilidade */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-[#2E2422]/94 via-[#2E2422]/78 to-[#2E2422]/45"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto grid w-full max-w-5xl items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rise max-w-2xl">
          <p className="eyebrow text-background/85">Guía práctica · 7 fases · Plan de 90 días</p>
          <h1 className="mt-4 max-w-[20ch] font-display text-[2rem] leading-[1.12] font-semibold tracking-[-0.02em] text-background sm:text-[3.25rem] sm:leading-[1.06]">
            Se quieren. Duermen en la misma cama. Y hace meses que no se dicen nada de verdad.
          </h1>
          <p className="mt-5 max-w-xl text-[1.0625rem] leading-[1.55] text-background/85 sm:text-[1.25rem]">
            Método Reconexión es una guía práctica de 53 páginas. Siete fases, ejercicios cortos y
            guiones de conversación para salir del ciclo de siempre y volver a entenderse. No es
            terapia y no promete milagros. Es un método para trabajar, paso por paso.
          </p>

          <ul className="mt-6 grid max-w-xl gap-2 text-[0.9375rem] leading-[1.6] text-background/85">
            {bullets.map((b) => (
              <li key={b} className="flex items-start gap-2.5">
                <span aria-hidden className="mt-[2px] shrink-0 text-gold">
                  ✓
                </span>
                <span>{b}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8">
            <CTA event="click_offer" className="ring-1 ring-gold/35">
              Quiero empezar el método →
            </CTA>
            <p className="mt-3 max-w-md text-[0.8125rem] leading-[1.5] text-background/85">
              Pago único de {PRICE}. No es suscripción. Recibes el acceso en tu correo apenas
              termina el pago.
            </p>
            <p className="mt-2 max-w-md text-[0.8125rem] leading-[1.5] text-background/85">
              Si en {GUARANTEE_DAYS} días sientes que no es para ti, te devolvemos el 100%. Sin
              preguntas.
            </p>
          </div>
        </div>

        <div className="relative hidden justify-center lg:flex">
          <div className="relative">
            <BookMockup />
          </div>
        </div>
      </div>
    </section>
  );
}
