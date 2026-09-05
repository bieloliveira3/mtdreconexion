import { Link } from "@tanstack/react-router";
import { PRODUCT_NAME } from "@/config/site";
import logoFull480 from "@/assets/logo-full-480.webp";
import logoFull960 from "@/assets/logo-full-960.webp";

const links = [
  { to: "/privacidad", label: "Política de Privacidad" },
  { to: "/terminos", label: "Términos y Condiciones" },
  { to: "/reembolsos", label: "Política de Reembolso" },
  { to: "/cookies", label: "Política de Cookies" },
  { to: "/contacto", label: "Contacto" },
] as const;

export function Footer() {
  return (
    <footer className="border-t border-border bg-ink-2 px-5 py-14 sm:px-8">
      <div className="mx-auto max-w-5xl">
        <Link to="/" className="inline-block" aria-label={PRODUCT_NAME}>
          {/* Mismo tratamiento que en el header: silueta color papel, porque
              el original es tinta oscura sobre transparencia. */}
          <img
            src={logoFull480}
            srcSet={`${logoFull480} 480w, ${logoFull960} 960w`}
            sizes="240px"
            alt={`${PRODUCT_NAME} por Renata Ramírez`}
            width={480}
            height={159}
            loading="lazy"
            decoding="async"
            className="h-14 w-auto opacity-[0.88] [filter:brightness(0)_invert(1)]"
          />
        </Link>
        <nav className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-[0.875rem] text-mute transition-colors hover:text-paper"
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <p className="mt-10 text-[0.875rem] text-mute">
          © 2026 {PRODUCT_NAME}. Todos los derechos reservados.
        </p>
        <p className="mt-2 max-w-2xl text-[0.875rem] leading-[1.55] text-mute">
          Este contenido tiene finalidad educativa y divulgativa y no sustituye atención psicológica
          profesional.
        </p>
      </div>
    </footer>
  );
}
