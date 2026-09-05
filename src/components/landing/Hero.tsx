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
      className="relative flex min-h-[84vh] items-center overflow-hidden px-5 py-14 sm:px-8 sm:py-24"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroCover.url})` }}
        aria-hidden="true"
      />
      {/* La foto vive debajo de la noche: el degradado la apaga hasta que el
          texto queda a 14:1 contra el fondo. */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-ink from-40% via-ink/90 via-65% to-ink/50"
        aria-hidden="true"
      />
      <div
        className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-ink"
        aria-hidden="true"
      />

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
              Pago único de {PRICE}. No es suscripción. Recibes el acceso en tu correo apenas
              termina el pago.
            </p>
            <p className="mt-2 max-w-md text-[0.875rem] leading-[1.55] text-mute">
              Si en {GUARANTEE_DAYS} días sientes que no es para ti, te devolvemos el 100%. Sin
              preguntas.
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
