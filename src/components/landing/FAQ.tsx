import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Section } from "./shared";
import { track } from "@/lib/analytics";
import { GUARANTEE_DAYS, PRICE, SUPPORT_EMAIL } from "@/config/site";

const faqs = [
  [
    "Mi pareja no va a leer esto. ¿Igual me sirve?",
    "Sí, y es el caso más común. La mayoría empieza sola. Hay un capítulo completo, “Cuando solo uno quiere”, dedicado a trabajar tu parte del ciclo sin presionar a nadie ni pedirle que lea nada. No es lo mismo que hacerlo entre dos y no te voy a decir que lo es. Pero el ciclo necesita dos para repetirse, y tú eres uno de los dos.",
  ],
  [
    "Ya intentamos de todo y nada funcionó. ¿Por qué esto sería distinto?",
    "Probablemente intentaron cosas sueltas y en desorden: hablar más, un viaje, prometer cambios. Lo que casi nadie intenta es un orden. Trabajar la desescalada antes de la reparación, y la reparación antes de la intimidad. Cuando el orden está invertido, los intentos fracasan aunque las intenciones sean buenas. Eso es lo que cambia acá. No te garantizo que funcione. Te garantizo que es distinto de lo que ya probaron.",
  ],
  [
    "¿Esto es terapia de pareja?",
    "No, y quiero ser clara. Es un material educativo y práctico. Renata Ramírez no es terapeuta ni psicóloga. El libro lo dice dos veces adentro: no sustituye atención psicológica profesional. Si pueden ir a terapia, vayan. Esto es lo que sí se puede empezar hoy, en casa, por siete dólares.",
  ],
  [
    "¿Y si no funciona?",
    `Puede pasar. Ninguna guía puede prometerte un resultado, porque el resultado depende de dos personas, de su historia y de cuánto lo trabajen. Lo que sí controlo es tu riesgo: tienes ${GUARANTEE_DAYS} días para leerlo completo y decidir. Si no es para ti, escribes un correo y te devolvemos los ${PRICE} completos, sin preguntas.`,
  ],
  [
    "¿Es una suscripción? ¿Me van a cobrar otra vez?",
    `No. Es un pago único de ${PRICE}. No hay renovación, no hay mensualidad, no hay cargo escondido. Pagas una vez y el eBook es tuyo para siempre.`,
  ],
  [
    "¿Cuánto tiempo tengo que dedicarle?",
    "Leerlo completo toma una tarde. Aplicarlo es otra cosa: la mayoría de los ejercicios están hechos para veinte minutos o menos, porque están pensados para gente cansada. El plan de 90 días reparte todo en tres meses para que no tengas que hacer nada heroico en un solo día.",
  ],
  [
    "¿Cómo lo recibo?",
    `Apenas se aprueba el pago te llega un correo con el acceso. Se abre en el celular, la tablet o la computadora. No hay envío físico ni espera. Si el correo no aparece, revisa spam o escribe a ${SUPPORT_EMAIL} y lo resolvemos.`,
  ],
  [
    "¿Sirve si estamos en crisis, hablando de separarnos?",
    "Puede ayudarte a ver el ciclo con claridad y a trabajar la comunicación, que suele ser lo que se rompe primero. No es un salvavidas ni te va a devolver a nadie. Y si hay violencia, amenazas o miedo en la relación, esto no es lo indicado: lee la nota de seguridad más abajo y busca ayuda profesional.",
  ],
  [
    "¿Aparece algo raro en mi extracto bancario?",
    "El cobro aparece a nombre de Hotmart, la plataforma que procesa el pago. No dice el nombre del producto.",
  ],
];

export function FAQ() {
  return (
    <Section id="faq">
      <h2 className="font-display text-[1.625rem] leading-[1.18] font-semibold tracking-[-0.015em] sm:text-[2.25rem] sm:leading-[1.14]">
        Preguntas frecuentes
      </h2>
      <Accordion
        type="single"
        collapsible
        className="mt-8"
        onValueChange={(v) => v && track("faq_open", { question: v })}
      >
        {faqs.map(([q, a], i) => (
          <AccordionItem key={q} value={`item-${i}`}>
            <AccordionTrigger className="min-h-12 text-left text-[1.125rem] leading-[1.3] font-semibold tracking-[-0.01em]">
              {q}
            </AccordionTrigger>
            <AccordionContent className="text-[0.9375rem] leading-[1.6] text-muted-foreground">
              {a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </Section>
  );
}
