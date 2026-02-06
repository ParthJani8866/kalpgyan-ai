import Header from "../components/Header"
import Footer from "../components/Footer"

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="max-w-5xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-slate-900">
          Privacy Policy for KalpGyan AI
        </h1>

        <p className="mt-3 text-sm text-slate-600">
          Last updated: {new Date().toLocaleDateString()}
        </p>

        <div className="mt-8 space-y-6 text-sm leading-relaxed text-slate-700">

          <p>
            At KalpGyan AI, accessible from kalpgyan.ai, one of our main priorities
            is the privacy of our visitors. This Privacy Policy document contains
            types of information that are collected and recorded by KalpGyan AI and
            how we use it.
          </p>

          <p>
            If you have additional questions or require more information about our
            Privacy Policy, do not hesitate to contact us.
          </p>

          <h2 className="text-lg font-semibold text-slate-900">Information We Collect</h2>

          <p>
            We may collect personal information such as name, email address, and
            contact details when users register or contact us. We also automatically
            collect information such as IP addresses, browser type, ISP, date and
            time stamps, referring/exit pages, and possibly the number of clicks.
          </p>

          <h2 className="text-lg font-semibold text-slate-900">How We Use Your Information</h2>

          <ul className="list-disc ml-5 space-y-1">
            <li>Provide, operate, and maintain our website</li>
            <li>Improve and personalize user experience</li>
            <li>Understand and analyze user behavior</li>
            <li>Develop new features</li>
            <li>Communicate updates and support</li>
            <li>Prevent fraud</li>
          </ul>

          <h2 className="text-lg font-semibold text-slate-900">Cookies and Web Beacons</h2>

          <p>
            KalpGyan AI uses cookies to store visitor preferences and optimize user
            experience. Users may choose to disable cookies through browser options.
          </p>

          <h2 className="text-lg font-semibold text-slate-900">Google DoubleClick DART Cookie</h2>

          <p>
            Google is one of a third-party vendor on our site. It uses cookies, known
            as DART cookies, to serve ads to visitors based upon their visit to our
            website and other websites on the internet. Users may decline the use of
            DART cookies by visiting the Google ad and content network Privacy Policy.
          </p>

          <h2 className="text-lg font-semibold text-slate-900">Advertising Partners</h2>

          <p>
            Some advertisers on our site may use cookies and web beacons. Our
            advertising partners include:
          </p>

          <ul className="list-disc ml-5">
            <li>Google</li>
          </ul>

          <p>
            Each of our advertising partners has their own Privacy Policy. You may
            consult Google’s Privacy Policy at https://policies.google.com/privacy
          </p>

          <h2 className="text-lg font-semibold text-slate-900">Third Party Privacy Policies</h2>

          <p>
            KalpGyan AI's Privacy Policy does not apply to other advertisers or
            websites. We advise you to consult the respective Privacy Policies of
            third-party ad servers for more detailed information.
          </p>

          <h2 className="text-lg font-semibold text-slate-900">CCPA Privacy Rights</h2>

          <p>
            Under the CCPA, users have the right to request access, deletion, or
            disclosure of personal data collected. If you wish to exercise these
            rights, please contact us.
          </p>

          <h2 className="text-lg font-semibold text-slate-900">GDPR Data Protection Rights</h2>

          <p>
            Users are entitled to rights including access, rectification, erasure,
            restriction, and portability of personal data. You may contact us to
            exercise these rights.
          </p>

          <h2 className="text-lg font-semibold text-slate-900">Children’s Information</h2>

          <p>
            KalpGyan AI does not knowingly collect Personal Identifiable Information
            from children under the age of 13. If you believe your child provided
            this information, please contact us.
          </p>

          <h2 className="text-lg font-semibold text-slate-900">Consent</h2>

          <p>
            By using our website, you hereby consent to our Privacy Policy and agree
            to its terms.
          </p>

          <h2 className="text-lg font-semibold text-slate-900">Contact Us</h2>

          <p>
            For privacy-related questions, contact:
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
