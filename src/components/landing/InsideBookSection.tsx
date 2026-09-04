import { BookMockup, CTA, Check, Section } from "./shared";

const items = [
  "eBook digital completo",
  "Método de 7 fases",
  "Ejercicios prácticos",
  "Herramientas para conversaciones difíciles",
  "Técnicas de desescalada",
  "Fórmula para pedir sin reprochar",
  "Herramientas para reparar heridas",
  "Reconstrucción de amistad e intimidad",
  "Estrategias para conflictos repetidos",
  "Qué hacer cuando solo uno quiere cambiar",
  "Plan práctico de 90 días",
];

export function InsideBookSection() {
  return (
    <Section id="incluye" tone="surface">
      <div className="grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="flex justify-center">
          <BookMockup size="md" />
        </div>
        <div>
          <h2 className="font-display text-[1.75rem] leading-tight sm:text-[2.3rem]">
            No es solo un libro para leer. Es una guía para trabajar.
          </h2>
          <ul className="mt-7 grid gap-3 sm:grid-cols-2">
            {items.map((i) => (
              <Check key={i}>{i}</Check>
            ))}
          </ul>
          <div className="mt-8">
            <CTA>QUIERO VER EL MÉTODO →</CTA>
          </div>
        </div>
      </div>
    </Section>
  );
}
