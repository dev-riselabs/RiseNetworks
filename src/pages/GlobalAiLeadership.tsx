import React from 'react'
import { PageHero } from '../components/ui/PageHero'
import { InteractiveAccordion, type AccordionItem } from '../components/ui/InteractiveAccordion'

// 1. Applied & Impactful Research Items
const APPLIED_RESEARCH_ITEMS: AccordionItem[] = [
  {
    title: 'Real-World Problem Solving',
    description:
      'Develop AI solutions addressing Africa’s most pressing challenges, focused on practical, community-centered outcomes.',
  },
  {
    title: 'Collaborative Innovation',
    description:
      'Partner with global universities, technology leaders, and regional research institutes to co-develop breakthrough AI models.',
  },
  {
    title: 'Data-Driven Insights',
    description:
      'Harness rich local data to generate predictive intelligence that empowers decision-makers across industries and public institutions.',
  },
]

// 2. Experiential Education & Skills Development Items
const EXPERIENTIAL_EDUCATION_ITEMS: AccordionItem[] = [
  {
    title: 'Integrated Academic & Professional Program',
    description:
      'Offer world-class curricula, workshops, bootcamps, and certifications in AI and Data Science for learners and professionals.',
  },
  {
    title: 'Hands-On Learning',
    description:
      'Provide immersive project-based experiences, GPU lab access, and real datasets so learners build production-ready AI solutions.',
  },
  {
    title: 'Empowering Stakeholders',
    description:
      'Equip educators, executives, and public servants with the technical literacy and strategic insight to lead in the AI era.',
  },
]

// 3. Strategic Partnerships & Ecosystem Leadership Items
const STRATEGIC_PARTNERSHIPS_ITEMS: AccordionItem[] = [
  {
    title: 'Government & NGO Collaboration',
    description:
      'Co-create strategies with policymakers and organizations to embed AI into regional and national development agendas.',
  },
  {
    title: 'Private Sector Engagement',
    description:
      'Partner with enterprise leaders and tech companies to align skills, catalyze investments, and build commercial AI applications.',
  },
  {
    title: 'Ethical AI Advocacy',
    description:
      'Promote inclusive standards, data privacy, and ethical frameworks that champion fairness, transparency, and human rights.',
  },
]

// 4. Community-Centric Knowledge Sharing & Narrative Leadership Items
const COMMUNITY_NARRATIVE_ITEMS: AccordionItem[] = [
  {
    title: 'AI Practitioner Networks',
    description:
      'Foster vibrant hubs of engineers, researchers, and data enthusiasts collaborating on real-world challenges.',
  },
  {
    title: 'Democratizing AI Knowledge',
    description:
      'Use accessible channels to educate, inform, and engage the public on AI adoption.',
  },
  {
    title: 'Storytelling for Impact',
    description:
      'Amplify transformative African AI stories, highlighting local innovations and positive societal change.',
  },
]

// 5. Inclusion, Diversity, Equity & Access (IDEA) Items
const IDEA_ITEMS: AccordionItem[] = [
  {
    title: 'Equitable AI Development',
    description:
      'Ensure artificial intelligence tools and technologies are designed to eliminate algorithmic bias and serve underrepresented communities equitably.',
  },
  {
    title: 'Diverse & Inclusive Ecosystem',
    description:
      'Champion women in AI, regional minority groups, and youth across grassroots ecosystems to participate actively in the digital economy.',
  },
  {
    title: 'Empowerment & Growth',
    description:
      'Enable participants to innovate, take informed risks, and thrive while embedding equality and justice in every initiative.',
  },
]

export const GlobalAiLeadership: React.FC = () => {
  return (
    <div className="w-full bg-white pb-20 sm:pb-28">
      {/* 1. Page Hero Section */}
      <PageHero
        title={
          <>
            The Rise Networks <br className="hidden sm:inline" />
            Framework for Global <br className="hidden sm:inline" />
            AI Leadership
          </>
        }
        subtitle="Advancing sovereign AI capabilities, ethical governance, and homegrown technical excellence across the African continent and the Global South."
        bgImage="/images/page_hero_bg.png"
      />

      {/* 2. Applied & Impactful Research (Interactive Accordion - Right Image) */}
      <InteractiveAccordion
        title="Applied & Impactful Research"
        image="/images/partner_who_can_partner_img.png"
        imageAlt="Applied & Impactful Research - Rise Networks"
        items={APPLIED_RESEARCH_ITEMS}
        imagePosition="right"
        activeBgColor="bg-primary"
        defaultIndex={0}
        autoPlayInterval={5000}
      />

      {/* 3. Experiential Education & Skills Development (Interactive Accordion - Left Image) */}
      <InteractiveAccordion
        title={
          <>
            Experiential Education <br className="hidden sm:inline" />
            & Skills Development
          </>
        }
        image="/images/partner_who_can_partner_img.png"
        imageAlt="Experiential Education & Skills Development - Rise Networks"
        items={EXPERIENTIAL_EDUCATION_ITEMS}
        imagePosition="left"
        activeBgColor="bg-[#0EA759]"
        defaultIndex={0}
        autoPlayInterval={5000}
      />

      {/* 4. Strategic Partnerships & Ecosystem Leadership (Interactive Accordion - Right Image) */}
      <InteractiveAccordion
        title={
          <>
            Strategic Partnerships & <br className="hidden sm:inline" />
            Ecosystem Leadership
          </>
        }
        image="/images/partner_who_can_partner_img.png"
        imageAlt="Strategic Partnerships & Ecosystem Leadership - Rise Networks"
        items={STRATEGIC_PARTNERSHIPS_ITEMS}
        imagePosition="right"
        activeBgColor="bg-[#29ABE2]"
        defaultIndex={0}
        autoPlayInterval={5000}
      />

      {/* 5. Community-Centric Knowledge Sharing & Narrative Leadership (Interactive Accordion - Left Image) */}
      <InteractiveAccordion
        title={
          <>
            Community-Centric Knowledge <br className="hidden sm:inline" />
            Sharing & Narrative Leadership
          </>
        }
        image="/images/partner_who_can_partner_img.png"
        imageAlt="Community-Centric Knowledge Sharing & Narrative Leadership - Rise Networks"
        items={COMMUNITY_NARRATIVE_ITEMS}
        imagePosition="left"
        activeBgColor="bg-[#A9518B]"
        defaultIndex={1}
        autoPlayInterval={5000}
      />

      {/* 6. Inclusion, Diversity, Equity & Access (IDEA) (Interactive Accordion - Right Image) */}
      <InteractiveAccordion
        title={
          <>
            Inclusion, Diversity, <br className="hidden sm:inline" />
            Equity & Access (IDEA)
          </>
        }
        image="/images/partner_who_can_partner_img.png"
        imageAlt="Inclusion, Diversity, Equity & Access (IDEA) - Rise Networks"
        items={IDEA_ITEMS}
        imagePosition="right"
        activeBgColor="bg-primary"
        defaultIndex={2}
        autoPlayInterval={5000}
      />
    </div>
  )
}

export default GlobalAiLeadership
