import {
  BookOpen,
  GraduationCap,
  Atom,
  HeartPulse,
  ArrowRight,
  PlayCircle,
  FileText,
  Beaker,
  Award,
  Users,
  Clock,
  Zap,
  Brain,
  Target,
  BarChart,
  Video,
  TestTube,
  FileQuestion,
  ChevronRight,
  Star,
  TrendingUp,
  ShieldCheck,
  Globe,
  Download,
  Calendar,
  BookMarked,
  PenTool,
  LineChart,
  FileCheck,
  Bookmark,
  Search,
  Menu,
  X,
  MessageSquare,
  Share2,
  Eye,
  ThumbsUp
} from "lucide-react"
import Image from "next/image"

export const metadata = {
  title: "KalpGyan AI – Concept-Based Learning for NEET, JEE & UPSC",
  description:
    "Concept-first learning platform for NEET, JEE & UPSC aspirants. Topic-wise notes, diagrams, mock tests, practicals and exam-focused clarity.",
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* NAVIGATION */}
      <nav className="sticky top-0 z-50 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex items-center gap-2">
                <span className="flex items-center gap-2">
                  <Image
                    src="/logo.png" // placed in public/logo.png
                    alt="KalpGyan AI Logo"
                    width={150}
                    height={50}
                  />
                </span>
              </div>

              <div className="hidden md:flex ml-12 space-x-1">
                {['NEET', 'JEE', 'UPSC', 'Notes', 'Tests', 'Blog'].map((item) => (
                  <a
                    key={item}
                    href={`/${item.toLowerCase()}`}
                    className="px-4 py-2 text-sm font-medium text-slate-700 hover:text-indigo-600 rounded-lg hover:bg-slate-50 transition-colors"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>

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
                className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-indigo-700 transition-colors"
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

      {/* HERO - More Compact */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight">
            Master Competitive Exams with
            <span className="text-indigo-600"> Concept-Based Learning</span>
          </h1>

          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
            NCERT-aligned notes, AI-powered tests, virtual labs, and expert video tutorials
            for NEET, JEE & UPSC aspirants.
          </p>

          <div className="mt-8 flex flex-wrap gap-3 justify-center">
            <a
              href="/dashboard"
              className="inline-flex items-center gap-2 bg-indigo-600 text-white px-5 py-3 rounded-lg font-medium hover:bg-indigo-700 transition-colors text-sm"
            >
              Start Free Learning
              <ArrowRight size={16} />
            </a>
            <a
              href="/demo"
              className="inline-flex items-center gap-2 border border-slate-300 px-5 py-3 rounded-lg font-medium hover:bg-slate-50 transition-colors text-sm"
            >
              <PlayCircle size={16} />
              Watch Demo
            </a>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
          <div className="text-center p-4 border border-slate-100 rounded-lg">
            <div className="text-2xl font-bold text-indigo-600">50K+</div>
            <div className="text-sm text-slate-600">Students</div>
          </div>
          <div className="text-center p-4 border border-slate-100 rounded-lg">
            <div className="text-2xl font-bold text-indigo-600">5K+</div>
            <div className="text-sm text-slate-600">Video Lessons</div>
          </div>
          <div className="text-center p-4 border border-slate-100 rounded-lg">
            <div className="text-2xl font-bold text-indigo-600">10K+</div>
            <div className="text-sm text-slate-600">Practice Qs</div>
          </div>
          <div className="text-center p-4 border border-slate-100 rounded-lg">
            <div className="text-2xl font-bold text-indigo-600">98%</div>
            <div className="text-sm text-slate-600">Success Rate</div>
          </div>
        </div>
      </section>

      {/* EXAM CARDS - Compact Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">
          Choose Your Exam
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="border border-slate-200 rounded-xl p-6 hover:border-indigo-300 hover:shadow-sm transition-all">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-red-50 rounded-lg">
                <HeartPulse className="text-red-600" size={24} />
              </div>
              <div>
                <h3 className="font-bold text-lg text-slate-900">NEET UG</h3>
                <p className="text-sm text-slate-500">Medical Entrance</p>
              </div>
            </div>
            <p className="text-sm text-slate-600 mb-4">
              Biology diagrams, Physics simulations, Chemistry mechanisms
            </p>
            <a href="/neet" className="text-sm text-red-600 font-medium hover:text-red-700">
              Explore NEET content →
            </a>
          </div>

          <div className="border border-slate-200 rounded-xl p-6 hover:border-blue-300 hover:shadow-sm transition-all">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-blue-50 rounded-lg">
                <Atom className="text-blue-600" size={24} />
              </div>
              <div>
                <h3 className="font-bold text-lg text-slate-900">JEE</h3>
                <p className="text-sm text-slate-500">Engineering Entrance</p>
              </div>
            </div>
            <p className="text-sm text-slate-600 mb-4">
              Physics concepts, Chemistry reactions, Maths problem-solving
            </p>
            <a href="/jee" className="text-sm text-blue-600 font-medium hover:text-blue-700">
              Explore JEE content →
            </a>
          </div>

          <div className="border border-slate-200 rounded-xl p-6 hover:border-emerald-300 hover:shadow-sm transition-all">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-emerald-50 rounded-lg">
                <GraduationCap className="text-emerald-600" size={24} />
              </div>
              <div>
                <h3 className="font-bold text-lg text-slate-900">UPSC</h3>
                <p className="text-sm text-slate-500">Civil Services</p>
              </div>
            </div>
            <p className="text-sm text-slate-600 mb-4">
              Polity, History, Geography with current affairs integration
            </p>
            <a href="/upsc" className="text-sm text-emerald-600 font-medium hover:text-emerald-700">
              Explore UPSC content →
            </a>
          </div>
        </div>
      </section>

      {/* LEARNING RESOURCES - Compact Grid */}
      <section className="bg-slate-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-3">
              Comprehensive Learning Resources
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-sm">
              Everything you need for exam preparation in one platform
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <ResourceItem
              icon={<BookOpen className="text-indigo-600" size={20} />}
              title="Concept Notes"
              description="Detailed topic explanations with diagrams"
              count="5000+"
            />
            <ResourceItem
              icon={<Video className="text-red-600" size={20} />}
              title="Video Lectures"
              description="Animated explanations & solved examples"
              count="2000+ hours"
            />
            <ResourceItem
              icon={<FileQuestion className="text-amber-600" size={20} />}
              title="Mock Tests"
              description="AI-powered tests with analysis"
              count="500+"
            />
            <ResourceItem
              icon={<Beaker className="text-emerald-600" size={20} />}
              title="Virtual Labs"
              description="Interactive practical simulations"
              count="300+"
            />
          </div>
        </div>
      </section>

      {/* BLOG PREVIEW SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">Latest Study Tips</h2>
            <p className="text-slate-600 text-sm mt-1">Expert advice and preparation strategies</p>
          </div>
          <a href="/blog" className="text-indigo-600 font-medium text-sm hover:text-indigo-700">
            View all articles →
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <BlogCard
            category="NEET Tips"
            title="How to Master Biology Diagrams in 30 Days"
            excerpt="Learn the most effective techniques for remembering complex biological diagrams..."
            author="Dr. Ananya Sharma"
            date="Dec 15, 2024"
            readTime="5 min read"
            views="2.4K"
          />
          <BlogCard
            category="JEE Strategy"
            title="Time Management for JEE Main 2024"
            excerpt="Complete guide to managing your study schedule and maximizing efficiency..."
            author="Prof. Rajesh Kumar"
            date="Dec 12, 2024"
            readTime="7 min read"
            views="3.1K"
          />
          <BlogCard
            category="UPSC Preparation"
            title="Current Affairs Monthly Digest - December 2024"
            excerpt="All important national and international events for UPSC preparation..."
            author="IAS Mentor Team"
            date="Dec 10, 2024"
            readTime="10 min read"
            views="4.2K"
          />
        </div>
      </section>

      {/* PRACTICALS & MOCK TESTS - Side by Side */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Virtual Practicals */}
          <div className="border border-slate-200 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-emerald-50 rounded-lg">
                <Beaker className="text-emerald-600" size={20} />
              </div>
              <h3 className="font-bold text-lg text-slate-900">Virtual Practicals</h3>
            </div>
            <p className="text-sm text-slate-600 mb-6">
              Perform experiments virtually with our interactive lab simulations. Perfect for understanding complex concepts.
            </p>
            <div className="space-y-3 mb-6">
              {['Biology Dissection Simulator', 'Physics Circuit Builder', 'Chemistry Reaction Simulator', 'Maths Geometry Visualizer'].map((item) => (
                <div key={item} className="flex items-center gap-3 text-sm">
                  <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                  <span className="text-slate-700">{item}</span>
                </div>
              ))}
            </div>
            <a href="/labs" className="text-sm text-emerald-600 font-medium hover:text-emerald-700">
              Explore Virtual Labs →
            </a>
          </div>

          {/* Mock Tests */}
          <div className="border border-slate-200 rounded-xl p-6 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-white/10 rounded-lg">
                <FileText className="text-white" size={20} />
              </div>
              <h3 className="font-bold text-lg">AI Mock Tests</h3>
            </div>
            <p className="text-sm text-slate-300 mb-6">
              Experience real exam simulation with adaptive testing, detailed analytics, and performance tracking.
            </p>
            <div className="space-y-3 mb-6">
              {['Full Syllabus Tests', 'Chapter-wise Tests', 'Previous Year Papers', 'Difficulty-based Tests'].map((item) => (
                <div key={item} className="flex items-center gap-3 text-sm">
                  <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full"></div>
                  <span className="text-slate-200">{item}</span>
                </div>
              ))}
            </div>
            <a href="/tests" className="text-sm text-indigo-300 font-medium hover:text-white">
              Start Free Mock Test →
            </a>
          </div>
        </div>
      </section>

      {/* VIDEO TUTORIALS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">Featured Video Tutorials</h2>
            <p className="text-slate-600 text-sm mt-1">Learn complex concepts with visual explanations</p>
          </div>
          <a href="/videos" className="text-red-600 font-medium text-sm hover:text-red-700">
            Browse all videos →
          </a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <VideoItem
            title="Human Heart Structure & Function"
            subject="Biology"
            duration="12:45"
            instructor="Dr. Priya Mehta"
            level="NEET"
          />
          <VideoItem
            title="Organic Chemistry Mechanisms"
            subject="Chemistry"
            duration="18:30"
            instructor="Prof. Rohan Desai"
            level="JEE"
          />
          <VideoItem
            title="Constitution of India - Preamble"
            subject="Polity"
            duration="15:20"
            instructor="IAS Ankit Verma"
            level="UPSC"
          />
        </div>
      </section>

      {/* WHY CHOOSE US - Minimal */}
      <section className="bg-slate-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">
            Why Choose KalpGyan AI
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6">
              <div className="inline-flex p-3 bg-indigo-50 rounded-lg mb-4">
                <ShieldCheck className="text-indigo-600" size={24} />
              </div>
              <h3 className="font-bold text-slate-900 mb-2">Ad-Free Learning</h3>
              <p className="text-sm text-slate-600">
                Focus on studying without distractions or interruptions
              </p>
            </div>

            <div className="text-center p-6">
              <div className="inline-flex p-3 bg-emerald-50 rounded-lg mb-4">
                <Brain className="text-emerald-600" size={24} />
              </div>
              <h3 className="font-bold text-slate-900 mb-2">AI-Powered Insights</h3>
              <p className="text-sm text-slate-600">
                Get personalized recommendations based on your performance
              </p>
            </div>

            <div className="text-center p-6">
              <div className="inline-flex p-3 bg-purple-50 rounded-lg mb-4">
                <Globe className="text-purple-600" size={24} />
              </div>
              <h3 className="font-bold text-slate-900 mb-2">Accessible Anywhere</h3>
              <p className="text-sm text-slate-600">
                Study on any device - mobile, tablet, or desktop
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA - Minimal */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-100 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Ready to Start Your Preparation?
          </h2>
          <p className="text-slate-600 mb-8 max-w-xl mx-auto text-sm">
            Join thousands of successful aspirants who transformed their exam preparation
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="/signup"
              className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-indigo-700 transition-colors text-sm"
            >
              Create Free Account
            </a>
            <a
              href="/demo"
              className="border border-slate-300 bg-white px-6 py-3 rounded-lg font-medium hover:bg-slate-50 transition-colors text-sm"
            >
              Schedule Demo
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg"></div>
                <span className="font-bold text-slate-900">KalpGyan AI</span>
              </div>
              <p className="text-sm text-slate-600">
                Concept-based learning platform for competitive exam aspirants.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-slate-900 mb-4">Exams</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="/neet" className="text-slate-600 hover:text-indigo-600">NEET Preparation</a></li>
                <li><a href="/jee" className="text-slate-600 hover:text-indigo-600">JEE Preparation</a></li>
                <li><a href="/upsc" className="text-slate-600 hover:text-indigo-600">UPSC Preparation</a></li>
                <li><a href="/tests" className="text-slate-600 hover:text-indigo-600">Mock Tests</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-slate-900 mb-4">Resources</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="/blog" className="text-slate-600 hover:text-indigo-600">Study Blog</a></li>
                <li><a href="/videos" className="text-slate-600 hover:text-indigo-600">Video Library</a></li>
                <li><a href="/notes" className="text-slate-600 hover:text-indigo-600">PDF Notes</a></li>
                <li><a href="/practicals" className="text-slate-600 hover:text-indigo-600">Virtual Labs</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-slate-900 mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="/about" className="text-slate-600 hover:text-indigo-600">About Us</a></li>
                <li><a href="/contact" className="text-slate-600 hover:text-indigo-600">Contact</a></li>
                <li><a href="/privacy" className="text-slate-600 hover:text-indigo-600">Privacy Policy</a></li>
                <li><a href="/terms" className="text-slate-600 hover:text-indigo-600">Terms of Service</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-200 mt-8 pt-8 text-center text-sm text-slate-500">
            <p>© {new Date().getFullYear()} KalpGyan AI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

// Resource Item Component
function ResourceItem({
  icon,
  title,
  description,
  count
}: {
  icon: React.ReactNode
  title: string
  description: string
  count: string
}) {
  return (
    <div className="bg-white border border-slate-200 rounded-lg p-4 hover:border-indigo-300 transition-colors">
      <div className="flex items-start gap-3">
        <div className="p-2 bg-slate-50 rounded-lg">
          {icon}
        </div>
        <div>
          <h4 className="font-medium text-slate-900 text-sm">{title}</h4>
          <p className="text-xs text-slate-500 mt-1">{description}</p>
          <div className="text-xs text-slate-400 mt-2">{count}</div>
        </div>
      </div>
    </div>
  )
}

// Blog Card Component
function BlogCard({
  category,
  title,
  excerpt,
  author,
  date,
  readTime,
  views
}: {
  category: string
  title: string
  excerpt: string
  author: string
  date: string
  readTime: string
  views: string
}) {
  return (
    <article className="border border-slate-200 rounded-lg overflow-hidden hover:border-slate-300 transition-colors">
      <div className="p-5">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-medium text-indigo-600 bg-indigo-50 px-2 py-1 rounded">
            {category}
          </span>
          <span className="text-xs text-slate-500">{readTime}</span>
        </div>

        <h3 className="font-bold text-slate-900 mb-2 line-clamp-2">{title}</h3>
        <p className="text-sm text-slate-600 mb-4 line-clamp-2">{excerpt}</p>

        <div className="flex items-center justify-between text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <span>{author}</span>
            <span className="text-slate-300">•</span>
            <span>{date}</span>
          </div>
          <div className="flex items-center gap-1">
            <Eye size={12} />
            <span>{views}</span>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-100 px-5 py-3 bg-slate-50 flex justify-between">
        <button className="text-xs text-slate-600 hover:text-indigo-600 flex items-center gap-1">
          <ThumbsUp size={12} />
          Like
        </button>
        <button className="text-xs text-slate-600 hover:text-indigo-600 flex items-center gap-1">
          <Bookmark size={12} />
          Save
        </button>
        <button className="text-xs text-slate-600 hover:text-indigo-600 flex items-center gap-1">
          <Share2 size={12} />
          Share
        </button>
      </div>
    </article>
  )
}

// Video Item Component
function VideoItem({
  title,
  subject,
  duration,
  instructor,
  level
}: {
  title: string
  subject: string
  duration: string
  instructor: string
  level: string
}) {
  return (
    <div className="border border-slate-200 rounded-lg overflow-hidden hover:border-slate-300 transition-colors">
      <div className="aspect-video bg-gradient-to-r from-red-400 to-orange-400 relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <PlayCircle className="text-white/90" size={40} />
        </div>
        <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
          {duration}
        </div>
      </div>

      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h4 className="font-medium text-slate-900 text-sm line-clamp-2">{title}</h4>
        </div>

        <div className="flex items-center justify-between text-xs text-slate-500 mb-3">
          <span className="font-medium text-slate-700">{subject}</span>
          <span className="bg-slate-100 px-2 py-1 rounded">{level}</span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-xs text-slate-600">{instructor}</span>
          <button className="text-xs text-red-600 hover:text-red-700 font-medium">
            Watch →
          </button>
        </div>
      </div>
    </div>
  )
}