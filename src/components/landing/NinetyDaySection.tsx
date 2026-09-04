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
    <Section id="plan">
      <div className="max-w-2xl">
        <h2 className="font-display text-[1.75rem] leading-tight sm:text-[2.3rem]">
          ¿Y si dejaras de intentar arreglarlo todo de una vez?
        </h2>
        <p className="mt-4 text-[1rem] leading-relaxed text-muted-foreground">
          El método convierte las herramientas en un proceso práctico de 90 días.
        </p>
      </div>
      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {months.map(([m, title, desc]) => (
          <div key={m} className="rounded-2xl border border-border bg-card p-7 shadow-soft">
            <p className="eyebrow text-gold">{m}</p>
            <h3 className="mt-3 font-display text-[1.35rem] text-primary-dark">{title}</h3>
            <p className="mt-3 text-[0.92rem] leading-relaxed text-muted-foreground">{desc}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
