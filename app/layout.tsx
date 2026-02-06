import "./globals.css"
import type { Metadata } from "next"
import localFont from "next/font/local"
import CookieConsent from "./components/CookieConsent"

const satoshi = localFont({
  src: [
    { path: "./Fonts/WEB/fonts/Satoshi-Regular.woff2", weight: "400" },
    { path: "./Fonts/WEB/fonts/Satoshi-Medium.woff2", weight: "500" },
    { path: "./Fonts/WEB/fonts/Satoshi-Bold.woff2", weight: "700" },
  ],
  variable: "--font-satoshi",
})

export const metadata: Metadata = {
  title: "KalpGyan AI – NEET, JEE & UPSC Concepts Explained Clearly",
  description:
    "Free, topic-wise NEET, JEE and UPSC notes with clear explanations, diagrams and exam-focused learning.",
  keywords: [
    "NEET preparation",
    "JEE preparation",
    "UPSC preparation",
    "NCERT notes",
    "Biology Physics Chemistry notes",
  ],
  authors: [{ name: "KalpGyan AI" }],
  robots: "index, follow",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${satoshi.variable} font-sans bg-slate-50 text-slate-900`}>
        <CookieConsent />
        {children}
      </body>
    </html>
  )
}