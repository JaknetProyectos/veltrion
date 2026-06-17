"use client";

import { useLocale } from "next-intl";
import { Header } from "@/components/site/header";
import { Footer } from "@/components/site/footer";

function LegalEs() {
  return (
    <div className="legal-container">
      <style dangerouslySetInnerHTML={{
        __html: `
        .legal-container {
          color: #white;
          background: #000000,
          line-height: 1.6;
          font-family: sans-serif;
        }
        .legal-container h1 { font-size: 2.5rem; font-weight: 800; margin-bottom: 2rem; border-bottom: 2px solid #eee; padding-bottom: 1rem; }
        .legal-container h2 { font-size: 1.5rem; font-weight: 700; margin-top: 2.5rem; margin-bottom: 1rem; color: #ffffff; }
        .legal-container h3 { font-size: 1.1rem; font-weight: 700; margin-top: 1.5rem; }
        .legal-container p { margin-bottom: 1.2rem; text-align: justify; }
        .legal-container ul { margin-bottom: 1.2rem; padding-left: 1.5rem; list-style-type: disc; }
        .legal-container li { margin-bottom: 0.5rem; }
        .legal-container section { margin-bottom: 3rem; }
      `}} />

      <section>
        <h1>AVISO DE PRIVACIDAD</h1>

        <h2>PACT2SALE, S.A DE C.V.</h2>

        <p>
          PACT2SALE, S.A DE C.V. (en adelante “Veltrion”), en su carácter de responsable del tratamiento de datos personales, y en estricto apego a lo dispuesto por la Ley Federal de Protección de Datos Personales en Posesión de los Particulares, su Reglamento, y demás disposiciones aplicables en la Ciudad de México, hace de su conocimiento el presente aviso.
        </p>

        <p>
          <strong>Domicilio:</strong> Avenida Homero, N°404 Piso 5, Colonia Polanco V Sección, Alcaldía Miguel Hidalgo, CP. 11560, Entidad Federativa Ciudad De México. |
          <strong>Correo:</strong> cuentas@ veltrion.com.mx.mx |
          <strong>Sitio web:</strong> veltrion.com.mx
        </p>

        <h3>CONSENTIMIENTO INFORMADO</h3>

        <p>
          Al utilizar nuestros servicios técnicos especializados en mantenimiento de aplicaciones móviles, manifiestas tu consentimiento expreso para que Veltrion trate tu información personal en los términos aquí descritos. Si no estás de acuerdo con alguna de las condiciones establecidas, te solicitamos abstenerte de proporcionar tus datos o utilizar nuestros servicios.
        </p>

        <h3>ORIGEN Y TIPOS DE DATOS</h3>

        <p>
          Veltrion obtiene información personal a través de múltiples canales durante la relación comercial. Esta información proviene directamente del titular al solicitar cotizaciones o contratar servicios, de forma indirecta cuando proporcionas acceso a sistemas y repositorios necesarios para el servicio, y automáticamente durante la navegación en nuestro sitio web.
        </p>

        <p>
          Las categorías de datos que procesamos incluyen: identificación de empresas, contacto profesional o corporativo, datos financieros para procesamiento de pagos, información fiscal requerida por la autoridad tributaria mexicana, datos técnicos relacionados con aplicaciones móviles (código fuente, credenciales de acceso, certificados digitales, tokens, reportes de errores y logs de sistema), e información de navegación web.
        </p>

        <h3>TRATAMIENTO Y LÍMITES</h3>

        <p>
          El tratamiento de datos se realiza exclusivamente para cumplir con las obligaciones derivadas de la relación jurídica establecida. Veltrion no utiliza la información para fines distintos a los especificados, ni comercializa o transfiere datos a terceros ajenos al servicio, salvo casos previstos por ley.
        </p>

        <p>
          <strong>Finalidades principales:</strong> Ejecutar servicios de corrección de errores, actualización de dependencias y sistemas operativos, optimización de rendimiento, implementación de seguridad, análisis técnicos mediante herramientas de diagnóstico, registro de tiempo para facturación, emisión de comprobantes fiscales digitales, y comunicación técnica sobre proyectos activos.
        </p>

        <p>
          <strong>Finalidades secundarias (opcionales):</strong> Remitir comunicaciones técnicas sobre vulnerabilidades críticas, actualizaciones de plataformas iOS y Android, cambios en políticas de tiendas de aplicaciones, entre otras. Puedes negarte sin afectar el servicio principal.
        </p>

        <h3>TRANSFERENCIAS Y REMISIONES</h3>

        <p>
          Cierta información se comparte con terceros indispensables para la ejecución técnica, siempre bajo estrictos acuerdos de confidencialidad:
        </p>

        <ul>
          <li>
            Plataformas de control de versiones donde se alojan repositorios de código.
          </li>
          <li>
            Servicios de monitoreo y análisis para diagnóstico técnico.
          </li>
          <li>
            Instituciones financieras y procesadores de pago.
          </li>
          <li>
            Desarrolladores especializados que colaboran bajo confidencialidad.
          </li>
          <li>
            Autoridades gubernamentales cuando exista mandamiento legal fundado.
          </li>
        </ul>

        <p>
          Veltrion asegura que todos los terceros receptores mantengan la confidencialidad y seguridad de los datos.
        </p>

        <h3>EJERCICIO DE DERECHOS Y REVOCACIÓN</h3>

        <p>
          Tienes derecho a Acceder a tu información, Rectificar datos inexactos, Cancelar tu información cuando ya no sea necesaria, y Oponerte a tratamientos específicos. También puedes Revocar tu consentimiento en cualquier momento.
        </p>

        <p>
          Para ejercer estos derechos, envía solicitud por escrito al correo indicado, incluyendo: nombre completo o razón social, domicilio para notificaciones, copia de identificación oficial, descripción del derecho a ejercer, y elementos que faciliten localizar tu información.
        </p>

        <p>
          Responderemos en un plazo máximo de 20 días hábiles. Si la solicitud es procedente, se hará efectiva dentro de los 15 días hábiles siguientes a la respuesta.
        </p>

        <h3>SEGURIDAD DE LA INFORMACIÓN</h3>

        <p>
          Implementamos medidas administrativas, técnicas y físicas para proteger tus datos: cifrado de transmisiones mediante protocolos seguros, autenticación multifactor para acceso a proyectos sensibles, control de acceso basado en roles, auditorías periódicas de seguridad, respaldos encriptados, y procedimientos de eliminación segura.
        </p>

        <p>
          No obstante, reconocemos que ningún sistema es completamente infalible. Te recomendamos mantener seguras tus credenciales y notificarnos inmediatamente cualquier uso no autorizado.
        </p>

        <h3>COOKIES Y TECNOLOGÍAS DE RASTREO</h3>

        <p>
          Nuestro sitio web utiliza cookies y tecnologías similares para mejorar la experiencia del usuario, recordar preferencias, analizar patrones de navegación, y optimizar el funcionamiento del sitio. Puedes configurar tu navegador para rechazar cookies, aunque esto puede afectar algunas funcionalidades.
        </p>

        <h3>MODIFICACIONES AL AVISO</h3>

        <p>
          Veltrion se reserva el derecho de modificar este aviso en cualquier momento para adaptarlo a cambios legislativos, jurisprudenciales, políticas internas, o nuevos requerimientos operacionales. Las modificaciones se publicarán en nuestro sitio web con la fecha de última actualización.
        </p>

        <p>
          Te recomendamos revisar periódicamente este aviso para mantenerte informado sobre cómo protegemos tu información.
        </p>

        <h3>ACEPTACIÓN DE TÉRMINOS</h3>

        <p>
          El uso de nuestros servicios y el suministro de información personal constituyen tu aceptación expresa de este aviso de privacidad y tu consentimiento para el tratamiento de datos conforme a los términos aquí establecidos.
        </p>

        <p>
          Última actualización: Junio 2025
        </p>
      </section>
    </div>
  );
}

function LegalEn() {
  return (
    <div className="legal-container">
      <style dangerouslySetInnerHTML={{
        __html: `
        .legal-container {
          color: #white;
          background: #000000,
          line-height: 1.6;
          font-family: sans-serif;
        }
        .legal-container h1 { font-size: 2.5rem; font-weight: 800; margin-bottom: 2rem; border-bottom: 2px solid #eee; padding-bottom: 1rem; }
        .legal-container h2 { font-size: 1.5rem; font-weight: 700; margin-top: 2.5rem; margin-bottom: 1rem; color: #ffffff; }
        .legal-container h3 { font-size: 1.1rem; font-weight: 700; margin-top: 1.5rem; }
        .legal-container p { margin-bottom: 1.2rem; text-align: justify; }
        .legal-container ul { margin-bottom: 1.2rem; padding-left: 1.5rem; list-style-type: disc; }
        .legal-container li { margin-bottom: 0.5rem; }
      `}} />

      <section>
        <h1>PRIVACY NOTICE</h1>

        <h2>PACT2SALE, S.A DE C.V.</h2>

        <p>
          PACT2SALE, S.A DE C.V. (hereinafter “Veltrion”), in its capacity as the party responsible for the processing of personal data, and in strict compliance with the provisions of the Federal Law on Protection of Personal Data Held by Private Parties, its Regulations, and other applicable provisions in Mexico City, hereby informs you of this notice.
        </p>

        <p>
          <strong>Address:</strong> Avenida Homero, N°404 Piso 5, Colonia Polanco V Sección, Alcaldía Miguel Hidalgo, CP. 11560, Mexico City, Mexico. |
          <strong>Email:</strong> cuentas@veltrion.com.mx.mx |
          <strong>Website:</strong> veltrion.com.mx
        </p>

        <h3>INFORMED CONSENT</h3>

        <p>
          By using our specialized technical services for mobile application maintenance, you expressly consent to Veltrion processing your personal information under the terms described herein. If you do not agree with any of the established conditions, we request that you refrain from providing your data or using our services.
        </p>

        <h3>ORIGIN AND TYPES OF DATA</h3>

        <p>
          Veltrion obtains personal information through multiple channels during the business relationship. This information comes directly from the data subject when requesting quotations or contracting services, indirectly when you provide access to systems and repositories necessary for the service, and automatically during navigation on our website.
        </p>

        <p>
          The categories of data we process include: company identification, professional or corporate contact information, financial data for payment processing, tax information required by Mexican tax authorities, technical data related to mobile applications (source code, access credentials, digital certificates, tokens, error reports, and system logs), and web browsing information.
        </p>

        <h3>PROCESSING AND LIMITATIONS</h3>

        <p>
          Data processing is carried out exclusively to fulfill the obligations derived from the established legal relationship. Veltrion does not use the information for purposes other than those specified, nor does it market or transfer data to third parties unrelated to the service, except in cases provided by law.
        </p>

        <p>
          <strong>Main purposes:</strong> Execute bug fixing services, dependency and operating system updates, performance optimization, security implementation, technical analysis using diagnostic tools, time tracking for billing purposes, issuance of digital tax receipts, and technical communication regarding active projects.
        </p>

        <p>
          <strong>Secondary purposes (optional):</strong> Send technical communications regarding critical vulnerabilities, iOS and Android platform updates, changes in application store policies, among others. You may refuse these without affecting the main service.
        </p>

        <h3>TRANSFERS AND DISCLOSURES</h3>

        <p>
          Certain information is shared with third parties essential for technical execution, always under strict confidentiality agreements:
        </p>

        <ul>
          <li>
            Version control platforms where code repositories are hosted.
          </li>
          <li>
            Monitoring and analysis services for technical diagnostics.
          </li>
          <li>
            Financial institutions and payment processors.
          </li>
          <li>
            Specialized developers collaborating under confidentiality.
          </li>
          <li>
            Government authorities when there is a duly founded legal order.
          </li>
        </ul>

        <p>
          Veltrion ensures that all third-party recipients maintain the confidentiality and security of the data.
        </p>

        <h3>EXERCISE OF RIGHTS AND REVOCATION</h3>

        <p>
          You have the right to Access your information, Rectify inaccurate data, Cancel your information when it is no longer necessary, and Oppose specific processing activities. You may also Revoke your consent at any time.
        </p>

        <p>
          To exercise these rights, send a written request to the indicated email, including: full name or corporate name, address for notifications, copy of official identification, description of the right to be exercised, and elements that facilitate locating your information.
        </p>

        <p>
          We will respond within a maximum period of 20 business days. If the request is applicable, it will become effective within 15 business days following the response.
        </p>

        <h3>INFORMATION SECURITY</h3>

        <p>
          We implement administrative, technical, and physical measures to protect your data: encrypted transmissions through secure protocols, multi-factor authentication for access to sensitive projects, role-based access control, periodic security audits, encrypted backups, and secure deletion procedures.
        </p>

        <p>
          Nevertheless, we acknowledge that no system is completely infallible. We recommend keeping your credentials secure and notifying us immediately of any unauthorized use.
        </p>

        <h3>COOKIES AND TRACKING TECHNOLOGIES</h3>

        <p>
          Our website uses cookies and similar technologies to improve the user experience, remember preferences, analyze browsing patterns, and optimize the operation of the site. You may configure your browser to reject cookies, although this may affect some functionalities.
        </p>

        <h3>MODIFICATIONS TO THIS NOTICE</h3>

        <p>
          Veltrion reserves the right to modify this notice at any time to adapt it to legislative changes, jurisprudential developments, internal policies, or new operational requirements. Modifications will be published on our website with the date of the latest update.
        </p>

        <p>
          We recommend periodically reviewing this notice to stay informed about how we protect your information.
        </p>

        <h3>ACCEPTANCE OF TERMS</h3>

        <p>
          The use of our services and the provision of personal information constitute your express acceptance of this privacy notice and your consent to data processing in accordance with the terms established herein.
        </p>

        <p>
          Last updated: June 2025
        </p>
      </section>

    </div >
  );
}



export default function LegalPage() {
  const locale = useLocale();

  return (
    <div className="min-h-screen flex flex-col bg-[#000000] text-white">
      <Header />
      <main className="flex-grow container mx-auto px-6 py-20 max-w-4xl">
        {locale === "es" ? <LegalEs /> : <LegalEn />}
      </main>
      <Footer />
    </div>
  );
}