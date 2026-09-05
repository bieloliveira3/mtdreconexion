import { createFileRoute } from "@tanstack/react-router";
import { LegalBlock, LegalLayout } from "@/components/landing/LegalLayout";
import { ANALYTICS_ENABLED, BUSINESS_EMAIL, MARKETING_COOKIES_ENABLED } from "@/config/site";

export const Route = createFileRoute("/cookies")({
  head: () => ({
    meta: [
      { title: "Política de Cookies | Método Reconexión" },
      {
        name: "description",
        content: "Qué cookies utiliza el sitio y cómo puedes gestionar tus preferencias.",
      },
      { property: "og:title", content: "Política de Cookies | Método Reconexión" },
      { property: "og:description", content: "Uso de cookies y gestión de preferencias." },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/cookies" }],
  }),
  component: CookiesPage,
});

function CookiesPage() {
  return (
    <LegalLayout title="Política de Cookies">
      <LegalBlock title="¿Qué son las cookies?">
        <p>
          Las cookies son pequeños archivos que se almacenan en tu dispositivo cuando visitas un
          sitio web y permiten recordar información sobre tu navegación.
        </p>
      </LegalBlock>

      <LegalBlock title="Cookies necesarias">
        <p>
          Son imprescindibles para el funcionamiento del sitio y para recordar tus decisiones sobre
          el consentimiento. No pueden desactivarse.
        </p>
      </LegalBlock>

      <LegalBlock title="Cookies de preferencias">
        <p>
          Permiten recordar opciones que has seleccionado para mejorar tu experiencia de navegación.
        </p>
      </LegalBlock>

      <LegalBlock title="Cookies analíticas">
        <p>
          {ANALYTICS_ENABLED
            ? "Se utilizan, únicamente con tu consentimiento, para entender de forma agregada cómo se usa el sitio."
            : "Actualmente no hay herramientas de analítica configuradas en este sitio. Si se activaran, solo se utilizarían con tu consentimiento."}
        </p>
      </LegalBlock>

      <LegalBlock title="Cookies de marketing">
        <p>
          {MARKETING_COOKIES_ENABLED
            ? "Se utilizan, únicamente con tu consentimiento, para personalizar contenido y publicidad."
            : "Actualmente no hay cookies de marketing configuradas en este sitio. Si se activaran, solo se utilizarían con tu consentimiento."}
        </p>
      </LegalBlock>

      <LegalBlock title="Cómo controlar las cookies">
        <p>
          Puedes aceptar, rechazar o configurar las categorías opcionales desde el aviso de cookies.
          También puedes eliminar o bloquear cookies desde la configuración de tu navegador.
        </p>
      </LegalBlock>

      <LegalBlock title="Herramientas de terceros">
        <p>
          Cuando se configuren herramientas de terceros, se indicarán en esta página junto con su
          finalidad.
        </p>
      </LegalBlock>

      <LegalBlock title="Cambios">
        <p>Esta política puede actualizarse. Para cualquier consulta: {BUSINESS_EMAIL}.</p>
      </LegalBlock>
    </LegalLayout>
  );
}
