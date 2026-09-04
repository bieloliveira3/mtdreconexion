import { BookMockup, CTA } from "./shared";
import { OLD_PRICE, PRICE } from "@/config/site";
import heroCover from "@/assets/hero-cover-new.jpg.asset.json";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[88vh] items-center overflow-hidden px-5 py-16 sm:px-8 sm:py-20"
    >
      {/* Imagem de capa em tamanho apresentativo */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroCover.url})` }}
        aria-hidden="true"
      />
      {/* Overlay escuro para garantir legibilidade */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-[#1a1a1d]/92 via-[#1a1a1d]/75 to-[#1a1a1d]/55"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto grid w-full max-w-5xl items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rise max-w-2xl">
          <p className="eyebrow text-gold">Guía práctica • 7 fases • Plan de 90 días</p>
          <h1 className="mt-5 font-display text-[2.1rem] leading-[1.1] text-background sm:text-[3rem] lg:text-[3.4rem]">
            ¿Sientes que todavía hay amor… pero ya no saben cómo volver a encontrarse?
          </h1>
          <p className="mt-5 max-w-xl text-[1.05rem] leading-relaxed text-background/85">
            Descubre una ruta práctica para dejar de repetir las mismas discusiones, volver a hablar
            sin hacerse daño y empezar a reconstruir la conexión.
          </p>

          <div className="mt-8 rounded-2xl border border-background/15 bg-background/10 p-6 shadow-soft backdrop-blur-md">
            <div className="flex flex-wrap items-end gap-3">
              <span className="text-[1rem] text-background/70 line-through">{OLD_PRICE}</span>
              <span className="font-display text-[2.5rem] leading-none text-cta">{PRICE}</span>
            </div>
            <p className="mt-2 text-[0.85rem] text-background/75">
              Pago único • Acceso digital inmediato
            </p>
            <div className="mt-5">
              <CTA event="click_offer" className="w-full">
                QUIERO EMPEZAR MI RECONEXIÓN →
              </CTA>
            </div>
            <p className="mt-3 text-center text-[0.78rem] text-background/65">
              Acceso digital inmediato. No es una suscripción.
            </p>
          </div>

          <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-[0.85rem] text-background/80">
            <li>✓ 7 fases prácticas</li>
            <li>✓ Ejercicios y herramientas de conversación</li>
            <li>✓ Plan de 90 días</li>
          </ul>
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
