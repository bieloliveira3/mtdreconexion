import { GUARANTEE_DAYS, GUARANTEE_ENABLED, GUARANTEE_TEXT } from "@/config/site";
import { cn } from "@/lib/utils";

/**
 * A palavra "garantia" nao aparecia uma vez sequer no corpo da pagina:
 * so um link no rodape. Em low ticket e o que derruba o atrito residual
 * de quem ja quer comprar, entao fica colada ao botao.
 */
export function GuaranteeBadge({
  variant = "full",
  className,
}: {
  variant?: "full" | "inline";
  className?: string;
}) {
  if (!GUARANTEE_ENABLED) return null;

  if (variant === "inline") {
    return (
      <p className={cn("flex items-center justify-center gap-1.5 text-[0.75rem]", className)}>
        <ShieldIcon className="h-3.5 w-3.5 shrink-0" />
        <span>Garantía de {GUARANTEE_DAYS} días o te devolvemos el 100%</span>
      </p>
    );
  }

  return (
    <div
      className={cn(
        "flex items-start gap-3 rounded-xl border border-gold/30 bg-gold/5 px-4 py-3",
        className,
      )}
    >
      <ShieldIcon className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
      <div>
        <p className="text-[0.85rem] font-semibold">
          Garantía incondicional de {GUARANTEE_DAYS} días
        </p>
        <p className="mt-0.5 text-[0.8rem] leading-relaxed opacity-80">{GUARANTEE_TEXT}</p>
      </div>
    </div>
  );
}

function ShieldIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"
         className={className} aria-hidden="true">
      <path d="M12 2.6 4.5 5.8v5.3c0 4.6 3.2 8.8 7.5 10.3 4.3-1.5 7.5-5.7 7.5-10.3V5.8L12 2.6Z"
            strokeLinejoin="round" />
      <path d="m8.8 11.9 2.2 2.2 4.2-4.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
