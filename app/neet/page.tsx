import {
  HeartPulse,
  Atom,
  Beaker,
  BookOpen,
  Brain,
  Target,
  BarChart,
} from "lucide-react"
import Header from "../components/Header"
import Footer from "../components/Footer"

/* ---------------- SEO ---------------- */

export const metadata = {
  title: "NEET Syllabus 2025 – Complete Physics, Chemistry & Biology | KalpGyan AI",
  description:
    "Complete NEET syllabus 2025 with detailed chapter-wise and topic-wise breakdown for Physics, Chemistry and Biology based on NCERT Class 11 & 12.",
}

/* ---------------- SYLLABUS DATA ---------------- */

/* BIOLOGY */
const biologySyllabus = [
  {
    title: "Diversity in Living World",
    slug: "/neet/biology/botany/class-11/diversity-in-living-world",
    topics: [
      "Living World",
      "Biological Classification",
      "Plant Kingdom",
      "Animal Kingdom",
    ],
  },
  {
    title: "Cell Structure & Function",
    slug: "/neet/biology/cell-structure",
    topics: [
      "Cell Theory",
      "Prokaryotic Cell",
      "Eukaryotic Cell",
      "Cell Organelles",
      "Cell Cycle",
    ],
  },
  {
    title: "Plant Physiology",
    slug: "/neet/biology/plant-physiology",
    topics: [
      "Photosynthesis",
      "Respiration in Plants",
      "Plant Growth & Hormones",
      "Mineral Nutrition",
      "Transport in Plants",
    ],
  },
  {
    title: "Human Physiology",
    slug: "/neet/biology/human-physiology",
    topics: [
      "Digestive System",
      "Respiratory System",
      "Circulatory System",
      "Excretory System",
      "Neural Control",
      "Endocrine System",
    ],
  },
  {
    title: "Genetics & Evolution",
    slug: "/neet/biology/genetics-evolution",
    topics: [
      "Mendelian Genetics",
      "Molecular Basis of Inheritance",
      "Evolution",
      "Human Genetics",
    ],
  },
  {
    title: "Ecology & Environment",
    slug: "/neet/biology/ecology",
    topics: [
      "Ecosystem",
      "Population Ecology",
      "Environmental Issues",
      "Biodiversity & Conservation",
    ],
  },
]

/* PHYSICS */
const physicsSyllabus = [
  {
    title: "Mechanics",
    slug: "/neet/physics/mechanics",
    topics: [
      "Units & Measurements",
      "Kinematics",
      "Laws of Motion",
      "Work, Energy & Power",
      "Centre of Mass",
      "Rotational Motion",
      "Gravitation",
    ],
  },
  {
    title: "Thermodynamics",
    slug: "/neet/physics/thermodynamics",
    topics: [
      "Thermal Properties of Matter",
      "Laws of Thermodynamics",
      "Kinetic Theory of Gases",
    ],
  },
  {
    title: "Electrodynamics",
    slug: "/neet/physics/electrodynamics",
    topics: [
      "Electrostatics",
      "Current Electricity",
      "Magnetic Effects",
      "Electromagnetic Induction",
      "Alternating Current",
    ],
  },
  {
    title: "Optics",
    slug: "/neet/physics/optics",
    topics: [
      "Ray Optics",
      "Wave Optics",
    ],
  },
  {
    title: "Modern Physics",
    slug: "/neet/physics/modern-physics",
    topics: [
      "Dual Nature of Matter",
      "Atoms & Nuclei",
      "Semiconductor Devices",
    ],
  },
]

/* CHEMISTRY */
const chemistrySyllabus = [
  {
    title: "Physical Chemistry",
    slug: "/neet/chemistry/physical",
    topics: [
      "Some Basic Concepts",
      "Atomic Structure",
      "Thermodynamics",
      "Chemical Equilibrium",
      "Redox Reactions",
      "Electrochemistry",
      "Chemical Kinetics",
    ],
  },
  {
    title: "Inorganic Chemistry",
    slug: "/neet/chemistry/inorganic",
    topics: [
      "Periodic Table",
      "Chemical Bonding",
      "Coordination Compounds",
      "p-Block Elements",
      "d & f Block Elements",
    ],
  },
  {
    title: "Organic Chemistry",
    slug: "/neet/chemistry/organic",
    topics: [
      "Basic Organic Chemistry",
      "Hydrocarbons",
      "Alcohols & Phenols",
      "Aldehydes & Ketones",
      "Carboxylic Acids",
      "Biomolecules",
      "Polymers",
    ],
  },
]

/* ---------------- PAGE ---------------- */

export default function NeetPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900">
          NEET 2025 Complete Syllabus
        </h1>

        <p className="mt-4 text-slate-600 max-w-3xl">
          Detailed chapter-wise and topic-wise NEET UG syllabus based on
          NCERT Class 11 & 12. Click any cube to start learning.
        </p>

        <div className="mt-6 flex flex-wrap gap-4">
          <Stat icon={<BookOpen />} label="NCERT Aligned" />
          <Stat icon={<Brain />} label="Concept Based" />
          <Stat icon={<Target />} label="Exam Focused" />
          <Stat icon={<BarChart />} label="AI Analytics" />
        </div>
      </section>

      {/* SYLLABUS */}
      <section className="bg-slate-50 py-14">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-3 gap-8">
          <SyllabusCard
            icon={<HeartPulse className="text-red-600" />}
            title="Biology"
            subtitle="Botany & Zoology"
            data={biologySyllabus}
          />

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
        </div>
      </section>

      {/* CTA */}
      <section className="bg-indigo-600 py-14 text-center text-white">
        <h2 className="text-2xl font-bold">
          Start Your NEET Preparation with KalpGyan AI
        </h2>
        <p className="mt-3 text-indigo-100">
          Notes, practice questions, tests & analytics — all in one platform.
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
      {/* HEADER */}
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 bg-slate-50 rounded-xl">{icon}</div>
        <div>
          <h3 className="font-bold text-xl text-slate-900">{title}</h3>
          <p className="text-sm text-slate-500">{subtitle}</p>
        </div>
      </div>

      {/* CUBES */}
      <div className="grid sm:grid-cols-2 gap-4 auto-rows-fr">
        {data.map((chapter: any) => (
          <a
            key={chapter.slug}
            href={chapter.slug}
            className="
              group
              border border-slate-200
              rounded-xl
              p-4
              bg-white
              hover:border-indigo-500
              hover:shadow-md
              transition
              flex
              flex-col
              h-full
            "
          >
            {/* TITLE */}
            <h4 className="font-semibold text-slate-800 group-hover:text-indigo-600">
              {chapter.title}
            </h4>

            {/* TOPICS (fixed space) */}
            <ul className="mt-2 space-y-1 text-xs text-slate-600 flex-grow">
              {chapter.topics.slice(0, 5).map((t: string) => (
                <li key={t}>• {t}</li>
              ))}
            </ul>

            {/* CTA — ALWAYS AT BOTTOM */}
            <span className="mt-3 text-xs font-medium text-indigo-600">
              View full chapter →
            </span>
          </a>
        ))}
      </div>
    </div>
  )
}