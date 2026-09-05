import { Check, Section } from "./shared";

const items = [
  "Dejar de presionar, que es lo que más aleja cuando más miedo tienes",
  "Cambiar tu parte del ciclo, porque el ciclo necesita dos para repetirse",
  "Reaccionar distinto cuando se cierra o se va del cuarto",
  "Pedir sin reprochar, para que lo que digas se pueda escuchar",
  "Recuperar los gestos chicos, que pesan más que las conversaciones largas",
];

export function OnePersonSection() {
  return (
    <Section tone="surface">
      <div className="grid gap-8 lg:grid-cols-2 lg:gap-10">
        <div className="max-w-[65ch]">
          <h2 className="max-w-[24ch] font-display text-[1.625rem] leading-[1.18] font-semibold tracking-[-0.015em] sm:text-[2.25rem] sm:leading-[1.14]">
            ¿Y si tu pareja ni siquiera sabe que estás leyendo esto?
          </h2>
          <div className="mt-4 grid gap-4 text-[1.0625rem] leading-[1.62] text-foreground">
            <p>
              Es lo más común. La mayoría de las personas que abren este libro lo abren solas, sin
              avisarle a nadie, con el celular boca abajo por si alguien entra.
            </p>
            <p>
              Nadie te va a pedir que le muestres un PDF a alguien que no quiere hablar del tema.
            </p>
            <p>
              Hay un capítulo entero para esto. Se llama “Cuando solo uno quiere”. Trabaja lo único
              que sí está bajo tu control:
            </p>
          </div>
        </div>
        <div className="rounded-2xl border border-border bg-card p-5 shadow-soft sm:p-7">
          <ul className="grid gap-3">
            {items.map((i) => (
              <Check key={i}>{i}</Check>
            ))}
          </ul>
          <p className="mt-6 border-t border-border pt-5 text-[0.9375rem] leading-[1.6] text-muted-foreground">
            Cambiar tu parte no es cargar con toda la relación ni darle la razón. Es dejar de
            alimentar el ciclo y ver qué pasa del otro lado. A veces cambia. A veces no. Pero al
            menos deja de estar en tus manos y en tu cabeza todo el día.
          </p>
        </div>
      </div>
    </Section>
  );
}
