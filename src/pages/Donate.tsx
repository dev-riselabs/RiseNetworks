import React, { useState, useRef, useEffect } from 'react'
import { PageHero } from '../components/ui/PageHero'
import { CtaCard } from '../components/ui/CtaCard'
import { InteractiveAccordion, type AccordionItem } from '../components/ui/InteractiveAccordion'
import { InteractiveFeatureList, type InteractiveItem } from '../components/ui/InteractiveFeatureList'

const WHY_DONATE_ITEMS: AccordionItem[] = [
  {
    title: 'Support AI Talent Development',
    description: 'Help young Africans gain advanced skills in machine learning, data science, and emerging technologies to solve local and global challenges.',
  },
  {
    title: 'Equip Community AI Labs',
    description: 'Provide modern computing infrastructure, GPUs, reliable high-speed internet, and hardware access to underprivileged youth across Africa.',
  },
  {
    title: 'Fund High-Impact Research',
    description: 'Back homegrown research initiatives focused on healthcare diagnostics, agricultural optimization, and ethical AI policies tailored to Africa.',
  },
  {
    title: 'Drive Sustainable Economic Growth',
    description: 'Every dollar invested creates a multiplier effect by producing job-ready engineers, innovators, and future founders of tech enterprises.',
  },
]

const IMPACT_CAROUSEL_ITEMS = [
  {
    id: '1',
    image: '/images/partner_who_can_partner_img.png',
    description: 'Providing full scholarships and hands-on mentorship for youth in underserved communities.',
  },
  {
    id: '2',
    image: '/images/partner_sponsor_the_next_gen_img.png',
    description: 'Funding dedicated AI labs and GPU compute workstations across educational institutions.',
  },
  {
    id: '3',
    image: '/images/partner_who_can_partner_img.png',
    description: 'Supporting female innovators and developers breaking barriers in artificial intelligence.',
  },
  {
    id: '4',
    image: '/images/partner_sponsor_the_next_gen_img.png',
    description: 'Accelerating African datasets and sovereign LLM solutions for local challenges.',
  },
]

const WAYS_TO_GIVE_ITEMS: InteractiveItem[] = [
  {
    title: 'One-Time Donation',
    description: 'Support one learner or contribute toward a shared scholarship fund.',
    image: '/images/partner_sponsor_the_next_gen_img.png',
  },
  {
    title: 'Monthly Giving',
    description: 'Provide continuous, sustainable funding to empower upcoming cohorts and ongoing innovation labs.',
    image: '/images/partner_who_can_partner_img.png',
  },
  {
    title: 'Sponsor a Learner',
    description: 'Directly fund a student’s full tuition, dedicated device access, and one-on-one mentorship throughout their learning cycle.',
    image: '/images/partner_sponsor_the_next_gen_img.png',
  },
]

export const Donate: React.FC = () => {
  // Impact slider controls
  const sliderRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

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

  const scrollToBankDetails = () => {
    const el = document.getElementById('bank-details-section')
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="w-full bg-white">
      {/* 1. Hero Section matching user reference screenshot */}
      <PageHero
        title="Support the Future"
        subtitle="Africa’s next generation of AI leaders is ready. What they need is access."
        bgImage="/images/page_hero_bg.png"
      >
        <button
          type="button"
          onClick={scrollToBankDetails}
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-primary hover:bg-primary-hover text-white text-base font-medium shadow-md transition-all duration-200 cursor-pointer group"
        >
          <span>Become a Donor</span>
          <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
        </button>
      </PageHero>

      {/* 2. Why Donate? Interactive Accordion */}
      <InteractiveAccordion
        title="Why Donate?"
        subtitle="Your support removes financial barriers and creates life-changing opportunities."
        image="/images/partner_who_can_partner_img.png"
        imageAlt="Why Donate - Rise Networks"
        items={WHY_DONATE_ITEMS}
        activeBgColor="bg-[#29ABE2]"
        autoPlayInterval={5000}
      />

      {/* 3. Your Impact Carousel Section matching reference screenshot */}
      <section className="w-full bg-white py-16 sm:py-24 lg:py-28 overflow-hidden">
        <div className="max-w-[80vw] mx-auto px-6 sm:px-8 lg:px-12 w-full">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <h2 className="font-bricolage text-4xl sm:text-5xl lg:text-[56px] font-medium text-dark tracking-tight leading-tight mb-4">
              Your Impact
            </h2>
            <p className="font-sans text-base sm:text-lg text-muted font-normal leading-relaxed max-w-2xl mx-auto">
              When you donate, you directly expand access <br className="hidden sm:inline" />
              to opportunity and accelerate Africa’s AI future.
            </p>
          </div>

          {/* Horizontal Carousel */}
          <div
            ref={sliderRef}
            className="flex items-center gap-6 sm:gap-8 overflow-x-auto scroll-smooth snap-x snap-mandatory py-4 no-scrollbar [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {IMPACT_CAROUSEL_ITEMS.map((item) => (
              <div
                key={item.id}
                className="shrink-0 snap-start w-[300px] sm:w-[380px] lg:w-[440px] h-[420px] sm:h-[480px] lg:h-[520px] rounded-[28px] sm:rounded-[36px] overflow-hidden relative shadow-md group select-none"
              >
                {/* Background Image */}
                <img
                  src={item.image}
                  alt="Your Impact - Rise Networks"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Overlays */}
                <div className="absolute inset-0 bg-black/20 pointer-events-none transition-colors duration-300 group-hover:bg-black/10" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

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

      {/* 4. Ways to Give Interactive Section matching user reference screenshot */}
      <InteractiveFeatureList
        title="Ways to Give"
        subtitle="Choose the level of partnership that aligns with your impact goals"
        items={WAYS_TO_GIVE_ITEMS}
        defaultIndex={0}
      />

      {/* 5. Empower the Next Generation Banner matching screenshot */}
      <section className="w-full bg-white py-16 sm:py-24 text-center">
        <div className="max-w-[80vw] mx-auto px-6 sm:px-8 lg:px-12 w-full">
          <h2 className="font-bricolage text-3xl sm:text-4xl md:text-5xl font-semibold text-dark tracking-tight leading-tight mb-4">
            Empower the next generation.
          </h2>
          <button
            type="button"
            onClick={scrollToBankDetails}
            className="inline-flex items-center gap-2 text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold font-bricolage text-primary hover:text-primary-hover transition-colors cursor-pointer group"
          >
            <span className="group-hover:-translate-x-1 transition-transform">&rarr;</span>
            <span className="underline decoration-primary underline-offset-8">Donate Today</span>
          </button>
        </div>
      </section>

      {/* 6. Direct Wire & Institutional Banking Details */}
      <section id="bank-details-section" className="py-16 bg-[#141416] text-white">
        <div className="max-w-[80vw] mx-auto px-6 sm:px-8 lg:px-12 w-full">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="font-bricolage text-2xl sm:text-3xl lg:text-4xl font-semibold mb-3">
              Direct Bank Wire & Institutional Grants
            </h2>
            <p className="text-xs sm:text-sm text-neutral-300">
              For corporate matching, philanthropic foundations, and diaspora wire transfers,
              funds can be disbursed directly into our dedicated accounts:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Naira Account */}
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                  Naira (NGN) Account
                </span>
                <span className="text-[10px] bg-white/10 px-2 py-0.5 rounded text-neutral-300">
                  Nigeria & West Africa
                </span>
              </div>
              <h4 className="text-base font-bold text-white">Rise Networks AI Initiative</h4>
              <p className="text-xs text-neutral-400">
                Bank: <strong>Access Bank Plc</strong>
              </p>
              <p className="text-xs text-neutral-400">
                Account Number: <strong>0706054502</strong>
              </p>
              <p className="text-xs text-neutral-400">
                Sort Code: <strong>044150149</strong>
              </p>
            </div>

            {/* USD Domiciliary Account */}
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                  USD Domiciliary Account
                </span>
                <span className="text-[10px] bg-white/10 px-2 py-0.5 rounded text-neutral-300">
                  International & Diaspora
                </span>
              </div>
              <h4 className="text-base font-bold text-white">Rise Networks Global AI Fund</h4>
              <p className="text-xs text-neutral-400">
                Bank: <strong>Access Bank Plc</strong>
              </p>
              <p className="text-xs text-neutral-400">
                Account Number: <strong>1402948192</strong>
              </p>
              <p className="text-xs text-neutral-400">
                SWIFT / BIC: <strong>ACCENGGLAG</strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Bottom CTA Overlapping into Footer */}
      <CtaCard overlapFooter={true} />
    </div>
  )
}

export default Donate
