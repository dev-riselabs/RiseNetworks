import React, { useState, useEffect } from 'react'

export interface AccordionItem {
  title: string
  description: string
}

export interface InteractiveAccordionProps {
  title: React.ReactNode
  subtitle?: React.ReactNode
  badge?: string
  image: string
  imageAlt?: string
  items: AccordionItem[]
  imagePosition?: 'left' | 'right'
  activeBgColor?: string
  autoPlayInterval?: number
  defaultIndex?: number
  className?: string
  imageClassName?: string
}

export const InteractiveAccordion: React.FC<InteractiveAccordionProps> = ({
  title,
  subtitle,
  badge,
  image,
  imageAlt = 'Interactive Feature Showcase',
  items,
  imagePosition = 'left',
  activeBgColor = 'bg-brand-green',
  autoPlayInterval = 5000,
  defaultIndex = 0,
  className = '',
  imageClassName = '',
}) => {
  const [activeIndex, setActiveIndex] = useState(defaultIndex)
  const [timerKey, setTimerKey] = useState(0)

  // Auto-advance timer
  useEffect(() => {
    if (!autoPlayInterval || items.length <= 1) return

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % items.length)
    }, autoPlayInterval)

    return () => clearInterval(interval)
  }, [timerKey, items.length, autoPlayInterval])

  const handleSelect = (idx: number) => {
    setActiveIndex(idx)
    setTimerKey((prev) => prev + 1)
  }

  const isImageLeft = imagePosition === 'left'

  return (
    <section className={`w-full bg-white py-16 sm:py-24 lg:py-32 ${className}`}>
      <div className="max-w-[80vw] mx-auto px-6 sm:px-8 lg:px-12 w-full">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
          {badge && (
            <span className="inline-block px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-orange-100 text-primary mb-3">
              {badge}
            </span>
          )}
          <h2 className="font-bricolage text-4xl sm:text-5xl lg:text-[56px] font-medium text-dark tracking-tight leading-tight mb-4">
            {title}
          </h2>
          {subtitle && (
            <p className="font-sans text-base sm:text-lg text-muted font-normal leading-relaxed max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>

        {/* 2-Column Content: Image & Interactive Accordion */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          {/* Image Column */}
          <div
            className={`lg:col-span-6 w-full h-full ${
              isImageLeft ? 'order-1' : 'order-1 lg:order-2'
            }`}
          >
            <div className={`w-full h-[380px] sm:h-[460px] lg:h-[600px] rounded-[28px] sm:rounded-[36px] overflow-hidden shadow-sm ${imageClassName}`}>
              <img
                src={image}
                alt={imageAlt}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Accordion Tabs Column */}
          <div
            className={`lg:col-span-6 flex flex-col space-y-3.5 sm:space-y-4 ${
              isImageLeft ? 'order-2' : 'order-2 lg:order-1'
            }`}
          >
            {items.map((item, idx) => {
              const isActive = activeIndex === idx

              return (
                <div
                  key={item.title}
                  onClick={() => handleSelect(idx)}
                  onMouseEnter={() => handleSelect(idx)}
                  className={`transition-all duration-300 rounded-2xl sm:rounded-[22px] cursor-pointer select-none ${
                    isActive
                      ? `${activeBgColor} text-white p-6 sm:p-7 shadow-sm`
                      : 'bg-tab-inactive-bg hover:bg-tab-inactive-hover text-dark p-5 sm:p-6'
                  }`}
                >
                  {isActive ? (
                    /* Active State with Animated Progress Ring & Description */
                    <div>
                      <div className="flex items-center gap-3">
                        <svg
                          key={`timer-${activeIndex}-${timerKey}`}
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
        </div>
      </div>
    </section>
  )
}

export default InteractiveAccordion
