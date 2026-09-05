import { Section } from "./shared";

const phases = [
  ["01", "Diagnóstico", "Ver con precisión qué está pasando."],
  ["02", "Desescalada", "Dejar de hacerse daño antes de intentar reparar."],
  ["03", "Escucha", "Aprender a escuchar sin entrar inmediatamente en defensa."],
  ["04", "Expresión", "Pedir sin atacar. Hablar sin herir."],
  ["05", "Reparación", "Reconstruir después de las heridas."],
  ["06", "Reconstrucción", "Amistad, deseo, proyectos y rituales de conexión."],
  ["07", "Mantenimiento", "Convertir los nuevos hábitos en una forma de vivir."],
];

export function MethodSection() {
  return (
    <Section id="metodo">
      <div className="max-w-2xl">
        <h2 className="font-display text-[1.75rem] leading-tight sm:text-[2.3rem]">
          No necesitas más consejos sueltos. Necesitas un mapa.
        </h2>
        <p className="mt-4 text-[1rem] leading-relaxed text-muted-foreground">
          Método Reconexión organiza el proceso en 7 fases para que sepas qué trabajar y en qué
          orden.
        </p>
      </div>

      <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {phases.map(([n, title, desc]) => (
          <li
            key={n}
            className="group relative rounded-2xl border border-border/70 bg-card px-6 py-7 shadow-soft transition-colors duration-300 hover:border-primary/30"
          >
            <span
              aria-hidden
              className="absolute top-7 left-0 h-6 w-px bg-primary/40 transition-all duration-300 group-hover:h-10"
            />
            <span className="font-display text-[1.05rem] tracking-[0.08em] text-gold-ink">{n}</span>
            <h3 className="mt-2 text-[0.78rem] font-semibold tracking-[0.16em] text-primary uppercase">
              {title}
            </h3>
            <p className="mt-3 text-[0.92rem] leading-relaxed text-muted-foreground">{desc}</p>
          </li>
        ))}
        <li className="hidden rounded-2xl border border-border/70 bg-surface px-6 py-7 lg:block">
          <p className="font-display text-[1.15rem] leading-snug text-primary-dark">
            La mayoría de las parejas no se rompen por falta de amor, sino por falta de método.
          </p>
        </li>
      </ol>
    </Section>
  );
}
