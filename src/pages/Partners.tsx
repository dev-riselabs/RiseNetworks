import React, { useRef, useState, useEffect } from 'react'
import { PageHero } from '../components/ui/PageHero'
import { Button } from '../components/ui/Button'
import { InteractiveAccordion } from '../components/ui/InteractiveAccordion'
import { InteractiveFeatureList } from '../components/ui/InteractiveFeatureList'

export const Partners: React.FC = () => {
  const sliderRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const impactCards = [
    {
      title: 'Empower\nLearners',
      image: '/images/home_hero_img_1.png',
    },
    {
      title: 'Bridge\nInequality Gaps',
      image: '/images/home_hero_img_2.png',
    },
    {
      title: 'Strengthen\nTalent Pipelines',
      image: '/images/about_hero_img.png',
    },
    {
      title: 'Drive Ethical\nAI Innovation',
      image: '/images/hero_where_we_create_impact.png',
    },
    {
      title: 'Transform\nCommunities',
      image: '/images/about_we_are_here_bg.png',
    },
  ]

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

  const sponsorshipTiers = [
    {
      title: 'Full Scholarship',
      bullets: [
        'Covers 100% of tuition for selected learners',
        'Recognition on scholarship announcements, course pages and certificates',
      ],
      image: '/images/partner_sponsor_the_next_gen_img.png',
    },
    {
      title: 'Partial Scholarship',
      bullets: [
        'Co-funds tuition alongside community grants for high-potential applicants',
        'Brand visibility across cohort graduation showcases and digital reports',
      ],
      image: '/images/partner_sponsor_the_next_gen_img.png',
    },
    {
      title: 'Corporate Fellowship Partner',
      bullets: [
        'Sponsors dedicated talent tracks with direct internship and hiring access',
        'Custom capstone project collaboration tailored to your enterprise AI needs',
      ],
      image: '/images/partner_sponsor_the_next_gen_img.png',
    },
  ]

  const partnerTypes = [
    {
      title: 'Philanthropic Foundations',
      description:
        'Deploy catalytic grant funding to expand scholarships, bridge inequality, and advance digital equity for underserved youth across Africa.',
    },
    {
      title: 'Corporate Sponsors',
      description:
        'Channel your CSR, ESG, or innovation budgets into measurable impact by supporting ethical AI talent and inclusive digital growth.',
    },
    {
      title: 'Individual Donors',
      description:
        'Empower ambitious data science and AI students through direct tuition aid, laptop grants, and career mentorship opportunities.',
    },
    {
      title: 'Alumni and Diaspora Network',
      description:
        'Give back to Africa’s next generation of innovators through knowledge transfer, fellowship sponsorships, and strategic advisory.',
    },
  ]

  return (
    <div className="w-full bg-white pb-24 sm:pb-32">
      {/* Hero Section */}
      <PageHero
        title={
          <>
            Build the future of <br />
            AI in Africa with us.
          </>
        }
      >
        <Button
          variant="primary"
          size="lg"
          rounded="full"
          className="shadow-sm gap-2"
        >
          <span>Become a Partner</span>
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </Button>

        <Button
          variant="secondary"
          size="lg"
          rounded="full"
          className="bg-[#EBE7E8]/80 hover:bg-[#E2DEE0] border-transparent gap-2"
        >
          <svg className="w-5 h-5 text-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.8}
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
          <span>Contact Us</span>
        </Button>
      </PageHero>

      {/* Why Partner With Us Section */}
      <section className="w-full bg-white pt-16 sm:pt-24 pb-16 sm:pb-24">
        <div className="max-w-[80vw] mx-auto px-6 sm:px-8 lg:px-12 w-full">
          <div className="max-w-4xl">
            <h2 className="font-bricolage text-3xl sm:text-4xl lg:text-[44px] font-medium text-dark tracking-tight leading-tight mb-4 sm:mb-6">
              Why Partner With Us?
            </h2>
            <p className="font-sans text-base sm:text-lg lg:text-[19px] text-muted font-normal leading-relaxed">
              Africa is at the cusp of a technological revolution, yet millions of talented young people are being left behind due to lack of access. By sponsoring scholarships at Rise Networks Academy, you’re not just funding education, you’re investing in Africa’s future AI workforce, creating inclusive opportunities, and building ethical innovators for a globally competitive world.
            </p>
          </div>
        </div>
      </section>

      {/* Your Impact Starts Here Section (Slider) */}
      <section className="w-full bg-white py-12 sm:py-16 overflow-hidden">
        <div className="max-w-[80vw] mx-auto px-6 sm:px-8 lg:px-12 w-full">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <h2 className="font-bricolage text-4xl sm:text-5xl lg:text-6xl font-medium text-dark tracking-tight leading-tight mb-4">
              Your Impact Starts Here
            </h2>
            <p className="font-sans text-base sm:text-lg lg:text-xl text-muted font-normal leading-relaxed">
              As a Scholarship Partner, your investment unlocks opportunity, expands access and transforms lives through AI education.
            </p>
          </div>

          {/* Horizontal Slider */}
          <div
            ref={sliderRef}
            className="flex items-center gap-6 sm:gap-8 overflow-x-auto scroll-smooth snap-x snap-mandatory py-4 no-scrollbar [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {impactCards.map((card, idx) => (
              <div
                key={idx}
                className="shrink-0 snap-start w-[280px] sm:w-[340px] lg:w-[450px] h-[420px] sm:h-[480px] lg:h-[530px] rounded-[32px] sm:rounded-[20px] overflow-hidden relative shadow-md group select-none"
              >
                <img
                  src={card.image}
                  alt={card.title.replace('\n', ' ')}
                  className="w-full h-full object-cover rounded-[inherit] group-hover:scale-105 transition-transform duration-500"
                />

                <div className="absolute inset-0 rounded-[inherit] bg-gradient-to-b from-black/75 via-black/25 to-black/60 pointer-events-none transition-opacity duration-300" />

                <div className="absolute top-0 left-0 right-0 p-8 sm:p-10 text-center z-10">
                  <h3 className="font-bricolage text-2xl sm:text-3xl lg:text-[32px] font-medium text-white leading-snug tracking-tight whitespace-pre-line drop-shadow-sm">
                    {card.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          {/* Slider Controls */}
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

      {/* Sponsor the Next Generation of AI Leaders */}
      <InteractiveFeatureList
        title="Sponsor the Next Generation of AI Leaders"
        subtitle="Choose a partnership model that aligns with your organization's mission and goals."
        items={sponsorshipTiers}
      />

      {/* Who Can Partner With Us Section (#29ABE2) */}
      <InteractiveAccordion
        title="Who Can Partner With Us?"
        image="/images/partner_who_can_partner_img.png"
        imageAlt="Who Can Partner With Us"
        items={partnerTypes}
        activeBgColor="bg-partner-blue"
      />

      {/* The Future Starts Here Section */}
      <section className="w-full py-16 sm:py-24 lg:py-28 bg-white text-center">
        <div className="max-w-[80vw] mx-auto px-6 sm:px-8 lg:px-12 flex flex-col items-center">
          <h2 className="font-bricolage text-4xl sm:text-5xl lg:text-6xl font-medium text-dark tracking-tight leading-tight mb-4">
            The future starts here
          </h2>
          <p className="font-sans text-base sm:text-lg lg:text-xl text-muted font-normal leading-relaxed max-w-2xl mb-8 sm:mb-10">
            Partner with us to create opportunities and scale inclusive, ethical AI education across Africa.
          </p>

          <Button
            variant="primary"
            size="lg"
            rounded="full"
            className="shadow-sm gap-2"
          >
            <span>Partner With Us</span>
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Button>
        </div>
      </section>
    </div>
  )
}

export default Partners
