import React, { useRef, useState, useEffect } from 'react'
import { PageHero } from '../components/ui/PageHero'
import { CtaCard } from '../components/ui/CtaCard'
import { InteractiveAccordion } from '../components/ui/InteractiveAccordion'
import { InteractiveFeatureList, type InteractiveItem } from '../components/ui/InteractiveFeatureList'

interface VisionCard {
  id: number
  description: string
  image: string
}

export const StrategicVision: React.FC = () => {
  const sliderRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const problems = [
    {
      title: 'The Knowledge Gap & Talent Depth',
      description:
        'We bridge this gap by delivering advanced, practical training in AI engineering, data modeling, AI storytelling, governance, ethics, and applied AI for business and public systems, cultivating leaders capable of building and scaling real solutions.',
    },
    {
      title: 'Sustainable Digital Transformation',
      description:
        'We empower organizations and institutions to adopt AI responsibly and effectively, streamlining legacy operations and driving sustainable socio-economic growth across sectors.',
    },
    {
      title: 'Limited Government AI Literacy',
      description:
        'We equip policymakers, civil servants, and institutional leaders with the strategic knowledge required to formulate responsible AI regulations and drive public-sector innovation.',
    },
  ]

  const dedicationItems: InteractiveItem[] = [
    {
      title: 'Building a Globally Competitive Workforce',
      description:
        "Preparing Africa's youth and professionals with world class AI skills aligned with international standards.",
      image: '/images/partner_sponsor_the_next_gen_img.png',
    },
    {
      title: 'Advancing Ethical & Sustainable AI',
      description:
        'Promoting responsible, transparent, and fair AI policies that protect digital rights and foster equitable development.',
      image: '/images/partner_sponsor_the_next_gen_img.png',
    },
    {
      title: 'Fostering Cross-Sector Collaboration',
      description:
        'Uniting academia, industry pioneers, governments, and global technology innovators to build resilient ecosystems.',
      image: '/images/partner_sponsor_the_next_gen_img.png',
    },
  ]

  const visionCards: VisionCard[] = [
    {
      id: 1,
      description:
        "Influence policy, strengthen institutions, and empower Africa's human capital to adopt AI responsibly.",
      image: '/images/scholarship_eligibility_img.jpg',
    },
    {
      id: 2,
      description:
        'Deliver structured, high-quality programs for students, managers, policymakers, and civil society leaders.',
      image: '/images/scholarship_eligibility_img.jpg',
    },
    {
      id: 3,
      description:
        'Position Rise Networks as a premier continental authority on ethical AI governance, tech policy and sovereign systems.',
      image: '/images/scholarship_eligibility_img.jpg',
    },
    {
      id: 4,
      description:
        'Cultivate homegrown innovation labs and sovereign data infrastructure across key African growth sectors.',
      image: '/images/scholarship_eligibility_img.jpg',
    },
  ]

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
      sliderRef.current.scrollBy({ left: -420, behavior: 'smooth' })
    }
  }

  const handleNext = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 420, behavior: 'smooth' })
    }
  }

  return (
    <div className="w-full bg-white">
      {/* Hero Section */}
      <PageHero
        title={
          <>
            Strategic Vision & <br className="hidden sm:inline" />
            Futuristic Outlook
          </>
        }
        bgImage="/images/page_hero_bg.png"
        bannerImage="/images/strategic_vision_hero.png"
        bannerAlt="Strategic Vision & Futuristic Outlook - Rise Networks"
      />

      {/* The Problems We Address Section */}
      <InteractiveAccordion
        title="The Problems We Address"
        image="/images/scholarship_how_to_appply.png"
        imageAlt="The Problems We Address"
        items={problems}
        activeBgColor="bg-program-pillar-active"
        autoPlayInterval={5000}
      />

      {/* Our Dedication to Africa Section */}
      <InteractiveFeatureList
        title="Our Dedication to Africa"
        items={dedicationItems}
        defaultIndex={0}
      />

      {/* Our Vision for the Next 2–5 Years Section */}
      <section className="w-full bg-white py-16 sm:py-24 lg:py-32 overflow-hidden">
        <div className="max-w-[80vw] mx-auto px-6 sm:px-8 lg:px-12 w-full">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <h2 className="font-bricolage text-4xl sm:text-5xl lg:text-6xl font-medium text-dark tracking-tight leading-tight mb-4">
              Our Vision <br />
              for the Next 2–5 Years
            </h2>
          </div>

          {/* Horizontal Carousel */}
          <div
            ref={sliderRef}
            className="flex items-center gap-6 sm:gap-8 overflow-x-auto scroll-smooth snap-x snap-mandatory py-4 no-scrollbar [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {visionCards.map((item) => (
              <div
                key={item.id}
                className="shrink-0 snap-start w-[300px] sm:w-[380px] lg:w-[440px] h-[420px] sm:h-[480px] lg:h-[520px] rounded-[28px] sm:rounded-[36px] overflow-hidden relative shadow-md group select-none"
              >
                {/* Background Image */}
                <img
                  src={item.image}
                  alt="Our Vision for the Next 2–5 Years"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Dark overlay & bottom gradient for rich contrast and depth */}
                <div className="absolute inset-0 bg-black/35 pointer-events-none transition-colors duration-300 group-hover:bg-black/25" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/20 to-black/10 pointer-events-none" />

                {/* Floating Bottom Card Text */}
                <div className="absolute bottom-5 sm:bottom-6 left-5 sm:left-6 right-5 sm:right-6 p-4 sm:p-6 bg-white/95 backdrop-blur-md rounded-[20px] sm:rounded-[24px] shadow-lg border border-white/80">
                  <p className="font-sans text-xs sm:text-sm lg:text-[15px] font-normal text-dark leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Carousel Navigation Buttons (Bottom Right) */}
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

      {/* Ready to Shape Africa CTA overlapping into Footer */}
      <CtaCard overlapFooter={true} />
    </div>
  )
}

export default StrategicVision
