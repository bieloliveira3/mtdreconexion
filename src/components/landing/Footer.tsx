import { Link } from "@tanstack/react-router";
import { PRODUCT_NAME } from "@/config/site";

const links = [
  { to: "/privacidad", label: "Política de Privacidad" },
  { to: "/terminos", label: "Términos y Condiciones" },
  { to: "/reembolsos", label: "Política de Reembolso" },
  { to: "/cookies", label: "Política de Cookies" },
  { to: "/contacto", label: "Contacto" },
] as const;

export function Footer() {
  return (
    <footer className="border-t border-border bg-background px-5 py-12 sm:px-8">
      <div className="mx-auto max-w-5xl">
        <Link to="/" className="font-display text-[0.95rem] tracking-[0.14em] uppercase">
          {PRODUCT_NAME}
        </Link>
        <nav className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-[0.85rem] text-muted-foreground transition-colors hover:text-primary"
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <p className="mt-8 text-[0.78rem] text-muted-foreground">
          © 2026 {PRODUCT_NAME}. Todos los derechos reservados.
        </p>
        <p className="mt-2 max-w-2xl text-[0.78rem] leading-relaxed text-muted-foreground">
          Este contenido tiene finalidad educativa y divulgativa y no sustituye atención psicológica
          profesional.
        </p>
      </div>
    </footer>
  );
}
