import { GUARANTEE_DAYS, PRICE } from "@/config/site";

/**
 * Faixa factual: o que e, quanto custa, quando chega e qual e a garantia.
 * Nao existe janela de preco nem contador — a urgencia falsa saiu da pagina.
 */
export function UrgencyBar() {
  return (
    <div className="border-b border-border bg-ink-2 px-4 py-2.5">
      <p className="mx-auto max-w-5xl text-center text-[0.875rem] leading-[1.45] text-mute">
        <span className="hidden sm:inline">eBook digital de 53 páginas · </span>
        <span className="text-paper">Pago único de {PRICE}</span> · Acceso inmediato · Garantía de{" "}
        {GUARANTEE_DAYS} días
      </p>
    </div>
  );
}
