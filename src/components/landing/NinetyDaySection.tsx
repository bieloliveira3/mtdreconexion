import { Section } from "./shared";

const months = [
  ["Mes 1", "Parar el daño", "Identificar el ciclo, bajar la escalada, recuperar gestos pequeños"],
  [
    "Mes 2",
    "Volver a hablarse",
    "Escuchar sin defenderse, pedir sin atacar, reparar después de una pelea",
  ],
  ["Mes 3", "Reconstruir", "Amistad, intimidad, el conflicto de siempre, planes compartidos"],
];

export function NinetyDaySection() {
  return (
    <Section id="plan">
      <div className="max-w-[65ch]">
        <h2 className="max-w-[24ch] font-display text-[1.625rem] leading-[1.18] font-semibold tracking-[-0.015em] sm:text-[2.25rem] sm:leading-[1.14]">
          Deja de intentar arreglarlo todo esta noche
        </h2>
        <div className="mt-4 grid gap-4 text-[1.0625rem] leading-[1.62] text-foreground">
          <p>
            Casi todas las reconciliaciones fracasan por exceso de ambición. Una conversación larga,
            un fin de semana intenso, promesas grandes. Y a los diez días todo vuelve a estar igual,
            con la desilusión encima.
          </p>
          <p>
            El plan de 90 días hace lo contrario. Reparte el trabajo en tres meses, con una sola
            cosa en foco a la vez.
          </p>
        </div>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-3 md:gap-5">
        {months.map(([m, title, desc], i) => (
          <div
            key={m}
            className="relative overflow-hidden rounded-2xl border border-border/70 bg-card p-5 shadow-soft sm:p-7"
          >
            <span aria-hidden className="absolute inset-x-0 top-0 h-[2px] bg-gold/50" />
            <div className="flex items-baseline gap-3">
              <span className="font-display text-[2rem] leading-none text-primary/25">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="eyebrow text-primary">{m}</p>
            </div>
            <h3 className="mt-3 text-[1.125rem] leading-[1.3] font-semibold tracking-[-0.01em] text-primary-dark sm:text-[1.25rem]">
              {title}
            </h3>
            <p className="mt-2 text-[0.9375rem] leading-[1.6] text-muted-foreground">{desc}</p>
          </div>
        ))}
      </div>

      <p className="mt-8 max-w-[65ch] text-[1.0625rem] leading-[1.62] text-foreground">
        Noventa días no es una promesa de resultado. Es el tiempo que el plan tarda en pasar por
        todo. Lo que ocurra depende de ustedes dos, de lo que carguen atrás y de cuánto lo trabajen.
        Nadie honesto puede decirte otra cosa.
      </p>
    </Section>
  );
}
