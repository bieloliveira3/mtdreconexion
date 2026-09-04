import { cn } from "@/lib/utils";
import { CHECKOUT_URL, PRODUCT_NAME, PRODUCT_SUBTITLE } from "@/config/site";
import { track, type AnalyticsEvent } from "@/lib/analytics";

export function CTA({
  children,
  event = "click_cta",
  className,
  size = "lg",
}: {
  children: React.ReactNode;
  event?: AnalyticsEvent;
  className?: string;
  size?: "sm" | "lg";
}) {
  return (
    <a
      href={CHECKOUT_URL}
      onClick={() => {
        track(event);
        track("checkout_click");
      }}
      className={cn(
        "inline-flex w-full items-center justify-center rounded-xl bg-primary text-center font-semibold tracking-wide text-primary-foreground shadow-soft transition-all duration-300 hover:bg-primary-dark hover:shadow-lift focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring sm:w-auto",
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

/** Mockup editorial del eBook, construido en CSS (sin imágenes pesadas). */
export function BookMockup({ size = "lg" }: { size?: "sm" | "md" | "lg" }) {
  const w = size === "lg" ? "w-[240px] sm:w-[300px]" : size === "md" ? "w-[200px]" : "w-[150px]";
  return (
    <div className={cn("relative select-none", w)}>
      <div className="absolute -inset-6 rounded-full bg-gold/20 blur-3xl" aria-hidden />
      <div className="relative aspect-[2/3] rotate-[-2deg] overflow-hidden rounded-r-xl rounded-l-sm bg-primary-dark shadow-lift transition-transform duration-500 hover:rotate-0">
        <div className="absolute inset-y-0 left-0 w-3 bg-black/25" aria-hidden />
        <div className="absolute inset-y-0 left-3 w-px bg-gold/40" aria-hidden />
        <div className="flex h-full flex-col justify-between px-6 py-8 pl-9 text-background">
          <div>
            <p className="eyebrow text-gold">Guía práctica</p>
            <div className="mt-1 h-px w-10 bg-gold/60" />
          </div>
          <div>
            <h3 className="font-display text-[1.6rem] leading-[1.1] text-background sm:text-[2rem]">
              {PRODUCT_NAME}
            </h3>
            <p className="mt-3 text-[0.62rem] leading-relaxed text-background/70 sm:text-[0.7rem]">
              {PRODUCT_SUBTITLE}
            </p>
          </div>
          <p className="eyebrow text-background/50">7 fases · 90 días</p>
        </div>
      </div>
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
