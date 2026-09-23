import React, { useState } from 'react'
import { PageHero } from '../components/ui/PageHero'

interface FaqItem {
  question: string
  answer: string
}

interface FaqSection {
  id: string
  title: string
  color: string
  items: FaqItem[]
}

export const Faq: React.FC = () => {
  const [openKey, setOpenKey] = useState<string | null>(null)

  const faqSections: FaqSection[] = [
    {
      id: 'general',
      title: 'General',
      color: '#EE7747',
      items: [
        {
          question: 'Where is Rise Networks based, and do you operate beyond Nigeria?',
          answer:
            'Rise Networks is headquartered in Lagos, Nigeria, but operates across multiple African nations through pan-African fellowships, virtual bootcamps, and regional policy advocacy networks.',
        },
        {
          question: 'How is Rise Networks different from other technology or training organizations?',
          answer:
            'We integrate hands-on AI engineering education with tech justice, ethical governance, and real-world institutional impact, ensuring technology directly serves African development.',
        },
        {
          question: 'How does Rise Networks ensure ethical AI?',
          answer:
            'We actively champion algorithmic fairness, digital rights, data sovereignty, and responsible AI frameworks across all our curricula, research initiatives, and public advisory engagements.',
        },
        {
          question: 'How can organizations or governments collaborate with you?',
          answer:
            'Institutions can partner with us on custom corporate training, research publications, digital policy consulting, tech festivals, and specialized talent development initiatives.',
        },
        {
          question: 'How can I stay updated on Rise Networks’ opportunities?',
          answer:
            'You can subscribe to our newsletter, follow our social media channels, and visit our Knowledge Hub regularly for new cohort announcements, research papers, and event invitations.',
        },
      ],
    },
    {
      id: 'programs',
      title: 'Programs &\nServices',
      color: '#0B996E',
      items: [
        {
          question: 'What kind of training programs does Rise Networks offer?',
          answer:
            'We offer comprehensive programs covering Data Analytics, Machine Learning, Deep Learning, Large Language Models (LLMs), Agentic AI, AI Policy, and Digital Literacy.',
        },
        {
          question: 'Who can join your programs?',
          answer:
            'Our programs welcome university students, aspiring and experienced software engineers, data analysts, corporate professionals, policymakers, and civic leaders.',
        },
        {
          question: 'What does “Data and Artificial Intelligence for Development” mean?',
          answer:
            'It means leveraging data science and AI technologies not just for commercial gain, but to solve urgent developmental challenges across healthcare, agriculture, education, governance, and financial inclusion.',
        },
        {
          question: 'Do you offer virtual or hybrid learning?',
          answer:
            'Yes, our programs feature flexible delivery models, including 100% online cohort learning, hybrid formats, and in-person intensive labs at Rise Networks AI Labs.',
        },
        {
          question: 'How can I apply for Rise Networks’ training, fellowships, or capacity-building programs?',
          answer:
            'Applications open periodically throughout the year. You can view active admissions on our Academy page and submit your application online with your portfolio or statement of purpose.',
        },
        {
          question: 'What industries or sectors do you focus on with your AI and data programs?',
          answer:
            'We focus on high-impact sectors including Financial Services & FinTech, Healthcare, Agriculture, Public Governance, Education, and Energy.',
        },
        {
          question: 'What does your advisory and consulting service cover?',
          answer:
            'Our advisory services cover AI strategy and implementation, ethical compliance, data governance frameworks, algorithmic auditing, and digital transformation roadmaps for enterprises and governments.',
        },
      ],
    },
    {
      id: 'impact',
      title: 'Impact &\nMission',
      color: '#0284C7',
      items: [
        {
          question: 'How is Rise Networks contributing to building Africa’s next generation of AI talent?',
          answer:
            'We train thousands of young Africans annually in cutting-edge AI and machine learning engineering, providing project-based fellowships, mentorship, and direct career placement pathways.',
        },
        {
          question: 'What are some success stories or impact highlights from your work?',
          answer:
            'To date, we have trained over 25,000 individuals, published more than 25 influential policy and research papers, and supported hundreds of alumni now working at global tech enterprises, startups, and academic institutions.',
        },
      ],
    },
    {
      id: 'partnerships',
      title: 'Partnerships &\nCollaboration',
      color: '#A9518B',
      items: [
        {
          question: 'How can I stay updated on Rise Networks’ events, projects, and opportunities?',
          answer:
            'Join our community channels, follow our social handles, and subscribe to our newsletter for early access to tech festivals, hackathons, and research release webinars.',
        },
        {
          question: 'Do you provide scholarships, grants, or financial aid for your programs?',
          answer:
            'Yes, we collaborate with philanthropic foundations, corporate sponsors, and international development agencies to offer merit-based and need-based scholarships.',
        },
        {
          question: 'How can individuals or organizations support Rise Networks’ mission?',
          answer:
            'You can support us by becoming an industry mentor, sponsoring a student cohort or scholarship, collaborating on research, or providing computing resources and project opportunities.',
        },
        {
          question: 'Who should I contact for media, speaking engagements, or press inquiries?',
          answer:
            'For press, keynote speaking requests, and media interviews, please reach out to our communications desk at people@risenetworks.org.',
        },
      ],
    },
  ]

  const toggleAccordion = (key: string) => {
    setOpenKey(openKey === key ? null : key)
  }

  return (
    <div className="w-full bg-white">
      {/* Hero Section */}
      <PageHero
        title={
          <>
            Frequently Asked <br />
            Questions
          </>
        }
        subtitle="Got Questions? Here are your answers"
      />

      {/* FAQ Sections List */}
      <section className="w-full py-16 sm:py-24 lg:py-28">
        <div className="max-w-[80vw] mx-auto px-6 sm:px-8 lg:px-12 flex flex-col space-y-20 sm:space-y-28 lg:space-y-32">
          {faqSections.map((section) => (
            <div
              key={section.id}
              className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-16 items-start"
            >
              {/* Left Column: Category Name */}
              <div className="md:col-span-4 lg:col-span-4 sticky top-28">
                <h2
                  className="font-bricolage text-3xl sm:text-4xl lg:text-[40px] font-medium tracking-tight whitespace-pre-line leading-tight"
                  style={{ color: section.color }}
                >
                  {section.title}
                </h2>
              </div>

              {/* Right Column: Accordion Questions */}
              <div className="md:col-span-8 lg:col-span-8 divide-y divide-neutral-200 border-t border-b border-neutral-200">
                {section.items.map((item, idx) => {
                  const itemKey = `${section.id}-${idx}`
                  const isOpen = openKey === itemKey

                  return (
                    <div key={idx} className="py-5 sm:py-6 transition-colors">
                      <button
                        type="button"
                        onClick={() => toggleAccordion(itemKey)}
                        className="w-full flex items-center justify-between gap-6 text-left cursor-pointer group"
                        aria-expanded={isOpen}
                      >
                        <span className="font-sans text-base sm:text-lg lg:text-[19px] font-normal text-dark group-hover:text-primary transition-colors leading-snug">
                          {item.question}
                        </span>
                        <span
                          className={`shrink-0 text-2xl font-light transition-all duration-500 ease-in-out transform ${
                            isOpen
                              ? 'rotate-[360deg] text-primary'
                              : 'rotate-0 text-neutral-500 group-hover:text-dark'
                          }`}
                        >
                          {isOpen ? (
                            <svg
                              className="w-5 h-5"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={1.5}
                                d="M6 18L18 6M6 6l12 12"
                              />
                            </svg>
                          ) : (
                            <svg
                              className="w-5 h-5"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={1.5}
                                d="M12 4v16m8-8H4"
                              />
                            </svg>
                          )}
                        </span>
                      </button>

                      {/* Smooth Collapsible Answer Container */}
                      <div
                        className={`grid transition-all duration-300 ease-in-out ${
                          isOpen
                            ? 'grid-rows-[1fr] opacity-100 mt-3.5'
                            : 'grid-rows-[0fr] opacity-0 mt-0 pointer-events-none'
                        }`}
                      >
                        <div className="overflow-hidden">
                          <p className="pr-8 text-sm sm:text-base text-muted font-normal leading-relaxed">
                            {item.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          ))}

          {/* Still Have Questions Section */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-16 items-start pt-8">
            {/* Left Column */}
            <div className="md:col-span-4 lg:col-span-4">
              <h2 className="font-bricolage text-3xl sm:text-4xl lg:text-[38px] font-medium tracking-tight text-dark leading-tight">
                Still have <br />
                questions?
              </h2>
            </div>

            {/* Right Column */}
            <div className="md:col-span-8 lg:col-span-8 flex items-center">
              <p className="font-sans text-base sm:text-lg lg:text-[19px] text-dark font-normal leading-relaxed">
                Reach us anytime at{' '}
                <a
                  href="mailto:people@risenetworks.org"
                  className="text-[#EE7747] underline underline-offset-4 decoration-[#EE7747]/60 hover:decoration-[#EE7747] font-medium"
                >
                  people@risenetworks.org
                </a>{' '}
                or message us on WhatsApp at{' '}
                <a
                  href="https://wa.me/2347060545018"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#EE7747] underline underline-offset-4 decoration-[#EE7747]/60 hover:decoration-[#EE7747] font-medium"
                >
                  +234 706 054 5018
                </a>{' '}
                for instant support.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Faq
