import {
  BookOpen,
  Brain,
  Target,
  BarChart,
  Landmark,
  Globe,
  ScrollText,
  TrendingUp,
  Microscope,
  Leaf,
} from "lucide-react"
import Header from "../components/Header"
import Footer from "../components/Footer"

/* ---------------- SEO ---------------- */

export const metadata = {
  title: "UPSC CSE Syllabus – Prelims & Mains | KalpGyan AI",
  description:
    "Complete UPSC Civil Services syllabus with Prelims and Mains subject-wise breakdown including History, Polity, Geography, Economy, Environment and Science.",
}

/* ---------------- SYLLABUS DATA ---------------- */

const upscSyllabus = [
  {
    title: "History",
    slug: "/upsc/history",
    topics: [
      "Ancient India",
      "Medieval India",
      "Modern India",
      "World History",
      "Art & Culture",
    ],
    icon: <ScrollText className="text-amber-600" />,
  },
  {
    title: "Indian Polity",
    slug: "/upsc/polity",
    topics: [
      "Constitution",
      "Parliament",
      "Judiciary",
      "Federalism",
      "Governance",
    ],
    icon: <Landmark className="text-blue-600" />,
  },
  {
    title: "Geography",
    slug: "/upsc/geography",
    topics: [
      "Physical Geography",
      "Indian Geography",
      "World Geography",
      "Climatology",
      "Resources",
    ],
    icon: <Globe className="text-emerald-600" />,
  },
  {
    title: "Economy",
    slug: "/upsc/economy",
    topics: [
      "Basic Economics",
      "Budget",
      "Banking",
      "Inflation",
      "Growth & Development",
    ],
    icon: <TrendingUp className="text-purple-600" />,
  },
  {
    title: "Environment",
    slug: "/upsc/environment",
    topics: [
      "Ecology",
      "Climate Change",
      "Biodiversity",
      "Environmental Laws",
    ],
    icon: <Leaf className="text-green-600" />,
  },
  {
    title: "Science & Tech",
    slug: "/upsc/science-tech",
    topics: [
      "Biotechnology",
      "Space Tech",
      "AI & IT",
      "Defense Tech",
    ],
    icon: <Microscope className="text-indigo-600" />,
  },
]

/* ---------------- PAGE ---------------- */

export default function UpscPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900">
          UPSC CSE Complete Syllabus
        </h1>

        <p className="mt-4 text-slate-600 max-w-3xl">
          Full UPSC Prelims & Mains syllabus with structured learning paths.
          Click any cube to start preparation.
        </p>

        <div className="mt-6 flex flex-wrap gap-4">
          <Stat icon={<BookOpen />} label="NCERT + Standard Books" />
          <Stat icon={<Brain />} label="Concept Driven" />
          <Stat icon={<Target />} label="UPSC Focused" />
          <Stat icon={<BarChart />} label="AI Analytics" />
        </div>
      </section>

      {/* SYLLABUS */}
      <section className="bg-slate-50 py-14">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-3 gap-8">
          {upscSyllabus.map((s) => (
            <SyllabusCard
              key={s.slug}
              icon={s.icon}
              title={s.title}
              subtitle="Prelims + Mains"
              data={[s]}
            />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-indigo-600 py-14 text-center text-white">
        <h2 className="text-2xl font-bold">
          Prepare UPSC Smartly with KalpGyan AI
        </h2>
        <p className="mt-3 text-indigo-100">
          Notes, current affairs, PYQs, answer writing & AI feedback.
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

function SyllabusCard({ icon, title, subtitle, data }: any) {
  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 bg-slate-50 rounded-xl">{icon}</div>
        <div>
          <h3 className="font-bold text-xl text-slate-900">{title}</h3>
          <p className="text-sm text-slate-500">{subtitle}</p>
        </div>
      </div>

      {data.map((chapter: any) => (
        <a
          key={chapter.slug}
          href={chapter.slug}
          className="group border border-slate-200 rounded-xl p-4 bg-white hover:border-indigo-500 hover:shadow-md transition flex flex-col"
        >
          <ul className="space-y-1 text-xs text-slate-600">
            {chapter.topics.map((t: string) => (
              <li key={t}>• {t}</li>
            ))}
          </ul>

          <span className="mt-3 text-xs font-medium text-indigo-600">
            View full syllabus →
          </span>
        </a>
      ))}
    </div>
  )
}
