import React, { useState, useEffect, useRef } from 'react'
import { PageHero } from '../components/ui/PageHero'
import { InteractiveFeatureList, type InteractiveItem } from '../components/ui/InteractiveFeatureList'
import { CtaCard } from '../components/ui/CtaCard'

interface EcosystemItem {
  title: string
  description: string
}

interface ProgramPillar {
  title: string
  description: string
}

interface ProgramTrackCard {
  title: string
  image: string
}

export const Programs: React.FC = () => {
  // One Connected Ecosystem state
  const [activeEcosystemIndex, setActiveEcosystemIndex] = useState(0)
  const [ecosystemTimerKey, setEcosystemTimerKey] = useState(0)

  // Our Program Pillars state
  const [activePillarIndex, setActivePillarIndex] = useState(3)
  const [pillarTimerKey, setPillarTimerKey] = useState(0)

  // Program Tracks slider state
  const sliderRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const ecosystemItems: EcosystemItem[] = [
    {
      title: 'Technical Programs',
      description:
        'Provide structured, research informed training in Artificial Intelligence, Data Science, and emerging technologies. Through a blend of theoretical depth and hands on application, learners gain the skills required to thrive in a rapidly evolving digital economy while contributing to locally relevant innovation.',
    },
    {
      title: 'Professional Programs',
      description:
        'Tailored for working professionals, executives, and organizations seeking to build internal AI fluency, navigate digital disruption, and lead technology-driven transformations across diverse industries.',
    },
    {
      title: 'Policy & Social Impact Programs',
      description:
        'Focused on Tech Justice, Digital Rights, algorithmic accountability, and inclusive governance to ensure emerging technologies foster equity, protect citizens, and empower all communities.',
    },
  ]

  const programPillars: ProgramPillar[] = [
    {
      title: 'AI Skills Development & Inclusive Workforce Transformation',
      description:
        'Equipping youth, women, and professionals across Africa with future-ready technical skills in machine learning, data engineering, and generative AI.',
    },
    {
      title: 'Industry Aligned Learning & Strategic Partnerships',
      description:
        'Connecting learners and curriculum directly with enterprise demands, corporate fellowships, and global tech hiring networks.',
    },
    {
      title: 'Policy Advocacy & Global Competitiveness',
      description:
        'Shaping responsible governance frameworks, digital policies, and ethical standards that elevate African innovation globally.',
    },
    {
      title: 'Applied AI Research & Innovation',
      description:
        'Through innovation labs and startup support, we develop AI solutions across critical sectors while nurturing indigenous entrepreneurship and globally relevant innovation.',
    },
    {
      title: 'Tech Justice, Digital Rights & AI Safety',
      description:
        'Advancing algorithmic fairness, data sovereignty, and human rights protections to ensure digital technologies empower all communities.',
    },
  ]

  const programTracks: ProgramTrackCard[] = [
    {
      title: 'Graduate\nDevelopment\nPrograms',
      image: '/images/home_hero_img_1.png',
    },
    {
      title: 'Mid Level & Senior\nManagement\nPrograms',
      image: '/images/partner_who_can_partner_img.png',
    },
    {
      title: 'Industry Upskilling\nPrograms',
      image: '/images/our_program_connected_ecosystem.png',
    },
    {
      title: 'Executive &\nPolicy Leadership\nPrograms',
      image: '/images/hero_where_we_create_impact.png',
    },
    {
      title: 'Community &\nGrassroots AI\nPrograms',
      image: '/images/about_we_are_here_bg.png',
    },
  ]

  const innovationPlatforms: InteractiveItem[] = [
    {
      title: 'AI Research',
      description:
        'Applied research focused on Africa specific challenges, contributing to global AI knowledge while strengthening local innovation ecosystems.',
      image: '/images/our_program_innovation_impact_programs.png',
    },
    {
      title: 'Kokokah EdTech',
      description:
        'Interactive digital learning tools, localized curricula, and AI-powered educational platforms designed to democratize high-quality learning across Africa.',
      image: '/images/our_program_innovation_impact_programs.png',
    },
    {
      title: 'Makemation',
      description:
        'Africa’s flagship AI tech festival and creator ecosystem connecting young innovators, hardware engineers, and builders with venture mentors and global recruiters.',
      image: '/images/our_program_innovation_impact_programs.png',
    },
  ]

  // Auto-advance for One Connected Ecosystem (5s)
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveEcosystemIndex((prev) => (prev + 1) % ecosystemItems.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [ecosystemTimerKey, ecosystemItems.length])

  // Auto-advance for Program Pillars (5s)
  useEffect(() => {
    const interval = setInterval(() => {
      setActivePillarIndex((prev) => (prev + 1) % programPillars.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [pillarTimerKey, programPillars.length])

  // Slider scroll management
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
      sliderRef.current.scrollBy({ left: -460, behavior: 'smooth' })
    }
  }

  const handleNext = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 460, behavior: 'smooth' })
    }
  }

  const handleSelectEcosystem = (idx: number) => {
    setActiveEcosystemIndex(idx)
    setEcosystemTimerKey((prev) => prev + 1)
  }

  const handleSelectPillar = (idx: number) => {
    setActivePillarIndex(idx)
    setPillarTimerKey((prev) => prev + 1)
  }

  return (
    <div className="w-full bg-white">
      {/* Hero Section */}
      <PageHero
        title="Our Programs"
        subtitle="Building talent, shaping policy, and advancing ethical AI across Africa."
      />

        {/* Our Program Pillars Section (#A9518B) */}
      <section className="w-full bg-white py-16 sm:py-24 lg:py-32 border-b border-neutral-100">
        <div className="max-w-[80vw] mx-auto px-6 sm:px-8 lg:px-12 w-full">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
            <h2 className="font-bricolage text-4xl sm:text-5xl lg:text-[56px] font-medium text-dark tracking-tight leading-tight">
              Our Program Pillars
            </h2>
          </div>

          {/* 2-Column Content: Left Image, Right Auto-Advancing Accordion Tabs */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            {/* Left Column Image */}
            <div className="lg:col-span-6 w-full h-full">
              <div className="w-full h-[400px] sm:h-[480px] lg:h-[540px] rounded-[28px] sm:rounded-[36px] overflow-hidden shadow-sm">
                <img
                  src="/images/our_program_img.png"
                  alt="Our Program Pillars"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right Column Interactive Tabs */}
            <div className="lg:col-span-6 flex flex-col space-y-3.5 sm:space-y-4">
              {programPillars.map((pillar, idx) => {
                const isActive = activePillarIndex === idx

                return (
                  <div
                    key={pillar.title}
                    onClick={() => handleSelectPillar(idx)}
                    onMouseEnter={() => handleSelectPillar(idx)}
                    className={`transition-all duration-300 rounded-2xl sm:rounded-[22px] cursor-pointer select-none ${
                      isActive
                        ? 'bg-program-pillar-active text-white p-6 sm:p-7 shadow-sm'
                        : 'bg-tab-inactive-bg hover:bg-tab-inactive-hover text-dark p-5 sm:p-6'
                    }`}
                  >
                    {isActive ? (
                      /* Active State with Circular Progress Timer & Description */
                      <div>
                        <div className="flex items-center gap-3">
                          <svg
                            key={`pillar-timer-${activePillarIndex}-${pillarTimerKey}`}
                            className="w-5 h-5 shrink-0 -rotate-90 text-white"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              cx="12"
                              cy="12"
                              r="9"
                              stroke="currentColor"
                              strokeWidth="2.5"
                              className="opacity-25"
                              fill="none"
                            />
                            <circle
                              cx="12"
                              cy="12"
                              r="9"
                              stroke="currentColor"
                              strokeWidth="2.5"
                              strokeLinecap="round"
                              strokeDasharray="56.55"
                              fill="none"
                              className="animate-progress-ring"
                            />
                          </svg>

                          <h3 className="font-bricolage text-xl sm:text-2xl font-medium text-white tracking-tight">
                            {pillar.title}
                          </h3>
                        </div>

                        <p className="text-white/95 font-sans text-sm sm:text-base font-normal leading-relaxed mt-3 pl-8">
                          {pillar.description}
                        </p>
                      </div>
                    ) : (
                      /* Inactive State */
                      <div>
                        <h3 className="font-bricolage text-lg sm:text-xl font-medium text-dark tracking-tight">
                          {pillar.title}
                        </h3>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* One Connected Ecosystem Section (#EE7747) */}
      <section className="w-full bg-white py-16 sm:py-24 lg:py-32 border-b border-neutral-100">
        <div className="max-w-[80vw] mx-auto px-6 sm:px-8 lg:px-12 w-full">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
            <h2 className="font-bricolage text-4xl sm:text-5xl lg:text-[56px] font-medium text-dark tracking-tight leading-tight mb-4">
              One Connected Ecosystem
            </h2>
            <p className="font-sans text-base sm:text-lg text-muted font-normal leading-relaxed">
              Our programs connect technical training, professional growth, research and policy to prepare Africa to shape the future of AI.
            </p>
          </div>

          {/* 2-Column Content: Left Tabs (#EE7747), Right Image */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            {/* Left Column Interactive Tabs */}
            <div className="lg:col-span-6 flex flex-col space-y-3.5 sm:space-y-4 order-2 lg:order-1">
              {ecosystemItems.map((item, idx) => {
                const isActive = activeEcosystemIndex === idx

                return (
                  <div
                    key={item.title}
                    onClick={() => handleSelectEcosystem(idx)}
                    onMouseEnter={() => handleSelectEcosystem(idx)}
                    className={`transition-all duration-300 rounded-2xl sm:rounded-[22px] cursor-pointer select-none ${
                      isActive
                        ? 'bg-primary text-white p-6 sm:p-7 shadow-sm'
                        : 'bg-tab-inactive-bg hover:bg-tab-inactive-hover text-dark p-5 sm:p-6'
                    }`}
                  >
                    {isActive ? (
                      /* Active State with Circular Progress Timer & Description */
                      <div>
                        <div className="flex items-center gap-3">
                          <svg
                            key={`eco-timer-${activeEcosystemIndex}-${ecosystemTimerKey}`}
                            className="w-5 h-5 shrink-0 -rotate-90 text-white"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              cx="12"
                              cy="12"
                              r="9"
                              stroke="currentColor"
                              strokeWidth="2.5"
                              className="opacity-25"
                              fill="none"
                            />
                            <circle
                              cx="12"
                              cy="12"
                              r="9"
                              stroke="currentColor"
                              strokeWidth="2.5"
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
            <div className="lg:col-span-6 w-full h-full order-1 lg:order-2">
              <div className="w-full h-[400px] sm:h-[480px] lg:h-[540px] rounded-[28px] sm:rounded-[36px] overflow-hidden shadow-sm">
                <img
                  src="/images/our_program_connected_ecosystem.png"
                  alt="One Connected Ecosystem"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

    

      {/* Program Tracks Slider Section */}
      <section className="w-full bg-white py-16 sm:py-24 lg:py-32 border-b border-neutral-100 overflow-hidden">
        <div className="max-w-[80vw] mx-auto px-6 sm:px-8 lg:px-12 w-full">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <h2 className="font-bricolage text-4xl sm:text-5xl lg:text-[56px] font-medium text-dark tracking-tight leading-tight mb-4">
              Program Tracks
            </h2>
            <p className="font-sans text-base sm:text-lg lg:text-xl text-muted font-normal leading-relaxed">
              Targeted programs designed for different career stages and sectors.
            </p>
          </div>

          {/* Horizontal Slider */}
          <div
            ref={sliderRef}
            className="flex items-center gap-6 sm:gap-8 overflow-x-auto scroll-smooth snap-x snap-mandatory py-4 no-scrollbar [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {programTracks.map((card, idx) => (
              <div
                key={idx}
                className="shrink-0 snap-start w-[280px] sm:w-[340px] lg:w-[450px] h-[420px] sm:h-[480px] lg:h-[530px] rounded-[32px] sm:rounded-[20px] overflow-hidden relative shadow-md group select-none"
              >
                {/* Background Image */}
                <img
                  src={card.image}
                  alt={card.title.replace('\n', ' ')}
                  className="w-full h-full object-cover rounded-[inherit] group-hover:scale-105 transition-transform duration-500"
                />

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 rounded-[inherit] bg-gradient-to-b from-black/75 via-black/25 to-black/60 pointer-events-none transition-opacity duration-300" />

                {/* Card Title on top */}
                <div className="absolute top-0 left-0 right-0 p-8 sm:p-10 text-center z-10">
                  <h3 className="font-bricolage text-2xl sm:text-3xl lg:text-[32px] font-medium text-white leading-snug tracking-tight whitespace-pre-line drop-shadow-sm">
                    {card.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          {/* Slider Controls (Bottom Right) */}
          <div className="flex items-center justify-end gap-3 mt-8 sm:mt-10">
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

      {/* Innovation & Impact Platforms Section */}
      <InteractiveFeatureList
        title="Innovation & Impact Platforms"
        subtitle="We also build platforms that shape culture, education and research."
        items={innovationPlatforms}
      />

     
    </div>
  )
}

export default Programs
