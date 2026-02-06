"use client"

import { useEffect, useState } from "react"

export default function CookieConsent() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem("cookie_consent")
    if (!consent) setVisible(true)
  }, [])

  const acceptCookies = () => {
    localStorage.setItem("cookie_consent", "accepted")
    setVisible(false)
  }

  const rejectCookies = () => {
    localStorage.setItem("cookie_consent", "rejected")
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="fixed bottom-0 inset-x-0 bg-slate-900 text-white p-4 z-50">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm">
          We use cookies to improve your experience on KalpGyan AI.
        </p>

        <div className="flex gap-3">
          <button
            onClick={rejectCookies}
            className="px-4 py-2 text-sm border border-white/40 rounded"
          >
            Reject
          </button>

          <button
            onClick={acceptCookies}
            className="px-4 py-2 text-sm bg-indigo-600 rounded"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  )
}
