import { useEffect, useState } from "react";
import { COOKIE_BANNER_ENABLED, MARKETING_COOKIES_ENABLED } from "@/config/site";
import { Switch } from "@/components/ui/switch";

const KEY = "mr_cookie_consent";

type Consent = { necessary: true; analytics: boolean; marketing: boolean };

export function CookieBanner() {
  const [open, setOpen] = useState(false);
  const [panel, setPanel] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);

  useEffect(() => {
    if (!COOKIE_BANNER_ENABLED) return;
    if (!window.localStorage.getItem(KEY)) setOpen(true);
  }, []);

  if (!COOKIE_BANNER_ENABLED || !open) return null;

  const save = (c: Consent) => {
    window.localStorage.setItem(KEY, JSON.stringify(c));
    setOpen(false);
  };

  return (
    <div className="fixed inset-x-0 bottom-0 z-[60] px-4 pb-4 sm:px-6">
      <div className="mx-auto max-w-3xl rounded-2xl border border-border bg-card p-5 shadow-lift sm:p-6">
        {!panel ? (
          <>
            <p className="text-[0.85rem] leading-relaxed text-muted-foreground">
              Utilizamos cookies para mejorar tu experiencia, analizar el uso del sitio y, cuando
              corresponda, personalizar contenido. Puedes aceptar o gestionar tus preferencias.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <button
                onClick={() =>
                  save({ necessary: true, analytics: true, marketing: MARKETING_COOKIES_ENABLED })
                }
                className="rounded-xl bg-primary px-5 py-2.5 text-[0.8rem] font-semibold text-primary-foreground transition-colors hover:bg-primary-dark"
              >
                Aceptar
              </button>
              <button
                onClick={() => setPanel(true)}
                className="rounded-xl border border-border px-5 py-2.5 text-[0.8rem] font-medium transition-colors hover:bg-surface"
              >
                Configurar
              </button>
              <button
                onClick={() => save({ necessary: true, analytics: false, marketing: false })}
                className="rounded-xl px-5 py-2.5 text-[0.8rem] font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                Rechazar no esenciales
              </button>
            </div>
          </>
        ) : (
          <>
            <p className="font-display text-[1.1rem]">Preferencias de cookies</p>
            <div className="mt-4 space-y-4">
              <Row label="Cookies necesarias" desc="Siempre activas" checked disabled />
              <Row
                label="Cookies analíticas"
                desc="Nos ayudan a entender el uso del sitio."
                checked={analytics}
                onChange={setAnalytics}
              />
              <Row
                label="Cookies de marketing"
                desc="Personalización de contenido y publicidad."
                checked={marketing}
                onChange={setMarketing}
              />
            </div>
            <button
              onClick={() => save({ necessary: true, analytics, marketing })}
              className="mt-5 rounded-xl bg-primary px-5 py-2.5 text-[0.8rem] font-semibold text-primary-foreground transition-colors hover:bg-primary-dark"
            >
              Guardar preferencias
            </button>
          </>
        )}
      </div>
    </div>
  );
}

function Row({
  label,
  desc,
  checked,
  disabled,
  onChange,
}: {
  label: string;
  desc: string;
  checked: boolean;
  disabled?: boolean;
  onChange?: (v: boolean) => void;
}) {
  return (
    <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4">
      <div className="min-w-0">
        <p className="text-[0.88rem] font-medium">{label}</p>
        <p className="text-[0.78rem] text-muted-foreground">{desc}</p>
      </div>
      <Switch checked={checked} disabled={disabled} onCheckedChange={onChange} />
    </div>
  );
}
