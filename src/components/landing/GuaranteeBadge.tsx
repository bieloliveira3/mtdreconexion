import { GUARANTEE_DAYS, GUARANTEE_ENABLED, GUARANTEE_SHORT, GUARANTEE_TEXT } from "@/config/site";
import { cn } from "@/lib/utils";

/**
 * A garantia fica colada ao botao: em low ticket e o que derruba o atrito
 * residual de quem ja quer comprar. Sobre a pagina escura o icone vai sempre
 * em --lamp (8.76:1 sobre --ink), que e a unica combinacao que passa.
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
      <p className={cn("flex items-center justify-center gap-2 text-[0.875rem]", className)}>
        <ShieldIcon className="h-4 w-4 shrink-0 text-lamp" />
        <span>{GUARANTEE_SHORT}</span>
      </p>
    );
  }

  return (
    <div
      className={cn("flex items-start gap-3 rounded-lg border border-border px-5 py-4", className)}
    >
      <ShieldIcon className="mt-0.5 h-5 w-5 shrink-0 text-lamp" />
      <div>
        <p className="text-[0.9375rem] font-semibold text-paper">
          Garantía de {GUARANTEE_DAYS} días, sin preguntas
        </p>
        <p className="mt-1.5 text-[0.875rem] leading-[1.55] text-mute">{GUARANTEE_TEXT}</p>
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
      strokeWidth="1.6"
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
