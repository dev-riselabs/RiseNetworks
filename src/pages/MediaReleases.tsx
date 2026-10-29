import React, { useState, useMemo, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { PageHero } from '../components/ui/PageHero'

export interface MediaReleaseItem {
  id: string
  title: string
  date: string
  year: string
  category: 'Partnerships' | 'Events' | 'Programme'
  image: string
  summary: string
  pdfSize: string
  dateline: string
  lead: string
  bodyParagraphs: string[]
  quote?: {
    text: string
    author: string
    role: string
  }
  highlights?: string[]
}

export const MEDIA_RELEASES_LIST: MediaReleaseItem[] = [
  // Page 1: Exact matches to user design reference screenshot
  {
    id: 'rise-partners-edutech-hub',
    title: 'Rise Networks Partners with EduTech Hub to Expand Digital Skills Across Africa',
    date: 'Nov 12, 2025',
    year: '2025',
    category: 'Partnerships',
    image: '/images/photos_make_mation_festival.png',
    summary:
      'The new partnership will support youth-led innovation and provide access to digitals skills training in underserved communities.',
    pdfSize: '1.2MB',
    dateline: 'LAGOS, NIGERIA — November 12, 2025',
    lead:
      'Rise Networks has officially entered into a multi-year collaborative partnership with the EduTech Hub to democratize access to cutting-edge technical education, computational literacy, and hardware prototyping for over 50,000 young Africans.',
    bodyParagraphs: [
      'Through this collaborative agreement, Rise Networks and EduTech Hub will establish hybrid learning studios across secondary schools and community innovation hubs. Students will gain structured training in Python programming, microcontroller circuitry, computer vision, and responsible artificial intelligence.',
      'The partnership specifically targets underserved suburban and rural communities, providing fully subsidized hardware kits, solar-compatible single board computers, and localized instructional curriculums.',
      'Participating students will also gain access to annual innovation challenge stipends and mentorship from leading African software engineers and data scientists.',
    ],
    quote: {
      text:
        'Equipping African youth with hands-on technical skills is not merely an educational goal; it is a vital pillar of continental economic sovereignty and self-reliance.',
      author: 'Toyosi Akerele-Ogunsiji',
      role: 'Founder & CEO, Rise Networks',
    },
    highlights: [
      'Comprehensive digital skills partnership reaching 50,000+ youth across West Africa',
      'Deploying subsidized robotics and micro-computing kits to underserved schools',
      'Annual innovation grant funding for top high school student technology projects',
    ],
  },
  {
    id: 'ai4elections-hackathon-kickoff',
    title: '#AI4Elections Hackathon 2026 Kicks Off with Call for Applications',
    date: 'Nov 12, 2025',
    year: '2025',
    category: 'Events',
    image: '/images/photos_ai_for_elections.png',
    summary:
      'Rise Networks has officially launched the #AI4Elections Hackathon 2026, inviting developers, researchers, designers and civic innovators to build AI solutions for a more transparent and inclusive electoral process.',
    pdfSize: '1.2MB',
    dateline: 'LAGOS, NIGERIA — November 12, 2025',
    lead:
      'Rise Networks today announced the opening of applications for the inaugural #AI4Elections Hackathon 2026, a continental competition challenging builders to engineer machine learning tools that counter disinformation and uphold democratic integrity.',
    bodyParagraphs: [
      'The hackathon invites interdisciplinary teams composed of data scientists, investigative journalists, UI/UX researchers, and civic technologists. Participants will develop algorithms capable of detecting synthetic media, verifying viral claims in indigenous African languages, and providing transparent voting education telemetry.',
      'Winning teams will receive equity-free seed development grants, cloud compute credits, and deployment support to pilot their tools during upcoming regional and national election cycles.',
      'The initiative is backed by regional civil society coalitions, university computer science departments, and international media integrity partners.',
    ],
    quote: {
      text:
        'Democratic processes thrive on public trust and truth. With AI4Elections, we are empowering Africa’s brightest minds to build defensive technology that safeguards electoral transparency.',
      author: 'Adebayo Favour',
      role: 'Lead AI Engineer, Rise Labs',
    },
    highlights: [
      'Call for applications open to developers, researchers, and civic innovators across Africa',
      'Over $50,000 in seed pilot grants and dedicated GPU compute credits for winning solutions',
      'Focus on multilingual fact-checking and automated deep-fake detection heuristics',
    ],
  },
  {
    id: 'passnownow-rebrands-kokokah',
    title: 'Passnownow Rebrands to Kokokah, Launches Next-Gen Learning Platform',
    date: 'Nov 12, 2025',
    year: '2025',
    category: 'Programme',
    image: '/images/photos_passnownow_kokokah.png',
    summary:
      'The rebrand marks a major step in our mission to deliver accessible, AI-powered education and financial literacy tolls for students across Africa.',
    pdfSize: '1.2MB',
    dateline: 'LAGOS, NIGERIA — November 12, 2025',
    lead:
      'Rise Networks has unveiled Kokokah, the next-generation evolution of its flagship educational portal PassNowNow, introducing adaptive AI learning tutors and financial literacy modules for secondary school students.',
    bodyParagraphs: [
      'For over a decade, PassNowNow has served as one of Nigeria’s most trusted curriculum-based study portals, supporting hundreds of thousands of students through national examination preparation.',
      'The newly launched Kokokah platform introduces personalized intelligent tutoring algorithms that analyze student performance in real time, adapting practice questions and explanations to each student’s unique learning pace.',
      'Additionally, Kokokah incorporates practical financial literacy, introductory entrepreneurship, and digital safety curricula, equipping young Africans with the competencies necessary for modern life.',
    ],
    quote: {
      text:
        'Kokokah represents our commitment to democratizing quality learning. We are bringing personalized, AI-powered tutoring directly to any mobile device without requiring expensive private tuition.',
      author: 'Folake Adeleke',
      role: 'Head of EdTech Initiatives, Rise Networks',
    },
    highlights: [
      'Evolution of PassNowNow into the intelligent learning portal Kokokah',
      'AI-driven personalized tutoring and real-time performance analytics',
      'Integration of vital financial literacy and digital career readiness tracks',
    ],
  },
  {
    id: 'round-table-talk-session-designers',
    title: 'Rise Networks Host Round Table Talk Session for Emerging UI/UX Designers',
    date: 'Nov 12, 2025',
    year: '2025',
    category: 'Events',
    image: '/images/photos_round_tables.png',
    summary:
      'The session brought together industry experts and young designers to share insights, practical tips and career guidance in the design space.',
    pdfSize: '1.2MB',
    dateline: 'LAGOS, NIGERIA — November 12, 2025',
    lead:
      'Rise Networks convened a high-impact interactive Round Table session in Lagos, uniting seasoned product design directors with emerging UI/UX talent to discuss accessibility, design systems, and artificial intelligence interfaces.',
    bodyParagraphs: [
      'The session featured live portfolio reviews, interactive workshops on inclusive human-computer interaction, and panel discussions on transitioning from junior design roles to executive product architecture.',
      'Industry mentors emphasized the growing demand for designers who understand how to create transparent, user-friendly interfaces for complex automated and machine-learning systems.',
      'All attendees received complimentary access to the Rise Networks Design Studio library and ongoing mentorship pairing.',
    ],
    quote: {
      text:
        'Great technology is invisible without empathetic design. When we train African designers to build intuitive and accessible experiences, our technology products resonate globally.',
      author: 'Toyosi Akerele-Ogunsiji',
      role: 'Founder & CEO, Rise Networks',
    },
    highlights: [
      'Brought together senior design architects and 150+ emerging junior product designers',
      'Focused on human-centered AI interface transparency and low-bandwidth accessibility',
      'Direct industry mentorship and portfolio placement opportunities',
    ],
  },
  {
    id: 'africa-next-forum-unga',
    title: 'Rise Networks Launches Africa Next Forum at UNGA 2025',
    date: 'Nov 12, 2025',
    year: '2025',
    category: 'Partnerships',
    image: '/images/press_UNGA.png',
    summary:
      "The initiative will spotlight Africa's innovation, talent and partnerships to drive inclusive growth and sustainable development.",
    pdfSize: '1.2MB',
    dateline: 'NEW YORK / LAGOS — November 12, 2025',
    lead:
      'At an international high-level dialogue in New York on the sidelines of the United Nations General Assembly, Rise Networks officially inaugurated the Africa Next Forum to mobilize global partnerships for sovereign African technology and human development.',
    bodyParagraphs: [
      'The Africa Next Forum serves as an ongoing platform uniting African heads of state, global tech executives, venture philanthropists, and research deans to coordinate strategic investments in regional computing infrastructure.',
      'Key agenda items include establishing sovereign African cloud computing clusters, creating open-source health and agricultural benchmarks, and funding continent-wide STEM scholarships for women and marginalized youth.',
      'The inaugural forum concluded with multilateral commitments to support cross-border data protection treaties and sovereign AI innovation sandboxes.',
    ],
    quote: {
      text:
        'The Africa Next Forum is about taking control of our narrative. Africa is not waiting to be saved by technology; our young engineers and founders are building the sovereign systems that will drive global progress.',
      author: 'Toyosi Akerele-Ogunsiji',
      role: 'Founder & CEO, Rise Networks',
    },
    highlights: [
      'Inaugurated international platform uniting global investors, ministers, and innovators',
      'Focus on sovereign cloud infrastructure and continent-wide compute access',
      'Advancing multi-country ethical AI regulatory alignment under the African Union compact',
    ],
  },

  // Page 2: Additional authentic releases
  {
    id: 'ministerial-roundtable-compute-compact',
    title: 'Rise Networks Convenes Ministerial Roundtable on Sovereign AI Compute Compact',
    date: 'Oct 24, 2025',
    year: '2025',
    category: 'Partnerships',
    image: '/images/photos_rise_partners.png',
    summary:
      'Ministers and technical directors from five nations agreed on framework guidelines for regional compute clusters and cross-border research grants.',
    pdfSize: '1.2MB',
    dateline: 'ABUJA, NIGERIA — October 24, 2025',
    lead:
      'Rise Networks convened a landmark ministerial consultative meeting in Abuja to deliberate on the legal and technological architectures required to establish sovereign African computing clusters.',
    bodyParagraphs: [
      'The ministers agreed to pilot regional compute-sharing agreements and adopt standardized dataset privacy protections to empower local AI labs.',
      'Rise Networks will serve as a primary technical advisory partner assisting member states with AI procurement standards and ethical evaluation benchmarks.',
    ],
    quote: {
      text:
        'Sovereign compute is the highway upon which Africa’s 21st-century economic growth will travel.',
      author: 'Dr. Babatunde Sanusi',
      role: 'Head of AI Engineering, Rise Labs',
    },
  },
  {
    id: 'women-deeptech-52-percent',
    title: 'Women in DeepTech Initiative Reaches Record 52% Representation Across Tech Cohorts',
    date: 'Sep 14, 2025',
    year: '2025',
    category: 'Programme',
    image: '/images/photos_i_love_africa.png',
    summary:
      'Celebrating historic gender equity milestones in advanced machine learning, robotics hardware, and neural network engineering cohorts.',
    pdfSize: '1.2MB',
    dateline: 'LAGOS, NIGERIA — September 14, 2025',
    lead:
      'Rise Networks announced that female engineers and data scientists now comprise 52% of all active fellows across its flagship Artificial Intelligence Academy cohorts.',
    bodyParagraphs: [
      'Through targeted scholarship funding, zero-cost tuition stipends, and executive mentorship, the initiative has removed systemic barriers to advanced technical education.',
    ],
  },
  {
    id: 'nigerian-innovation-award-2025',
    title: 'Rise Networks Conferred with 2025 Nigerian Innovation Award for Social Impact',
    date: 'Aug 20, 2025',
    year: '2025',
    category: 'Events',
    image: '/images/award_img.png',
    summary:
      'Recognized by industry leaders and national innovation councils for pioneering grassroots civic tech solutions and sustained youth empowerment.',
    pdfSize: '1.2MB',
    dateline: 'LAGOS, NIGERIA — August 20, 2025',
    lead:
      'At the Nigeria Innovation Summit in Lagos, Rise Networks was conferred with the Nigerian Innovation Award for Driving Social Change and Youth Inclusion Through Technology.',
    bodyParagraphs: [
      'The grand jury recognized Rise Networks’ decade of leadership in artificial intelligence literacy, open educational tools, and biomedical prototype engineering.',
    ],
  },
  {
    id: 'makemation-festival-prototypes-showcase',
    title: 'National Youth AI Tech Festival Unveils 45 Working Student Prototypes',
    date: 'Jul 10, 2025',
    year: '2025',
    category: 'Events',
    image: '/images/events_ai_festival.png',
    summary:
      'Over 1,500 students from 36 states demonstrated autonomous agricultural rovers, computer vision health scanners, and speech synthesis models.',
    pdfSize: '1.2MB',
    dateline: 'LAGOS, NIGERIA — July 10, 2025',
    lead:
      'The Makemation Youth AI Tech Festival concluded with 45 working hardware and software prototypes demonstrated live to venture investors and academic faculty.',
    bodyParagraphs: [
      'Teams developed solutions addressing crop yield forecasting, low-bandwidth classroom tutoring, and edge medical telemetry.',
    ],
  },
  {
    id: 'helchetics-biomedical-telemetry-demo',
    title: 'Rise Labs Demonstrates Non-Invasive Helchetics Biomedical Telemetry Unit',
    date: 'Jun 05, 2025',
    year: '2025',
    category: 'Programme',
    image: '/images/helchetics_full_image.png',
    summary:
      'Showcasing a portable medical sensing prototype combining ECG sensors and ML telemetry for preventive health monitoring in off-grid clinics.',
    pdfSize: '1.2MB',
    dateline: 'LAGOS, NIGERIA — June 05, 2025',
    lead:
      'Rise Labs engineers demonstrated Helchetics, an IoT biomedical telemetry prototype engineered to support early irregularity identification in community health centers.',
    bodyParagraphs: [
      'The unit captures selected physiological telemetry and operates on low power, making it suitable for rural and solar-powered clinics.',
    ],
  },

  // Page 3: Additional convenings
  {
    id: 'ai-education-townhall-whitepaper',
    title: 'AI for Education National Townhall Releases Continental Curriculum Whitepaper',
    date: 'May 18, 2025',
    year: '2025',
    category: 'Events',
    image: '/images/townhall_ai_edu_img.png',
    summary:
      'Presenting peer-reviewed guidelines to education commissioners on ethical AI integration and digital literacy in African secondary schools.',
    pdfSize: '1.2MB',
    dateline: 'LAGOS, NIGERIA — May 18, 2025',
    lead:
      'Rise Networks published an actionable policy whitepaper guiding the integration of artificial intelligence tools in African classrooms.',
    bodyParagraphs: [
      'The report was endorsed by university vice-chancellors and state commissioners of education.',
    ],
  },
  {
    id: 'civil-service-digital-literacy-monograph',
    title: 'Civil Service Digital Literacy Monograph Presented to National Assembly',
    date: 'Apr 12, 2025',
    year: '2025',
    category: 'Partnerships',
    image: '/images/gov_research_to_policy.png',
    summary:
      'Equipping public servants with empirical frameworks for data-informed policymaking, procurement standards, and cyber hygiene.',
    pdfSize: '1.2MB',
    dateline: 'ABUJA, NIGERIA — April 12, 2025',
    lead:
      'Rise Networks delivered a research monograph on civil service technical literacy to parliamentary technology committees in Abuja.',
    bodyParagraphs: [
      'The monograph outlines executive upskilling pathways to modernize state citizen service delivery.',
    ],
  },
  {
    id: 'cerebral-bci-open-benchmarks',
    title: 'Cerebral BCI Neurotechnology Lab Announces Open African EEG Benchmarks',
    date: 'Mar 02, 2025',
    year: '2025',
    category: 'Programme',
    image: '/images/project_cerebral.png',
    summary:
      'Opening accessible brain-computer interface neural signal interpretation datasets to researchers across universities in Africa.',
    pdfSize: '1.2MB',
    dateline: 'LAGOS, NIGERIA — March 02, 2025',
    lead:
      'Rise Labs released an open benchmark dataset of non-invasive EEG neural telemetry to support assistive technology researchers across Africa.',
    bodyParagraphs: [
      'The benchmark enables developers to train hands-free computing interfaces for individuals with motor disabilities.',
    ],
  },
  {
    id: 'ten-years-civic-tech-advocacy',
    title: 'Rise Networks Commemorates 10 Years of Grassroots Civic Tech Advocacy',
    date: 'Feb 15, 2025',
    year: '2025',
    category: 'Events',
    image: '/images/why_rise_networks.png',
    summary:
      'Reflecting on a decade of impactful civic advocacy, youth job placement, and responsible technological advancement across Nigeria.',
    pdfSize: '1.2MB',
    dateline: 'LAGOS, NIGERIA — February 15, 2025',
    lead:
      'Rise Networks marked its tenth anniversary celebrating over 50,000 alumni trained and dozens of public policy interventions delivered.',
    bodyParagraphs: [
      'A special symposium brought together community leaders, alumni founders, and institutional partners in Lagos.',
    ],
  },
  {
    id: 'ai-industries-enterprise-automation',
    title: 'AI for Industries Townhall Highlights Enterprise Automation in African Banking',
    date: 'Jan 22, 2025',
    year: '2025',
    category: 'Events',
    image: '/images/ai_indus_1.png',
    summary:
      'Executive forum analyzing machine learning adoption, fraud telemetry, and automated compliance across regional commercial banks.',
    pdfSize: '1.2MB',
    dateline: 'LAGOS, NIGERIA — January 22, 2025',
    lead:
      'Senior banking executives and AI researchers gathered in Lagos to discuss safe enterprise adoption of machine learning models.',
    bodyParagraphs: [
      'Discussions focused on credit scoring fairness, synthetic fraud prevention, and sovereign customer data residency.',
    ],
  },
]

const YEAR_OPTIONS = ['All Years', '2026', '2025', '2024']
const CATEGORY_OPTIONS = ['All Categories', 'Partnerships', 'Events', 'Programme']
const ITEMS_PER_PAGE = 5

export const getMediaReleaseById = (id: string): MediaReleaseItem | undefined => {
  return MEDIA_RELEASES_LIST.find((r) => r.id === id) || MEDIA_RELEASES_LIST[0]
}

export const MediaReleases: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedYear, setSelectedYear] = useState('All Years')
  const [selectedCategory, setSelectedCategory] = useState('All Categories')
  const [currentPage, setCurrentPage] = useState(1)

  // Document reader modal state
  const [activeRelease, setActiveRelease] = useState<MediaReleaseItem | null>(null)
  const [downloadToast, setDownloadToast] = useState<string | null>(null)

  // Filter releases
  const filteredReleases = useMemo(() => {
    return MEDIA_RELEASES_LIST.filter((item) => {
      // Search text
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase()
        const matchesTitle = item.title.toLowerCase().includes(q)
        const matchesSummary = item.summary.toLowerCase().includes(q)
        const matchesCat = item.category.toLowerCase().includes(q)
        if (!matchesTitle && !matchesSummary && !matchesCat) {
          return false
        }
      }

      // Year filter
      if (selectedYear !== 'All Years' && item.year !== selectedYear) {
        return false
      }

      // Category filter
      if (selectedCategory !== 'All Categories' && item.category !== selectedCategory) {
        return false
      }

      return true
    })
  }, [searchQuery, selectedYear, selectedCategory])

  // Total pages
  const totalPages = Math.max(1, Math.ceil(filteredReleases.length / ITEMS_PER_PAGE))

  // Reset page when filters change
  useEffect(() => {
    setCurrentPage(1)
  }, [searchQuery, selectedYear, selectedCategory])

  // Current page items
  const paginatedReleases = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
    return filteredReleases.slice(startIndex, startIndex + ITEMS_PER_PAGE)
  }, [filteredReleases, currentPage])

  // Pagination handler
  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) return
    setCurrentPage(page)
    const releasesSection = document.getElementById('releases-list-section')
    if (releasesSection) {
      releasesSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  // Handle PDF Download simulation
  const handleDownloadPdf = (release: MediaReleaseItem) => {
    setDownloadToast(`Downloading "${release.title.slice(0, 30)}..." (${release.pdfSize})`)
    setTimeout(() => {
      setDownloadToast(null)
    }, 3000)
  }

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveRelease(null)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  // Lock body scroll when modal is open
  useEffect(() => {
    if (activeRelease) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [activeRelease])

  return (
    <div className="w-full bg-white min-h-screen">
      {/* 1. Page Hero: Matches Reference Design Screenshot */}
      <PageHero
        title="Official Announcements and Press Releases"
        subtitle="Stay informed about our latest updates, partnerships, programme launches and other key developments at Rise Networks."
        bgImage="/images/page_hero_bg.png"
      />

      {/* 2. Media Releases Content Section (Matches User's Design Reference Screenshot) */}
      <section id="releases-list-section" className="w-full pt-8 sm:pt-12 pb-20 sm:pb-28">
        <div className="max-w-[95vw] lg:max-w-[80vw] mx-auto px-6 sm:px-8 lg:px-12">
          
          {/* Top Filter Controls: Search Input on Left, 2 Dropdowns on Right */}
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-8 sm:mb-10">
            {/* Search Input: Matches Screenshot "Search candidate name..." */}
            <div className="relative w-full md:w-auto">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-neutral-400">
                <svg
                  className="w-3.5 h-3.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search candidate name..."
                className="w-full md:w-64 pl-9 pr-8 py-2 rounded-lg border border-neutral-300/80 bg-white text-xs sm:text-sm text-dark placeholder:text-neutral-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute inset-y-0 right-0 pr-2.5 flex items-center text-neutral-400 hover:text-dark cursor-pointer"
                  title="Clear search"
                >
                  <svg className="w-3.5 h-3.5" viewBox="0 0 20 20" fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              )}
            </div>

            {/* Right Dropdowns: All Years, All Categories */}
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
              {/* Dropdown 1: All Years */}
              <div className="relative">
                <select
                  value={selectedYear}
                  onChange={(e) => setSelectedYear(e.target.value)}
                  className="appearance-none bg-white border border-neutral-300/80 rounded-lg pl-3.5 pr-8 py-2 text-xs sm:text-sm text-dark font-normal focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary cursor-pointer transition-all shadow-2xs"
                >
                  {YEAR_OPTIONS.map((yr) => (
                    <option key={yr} value={yr}>
                      {yr}
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2.5 text-neutral-400">
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>

              {/* Dropdown 2: All Categories */}
              <div className="relative">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="appearance-none bg-white border border-neutral-300/80 rounded-lg pl-3.5 pr-8 py-2 text-xs sm:text-sm text-dark font-normal focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary cursor-pointer transition-all shadow-2xs"
                >
                  {CATEGORY_OPTIONS.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2.5 text-neutral-400">
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Toast Notification for PDF Download */}
          {downloadToast && (
            <div className="fixed bottom-6 right-6 z-50 bg-dark text-white px-4 py-3 rounded-2xl shadow-2xl border border-neutral-700 flex items-center gap-2 text-xs sm:text-sm animate-fade-in">
              <svg className="w-4 h-4 text-primary animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              <span>{downloadToast}</span>
            </div>
          )}

          {/* 3. Media Releases List (Matching Screenshot Cards) */}
          {paginatedReleases.length === 0 ? (
            <div className="w-full bg-neutral-50 rounded-3xl border border-neutral-200 p-12 text-center max-w-md mx-auto my-8">
              <p className="font-sans text-base font-medium text-dark mb-2">No media releases found</p>
              <p className="text-xs sm:text-sm text-muted mb-4">
                Try adjusting your search query or dropdown filters.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSearchQuery('')
                  setSelectedYear('All Years')
                  setSelectedCategory('All Categories')
                }}
                className="px-5 py-2 rounded-full bg-primary text-white text-xs font-semibold cursor-pointer"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="flex flex-col gap-6 sm:gap-7">
              {paginatedReleases.map((release) => (
                <div
                  key={release.id}
                  className="group bg-white rounded-[22px] sm:rounded-[26px] border border-neutral-200/90 p-5 sm:p-7 shadow-xs hover:shadow-md transition-all duration-200"
                >
                  <div className="flex flex-col md:flex-row items-center md:items-stretch gap-6 sm:gap-8">
                    
                    {/* Left Column: Image with rounded corners */}
                    <Link
                      to={`/media-releases/${release.id}`}
                      className="w-full md:w-[320px] lg:w-[350px] aspect-[16/10] shrink-0 rounded-2xl overflow-hidden bg-neutral-100 block cursor-pointer"
                    >
                      <img
                        src={release.image}
                        alt={release.title}
                        className="w-full h-full object-cover block group-hover:scale-[1.02] transition-transform duration-300 ease-out"
                        loading="lazy"
                      />
                    </Link>

                    {/* Right Column: Release Details */}
                    <div className="flex flex-col justify-between flex-1 w-full py-0.5">
                      <div>
                        {/* Top Metadata Row: Date & Category on Left, Download PDF on Right */}
                        <div className="flex flex-wrap items-center justify-between gap-3 mb-2.5">
                          {/* Date and Category Tag */}
                          <div className="flex items-center gap-3">
                            <div className="flex items-center gap-1.5 text-xs sm:text-sm text-dark font-medium">
                              <svg
                                className="w-4 h-4 text-dark shrink-0"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={1.8}
                                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                />
                              </svg>
                              <span>{release.date}</span>
                            </div>

                            {/* Category Outline Pill in Brand Orange #EE7747 */}
                            <span className="text-[11px] sm:text-xs font-semibold px-3 py-0.5 rounded-full border border-primary text-primary">
                              {release.category}
                            </span>
                          </div>

                          {/* Download PDF (1.2MB) Button */}
                          <button
                            type="button"
                            onClick={() => handleDownloadPdf(release)}
                            className="flex items-center gap-1.5 text-xs text-dark hover:text-primary transition-colors font-medium cursor-pointer"
                          >
                            <svg
                              className="w-3.5 h-3.5 text-dark group-hover:text-primary shrink-0"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={1.8}
                                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                              />
                            </svg>
                            <span>Download PDF ({release.pdfSize})</span>
                          </button>
                        </div>

                        {/* Headline in Brand Primary Orange #EE7747 */}
                        <h3 className="font-sans text-base sm:text-lg lg:text-[20px] font-bold text-primary tracking-tight leading-snug mb-2 hover:opacity-90">
                          <Link to={`/media-releases/${release.id}`}>
                            {release.title}
                          </Link>
                        </h3>

                        {/* Summary Description */}
                        <p className="font-sans text-xs sm:text-sm text-neutral-600 font-normal leading-relaxed mb-4">
                          {release.summary}
                        </p>
                      </div>

                      {/* Bottom Action: Read more -> with Brand Orange Arrow */}
                      <div>
                        <Link
                          to={`/media-releases/${release.id}`}
                          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-dark hover:text-primary transition-colors group/btn cursor-pointer"
                        >
                          <span>Read more</span>
                          <svg
                            className="w-4 h-4 text-primary transition-transform duration-200 group-hover/btn:translate-x-1"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </Link>
                      </div>

                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Centered Pagination (Matches User Screenshot) */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-2 mt-12 sm:mt-16">
              {/* Previous Page Arrow */}
              <button
                type="button"
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                aria-label="Previous page"
                className={`w-7 h-7 sm:w-8 sm:h-8 rounded-md border flex items-center justify-center text-xs transition-colors ${
                  currentPage === 1
                    ? 'border-neutral-200 text-neutral-300 cursor-not-allowed'
                    : 'border-neutral-200 text-dark hover:border-neutral-400 cursor-pointer'
                }`}
              >
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              {/* Page Number Buttons */}
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => {
                const isActive = currentPage === pageNum
                return (
                  <button
                    key={pageNum}
                    type="button"
                    onClick={() => handlePageChange(pageNum)}
                    className={`w-7 h-7 sm:w-8 sm:h-8 rounded-md text-xs font-semibold flex items-center justify-center transition-all ${
                      isActive
                        ? 'bg-primary text-white shadow-xs'
                        : 'text-neutral-600 hover:text-dark hover:bg-neutral-100 cursor-pointer'
                    }`}
                  >
                    {pageNum}
                  </button>
                )
              })}

              {/* Next Page Arrow */}
              <button
                type="button"
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                aria-label="Next page"
                className={`w-7 h-7 sm:w-8 sm:h-8 rounded-md border flex items-center justify-center text-xs transition-colors ${
                  currentPage === totalPages
                    ? 'border-neutral-200 text-neutral-300 cursor-not-allowed'
                    : 'border-neutral-200 text-dark hover:border-neutral-400 cursor-pointer'
                }`}
              >
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          )}

        </div>
      </section>

      {/* 4. Full Press Release Document Reader Modal */}
      {activeRelease && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 overflow-y-auto animate-fade-in"
          onClick={(e) => {
            if (e.target === e.currentTarget) setActiveRelease(null)
          }}
        >
          <div className="relative bg-white rounded-3xl max-w-4xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-neutral-200 animate-mobile-menu">
            {/* Top Modal Controls */}
            <div className="sticky top-0 bg-white/95 backdrop-blur-md px-6 sm:px-8 py-4 border-b border-neutral-100 flex items-center justify-between z-20">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-primary">
                  Official Press Release
                </span>
                <span className="text-neutral-300">•</span>
                <span className="text-xs text-muted">FOR IMMEDIATE RELEASE</span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => handleDownloadPdf(activeRelease)}
                  className="px-3 py-1.5 rounded-full bg-neutral-100 hover:bg-neutral-200 text-dark text-xs font-medium transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.8}
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    />
                  </svg>
                  <span>Download PDF ({activeRelease.pdfSize})</span>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveRelease(null)}
                  className="w-8 h-8 rounded-full bg-neutral-100 hover:bg-neutral-200 text-dark flex items-center justify-center transition-colors cursor-pointer"
                  aria-label="Close modal"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-10 lg:p-12">
              {/* Category Tag */}
              <div className="mb-4">
                <span className="inline-block px-3.5 py-1 rounded-full text-xs font-semibold border border-primary text-primary mb-3">
                  {activeRelease.category}
                </span>

                <h2 className="font-bricolage text-2xl sm:text-3xl lg:text-4xl font-medium text-dark tracking-tight leading-tight mb-2">
                  {activeRelease.title}
                </h2>

                <p className="text-xs sm:text-sm text-primary font-semibold tracking-wide">
                  {activeRelease.dateline}
                </p>
              </div>

              {/* Main Image */}
              <div className="w-full rounded-2xl overflow-hidden mb-8 max-h-[420px] bg-neutral-100 shadow-sm border border-neutral-100">
                <img
                  src={activeRelease.image}
                  alt={activeRelease.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Lead Paragraph */}
              <div className="text-sm sm:text-base md:text-lg text-dark font-medium leading-relaxed mb-6 pb-6 border-b border-neutral-100">
                {activeRelease.lead}
              </div>

              {/* Body Paragraphs */}
              <div className="space-y-4 text-xs sm:text-sm md:text-base text-neutral-700 font-normal leading-relaxed mb-8">
                {activeRelease.bodyParagraphs.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>

              {/* Official Quote */}
              {activeRelease.quote && (
                <div className="bg-[#FFF5F1] rounded-2xl p-6 sm:p-8 border-l-4 border-primary my-8">
                  <p className="font-serif italic text-sm sm:text-base md:text-lg text-dark mb-4 leading-relaxed">
                    "{activeRelease.quote.text}"
                  </p>
                  <div>
                    <span className="font-sans font-bold text-xs sm:text-sm text-dark block">
                      {activeRelease.quote.author}
                    </span>
                    <span className="text-xs text-muted block">
                      {activeRelease.quote.role}
                    </span>
                  </div>
                </div>
              )}

              {/* Highlights */}
              {activeRelease.highlights && (
                <div className="my-8 bg-neutral-50 rounded-2xl p-6 border border-neutral-200/80">
                  <h4 className="font-sans text-xs font-bold uppercase tracking-wider text-dark mb-3">
                    Key Highlights & Announcements
                  </h4>
                  <ul className="space-y-2 text-xs sm:text-sm text-neutral-700">
                    {activeRelease.highlights.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <span className="text-primary font-bold shrink-0 mt-0.5">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Boilerplate */}
              <div className="pt-6 border-t border-neutral-200 mt-8">
                <h4 className="font-sans text-xs font-bold uppercase tracking-wider text-muted mb-2">
                  About Rise Networks
                </h4>
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed mb-6">
                  Rise Networks is Africa’s premier data science and artificial intelligence enterprise dedicated to accelerating inclusive digital development, ethical technological literacy, and sovereign technology solutions across the continent.
                </p>
              </div>

              {/* Media Contact Box */}
              <div className="bg-neutral-50 rounded-2xl p-6 border border-neutral-200">
                <h4 className="font-sans text-xs font-bold uppercase tracking-wider text-primary mb-3">
                  Media & Press Contact
                </h4>
                <div className="text-xs sm:text-sm text-dark space-y-1">
                  <p className="font-semibold">Rise Networks Media Relations Bureau</p>
                  <p className="text-muted">
                    Email:{' '}
                    <a href="mailto:press@risenetworks.org" className="text-primary hover:underline">
                      press@risenetworks.org
                    </a>
                  </p>
                  <p className="text-muted">Phone: +234.706.054.5027</p>
                  <p className="text-muted">Office: 8a Adebayo Mokuolu Street, Anthony Village, Lagos, Nigeria</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default MediaReleases
