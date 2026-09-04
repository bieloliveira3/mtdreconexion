import { createFileRoute } from "@tanstack/react-router";
import { LegalBlock, LegalLayout } from "@/components/landing/LegalLayout";
import { BUSINESS_EMAIL } from "@/config/site";

export const Route = createFileRoute("/privacidad")({
  head: () => ({
    meta: [
      { title: "Política de Privacidad | Método Reconexión" },
      {
        name: "description",
        content:
          "Cómo se recopilan, utilizan y protegen los datos de las personas que visitan el sitio de Método Reconexión.",
      },
      { property: "og:title", content: "Política de Privacidad | Método Reconexión" },
      {
        property: "og:description",
        content: "Información sobre el tratamiento de datos en Método Reconexión.",
      },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/privacidad" }],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <LegalLayout title="Política de Privacidad">
      <p>
        Esta política explica qué datos pueden recopilarse cuando visitas este sitio o adquieres el
        producto digital, con qué finalidad se utilizan y qué derechos tienes sobre ellos.
      </p>

      <LegalBlock title="1. Datos que pueden recopilarse">
        <p>
          Datos que facilitas voluntariamente, como nombre, dirección de correo electrónico y el
          contenido de los mensajes que envías a través del formulario de contacto.
        </p>
        <p>
          Datos derivados de una compra, gestionados por la plataforma de pago correspondiente, como
          la confirmación de la transacción y los datos necesarios para entregar el producto.
        </p>
      </LegalBlock>

      <LegalBlock title="2. Finalidad del tratamiento">
        <p>
          Los datos se utilizan para responder a tus consultas, entregar y dar soporte al producto
          digital adquirido, cumplir obligaciones legales y, cuando corresponda y lo autorices,
          enviarte comunicaciones relacionadas con el producto.
        </p>
      </LegalBlock>

      <LegalBlock title="3. Información técnica">
        <p>
          Al navegar pueden registrarse datos técnicos como la dirección IP, el tipo de dispositivo,
          el navegador y las páginas visitadas, con fines de seguridad y funcionamiento del sitio.
        </p>
      </LegalBlock>

      <LegalBlock title="4. Cookies">
        <p>
          El sitio utiliza cookies necesarias para su funcionamiento y, únicamente con tu
          consentimiento, cookies analíticas o de marketing. Puedes gestionar tus preferencias en
          cualquier momento desde el aviso de cookies. Más información en la Política de Cookies.
        </p>
      </LegalBlock>

      <LegalBlock title="5. Analítica">
        <p>
          Las herramientas de analítica solo se activan si están configuradas y si has dado tu
          consentimiento. Su finalidad es comprender de forma agregada cómo se utiliza el sitio.
        </p>
      </LegalBlock>

      <LegalBlock title="6. Pagos">
        <p>
          Las compras se procesan a través de la plataforma de pago indicada durante el proceso de
          compra. No almacenamos los datos completos de tu tarjeta ni de tu medio de pago.
        </p>
      </LegalBlock>

      <LegalBlock title="7. Comunicaciones">
        <p>
          Si te suscribes a comunicaciones, podrás darte de baja en cualquier momento mediante el
          enlace incluido en los mensajes o escribiendo a {BUSINESS_EMAIL}.
        </p>
      </LegalBlock>

      <LegalBlock title="8. Conservación">
        <p>
          Los datos se conservan durante el tiempo necesario para cumplir la finalidad para la que
          fueron recogidos y, posteriormente, durante los plazos legalmente exigibles.
        </p>
      </LegalBlock>

      <LegalBlock title="9. Seguridad">
        <p>
          Se aplican medidas técnicas y organizativas razonables para proteger la información frente
          a accesos no autorizados, pérdida o alteración.
        </p>
      </LegalBlock>

      <LegalBlock title="10. Derechos del usuario">
        <p>
          Puedes solicitar el acceso, la rectificación, la supresión, la limitación, la oposición o
          la portabilidad de tus datos, así como retirar tu consentimiento, escribiendo a{" "}
          {BUSINESS_EMAIL}.
        </p>
      </LegalBlock>

      <LegalBlock title="11. Terceros y proveedores">
        <p>
          Para prestar el servicio pueden intervenir proveedores tecnológicos, como servicios de
          alojamiento, plataformas de pago o herramientas de correo electrónico, que tratan datos
          únicamente conforme a las instrucciones del responsable.
        </p>
      </LegalBlock>

      <LegalBlock title="12. Cambios">
        <p>
          Esta política puede actualizarse. La versión vigente será siempre la publicada en esta
          página.
        </p>
      </LegalBlock>

      <LegalBlock title="13. Contacto">
        <p>Para cualquier cuestión relacionada con la privacidad: {BUSINESS_EMAIL}.</p>
      </LegalBlock>
    </LegalLayout>
  );
}
