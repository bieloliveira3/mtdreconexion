import { Section } from "./shared";

/**
 * Cuatro párrafos, no siete. Se conservan los concretos —los platos, los
 * treinta centímetros, el silencio que dura una tarde— y cae lo que solo
 * repetía el tono.
 */
const body = [
  "Primero es una discusión por los platos que en realidad no era por los platos. Después es responder “nada” cuando te preguntan qué te pasa, porque explicarlo va a costar más caro que callarse.",
  "Después es el celular. Los dos en la cama, cada uno con su pantalla, dándose la espalda sin haberlo decidido. Dormir a treinta centímetros de la persona que amas y sentirte más solo que cuando estabas solo de verdad.",
  "Lo más pesado no es pelear. Es intentarlo solo. Proponer un plan y que lo acepte sin ganas. Buscarlo y que se voltee. Sentir que tú estás haciendo fuerza para los dos y que del otro lado hay alguien que ya se resignó.",
  "Esto no se queda quieto. El silencio que hoy dura una tarde el año pasado duraba una hora. Es la misma distancia, y cada mes ocupa un poco más de espacio.",
];

const quotes = [
  "Discutimos siempre por lo mismo y nunca se resuelve.",
  "Vivimos juntos y me siento solo.",
  "Siento que soy el único que está intentando.",
  "Tengo miedo de que esto ya no tenga arreglo.",
];

export function ProblemSection() {
  return (
    <Section tone="surface">
      <h2 className="type-h2 max-w-[20ch] text-paper">Nadie se aleja de un día para otro</h2>

      <div className="type-body mt-6 grid max-w-[62ch] gap-5 text-paper/90">
        {body.map((p) => (
          <p key={p}>{p}</p>
        ))}
      </div>

      <p className="type-h3 mt-10 max-w-[42ch] border-l border-lamp pl-5 text-paper">
        Si te reconociste en algo de esto, no es que se les haya acabado el amor. Es que nadie les
        enseñó cómo salir de acá.
      </p>

      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        {quotes.map((t) => (
          <p
            key={t}
            className="rounded-lg border border-border px-6 py-5 text-[0.9375rem] leading-[1.6] text-mute"
          >
            “{t}”
          </p>
        ))}
      </div>
    </Section>
  );
}
