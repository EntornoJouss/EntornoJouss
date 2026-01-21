import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

import { Heebo as V0_Font_Heebo, Dancing_Script as V0_Font_Dancing_Script, Lora as V0_Font_Lora } from 'next/font/google'

// Initialize fonts
const _heebo = V0_Font_Heebo({ subsets: ['latin'], weight: ["100","200","300","400","500","600","700","800","900"] })
const _dancingScript = V0_Font_Dancing_Script({ subsets: ['latin'], weight: ["400","500","600","700"] })
const _lora = V0_Font_Lora({ subsets: ['latin'], weight: ["400","500","600","700"] })

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
      <body className={`font-sans antialiased`} style={{ zoom: "0.9" }}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
