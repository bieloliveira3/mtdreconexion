import { useEffect, useRef } from "react";

/**
 * La firma de la página.
 *
 * Dos líneas verticales de 1px fijas en el margen izquierdo, separadas por
 * 22px al principio. El progreso de scroll hasta la sección de oferta cierra
 * la distancia: cuando la persona llega a comprar, las dos líneas ya son una
 * sola, en ámbar.
 *
 * La posición se escribe en una custom property (--rule-p) dentro de un
 * requestAnimationFrame; el CSS hace el resto. Sin librería, sin transición:
 * la línea sigue el dedo, no lo persigue.
 *
 * Desaparece por debajo de 640px, donde no hay margen para ella, y con
 * prefers-reduced-motion queda dibujada de una vez como línea única.
 */
export function ScrollRule() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.style.setProperty("--rule-p", "1");
      return;
    }

    let frame = 0;

    /*
     * La distancia se recalcula en cada cuadro. Medirla una sola vez al
     * montar daba un valor tomado antes de que la hoja de estilos aplicara,
     * con la página diez veces más larga de lo que termina siendo.
     */
    const update = () => {
      frame = 0;
      const offer = document.getElementById("oferta");
      const y = window.scrollY;
      const end = offer
        ? Math.max(1, y + offer.getBoundingClientRect().top - window.innerHeight * 0.6)
        : Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      const p = Math.min(1, Math.max(0, y / end));
      el.style.setProperty("--rule-p", p.toFixed(4));
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    window.addEventListener("load", onScroll);

    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      window.removeEventListener("load", onScroll);
    };
  }, []);

  return (
    <div ref={ref} aria-hidden className="scroll-rule hidden sm:block">
      <span className="scroll-rule-line scroll-rule-line-a" />
      <span className="scroll-rule-line scroll-rule-line-b" />
    </div>
  );
}
