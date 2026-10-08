import React, { useState, useEffect } from 'react'
import { PageHero } from '../components/ui/PageHero'
import { CtaCard } from '../components/ui/CtaCard'

interface FeaturedCarouselItem {
  id: string
  title: string
  location: string
  date: string
  image: string
  buttonText?: string
  category: string
}

interface EventCardItem {
  id: string
  tag: string
  title: string
  date: string
  image: string
  location?: string
  description?: string
}

const FEATURED_CAROUSEL_ITEMS: FeaturedCarouselItem[] = [
  {
    id: 'national-youth-ai-festival',
    title: 'National Youth AI Tech Festival',
    location: 'Four Points By Sheraton Lagos',
    date: 'Thursday, February 26th 2026',
    image: '/images/events_ai_festival.png',
    buttonText: 'Register',
    category: 'National Festival',
  },
  {
    id: 'ai-for-education-townhall',
    title: 'AI for Education National Townhall',
    location: 'Civic Centre, Victoria Island, Lagos',
    date: 'Friday, November 14th 2025',
    image: '/images/townhall_ai_edu_img.png',
    buttonText: 'Register',
    category: 'Policy & Learning',
  },
  {
    id: 'ai-for-industries-townhall',
    title: 'AI for Industries Townhall: Enterprise Frontier',
    location: 'Eko Convention Centre, Lagos',
    date: 'Tuesday, October 28th 2025',
    image: '/images/ai_indus_1.png',
    buttonText: 'Register',
    category: 'Enterprise Summit',
  },
  {
    id: 'pan-african-ai-leadership',
    title: 'Pan-African AI Leadership Summit',
    location: 'Rise Networks AI Labs & Virtual Broadcast',
    date: 'Saturday, March 28th 2026',
    image: '/images/our_program_connected_ecosystem.png',
    buttonText: 'Register',
    category: 'Leadership & Research',
  },
]

// 24 unique events across 4 distinct pages (6 events per page)
const GRID_EVENTS_PAGE_1: EventCardItem[] = [
  {
    id: 'p1-1',
    tag: 'Highlighted Event',
    title: 'Rise Network Global AI Tech Festivals - Lagos Edition',
    date: 'Tue, May 26th, 2025',
    image: '/images/events_ai_festival.png',
    location: 'Four Points By Sheraton Lagos',
    description: 'Africa’s flagship grassroots technology festival connecting young builders and hardware creators.',
  },
  {
    id: 'p1-2',
    tag: 'Technical Bootcamp',
    title: 'African Multilingual LLM Engineering & Benchmarks Lab',
    date: 'Thu, Jun 12th, 2025',
    image: '/images/events_ai_festival.png',
    location: 'Rise Networks AI Labs, Lagos',
    description: 'Robotics showcase and live machine learning model demo days with top industry innovators.',
  },
  {
    id: 'p1-3',
    tag: 'Community Summit',
    title: 'Women in Artificial Intelligence Leadership Forum',
    date: 'Sat, Jul 19th, 2025',
    image: '/images/events_ai_festival.png',
    location: 'Civic Centre, Victoria Island, Lagos',
    description: 'Hands-on hardware labs, embedded systems prototyping, and talent grant award presentations.',
  },
  {
    id: 'p1-4',
    tag: 'HealthTech Lab',
    title: 'Edge Computer Vision for Rural Clinic Diagnostics',
    date: 'Wed, Aug 6th, 2025',
    image: '/images/events_ai_festival.png',
    location: 'Rise Networks AI Labs & Online',
    description: 'Convening youth innovators, universities, and venture partners for African technological sovereignty.',
  },
  {
    id: 'p1-5',
    tag: 'Youth Festival',
    title: 'Makemation Secondary Schools AI Competition & Expo',
    date: 'Fri, Sep 15th, 2025',
    image: '/images/events_ai_festival.png',
    location: 'Four Points By Sheraton Lagos',
    description: 'Pan-African AI innovation hackathons and open-source African dataset development challenges.',
  },
  {
    id: 'p1-6',
    tag: 'AgTech Workshop',
    title: 'Satellite Remote Sensing & Crop Yield Forecasting',
    date: 'Mon, Oct 20th, 2025',
    image: '/images/events_ai_festival.png',
    location: 'Rise Networks AI Labs & Field Hub',
    description: 'Celebrating high-impact engineering solutions developed by Africa’s rising artificial intelligence leaders.',
  },
]

const GRID_EVENTS_PAGE_2: EventCardItem[] = [
  {
    id: 'p2-1',
    tag: 'Policy Forum',
    title: 'National AI Policy & Digital Rights Safeguards Roundtable',
    date: 'Wed, Nov 5th, 2025',
    image: '/images/events_ai_festival.png',
    location: 'Abuja International Conference Centre',
    description: 'Advancing ethical AI governance frameworks, digital sovereignty, and algorithmic accountability.',
  },
  {
    id: 'p2-2',
    tag: 'Enterprise Summit',
    title: 'FinTech Fraud Detection & Graph Neural Networks Forum',
    date: 'Tue, Dec 2nd, 2025',
    image: '/images/events_ai_festival.png',
    location: 'Eko Convention Centre, Lagos',
    description: 'High-throughput real-time fraud mitigation and automated credit risk modeling.',
  },
  {
    id: 'p2-3',
    tag: 'Creative Tech',
    title: 'Generative AI for African Media & Creative Storytelling',
    date: 'Sat, Jan 17th, 2026',
    image: '/images/events_ai_festival.png',
    location: 'Rise Networks AI Labs, Lagos',
    description: 'Practical creator workshops with diffusion models, localized synthetic media, and voice synthesis.',
  },
  {
    id: 'p2-4',
    tag: 'Climate AI',
    title: 'Predictive Energy Balancing & Mini-Grid Optimization',
    date: 'Thu, Feb 19th, 2026',
    image: '/images/events_ai_festival.png',
    location: 'Virtual Classroom via Zoom',
    description: 'Leveraging automated machine learning to forecast solar load requirements and distribution.',
  },
  {
    id: 'p2-5',
    tag: 'Developer Summit',
    title: 'Open Source African Language Datasets Conference',
    date: 'Sat, Mar 14th, 2026',
    image: '/images/events_ai_festival.png',
    location: 'Rise Networks AI Labs & YouTube Live',
    description: 'Collaborative code sprints, benchmark curation, and open corpus release for indigenous languages.',
  },
  {
    id: 'p2-6',
    tag: 'Venture Pitch',
    title: 'Rise Networks AI Incubator & Seed Venture Demo Day',
    date: 'Fri, Apr 24th, 2026',
    image: '/images/events_ai_festival.png',
    location: 'Four Points By Sheraton Lagos',
    description: 'Showcasing high-potential African AI startups to regional angel syndicates and venture funds.',
  },
]

const GRID_EVENTS_PAGE_3: EventCardItem[] = [
  {
    id: 'p3-1',
    tag: 'Research Conference',
    title: 'Pan-African AI Researchers Annual Academic Symposium',
    date: 'Mon, May 11th, 2026',
    image: '/images/events_ai_festival.png',
    location: 'University of Lagos & Virtual Stream',
    description: 'Peer-reviewed research presentations spanning reinforcement learning, NLP, and computer vision.',
  },
  {
    id: 'p3-2',
    tag: 'Robotics Expo',
    title: 'Autonomous Robotics & Smart City Mobility Challenge',
    date: 'Sat, Jun 6th, 2026',
    image: '/images/events_ai_festival.png',
    location: 'Rise Networks AI Labs, Lagos',
    description: 'Live field demos of autonomous sensor networks, automated drones, and micro-robotics.',
  },
  {
    id: 'p3-3',
    tag: 'Ethics & Policy',
    title: 'Global South AI Governance & Human Rights Convention',
    date: 'Wed, Jul 15th, 2026',
    image: '/images/events_ai_festival.png',
    location: 'Civic Centre, Victoria Island, Lagos',
    description: 'Cross-border dialogues aligning African digital sovereignty with global safety protocols.',
  },
  {
    id: 'p3-4',
    tag: 'Highlighted Event',
    title: 'National Youth AI Tech Festival: Summer Showcase 2026',
    date: 'Thu, Aug 20th, 2026',
    image: '/images/events_ai_festival.png',
    location: 'Four Points By Sheraton Lagos',
    description: 'Youth creators present embedded robotics projects, AI mobile apps, and generative tools.',
  },
  {
    id: 'p3-5',
    tag: 'HealthTech',
    title: 'Federated Learning for Cross-Hospital Clinical Research',
    date: 'Tue, Sep 8th, 2026',
    image: '/images/events_ai_festival.png',
    location: 'Rise Networks AI Labs & Hybrid',
    description: 'Privacy-preserving AI architectures allowing African teaching hospitals to train joint diagnostic models.',
  },
  {
    id: 'p3-6',
    tag: 'Fellowship Gala',
    title: 'Africa Next AI Fellowship Grand Graduation Gala',
    date: 'Sat, Oct 17th, 2026',
    image: '/images/events_ai_festival.png',
    location: 'Eko Convention Centre, Lagos',
    description: 'Honoring 500+ graduated fellows stepping into enterprise roles and venture creation.',
  },
]

const GRID_EVENTS_PAGE_4: EventCardItem[] = [
  {
    id: 'p4-1',
    tag: 'Policy Forum',
    title: 'Ministerial Dialogue on National AI Compute Superclusters',
    date: 'Wed, Nov 11th, 2026',
    image: '/images/events_ai_festival.png',
    location: 'Abuja International Conference Centre',
    description: 'Strategic roadmap for deploying sovereign GPU infrastructure across African tertiary institutions.',
  },
  {
    id: 'p4-2',
    tag: 'Security Lab',
    title: 'Cybersecurity & Adversarial Machine Learning Workshop',
    date: 'Fri, Dec 4th, 2026',
    image: '/images/events_ai_festival.png',
    location: 'Rise Networks AI Labs, Lagos',
    description: 'Hardening deep neural networks against prompt injections, model poisoning, and data extraction attacks.',
  },
  {
    id: 'p4-3',
    tag: 'Youth Innovation',
    title: 'Makemation Pan-African Hardware Prototype Demo Day',
    date: 'Sat, Jan 23rd, 2027',
    image: '/images/events_ai_festival.png',
    location: 'Four Points By Sheraton Lagos',
    description: 'Demonstrating custom PCB designs, embedded robotics, and edge AI hardware devices.',
  },
  {
    id: 'p4-4',
    tag: 'Enterprise Tech',
    title: 'Sovereign Cloud & Edge Computing Infrastructure Summit',
    date: 'Tue, Feb 16th, 2027',
    image: '/images/events_ai_festival.png',
    location: 'Civic Centre, Victoria Island, Lagos',
    description: 'Building cost-effective on-premise and hybrid cloud AI stacks tailored for African enterprise workloads.',
  },
  {
    id: 'p4-5',
    tag: 'Technical Lab',
    title: 'Low-Resource Speech Recognition & Synthesis Bootcamp',
    date: 'Thu, Mar 18th, 2027',
    image: '/images/events_ai_festival.png',
    location: 'Rise Networks AI Labs & Zoom',
    description: 'Acoustic modeling and automated speech recognition systems for African tonal languages.',
  },
  {
    id: 'p4-6',
    tag: 'Global Summit',
    title: 'Global AI Summit: Africa’s Role in International Standards',
    date: 'Fri, Apr 23rd, 2027',
    image: '/images/events_ai_festival.png',
    location: 'Eko Convention Centre, Lagos',
    description: 'Ensuring African values, languages, and geopolitical priorities are represented in global AI pacts.',
  },
]

const ALL_PAGES = [
  GRID_EVENTS_PAGE_1,
  GRID_EVENTS_PAGE_2,
  GRID_EVENTS_PAGE_3,
  GRID_EVENTS_PAGE_4,
]

export const Events: React.FC = () => {
  // Featured Hero Carousel State
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0)
  const [isCarouselHovered, setIsCarouselHovered] = useState(false)

  // Grid Pagination State (1-indexed: 1, 2, 3, 4)
  const [currentPage, setCurrentPage] = useState(1)

  // Modal State
  const [selectedEventModal, setSelectedEventModal] = useState<{
    title: string
    date: string
    location?: string
    tag?: string
    description?: string
  } | null>(null)
  const [registrationEmail, setRegistrationEmail] = useState('')
  const [registrationName, setRegistrationName] = useState('')
  const [registrationSubmitted, setRegistrationSubmitted] = useState(false)

  // Auto-advance featured carousel
  useEffect(() => {
    if (isCarouselHovered) return
    const interval = setInterval(() => {
      setCurrentSlideIndex((prev) => (prev + 1) % FEATURED_CAROUSEL_ITEMS.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [isCarouselHovered])

  const currentSlide = FEATURED_CAROUSEL_ITEMS[currentSlideIndex]
  const currentEvents = ALL_PAGES[currentPage - 1] || ALL_PAGES[0]

  const handleRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (registrationEmail && registrationName) {
      setRegistrationSubmitted(true)
      setTimeout(() => {
        setRegistrationSubmitted(false)
        setSelectedEventModal(null)
        setRegistrationEmail('')
        setRegistrationName('')
      }, 2500)
    }
  }

  return (
    <div className="w-full bg-white">
      {/* 1. Hero Section matching user screenshot */}
      <PageHero
        title="Events"
        subtitle="Explore our latest convenings, forums, and community engagements shaping Africa's AI future."
        bgImage="/images/page_hero_bg.png"
      />

      {/* 2. Featured Carousel Section matching user screenshot */}
      <section className="w-full bg-white pt-10 sm:pt-14 md:pt-16 pb-16 sm:pb-24 overflow-hidden">
        <div className="max-w-[80vw] mx-auto px-6 sm:px-8 lg:px-12 w-full">
          <div
            onMouseEnter={() => setIsCarouselHovered(true)}
            onMouseLeave={() => setIsCarouselHovered(false)}
            className="max-w-4xl mx-auto"
          >
            {/* Carousel Card Container */}
            <div className="bg-white rounded-[28px] sm:rounded-[36px] p-4 sm:p-6 md:p-8 border border-neutral-200/80 flex flex-col md:flex-row items-center gap-6 sm:gap-8 lg:gap-12">
              {/* Left Column: Image with exact artwork events_ai_festival.png */}
              <div className="w-full md:w-1/2 shrink-0">
                <div className="relative rounded-[22px] sm:rounded-[28px] overflow-hidden aspect-square bg-slate-100">
                  <img
                    key={currentSlide.id}
                    src={currentSlide.image}
                    alt={currentSlide.title}
                    className="w-full h-full object-cover select-none transition-all duration-500 animate-in fade-in"
                  />
                </div>
              </div>

              {/* Right Column: Title, Location, Date, Register Button */}
              <div className="w-full md:w-1/2 flex flex-col justify-center">
                {/* Event Title */}
                <h2 className="font-bricolage text-3xl sm:text-4xl lg:text-[42px] font-semibold text-dark tracking-tight leading-[1.15] mb-6 sm:mb-8 transition-all duration-300">
                  {currentSlide.title}
                </h2>

                {/* Event Details: Location & Date */}
                <div className="space-y-4 mb-8 sm:mb-10 text-neutral-800 text-sm sm:text-base font-normal">
                  {/* Location with Pin Icon */}
                  <div className="flex items-center gap-3">
                    <svg
                      className="w-5 h-5 text-dark shrink-0"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    <span>{currentSlide.location}</span>
                  </div>

                  {/* Date with Calendar Icon */}
                  <div className="flex items-center gap-3">
                    <svg
                      className="w-5 h-5 text-dark shrink-0"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect width="18" height="18" x="3" y="4" rx="2" />
                      <path d="M3 10h18" />
                      <path d="M8 2v4" />
                      <path d="M16 2v4" />
                    </svg>
                    <span>{currentSlide.date}</span>
                  </div>
                </div>

                {/* Register Action Button */}
                <button
                  type="button"
                  onClick={() =>
                    setSelectedEventModal({
                      title: currentSlide.title,
                      date: currentSlide.date,
                      location: currentSlide.location,
                      tag: currentSlide.category,
                      description:
                        'Join fellow innovators, researchers, youth builders, and tech leaders at this high-impact convening.',
                    })
                  }
                  className="w-full sm:w-auto px-10 py-4 rounded-full bg-[#F15A24] hover:bg-[#D94E1D] text-white text-base font-semibold transition-colors cursor-pointer text-center"
                >
                  {currentSlide.buttonText || 'Register'}
                </button>
              </div>
            </div>

            {/* Carousel Controls: Prev Button, Dots, Next Button */}
            <div className="flex items-center justify-center gap-4 mt-8">
              {/* Prev Slide Button */}
              <button
                type="button"
                onClick={() =>
                  setCurrentSlideIndex((prev) => (prev - 1 + FEATURED_CAROUSEL_ITEMS.length) % FEATURED_CAROUSEL_ITEMS.length)
                }
                aria-label="Previous slide"
                className="w-8 h-8 rounded-full border border-neutral-300 hover:border-dark text-dark flex items-center justify-center transition-colors cursor-pointer"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              {/* Carousel Pagination Dots */}
              <div className="flex items-center gap-2">
                {FEATURED_CAROUSEL_ITEMS.map((_, dotIdx) => {
                  const isActive = dotIdx === currentSlideIndex
                  return (
                    <button
                      key={dotIdx}
                      type="button"
                      onClick={() => setCurrentSlideIndex(dotIdx)}
                      aria-label={`Go to slide ${dotIdx + 1}`}
                      className={`transition-all duration-300 cursor-pointer rounded-full ${
                        isActive
                          ? 'w-2.5 h-2.5 bg-[#F15A24] scale-110'
                          : 'w-2 h-2 bg-neutral-300 hover:bg-neutral-400'
                      }`}
                    />
                  )
                })}
              </div>

              {/* Next Slide Button */}
              <button
                type="button"
                onClick={() =>
                  setCurrentSlideIndex((prev) => (prev + 1) % FEATURED_CAROUSEL_ITEMS.length)
                }
                aria-label="Next slide"
                className="w-8 h-8 rounded-full border border-neutral-300 hover:border-dark text-dark flex items-center justify-center transition-colors cursor-pointer"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Grid of Event Cards matching screenshot with events_ai_festival.png & Pagination */}
      <section className="w-full pb-20 sm:pb-28 bg-white">
        <div className="max-w-[80vw] mx-auto px-6 sm:px-8 lg:px-12 w-full">
          
          {/* 6-Card Grid (3 columns x 2 rows) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {currentEvents.map((evt) => (
              <div
                key={evt.id}
                onClick={() =>
                  setSelectedEventModal({
                    title: evt.title,
                    date: evt.date,
                    location: evt.location || 'Rise Networks AI Labs, Lagos',
                    tag: evt.tag,
                    description: evt.description,
                  })
                }
                className="bg-[#FAFAFA] rounded-[24px] sm:rounded-[28px] overflow-hidden p-3 sm:p-3.5 border border-neutral-200/70 hover:border-neutral-300 transition-colors cursor-pointer flex flex-col group"
              >
                {/* Image on Top using events_ai_festival.png */}
                <div className="relative rounded-[20px] sm:rounded-[22px] overflow-hidden aspect-[4/3] bg-neutral-100">
                  <img
                    src={evt.image}
                    alt={evt.title}
                    className="w-full h-full object-cover select-none"
                  />
                </div>

                {/* Card Content below image */}
                <div className="px-3 sm:px-4 pt-4 pb-3 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Tag: Highlighted Event / Category */}
                    <p className="text-xs text-neutral-500 font-normal mb-1">
                      {evt.tag}
                    </p>

                    {/* Title */}
                    <h3 className="font-bricolage text-base sm:text-lg font-medium text-dark leading-snug group-hover:text-primary transition-colors mb-3">
                      {evt.title}
                    </h3>
                  </div>

                  {/* Date */}
                  <p className="text-xs text-neutral-500 font-normal">
                    {evt.date}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination at Bottom Right: Prev, 1, 2, 3, 4, Next */}
          <div className="flex items-center justify-end gap-2 sm:gap-3 mt-12 sm:mt-16">
            {/* Prev Page */}
            <button
              type="button"
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              aria-label="Previous page"
              className="w-9 h-9 rounded-full border border-neutral-200 hover:border-neutral-400 text-neutral-700 hover:text-dark flex items-center justify-center transition-colors cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Numbered Buttons */}
            {[1, 2, 3, 4].map((pageNum) => {
              const isActive = currentPage === pageNum
              return (
                <button
                  key={pageNum}
                  type="button"
                  onClick={() => {
                    setCurrentPage(pageNum)
                  }}
                  className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-medium transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-[#F15A24] text-white'
                      : 'text-neutral-700 hover:text-dark hover:bg-neutral-100'
                  }`}
                >
                  {pageNum}
                </button>
              )
            })}

            {/* Next Page */}
            <button
              type="button"
              disabled={currentPage === ALL_PAGES.length}
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, ALL_PAGES.length))}
              aria-label="Next page"
              className="w-9 h-9 rounded-full border border-neutral-200 hover:border-neutral-400 text-neutral-700 hover:text-dark flex items-center justify-center transition-colors cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

        </div>
      </section>

      {/* 4. Registration Modal */}
      {selectedEventModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-in fade-in duration-200">
          <div className="bg-white rounded-[32px] max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-neutral-100 relative max-h-[90vh] overflow-y-auto">
            {/* Close button */}
            <button
              onClick={() => setSelectedEventModal(null)}
              className="absolute top-6 right-6 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-neutral-600 flex items-center justify-center transition-colors cursor-pointer"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Modal Header */}
            <div className="mb-6">
              {selectedEventModal.tag && (
                <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary mb-3">
                  {selectedEventModal.tag}
                </span>
              )}
              <h3 className="font-bricolage text-2xl font-bold text-dark mb-2">
                {selectedEventModal.title}
              </h3>
              <p className="text-xs text-neutral-500 font-medium">
                📅 {selectedEventModal.date}
              </p>
              {selectedEventModal.location && (
                <p className="text-xs text-neutral-500 font-medium mt-1">
                  📍 {selectedEventModal.location}
                </p>
              )}
            </div>

            {selectedEventModal.description && (
              <p className="text-sm text-neutral-600 mb-6 leading-relaxed">
                {selectedEventModal.description}
              </p>
            )}

            {/* Registration Form */}
            {registrationSubmitted ? (
              <div className="p-5 bg-emerald-50 rounded-2xl border border-emerald-200 text-center">
                <div className="w-10 h-10 bg-emerald-500 text-white rounded-full flex items-center justify-center mx-auto mb-2">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h4 className="text-sm font-bold text-emerald-800 mb-1">Registration Confirmed!</h4>
                <p className="text-xs text-emerald-700">
                  We have sent event credentials and calendar invite to your email.
                </p>
              </div>
            ) : (
              <form onSubmit={handleRegisterSubmit} className="space-y-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-dark">
                  Instant Registration / Calendar Reminder
                </h4>
                <div>
                  <label className="block text-xs font-medium text-neutral-600 mb-1">Full Name</label>
                  <input
                    type="text"
                    required
                    value={registrationName}
                    onChange={(e) => setRegistrationName(e.target.value)}
                    placeholder="e.g. Amara Okafor"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-dark focus:outline-none focus:ring-2 focus:ring-primary/40 focus:bg-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-neutral-600 mb-1">Email Address</label>
                  <input
                    type="email"
                    required
                    value={registrationEmail}
                    onChange={(e) => setRegistrationEmail(e.target.value)}
                    placeholder="amara@example.com"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-dark focus:outline-none focus:ring-2 focus:ring-primary/40 focus:bg-white"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3 rounded-full bg-primary hover:bg-primary-hover text-white text-sm font-semibold transition-all shadow-md cursor-pointer"
                >
                  Confirm Registration
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      {/* 5. Bottom CTA Overlapping into Footer */}
      <CtaCard overlapFooter={true} />
    </div>
  )
}

export default Events
