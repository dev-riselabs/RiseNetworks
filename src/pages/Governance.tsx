import React, { useRef, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { PageHero } from '../components/ui/PageHero'
import { InteractiveAccordion, type AccordionItem } from '../components/ui/InteractiveAccordion'
import { InteractiveFeatureList, type InteractiveItem } from '../components/ui/InteractiveFeatureList'

const GOVERNANCE_APPROACH_ITEMS: AccordionItem[] = [
  {
    title: 'Policy & Regulatory Capacity',
    description:
      'We support policymakers, regulators and institutions with evidence, insights and capacity development to understand and respond to emerging technologies.',
  },
  {
    title: 'Responsible AI & Technology',
    description:
      'We promote frameworks, standards and practices that ensure AI and automated systems are ethical, transparent, accountable and aligned with public interest.',
  },
  {
    title: 'Digital Public Infrastructure',
    description:
      'We advocate for and support the development of open, secure, inclusive and interoperable digital systems that serve as foundations for state service delivery.',
  },
  {
    title: 'Civic Participation & Digital Rights',
    description:
      'We protect digital rights, promote citizen agency, and ensure public engagement in the design, deployment and oversight of digital technologies.',
  },
  {
    title: 'Institutional Capacity',
    description:
      'We strengthen technical literacy, operational capability and data-driven decision-making within public sector institutions and civil society organizations.',
  },
]

const AREAS_OF_WORK_ITEMS: InteractiveItem[] = [
  {
    title: 'AI Governance',
    description:
      'Developing African perspectives on responsible AI, safety, accountability and regulation.',
    bulletsHeader: 'Include topics:',
    bullets: [
      'AI policy',
      'AI safety',
      'Algorithmic accountability',
      'Responsible AI',
      'Regulatory frameworks',
      'Data governance',
    ],
    image: '/images/scholarship_how_to_appply.png',
  },
  {
    title: 'Digital Government',
    description:
      'Modernizing public institutions and citizen services through secure, accessible and scalable digital platforms.',
    bulletsHeader: 'Include topics:',
    bullets: [
      'Digital public infrastructure',
      'E-governance systems',
      'Interoperability standards',
      'Citizen service delivery',
      'Public data management',
      'GovTech innovation',
    ],
    image: '/images/scholarship_how_to_appply.png',
  },
  {
    title: 'Democracy & Digital Rights',
    description:
      'Safeguarding open civic spaces, digital inclusion, information integrity and citizen participation in the digital era.',
    bulletsHeader: 'Include topics:',
    bullets: [
      'Digital rights & freedom of expression',
      'Electoral technology integrity',
      'Information resilience & OSINT',
      'Algorithmic fairness & anti-bias',
      'Citizen participation tools',
      'Digital privacy protections',
    ],
    image: '/images/scholarship_how_to_appply.png',
  },
  {
    title: 'Public Sector Capacity',
    description:
      'Equipping civil servants, policymakers and public leaders with modern digital skills and strategic technical literacy.',
    bulletsHeader: 'Include topics:',
    bullets: [
      'Executive tech leadership',
      'Data-informed policy formulation',
      'Digital procurement standards',
      'Institutional change management',
      'Cyber hygiene & security culture',
      'Public sector AI literacy',
    ],
    image: '/images/scholarship_how_to_appply.png',
  },
]

const EVIDENCE_TO_ACTION_ITEMS: AccordionItem[] = [
  {
    title: '1. Research',
    description:
      'We conduct rigorous, evidence-based studies and policy assessments to diagnose challenges and understand digital transformation impacts.',
  },
  {
    title: '2. Policy',
    description:
      'We translate research findings into actionable governance frameworks, policy recommendations, and strategic advisory for public leaders.',
  },
  {
    title: '3. Action',
    description:
      'We work with governments, institutions, communities and partners to turn ideas into practical interventions.',
  },
]

interface InitiativeCard {
  id: string
  title: string
  description: string
  image: string
}

const GOVERNANCE_INITIATIVES: InitiativeCard[] = [
  {
    id: 'africa-next-forum-unga',
    title: 'AfricaNextForum@UNGA',
    description: "Shaping governance that drives Africa's AI and digital future.",
    image: '/images/project_africa_next_img.png',
  },
  {
    id: 'policy-governance-capacity',
    title: 'Policy & Governance Capacity Building',
    description: 'Equipping policymakers and institutions to navigate emerging technologies.',
    image: '/images/hero_where_we_create_impact.png',
  },
  {
    id: 'ai-governance-ethics',
    title: 'AI Governance & Ethics Frameworks',
    description: 'Generating evidence and actionable guidance for ethical and inclusive AI adoption.',
    image: '/images/article_1.png',
  },
  {
    id: 'civic-tech-democratic-integrity',
    title: 'Civic Tech & Democratic Integrity',
    description: 'Empowering democratic institutions and citizen engagement through trusted digital tools.',
    image: '/images/events_ai_festival.png',
  },
]

interface PartnerCategory {
  id: string
  title: string
  description: string
  image: string
}

const WHO_WE_WORK_WITH: PartnerCategory[] = [
  {
    id: 'government',
    title: 'Government',
    description: 'Public institutions, ministries, agencies and local governments.',
    image: '/images/gov_who_we_work_with_1.png',
  },
  {
    id: 'policymakers',
    title: 'Policymakers',
    description: "Decision-makers shaping Africa's technology future.",
    image: '/images/gov_who_we_work_with_2.png.png',
  },
  {
    id: 'regulators',
    title: 'Regulators',
    description: 'Institutions responsible for digital and emerging technology regulation.',
    image: '/images/gov_who_we_work_with_3.png',
  },
  {
    id: 'civil-society',
    title: 'Civil Society',
    description: 'Organisations advancing rights, inclusion and accountability.',
    image: '/images/gov_who_we_work_with_4.png',
  },
  {
    id: 'private-sector',
    title: 'Private Sector',
    description: 'Companies building and deploying emerging technologies.',
    image: '/images/gov_who_we_work_with_5.png',
  },
  {
    id: 'development-partners',
    title: 'Development Partners',
    description: 'Institutions investing in inclusive digital transformation.',
    image: '/images/gov_who_we_work_with_6.png',
  },
]

const GOVERNANCE_INSIGHTS_ITEMS: AccordionItem[] = [
  {
    title: 'AI, Ethics & Governance',
    description: 'Regulatory frameworks for responsible AI.',
  },
  {
    title: 'AI & Democratic Integrity',
    description:
      'Disinformation, election interference, and algorithmic influence on public opinion.',
  },
  {
    title: 'AI & Public Policy Innovation',
    description:
      'Using AI to improve governance, engagement, and service delivery across institutions.',
  },
  {
    title: 'AI, Economy & Labour',
    description:
      'Workforce transition, labor dynamics, and sustainable economic transformation in Africa.',
  },
]

export const Governance: React.FC = () => {
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

  return (
    <div className="w-full bg-white">
      {/* 1. Hero Section matching reference screenshot */}
      <PageHero
        title="Shaping Better Governance for a Digital Africa"
        subtitle="We work at the intersection of technology, policy and society to strengthen governance systems, build institutional capacity and advance responsible digital transformation across Africa."
        bgImage="/images/page_hero_bg.png"
        bannerImage="/images/gov_page.png"
        bannerAlt="Shaping Better Governance for a Digital Africa - Rise Networks"
      >
        <Link
          to="/partners"
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#EE7747] hover:bg-[#E06533] text-white text-sm sm:text-base font-semibold transition-all duration-200 shadow-sm hover:shadow-md cursor-pointer"
        >
          <span>Partner With Us</span>
          <svg
            className="w-4 h-4 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </Link>
      </PageHero>

      {/* 2. Why Governance Matters Section */}
      <section className="w-full bg-white py-16 sm:py-24 lg:py-28">
        <div className="max-w-[95vw] lg:max-w-[80vw] mx-auto px-6 sm:px-8 lg:px-12 w-full">
          {/* Section Header: Pill Badge & Heading */}
          <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-16">
            <div className="inline-flex items-center px-6 py-2 rounded-full border border-neutral-200 bg-white shadow-2xs text-[#EE7747] text-xs sm:text-sm font-bold tracking-wider uppercase mb-5">
              WHY GOVERNANCE MATTERS
            </div>
            <h2 className="font-bricolage sm:font-sans text-2xl sm:text-4xl lg:text-[44px] font-bold text-[#141416] tracking-tight leading-tight">
              Technology is transforming how societies are governed.
            </h2>
          </div>

          {/* Grid: 4 Paragraphs on Left, gov_why_gov_matters.png on Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column: Text Content */}
            <div className="lg:col-span-6 space-y-6 sm:space-y-8 text-neutral-800 text-sm sm:text-base lg:text-[16px] leading-[1.8] font-normal">
              <p>
                Governments and institutions are increasingly using data, artificial intelligence and digital technologies to make decisions, deliver services and engage citizens.
              </p>
              <p>
                But technology alone does not create better governance.
              </p>
              <p>
                Effective digital transformation requires strong institutions, informed policies, ethical frameworks, accountable leadership and meaningful participation from the people these systems are designed to serve.
              </p>
              <p>
                At Rise Networks, we work to ensure that Africa's digital transformation strengthens—not undermines—transparency, inclusion, human rights and public value.
              </p>
            </div>

            {/* Right Column: Image (already rounded as noted by user) */}
            <div className="lg:col-span-6 flex justify-center">
              <img
                src="/images/gov_why_gov_matters.png"
                alt="Technology is transforming how societies are governed"
                className="w-full h-auto object-contain select-none block max-w-[620px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Our Governance Approach Section using InteractiveAccordion */}
      <InteractiveAccordion
        badge="OUR GOVERNANCE APPROACH"
        title="Building Governance Systems Ready for the Future"
        subtitle="Our approach combines research, technology, capacity building, policy engagement and ecosystem partnerships to help institutions navigate the opportunities and risks created by emerging technologies."
        image="/images/gov_goverance.png"
        imageAlt="Building Governance Systems Ready for the Future - Rise Networks"
        items={GOVERNANCE_APPROACH_ITEMS}
        imagePosition="left"
        activeBgColor="bg-program-pillar-active"
        defaultIndex={0}
      />

      {/* 4. Our Areas of Work Section using InteractiveFeatureList */}
      <InteractiveFeatureList
        title="Our Areas of Work"
        subtitle="Where Technology Meets Governance"
        items={AREAS_OF_WORK_ITEMS}
        defaultIndex={0}
      />

      {/* 5. From Evidence to Action Section using InteractiveAccordion */}
      <InteractiveAccordion
        badge="RESEARCH → POLICY → ACTION"
        title="From Evidence to Action"
        subtitle="Research should not end with a report. It should influence decisions."
        image="/images/gov_research_to_policy.png"
        imageAlt="From Evidence to Action - Rise Networks"
        items={EVIDENCE_TO_ACTION_ITEMS}
        imagePosition="right"
        activeBgColor="bg-primary"
        defaultIndex={2}
      />

      {/* 6. Our Governance Initiatives Section (Horizontal Carousel) */}
      <section className="w-full bg-white py-12 sm:py-20 lg:py-28 overflow-hidden">
        <div className="max-w-[95vw] lg:max-w-[80vw] mx-auto px-6 sm:px-8 lg:px-12 w-full">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-14">
            <div className="inline-flex items-center px-6 py-2 rounded-full border border-neutral-200 bg-white shadow-2xs text-[#EE7747] text-xs sm:text-sm font-bold tracking-wider uppercase mb-5">
              OUR GOVERNANCE PROGRAMMES
            </div>
            <h2 className="font-bricolage text-2xl sm:text-4xl lg:text-5xl font-bold text-dark tracking-tight leading-tight">
              Our Governance Initiatives
            </h2>
          </div>

          {/* Horizontal Carousel */}
          <div
            ref={sliderRef}
            className="flex items-center gap-4 sm:gap-6 lg:gap-8 overflow-x-auto scroll-smooth snap-x snap-mandatory py-4 no-scrollbar [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {GOVERNANCE_INITIATIVES.map((item) => (
              <div
                key={item.id}
                className="shrink-0 snap-start w-[280px] sm:w-[360px] lg:w-[420px] h-[380px] sm:h-[460px] lg:h-[500px] rounded-[24px] sm:rounded-[36px] overflow-hidden relative shadow-md group select-none"
              >
                {/* Background Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Gradient overlays for contrast */}
                <div className="absolute inset-0 bg-black/25 pointer-events-none transition-colors duration-300 group-hover:bg-black/15" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/15 to-transparent pointer-events-none" />

                {/* Floating Bottom Card Text */}
                <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 p-4 sm:p-6 bg-white/95 backdrop-blur-md rounded-[18px] sm:rounded-[24px] shadow-lg border border-white/80">
                  <h4 className="font-sans font-bold text-sm sm:text-base text-dark mb-1">
                    {item.title}
                  </h4>
                  <p className="font-sans text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Controls (Bottom Right) */}
          <div className="flex items-center justify-end gap-3 mt-6 sm:mt-8 lg:mt-10">
            <button
              type="button"
              onClick={handlePrev}
              disabled={!canScrollLeft}
              aria-label="Previous initiatives"
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-neutral-300 hover:border-dark text-dark bg-white hover:bg-neutral-50 flex items-center justify-center transition-all duration-200 cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed active:scale-95 shadow-xs"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
            </button>

            <button
              type="button"
              onClick={handleNext}
              disabled={!canScrollRight}
              aria-label="Next initiatives"
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#141416] hover:bg-neutral-800 text-white flex items-center justify-center transition-all duration-200 cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed active:scale-95 shadow-xs"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* 7. Who We Work With Section */}
      <section className="w-full bg-white py-12 sm:py-20 lg:py-28 border-t border-neutral-100">
        <div className="max-w-[95vw] lg:max-w-[80vw] mx-auto px-6 sm:px-8 lg:px-12 w-full">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
            <div className="inline-flex items-center px-6 py-2 rounded-full border border-neutral-200 bg-white shadow-2xs text-[#EE7747] text-xs sm:text-sm font-bold tracking-wider uppercase mb-5">
              WHO WE WORK WITH
            </div>
            <h2 className="font-bricolage text-2xl sm:text-4xl lg:text-5xl font-bold text-dark tracking-tight leading-tight">
              Building Better Governance Takes Everyone
            </h2>
          </div>

          {/* 6 Cards Grid (3 Columns) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {WHO_WE_WORK_WITH.map((item) => (
              <div
                key={item.id}
                className="bg-[#F9F9FB] rounded-[24px] sm:rounded-[28px] overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-md border border-neutral-100/80 group"
              >
                {/* Image Top (already rounded top) */}
                <div className="w-full h-[220px] sm:h-[260px] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500 block"
                  />
                </div>

                {/* Text Bottom */}
                <div className="p-6 sm:p-7 flex flex-col justify-between flex-1">
                  <h3 className="font-sans font-bold text-base sm:text-lg text-[#141416] mb-2">
                    {item.title}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Governance Insights Section using InteractiveAccordion */}
      <InteractiveAccordion
        badge="FEATURED RESEARCH & INSIGHTS"
        title="Governance Insights"
        subtitle="Explore our latest research, policy perspectives and evidence on the technologies shaping Africa's future."
        image="/images/scholarship_how_to_appply.png"
        imageAlt="Governance Insights - Rise Networks"
        items={GOVERNANCE_INSIGHTS_ITEMS}
        imagePosition="left"
        activeBgColor="bg-program-pillar-active"
        defaultIndex={0}
      >
        <Link
          to="/research"
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#EE7747] hover:bg-[#E06533] text-white text-sm sm:text-base font-semibold transition-all duration-200 shadow-sm hover:shadow-md cursor-pointer w-fit"
        >
          <span>Explore Research</span>
          <svg
            className="w-4 h-4 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </Link>
      </InteractiveAccordion>

      {/* 9. Partnership Section */}
      <section className="w-full bg-white py-10 sm:py-16 lg:py-24">
        <div className="max-w-[95vw] lg:max-w-[80vw] mx-auto px-6 sm:px-8 lg:px-12 flex flex-col items-center justify-center text-center">
          <div className="w-full max-w-4xl mx-auto flex items-center justify-center">
            <Link
              to="/partners"
              className="block w-full cursor-pointer transition-transform duration-200 hover:scale-[1.005]"
            >
              <img
                src="/images/gov_partnership image.png"
                alt="Partnership - Let's Build Better Digital Institutions Together"
                className="w-full h-auto object-contain"
              />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Governance

