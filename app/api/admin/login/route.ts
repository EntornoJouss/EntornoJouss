import { NextResponse } from "next/server"
import { cookies } from "next/headers"

// Contraseña de admin - en producción usar variable de entorno
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "cayumanque2024"

export async function POST(request: Request) {
  try {
    const { password } = await request.json()

    if (password === ADMIN_PASSWORD) {
      // Crear token simple (en producción usar JWT)
      const token = Buffer.from(`admin:${Date.now()}`).toString("base64")
      
      const cookieStore = await cookies()
      cookieStore.set("admin_token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        maxAge: 60 * 60 * 24, // 24 horas
        path: "/",
      })

      return NextResponse.json({ success: true })
    }

    return NextResponse.json({ error: "Invalid password" }, { status: 401 })
  } catch {
    return NextResponse.json({ error: "Server error" }, { status: 500 })
  }
}
