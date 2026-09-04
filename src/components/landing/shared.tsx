import { cn } from "@/lib/utils";
import { CHECKOUT_URL, PRODUCT_NAME, PRODUCT_SUBTITLE } from "@/config/site";
import { track, type AnalyticsEvent } from "@/lib/analytics";
import bookMockup from "@/assets/book-mockup.png";

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

/** Mockup real del eBook (PNG con fondo transparente), con efecto hover. */
export function BookMockup({ size = "lg" }: { size?: "sm" | "md" | "lg" }) {
  const w = size === "lg" ? "w-[240px] sm:w-[300px]" : size === "md" ? "w-[200px]" : "w-[150px]";
  return (
    <div className={cn("group relative select-none", w)}>
      <div
        aria-hidden
        className="absolute -inset-6 rounded-full bg-gold/25 blur-3xl transition-opacity duration-500 group-hover:opacity-80"
      />
      <img
        src={bookMockup}
        alt={`Portada del eBook ${PRODUCT_NAME}: ${PRODUCT_SUBTITLE}`}
        width={648}
        height={1192}
        loading={size === "lg" ? "eager" : "lazy"}
        draggable={false}
        className="relative w-full rotate-[-2deg] drop-shadow-[0_25px_35px_rgba(32,32,30,0.35)] transition-transform duration-500 ease-out group-hover:rotate-0 group-hover:scale-[1.03]"
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
