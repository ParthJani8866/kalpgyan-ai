import Header from "../components/Header"
import Footer from "../components/Footer"

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="max-w-5xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-slate-900">
          Terms of Service
        </h1>

        <p className="mt-3 text-sm text-slate-600">
          Last updated: {new Date().toLocaleDateString()}
        </p>

        <div className="mt-8 space-y-6 text-sm leading-relaxed text-slate-700">

          <p>
            Welcome to KalpGyan AI. By accessing or using our website and services,
            you agree to comply with and be bound by the following Terms of Service.
            If you do not agree with any part of these terms, please do not use our
            platform.
          </p>

          <h2 className="text-lg font-semibold text-slate-900">1. Acceptance of Terms</h2>

          <p>
            By accessing KalpGyan AI, you confirm that you are at least 13 years old
            and agree to these Terms along with our Privacy Policy.
          </p>

          <h2 className="text-lg font-semibold text-slate-900">2. Services</h2>

          <p>
            KalpGyan AI provides AI-powered learning tools, exam preparation content,
            notes, practice tests, and educational resources for competitive exams
            including UPSC, JEE, NEET, and others.
          </p>

          <h2 className="text-lg font-semibold text-slate-900">3. User Accounts</h2>

          <ul className="list-disc ml-5 space-y-1">
            <li>You are responsible for maintaining account confidentiality.</li>
            <li>You agree to provide accurate information.</li>
            <li>You are responsible for all activity under your account.</li>
          </ul>

          <h2 className="text-lg font-semibold text-slate-900">4. Acceptable Use</h2>

          <p>You agree NOT to:</p>

          <ul className="list-disc ml-5 space-y-1">
            <li>Use the platform for illegal purposes</li>
            <li>Attempt to hack or disrupt services</li>
            <li>Copy or resell content without permission</li>
            <li>Upload harmful or misleading content</li>
            <li>Misuse AI features</li>
          </ul>

          <h2 className="text-lg font-semibold text-slate-900">5. Intellectual Property</h2>

          <p>
            All content, logos, designs, AI outputs, and materials on KalpGyan AI are
            owned by us or licensed to us. You may not reproduce or redistribute
            without written permission.
          </p>

          <h2 className="text-lg font-semibold text-slate-900">6. Educational Disclaimer</h2>

          <p>
            KalpGyan AI provides educational assistance only. We do not guarantee exam
            results or success. Users are responsible for their own preparation and
            outcomes.
          </p>

          <h2 className="text-lg font-semibold text-slate-900">7. Advertisements</h2>

          <p>
            Our website may display advertisements provided by third parties such as
            Google AdSense. We are not responsible for third-party products or
            services advertised on our platform.
          </p>

          <h2 className="text-lg font-semibold text-slate-900">8. Termination</h2>

          <p>
            We reserve the right to suspend or terminate accounts that violate these
            Terms without prior notice.
          </p>

          <h2 className="text-lg font-semibold text-slate-900">9. Limitation of Liability</h2>

          <p>
            KalpGyan AI shall not be liable for any indirect, incidental, or
            consequential damages arising from your use of the platform.
          </p>

          <h2 className="text-lg font-semibold text-slate-900">10. Changes to Terms</h2>

          <p>
            We may update these Terms at any time. Continued use of the platform
            constitutes acceptance of updated terms.
          </p>

          <h2 className="text-lg font-semibold text-slate-900">11. Governing Law</h2>

          <p>
            These Terms shall be governed by and interpreted in accordance with the
            laws of India.
          </p>

          <h2 className="text-lg font-semibold text-slate-900">12. Contact Us</h2>

          <p>
            For any questions regarding these Terms, contact:
          </p>

          <p className="font-medium mt-2">
            support@kalpgyanai.com
          </p>

        </div>
      </section>

      <Footer />
    </div>
  )
}
