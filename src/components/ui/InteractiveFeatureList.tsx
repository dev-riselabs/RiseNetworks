import React, { useState } from 'react'

export interface InteractiveItem {
  title: string
  description?: string
  bullets?: string[]
  image: string
}

export interface InteractiveFeatureListProps {
  title: React.ReactNode
  subtitle?: React.ReactNode
  items: InteractiveItem[]
  defaultIndex?: number
  className?: string
}

export const InteractiveFeatureList: React.FC<InteractiveFeatureListProps> = ({
  title,
  subtitle,
  items,
  defaultIndex = 0,
  className = '',
}) => {
  const [activeIndex, setActiveIndex] = useState(defaultIndex)

  return (
    <section className={`relative w-full bg-white pb-24 sm:pb-32 lg:pb-36 overflow-visible ${className}`}>
      <div className="relative max-w-[80vw] mx-auto px-6 sm:px-8 lg:px-12 w-full">
        {/* SVG Background Grid lines */}
        <div className="pointer-events-none absolute right-6 sm:right-8 lg:right-12 top-0 bottom-0 w-1/2 lg:w-5/12 h-full z-0 overflow-hidden hidden sm:block">
          <svg
            viewBox="0 0 500 889"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
            preserveAspectRatio="none"
          >
            <line x1="1" y1="0" x2="1" y2="889" stroke="#A9518B" strokeOpacity="0.3" strokeWidth="1.5" />
            <line x1="100" y1="0" x2="100" y2="889" stroke="#A9518B" strokeOpacity="0.3" strokeWidth="1.5" />
            <line x1="200" y1="0" x2="200" y2="889" stroke="#A9518B" strokeOpacity="0.3" strokeWidth="1.5" />
            <line x1="300" y1="0" x2="300" y2="889" stroke="#A9518B" strokeOpacity="0.3" strokeWidth="1.5" />
            <line x1="400" y1="0" x2="400" y2="889" stroke="#A9518B" strokeOpacity="0.3" strokeWidth="1.5" />
            <line x1="499" y1="0" x2="499" y2="889" stroke="#A9518B" strokeOpacity="0.3" strokeWidth="1.5" />
            <line x1="1" y1="1" x2="499" y2="1" stroke="#A9518B" strokeOpacity="0.3" strokeWidth="1.5" />
          </svg>
        </div>

        {/* Section Header */}
        <div className="relative z-10 mb-12 sm:mb-16">
          <h2 className="font-bricolage text-4xl sm:text-5xl lg:text-[56px] font-medium text-dark tracking-tight leading-tight mb-4">
            {title}
          </h2>
          {subtitle && (
            <p className="text-base sm:text-lg text-muted font-normal leading-relaxed max-w-2xl">
              {subtitle}
            </p>
          )}
        </div>

        {/* Interactive List */}
        <div className="relative w-full border-b border-impact-grid overflow-visible">
          <div className="relative z-10 flex flex-col w-full overflow-visible">
            {items.map((item, idx) => {
              const isActive = activeIndex === idx

              return (
                <div
                  key={item.title}
                  onClick={() => setActiveIndex(idx)}
                  onMouseEnter={() => setActiveIndex(idx)}
                  className={`relative w-full cursor-pointer transition-all duration-300 border-t border-impact-grid ${
                    isActive ? 'bg-impact-ai-bg z-20 overflow-visible' : 'hover:bg-slate-50/60'
                  }`}
                >
                  {isActive ? (
                    /* Active Row Layout with Description/Bullets on left and Protruding Image on the Right */
                    <div className="relative py-7 sm:py-9 px-6 sm:px-10 flex items-center justify-between min-h-[160px] sm:min-h-[180px] overflow-visible">
                      {/* Text content on the left */}
                      <div className="max-w-xl lg:max-w-2xl pr-4">
                        <h3 className="font-bricolage text-2xl sm:text-3xl font-medium text-dark tracking-tight leading-snug mb-3">
                          {item.title}
                        </h3>

                        {item.description && (
                          <p className="text-xs sm:text-sm lg:text-[15px] text-muted font-normal leading-relaxed max-w-lg lg:max-w-xl">
                            {item.description}
                          </p>
                        )}

                        {item.bullets && item.bullets.length > 0 && (
                          <ul className="space-y-2 mt-2">
                            {item.bullets.map((bullet, bIdx) => (
                              <li
                                key={bIdx}
                                className="flex items-start gap-2.5 text-xs sm:text-sm lg:text-[15px] text-muted font-normal leading-relaxed"
                              >
                                <span className="inline-block w-1.5 h-1.5 rounded-full bg-dark mt-2 shrink-0" />
                                <span>{bullet}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>

                      {/* Floating Image on the Right */}
                      <div className="hidden md:block absolute right-6 sm:right-10 lg:right-16 top-1/2 -translate-y-1/2 z-30 shrink-0 pointer-events-none">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-[260px] sm:w-[300px] lg:w-[360px] h-[260px] sm:h-[300px] lg:h-[360px] object-cover rounded-[24px] lg:rounded-[28px] shadow-2xl transition-all duration-300"
                        />
                      </div>

                      {/* Mobile visible image */}
                      <div className="md:hidden mt-4 w-full flex justify-center">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full max-w-[280px] h-auto object-cover rounded-[20px] shadow-md"
                        />
                      </div>
                    </div>
                  ) : (
                    /* Inactive Collapsed Row */
                    <div className="py-6 sm:py-8 px-6 sm:px-10 flex items-center justify-between">
                      <h3 className="font-bricolage text-2xl sm:text-3xl lg:text-[32px] font-medium text-dark tracking-tight">
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

export default InteractiveFeatureList
