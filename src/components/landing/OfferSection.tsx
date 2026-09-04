import { useEffect, useRef, useState } from "react";
import { BookMockup, CTA, Section } from "./shared";
import {
  COUNTDOWN_DURATION,
  COUNTDOWN_ENABLED,
  EBOOK_VIDEO_POSTER_URL,
  EBOOK_VIDEO_URL,
  GUARANTEE_ENABLED,
  GUARANTEE_TEXT,
  OLD_PRICE,
  PRICE,
  PRODUCT_NAME,
  PRODUCT_SUBTITLE,
} from "@/config/site";

const DISCOUNT = "-72%";

const includes = [
  "eBook digital completo",
  "Método de 7 fases",
  "Ejercicios prácticos",
  "Herramientas de conversación",
  "Plan de 90 días",
];

export function OfferSection() {
  return (
    <Section id="oferta" tone="dark">
      <div className="text-center">
        <span className="eyebrow inline-block rounded-full border border-gold/40 px-4 py-1.5 text-gold">
          Acceso digital inmediato
        </span>
        <h2 className="mt-6 font-display text-[1.9rem] leading-tight text-background sm:text-[2.5rem]">
          Empieza hoy tu proceso de Reconexión
        </h2>
        <div className="mx-auto mt-6 inline-flex flex-col items-center gap-2 rounded-2xl border border-gold/30 bg-gold/10 px-6 py-4">
          <span className="eyebrow text-gold">
            Oferta por tiempo limitado • {DISCOUNT} de descuento
          </span>
          {COUNTDOWN_ENABLED ? <OfferCountdown /> : null}
        </div>
      </div>

      <div className="mt-12 grid items-center gap-10 rounded-2xl bg-background/5 p-6 sm:p-10 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="flex justify-center">
          <BookMockup />
        </div>
        <div>
          <h3 className="font-display text-[1.6rem] text-background">{PRODUCT_NAME}</h3>
          <p className="mt-2 text-[0.95rem] leading-relaxed text-background/70">
            {PRODUCT_SUBTITLE}
          </p>

          <p className="eyebrow mt-7 text-gold">Incluye</p>
          <ul className="mt-3 grid gap-2 text-[0.95rem] text-background/85">
            {includes.map((i) => (
              <li key={i}>✓ {i}</li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap items-end gap-3">
            <span className="text-background/60 line-through">{OLD_PRICE}</span>
            <span className="font-display text-[2.6rem] leading-none text-cta">{PRICE}</span>
          </div>
          <p className="mt-2 text-[0.85rem] text-background/70">
            Pago único. No es una suscripción.
          </p>

          <div className="mt-6">
            <CTA event="click_offer" className="w-full">
              QUIERO EL MÉTODO RECONEXIÓN →
            </CTA>
          </div>
          <p className="mt-3 text-[0.78rem] text-background/60">
            Acceso digital después de la compra.
          </p>
          {GUARANTEE_ENABLED && GUARANTEE_TEXT ? (
            <p className="mt-4 rounded-lg border border-gold/30 px-4 py-3 text-[0.85rem] text-background/80">
              {GUARANTEE_TEXT}
            </p>
          ) : null}
        </div>
      </div>

      {EBOOK_VIDEO_URL ? (
        <div className="mt-14 text-center">
          <p className="eyebrow text-gold">Mira por dentro</p>
          <h3 className="mt-3 font-display text-[1.5rem] leading-tight text-background sm:text-[1.9rem]">
            Esto es lo que recibirás al instante
          </h3>
          <div className="mx-auto mt-8 w-full max-w-[280px] sm:max-w-[320px]">
            <div className="rounded-[2.2rem] border border-background/20 bg-background/5 p-2 shadow-soft">
              <div className="relative overflow-hidden rounded-[1.8rem] bg-primary-dark">
                <VideoPlayer
                  src={EBOOK_VIDEO_URL}
                  poster={EBOOK_VIDEO_POSTER_URL}
                />
              </div>
            </div>
          </div>
        </div>
      ) : null}

      <p className="mx-auto mt-10 max-w-2xl text-center text-[0.82rem] leading-relaxed text-background/55">
        El método sintetiza herramientas y aportaciones del campo de las relaciones de pareja,
        incluyendo trabajos asociados a John y Julie Gottman, Sue Johnson y Marshall Rosenberg.
      </p>
    </Section>
  );
}

function VideoPlayer({ src, poster }: { src: string; poster: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = async () => {
    const video = videoRef.current;
    if (!video) return;

    try {
      if (video.paused) {
        await video.play();
        setIsPlaying(true);
      } else {
        video.pause();
        setIsPlaying(false);
      }
    } catch {
      setIsPlaying(false);
    }
  };

  const handleEnded = () => setIsPlaying(false);

  return (
    <button
      type="button"
      onClick={togglePlay}
      onContextMenu={(e) => e.preventDefault()}
      className="group relative block aspect-[9/16] w-full cursor-pointer focus:outline-none"
      aria-label={isPlaying ? "Pausar video" : "Reproducir video"}
    >
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        muted
        playsInline
        preload="metadata"
        controlsList="nodownload"
        onEnded={handleEnded}
        className="pointer-events-none h-full w-full object-cover"
      >
        Tu navegador no puede reproducir este video.
      </video>

      {!isPlaying && (
        <span className="absolute inset-0 flex items-center justify-center bg-primary-dark/30 transition-colors group-hover:bg-primary-dark/40">
          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-background/90 text-primary shadow-lg backdrop-blur-sm transition-transform group-hover:scale-105">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-6 w-6"
              aria-hidden="true"
            >
              <path d="M8 5v14l11-7L8 5z" />
            </svg>
          </span>
        </span>
      )}
    </button>
  );
}
