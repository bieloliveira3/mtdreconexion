import { cn } from "@/lib/utils";
import { CHECKOUT_URL, PRODUCT_NAME, PRODUCT_SUBTITLE } from "@/config/site";
import { track, type AnalyticsEvent } from "@/lib/analytics";
import { withAttribution, trackInitiateCheckout } from "@/lib/meta-pixel";
import metodo3d600 from "@/assets/metodo-3d-600.webp";
import metodo3d900 from "@/assets/metodo-3d-900.webp";
import caja3d600 from "@/assets/caja-3d-600.webp";
import caja3d900 from "@/assets/caja-3d-900.webp";

/**
 * El botón de compra. Es el único lugar de la página donde aparece --ember;
 * el texto va en --ink porque blanco sobre ember da 4.01:1 y no pasa AA,
 * mientras que ink sobre ember da 4.50:1. El hover aclara en vez de oscurecer
 * por la misma razón.
 */
export function CTA({
  children,
  event = "click_cta",
  className,
  size = "lg",
  href = CHECKOUT_URL,
}: {
  children: React.ReactNode;
  event?: AnalyticsEvent;
  className?: string;
  size?: "sm" | "lg";
  href?: string;
}) {
  return (
    <a
      href={href}
      onClick={(e) => {
        track(event);
        track("checkout_click");
        trackInitiateCheckout({ content_name: PRODUCT_NAME });
        // a origem vai junto para o checkout: sem isso a Hotmart nao sabe
        // qual anuncio gerou a venda
        e.currentTarget.href = withAttribution(href);
      }}
      className={cn(
        "inline-flex w-full items-center justify-center rounded-lg bg-cta text-center font-semibold text-cta-foreground transition-colors duration-200 hover:bg-cta-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring sm:w-auto",
        size === "lg" ? "px-8 py-4 text-[1.0625rem]" : "px-5 py-2.5 text-[0.9375rem]",
        className,
      )}
    >
      {children}
    </a>
  );
}

export function Section({
  id,
  children,
  tone = "base",
  className,
}: {
  id?: string;
  children: React.ReactNode;
  tone?: "base" | "surface" | "dark";
  className?: string;
}) {
  return (
    <section
      id={id}
      className={cn(
        "scroll-mt-20 px-5 py-16 sm:px-8 sm:py-24",
        tone === "surface" && "bg-surface",
        tone === "dark" && "border-y border-border bg-ink",
        className,
      )}
    >
      <div className="mx-auto w-full max-w-5xl">{children}</div>
    </section>
  );
}

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return <p className="eyebrow text-lamp">{children}</p>;
}

/** Mockup 3D do eBook (WebP com transparencia), responsivo. */
export function BookMockup({
  size = "lg",
  book = "metodo",
}: {
  size?: "sm" | "md" | "lg";
  book?: "metodo" | "caja";
}) {
  const w = size === "lg" ? "w-[250px] sm:w-[320px]" : size === "md" ? "w-[210px]" : "w-[160px]";
  const src = book === "caja" ? caja3d600 : metodo3d600;
  const src2x = book === "caja" ? caja3d900 : metodo3d900;
  const label =
    book === "caja" ? "Caja de Herramientas de Reconexión" : `${PRODUCT_NAME}: ${PRODUCT_SUBTITLE}`;
  return (
    <div className={cn("relative select-none", w)}>
      <div aria-hidden className="absolute -inset-8 rounded-full bg-lamp/12 blur-3xl" />
      <img
        src={src}
        srcSet={`${src} 600w, ${src2x} 900w`}
        sizes="(min-width: 640px) 320px, 250px"
        alt={`Portada del eBook ${label}`}
        width={600}
        height={749}
        loading={size === "lg" ? "eager" : "lazy"}
        decoding="async"
        draggable={false}
        className="relative w-full drop-shadow-[0_30px_44px_rgba(0,0,0,0.6)]"
      />
    </div>
  );
}

export function Check({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3 text-[0.9375rem] leading-[1.6]">
      <span aria-hidden className="mt-[7px] h-px w-3 shrink-0 bg-lamp" />
      <span>{children}</span>
    </li>
  );
}
