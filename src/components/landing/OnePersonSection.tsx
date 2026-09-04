import { Check, Section } from "./shared";

const items = [
  "Dejar de presionar",
  "Trabajar tus propias reacciones",
  "Romper patrones repetidos",
  "Aprender a pedir sin atacar",
  "Recuperar pequeños gestos de conexión",
];

export function OnePersonSection() {
  return (
    <Section tone="surface">
      <div className="grid gap-10 lg:grid-cols-2">
        <div>
          <h2 className="font-display text-[1.75rem] leading-tight sm:text-[2.3rem]">
            ¿Y si mi pareja no quiere hacerlo conmigo?
          </h2>
          <p className="mt-4 text-[1rem] leading-relaxed text-muted-foreground">
            No necesitas esperar a que la otra persona empiece para trabajar tu parte.
          </p>
        </div>
        <div className="rounded-2xl border border-border bg-card p-7 shadow-soft">
          <ul className="grid gap-3">
            {items.map((i) => (
              <Check key={i}>{i}</Check>
            ))}
          </ul>
          <p className="mt-6 border-t border-border pt-5 text-[0.92rem] leading-relaxed text-muted-foreground">
            Cambiar tu parte no significa cargar con toda la relación. Significa descubrir qué
            puedes cambiar tú y observar qué ocurre después.
          </p>
        </div>
      </div>
    </Section>
  );
}
