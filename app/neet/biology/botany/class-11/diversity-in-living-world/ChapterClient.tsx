"use client"

import { useState } from "react"
import Footer from "@/app/components/Footer"
import Header from "@/app/components/Header"
import NeetSidebar from "@/app/components/NeetSidebar"
import { Menu } from "lucide-react"

/* ---------------- PAGE ---------------- */

export default function DiversityInLivingWorld() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* MOBILE MENU BUTTON */}
      <button
        onClick={() => setSidebarOpen(true)}
        className="
          lg:hidden
          fixed
          top-16
          left-4
          z-[60]
          bg-white
          border
          rounded-xl
          p-2
          shadow-md
        "
        aria-label="Open syllabus navigation"
      >
        <Menu className="w-6 h-6" />
      </button>

      {/* MAIN LAYOUT */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[280px_1fr]">

        <NeetSidebar
          open={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
        />

        <main className="px-4 pt-24 lg:pt-10 lg:px-10">
          {/* HERO */}
          <section className="mb-10">
            <h1 className="text-3xl sm:text-4xl font-bold text-slate-900">
              Diversity in the Living World
            </h1>

            <p className="mt-4 text-slate-600 max-w-4xl">
              NCERT-based explanation of Diversity in Living World for NEET Biology.
            </p>
          </section>

          {/* CONTENT */}
          <section className="bg-slate-50 rounded-xl p-6 sm:p-10 space-y-8 leading-relaxed">
            <p>
              The living world includes all organisms that show life processes such
              as growth, reproduction, and metabolism.
            </p>

            <p>
              Diversity refers to the variety of life forms present on Earth.
            </p>

            <p>
              Classification helps in studying this diversity in a systematic way.
            </p>
          </section>

          {/* CTA */}
          <section className="mt-14 bg-indigo-600 py-14 text-center text-white rounded-xl">
            <h2 className="text-2xl font-bold">
              Continue NEET Biology with KalpGyan AI
            </h2>

            <a
              href="/neet/biology"
              className="inline-block mt-6 bg-white text-indigo-600 px-6 py-3 rounded-lg font-medium"
            >
              Explore More Biology Chapters
            </a>
          </section>
        </main>
      </div>

      <Footer />
    </div>
  )
}
