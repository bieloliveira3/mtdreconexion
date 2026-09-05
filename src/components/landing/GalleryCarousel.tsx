import { useCallback, useEffect, useRef, useState } from "react";
import { Section } from "./shared";

export type CarouselImage = { src: string; alt: string };

export function GalleryCarousel({ images }: { images: CarouselImage[] }) {
  const [index, setIndex] = useState(0);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);
  const touchStartX = useRef<number | null>(null);
  const count = images.length;

  const go = useCallback((dir: number) => setIndex((i) => (i + dir + count) % count), [count]);

  const resetAutoplay = useCallback(() => {
    if (timer.current) clearInterval(timer.current);
    timer.current = setInterval(() => go(1), 5000);
  }, [go]);

  useEffect(() => {
    resetAutoplay();
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [resetAutoplay]);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0]!.clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current == null) return;
    const dx = e.changedTouches[0]!.clientX - touchStartX.current;
    if (Math.abs(dx) > 40) {
      go(dx < 0 ? 1 : -1);
      resetAutoplay();
    }
    touchStartX.current = null;
  };

  return (
    <Section>
      <div className="text-center">
        <span className="eyebrow text-primary">El método en imágenes</span>
        <h2 className="mt-3 font-display text-[1.75rem] leading-tight sm:text-[2.3rem]">
          Un viaje de la distancia a la reconexión
        </h2>
      </div>

      <div
        className="relative mt-10 overflow-hidden rounded-2xl border border-border shadow-soft"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
        role="region"
        aria-roledescription="carrusel"
        aria-label="Galería de imágenes del método"
      >
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {images.map((img, i) => (
            <div key={i} className="w-full shrink-0" aria-hidden={i !== index}>
              <img
                src={img.src}
                alt={img.alt}
                loading={i === 0 ? "eager" : "lazy"}
                draggable={false}
                className="aspect-[16/10] w-full object-cover sm:aspect-[21/9]"
              />
            </div>
          ))}
        </div>

        <button
          type="button"
          onClick={() => {
            go(-1);
            resetAutoplay();
          }}
          aria-label="Imagen anterior"
          className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-primary-dark/60 p-2 text-background backdrop-blur transition-colors hover:bg-primary-dark/80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            className="h-5 w-5"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          type="button"
          onClick={() => {
            go(1);
            resetAutoplay();
          }}
          aria-label="Imagen siguiente"
          className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-primary-dark/60 p-2 text-background backdrop-blur transition-colors hover:bg-primary-dark/80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            className="h-5 w-5"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>

        <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-2">
          {images.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => {
                setIndex(i);
                resetAutoplay();
              }}
              aria-label={`Ir a la imagen ${i + 1}`}
              aria-current={i === index}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === index ? "w-6 bg-background" : "w-2 bg-background/50 hover:bg-background/75"
              }`}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}
