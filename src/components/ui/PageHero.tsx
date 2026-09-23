import React from 'react'

export interface PageHeroProps {
  title: React.ReactNode
  subtitle?: React.ReactNode
  children?: React.ReactNode
  bgImage?: string
  className?: string
}

export const PageHero: React.FC<PageHeroProps> = ({
  title,
  subtitle,
  children,
  bgImage = '/images/faq_hero_img.png',
  className = '',
}) => {
  return (
    <section
      className={`relative w-full overflow-hidden bg-cover bg-center bg-no-repeat pt-36 sm:pt-48 pb-20 sm:pb-28 lg:pb-32 ${className}`}
      style={{ backgroundImage: `url('${bgImage}')` }}
    >
      <div className="relative max-w-[80vw] mx-auto px-6 sm:px-8 lg:px-12 flex flex-col items-center text-center">
        {/* Main Title */}
        <h1 className="font-bricolage text-4xl sm:text-6xl md:text-7xl lg:text-[76px] font-medium tracking-tight text-dark leading-[1.08] text-center max-w-4xl mx-auto">
          {title}
        </h1>

        {/* Subtitle */}
        {subtitle && (
          <p className="font-sans text-base sm:text-lg md:text-xl text-muted font-normal leading-relaxed text-center max-w-xl mx-auto mt-4 sm:mt-6">
            {subtitle}
          </p>
        )}

        {/* Action Buttons or Extra Content */}
        {children && (
          <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-4">
            {children}
          </div>
        )}
      </div>
    </section>
  )
}

export default PageHero
