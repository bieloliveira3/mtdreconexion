import { GUARANTEE_DAYS, PRICE } from "@/config/site";

/**
 * Faixa factual: o que e, quanto custa, quando chega e qual e a garantia.
 * Nao existe janela de preco nem contador — a urgencia falsa saiu da pagina.
 */
export function UrgencyBar() {
  return (
    <div className="bg-primary-dark px-4 py-2 text-primary-foreground">
      <p className="mx-auto max-w-5xl text-center text-[0.8125rem] leading-snug text-background/85">
        <span className="hidden sm:inline">eBook digital de 53 páginas · </span>
        Pago único de {PRICE} · Acceso inmediato · Garantía de {GUARANTEE_DAYS} días
      </p>
    </div>
  );
}
