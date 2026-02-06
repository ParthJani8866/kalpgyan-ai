import {
  Atom,
  Beaker,
  BookOpen,
  Brain,
  Target,
  BarChart,
  Calculator,
} from "lucide-react"
import Header from "../components/Header"
import Footer from "../components/Footer"

/* ---------------- SEO ---------------- */

export const metadata = {
  title: "JEE Syllabus 2025 – Complete Physics, Chemistry & Maths | KalpGyan AI",
  description:
    "Complete JEE Main & Advanced syllabus 2025 with detailed chapter-wise breakdown for Physics, Chemistry and Mathematics based on NCERT Class 11 & 12.",
}

/* ---------------- SYLLABUS DATA ---------------- */

/* MATHEMATICS */
const mathsSyllabus = [
  {
    title: "Algebra",
    slug: "/jee/maths/algebra",
    topics: [
      "Quadratic Equations",
      "Sequences & Series",
      "Permutations & Combinations",
      "Binomial Theorem",
      "Complex Numbers",
      "Matrices & Determinants",
    ],
  },
  {
    title: "Coordinate Geometry",
    slug: "/jee/maths/coordinate-geometry",
    topics: [
      "Straight Lines",
      "Circle",
      "Parabola",
      "Ellipse",
      "Hyperbola",
    ],
  },
  {
    title: "Calculus",
    slug: "/jee/maths/calculus",
    topics: [
      "Limits",
      "Continuity & Differentiability",
      "Application of Derivatives",
      "Indefinite Integrals",
      "Definite Integrals",
      "Differential Equations",
    ],
  },
  {
    title: "Vector & 3D Geometry",
    slug: "/jee/maths/vector-3d",
    topics: [
      "Vectors",
      "3D Geometry",
    ],
  },
  {
    title: "Statistics & Probability",
    slug: "/jee/maths/statistics",
    topics: [
      "Statistics",
      "Probability",
    ],
  },
]

/* PHYSICS */
const physicsSyllabus = [
  {
    title: "Mechanics",
    slug: "/jee/physics/mechanics",
    topics: [
      "Units & Dimensions",
      "Kinematics",
      "Laws of Motion",
      "Work Energy Power",
      "Centre of Mass",
      "Rotational Motion",
      "Gravitation",
    ],
  },
  {
    title: "Thermodynamics",
    slug: "/jee/physics/thermodynamics",
    topics: [
      "Thermal Properties",
      "Kinetic Theory",
      "Laws of Thermodynamics",
    ],
  },
  {
    title: "Electricity & Magnetism",
    slug: "/jee/physics/electromagnetism",
    topics: [
      "Electrostatics",
      "Current Electricity",
      "Magnetism",
      "EMI",
      "AC",
    ],
  },
  {
    title: "Optics",
    slug: "/jee/physics/optics",
    topics: [
      "Ray Optics",
      "Wave Optics",
    ],
  },
  {
    title: "Modern Physics",
    slug: "/jee/physics/modern",
    topics: [
      "Photoelectric Effect",
      "Atoms & Nuclei",
      "Semiconductors",
    ],
  },
]

/* CHEMISTRY */
const chemistrySyllabus = [
  {
    title: "Physical Chemistry",
    slug: "/jee/chemistry/physical",
    topics: [
      "Mole Concept",
      "Atomic Structure",
      "Thermodynamics",
      "Equilibrium",
      "Electrochemistry",
      "Chemical Kinetics",
    ],
  },
  {
    title: "Inorganic Chemistry",
    slug: "/jee/chemistry/inorganic",
    topics: [
      "Periodic Table",
      "Chemical Bonding",
      "Coordination Compounds",
      "p Block",
      "d & f Block",
    ],
  },
  {
    title: "Organic Chemistry",
    slug: "/jee/chemistry/organic",
    topics: [
      "GOC",
      "Hydrocarbons",
      "Alcohols & Phenols",
      "Carbonyl Compounds",
      "Carboxylic Acids",
      "Biomolecules",
      "Polymers",
    ],
  },
]

/* ---------------- PAGE ---------------- */

export default function JeePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900">
          JEE 2025 Complete Syllabus
        </h1>

        <p className="mt-4 text-slate-600 max-w-3xl">
          Chapter-wise JEE Main & Advanced syllabus based on NCERT Class 11 & 12.
          Click any cube to start learning.
        </p>

        <div className="mt-6 flex flex-wrap gap-4">
          <Stat icon={<BookOpen />} label="NCERT Based" />
          <Stat icon={<Brain />} label="Concept Driven" />
          <Stat icon={<Target />} label="JEE Focused" />
          <Stat icon={<BarChart />} label="AI Analytics" />
        </div>
      </section>

      {/* SYLLABUS */}
      <section className="bg-slate-50 py-14">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-3 gap-8">
          <SyllabusCard
            icon={<Atom className="text-blue-600" />}
            title="Physics"
            subtitle="Class 11 & 12"
            data={physicsSyllabus}
          />

          <SyllabusCard
            icon={<Beaker className="text-emerald-600" />}
            title="Chemistry"
            subtitle="Physical, Organic & Inorganic"
            data={chemistrySyllabus}
          />

          <SyllabusCard
            icon={<Calculator className="text-purple-600" />}
            title="Mathematics"
            subtitle="Algebra, Calculus & Geometry"
            data={mathsSyllabus}
          />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-indigo-600 py-14 text-center text-white">
        <h2 className="text-2xl font-bold">
          Crack JEE with KalpGyan AI
        </h2>
        <p className="mt-3 text-indigo-100">
          Smart notes, practice, mock tests & AI insights.
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

      <div className="grid sm:grid-cols-2 gap-4 auto-rows-fr">
        {data.map((chapter: any) => (
          <a
            key={chapter.slug}
            href={chapter.slug}
            className="group border border-slate-200 rounded-xl p-4 bg-white hover:border-indigo-500 hover:shadow-md transition flex flex-col h-full"
          >
            <h4 className="font-semibold text-slate-800 group-hover:text-indigo-600">
              {chapter.title}
            </h4>

            <ul className="mt-2 space-y-1 text-xs text-slate-600 flex-grow">
              {chapter.topics.slice(0, 5).map((t: string) => (
                <li key={t}>• {t}</li>
              ))}
            </ul>

            <span className="mt-3 text-xs font-medium text-indigo-600">
              View full chapter →
            </span>
          </a>
        ))}
      </div>
    </div>
  )
}
