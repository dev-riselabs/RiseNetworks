import React, { useRef, useState, useEffect } from 'react'
import { PageHero } from '../components/ui/PageHero'
import { CtaCard } from '../components/ui/CtaCard'
import { InteractiveAccordion } from '../components/ui/InteractiveAccordion'

interface SeriesMatterCard {
  title: string
  description: string
  image: string
}

interface FocusAreaCard {
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

export const AiForIndustriesTownhall: React.FC = () => {
  // Why Series Matters Slider
  const sliderRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  // Focus Areas Slider
  const focusSliderRef = useRef<HTMLDivElement>(null)
  const [canFocusScrollLeft, setCanFocusScrollLeft] = useState(false)
  const [canFocusScrollRight, setCanFocusScrollRight] = useState(true)


  const cards: SeriesMatterCard[] = [
    {
      title: 'Influence Public Discourse',
      description: "Shape narratives around AI's role in sustainable development, digital inclusion, and job creation.",
      image: '/images/partner_sponsor_the_next_gen_img.png',
    },
    {
      title: 'Foster Cross-Sector Collaboration',
      description: 'Build partnerships that accelerate inclusive and locally relevant AI adoption.',
      image: '/images/partner_sponsor_the_next_gen_img.png',
    },
    {
      title: 'Create Strategic Frameworks',
      description: 'Connect policymakers, researchers, and enterprise leaders to guide responsible technology innovation.',
      image: '/images/partner_sponsor_the_next_gen_img.png',
    },
    {
      title: 'Accelerate Industrial Transformation',
      description: 'Equip key economic sectors with actionable frameworks and localized artificial intelligence tools.',
      image: '/images/partner_sponsor_the_next_gen_img.png',
    },
  ]

  const focusAreas: FocusAreaCard[] = [
    {
      title: 'AI in Finance',
      image: '/images/ai_indus_1.png',
    },
    {
      title: 'AI in Education',
      image: '/images/ai_indus_1.png',
    },
    {
      title: 'AI in Governance',
      image: '/images/ai_indus_1.png',
    },
    {
      title: 'AI in Healthcare',
      image: '/images/ai_indus_1.png',
    },
    {
      title: 'AI in Agriculture',
      image: '/images/ai_indus_1.png',
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

  // Update scroll state for Why Series Matters
  const updateScrollState = () => {
    if (sliderRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current
      setCanScrollLeft(scrollLeft > 10)
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 10)
    }
  }

  // Update scroll state for Focus Areas
  const updateFocusScrollState = () => {
    if (focusSliderRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = focusSliderRef.current
      setCanFocusScrollLeft(scrollLeft > 10)
      setCanFocusScrollRight(scrollLeft + clientWidth < scrollWidth - 10)
    }
  }


  useEffect(() => {
    updateScrollState()
    updateFocusScrollState()

    const currentRef = sliderRef.current
    const currentFocusRef = focusSliderRef.current

    if (currentRef) {
      currentRef.addEventListener('scroll', updateScrollState)
    }
    if (currentFocusRef) {
      currentFocusRef.addEventListener('scroll', updateFocusScrollState)
    }

    const handleResize = () => {
      updateScrollState()
      updateFocusScrollState()
    }

    window.addEventListener('resize', handleResize)

    return () => {
      if (currentRef) {
        currentRef.removeEventListener('scroll', updateScrollState)
      }
      if (currentFocusRef) {
        currentFocusRef.removeEventListener('scroll', updateFocusScrollState)
      }
      window.removeEventListener('resize', handleResize)
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

  const handleFocusPrev = () => {
    if (focusSliderRef.current) {
      focusSliderRef.current.scrollBy({ left: -440, behavior: 'smooth' })
    }
  }

  const handleFocusNext = () => {
    if (focusSliderRef.current) {
      focusSliderRef.current.scrollBy({ left: 440, behavior: 'smooth' })
    }
  }

  return (
    <div className="w-full bg-white overflow-hidden">
      {/* ========================================================================= */}
      {/* 1. HERO SECTION */}
      {/* ========================================================================= */}
      <PageHero
        bgImage="/images/townhall_hero_bg.png"
        title={
          <>
            AI for Industries and <br className="hidden sm:inline" />
            Sectors Town Hall Series
          </>
        }
      >
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
      </PageHero>

      {/* ========================================================================= */}
      {/* 2. WHY THIS SERIES MATTERS SECTION */}
      {/* ========================================================================= */}
      <section className="w-full bg-white py-16 sm:py-24 lg:py-28 overflow-hidden">
        <div className="max-w-[80vw] mx-auto px-6 sm:px-8 lg:px-12 w-full">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
            <h2 className="font-bricolage text-3xl sm:text-4xl lg:text-5xl font-semibold text-dark tracking-tight leading-tight mb-3">
              Why This Series Matters
            </h2>
          </div>

          {/* Cards Slider */}
          <div
            ref={sliderRef}
            className="flex items-center gap-6 sm:gap-8 overflow-x-auto scroll-smooth snap-x snap-mandatory py-4 no-scrollbar [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {cards.map((card, idx) => (
              <div
                key={idx}
                className="shrink-0 snap-start w-[300px] sm:w-[360px] lg:w-[440px] h-[400px] sm:h-[460px] lg:h-[500px] rounded-[28px] sm:rounded-[36px] overflow-hidden relative shadow-md group select-none"
              >
                {/* Background Image */}
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover rounded-[inherit] group-hover:scale-105 transition-transform duration-500"
                />

                {/* Subtle dark tint over the image */}
                <div className="absolute inset-0 bg-black/20 rounded-[inherit] pointer-events-none" />

                {/* White Floating Content Badge at Bottom */}
                <div className="absolute bottom-6 left-5 right-5 sm:left-6 sm:right-6 bg-white/95 backdrop-blur-md rounded-2xl p-5 sm:p-6 shadow-md border border-white/60">
                  <h3 className="font-bricolage font-semibold text-base sm:text-lg text-dark mb-1 leading-snug">
                    {card.title}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-neutral-600 leading-relaxed">
                    {card.description}
                  </p>
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
      {/* 3. DESIGNED FOR DEPTH, DIALOGUE, AND OUTCOMES (BENTO GRID) */}
      {/* ========================================================================= */}
      <section className="w-full bg-white py-16 sm:py-24 lg:py-28 border-t border-neutral-100">
        <div className="max-w-[80vw] mx-auto px-6 sm:px-8 lg:px-12 w-full">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
            <h2 className="font-bricolage text-3xl sm:text-5xl lg:text-6xl font-semibold text-dark tracking-tight leading-[1.15]">
              Designed For Depth, <br />
              Dialogue, And Outcomes
            </h2>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 max-w-6xl mx-auto items-stretch">
            {/* Left Column: Large Tall Card with Image + Text */}
            <div className="lg:col-span-5 bg-[#FAFAFA] border border-neutral-100 rounded-[28px] sm:rounded-[36px] p-6 sm:p-7 flex flex-col justify-between shadow-xs">
              <div className="w-full h-[240px] sm:h-[280px] rounded-2xl sm:rounded-[24px] overflow-hidden mb-6">
                <img
                  src="/images/ai_indus_1.png"
                  alt="Focused discussions"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="font-sans text-sm sm:text-base text-neutral-700 font-normal leading-relaxed">
                Focused discussions identifying sector-specific challenges and solutions with live Q and A sessions.
              </p>
            </div>

            {/* Right Column: Top Wide Card + Bottom 2 Split Cards */}
            <div className="lg:col-span-7 flex flex-col gap-6 sm:gap-8 justify-between">
              {/* Top Card: Keynote Presentations */}
              <div className="bg-[#FAFAFA] border border-neutral-100 rounded-[28px] sm:rounded-[36px] p-8 sm:p-10 flex flex-col justify-center shadow-xs flex-1">
                <h3 className="font-bricolage text-2xl sm:text-3xl lg:text-[32px] font-semibold text-dark mb-4 sm:mb-6">
                  Keynote Presentations
                </h3>
                <p className="font-sans text-sm sm:text-base text-neutral-700 font-normal leading-relaxed max-w-xl">
                  Explore how AI can improve access to education, enhance learning outcomes and promote equity across Africa.
                </p>
              </div>

              {/* Bottom 2 Split Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                {/* Bottom Left: Image Card (ai_indus_2.png) */}
                <div className="h-[240px] sm:h-[260px] rounded-[28px] sm:rounded-[36px] overflow-hidden shadow-xs">
                  <img
                    src="/images/ai_indus_2.png"
                    alt="Fireside session"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Bottom Right: Fireside Conversations */}
                <div className="bg-[#FAFAFA] border border-neutral-100 rounded-[28px] sm:rounded-[36px] p-6 sm:p-8 flex flex-col justify-between shadow-xs h-[240px] sm:h-[260px]">
                  <h3 className="font-bricolage text-2xl sm:text-[28px] font-semibold text-dark leading-tight">
                    Fireside <br />
                    Conversations
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-neutral-700 font-normal leading-relaxed">
                    Policymakers and industry leaders explore regulatory, ethical and implications.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. FOCUS AREAS SECTION */}
      {/* ========================================================================= */}
      <section className="w-full bg-white py-16 sm:py-24 lg:py-28 overflow-hidden">
        <div className="max-w-[80vw] mx-auto px-6 sm:px-8 lg:px-12 w-full">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <h2 className="font-bricolage text-3xl sm:text-4xl lg:text-5xl font-semibold text-dark tracking-tight leading-tight mb-4">
              Focus Areas
            </h2>
            <p className="font-sans text-base sm:text-lg text-neutral-700 font-normal leading-relaxed max-w-2xl mx-auto">
              Each Town Hall explores how AI can unlock opportunity <br className="hidden sm:inline" />
              while addressing policy and ethical considerations.
            </p>
          </div>

          {/* Cards Slider */}
          <div
            ref={focusSliderRef}
            className="flex items-center gap-6 sm:gap-8 overflow-x-auto scroll-smooth snap-x snap-mandatory py-4 no-scrollbar [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {focusAreas.map((card, idx) => (
              <div
                key={idx}
                className="shrink-0 snap-start w-[290px] sm:w-[350px] lg:w-[410px] h-[380px] sm:h-[450px] lg:h-[490px] rounded-[32px] sm:rounded-[40px] overflow-hidden relative shadow-sm group select-none"
              >
                {/* Background Image */}
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover rounded-[inherit] group-hover:scale-105 transition-transform duration-500"
                />

                {/* Dark Vignette Overlay for readability */}
                <div className="absolute inset-0 rounded-[inherit] bg-black/35 pointer-events-none" />

                {/* Card Title on Top Center */}
                <div className="absolute top-0 left-0 right-0 pt-7 sm:pt-9 px-6 text-center z-10">
                  <h3 className="font-bricolage text-2xl sm:text-3xl font-medium text-white leading-snug tracking-tight">
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
              onClick={handleFocusPrev}
              disabled={!canFocusScrollLeft}
              aria-label="Previous slide"
              className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-neutral-300 hover:border-dark text-dark bg-white hover:bg-neutral-50 flex items-center justify-center transition-all duration-200 cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed active:scale-95 shadow-xs"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
            </button>

            <button
              type="button"
              onClick={handleFocusNext}
              disabled={!canFocusScrollRight}
              aria-label="Next slide"
              className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#141416] hover:bg-neutral-800 text-white flex items-center justify-center transition-all duration-200 cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed active:scale-95 shadow-xs"
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
      {/* 6. UPCOMING TOWN HALL SERIES (BANNER & OVERVIEW) */}
      {/* ========================================================================= */}
      <section className="w-full bg-white py-20 sm:py-28">
        <div className="max-w-[80vw] mx-auto px-6 sm:px-8 lg:px-12 flex flex-col items-center justify-center text-center">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
            <h2 className="font-bricolage text-3xl sm:text-4xl lg:text-5xl font-semibold text-dark tracking-tight leading-tight">
              Upcoming Town Hall Series
            </h2>
          </div>

          {/* Centered Banner Image */}
          <div className="w-full max-w-4xl mx-auto flex items-center justify-center">
            <img
              src="/images/townhall_ai_edu_img.png"
              alt="AI for Education in Africa Townhall Series"
              className="w-full h-auto object-contain"
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
      <InteractiveAccordion
        title={
          <>
            What Will We Do In This <br />
            Townhall?
          </>
        }
        image="/images/our_program_connected_ecosystem.png"
        imageAlt="What Will We Do In This Townhall"
        items={townhallActivities}
        activeBgColor="bg-primary"
        imagePosition="right"
        className="border-t border-neutral-100"
      />

      {/* ========================================================================= */}
      {/* 8. CO-HOST. PARTNER. CONTRIBUTE SECTION */}
      {/* ========================================================================= */}
      <section className="w-full bg-white py-16 sm:py-24 text-center">
        <div className="max-w-[80vw] mx-auto px-6 sm:px-8 lg:px-12 flex flex-col items-center justify-center">
          <h2 className="font-bricolage text-3xl sm:text-5xl lg:text-6xl font-semibold text-dark tracking-tight mb-2 sm:mb-4">
            Co-Host. Partner. Contribute.
          </h2>
          <a
            href="https://forms.gle"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bricolage text-3xl sm:text-5xl lg:text-6xl font-semibold text-primary hover:text-primary-hover transition-colors inline-flex items-center gap-3 sm:gap-4 group cursor-pointer"
          >
            <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
            <span>Collaborate With Us</span>
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

export default AiForIndustriesTownhall
