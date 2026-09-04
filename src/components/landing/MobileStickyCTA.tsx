import { useEffect, useState } from "react";
import {
  FULL_BUNDLE_CHECKOUT_URL,
  FULL_BUNDLE_OLD_PRICE,
  FULL_BUNDLE_PRICE,
  METHOD_CHECKOUT_URL,
  METHOD_PRICE,
  OLD_PRICE,
} from "@/config/site";
import { track } from "@/lib/analytics";
import { cn } from "@/lib/utils";

type Offer = "method" | "full";

const offers: Record<
  Offer,
  { price: string; oldPrice: string; label: string; desc: string; cta: string; href: string }
> = {
  method: {
    price: METHOD_PRICE,
    oldPrice: OLD_PRICE,
    label: "MÉTODO",
    desc: "Método Reconexión",
    cta: "QUIERO EL MÉTODO →",
    href: METHOD_CHECKOUT_URL,
  },
  full: {
    price: FULL_BUNDLE_PRICE,
    oldPrice: FULL_BUNDLE_OLD_PRICE,
    label: "COMPLETA",
    desc: "Método + Caja de Herramientas",
    cta: "QUIERO LA RECONEXIÓN COMPLETA →",
    href: FULL_BUNDLE_CHECKOUT_URL,
  },
};

export function MobileStickyCTA() {
  const [show, setShow] = useState(false);
  const [selected, setSelected] = useState<Offer>("method");
  const current = offers[selected];

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > window.innerHeight * 0.9);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const Selector = (
    <div className="inline-flex items-center rounded-full border border-border bg-background p-1 shadow-none">
      <button
        type="button"
        onClick={() => setSelected("method")}
        className={cn(
          "rounded-full px-3 py-1.5 text-[0.7rem] font-semibold tracking-wide transition-colors duration-200",
          selected === "method"
            ? "bg-primary-dark text-background"
            : "text-primary hover:bg-muted/50",
        )}
        aria-pressed={selected === "method"}
      >
        MÉTODO
      </button>
      <button
        type="button"
        onClick={() => setSelected("full")}
        className={cn(
          "flex items-center gap-1 rounded-full px-3 py-1.5 text-[0.7rem] font-semibold tracking-wide transition-colors duration-200",
          selected === "full"
            ? "bg-primary-dark text-background"
            : "text-primary hover:bg-muted/50",
        )}
        aria-pressed={selected === "full"}
      >
        <span className="text-gold">★</span>
        <span>COMPLETA</span>
      </button>
    </div>
  );

  return (
    <div
      className={cn(
        "fixed inset-x-0 bottom-0 z-50 border-t border-border bg-background/95 backdrop-blur transition-transform duration-300",
        show ? "translate-y-0" : "translate-y-full",
      )}
    >
      {/* Desktop — linha única horizontal */}
      <div className="mx-auto hidden max-w-5xl items-center gap-4 px-6 py-3 lg:flex">
        {Selector}

        <div className="flex min-w-0 flex-col justify-center">
          <div className="flex items-baseline gap-2">
            <span className="text-[0.85rem] text-muted-foreground line-through">
              {current.oldPrice}
            </span>
            <span className="font-display text-[1.25rem] leading-none text-primary">
              {current.price}
            </span>
          </div>
          <p className="truncate text-[0.75rem] text-muted-foreground">
            {current.desc}
          </p>
        </div>

        <a
          href={current.href}
          onClick={() => {
            track("click_cta");
            track("checkout_click");
          }}
          className="ml-auto shrink-0 rounded-xl bg-cta px-6 py-3 text-[0.85rem] font-semibold text-cta-foreground transition-colors hover:bg-cta-dark"
        >
          {current.cta}
        </a>
      </div>

      {/* Mobile — duas linhas compactas */}
      <div className="mx-auto flex max-w-md flex-col gap-2 px-4 py-3 lg:hidden">
        <div className="flex items-center justify-between gap-3">
          {Selector}
          <div className="min-w-0 text-right">
            <p className="font-display text-[1.1rem] leading-none text-primary">
              {current.price}
            </p>
            <p className="truncate text-[0.65rem] text-muted-foreground">
              {current.desc}
            </p>
          </div>
        </div>
        <a
          href={current.href}
          onClick={() => {
            track("click_cta");
            track("checkout_click");
          }}
          className="w-full rounded-xl bg-cta py-3 text-center text-[0.82rem] font-semibold text-cta-foreground transition-colors hover:bg-cta-dark"
        >
          {current.cta}
        </a>
      </div>
    </div>
  );
}
