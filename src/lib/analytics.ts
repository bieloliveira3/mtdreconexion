import { ANALYTICS_ENABLED } from "@/config/site";

export type AnalyticsEvent =
  | "view_page"
  | "click_cta"
  | "click_offer"
  | "faq_open"
  | "scroll_50"
  | "scroll_75"
  | "checkout_click"
  | "click_floating_whatsapp";


function analyticsAllowed() {
  if (!ANALYTICS_ENABLED) return false;
  if (typeof window === "undefined") return false;
  try {
    const raw = window.localStorage.getItem("mr_cookie_consent");
    if (!raw) return false;
    return Boolean(JSON.parse(raw).analytics);
  } catch {
    return false;
  }
}

export function track(event: AnalyticsEvent, payload?: Record<string, unknown>) {
  if (!analyticsAllowed()) return;
  // Sin IDs reales: se deja el punto de integración preparado.
  const w = window as unknown as { dataLayer?: unknown[] };
  w.dataLayer = w.dataLayer ?? [];
  w.dataLayer.push({ event, ...payload });
}
