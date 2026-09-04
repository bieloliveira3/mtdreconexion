import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Section } from "./shared";
import { track } from "@/lib/analytics";

const faqs = [
  [
    "¿Necesito que mi pareja participe?",
    "Puedes comenzar trabajando tu propia parte. El método incluye herramientas que pueden trabajarse individualmente, aunque una relación siempre implica a dos personas.",
  ],
  [
    "¿Cuánto tiempo necesito dedicarle?",
    "Muchos ejercicios están diseñados para realizarse en menos de veinte minutos. El plan de 90 días organiza el proceso progresivamente.",
  ],
  [
    "¿Sirve si estamos atravesando una crisis?",
    "Puede ayudarte a comprender patrones y trabajar la comunicación y la conexión. Algunas situaciones requieren apoyo profesional.",
  ],
  [
    "¿Es terapia de pareja?",
    "No. Es un material educativo y práctico. No sustituye atención psicológica profesional.",
  ],
  [
    "¿Cómo recibo el eBook?",
    "Después de completar la compra recibirás las instrucciones de acceso digital.",
  ],
];

export function FAQ() {
  return (
    <Section id="faq">
      <h2 className="font-display text-[1.75rem] leading-tight sm:text-[2.3rem]">
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
            <AccordionTrigger className="text-left font-display text-[1.05rem]">{q}</AccordionTrigger>
            <AccordionContent className="text-[0.95rem] leading-relaxed text-muted-foreground">
              {a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </Section>
  );
}
