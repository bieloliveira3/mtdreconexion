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
    <Section id="plan" tone="surface">
      <div className="max-w-[62ch]">
        <h2 className="type-h2 max-w-[22ch] text-paper">
          Deja de intentar arreglarlo todo esta noche
        </h2>
        <div className="type-body mt-6 grid gap-5 text-paper/90">
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

      <div className="mt-12 grid gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-3">
        {months.map(([m, title, desc]) => (
          <div key={m} className="bg-ink px-6 py-7 sm:px-7">
            <p className="eyebrow text-lamp">{m}</p>
            <h3 className="type-h3 mt-3 text-paper">{title}</h3>
            <p className="mt-3 text-[0.9375rem] leading-[1.6] text-mute">{desc}</p>
          </div>
        ))}
      </div>

      <p className="mt-10 max-w-[62ch] text-[0.9375rem] leading-[1.65] text-mute">
        Noventa días no es una promesa de resultado. Es el tiempo que el plan tarda en pasar por
        todo. Lo que ocurra depende de ustedes dos, de lo que carguen atrás y de cuánto lo trabajen.
        Nadie honesto puede decirte otra cosa.
      </p>
    </Section>
  );
}
