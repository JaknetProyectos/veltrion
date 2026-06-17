import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const SUPPORT_EMAIL = "cuentas@veltrion.com.mx";
const BRAND_NAME = "veltrion.com.mx";
const BRAND_URL = "https://veltrion.com.mx";

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function formatMessage(value: string) {
  return escapeHtml(value).replace(/\n/g, "<br />");
}

function shell(content: string) {
  return `
    <!DOCTYPE html>
    <html lang="es">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <title>${BRAND_NAME}</title>
      </head>
      <body
        style="
          margin:0;
          padding:0;
          background:#050505;
          font-family:Arial, Helvetica, sans-serif;
          color:#ffffff;
        "
      >
        <table
          role="presentation"
          width="100%"
          border="0"
          cellspacing="0"
          cellpadding="0"
          style="background:#050505;"
        >
          <tr>
            <td align="center" style="padding:24px 12px;">
              <table
                role="presentation"
                width="100%"
                border="0"
                cellspacing="0"
                cellpadding="0"
                style="
                  max-width:720px;
                  width:100%;
                  border-collapse:collapse;
                  background:#0a0a0a;
                  border:1px solid rgba(255,255,255,0.08);
                "
              >
                ${content}
              </table>
            </td>
          </tr>
        </table>
      </body>
    </html>
  `;
}

function headerBlock(pretitle: string, title: string, subtitle: string) {
  return `
    <tr>
      <td
        style="
          padding:0;
          background:#0f1714;
          border-bottom:1px solid rgba(255,255,255,0.08);
        "
      >
        <table
          role="presentation"
          width="100%"
          border="0"
          cellspacing="0"
          cellpadding="0"
        >
          <tr>
            <td style="padding:34px 38px 30px 38px;">
              <table
                role="presentation"
                width="100%"
                border="0"
                cellspacing="0"
                cellpadding="0"
              >
                <tr>
                  <td valign="top" style="width:70%;">
                    <div
                      style="
                        display:inline-block;
                        padding:7px 10px;
                        margin-bottom:16px;
                        background:#ec397e;
                        color:#050505;
                        font-size:11px;
                        font-weight:800;
                        letter-spacing:0.16em;
                        text-transform:uppercase;
                      "
                    >
                      ${escapeHtml(pretitle)}
                    </div>

                    <h1
                      style="
                        margin:0;
                        color:#ffffff;
                        font-size:38px;
                        line-height:1;
                        letter-spacing:-0.06em;
                        font-weight:800;
                        max-width:520px;
                      "
                    >
                      ${escapeHtml(title)}
                    </h1>

                    <p
                      style="
                        margin:18px 0 0 0;
                        max-width:540px;
                        color:rgba(255,255,255,0.70);
                        font-size:15px;
                        line-height:1.85;
                      "
                    >
                      ${escapeHtml(subtitle)}
                    </p>
                  </td>

                  <td valign="top" align="right" style="width:30%; padding-left:18px;">
                    <table
                      role="presentation"
                      width="100%"
                      border="0"
                      cellspacing="0"
                      cellpadding="0"
                      style="
                        border-left:1px solid rgba(255,255,255,0.10);
                      "
                    >
                      <tr>
                        <td style="padding-left:18px; text-align:right;">
                          <p
                            style="
                              margin:0;
                              color:#ffffff;
                              font-size:13px;
                              line-height:1.4;
                              font-weight:700;
                              letter-spacing:0.16em;
                              text-transform:uppercase;
                            "
                          >
                            VELTRION
                          </p>

                          <p
                            style="
                              margin:10px 0 0 0;
                              color:rgba(255,255,255,0.42);
                              font-size:11px;
                              line-height:1.5;
                              letter-spacing:0.14em;
                              text-transform:uppercase;
                            "
                          >
                            Hosting web y soluciones digitales
                          </p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  `;
}

function infoRow(label: string, value: string, href?: string) {
  return `
    <tr>
      <td style="padding:0 38px;">
        <table
          role="presentation"
          width="100%"
          border="0"
          cellspacing="0"
          cellpadding="0"
          style="
            border-bottom:1px solid rgba(255,255,255,0.08);
          "
        >
          <tr>
            <td style="padding:18px 0; width:150px; vertical-align:top;">
              <p
                style="
                  margin:0;
                  color:#ec397e;
                  font-size:11px;
                  line-height:1.2;
                  font-weight:800;
                  letter-spacing:0.16em;
                  text-transform:uppercase;
                "
              >
                ${escapeHtml(label)}
              </p>
            </td>
            <td style="padding:18px 0; vertical-align:top;">
              ${
                href
                  ? `<a href="${escapeHtml(href)}" style="color:#ffffff; text-decoration:none; font-size:15px; line-height:1.8; font-weight:700;">${escapeHtml(value)}</a>`
                  : `<p style="margin:0; color:#ffffff; font-size:15px; line-height:1.8; font-weight:700;">${escapeHtml(value)}</p>`
              }
            </td>
          </tr>
        </table>
      </td>
    </tr>
  `;
}

function messageBlock(message: string) {
  return `
    <tr>
      <td style="padding:0 38px;">
        <table
          role="presentation"
          width="100%"
          border="0"
          cellspacing="0"
          cellpadding="0"
          style="
            background:#0d0d0d;
            border:1px solid rgba(255,255,255,0.08);
          "
        >
          <tr>
            <td style="padding:26px;">
              <p
                style="
                  margin:0 0 14px 0;
                  color:#ec397e;
                  font-size:11px;
                  line-height:1.2;
                  font-weight:800;
                  letter-spacing:0.16em;
                  text-transform:uppercase;
                "
              >
                Mensaje
              </p>

              <p
                style="
                  margin:0;
                  color:rgba(255,255,255,0.86);
                  font-size:15px;
                  line-height:2;
                "
              >
                ${message}
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  `;
}

function noteBlock(note: string) {
  return `
    <tr>
      <td style="padding:0 38px;">
        <table
          role="presentation"
          width="100%"
          border="0"
          cellspacing="0"
          cellpadding="0"
          style="
            background:#070707;
            border:1px solid rgba(255,255,255,0.08);
          "
        >
          <tr>
            <td style="padding:18px 22px;">
              <p
                style="
                  margin:0;
                  color:rgba(255,255,255,0.62);
                  font-size:12px;
                  line-height:1.8;
                "
              >
                ${note}
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  `;
}

function ctaBlock(label: string, href: string) {
  return `
    <tr>
      <td align="left" style="padding:0 38px;">
        <table
          role="presentation"
          border="0"
          cellspacing="0"
          cellpadding="0"
        >
          <tr>
            <td
              style="
                background:#ec397e;
                border:1px solid #ec397e;
              "
            >
              <a
                href="${escapeHtml(href)}"
                style="
                  display:inline-block;
                  padding:15px 22px;
                  color:#050505;
                  text-decoration:none;
                  font-size:13px;
                  line-height:1;
                  font-weight:800;
                  letter-spacing:0.08em;
                  text-transform:uppercase;
                "
              >
                ${escapeHtml(label)}
              </a>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  `;
}

function footerBlock() {
  return `
    <tr>
      <td
        style="
          padding:28px 38px 32px 38px;
          background:#050505;
          border-top:1px solid rgba(255,255,255,0.08);
        "
      >
        <table
          role="presentation"
          width="100%"
          border="0"
          cellspacing="0"
          cellpadding="0"
        >
          <tr>
            <td valign="top">
              <p
                style="
                  margin:0;
                  color:#ffffff;
                  font-size:13px;
                  line-height:1.5;
                  font-weight:800;
                  letter-spacing:0.16em;
                  text-transform:uppercase;
                "
              >
                ${BRAND_NAME}
              </p>
              <p
                style="
                  margin:8px 0 0 0;
                  color:rgba(255,255,255,0.42);
                  font-size:11px;
                  line-height:1.7;
                  letter-spacing:0.12em;
                  text-transform:uppercase;
                "
              >
                ${BRAND_URL}
              </p>
            </td>
            <td align="right" valign="top">
              <p
                style="
                  margin:0;
                  color:rgba(255,255,255,0.42);
                  font-size:11px;
                  line-height:1.8;
                "
              >
                © 2026 ${BRAND_NAME}. Todos los derechos reservados.
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  `;
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { nombre, email, mensaje } = body;

    if (!nombre || !email || !mensaje) {
      return NextResponse.json(
        { error: "Faltan campos requeridos (nombre, email, mensaje)" },
        { status: 400 }
      );
    }

    const safeNombre = escapeHtml(String(nombre).trim());
    const safeEmail = escapeHtml(String(email).trim());
    const safeMessage = formatMessage(String(mensaje).trim());

    const htmlNegocio = shell(`
      ${headerBlock(
        "Nuevo contacto",
        "Solicitud recibida desde el sitio",
        "Se envió un mensaje nuevo desde el formulario de veltrion.com.mx. Revisa los datos y responde con prioridad."
      )}

      ${infoRow("Nombre", String(nombre).trim())}
      ${infoRow("Correo", String(email).trim(), `mailto:${String(email).trim()}`)}
      ${messageBlock(safeMessage)}

      ${noteBlock(
        `Responder directamente a <strong style="color:#ffffff;">${safeEmail}</strong> para continuar la conversación.`
      )}

      ${footerBlock()}
    `);

    const htmlUsuario = shell(`
      ${headerBlock(
        "Mensaje recibido",
        "Gracias, ya lo tenemos",
        "Recibimos tu mensaje correctamente. Nuestro equipo lo revisará y dará seguimiento por correo."
      )}

      ${infoRow("Nombre", String(nombre).trim())}
      ${infoRow("Correo", String(email).trim(), `mailto:${String(email).trim()}`)}
      ${messageBlock(safeMessage)}

      ${ctaBlock("Volver al sitio", BRAND_URL)}

      ${footerBlock()}
    `);

    await Promise.all([
      resend.emails.send({
        from: `Veltrion <${SUPPORT_EMAIL}>`,
        to: [SUPPORT_EMAIL],
        replyTo: String(email).trim(),
        subject: `Nuevo mensaje web: ${String(nombre).trim()}`,
        html: htmlNegocio,
      }),
      resend.emails.send({
        from: `Veltrion <${SUPPORT_EMAIL}>`,
        to: [String(email).trim()],
        subject: "Hemos recibido tu mensaje - Veltrion",
        html: htmlUsuario,
      }),
    ]);

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("❌ Error enviando correos:", error);

    return NextResponse.json(
      {
        error: error?.message || "Error al procesar la solicitud",
      },
      { status: 500 }
    );
  }
}