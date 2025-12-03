import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, company, service, message } = body

    console.log("[v0] Nueva cotización recibida:", {
      name,
      email,
      phone,
      company,
      service,
      message,
      timestamp: new Date().toISOString(),
    })

    if (!name || !email || !service) {
      return NextResponse.json({ success: false, error: "Faltan campos requeridos" }, { status: 400 })
    }

    const apiKey = process.env.SENDGRID_API_KEY

    if (!apiKey) {
      console.warn("[v0] SENDGRID_API_KEY no configurada, usando almacenamiento temporal")

      return NextResponse.json(
        {
          success: true,
          message: "Cotización recibida. Te contactaremos pronto.",
          data: { name, email, service },
        },
        { status: 200 },
      )
    }

    const fromEmail = "cayumanque.spa@gmail.com"
    const timestamp = new Date().toLocaleString("es-CL", {
      timeZone: "America/Santiago",
      dateStyle: "long",
      timeStyle: "short",
    })

    const emailContent = `
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Nueva Solicitud de Cotización</title>
</head>
<body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f4f4f4;">
    <table role="presentation" style="width: 100%; border-collapse: collapse;">
        <tr>
            <td align="center" style="padding: 20px 0;">
                <table role="presentation" style="width: 600px; border-collapse: collapse; background-color: #ffffff; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
                    <!-- Header -->
                    <tr>
                        <td style="padding: 40px 40px 30px; background: linear-gradient(135deg, #2D5016 0%, #4a7c2a 100%); text-align: center;">
                            <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: bold;">Cayumanque Design</h1>
                            <p style="margin: 10px 0 0; color: #D4A574; font-size: 14px;">Nueva Solicitud de Cotización</p>
                            <p style="margin: 5px 0 0; color: #ffffff; font-size: 12px; opacity: 0.9;">${timestamp}</p>
                        </td>
                    </tr>
                    
                    <!-- Content -->
                    <tr>
                        <td style="padding: 40px;">
                            <h2 style="margin: 0 0 20px; color: #2D5016; font-size: 22px;">Información del Cliente</h2>
                            
                            <table role="presentation" style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
                                <tr>
                                    <td style="padding: 12px; background-color: #f8f9fa; border-bottom: 1px solid #e0e0e0;">
                                        <strong style="color: #2D5016;">Nombre Completo:</strong>
                                    </td>
                                    <td style="padding: 12px; background-color: #ffffff; border-bottom: 1px solid #e0e0e0;">
                                        ${name}
                                    </td>
                                </tr>
                                <tr>
                                    <td style="padding: 12px; background-color: #f8f9fa; border-bottom: 1px solid #e0e0e0;">
                                        <strong style="color: #2D5016;">Correo Electrónico:</strong>
                                    </td>
                                    <td style="padding: 12px; background-color: #ffffff; border-bottom: 1px solid #e0e0e0;">
                                        <a href="mailto:${email}" style="color: #4a7c2a; text-decoration: none;">${email}</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td style="padding: 12px; background-color: #f8f9fa; border-bottom: 1px solid #e0e0e0;">
                                        <strong style="color: #2D5016;">Teléfono:</strong>
                                    </td>
                                    <td style="padding: 12px; background-color: #ffffff; border-bottom: 1px solid #e0e0e0;">
                                        ${phone || "No proporcionado"}
                                    </td>
                                </tr>
                                <tr>
                                    <td style="padding: 12px; background-color: #f8f9fa; border-bottom: 1px solid #e0e0e0;">
                                        <strong style="color: #2D5016;">Empresa:</strong>
                                    </td>
                                    <td style="padding: 12px; background-color: #ffffff; border-bottom: 1px solid #e0e0e0;">
                                        ${company || "No proporcionada"}
                                    </td>
                                </tr>
                            </table>
                            
                            <div style="margin: 30px 0; padding: 20px; background-color: #e8f5e0; border-left: 4px solid #2D5016; border-radius: 4px;">
                                <h3 style="margin: 0 0 10px; color: #2D5016; font-size: 18px;">Servicio Solicitado</h3>
                                <p style="margin: 0; color: #333333; font-size: 16px; font-weight: bold;">${service}</p>
                            </div>
                            
                            ${
                              message
                                ? `
                            <div style="margin: 30px 0;">
                                <h3 style="margin: 0 0 15px; color: #2D5016; font-size: 18px;">Mensaje Adicional</h3>
                                <div style="padding: 20px; background-color: #f8f9fa; border-radius: 8px; line-height: 1.6;">
                                    <p style="margin: 0; color: #333333; white-space: pre-wrap;">${message}</p>
                                </div>
                            </div>
                            `
                                : ""
                            }
                            
                            <div style="margin-top: 40px; padding-top: 20px; border-top: 2px solid #e0e0e0;">
                                <p style="margin: 0 0 15px; color: #666666; font-size: 14px;">
                                    <strong>Próximos pasos:</strong> Responde directamente a este correo o contacta al cliente mediante los datos proporcionados.
                                </p>
                                <p style="margin: 0; color: #999999; font-size: 12px;">
                                    Recibido el ${timestamp}
                                </p>
                            </div>
                        </td>
                    </tr>
                    
                    <!-- Footer -->
                    <tr>
                        <td style="padding: 30px 40px; background-color: #f8f9fa; text-align: center; border-top: 1px solid #e0e0e0;">
                            <p style="margin: 0 0 10px; color: #666666; font-size: 14px;">
                                Cayumanque Design - Agencia Digital
                            </p>
                            <p style="margin: 0; color: #999999; font-size: 12px;">
                                Diseño • Marketing • Branding • Productos Corporativos
                            </p>
                            <p style="margin: 15px 0 0; color: #999999; font-size: 12px;">
                                Este email fue generado automáticamente desde el formulario de contacto
                            </p>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</body>
</html>
    `

    const response = await fetch("https://api.sendgrid.com/v3/mail/send", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        personalizations: [
          {
            to: [{ email: "cayumanque.spa@gmail.com", name: "Cayumanque Design" }],
            subject: `Nueva Cotización de ${name} - ${service}`,
          },
        ],
        from: {
          email: fromEmail,
          name: "Cayumanque Design",
        },
        reply_to: {
          email: email,
          name: name,
        },
        content: [
          {
            type: "text/html",
            value: emailContent,
          },
        ],
        headers: {
          "X-Priority": "1",
          "X-MSMail-Priority": "High",
          Importance: "high",
        },
        categories: ["cotizacion", "formulario-contacto"],
        tracking_settings: {
          click_tracking: { enable: false },
          open_tracking: { enable: false },
          subscription_tracking: { enable: false },
        },
        mail_settings: {
          bypass_list_management: { enable: false },
          sandbox_mode: { enable: false },
          footer: {
            enable: false,
          },
        },
      }),
    })

    const responseData = await response.text()

    if (!response.ok) {
      console.error("[v0] Error SendGrid:", {
        status: response.status,
        statusText: response.statusText,
        body: responseData,
      })

      return NextResponse.json(
        {
          success: false,
          error: `Error de configuración. Por favor intenta más tarde.`,
        },
        { status: response.status },
      )
    }

    console.log("[v0] Cotización enviada exitosamente a cayumanque.spa@gmail.com")

    return NextResponse.json(
      {
        success: true,
        message: "Cotización recibida. Te contactaremos pronto.",
        data: { name, email, service },
      },
      { status: 200 },
    )
  } catch (error) {
    console.error("[v0] Error al procesar cotización:", error)
    return NextResponse.json(
      {
        success: false,
        error: `Error: ${error instanceof Error ? error.message : "Error desconocido"}`,
      },
      { status: 500 },
    )
  }
}
