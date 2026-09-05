import { GUARANTEE_DAYS, GUARANTEE_ENABLED, GUARANTEE_SHORT, GUARANTEE_TEXT } from "@/config/site";
import { cn } from "@/lib/utils";

/**
 * A garantia fica colada ao botao: em low ticket e o que derruba o atrito
 * residual de quem ja quer comprar. `onDark` troca o ouro-tinta (fundo claro)
 * pelo ouro (fundo escuro), que e a unica combinacao que passa em contraste.
 */
export function GuaranteeBadge({
  variant = "full",
  onDark = false,
  className,
}: {
  variant?: "full" | "inline";
  onDark?: boolean;
  className?: string;
}) {
  if (!GUARANTEE_ENABLED) return null;

  if (variant === "inline") {
    return (
      <p className={cn("flex items-center justify-center gap-1.5 text-[0.8125rem]", className)}>
        <ShieldIcon className="h-3.5 w-3.5 shrink-0" />
        <span>{GUARANTEE_SHORT}</span>
      </p>
    );
  }

  return (
    <div
      className={cn(
        "flex items-start gap-3 rounded-xl border px-4 py-3",
        onDark ? "border-gold/30 bg-background/[0.06]" : "border-gold-ink/30 bg-gold/5",
        className,
      )}
    >
      <ShieldIcon
        className={cn("mt-0.5 h-5 w-5 shrink-0", onDark ? "text-gold" : "text-gold-ink")}
      />
      <div>
        <p className="text-[0.9375rem] font-semibold">
          Garantía de {GUARANTEE_DAYS} días, sin preguntas
        </p>
        <p
          className={cn(
            "mt-1 text-[0.8125rem] leading-[1.5]",
            onDark ? "text-background/85" : "text-muted-foreground",
          )}
        >
          {GUARANTEE_TEXT}
        </p>
      </div>
    </div>
  );
}

function ShieldIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M12 2.6 4.5 5.8v5.3c0 4.6 3.2 8.8 7.5 10.3 4.3-1.5 7.5-5.7 7.5-10.3V5.8L12 2.6Z"
        strokeLinejoin="round"
      />
      <path d="m8.8 11.9 2.2 2.2 4.2-4.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
