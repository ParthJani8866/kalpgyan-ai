import {
  Brain,
  Target,
  BookOpen,
  BarChart,
  Sparkles,
} from "lucide-react"
import Header from "../components/Header"
import Footer from "../components/Footer"

/* ---------------- SEO ---------------- */

export const metadata = {
  title: "About KalpGyan AI – Smarter Learning for Competitive Exams",
  description:
    "KalpGyan AI is an AI-powered learning platform for UPSC, JEE, NEET and Government exams — combining smart notes, practice, analytics and personalization.",
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900">
          About KalpGyan AI
        </h1>

        <p className="mt-4 text-slate-600 max-w-3xl">
          KalpGyan AI is built to help students prepare smarter — not harder.
          We combine structured syllabus, intelligent notes, practice systems
          and AI guidance into one unified learning platform.
        </p>

        <div className="mt-6 flex flex-wrap gap-4">
          <Stat icon={<Brain />} label="AI Powered Learning" />
          <Stat icon={<BookOpen />} label="Structured Syllabus" />
          <Stat icon={<Target />} label="Exam Focused" />
          <Stat icon={<BarChart />} label="Performance Analytics" />
        </div>
      </section>

      {/* MISSION */}
      <section className="bg-slate-50 py-14">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-slate-900">
            Our Mission
          </h2>

          <p className="mt-4 text-slate-600">
            To democratize high-quality exam preparation by blending
            human-like teaching with artificial intelligence —
            making learning personalized, affordable, and effective
            for every student.
          </p>
        </div>
      </section>

      {/* WHAT MAKES US DIFFERENT */}
      <section className="py-14">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-slate-900 text-center mb-10">
            What Makes KalpGyan AI Different?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <Feature
              icon={<Sparkles className="text-indigo-600" />}
              title="AI Assisted Learning"
              desc="Instant explanations, smart summaries, and concept clarity powered by AI."
            />

            <Feature
              icon={<BookOpen className="text-emerald-600" />}
              title="Structured Notes"
              desc="Exam-oriented notes designed from NCERT + standard references."
            />

            <Feature
              icon={<BarChart className="text-purple-600" />}
              title="Performance Insights"
              desc="Track strengths, weaknesses, and progress with intelligent analytics."
            />
          </div>
        </div>
      </section>

      {/* VISION */}
      <section className="bg-slate-50 py-14">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-slate-900">
            Our Vision
          </h2>

          <p className="mt-4 text-slate-600">
            We envision a future where every learner has access to a
            personal AI mentor — guiding them through complex subjects,
            adapting to their pace, and helping them achieve their goals.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-indigo-600 py-14 text-center text-white">
        <h2 className="text-2xl font-bold">
          Join the Future of Learning
        </h2>

        <p className="mt-3 text-indigo-100">
          Prepare for UPSC, JEE, NEET & Government exams with KalpGyan AI.
        </p>

        <a
          href="/signup"
          className="inline-block mt-6 bg-white text-indigo-600 px-6 py-3 rounded-lg font-medium"
        >
          Start Free Learning
        </a>
      </section>

      <Footer />
    </div>
  )
}

/* ---------------- COMPONENTS ---------------- */

function Stat({ icon, label }: any) {
  return (
    <div className="flex items-center gap-2 text-sm text-slate-700">
      {icon}
      <span>{label}</span>
    </div>
  )
}

function Feature({ icon, title, desc }: any) {
  return (
    <div className="bg-white border border-slate-200 rounded-xl p-6 text-center">
      <div className="flex justify-center mb-4">{icon}</div>
      <h3 className="font-semibold text-slate-900">{title}</h3>
      <p className="mt-2 text-sm text-slate-600">{desc}</p>
    </div>
  )
}
