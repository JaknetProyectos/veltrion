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
        <h1>TÉRMINOS Y CONDICIONES</h1>

        <h2>PACT2SALE, S.A. DE C.V (“Veltrion”)</h2>

        <p>
          El presente documento establece los términos y condiciones que rigen la contratación de servicios técnicos especializados para aplicaciones móviles ofrecidos por Veltrion. Al contratar cualquiera de nuestros servicios, aceptas quedar obligado por estos términos.
        </p>

        <h3>DEFINICIONES Y ALCANCE</h3>

        <p>
          Veltrion es una empresa especializada en mantenimiento técnico, optimización, seguridad y actualización de aplicaciones móviles para plataformas iOS y Android. Nuestros servicios se prestan bajo modalidad de facturación por hora trabajada, con tarifas diferenciadas según el nivel de complejidad técnica requerido.
        </p>

        <p>
          Para efectos de estos términos: “Cliente” se refiere a la persona física o moral que contrata los servicios; “Aplicación” se refiere al software móvil objeto del servicio; “Repositorio” se refiere al sistema de control de versiones donde se aloja el código fuente; “Sesión” se refiere a los bloques de tiempo contratados para servicios de mantenimiento preventivo.
        </p>

        <h3>MODALIDAD DE FACTURACIÓN</h3>

        <p>
          Todos los servicios se facturan por tiempo efectivamente trabajado. Al contratar, se establece un estimado de horas necesarias, pero el cobro final corresponde a las horas realmente invertidas según registros de tiempo (timesheets).
        </p>

        <p>
          Las tarifas publicadas son en pesos mexicanos más su respectivo IVA, el cual se adiciona conforme a la legislación fiscal vigente. Los precios pueden modificarse sin previo aviso, respetando siempre los proyectos ya contratados.
        </p>

        <h3>CONTRATACIÓN Y TRABAJO ADICIONAL</h3>

        <p>
          El servicio se contrata mediante solicitud formal donde se especifica el tipo de servicio, nivel de complejidad, y estimado de horas. Una vez confirmado, iniciamos el trabajo técnico.
        </p>

        <p>
          Si durante la ejecución se identifica que el trabajo requerido excede el alcance original estimado, esto se considera trabajo adicional fuera del alcance contratado. Cualquier ajuste o trabajo extra se facturará por separado a la tarifa horaria previamente acordada, y requiere autorización expresa del cliente antes de proceder.
        </p>

        <h3>OBLIGACIONES DEL CLIENTE</h3>

        <p>Para que podamos prestar el servicio adecuadamente, el cliente debe:</p>

        <ul>
          <li>
            Proporcionar acceso completo a repositorios de código fuente (GitHub, GitLab, Bitbucket u otros), credenciales necesarias para herramientas de desarrollo, certificados de firma, claves API, y documentación técnica relevante.
          </li>
          <li>
            Describir con claridad los problemas reportados, proporcionar logs de errores, y facilitar pasos para reproducir bugs cuando sea posible.
          </li>
          <li>
            Responder oportunamente a consultas técnicas y revisar avances presentados en plazos razonables.
          </li>
          <li>
            Garantizar que posee derechos legales sobre el código fuente y que no infringe propiedad intelectual de terceros.
          </li>
          <li>
            Realizar respaldos de su aplicación antes de iniciar trabajos de actualización o modificación significativa.
          </li>
        </ul>

        <h3>LIMITACIONES Y EXCLUSIONES</h3>

        <p>
          Veltrion garantiza que el trabajo se realiza con estándares profesionales de la industria y mejores prácticas de desarrollo móvil. Sin embargo, existen limitaciones inherentes:
        </p>

        <ul>
          <li>
            No garantizamos que la aplicación estará libre de errores de manera absoluta tras nuestro trabajo, ya que el software es inherentemente complejo y pueden surgir nuevos problemas.
          </li>
          <li>
            No somos responsables por pérdida de datos si el cliente no realizó respaldos adecuados, ni por problemas causados por código o dependencias de terceros fuera de nuestro control.
          </li>
          <li>
            No garantizamos aprobación en tiendas de aplicaciones (App Store, Google Play), ya que estas plataformas tienen políticas propias que pueden cambiar.
          </li>
          <li>
            No respondemos por interrupciones del servicio causadas por fallas en plataformas de terceros (GitHub, servicios cloud, APIs externas), ni por problemas derivados de decisiones de diseño o arquitectura preexistentes que no fueron parte del alcance contratado.
          </li>
          <li>
            Nuestra responsabilidad máxima se limita al monto pagado por el servicio específico en cuestión.
          </li>
        </ul>

        <h3>PROPIEDAD INTELECTUAL</h3>

        <p>
          El código fuente de la aplicación y todos los desarrollos originales del cliente permanecen como su propiedad. Las correcciones, actualizaciones y optimizaciones que realicemos se integran a tu código y pasan a ser parte de tu propiedad una vez liquidado el pago.
        </p>

        <p>
          Las metodologías, herramientas propietarias, scripts de automatización, y conocimiento técnico especializado de Veltrion permanecen como nuestra propiedad intelectual.
        </p>

        <h3>CONFIDENCIALIDAD</h3>

        <p>
          Toda información técnica, comercial y estratégica que conozcamos durante la prestación del servicio se maneja con estricta confidencialidad. No divulgamos código fuente, secretos comerciales, ni información sensible del cliente, salvo requerimiento legal debidamente fundado.
        </p>

        <p>
          Esta obligación permanece vigente incluso después de concluida la relación comercial.
        </p>

        <h3>TERMINACIÓN</h3>

        <p>
          Cualquiera de las partes puede terminar la relación comercial en cualquier momento. En servicios por hora, simplemente se liquidan las horas trabajadas hasta el momento de la terminación.
        </p>

        <p>
          Veltrion puede suspender o terminar el servicio si el cliente incumple con obligaciones de pago, proporciona información falsa, solicita trabajos para fines ilegales, o mantiene conducta inapropiada hacia nuestro equipo.
        </p>

        <h3>LEGISLACIÓN Y JURISDICCIÓN</h3>

        <p>
          Estos términos se rigen por las leyes de los Estados Unidos Mexicanos. Cualquier controversia se resolverá en los tribunales competentes de la Ciudad de México, renunciando expresamente a cualquier otro fuero que pudiera corresponder.
        </p>

        <h3>MODIFICACIONES</h3>

        <p>
          Estos términos pueden actualizarse ocasionalmente. Las modificaciones entran en vigor al publicarse en nuestro sitio web y aplican para contrataciones futuras. Servicios ya contratados se rigen por los términos vigentes al momento de la contratación.
        </p>

        <p>
          Contacto: cuentas@veltrion.com.mx.mx
        </p>

        <p>
          Última actualización: Junio 2026
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
        <h1>TERMS AND CONDITIONS</h1>

        <h2>PACT2SALE, S.A. DE C.V (“Veltrion”)</h2>

        <p>
          This document establishes the terms and conditions governing the contracting of specialized technical services for mobile applications offered by Veltrion. By hiring any of our services, you agree to be bound by these terms.
        </p>

        <h3>DEFINITIONS AND SCOPE</h3>

        <p>
          Veltrion is a company specialized in technical maintenance, optimization, security, and updating of mobile applications for iOS and Android platforms. Our services are provided under an hourly billing model, with differentiated rates depending on the level of technical complexity required.
        </p>

        <p>
          For the purposes of these terms: “Client” refers to the individual or legal entity hiring the services; “Application” refers to the mobile software subject to the service; “Repository” refers to the version control system where the source code is hosted; “Session” refers to the blocks of time contracted for preventive maintenance services.
        </p>

        <h3>BILLING MODEL</h3>

        <p>
          All services are billed based on the actual time worked. Upon contracting, an estimate of the required hours is established, but the final charge corresponds to the actual hours invested according to time records (timesheets).
        </p>

        <p>
          Published rates are in Mexican pesos plus the corresponding VAT, which is added in accordance with current tax legislation. Prices may change without prior notice, always respecting projects already contracted.
        </p>

        <h3>CONTRACTING AND ADDITIONAL WORK</h3>

        <p>
          The service is contracted through a formal request specifying the type of service, level of complexity, and estimated hours. Once confirmed, we begin the technical work.
        </p>

        <p>
          If during execution it is identified that the required work exceeds the originally estimated scope, this shall be considered additional work outside the contracted scope. Any adjustments or extra work will be billed separately at the previously agreed hourly rate and require the client’s express authorization before proceeding.
        </p>

        <h3>CLIENT OBLIGATIONS</h3>

        <p>In order for us to provide the service properly, the client must:</p>

        <ul>
          <li>
            Provide full access to source code repositories (GitHub, GitLab, Bitbucket, or others), necessary credentials for development tools, signing certificates, API keys, and relevant technical documentation.
          </li>
          <li>
            Clearly describe reported issues, provide error logs, and facilitate steps to reproduce bugs whenever possible.
          </li>
          <li>
            Respond promptly to technical inquiries and review presented progress within reasonable timeframes.
          </li>
          <li>
            Guarantee that they hold legal rights over the source code and that it does not infringe third-party intellectual property rights.
          </li>
          <li>
            Perform backups of their application before starting update work or significant modifications.
          </li>
        </ul>

        <h3>LIMITATIONS AND EXCLUSIONS</h3>

        <p>
          Veltrion guarantees that the work is carried out according to professional industry standards and mobile development best practices. However, there are inherent limitations:
        </p>

        <ul>
          <li>
            We do not guarantee that the application will be completely free of errors after our work, since software is inherently complex and new issues may arise.
          </li>
          <li>
            We are not responsible for data loss if the client did not perform adequate backups, nor for issues caused by third-party code or dependencies outside our control.
          </li>
          <li>
            We do not guarantee approval in application stores (App Store, Google Play), as these platforms have their own policies that may change.
          </li>
          <li>
            We are not responsible for service interruptions caused by failures in third-party platforms (GitHub, cloud services, external APIs), nor for issues derived from preexisting design or architecture decisions that were not part of the contracted scope.
          </li>
          <li>
            Our maximum liability is limited to the amount paid for the specific service in question.
          </li>
        </ul>

        <h3>INTELLECTUAL PROPERTY</h3>

        <p>
          The application source code and all original developments of the client remain their property. The corrections, updates, and optimizations we perform are integrated into your code and become part of your property once payment has been settled.
        </p>

        <p>
          Veltrion’s methodologies, proprietary tools, automation scripts, and specialized technical knowledge remain our intellectual property.
        </p>

        <h3>CONFIDENTIALITY</h3>

        <p>
          All technical, commercial, and strategic information we become aware of during the provision of the service is handled with strict confidentiality. We do not disclose source code, trade secrets, or sensitive client information, except under duly founded legal requirement.
        </p>

        <p>
          This obligation remains in force even after the commercial relationship has ended.
        </p>

        <h3>TERMINATION</h3>

        <p>
          Either party may terminate the commercial relationship at any time. In hourly services, only the hours worked up to the moment of termination shall be settled.
        </p>

        <p>
          Veltrion may suspend or terminate the service if the client fails to comply with payment obligations, provides false information, requests work for illegal purposes, or maintains inappropriate conduct toward our team.
        </p>

        <h3>GOVERNING LAW AND JURISDICTION</h3>

        <p>
          These terms are governed by the laws of the United Mexican States. Any controversy shall be resolved before the competent courts of Mexico City, expressly waiving any other jurisdiction that may correspond.
        </p>

        <h3>MODIFICATIONS</h3>

        <p>
          These terms may be updated occasionally. Modifications become effective upon publication on our website and apply to future contracts. Services already contracted are governed by the terms in force at the time of contracting.
        </p>

        <p>
          Contact: cuentas@veltrion.com.mx.mx
        </p>

        <p>
          Last updated: June 2026
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