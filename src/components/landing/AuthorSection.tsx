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
      <div className="grid items-start gap-10 md:grid-cols-[0.8fr_1.2fr] md:gap-14">
        {/*
          La foto es un rectángulo con fondo de estudio gris claro: suelta
          sobre --ink flotaría como un bloque encendido. Va con filete en
          --ink-3, saturación bajada y un velo inferior hacia --ink para que
          se apoye en la página en vez de recortarse contra ella.
        */}
        <div className="relative mx-auto w-full max-w-[280px] overflow-hidden rounded-lg ring-1 ring-border md:mx-0">
          <img
            src={renata400}
            srcSet={`${renata400} 400w, ${renata800} 800w`}
            sizes="(min-width: 768px) 280px, 240px"
            alt={`${AUTHOR_NAME}, quien reunió y ordenó el Método Reconexión`}
            width={400}
            height={500}
            loading="lazy"
            decoding="async"
            className="w-full object-cover brightness-[0.88] contrast-[1.02] saturate-[0.85]"
          />
          <div
            aria-hidden
            className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-b from-transparent to-ink-2"
          />
        </div>

        <div>
          <Eyebrow>Quién está detrás</Eyebrow>
          <h2 className="type-h2 mt-4 text-paper">{AUTHOR_NAME}</h2>
          <p className="mt-2 text-[0.875rem] text-mute">{AUTHOR_ROLE}</p>

          <div className="type-body mt-7 grid max-w-[62ch] gap-5 text-paper/90">
            {body.map((p) => (
              <p key={p}>{p}</p>
            ))}
            <p className="border-l border-lamp pl-5 text-[0.9375rem] leading-[1.6] text-mute">
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
