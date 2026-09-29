import React, { useRef, useState, useEffect } from 'react'
import { CtaCard } from '../components/ui/CtaCard'

interface ResultCard {
  title: string
  image: string
}

interface TargetAudienceItem {
  title?: string
  description?: string
  icon?: React.ReactNode
  isEmpty?: boolean
}

interface ActivityItem {
  title: string
  description: string
}

export const AiForEducationTownhall: React.FC = () => {
  // Slider state
  const sliderRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  // What will we do tabs state
  const [activeTabIdx, setActiveTabIdx] = useState(0)
  const [tabTimerKey, setTabTimerKey] = useState(0)

  const resultCards: ResultCard[] = [
    {
      title: 'Explore New\nTechnologies',
      image: '/images/home_hero_img_1.png',
    },
    {
      title: 'Benchmark and\nCollaborate',
      image: '/images/partner_who_can_partner_img.png',
    },
    {
      title: 'Connect and\nLead',
      image: '/images/our_program_connected_ecosystem.png',
    },
    {
      title: 'Transform\nClassrooms & Policy',
      image: '/images/hero_where_we_create_impact.png',
    },
  ]

  const targetAudience: TargetAudienceItem[] = [
    {
      title: 'Students',
      description: 'Bring fresh perspectives that drive meaningful change in education.',
      icon: (
        <svg className="w-8 h-8 text-dark" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z" />
        </svg>
      ),
    },
    {
      title: 'Teachers',
      description: 'Learn to integrate innovative tools and AI solutions into the classroom.',
      icon: (
        <svg className="w-8 h-8 text-dark" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z" />
        </svg>
      ),
    },
    {
      title: 'Tech Innovators',
      description: 'Develop practical solutions that address real learning challenges.',
      icon: (
        <svg className="w-8 h-8 text-dark" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14l-4-4 1.41-1.41L12 14.17l5.59-5.59L19 10l-7 7z" />
          <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z" />
        </svg>
      ),
    },
    {
      title: 'School Administrators',
      description: 'Lead the implementation of AI and tech-driven initiatives in schools.',
      icon: (
        <svg className="w-8 h-8 text-dark" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 1L3 5v2h18V5l-9-4zm-7 8v9h2V9H5zm4 0v9h2V9H9zm4 0v9h2V9h-2zm4 0v9h2V9h-2zM2 20v2h20v-2H2z" />
        </svg>
      ),
    },
    {
      title: 'Researchers',
      description: 'Provide evidence and insights to improve learning outcomes.',
      icon: (
        <svg className="w-8 h-8 text-dark" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19.8 18.4L14 10.67V6.5l1.3-1.3c.4-.4.4-1 0-1.4-.4-.4-1-.4-1.4 0L13 4.7 12.1 3.8c-.4-.4-1-.4-1.4 0-.4.4-.4 1 0 1.4l1.3 1.3v4.17l-5.8 7.73c-.6.8 0 1.9 1 1.9h11.6c1 0 1.6-1.1 1-1.9zM7.9 18l3.6-4.8 3.6 4.8H7.9z" />
        </svg>
      ),
    },
    {
      title: 'Industry Leaders',
      description: 'Align future workforce skills with evolving market needs.',
      icon: (
        <svg className="w-8 h-8 text-dark" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
          <path d="M19.5 9.5l-1.06-2.31L16.13 6.13l2.31-1.06L19.5 2.75l1.06 2.32 2.31 1.06-2.31 1.06z" />
        </svg>
      ),
    },
    {
      title: 'Government Officials',
      description: 'Shape national and regional policies for a tech-driven future.',
      icon: (
        <svg className="w-8 h-8 text-dark" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z" />
        </svg>
      ),
    },
    {
      isEmpty: true,
    },
    {
      title: 'Donor Agencies',
      description: 'Support programs helping access and equity in education through AI.',
      icon: (
        <svg className="w-8 h-8 text-dark" viewBox="0 0 24 24" fill="currentColor">
          <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
        </svg>
      ),
    },
  ]

  const townhallActivities: ActivityItem[] = [
    {
      title: 'Expand Access and Quality',
      description:
        'Explore how AI can improve access to education, enhance learning outcomes, and promote equity across Africa.',
    },
    {
      title: 'Reimagine the Classroom',
      description:
        'Discover innovative AI tools, personalized learning assistants, and intelligent tutoring systems tailored for African classrooms.',
    },
    {
      title: 'Build Strategic Partnerships',
      description:
        'Connect policymakers, tech leaders, academic institutions, and development partners to fund and scale impactful education solutions.',
    },
  ]

  // Auto-advance for Townhall Activities Tabs (5s)
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTabIdx((prev) => (prev + 1) % townhallActivities.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [tabTimerKey, townhallActivities.length])

  const handleSelectTab = (idx: number) => {
    setActiveTabIdx(idx)
    setTabTimerKey((prev) => prev + 1)
  }

  // Slider update scroll state
  const updateScrollState = () => {
    if (sliderRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current
      setCanScrollLeft(scrollLeft > 10)
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 10)
    }
  }

  useEffect(() => {
    updateScrollState()
    const currentRef = sliderRef.current
    if (currentRef) {
      currentRef.addEventListener('scroll', updateScrollState)
      window.addEventListener('resize', updateScrollState)
    }
    return () => {
      if (currentRef) {
        currentRef.removeEventListener('scroll', updateScrollState)
      }
      window.removeEventListener('resize', updateScrollState)
    }
  }, [])

  const handlePrev = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -440, behavior: 'smooth' })
    }
  }

  const handleNext = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 440, behavior: 'smooth' })
    }
  }

  return (
    <div className="relative w-full overflow-hidden bg-white">
      {/* ========================================================================= */}
      {/* 1. HERO SECTION */}
      {/* ========================================================================= */}
      <section
        className="relative w-full min-h-[680px] lg:min-h-[720px] flex flex-col items-center justify-center pt-36 sm:pt-44 md:pt-48 pb-16 sm:pb-20 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('/images/townhall_hero_bg.png')` }}
      >
        <div className="relative z-10 max-w-[80vw] mx-auto px-6 sm:px-8 lg:px-12 flex flex-col items-center text-center">
          {/* Main Headline */}
          <h1 className="font-bricolage text-4xl sm:text-6xl md:text-7xl lg:text-[76px] font-semibold tracking-tight text-dark leading-[1.12] text-center max-w-4xl mx-auto">
            AI for Education in <br />
            Africa Townhall Series
          </h1>

          {/* Primary CTA Button */}
          <div className="mt-8 sm:mt-10 flex items-center justify-center">
            <a
              href="https://forms.gle"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 active:scale-95 cursor-pointer bg-primary hover:bg-primary-hover text-white shadow-sm hover:shadow-md rounded-full px-7 sm:px-8 py-3.5 text-base sm:text-lg gap-2.5 group"
            >
              <span>Register for upcoming townhall</span>
              <svg
                className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. GREEN STATS SECTION */}
      {/* ========================================================================= */}
      <section className="relative z-10 w-full max-w-[80vw] mx-auto px-6 sm:px-8 lg:px-12 pt-12 sm:pt-16 lg:pt-20 pb-16 sm:pb-20">
        <div className="w-full bg-brand-green rounded-[28px] sm:rounded-[36px] py-12 sm:py-16 px-6 sm:px-12 shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 text-center text-white">
            {/* Stat 1 */}
            <div className="flex flex-col items-center justify-center">
              <span className="font-bricolage text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
                500+
              </span>
              <span className="text-white/90 text-sm sm:text-base font-normal mt-2">
                Participants
              </span>
            </div>

            {/* Stat 2 */}
            <div className="flex flex-col items-center justify-center">
              <span className="font-bricolage text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
                20+
              </span>
              <span className="text-white/90 text-sm sm:text-base font-normal mt-2 max-w-[220px]">
                Sessions and Thought Leadership Panels
              </span>
            </div>

            {/* Stat 3 */}
            <div className="flex flex-col items-center justify-center">
              <span className="font-bricolage text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
                10+
              </span>
              <span className="text-white/90 text-sm sm:text-base font-normal mt-2">
                Countries Represented
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. SHAPING THE FUTURE OF LEARNING SECTION */}
      {/* ========================================================================= */}
      <section className="w-full max-w-[80vw] mx-auto px-6 sm:px-8 lg:px-12 pb-16 sm:pb-24">
        <div className="max-w-4xl">
          <h2 className="font-bricolage text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-dark mb-4 sm:mb-6">
            Shaping the Future of Learning
          </h2>
          <p className="text-neutral-700 text-base sm:text-lg lg:text-xl font-normal leading-relaxed">
            AI is transforming how knowledge is delivered and applied. For Africa, this creates both a pressing need and a unique opportunity. The Townhall will explore ways to improve access and quality, modernize classrooms with intelligent learning systems, and build cross-sector partnerships to prepare learners for a competitive, technology-driven future.
          </p>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. REAL-WORLD RESULTS YOU'LL GAIN (CAROUSEL / SLIDER) */}
      {/* ========================================================================= */}
      <section className="w-full bg-white pb-20 sm:pb-28 overflow-hidden">
        <div className="max-w-[80vw] mx-auto px-6 sm:px-8 lg:px-12 w-full">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
            <h2 className="font-bricolage text-3xl sm:text-4xl lg:text-5xl font-semibold text-dark tracking-tight leading-tight mb-3">
              Real-world Results you’ll gain
            </h2>
            <p className="font-sans text-base sm:text-lg text-neutral-600 font-normal leading-relaxed">
              Learn, connect, and lead the future of AI in education.
            </p>
          </div>

          {/* Cards Slider */}
          <div
            ref={sliderRef}
            className="flex items-center gap-6 sm:gap-8 overflow-x-auto scroll-smooth snap-x snap-mandatory py-4 no-scrollbar [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {resultCards.map((card, idx) => (
              <div
                key={idx}
                className="shrink-0 snap-start w-[280px] sm:w-[340px] lg:w-[420px] h-[380px] sm:h-[440px] lg:h-[480px] rounded-[28px] sm:rounded-[36px] overflow-hidden relative shadow-md group select-none"
              >
                {/* Background Image */}
                <img
                  src={card.image}
                  alt={card.title.replace('\n', ' ')}
                  className="w-full h-full object-cover rounded-[inherit] group-hover:scale-105 transition-transform duration-500"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 rounded-[inherit] bg-gradient-to-b from-black/75 via-black/25 to-black/50 pointer-events-none" />

                {/* Card Title on top */}
                <div className="absolute top-0 left-0 right-0 p-6 sm:p-8 text-center z-10">
                  <h3 className="font-bricolage text-2xl sm:text-3xl font-medium text-white leading-snug tracking-tight whitespace-pre-line drop-shadow-sm">
                    {card.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          {/* Slider Controls (Bottom Right) */}
          <div className="flex items-center justify-end gap-3 mt-6 sm:mt-8">
            <button
              type="button"
              onClick={handlePrev}
              disabled={!canScrollLeft}
              aria-label="Previous slide"
              className="w-12 h-12 rounded-full border border-neutral-300 hover:border-dark text-dark bg-white hover:bg-neutral-50 flex items-center justify-center transition-all duration-200 cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed active:scale-95 shadow-xs"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
            </button>

            <button
              type="button"
              onClick={handleNext}
              disabled={!canScrollRight}
              aria-label="Next slide"
              className="w-12 h-12 rounded-full bg-[#141416] hover:bg-neutral-800 text-white flex items-center justify-center transition-all duration-200 cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed active:scale-95 shadow-xs"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. WHO IS THIS TOWNHALL MEANT FOR SECTION */}
      {/* ========================================================================= */}
      <section
        className="w-full bg-cover bg-center bg-no-repeat py-24 sm:py-32 relative overflow-hidden"
        style={{ backgroundImage: `url('/images/townhall_who.png')` }}
      >
        <div className="max-w-[80vw] mx-auto px-6 sm:px-8 lg:px-12">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
            <h2 className="font-bricolage text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-dark leading-[1.15]">
              Who is this <br />
              Townhall meant for?
            </h2>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {targetAudience.map((item, idx) => {
              if (item.isEmpty) {
                return <div key={idx} className="hidden lg:block" />
              }
              return (
                <div
                  key={idx}
                  className="bg-white/40 backdrop-blur-2xl border border-white/60 rounded-3xl p-8 sm:p-10 shadow-[0_4px_24px_rgba(0,0,0,0.03)] transition-all duration-300 hover:bg-white/70 hover:shadow-md flex flex-col justify-between min-h-[250px] sm:min-h-[280px]"
                >
                  <div className="mb-8">{item.icon}</div>
                  <div>
                    <h3 className="font-bricolage font-semibold text-lg sm:text-xl text-dark tracking-tight mb-2">
                      {item.title}
                    </h3>
                    <p className="font-sans text-xs sm:text-sm text-neutral-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. AI FOR EDUCATION BANNER & OVERVIEW */}
      {/* ========================================================================= */}
      <section className="w-full bg-white py-20 sm:py-28">
        <div className="max-w-[80vw] mx-auto px-6 sm:px-8 lg:px-12 flex flex-col items-center justify-center text-center">
          {/* Centered Banner Image */}
          <div className="w-full max-w-4xl mx-auto flex items-center justify-center">
            <img
              src="/images/townhall_ai_edu_img.png"
              alt="AI for Education in Africa Townhall Series"
              className="w-full h-auto object-contain "
            />
          </div>

          {/* Text underneath */}
          <p className="font-sans text-base sm:text-lg lg:text-xl text-neutral-700 font-normal leading-relaxed max-w-3xl mx-auto mt-8 sm:mt-12 text-center">
            Join over 1,000 education stakeholders from across the globe to explore how artificial intelligence can transform learning, bridge educational gaps, and prepare Africa for a future driven by creativity, technology, and global competitiveness.
          </p>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. WHAT WILL WE DO IN THIS TOWNHALL SECTION */}
      {/* ========================================================================= */}
      <section className="w-full bg-white py-16 sm:py-24 lg:py-28 border-t border-neutral-100">
        <div className="max-w-[80vw] mx-auto px-6 sm:px-8 lg:px-12 w-full">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
            <h2 className="font-bricolage text-4xl sm:text-5xl lg:text-6xl font-semibold text-dark tracking-tight leading-tight">
              What Will We Do In This <br />
              Townhall?
            </h2>
          </div>

          {/* 2-Column Content: Left Tabs (#EE7747), Right Image */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center max-w-6xl mx-auto">
            {/* Left Column Interactive Tabs */}
            <div className="lg:col-span-6 flex flex-col space-y-3.5 sm:space-y-4">
              {townhallActivities.map((item, idx) => {
                const isActive = activeTabIdx === idx

                return (
                  <div
                    key={item.title}
                    onClick={() => handleSelectTab(idx)}
                    onMouseEnter={() => handleSelectTab(idx)}
                    className={`transition-all duration-300 rounded-2xl sm:rounded-[24px] cursor-pointer select-none ${
                      isActive
                        ? 'bg-primary text-white p-6 sm:p-8 shadow-sm'
                        : 'bg-tab-inactive-bg hover:bg-tab-inactive-hover border border-neutral-100 text-dark p-5 sm:p-6'
                    }`}
                  >
                    {isActive ? (
                      /* Active State with Circular Progress Timer & Description */
                      <div>
                        <div className="flex items-center gap-3">
                          <svg
                            key={`tab-timer-${activeTabIdx}-${tabTimerKey}`}
                            className="w-5 h-5 shrink-0 -rotate-90 text-white"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              cx="12"
                              cy="12"
                              r="9"
                              stroke="currentColor"
                              strokeWidth={2.5}
                              className="opacity-25"
                              fill="none"
                            />
                            <circle
                              cx="12"
                              cy="12"
                              r="9"
                              stroke="currentColor"
                              strokeWidth={2.5}
                              strokeLinecap="round"
                              strokeDasharray="56.55"
                              fill="none"
                              className="animate-progress-ring"
                            />
                          </svg>

                          <h3 className="font-bricolage text-xl sm:text-2xl font-medium text-white tracking-tight">
                            {item.title}
                          </h3>
                        </div>

                        <p className="text-white/95 font-sans text-sm sm:text-base font-normal leading-relaxed mt-3 pl-8">
                          {item.description}
                        </p>
                      </div>
                    ) : (
                      /* Inactive State */
                      <div>
                        <h3 className="font-bricolage text-lg sm:text-xl font-medium text-dark tracking-tight">
                          {item.title}
                        </h3>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>

            {/* Right Column Image */}
            <div className="lg:col-span-6 w-full h-full">
              <div className="w-full h-[380px] sm:h-[460px] lg:h-[500px] rounded-[28px] sm:rounded-[36px] overflow-hidden shadow-sm">
                <img
                  src="/images/our_program_connected_ecosystem.png"
                  alt="What Will We Do In This Townhall"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 8. BE THE CHANGE SECTION */}
      {/* ========================================================================= */}
      <section className="w-full bg-white py-16 sm:py-24 text-center">
        <div className="max-w-[80vw] mx-auto px-6 sm:px-8 lg:px-12 flex flex-col items-center justify-center">
          <h2 className="font-bricolage text-3xl sm:text-5xl lg:text-6xl font-semibold text-dark tracking-tight mb-2 sm:mb-4">
            Be The Change.
          </h2>
          <a
            href="https://forms.gle"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bricolage text-3xl sm:text-5xl lg:text-6xl font-semibold text-primary hover:text-primary-hover transition-colors inline-flex items-center gap-3 sm:gap-4 group cursor-pointer"
          >
            <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
            <span>Click here to Register</span>
          </a>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 9. READY TO SHAPE AFRICA'S TECH FUTURE CTA CARD */}
      {/* ========================================================================= */}
      <CtaCard overlapFooter={true} />
    </div>
  )
}

export default AiForEducationTownhall
