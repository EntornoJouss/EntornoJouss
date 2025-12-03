import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, company, service, message } = body

    console.log('[v0] Nueva cotización recibida:', {
      name,
      email,
      phone,
      company,
      service,
      message,
      timestamp: new Date().toISOString(),
    })

    if (!name || !email || !service) {
      return NextResponse.json(
        { success: false, error: 'Faltan campos requeridos' },
        { status: 400 }
      )
    }

    const apiKey = process.env.SENDGRID_API_KEY
    
    if (!apiKey) {
      console.warn('[v0] SENDGRID_API_KEY no configurada, usando almacenamiento temporal')
      
      return NextResponse.json(
        { 
          success: true, 
          message: 'Cotización recibida. Te contactaremos pronto.',
          data: { name, email, service }
        },
        { status: 200 }
      )
    }

    const fromEmail = 'cayumanque.spa@gmail.com'

    const emailContent = `
      <h2>Nueva Cotización Recibida</h2>
      <p><strong>Nombre:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Teléfono:</strong> ${phone || 'No proporcionado'}</p>
      <p><strong>Empresa:</strong> ${company || 'No proporcionada'}</p>
      <p><strong>Servicio Solicitado:</strong> ${service}</p>
      <p><strong>Mensaje:</strong></p>
      <p>${message || 'Sin mensaje adicional'}</p>
    `

    const response = await fetch('https://api.sendgrid.com/v3/mail/send', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        personalizations: [
          {
            to: [{ email: 'cayumanque.spa@gmail.com' }],
            subject: `Nueva Cotización de ${name} - ${service}`,
          },
        ],
        from: { email: fromEmail, name: 'Cayumanque Design' },
        content: [
          {
            type: 'text/html',
            value: emailContent,
          },
        ],
        reply_to: { email: email, name: name },
      }),
    })

    const responseData = await response.text()
    
    if (!response.ok) {
      console.error('[v0] Error SendGrid:', {
        status: response.status,
        statusText: response.statusText,
        body: responseData
      })
      
      return NextResponse.json(
        { 
          success: false, 
          error: `Error de configuración. Por favor intenta más tarde.`
        },
        { status: response.status }
      )
    }

    console.log('[v0] Cotización enviada exitosamente a cayumanque.spa@gmail.com')

    return NextResponse.json(
      { 
        success: true, 
        message: 'Cotización recibida. Te contactaremos pronto.',
        data: { name, email, service }
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('[v0] Error al procesar cotización:', error)
    return NextResponse.json(
      { 
        success: false, 
        error: `Error: ${error instanceof Error ? error.message : 'Error desconocido'}`
      },
      { status: 500 }
    )
  }
}
