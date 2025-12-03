import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Cayumanque - Agencia Digital de Diseño",
  description:
    "Impulsando la región con diseño y tecnología. Servicios de diseño, marketing, publicidad y consultoría empresarial.",
  generator: "v0.app",
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png" },
      { url: "/logo-cayumanque.png", type: "image/png" },
    ],
    apple: "/logo-cayumanque.png",
    shortcut: "/favicon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
