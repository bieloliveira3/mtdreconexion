import { Section } from "./shared";

const phases = [
  ["01", "Diagnóstico", "Ver el ciclo real, no la pelea de anoche"],
  ["02", "Desescalada", "Dejar de hacerse daño antes de intentar reparar"],
  ["03", "Escucha", "Oírlo sin empezar a armar tu defensa"],
  ["04", "Expresión", "Pedir sin reproche, hablar sin herir"],
  ["05", "Reparación", "Cerrar lo que quedó abierto"],
  ["06", "Reconstrucción", "Volver a ser amigos y volver a desearse"],
  ["07", "Mantenimiento", "Que no se vuelva a perder"],
];

const intro = [
  "La mayoría de las parejas intenta arreglar todo al mismo tiempo. Quieren volver a tener intimidad mientras siguen gritándose. Quieren perdonar heridas viejas antes de aprender a escuchar sin defenderse. Se cansan y concluyen que ya no se puede.",
  "No es que no se pueda. Es que el orden estaba invertido. Cada fase abre la puerta de la siguiente: no pasas a reparar antes de dejar de hacerte daño.",
];

export function MethodSection() {
  return (
    <Section id="metodo">
      <div className="max-w-[62ch]">
        <h2 className="type-h2 max-w-[22ch] text-paper">
          No necesitas más consejos sueltos. Necesitas saber qué va primero.
        </h2>
        <div className="type-body mt-6 grid gap-5 text-paper/90">
          {intro.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      </div>

      <ol className="mt-9 grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
        {phases.map(([n, title, achieves]) => (
          <li key={n} className="bg-ink-2 px-6 py-6 sm:px-7 sm:py-7">
            <span className="font-display text-[0.9375rem] tracking-[0.14em] text-lamp">{n}</span>
            <h3 className="type-h3 mt-2 text-paper">{title}</h3>
            <p className="mt-3 text-[0.9375rem] leading-[1.6] text-paper/90">{achieves}</p>
          </li>
        ))}
      </ol>

      <p className="type-h3 mt-10 text-lamp">Siete fases. En orden. Con ejercicios en cada una.</p>
    </Section>
  );
}
