"use client"

import Link from "next/link"
import { X } from "lucide-react"
import { neetSidebarData } from "@/app/data/neetSidebarData"

interface Props {
  open: boolean
  onClose: () => void
}

export default function NeetSidebar({ open, onClose }: Props) {
  return (
    <>
      {/* OVERLAY (mobile) */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* SIDEBAR */}
      <aside
        className={`
          fixed top-0 left-0
          h-screen w-[280px]
          bg-white border-r
          z-50
          transform transition-transform duration-300
          ${open ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0 lg:sticky
        `}
      >
        {/* MOBILE HEADER */}
        <div className="flex items-center justify-between p-4 border-b lg:hidden">
          <span className="font-semibold text-slate-800">
            NEET Syllabus
          </span>
          <button onClick={onClose}>
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* NAVIGATION */}
        <nav className="p-4 space-y-6 overflow-y-auto h-full pb-24">
          {neetSidebarData.map((group) => (
            <div key={group.title}>
              <h3 className="text-xs font-bold uppercase text-slate-500 mb-2">
                {group.title}
              </h3>

              {group.subjects.map((sub) => (
                <div key={sub.name} className="mb-4">
                  <p className="text-sm font-semibold text-slate-700 mb-1">
                    {sub.name}
                  </p>

                  <ul className="space-y-1">
                    {sub.chapters.map((ch) => (
                      <li key={ch.slug}>
                        <Link
                          href={ch.slug}
                          onClick={onClose}
                          className="block px-3 py-2 rounded-lg text-sm text-slate-700 hover:bg-slate-100"
                        >
                          {ch.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ))}
        </nav>
      </aside>
    </>
  )
}
