import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../components/ui/Button'
import { InteractiveFeatureList, type InteractiveItem } from '../components/ui/InteractiveFeatureList'

interface ApplicationStep {
  title: string
  description: string
}

interface EligibilityCriterion {
  id: number
  description: string
}

interface FaqItem {
  question: string
  answer: string
}

export const Academy: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState(1)
  const [timerKey, setTimerKey] = useState(0)
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null)

  // Eligibility Slider State & Ref
  const eligibilitySliderRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  // Scholarship Categories items for InteractiveFeatureList
  const scholarshipCategories: InteractiveItem[] = [
    {
      title: 'Merit Fellowship',
      description:
        'Awarded to exceptional applicants with strong academic performance, professional excellence, or clear innovation potential and a commitment to impact.',
      image: '/images/partner_sponsor_the_next_gen_img.png',
    },
    {
      title: 'Partial Scholarship',
      description:
        'Provides partial tuition coverage for high-potential candidates to subsidize intensive hands-on AI and engineering tracks.',
      image: '/images/partner_sponsor_the_next_gen_img.png',
    },
    {
      title: 'Full Scholarship',
      description:
        'Offers 100% tuition coverage, mentorship, and learning resource access for underrepresented talent with high commitment.',
      image: '/images/partner_sponsor_the_next_gen_img.png',
    },
  ]

  // Eligibility Criteria items
  const eligibilityCriteria: EligibilityCriterion[] = [
    {
      id: 1,
      description:
        'Are between 18 and 35 years old, with exceptions considered for professionals with demonstrated need',
    },
    {
      id: 2,
      description:
        'Show a strong interest in Artificial Intelligence, Data, and Emerging Technologies',
    },
    {
      id: 3,
      description:
        'Commit to actively participating in training sessions, project milestones, and applying acquired skills for socio-economic impact',
    },
    {
      id: 4,
      description:
        'Demonstrate passion for community problem-solving and ethical technology adoption across Africa',
    },
  ]

  const applicationSteps: ApplicationStep[] = [
    {
      title: 'Complete the Application Form',
      description:
        'Fill out the online application form with your personal background, educational qualifications, and preferred track.',
    },
    {
      title: 'Submit a Statement of Purpose',
      description:
        "Share why you want to learn AI/Tech and how you'll use it to impact your community. (500 words max)",
    },
    {
      title: 'Provide Supporting Documents',
      description:
        'Upload your academic transcripts, updated CV/Resume, and a valid national ID for identity and eligibility verification.',
    },
    {
      title: 'Attend a Virtual Interview',
      description:
        'Participate in a short interactive discussion with our admissions committee and technical evaluation team.',
    },
    {
      title: 'Receive Your Award Decision',
      description:
        'Get notified of your scholarship acceptance status, cohort schedule, and onboarding orientation package.',
    },
  ]

  const faqs: FaqItem[] = [
    {
      question: 'How many scholarships are available?',
      answer:
        'The number of scholarships varies by cohort and sponsor partnerships. Each cohort awards hundreds of fully and partially funded seats across multiple tracks.',
    },
    {
      question: 'Can I apply for more than one course?',
      answer:
        'We recommend applying for the track that best aligns with your background and career goals. However, applicants can specify secondary preferences on the application form.',
    },
    {
      question: 'Do I need prior tech knowledge?',
      answer:
        'Beginner tracks do not require prior programming knowledge, but intermediate and advanced tracks (such as ML and LLM Engineering) require foundational knowledge in math or programming.',
    },
    {
      question: 'What is expected of scholarship recipients?',
      answer:
        'Recipients are expected to maintain an 85%+ attendance rate, complete capstone projects, engage in peer mentorship, and participate in community impact initiatives.',
    },
  ]

  // Update slider scroll button states
  const checkSliderScroll = () => {
    const el = eligibilitySliderRef.current
    if (el) {
      const isStart = el.scrollLeft <= 10
      const isEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 10
      setCanScrollLeft(!isStart)
      setCanScrollRight(!isEnd)
    }
  }

  useEffect(() => {
    const el = eligibilitySliderRef.current
    if (el) {
      el.addEventListener('scroll', checkSliderScroll)
      checkSliderScroll()
      return () => el.removeEventListener('scroll', checkSliderScroll)
    }
  }, [])

  const handlePrev = () => {
    if (eligibilitySliderRef.current) {
      eligibilitySliderRef.current.scrollBy({ left: -420, behavior: 'smooth' })
    }
  }

  const handleNext = () => {
    if (eligibilitySliderRef.current) {
      eligibilitySliderRef.current.scrollBy({ left: 420, behavior: 'smooth' })
    }
  }

  // Auto-advance timer (5 seconds)
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStepIndex((prev) => (prev + 1) % applicationSteps.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [timerKey, applicationSteps.length])

  const handleSelectStep = (idx: number) => {
    setActiveStepIndex(idx)
    setTimerKey((prev) => prev + 1)
  }

  return (
    <div className="w-full bg-white">
      {/* Hero Section */}
      <section
        className="relative w-full overflow-hidden bg-cover bg-top bg-no-repeat pt-36 sm:pt-48 pb-0"
        style={{ backgroundImage: `url('/images/page_hero_bg.png')` }}
      >
        <div className="relative max-w-[80vw] mx-auto px-6 sm:px-8 lg:px-12 flex flex-col items-center text-center">
          {/* Main Title */}
          <h1 className="font-bricolage text-4xl sm:text-6xl md:text-7xl lg:text-[76px] font-medium tracking-tight text-dark leading-[1.08] text-center max-w-4xl mx-auto">
            Rise Networks <br />
            Tech Academy
          </h1>

          {/* Subtitle */}
          <p className="font-sans text-base sm:text-lg md:text-xl text-muted font-normal leading-relaxed text-center max-w-2xl mx-auto mt-4 sm:mt-6">
            From Data Science to Cybersecurity, we equip you with the skills to drive innovation and compete globally.
          </p>

          {/* CTA Action Button */}
          <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link to="/partners">
              <Button variant="primary" size="lg" rounded="full" className="px-7 sm:px-8 py-3.5 text-base font-medium shadow-sm hover:shadow">
                <span>Become a Partner</span>
                <svg className="w-5 h-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Button>
            </Link>
          </div>
        </div>

        {/* Full-width Scholarship Collage Image Banner */}
        <div className="w-full mt-12 sm:mt-16 lg:mt-20">
          <img
            src="/images/scholarship_hero_page.png"
            alt="Rise Networks Tech Academy Programs, Training and Impact"
            className="w-full h-auto object-cover select-none block"
            loading="eager"
          />
        </div>
      </section>

       {/* How to Apply Section */}
      <section className="w-full bg-white py-16 sm:py-24 lg:py-32 border-b border-neutral-100">
        <div className="max-w-[80vw] mx-auto px-6 sm:px-8 lg:px-12 w-full">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
            <h2 className="font-bricolage text-4xl sm:text-5xl lg:text-[56px] font-medium text-dark tracking-tight leading-tight">
              How to Apply
            </h2>
          </div>

          {/* 2-Column Content: Left Image, Right Auto-Advancing Accordion Tabs */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            {/* Left Column Image */}
            <div className="lg:col-span-6 w-full h-full">
              <div className="w-full h-[400px] sm:h-[480px] lg:h-[540px] rounded-[28px] sm:rounded-[36px] overflow-hidden shadow-sm">
                <img
                  src="/images/scholarship_how_to_appply.png"
                  alt="How to Apply for Rise Networks Scholarship"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right Column Interactive Tabs */}
            <div className="lg:col-span-6 flex flex-col space-y-3.5 sm:space-y-4">
              {applicationSteps.map((step, idx) => {
                const isActive = activeStepIndex === idx

                return (
                  <div
                    key={step.title}
                    onClick={() => handleSelectStep(idx)}
                    onMouseEnter={() => handleSelectStep(idx)}
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
                            key={`apply-timer-${activeStepIndex}-${timerKey}`}
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
                            {step.title}
                          </h3>
                        </div>

                        <p className="text-white/95 font-sans text-sm sm:text-base font-normal leading-relaxed mt-3 pl-8">
                          {step.description}
                        </p>
                      </div>
                    ) : (
                      /* Inactive State */
                      <div>
                        <h3 className="font-bricolage text-lg sm:text-xl font-medium text-dark tracking-tight">
                          {step.title}
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

      {/* Scholarship Categories Section using InteractiveFeatureList */}
      <div className="pt-20 sm:pt-28 lg:pt-32">
        <InteractiveFeatureList
          title="Scholarship Categories"
          subtitle="Designed to support different levels of talent, need and potential."
          items={scholarshipCategories}
          defaultIndex={0}
        />
      </div>

      {/* Eligibility Slider Section */}
      <section className="w-full bg-white py-16 sm:py-24 lg:py-32 border-b border-neutral-100 overflow-hidden">
        <div className="max-w-[80vw] mx-auto px-6 sm:px-8 lg:px-12 w-full">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <h2 className="font-bricolage text-4xl sm:text-5xl lg:text-[56px] font-medium text-dark tracking-tight leading-tight mb-4">
              Eligibility
            </h2>
            <p className="font-sans text-base sm:text-lg lg:text-xl text-muted font-normal leading-relaxed">
              We welcome applicants who meet the following perquisite
            </p>
          </div>

          {/* Horizontal Carousel */}
          <div
            ref={eligibilitySliderRef}
            className="flex items-center gap-6 sm:gap-8 overflow-x-auto scroll-smooth snap-x snap-mandatory py-4 no-scrollbar [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {eligibilityCriteria.map((item) => (
              <div
                key={item.id}
                className="shrink-0 snap-start w-[300px] sm:w-[380px] lg:w-[440px] h-[420px] sm:h-[480px] lg:h-[520px] rounded-[28px] sm:rounded-[36px] overflow-hidden relative shadow-md group select-none"
              >
                {/* Background Image */}
                <img
                  src="/images/scholarship_eligibility_img.jpg"
                  alt="Rise Networks Scholarship Eligibility"
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

     

      {/* FAQs Section */}
      <section className="w-full bg-white py-16 sm:py-24 lg:py-32 border-b border-neutral-100">
        <div className="max-w-[80vw] mx-auto px-6 sm:px-8 lg:px-12 w-full">
          {/* Upper Part: Title Left, Accordion Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 pb-16 sm:pb-20 border-b border-neutral-200/80">
            {/* Left Column: FAQs in orange */}
            <div className="lg:col-span-4">
              <h2 className="font-bricolage text-3xl sm:text-4xl lg:text-5xl font-medium text-primary tracking-tight">
                FAQs
              </h2>
            </div>

            {/* Right Column: FAQ Accordion items */}
            <div className="lg:col-span-8 flex flex-col divide-y divide-neutral-200/80">
              {faqs.map((faq, idx) => {
                const isOpen = openFaqIndex === idx
                return (
                  <div key={faq.question} className="py-5 sm:py-6 first:pt-0 last:pb-0">
                    <button
                      type="button"
                      onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                      className="w-full flex items-center justify-between text-left gap-4 cursor-pointer group"
                    >
                      <span className="font-sans text-base sm:text-lg lg:text-xl font-normal text-dark group-hover:text-primary transition-colors">
                        {faq.question}
                      </span>
                      <span className="text-2xl sm:text-3xl text-dark font-light transition-transform duration-200 shrink-0">
                        {isOpen ? '−' : '+'}
                      </span>
                    </button>

                    {isOpen && (
                      <div className="pt-3 sm:pt-4 pr-6 text-muted font-sans text-sm sm:text-base leading-relaxed">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>

          {/* Lower Part: Still have questions? */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 pt-12 sm:pt-16 items-center">
            <div className="lg:col-span-4">
              <h3 className="font-bricolage text-2xl sm:text-3xl lg:text-4xl font-medium text-dark tracking-tight">
                Still have <br className="hidden lg:inline" />
                questions?
              </h3>
            </div>

            <div className="lg:col-span-8">
              <p className="font-sans text-base sm:text-lg lg:text-xl text-dark font-normal leading-relaxed">
                Reach us anytime at{' '}
                <a
                  href="mailto:people@risenetworks.org"
                  className="text-primary hover:text-primary-hover underline underline-offset-4 font-medium transition-colors"
                >
                  people@risenetworks.org
                </a>{' '}
                or message us on WhatsApp at{' '}
                <a
                  href="https://wa.me/2347060545018"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary-hover underline underline-offset-4 font-medium transition-colors"
                >
                  +234 706 054 5018
                </a>{' '}
                for instant support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Change the Future CTA Section */}
      <section className="w-full bg-white py-20 sm:py-28 lg:py-36 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-bricolage text-3xl sm:text-4xl lg:text-5xl font-medium text-dark tracking-tight mb-4 sm:mb-6">
            Change the Future.
          </h2>
          <Link
            to="/partners"
            className="inline-flex items-center gap-3 sm:gap-4 font-bricolage text-3xl sm:text-5xl lg:text-[56px] font-medium text-primary hover:text-primary-hover transition-colors tracking-tight cursor-pointer group"
          >
            <span className="text-3xl sm:text-4xl lg:text-5xl transition-transform group-hover:translate-x-2">→</span>
            <span>Apply for Scholarship</span>
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Academy
