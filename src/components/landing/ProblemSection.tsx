import { Section } from "./shared";

const body = [
  "Pasa despacio. Tan despacio que no se nota.",
  "Primero es una discusión por los platos que en realidad no era por los platos. Después es responder “nada” cuando te preguntan qué te pasa, porque explicarlo va a costar más caro que callarse.",
  "Después es el celular. Los dos en la cama, cada uno con su pantalla, dándose la espalda sin haberlo decidido. Dormir a treinta centímetros de la persona que amas y sentirte más solo que cuando estabas solo de verdad.",
  "Después es medir cada frase antes de decirla. Buscar el momento, el tono, la palabra exacta, y aun así ver cómo se le endurece la cara y saber que otra vez se dañó la noche.",
  "Y llega el día en que ves una foto de hace cuatro años. Los dos riéndose de algo que ya nadie recuerda. Y te quedas mirándola pensando: en qué momento pasó esto. Cuál fue el día. Porque no hubo un día.",
  "Lo más pesado no es pelear. Es intentarlo solo. Proponer un plan y que lo acepte sin ganas. Buscarlo y que se voltee. Sentir que tú estás haciendo fuerza para los dos y que del otro lado hay alguien que ya se resignó.",
  "Esto no se queda quieto. El silencio que hoy dura una tarde el año pasado duraba una hora. Es la misma distancia, y cada mes ocupa un poco más de espacio.",
];

const quotes = [
  "Discutimos siempre por lo mismo y nunca se resuelve.",
  "Vivimos juntos y me siento solo.",
  "Ya no sé qué decirle sin que se convierta en pelea.",
  "Me acuerdo de cómo éramos y no sé dónde se perdió.",
  "Siento que soy el único que está intentando.",
  "Tengo miedo de que esto ya no tenga arreglo.",
];

export function ProblemSection() {
  return (
    <Section tone="surface">
      <h2 className="max-w-[24ch] font-display text-[1.625rem] leading-[1.18] font-semibold tracking-[-0.015em] sm:text-[2.25rem] sm:leading-[1.14]">
        Nadie se aleja de un día para otro
      </h2>

      <div className="mt-4 grid max-w-[65ch] gap-4 text-[1.0625rem] leading-[1.62] text-foreground">
        {body.map((p) => (
          <p key={p}>{p}</p>
        ))}
      </div>

      <p className="mt-8 max-w-[65ch] font-display text-[1.25rem] leading-snug text-primary-dark sm:text-[1.5rem]">
        Si te reconociste en algo de esto, no es que se les haya acabado el amor. Es que nadie les
        enseñó cómo salir de acá.
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {quotes.map((t) => (
          <p
            key={t}
            className="rounded-xl border border-border bg-card px-5 py-5 text-[0.9375rem] leading-[1.6] text-foreground shadow-soft"
          >
            “{t}”
          </p>
        ))}
      </div>
    </Section>
  );
}
