import React from 'react'
import { PageHero } from '../components/ui/PageHero'
import { CtaCard } from '../components/ui/CtaCard'

export interface AwardItem {
  id: string
  year: string
  title: string
  recognition: string
  organization: string
  image: string
  about: string[]
}

const AWARDS_DATA: AwardItem[] = [
  {
    id: 'nigerian-innovation-award-2025',
    year: '2025',
    title: 'Nigerian Innovation Award 2025',
    recognition: 'Recognition: Driving Social Change & Youth Inclusion Through Technology',
    organization: 'Nigerian Innovation Summit',
    image: '/images/award_img.png',
    about: [
      'Rise Networks was recognised at the 2025 Nigeria Innovation Awards for its contribution to driving social change and advancing youth inclusion through technology.',
      "The recognition reflects Rise Networks' work in using technology, innovation and skills development to expand opportunities for young people and contribute to social transformation.",
    ],
  },
]

export const Awards: React.FC = () => {
  return (
    <div className="w-full bg-white min-h-screen">
      {/* 1. Hero Section */}
      <PageHero
        title="Award & Recognition"
        bgImage="/images/page_hero_bg.png"
      />

      {/* 2. Our Award Section */}
      <section className="w-full bg-white pt-14 sm:pt-20 lg:pt-28 pb-16 sm:pb-24">
        <div className="max-w-[95vw] lg:max-w-[80vw] mx-auto px-6 sm:px-8 lg:px-12 w-full">
          {/* Section Heading with orange underline */}
          <div className="mb-8 sm:mb-10">
            <h2 className="font-sans text-xl sm:text-2xl font-bold text-[#141416]">
              Our Award
            </h2>
            <div className="w-14 h-1 bg-[#EE7747] mt-1.5 rounded-full" />
          </div>

          {/* Award Card(s) */}
          <div className="flex flex-col gap-8">
            {AWARDS_DATA.map((award) => (
              <div
                key={award.id}
                className="w-full bg-white rounded-3xl sm:rounded-[36px] border border-neutral-200/90 p-5 sm:p-8 lg:p-10 shadow-[0_2px_12px_rgba(0,0,0,0.03)]"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
                  {/* Left Column: Full-Height Award Image */}
                  <div className="lg:col-span-5 flex flex-col h-full min-h-[320px] sm:min-h-[420px] lg:min-h-full">
                    <div className="w-full h-full flex-1 rounded-2xl sm:rounded-[26px] overflow-hidden bg-neutral-100 shadow-sm border border-neutral-100">
                      <img
                        src={award.image}
                        alt={`${award.title} Plaque`}
                        className="w-full h-full object-cover block"
                      />
                    </div>
                  </div>

                  {/* Right Column: Award Details */}
                  <div className="lg:col-span-7 flex flex-col justify-center py-1 sm:py-2">
                    {/* Year Badge */}
                    <div className="mb-3 sm:mb-4">
                      <span className="inline-block bg-[#EE7747] text-white text-xs font-semibold px-3 py-1 rounded-md">
                        {award.year}
                      </span>
                    </div>

                    {/* Award Title */}
                    <h3 className="font-sans text-2xl sm:text-3xl font-bold text-[#141416] tracking-tight leading-tight mb-2">
                      {award.title}
                    </h3>

                    {/* Recognition Subtitle */}
                    <p className="text-xs sm:text-sm font-semibold text-[#EE7747] mb-6">
                      {award.recognition}
                    </p>

                    {/* Metadata Row: Organisation & Year */}
                    <div className="flex flex-wrap items-center gap-8 sm:gap-12 mb-6 sm:mb-8">
                      {/* Awarding Organisation */}
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-[#F8EAE5] flex items-center justify-center shrink-0 text-[#593630]">
                          <svg
                            className="w-4 h-4"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            <path d="M12 2L1 7.5v2h22v-2L12 2zm1 18.5h7V12h-7v8.5zm-2 0V12H4v8.5h7zM1 21v2h22v-2H1z" />
                          </svg>
                        </div>
                        <div>
                          <span className="block text-[11px] sm:text-xs text-neutral-400 font-normal">
                            Awarding Organisation
                          </span>
                          <span className="block text-xs sm:text-sm font-semibold text-[#141416]">
                            {award.organization}
                          </span>
                        </div>
                      </div>

                      {/* Year */}
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-[#F8EAE5] flex items-center justify-center shrink-0 text-[#593630]">
                          <svg
                            className="w-4 h-4"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                            <line x1="16" y1="2" x2="16" y2="6" />
                            <line x1="8" y1="2" x2="8" y2="6" />
                            <line x1="3" y1="10" x2="21" y2="10" />
                          </svg>
                        </div>
                        <div>
                          <span className="block text-[11px] sm:text-xs text-neutral-400 font-normal">
                            Year
                          </span>
                          <span className="block text-xs sm:text-sm font-semibold text-[#141416]">
                            {award.year}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* About the Recognition */}
                    <div>
                      <h4 className="text-sm sm:text-base font-bold text-[#EE7747] mb-2 sm:mb-3">
                        About the Recognition
                      </h4>
                      <div className="space-y-2.5 text-xs sm:text-sm text-neutral-700 font-normal leading-relaxed">
                        {award.about.map((paragraph, idx) => (
                          <p key={idx}>{paragraph}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. CTA Section */}
      <CtaCard overlapFooter={true} />
    </div>
  )
}

export default Awards
