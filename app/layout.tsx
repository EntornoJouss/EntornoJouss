import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

import { Inter, Playfair_Display, Assistant as V0_Font_Assistant, Lora as V0_Font_Lora } from 'next/font/google'

// Initialize fonts
const _assistant = V0_Font_Assistant({ subsets: ['latin'], weight: ["200","300","400","500","600","700","800"] })
const _lora = V0_Font_Lora({ subsets: ['latin'], weight: ["400","500","600","700"] })

// Initialize fonts with latin-ext for ñ support
const inter = Inter({ 
  subsets: ['latin', 'latin-ext'], 
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: '--font-inter'
})
const playfair = Playfair_Display({ 
  subsets: ['latin', 'latin-ext'], 
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: '--font-playfair'
})

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
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`} style={{ zoom: "0.9" }}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
