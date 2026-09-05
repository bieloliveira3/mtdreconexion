import { cn } from "@/lib/utils";
import { CHECKOUT_URL, PRODUCT_NAME, PRODUCT_SUBTITLE } from "@/config/site";
import { track, type AnalyticsEvent } from "@/lib/analytics";
import { withAttribution, trackInitiateCheckout } from "@/lib/meta-pixel";
import metodo3d600 from "@/assets/metodo-3d-600.webp";
import metodo3d900 from "@/assets/metodo-3d-900.webp";
import caja3d600 from "@/assets/caja-3d-600.webp";
import caja3d900 from "@/assets/caja-3d-900.webp";

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
        "inline-flex w-full items-center justify-center rounded-xl bg-cta text-center font-semibold tracking-wide text-cta-foreground shadow-soft transition-all duration-300 hover:bg-cta-dark hover:shadow-lift focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring sm:w-auto",
        size === "lg" ? "px-8 py-4 text-[0.95rem]" : "px-5 py-2.5 text-[0.8rem]",
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
        tone === "dark" && "bg-primary-dark text-background",
        className,
      )}
    >
      <div className="mx-auto w-full max-w-5xl">{children}</div>
    </section>
  );
}

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return <p className="eyebrow text-primary">{children}</p>;
}

/** Mockup 3D do eBook (WebP com transparencia), responsivo. */
export function BookMockup({
  size = "lg",
  book = "metodo",
}: {
  size?: "sm" | "md" | "lg";
  book?: "metodo" | "caja";
}) {
  const w =
    size === "lg" ? "w-[250px] sm:w-[320px]" : size === "md" ? "w-[210px]" : "w-[160px]";
  const src = book === "caja" ? caja3d600 : metodo3d600;
  const src2x = book === "caja" ? caja3d900 : metodo3d900;
  const label =
    book === "caja"
      ? "Caja de Herramientas de Reconexión"
      : `${PRODUCT_NAME}: ${PRODUCT_SUBTITLE}`;
  return (
    <div className={cn("group relative select-none", w)}>
      <div
        aria-hidden
        className="absolute -inset-6 rounded-full bg-gold/25 blur-3xl transition-opacity duration-500 group-hover:opacity-80"
      />
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
        className="relative w-full drop-shadow-[0_28px_38px_rgba(32,32,30,0.38)] transition-transform duration-500 ease-out group-hover:scale-[1.03]"
      />
    </div>
  );
}

export function Check({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3 text-[0.95rem] leading-relaxed">
      <span
        aria-hidden
        className="mt-[3px] inline-block h-4 w-4 shrink-0 rounded-full border border-primary/30 bg-primary/10 text-center text-[0.6rem] leading-4 text-primary"
      >
        ✓
      </span>
      <span>{children}</span>
    </li>
  );
}
