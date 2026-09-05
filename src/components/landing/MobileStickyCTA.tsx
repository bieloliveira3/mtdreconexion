import { useEffect, useState } from "react";
import { GUARANTEE_DAYS, METHOD_CHECKOUT_URL, METHOD_PRICE, PRODUCT_NAME } from "@/config/site";
import { track } from "@/lib/analytics";
import { withAttribution, trackInitiateCheckout } from "@/lib/meta-pixel";
import { cn } from "@/lib/utils";

/**
 * Rede de seguranca: preco e botao em uma linha. Sem seletor de oferta —
 * a pagina vende um produto so e a barra nao reintroduz a decisao.
 */
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
      className={cn(
        "fixed inset-x-0 bottom-0 z-50 border-t border-border bg-ink/96 pb-[env(safe-area-inset-bottom)] backdrop-blur",
        show ? "translate-y-0" : "translate-y-full",
      )}
    >
      <div className="mx-auto flex max-w-5xl items-center gap-4 px-4 py-3 sm:px-6">
        <div className="min-w-0">
          <p className="font-display text-[1.25rem] leading-none font-semibold text-lamp">
            {METHOD_PRICE}
          </p>
          <p className="mt-1.5 text-[0.875rem] leading-[1.3] text-mute">
            pago único
            <br />
            garantía de {GUARANTEE_DAYS} días
          </p>
        </div>

        <a
          href={METHOD_CHECKOUT_URL}
          onClick={(e) => {
            track("click_cta");
            track("checkout_click");
            trackInitiateCheckout({ content_name: PRODUCT_NAME });
            e.currentTarget.href = withAttribution(METHOD_CHECKOUT_URL);
          }}
          className="ml-auto flex min-h-[52px] flex-1 shrink-0 items-center justify-center rounded-lg bg-cta px-5 whitespace-nowrap sm:px-6 text-center text-[0.9375rem] font-semibold text-cta-foreground transition-colors hover:bg-cta-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring sm:flex-none"
        >
          Empezar ahora →
        </a>
      </div>
    </div>
  );
}
