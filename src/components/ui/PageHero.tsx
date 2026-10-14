import React from 'react'

export interface PageHeroProps {
  title: React.ReactNode
  subtitle?: React.ReactNode
  children?: React.ReactNode
  bgImage?: string
  bannerImage?: string
  bannerAlt?: string
  className?: string
  fullHeight?: boolean
}

export const PageHero: React.FC<PageHeroProps> = ({
  title,
  subtitle,
  children,
  bgImage = '/images/page_hero_bg.png',
  bannerImage,
  bannerAlt = '',
  className = '',
  fullHeight,
}) => {
  const isFullHeight = fullHeight ?? Boolean(bannerImage)

  return (
    <section
      className={`relative w-full overflow-hidden bg-cover bg-top bg-no-repeat ${
        isFullHeight
          ? 'flex flex-col justify-between pt-32 sm:pt-40 lg:pt-48 min-h-[500px] sm:min-h-[620px] lg:min-h-screen pb-0'
          : 'flex flex-col items-center justify-center pt-32 sm:pt-40 lg:pt-48 pb-12 sm:pb-20 lg:pb-28 min-h-[46vh] lg:min-h-[65vh]'
      } ${className}`}
      style={{ backgroundImage: `url('${bgImage}')` }}
    >
      <div className="relative max-w-[95vw] lg:max-w-[80vw] mx-auto px-6 sm:px-8 lg:px-12 flex flex-col items-center text-center w-full">
        {/* Main Title */}
        <h1 className="font-bricolage text-3xl sm:text-5xl md:text-6xl lg:text-[76px] font-medium tracking-tight text-dark leading-[1.12] text-center max-w-4xl mx-auto">
          {title}
        </h1>

        {/* Subtitle */}
        {subtitle && (
          <p className="font-sans text-sm sm:text-base md:text-lg lg:text-xl text-muted font-normal leading-relaxed text-center max-w-2xl mx-auto mt-4 sm:mt-6">
            {subtitle}
          </p>
        )}

        {/* Action Buttons or Extra Content */}
        {children && (
          <div className="mt-6 sm:mt-8 lg:mt-10 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            {children}
          </div>
        )}
      </div>

      {/* Optional bottom banner image (like Academy and Strategic Vision hero) */}
      {bannerImage && (
        <div className="w-full mt-8 sm:mt-12 lg:mt-16">
          <img
            src={bannerImage}
            alt={bannerAlt}
            className="w-full h-auto object-cover select-none block"
            loading="eager"
          />
        </div>
      )}
    </section>
  )
}

export default PageHero
