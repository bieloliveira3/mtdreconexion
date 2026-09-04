import { Section } from "./shared";

const months = [
  [
    "Mes 1",
    "Parar el daño",
    "Identificar el ciclo, reducir la escalada y recuperar pequeños gestos de conexión.",
  ],
  ["Mes 2", "Volver a hablarse", "Aprender nuevas formas de escuchar, pedir y reparar."],
  [
    "Mes 3",
    "Reconstruir",
    "Trabajar amistad, intimidad, conflictos repetidos y proyectos compartidos.",
  ],
];

export function NinetyDaySection() {
  return (
    <Section id="plan" tone="surface">
      <div className="max-w-2xl">
        <h2 className="font-display text-[1.75rem] leading-tight sm:text-[2.3rem]">
          ¿Y si dejaras de intentar arreglarlo todo de una vez?
        </h2>
        <p className="mt-4 text-[1rem] leading-relaxed text-muted-foreground">
          El método convierte las herramientas en un proceso práctico de 90 días.
        </p>
      </div>
      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {months.map(([m, title, desc], i) => (
          <div
            key={m}
            className="relative overflow-hidden rounded-2xl border border-border/70 bg-card p-7 shadow-soft"
          >
            <span aria-hidden className="absolute inset-x-0 top-0 h-[2px] bg-gold/50" />
            <div className="flex items-baseline gap-3">
              <span className="font-display text-[2rem] leading-none text-primary/25">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="eyebrow text-primary">{m}</p>
            </div>
            <h3 className="mt-4 font-display text-[1.4rem] text-primary-dark">{title}</h3>
            <p className="mt-3 text-[0.94rem] leading-relaxed text-muted-foreground">{desc}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
