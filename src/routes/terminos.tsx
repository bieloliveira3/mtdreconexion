import { createFileRoute } from "@tanstack/react-router";
import { LegalBlock, LegalLayout } from "@/components/landing/LegalLayout";
import { BUSINESS_EMAIL, BUSINESS_NAME, PRODUCT_NAME } from "@/config/site";

export const Route = createFileRoute("/terminos")({
  head: () => ({
    meta: [
      { title: "Términos y Condiciones | Método Reconexión" },
      {
        name: "description",
        content:
          "Condiciones de uso del sitio y del producto digital Método Reconexión: compra, acceso, uso permitido y limitaciones.",
      },
      { property: "og:title", content: "Términos y Condiciones | Método Reconexión" },
      {
        property: "og:description",
        content: "Condiciones de uso del sitio y del producto digital.",
      },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/terminos" }],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <LegalLayout title="Términos y Condiciones">
      <LegalBlock title="1. Objeto del sitio">
        <p>
          Este sitio, gestionado por {BUSINESS_NAME}, tiene como finalidad presentar y comercializar
          el producto digital {PRODUCT_NAME}.
        </p>
      </LegalBlock>

      <LegalBlock title="2. Descripción del producto digital">
        <p>
          {PRODUCT_NAME} es un eBook digital de carácter educativo que incluye un método de siete
          fases, ejercicios prácticos, herramientas de conversación y un plan de noventa días.
        </p>
      </LegalBlock>

      <LegalBlock title="3. Proceso de compra">
        <p>
          La compra se realiza a través de la plataforma de pago indicada en el momento de la
          transacción. Al completar la compra aceptas estas condiciones.
        </p>
      </LegalBlock>

      <LegalBlock title="4. Precio y pago">
        <p>
          El precio aplicable es el mostrado en el momento de la compra. Se trata de un pago único,
          no de una suscripción. Pueden aplicarse impuestos según tu país de residencia.
        </p>
      </LegalBlock>

      <LegalBlock title="5. Acceso al contenido">
        <p>
          Tras completar la compra recibirás las instrucciones de acceso al contenido digital en la
          dirección de correo indicada durante el proceso.
        </p>
      </LegalBlock>

      <LegalBlock title="6. Uso permitido">
        <p>
          El contenido se destina a uso personal y no comercial. No está permitido utilizarlo para
          formaciones, servicios o productos derivados sin autorización previa.
        </p>
      </LegalBlock>

      <LegalBlock title="7. Propiedad intelectual">
        <p>
          Todos los textos, materiales, marcas y elementos gráficos del producto y del sitio están
          protegidos por derechos de propiedad intelectual.
        </p>
      </LegalBlock>

      <LegalBlock title="8. Prohibición de redistribución">
        <p>
          Queda prohibida la copia, reproducción, reventa, distribución o publicación total o
          parcial del contenido, en cualquier formato y por cualquier medio.
        </p>
      </LegalBlock>

      <LegalBlock title="9. Naturaleza educativa">
        <p>
          {PRODUCT_NAME} es un material educativo y divulgativo y no constituye terapia psicológica,
          asesoramiento psicológico, diagnóstico clínico ni atención profesional individualizada.
        </p>
      </LegalBlock>

      <LegalBlock title="10. Ausencia de garantía de resultados">
        <p>
          El contenido ofrece herramientas y orientaciones prácticas. No se garantiza ningún
          resultado concreto, ya que depende de factores personales y de la situación de cada
          relación.
        </p>
      </LegalBlock>

      <LegalBlock title="11. Limitación de responsabilidad">
        <p>
          En la medida permitida por la legislación aplicable, no se asume responsabilidad por
          decisiones tomadas a partir del contenido ni por daños indirectos derivados de su uso.
        </p>
      </LegalBlock>

      <LegalBlock title="12. Disponibilidad del sitio">
        <p>
          Se procura mantener el sitio disponible de forma continua, aunque pueden producirse
          interrupciones por mantenimiento o causas técnicas.
        </p>
      </LegalBlock>

      <LegalBlock title="13. Modificación de los términos">
        <p>
          Estos términos pueden actualizarse. La versión aplicable será la publicada en el momento
          de la compra.
        </p>
      </LegalBlock>

      <LegalBlock title="14. Contacto">
        <p>Para cualquier consulta relacionada con estas condiciones: {BUSINESS_EMAIL}.</p>
      </LegalBlock>
    </LegalLayout>
  );
}
