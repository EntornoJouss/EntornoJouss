import { NextResponse } from "next/server"
import { cookies } from "next/headers"

export async function GET() {
  const cookieStore = await cookies()
  const token = cookieStore.get("admin_token")

  if (!token) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  // Verificar que el token sea válido (formato básico)
  try {
    const decoded = Buffer.from(token.value, "base64").toString()
    if (decoded.startsWith("admin:")) {
      return NextResponse.json({ authenticated: true })
    }
  } catch {
    return NextResponse.json({ error: "Invalid token" }, { status: 401 })
  }

  return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
}
