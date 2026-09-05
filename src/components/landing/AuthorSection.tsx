import { Section, Eyebrow } from "./shared";
import { AUTHOR_NAME, AUTHOR_ROLE } from "@/config/site";
import renata400 from "@/assets/renata-400.webp";
import renata800 from "@/assets/renata-800.webp";

/**
 * Autoridade sem credencial clinica: quem escreveu isso aparece logo depois
 * do mecanismo, e o proprio texto comeca negando a credencial — e o que
 * separa a oferta de quem promete milagre.
 */
const body = [
  "Empiezo por lo que no soy, porque me parece lo más honesto que puedo decirte: no soy terapeuta, no soy psicóloga, no atiendo a nadie. Este libro no es terapia.",
  "Lo que sí soy es alguien que pasó años leyendo todo lo que encontró sobre por qué dos personas que se quieren dejan de entenderse. La investigación de John y Julie Gottman sobre qué predice que una pareja siga junta. La Terapia Focalizada en las Emociones, de Sue Johnson. La Comunicación No Violenta, de Marshall Rosenberg.",
  "Encontré teoría excelente. Y casi nada que una pareja cansada, con hijos dormidos en el cuarto de al lado y veinte minutos libres, pudiera usar esa misma noche.",
  "Método Reconexión es esa parte. La aplicable. Siete fases, ejercicios cortos y palabras concretas para decir en voz alta.",
];

export function AuthorSection() {
  return (
    <Section id="autora" tone="surface">
      <div className="grid items-center gap-9 md:grid-cols-[0.8fr_1.2fr] md:gap-12">
        <div className="mx-auto w-full max-w-[280px] md:mx-0">
          <img
            src={renata400}
            srcSet={`${renata400} 400w, ${renata800} 800w`}
            sizes="(min-width: 768px) 280px, 240px"
            alt={`${AUTHOR_NAME}, quien reunió y ordenó el Método Reconexión`}
            width={400}
            height={500}
            loading="lazy"
            decoding="async"
            className="w-full rounded-2xl object-cover shadow-soft ring-1 ring-border"
          />
        </div>

        <div>
          <Eyebrow>Quién está detrás</Eyebrow>
          <h2 className="mt-3 font-display text-[1.625rem] leading-[1.18] font-semibold tracking-[-0.015em] sm:text-[2.25rem] sm:leading-[1.14]">
            {AUTHOR_NAME}
          </h2>
          <p className="mt-1 text-[0.8125rem] text-muted-foreground">{AUTHOR_ROLE}</p>

          <div className="mt-6 grid max-w-[65ch] gap-4 text-[1.0625rem] leading-[1.62] text-foreground">
            {body.map((p) => (
              <p key={p}>{p}</p>
            ))}
            <p className="border-l-2 border-gold-ink pl-4 text-muted-foreground">
              Lo digo dos veces dentro del libro y lo repito acá: si tu relación necesita
              acompañamiento profesional, búscalo. Esto no lo reemplaza. Para muchas personas es lo
              que se puede hacer hoy, con lo que hay hoy. A veces es el primer paso.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
