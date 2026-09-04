import { useEffect, useState } from "react";
import { CHECKOUT_URL, PRICE } from "@/config/site";
import { track } from "@/lib/analytics";

export function MobileStickyCTA() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > window.innerHeight * 0.9);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-50 border-t border-border bg-background/95 px-4 py-3 backdrop-blur transition-transform duration-300 lg:hidden ${
        show ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="flex items-center gap-3">
        <div className="min-w-0">
          <p className="font-display text-[1.15rem] leading-none text-primary">{PRICE}</p>
          <p className="truncate text-[0.65rem] text-muted-foreground">Pago único</p>
          <p className="truncate text-[0.6rem] text-muted-foreground/80">Se convertirá a tu moneda local</p>
        </div>
        <a
          href={CHECKOUT_URL}
          onClick={() => {
            track("click_cta");
            track("checkout_click");
          }}
          className="ml-auto shrink-0 rounded-xl bg-cta px-5 py-3 text-[0.82rem] font-semibold text-cta-foreground transition-colors hover:bg-cta-dark"
        >
          QUIERO RECONEXIÓN →
        </a>
      </div>
    </div>
  );
}
