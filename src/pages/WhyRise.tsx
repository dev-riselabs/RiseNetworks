import React, { useState, useEffect } from 'react'
import { PageHero } from '../components/ui/PageHero'
import { CtaCard } from '../components/ui/CtaCard'

interface WhyRisePillar {
  title: string
  description: string
}

export const WhyRise: React.FC = () => {
  const [activePillarIndex, setActivePillarIndex] = useState(0)
  const [timerKey, setTimerKey] = useState(0)

  const pillars: WhyRisePillar[] = [
    {
      title: 'Ethical and Inclusive Approach',
      description:
        'Innovation must be fair and people centered. We advance Tech Justice, Digital Rights, and inclusive access so Africa’s digital future works for everyone.',
    },
    {
      title: 'World Class AI Training',
      description:
        'Comprehensive, hands-on learning in Machine Learning, LLMs, Computer Vision, and Data Science taught by seasoned industry experts and global practitioners.',
    },
    {
      title: 'Industry Connected',
      description:
        'Direct linkages with top global and local technology companies, opening doors to high-impact careers, corporate fellowships, and internships.',
    },
    {
      title: 'Measurable Impact',
      description:
        'Over 25,000 learners trained, groundbreaking research papers published, and policies shaped for sustainable socio-economic growth.',
    },
  ]

  // Auto-advance timer (5 seconds) matching the Partners page interactive component
  useEffect(() => {
    const interval = setInterval(() => {
      setActivePillarIndex((prev) => (prev + 1) % pillars.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [timerKey, pillars.length])

  const handleSelectPillar = (idx: number) => {
    setActivePillarIndex(idx)
    setTimerKey((prev) => prev + 1)
  }

  return (
    <div className="w-full bg-white">
      {/* Hero Section */}
      <PageHero
        title={
          <>
            We Are Shaping Africa’s AI <br className="hidden sm:inline" />
            future with ethical, global talent.
          </>
        }
      />

      {/* Why Rise Networks Main Interactive Section */}
      <section className="w-full bg-white py-16 sm:py-24 lg:py-32">
        <div className="max-w-[80vw] mx-auto px-6 sm:px-8 lg:px-12 w-full">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
            <h2 className="font-bricolage text-4xl sm:text-5xl lg:text-[56px] font-medium text-dark tracking-tight leading-tight">
              Why Rise Networks
            </h2>
          </div>

          {/* 2-Column Content: Left Image, Right Auto-Advancing Accordion Tabs */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            {/* Left Column Image */}
            <div className="lg:col-span-6 w-full h-full">
              <div className="w-full h-[380px] sm:h-[460px] lg:h-[520px] rounded-[28px] sm:rounded-[36px] overflow-hidden shadow-sm">
                <img
                  src="/images/why_rise_networks.png"
                  alt="Why Rise Networks"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right Column Interactive Tabs */}
            <div className="lg:col-span-6 flex flex-col space-y-3.5 sm:space-y-4">
              {pillars.map((pillar, idx) => {
                const isActive = activePillarIndex === idx

                return (
                  <div
                    key={pillar.title}
                    onClick={() => handleSelectPillar(idx)}
                    onMouseEnter={() => handleSelectPillar(idx)}
                    className={`transition-all duration-300 rounded-2xl sm:rounded-[22px] cursor-pointer select-none ${
                      isActive
                        ? 'bg-brand-green text-white p-6 sm:p-7 shadow-sm'
                        : 'bg-tab-inactive-bg hover:bg-tab-inactive-hover text-dark p-5 sm:p-6'
                    }`}
                  >
                    {isActive ? (
                      /* Active State with Circular Progress Timer & Description */
                      <div>
                        <div className="flex items-center gap-3">
                          {/* Animated 0 to 360 degree countdown progress ring */}
                          <svg
                            key={`timer-${activePillarIndex}-${timerKey}`}
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

      {/* Ready to Shape Africa CTA overlapping into Footer */}
      <CtaCard overlapFooter={true} />
    </div>
  )
}

export default WhyRise
