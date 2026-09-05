/**
 * Meta Pixel: eventos padrão + atribuição por criativo.
 *
 * A página só disparava PageView, então o algoritmo não tinha sinal
 * intermediário nenhum e a Hotmart não sabia qual anúncio gerou a venda.
 */

type Fbq = (
  action: "track" | "trackCustom",
  event: string,
  params?: Record<string, unknown>,
) => void;

function fbq(): Fbq | null {
  if (typeof window === "undefined") return null;
  const w = window as unknown as { fbq?: Fbq };
  return typeof w.fbq === "function" ? w.fbq : null;
}

export function pixelTrack(event: string, params?: Record<string, unknown>) {
  fbq()?.("track", event, params);
}

/** Chega ao fundo da página de oferta = intenção real, não só visita. */
export function trackViewContent(params?: Record<string, unknown>) {
  pixelTrack("ViewContent", {
    content_type: "product",
    currency: "USD",
    ...params,
  });
}

/** Clique em qualquer CTA que leva ao checkout. */
export function trackInitiateCheckout(params?: Record<string, unknown>) {
  pixelTrack("InitiateCheckout", {
    content_type: "product",
    currency: "USD",
    num_items: 1,
    ...params,
  });
}

// ── Atribuição ────────────────────────────────────────────────────────
const UTM_KEY = "mr_utm";
const UTM_FIELDS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
] as const;

type Utm = Partial<Record<(typeof UTM_FIELDS)[number], string>>;

/** Guarda as UTMs da chegada: o visitante pode navegar antes de comprar. */
export function captureUtm(): Utm {
  if (typeof window === "undefined") return {};
  try {
    const qs = new URLSearchParams(window.location.search);
    const found: Utm = {};
    for (const f of UTM_FIELDS) {
      const v = qs.get(f);
      if (v) found[f] = v.slice(0, 80);
    }
    if (Object.keys(found).length) {
      window.sessionStorage.setItem(UTM_KEY, JSON.stringify(found));
      return found;
    }
    const raw = window.sessionStorage.getItem(UTM_KEY);
    return raw ? (JSON.parse(raw) as Utm) : {};
  } catch {
    return {};
  }
}

/**
 * Injeta a origem no link da Hotmart. `sck` é o campo que aparece no
 * relatório de vendas, então é por ele que se descobre qual criativo pagou.
 */
export function withAttribution(url: string): string {
  try {
    const utm = captureUtm();
    if (!Object.keys(utm).length) return url;
    const u = new URL(url);
    const sck = [utm.utm_campaign, utm.utm_content, utm.utm_term]
      .filter(Boolean)
      .join("|")
      .slice(0, 100);
    if (sck) u.searchParams.set("sck", sck);
    if (utm.utm_source) u.searchParams.set("src", utm.utm_source.slice(0, 40));
    return u.toString();
  } catch {
    return url;
  }
}
