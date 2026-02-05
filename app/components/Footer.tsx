import Image from "next/image"

export default function Footer() {
  return (
    <footer className="border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* BRAND */}
          <div>
            <Image
              src="/logo.png"
              alt="KalpGyan AI Logo"
              width={150}
              height={50}
            />
            <p className="text-sm text-slate-600 mt-4">
              Concept-based learning platform for competitive exam aspirants.
            </p>
          </div>

          {/* EXAMS */}
          <div>
            <h4 className="font-semibold text-slate-900 mb-4">Exams</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/neet" className="footer-link">NEET Preparation</a></li>
              <li><a href="/jee" className="footer-link">JEE Preparation</a></li>
              <li><a href="/upsc" className="footer-link">UPSC Preparation</a></li>
              <li><a href="/tests" className="footer-link">Mock Tests</a></li>
            </ul>
          </div>

          {/* RESOURCES */}
          <div>
            <h4 className="font-semibold text-slate-900 mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/blog" className="footer-link">Study Blog</a></li>
              <li><a href="/videos" className="footer-link">Video Library</a></li>
              <li><a href="/notes" className="footer-link">PDF Notes</a></li>
              <li><a href="/practicals" className="footer-link">Virtual Labs</a></li>
            </ul>
          </div>

          {/* COMPANY */}
          <div>
            <h4 className="font-semibold text-slate-900 mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/about" className="footer-link">About Us</a></li>
              <li><a href="/contact" className="footer-link">Contact</a></li>
              <li><a href="/privacy" className="footer-link">Privacy Policy</a></li>
              <li><a href="/terms" className="footer-link">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-200 mt-8 pt-8 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} KalpGyan AI. All rights reserved.
        </div>
      </div>
    </footer>
  )
}