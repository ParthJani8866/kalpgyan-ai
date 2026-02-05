

/* ---------------- SEO ---------------- */

import Footer from "@/app/components/Footer"
import Header from "@/app/components/Header"

export const metadata = {
  title: "Diversity in Living World – NEET Biology | KalpGyan AI",
  description:
    "Detailed and easy explanation of Diversity in Living World for NEET Biology based on NCERT Class 11. Simple language, concepts, and exam-focused understanding.",
}

/* ---------------- PAGE ---------------- */

export default function DiversityInLivingWorld() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900">
          Diversity in the Living World
        </h1>

        <p className="mt-4 text-slate-600 max-w-4xl">
          This chapter explains the wide variety of living organisms present on
          Earth and why classification is needed. The concepts are explained in
          very simple language based on NCERT for NEET preparation.
        </p>
      </section>

      {/* CONTENT */}
      <section className="bg-slate-50 py-14">
        <div className="max-w-4xl mx-auto px-4 space-y-10 text-slate-800 leading-relaxed">

          <div>
            <h2 className="text-2xl font-semibold mb-3">What is the Living World?</h2>
            <p>
              The living world includes all organisms that show life processes.
              These organisms can grow, breathe, reproduce, respond to their
              surroundings, and need food to survive.
            </p>
            <p className="mt-2">
              Living organisms range from microscopic bacteria to very large
              animals and trees. Even though they look different, all living
              organisms share basic life characteristics.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3">Meaning of Diversity</h2>
            <p>
              Diversity means variety or differences. Diversity in the living
              world refers to the large number of different types of plants,
              animals, and microorganisms present on Earth.
            </p>
            <p className="mt-2">
              No two organisms are exactly the same. They differ in size, shape,
              structure, color, habitat, food habits, and reproduction methods.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3">
              Reasons for Diversity in Living Organisms
            </h2>
            <p>
              Living organisms show diversity because they adapt to different
              environments and conditions.
            </p>
            <ul className="mt-3 list-disc list-inside space-y-1 text-slate-700">
              <li>Different habitats like land, water, and air</li>
              <li>Different modes of nutrition</li>
              <li>Different body structures</li>
              <li>Different reproductive strategies</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3">
              Types of Living Organisms
            </h2>

            <h3 className="text-lg font-semibold mt-4">Plants</h3>
            <p>
              Plants are autotrophic organisms. They prepare their own food using
              sunlight through the process of photosynthesis. Plants vary from
              small grasses to tall trees.
            </p>

            <h3 className="text-lg font-semibold mt-4">Animals</h3>
            <p>
              Animals are heterotrophic organisms. They depend on plants or other
              animals for food. Animals show great diversity in movement, habitat,
              and body structure.
            </p>

            <h3 className="text-lg font-semibold mt-4">Microorganisms</h3>
            <p>
              Microorganisms are very small living organisms that cannot be seen
              without a microscope. They include bacteria, fungi, protozoa, and
              viruses.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3">Habitat and Diversity</h2>
            <p>
              Habitat is the natural place where an organism lives. Different
              habitats support different life forms.
            </p>
            <ul className="mt-3 list-disc list-inside space-y-1 text-slate-700">
              <li>Deserts support organisms adapted to dry conditions</li>
              <li>Forests support rich plant and animal diversity</li>
              <li>Oceans support aquatic organisms</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3">
              Need for Classification
            </h2>
            <p>
              Since there are millions of living organisms, it becomes difficult
              to study them individually. Classification helps group organisms
              based on similarities and differences.
            </p>
            <p className="mt-2">
              Classification makes identification, study, and understanding of
              organisms easier.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3">
              Importance of Diversity
            </h2>
            <p>
              Diversity maintains balance in nature. Every organism plays a role
              in the ecosystem.
            </p>
            <p className="mt-2">
              Loss of diversity can disturb ecosystems and negatively impact life
              on Earth.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3">Conclusion</h2>
            <p>
              Diversity in the living world shows the richness of life on Earth.
              Understanding diversity helps us protect nature and prepare better
              for exams like NEET.
            </p>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-indigo-600 py-14 text-center text-white">
        <h2 className="text-2xl font-bold">
          Continue NEET Biology with KalpGyan AI
        </h2>
        <p className="mt-3 text-indigo-100">
          Concept clarity, NCERT-based notes, practice questions and analytics.
        </p>
        <a
          href="/neet/biology"
          className="inline-block mt-6 bg-white text-indigo-600 px-6 py-3 rounded-lg font-medium"
        >
          Explore More Biology Chapters
        </a>
      </section>

      <Footer />
    </div>
  )
}