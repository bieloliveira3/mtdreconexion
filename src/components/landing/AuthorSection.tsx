import { Section, Eyebrow } from "./shared";
import { AUTHOR_NAME, AUTHOR_ROLE } from "@/config/site";
import renata400 from "@/assets/renata-400.webp";
import renata800 from "@/assets/renata-800.webp";

/**
 * Autoridade sem credencial clinica: a pagina nunca dizia quem estava por
 * tras, e o livro afirma duas vezes que nao e terapia. O bloco apresenta
 * quem organizou o metodo e reforca o proprio disclaimer, que e o que
 * separa a oferta de quem promete milagre.
 */
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
          <h2 className="mt-3 font-display text-[1.75rem] leading-tight sm:text-[2.3rem]">
            {AUTHOR_NAME}
          </h2>
          <p className="mt-1 text-[0.85rem] text-muted-foreground">{AUTHOR_ROLE}</p>

          <div className="mt-6 space-y-4 text-[0.98rem] leading-relaxed text-foreground">
            <p>
              Este libro no es terapia y yo no soy terapeuta. Soy quien reunió, ordenó y
              puso a prueba este método.
            </p>
            <p>
              Durante años leí todo lo que encontré sobre por qué dos personas que se
              quieren dejan de entenderse: la investigación de John y Julie Gottman sobre
              qué predice que una pareja siga junta, la Terapia Focalizada en las Emociones
              de Sue Johnson y la Comunicación No Violenta de Marshall Rosenberg. Encontré
              mucha teoría buena y casi nada que una pareja pudiera aplicar un martes por
              la noche.
            </p>
            <p>
              Método Reconexión es la parte aplicable: siete fases y ejercicios que caben
              en veinte minutos.
            </p>
            <p className="border-l-2 border-gold pl-4 text-muted-foreground">
              Si tu relación necesita acompañamiento profesional, búscalo. Esto no lo
              sustituye — pero puede ser el primer paso.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
