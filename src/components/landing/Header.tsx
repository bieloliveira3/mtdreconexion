import { CTA } from "./shared";
import { PRODUCT_NAME } from "@/config/site";

const links = [
  { href: "#metodo", label: "Método" },
  { href: "#incluye", label: "Qué incluye" },
  { href: "#plan", label: "90 días" },
  { href: "#faq", label: "FAQ" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur">
      <div className="mx-auto grid max-w-5xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-3 sm:px-8">
        <a href="#top" className="min-w-0">
          <span className="block truncate font-display text-[0.95rem] tracking-[0.14em] text-foreground uppercase sm:text-base">
            {PRODUCT_NAME}
          </span>
        </a>
        <div className="flex shrink-0 items-center gap-7">
          <nav className="hidden items-center gap-7 md:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-[0.85rem] text-muted-foreground transition-colors hover:text-primary"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <CTA size="sm" className="w-auto">
            QUIERO RECONEXIÓN →
          </CTA>
        </div>
      </div>
    </header>
  );
}
