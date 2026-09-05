import { Section } from "./shared";

const phases = [
  [
    "01",
    "Diagnóstico",
    "Ver el ciclo real, no la pelea de anoche",
    "Mapeas la discusión que se repite y encuentras el disparador",
  ],
  [
    "02",
    "Desescalada",
    "Dejar de hacerse daño antes de intentar reparar",
    "Aprendes a frenar la pelea a tiempo y a volver después",
  ],
  [
    "03",
    "Escucha",
    "Oírlo sin empezar a armar tu defensa",
    "Practicas escuchar hasta el final, incluso cuando duele",
  ],
  [
    "04",
    "Expresión",
    "Pedir sin reproche, hablar sin herir",
    "Usas una fórmula para decir lo que necesitas sin acusar",
  ],
  [
    "05",
    "Reparación",
    "Cerrar lo que quedó abierto",
    "Trabajas las disculpas que sí funcionan y las heridas viejas",
  ],
  [
    "06",
    "Reconstrucción",
    "Volver a ser amigos y volver a desearse",
    "Recuperas amistad, intimidad, planes y rituales",
  ],
  [
    "07",
    "Mantenimiento",
    "Que no se vuelva a perder",
    "Conviertes lo nuevo en costumbre, no en un buen mes",
  ],
];

const intro = [
  "La mayoría de las parejas intenta arreglar todo al mismo tiempo. Quieren volver a tener intimidad mientras siguen gritándose. Quieren perdonar heridas viejas antes de aprender a escuchar sin defenderse. Se cansan y concluyen que ya no se puede.",
  "No es que no se pueda. Es que el orden estaba invertido.",
  "El método organiza el proceso en siete fases. Cada fase abre la puerta de la siguiente. No pasas a reparar antes de dejar de hacerte daño. No trabajas la intimidad antes de poder tener una conversación entera sin que termine mal.",
  "Estas fases no las inventé yo. Salen de investigación publicada sobre parejas: el trabajo de John y Julie Gottman sobre qué predice que una relación siga en pie, la Terapia Focalizada en las Emociones de Sue Johnson y la Comunicación No Violenta de Marshall Rosenberg. Lo que hice fue ordenarlas y convertirlas en ejercicios que se pueden hacer un martes por la noche.",
];

export function MethodSection() {
  return (
    <Section id="metodo">
      <div className="max-w-[65ch]">
        <h2 className="max-w-[24ch] font-display text-[1.625rem] leading-[1.18] font-semibold tracking-[-0.015em] sm:text-[2.25rem] sm:leading-[1.14]">
          No necesitas más consejos sueltos. Necesitas saber qué va primero.
        </h2>
        <div className="mt-4 grid gap-4 text-[1.0625rem] leading-[1.62] text-foreground">
          {intro.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      </div>

      <ol className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {phases.map(([n, title, achieves, does]) => (
          <li
            key={n}
            className="group relative rounded-2xl border border-border/70 bg-card px-5 py-5 shadow-soft transition-colors duration-300 hover:border-primary/30 sm:px-7 sm:py-7"
          >
            <span
              aria-hidden
              className="absolute top-7 left-0 h-6 w-px bg-primary/40 transition-all duration-300 group-hover:h-10"
            />
            <span className="font-display text-[1.05rem] tracking-[0.08em] text-gold-ink">{n}</span>
            <h3 className="mt-1 text-[1.125rem] leading-[1.3] font-semibold tracking-[-0.01em] text-primary-dark sm:text-[1.25rem]">
              {title}
            </h3>
            <p className="mt-2 text-[0.9375rem] leading-[1.6] text-foreground">{achieves}</p>
            <p className="mt-1.5 text-[0.9375rem] leading-[1.6] text-muted-foreground">{does}</p>
          </li>
        ))}
      </ol>

      <p className="mt-8 font-display text-[1.25rem] leading-snug text-primary-dark sm:text-[1.5rem]">
        Siete fases. En orden. Con ejercicios en cada una.
      </p>
    </Section>
  );
}
