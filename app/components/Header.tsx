import Image from "next/image"
import { Search, Menu } from "lucide-react"

export default function Header() {
  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* LOGO + NAV */}
          <div className="flex items-center">
            <Image
              src="/logo.png"
              alt="KalpGyan AI Logo"
              width={150}
              height={50}
              priority
            />

            <div className="hidden md:flex ml-12 space-x-1">
              {["NEET", "JEE", "UPSC", "Notes", "Tests", "Blog"].map((item) => (
                <a
                  key={item}
                  href={`/${item.toLowerCase()}`}
                  className="px-4 py-2 text-sm font-medium text-slate-700 hover:text-indigo-600 rounded-lg hover:bg-slate-50 transition"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* ACTIONS */}
          <div className="flex items-center gap-3">
            <button className="hidden md:flex items-center gap-2 px-4 py-2 text-sm text-slate-600 hover:text-slate-900">
              <Search size={16} />
              Search
            </button>

            <a
              href="/login"
              className="px-4 py-2 text-sm font-medium text-slate-700 hover:text-indigo-600"
            >
              Login
            </a>

            <a
              href="/signup"
              className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-indigo-700 transition"
            >
              Get Started
            </a>

            <button className="md:hidden p-2">
              <Menu size={20} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}