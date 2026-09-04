import { createFileRoute } from "@tanstack/react-router";
import { LegalBlock, LegalLayout } from "@/components/landing/LegalLayout";
import {
  REFUND_EMAIL,
  REFUND_PERIOD_DAYS,
  REFUND_POLICY_ENABLED,
  REFUND_PROCESS,
} from "@/config/site";

export const Route = createFileRoute("/reembolsos")({
  head: () => ({
    meta: [
      { title: "Política de Reembolso | Método Reconexión" },
      {
        name: "description",
        content: "Condiciones aplicables a las solicitudes de reembolso del producto digital.",
      },
      { property: "og:title", content: "Política de Reembolso | Método Reconexión" },
      {
        property: "og:description",
        content: "Condiciones aplicables a las solicitudes de reembolso.",
      },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/reembolsos" }],
  }),
  component: RefundPage,
});

function RefundPage() {
  return (
    <LegalLayout title="Política de Reembolso">
      {REFUND_POLICY_ENABLED ? (
        <>
          <LegalBlock title="Plazo de solicitud">
            <p>
              Puedes solicitar el reembolso dentro de los {REFUND_PERIOD_DAYS} días posteriores a la
              compra.
            </p>
          </LegalBlock>
          <LegalBlock title="Cómo solicitarlo">
            <p>{REFUND_PROCESS}</p>
            <p>Solicitudes: {REFUND_EMAIL}.</p>
          </LegalBlock>
        </>
      ) : (
        <LegalBlock title="Condiciones aplicables">
          <p>
            Las solicitudes relacionadas con reembolsos se tratarán conforme a las condiciones
            presentadas en el momento de la compra y a los derechos legales aplicables según tu país
            de residencia.
          </p>
          <p>
            Si tienes una incidencia con tu compra o con el acceso al producto, escríbenos a{" "}
            {REFUND_EMAIL} y revisaremos tu caso.
          </p>
        </LegalBlock>
      )}

      <LegalBlock title="Producto digital">
        <p>
          Se trata de un producto digital de acceso inmediato. Las condiciones específicas
          aplicables al desistimiento pueden depender de la plataforma de pago utilizada y de la
          legislación de tu país.
        </p>
      </LegalBlock>
    </LegalLayout>
  );
}
