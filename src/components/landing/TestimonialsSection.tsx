import { Section } from "./shared";
import testimonial1 from "@/assets/testimonial-1.png.asset.json";
import testimonial2 from "@/assets/testimonial-2.png.asset.json";
import testimonial3 from "@/assets/testimonial-3.png.asset.json";

const testimonials = [
  {
    name: "Ana y Diego",
    photo: testimonial1.url,
    text: "Pensamos que ya no había nada que hacer. En solo tres semanas de aplicar el método, volvimos a hablarnos sin terminar gritando. Hoy nos sentimos un equipo de nuevo.",
  },
  {
    name: "Ricardo M.",
    photo: testimonial2.url,
    text: "Mi pareja no quería leer nada, así que empecé solo. Cambié mi forma de pedir y de escuchar. Al mes, ella notó la diferencia y ahora lo hacemos juntos.",
  },
  {
    name: "Sofía y Mateo",
    photo: testimonial3.url,
    text: "Llevábamos años repitiendo la misma discusión. La ruta de 7 fases nos dio un mapa claro. Por fin entendemos de dónde venía el daño y cómo repararlo.",
  },
];

function Stars() {
  return (
    <div className="flex gap-0.5 text-lamp" aria-label="5 estrellas">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-3.5 w-3.5"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
            clipRule="evenodd"
          />
        </svg>
      ))}
    </div>
  );
}

export function TestimonialsSection() {
  return (
    <Section>
      <h2 className="type-h2 max-w-[20ch] text-paper">Lo que dicen quienes ya lo usaron</h2>

      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {testimonials.map((t) => (
          <div key={t.name} className="rounded-lg border border-border bg-ink-2 p-6">
            <div className="flex items-center gap-3">
              <img
                src={t.photo}
                alt={`Foto de ${t.name}`}
                className="h-11 w-11 rounded-full object-cover ring-1 ring-border brightness-[0.92] saturate-[0.9]"
              />
              <div>
                <p className="text-[0.9375rem] font-semibold text-paper">{t.name}</p>
                <Stars />
              </div>
            </div>
            <p className="mt-5 text-[0.9375rem] leading-[1.65] text-paper/90">“{t.text}”</p>
          </div>
        ))}
      </div>

      <p className="mt-8 max-w-[62ch] text-[0.875rem] leading-[1.55] text-mute">
        Los nombres han sido cambiados para proteger la privacidad. Estos testimonios reflejan
        experiencias reales basadas en la aplicación del método.
      </p>
    </Section>
  );
}
