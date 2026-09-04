import { BookMockup, CTA } from "./shared";
import { OLD_PRICE, PRICE } from "@/config/site";
import heroCouple from "@/assets/hero-couple.jpg";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden px-5 pt-12 pb-16 sm:px-8 sm:pt-16">
      <div className="mx-auto grid w-full max-w-5xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="rise">
          <p className="eyebrow text-primary">Guía práctica • 7 fases • Plan de 90 días</p>
          <h1 className="mt-5 font-display text-[2rem] leading-[1.12] text-foreground sm:text-[2.9rem]">
            ¿Sientes que todavía hay amor… pero ya no saben cómo volver a encontrarse?
          </h1>
          <p className="mt-5 max-w-xl text-[1rem] leading-relaxed text-muted-foreground">
            Descubre una ruta práctica para dejar de repetir las mismas discusiones, volver a hablar
            sin hacerse daño y empezar a reconstruir la conexión.
          </p>

          <div className="mt-8 rounded-2xl border border-border bg-card p-6 shadow-soft">
            <div className="flex flex-wrap items-end gap-3">
              <span className="text-[1rem] text-muted-foreground line-through">{OLD_PRICE}</span>
              <span className="font-display text-[2.4rem] leading-none text-primary">{PRICE}</span>
            </div>
            <p className="mt-2 text-[0.85rem] text-muted-foreground">
              Pago único • Acceso digital inmediato
            </p>
            <div className="mt-5">
              <CTA event="click_offer" className="w-full">
                QUIERO EMPEZAR MI RECONEXIÓN →
              </CTA>
            </div>
            <p className="mt-3 text-center text-[0.78rem] text-muted-foreground">
              Acceso digital inmediato. No es una suscripción.
            </p>
          </div>

          <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-[0.85rem] text-muted-foreground">
            <li>✓ 7 fases prácticas</li>
            <li>✓ Ejercicios y herramientas de conversación</li>
            <li>✓ Plan de 90 días</li>
          </ul>
        </div>

        <div className="relative flex justify-center">
          <img
            src={heroCouple}
            width={1200}
            height={1408}
            alt="Pareja sentada conversando con calma en casa"
            className="hidden aspect-[4/5] w-full rounded-2xl object-cover shadow-soft lg:block"
          />
          <div className="lg:absolute lg:-bottom-10 lg:-left-16 lg:scale-90">
            <BookMockup />
          </div>

        </div>
      </div>
    </section>
  );
}
