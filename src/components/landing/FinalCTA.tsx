import { CTA, Section } from "./shared";

export function FinalCTA() {
  return (
    <Section tone="surface" className="text-center">
      <h2 className="mx-auto max-w-2xl font-display text-[1.9rem] leading-tight sm:text-[2.4rem]">
        Tal vez no necesitas volver al principio.
      </h2>
      <p className="mx-auto mt-4 max-w-xl text-[1rem] leading-relaxed text-muted-foreground">
        Tal vez necesitas aprender a encontrarse de una manera diferente.
      </p>
      <p className="mx-auto mt-8 max-w-md font-display text-[1.1rem] leading-[2] text-primary-dark">
        Una conversación.
        <br />
        Una pausa.
        <br />
        Una petición.
        <br />
        Una reparación.
        <br />
        Un pequeño paso cada día.
      </p>
      <div className="mt-10">
        <CTA event="click_offer">QUIERO EMPEZAR MI RECONEXIÓN →</CTA>
        <p className="mt-3 text-[0.8rem] text-muted-foreground">Acceso digital inmediato</p>
      </div>
    </Section>
  );
}
