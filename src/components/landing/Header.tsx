import { Link } from "@tanstack/react-router";
import { CTA } from "./shared";
import { PRODUCT_NAME } from "@/config/site";
import logo320 from "@/assets/logo-header-320.webp";
import logo640 from "@/assets/logo-header-640.webp";

const links = [
  { href: "#metodo", label: "Método" },
  { href: "#incluye", label: "Qué incluye" },
  { href: "#plan", label: "90 días" },
  { href: "#faq", label: "FAQ" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-ink/92 backdrop-blur">
      <div className="mx-auto grid max-w-5xl grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-4 py-3 sm:gap-4 sm:px-8">
        <Link to="/" hash="top" className="min-w-0" aria-label={PRODUCT_NAME}>
          {/*
            El logotipo es tinta muy oscura sobre transparencia: sobre --ink
            desaparecería. El filtro lo convierte en una silueta del color del
            papel, que es como debe leerse una marca sobre fondo nocturno.
          */}
          <img
            src={logo320}
            srcSet={`${logo320} 320w, ${logo640} 640w`}
            sizes="(min-width: 640px) 190px, 150px"
            alt={PRODUCT_NAME}
            width={320}
            height={102}
            decoding="async"
            className="h-8 w-auto opacity-[0.92] [filter:brightness(0)_invert(1)] sm:h-10"
          />
        </Link>
        <div className="flex shrink-0 items-center gap-4 sm:gap-7">
          <nav className="hidden items-center gap-7 md:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-[0.9375rem] text-mute transition-colors hover:text-paper"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <CTA size="sm" className="w-auto px-3.5 py-2 text-[0.875rem] sm:px-5">
            <span className="sm:hidden">COMPRAR →</span>
            <span className="hidden sm:inline">QUIERO RECONEXIÓN →</span>
          </CTA>
        </div>
      </div>
    </header>
  );
}
