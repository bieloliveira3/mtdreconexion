import { useEffect, useState } from "react";
import { COUNTDOWN_DURATION, COUNTDOWN_ENABLED } from "@/config/site";

const KEY = "mr_offer_deadline";

function pad(n: number) {
  return String(Math.max(0, n)).padStart(2, "0");
}

export function UrgencyBar() {
  const [left, setLeft] = useState<number | null>(null);

  useEffect(() => {
    if (!COUNTDOWN_ENABLED) return;
    let deadline = Number(window.localStorage.getItem(KEY));
    if (!deadline || Number.isNaN(deadline) || deadline < Date.now()) {
      deadline = Date.now() + COUNTDOWN_DURATION * 60 * 1000;
      window.localStorage.setItem(KEY, String(deadline));
    }
    const tick = () => setLeft(Math.max(0, deadline - Date.now()));
    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, []);

  if (!COUNTDOWN_ENABLED) return null;

  const s = Math.floor((left ?? COUNTDOWN_DURATION * 60 * 1000) / 1000);
  const h = Math.floor(s / 3600);
  const m = Math.floor((s % 3600) / 60);
  const sec = s % 60;

  return (
    <div className="bg-primary-dark px-4 py-2 text-primary-foreground">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-x-3 gap-y-1 text-center">
        <span className="eyebrow text-background/80">
          Oferta especial disponible por tiempo limitado
        </span>
        <span
          className="font-mono text-[0.8rem] tracking-[0.15em] text-gold tabular-nums"
          aria-live="off"
        >
          {pad(h)} : {pad(m)} : {pad(sec)}
        </span>
      </div>
    </div>
  );
}
