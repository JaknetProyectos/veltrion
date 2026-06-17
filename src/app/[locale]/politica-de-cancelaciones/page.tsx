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
        <h1>POLÍTICA DE CANCELACIONES</h1>

        <h2>PACT2SALE, S.A. DE C.V (“Veltrion”)</h2>

        <p>
          Este documento establece las condiciones aplicables cuando un cliente desea cancelar o interrumpir servicios técnicos de mantenimiento de aplicaciones móviles contratados con PACT2SALE, S.A. DE C.V. (en adelante “Veltrion”).
        </p>

        <h3>Naturaleza de los servicios</h3>

        <p>
          Los servicios ofrecidos por Veltrion son de carácter técnico y especializado, y requieren una inversión inmediata de tiempo profesional, análisis de código, infraestructura digital y conocimientos avanzados. Cada proyecto es distinto y demanda asignación personalizada de recursos humanos calificados, por lo que no puede equipararse a la adquisición de productos estandarizados o servicios genéricos.
        </p>

        <h3>Cancelaciones y solicitudes de reembolso</h3>

        <p>
          Debido a la naturaleza de los servicios, todas las solicitudes de cancelación o reembolso se analizan individualmente, considerando el avance real del trabajo, las horas efectivamente invertidas y los costos irrecuperables asociados.
        </p>

        <ul>
          <li>
            Si la cancelación se solicita dentro de las primeras 24 horas posteriores a la contratación y el trabajo técnico aún no ha comenzado, podrá evaluarse un <strong>reembolso total</strong>, previa confirmación por parte del equipo de soporte.
          </li>
          <li>
            Transcurridas <strong>más de 24 horas</strong> desde la contratación, el <strong>reembolso total no aplica</strong>, salvo en errores transaccionales o situaciones excepcionales debidamente comprobadas (por ejemplo, duplicidad de pago o fallas del gateway de cobro).
          </li>
        </ul>

        <p>
          En cualquier otro escenario, el cliente podrá recibir un reembolso parcial proporcional al trabajo efectivamente realizado, con base en los registros técnicos del proyecto.
        </p>

        <h3>Servicios facturados por hora</h3>

        <p>
          En los servicios de <strong>mantenimiento, corrección de bugs, optimización o seguridad</strong> contratados bajo esquema <strong>por hora trabajada</strong>, el cliente puede solicitar <strong>cancelación o suspensión en cualquier momento</strong>.
        </p>

        <p>
          Únicamente se facturarán las <strong>horas efectivamente registradas</strong> hasta la recepción formal de la notificación, conforme a los <strong>timesheets o bitácoras del proyecto</strong>.
        </p>

        <p>
          Las horas no iniciadas <strong>no generan cobro</strong>, y cualquier pago anticipado podrá:
        </p>

        <ul>
          <li>
            aplicarse a servicios futuros, dentro de un plazo razonable acordado; o
          </li>
          <li>
            ser sujeto a <strong>reembolso parcial</strong>, según lo trabajado al momento de la cancelación.
          </li>
        </ul>

        <h3>Evaluación caso a caso</h3>

        <p>
          Cada solicitud se revisa considerando:
        </p>

        <ul>
          <li>
            el <strong>estado actual del proyecto</strong> y el avance documentado;
          </li>
          <li>
            los <strong>recursos técnicos o licencias</strong> ya invertidos;
          </li>
          <li>
            la <strong>causa</strong> que motiva la cancelación;
          </li>
          <li>
            la <strong>relación previa</strong> con el cliente y el cumplimiento histórico de compromisos.
          </li>
        </ul>

        <p>
          Con base en estos factores, Veltrion determinará las alternativas de resolución aplicables, comunicándolas de forma clara y por escrito.
        </p>

        <h3>Alternativas de resolución</h3>

        <p>
          Dependiendo del caso, las soluciones pueden incluir:
        </p>

        <ul>
          <li>
            <strong>Reembolso proporcional</strong> por las horas o fases efectivamente completadas.
          </li>
          <li>
            <strong>Entrega parcial de avances</strong> (código modificado, reportes, documentación técnica).
          </li>
          <li>
            <strong>Suspensión temporal del proyecto</strong> hasta su reactivación futura.
          </li>
        </ul>

        <h3>Cancelación por causas atribuibles a Veltrion</h3>

        <p>
          Si por motivos imputables a Veltrion resulta imposible concluir el servicio (como indisponibilidad técnica, fallas estructurales o causas internas imprevistas), se ofrecerán <strong>mecanismos de compensación o reembolso apropiados</strong>, tales como:
        </p>

        <ul>
          <li>
            devolución del importe correspondiente a horas no trabajadas,
          </li>
          <li>
            reasignación de personal técnico sin costo adicional, o
          </li>
          <li>
            ajuste de condiciones económicas del contrato.
          </li>
        </ul>

        <h3>Casos especiales</h3>

        <ul>
          <li>
            <strong>Errores de facturación o cobro duplicado</strong> serán corregidos de inmediato, sin necesidad de proceso formal.
          </li>
          <li>
            Si se detecta <strong>imposibilidad técnica</strong> de continuar (por ejemplo, limitaciones estructurales del sistema del cliente), solo se facturará el <strong>diagnóstico realizado</strong> y se entregará la documentación correspondiente.
          </li>
          <li>
            En <strong>casos fortuitos o de fuerza mayor</strong> debidamente acreditados (incapacidad, disolución empresarial, fallecimiento del contratante), la solicitud se evaluará con flexibilidad.
          </li>
        </ul>

        <h3>Disputas y contracargos</h3>

        <p>
          Antes de iniciar reclamaciones o contracargos bancarios, se solicita al cliente contactar primero al área de soporte de Veltrion.
        </p>

        <p>
          Los contracargos sin contacto previo generan la <strong>suspensión inmediata de los servicios activos</strong> y la presentación de la <strong>evidencia técnica y contractual ante la institución emisora</strong>.
        </p>

        <h3>Proceso de cancelación</h3>

        <ol>
          <li>
            <strong>Solicitud escrita:</strong> enviar correo a cuentas@veltrion.com.mx, indicando el servicio contratado y motivo de la solicitud.
          </li>
          <li>
            <strong>Evaluación técnica:</strong> el equipo revisará avances, horas registradas y entregables generados.
          </li>
          <li>
            <strong>Resolución formal:</strong> se enviará respuesta en máximo <strong>5 días hábiles</strong>, con las opciones de resolución aplicables.
          </li>
          <li>
            <strong>Ejecución:</strong> una vez aceptada la resolución, se procederá a la emisión de factura, reembolso o entrega de documentación según corresponda.
          </li>
        </ol>

        <h3>Procesamiento de reembolsos</h3>

        <p>
          Cuando proceda, el reembolso se realizará a la misma cuenta o método de pago utilizado originalmente, dentro de los plazos determinados por la entidad financiera o el proveedor de pagos correspondiente.
        </p>

        <h3>Principios de equidad y revisión</h3>

        <p>
          Todas las solicitudes se analizan bajo criterios técnicos objetivos y uniformes, sin importar el monto o la antigüedad del cliente.
        </p>

        <p>
          En caso de disconformidad, el cliente puede solicitar una revisión secundaria, aportando información adicional relevante.
        </p>

        <h3>Actualización de políticas</h3>

        <p>
          Esta política puede actualizarse en cualquier momento. Las solicitudes se atenderán conforme a la versión vigente a la fecha de recepción de la solicitud de cancelación.
        </p>

        <p>
          Contacto: cuentas@veltrion.com.mx
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
        <h1>CANCELLATION POLICY</h1>

        <h2>PACT2SALE, S.A. DE C.V (“Veltrion”)</h2>

        <p>
          This document establishes the conditions applicable when a client wishes to cancel or interrupt technical maintenance services for mobile applications contracted with PACT2SALE, S.A. DE C.V. (hereinafter “Veltrion”).
        </p>

        <h3>Nature of the services</h3>

        <p>
          The services offered by Veltrion are technical and specialized in nature, and require an immediate investment of professional time, code analysis, digital infrastructure, and advanced knowledge. Each project is different and demands personalized allocation of qualified human resources, therefore it cannot be equated with the acquisition of standardized products or generic services.
        </p>

        <h3>Cancellations and refund requests</h3>

        <p>
          Due to the nature of the services, all cancellation or refund requests are analyzed individually, considering the actual progress of the work, the hours effectively invested, and the associated unrecoverable costs.
        </p>

        <ul>
          <li>
            If the cancellation is requested within the first 24 hours after contracting and the technical work has not yet begun, a <strong>full refund</strong> may be evaluated, subject to confirmation by the support team.
          </li>
          <li>
            After <strong>more than 24 hours</strong> from contracting, a <strong>full refund does not apply</strong>, except in transactional errors or duly verified exceptional situations (for example, duplicate payment or payment gateway failures).
          </li>
        </ul>

        <p>
          In any other scenario, the client may receive a partial refund proportional to the work effectively completed, based on the technical records of the project.
        </p>

        <h3>Hourly billed services</h3>

        <p>
          In services for <strong>maintenance, bug fixing, optimization, or security</strong> contracted under an <strong>hourly billing</strong> scheme, the client may request <strong>cancellation or suspension at any time</strong>.
        </p>

        <p>
          Only the <strong>hours effectively recorded</strong> up to the formal receipt of the notification will be billed, according to the project <strong>timesheets or logs</strong>.
        </p>

        <p>
          Hours not yet started <strong>do not generate charges</strong>, and any advance payment may:
        </p>

        <ul>
          <li>
            be applied to future services within a reasonable agreed timeframe; or
          </li>
          <li>
            be subject to a <strong>partial refund</strong>, depending on the work completed at the time of cancellation.
          </li>
        </ul>

        <h3>Case-by-case evaluation</h3>

        <p>
          Each request is reviewed considering:
        </p>

        <ul>
          <li>
            the <strong>current status of the project</strong> and the documented progress;
          </li>
          <li>
            the <strong>technical resources or licenses</strong> already invested;
          </li>
          <li>
            the <strong>cause</strong> motivating the cancellation;
          </li>
          <li>
            the <strong>prior relationship</strong> with the client and the historical fulfillment of commitments.
          </li>
        </ul>

        <p>
          Based on these factors, Veltrion will determine the applicable resolution alternatives, communicating them clearly and in writing.
        </p>

        <h3>Resolution alternatives</h3>

        <p>
          Depending on the case, solutions may include:
        </p>

        <ul>
          <li>
            <strong>Proportional refund</strong> for the hours or phases effectively completed.
          </li>
          <li>
            <strong>Partial delivery of progress</strong> (modified code, reports, technical documentation).
          </li>
          <li>
            <strong>Temporary suspension of the project</strong> until future reactivation.
          </li>
        </ul>

        <h3>Cancellation due to causes attributable to Veltrion</h3>

        <p>
          If, for reasons attributable to Veltrion, it becomes impossible to complete the service (such as technical unavailability, structural failures, or unforeseen internal causes), <strong>appropriate compensation or refund mechanisms</strong> will be offered, such as:
        </p>

        <ul>
          <li>
            refund of the amount corresponding to unworked hours,
          </li>
          <li>
            reassignment of technical personnel at no additional cost, or
          </li>
          <li>
            adjustment of the economic conditions of the contract.
          </li>
        </ul>

        <h3>Special cases</h3>

        <ul>
          <li>
            <strong>Billing errors or duplicate charges</strong> will be corrected immediately, without the need for a formal process.
          </li>
          <li>
            If a <strong>technical impossibility</strong> to continue is detected (for example, structural limitations of the client’s system), only the <strong>diagnosis performed</strong> will be billed and the corresponding documentation will be delivered.
          </li>
          <li>
            In <strong>fortuitous events or force majeure cases</strong> duly accredited (disability, business dissolution, death of the contracting party), the request will be evaluated flexibly.
          </li>
        </ul>

        <h3>Disputes and chargebacks</h3>

        <p>
          Before initiating claims or bank chargebacks, the client is requested to first contact Veltrion’s support area.
        </p>

        <p>
          Chargebacks without prior contact will result in the <strong>immediate suspension of active services</strong> and the presentation of the <strong>technical and contractual evidence before the issuing institution</strong>.
        </p>

        <h3>Cancellation process</h3>

        <ol>
          <li>
            <strong>Written request:</strong> send an email to cuentas@veltrion.com.mx, indicating the contracted service and the reason for the request.
          </li>
          <li>
            <strong>Technical evaluation:</strong> the team will review progress, recorded hours, and generated deliverables.
          </li>
          <li>
            <strong>Formal resolution:</strong> a response will be sent within a maximum of <strong>5 business days</strong>, with the applicable resolution options.
          </li>
          <li>
            <strong>Execution:</strong> once the resolution is accepted, the corresponding invoice, refund, or delivery of documentation will proceed as applicable.
          </li>
        </ol>

        <h3>Refund processing</h3>

        <p>
          When applicable, the refund will be made to the same account or payment method originally used, within the deadlines determined by the financial institution or the corresponding payment provider.
        </p>

        <h3>Principles of fairness and review</h3>

        <p>
          All requests are analyzed under objective and uniform technical criteria, regardless of the amount or the client’s seniority.
        </p>

        <p>
          In case of disagreement, the client may request a secondary review by providing additional relevant information.
        </p>

        <h3>Policy updates</h3>

        <p>
          This policy may be updated at any time. Requests will be handled according to the version in force on the date the cancellation request is received.
        </p>

        <p>
          Contact: cuentas@veltrion.com.mx
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