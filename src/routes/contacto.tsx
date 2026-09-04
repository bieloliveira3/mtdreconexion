import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { LegalLayout } from "@/components/landing/LegalLayout";
import { BUSINESS_EMAIL } from "@/config/site";

export const Route = createFileRoute("/contacto")({
  head: () => ({
    meta: [
      { title: "Contacto | Método Reconexión" },
      {
        name: "description",
        content: "Escríbenos si tienes preguntas sobre tu compra o el acceso al producto.",
      },
      { property: "og:title", content: "Contacto | Método Reconexión" },
      { property: "og:description", content: "Soporte y preguntas sobre Método Reconexión." },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/contacto" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <LegalLayout title="Contacto" showNote={false}>
      <p>
        ¿Tienes alguna pregunta sobre tu compra o sobre el acceso al producto? Estamos aquí para
        ayudarte.
      </p>

      <form
        className="grid gap-4"
        onSubmit={(e) => {
          e.preventDefault();
          setSent(true);
        }}
      >
        <Field label="Nombre" name="nombre" />
        <Field label="Email" name="email" type="email" />
        <Field label="Asunto" name="asunto" />
        <label className="grid gap-1.5">
          <span className="text-[0.82rem] font-medium text-foreground">Mensaje</span>
          <textarea
            name="mensaje"
            rows={5}
            required
            className="rounded-xl border border-border bg-card px-4 py-3 text-[0.9rem] text-foreground outline-none focus:border-primary"
          />
        </label>
        <button
          type="submit"
          className="justify-self-start rounded-xl bg-primary px-6 py-3 text-[0.85rem] font-semibold text-primary-foreground transition-colors hover:bg-primary-dark"
        >
          Enviar mensaje
        </button>
      </form>

      {sent ? (
        <p className="rounded-xl border border-border bg-surface px-5 py-4 text-[0.88rem]">
          Este formulario todavía no tiene un servicio de envío configurado, por lo que tu mensaje
          no ha sido enviado. Puedes escribirnos directamente a{" "}
          <span className="font-medium text-foreground">{BUSINESS_EMAIL}</span>.
        </p>
      ) : (
        <p className="text-[0.82rem]">
          También puedes escribirnos directamente a{" "}
          <span className="font-medium text-foreground">{BUSINESS_EMAIL}</span>.
        </p>
      )}
    </LegalLayout>
  );
}

function Field({ label, name, type = "text" }: { label: string; name: string; type?: string }) {
  return (
    <label className="grid gap-1.5">
      <span className="text-[0.82rem] font-medium text-foreground">{label}</span>
      <input
        name={name}
        type={type}
        required
        className="rounded-xl border border-border bg-card px-4 py-3 text-[0.9rem] text-foreground outline-none focus:border-primary"
      />
    </label>
  );
}
