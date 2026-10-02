import React from 'react'
import { PageHero } from '../components/ui/PageHero'
import { CtaCard } from '../components/ui/CtaCard'
import { InteractiveAccordion } from '../components/ui/InteractiveAccordion'

export const WhyRise: React.FC = () => {
  const pillars = [
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
      <InteractiveAccordion
        title="Why Rise Networks"
        image="/images/why_rise_networks.png"
        imageAlt="Why Rise Networks"
        items={pillars}
        activeBgColor="bg-brand-green"
      />

      {/* Ready to Shape Africa CTA overlapping into Footer */}
      <CtaCard overlapFooter={true} />
    </div>
  )
}

export default WhyRise
