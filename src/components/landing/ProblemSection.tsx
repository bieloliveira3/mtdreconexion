import { Section } from "./shared";

const items = [
  "Discutimos siempre por lo mismo.",
  "Ya casi no hablamos de verdad.",
  "Vivimos juntos, pero nos sentimos lejos.",
  "Cualquier conversación difícil termina mal.",
  "La intimidad ya no es como antes.",
  "Siento que soy el único/a intentando arreglarlo.",
];

export function ProblemSection() {
  return (
    <Section tone="surface">
      <h2 className="max-w-2xl font-display text-[1.75rem] leading-tight sm:text-[2.3rem]">
        ¿Te está pasando algo de esto?
      </h2>
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((t) => (
          <p
            key={t}
            className="rounded-xl border border-border bg-card px-5 py-5 text-[0.95rem] leading-relaxed text-foreground shadow-soft"
          >
            “{t}”
          </p>
        ))}
      </div>
      <p className="mt-10 max-w-2xl font-display text-[1.25rem] leading-snug text-primary-dark sm:text-[1.5rem]">
        Tal vez el problema no es que ya no exista amor. Tal vez habéis perdido la forma de
        conectar.
      </p>
    </Section>
  );
}
