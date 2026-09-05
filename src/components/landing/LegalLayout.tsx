import { Link } from "@tanstack/react-router";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { LEGAL_NOTE } from "@/config/site";

export function LegalLayout({
  title,
  children,
  showNote = true,
}: {
  title: string;
  children: React.ReactNode;
  showNote?: boolean;
}) {
  return (
    <>
      <Header />
      <main className="px-5 py-14 sm:px-8 sm:py-20">
        <article className="mx-auto max-w-3xl">
          <Link to="/" className="text-[0.8rem] text-muted-foreground hover:text-primary">
            ← Volver al inicio
          </Link>
          <h1 className="mt-5 font-display text-[2rem] leading-tight sm:text-[2.5rem]">{title}</h1>
          <div className="mt-10 space-y-8 text-[0.95rem] leading-relaxed text-muted-foreground">
            {children}
          </div>
          {showNote && LEGAL_NOTE ? (
            <div className="mt-14 rounded-xl border border-border bg-surface px-6 py-5">
              <p className="eyebrow text-primary">Nota importante</p>
              <p className="mt-2 text-[0.82rem] leading-relaxed text-muted-foreground">
                {LEGAL_NOTE}
              </p>
            </div>
          ) : null}
        </article>
      </main>
      <Footer />
    </>
  );
}

export function LegalBlock({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="font-display text-[1.2rem] text-foreground">{title}</h2>
      <div className="mt-2 space-y-3">{children}</div>
    </section>
  );
}
