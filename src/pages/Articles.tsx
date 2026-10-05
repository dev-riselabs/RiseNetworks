import React, { useState, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { PageHero } from '../components/ui/PageHero'
import { CtaCard } from '../components/ui/CtaCard'

export interface Article {
  id: string
  title: string
  slug: string
  category: string
  categoryColor: string
  author: {
    name: string
    role: string
    avatar: string
  }
  publishedAt: string
  readTime: string
  image: string
  excerpt: string
  tags: string[]
  content: {
    introduction: string
    keyTakeaways: string[]
    sections: {
      heading: string
      body: string
      quote?: string
    }[]
    conclusion: string
  }
}

export const ARTICLES_DATA: Article[] = [
  {
    id: 'article-1',
    title: 'AI and Governance: Understanding its Influence and Policy Information and Citizen Behaviour in Africa',
    slug: 'ai-and-governance-africa-citizen-behaviour',
    category: 'AI Policy & Governance',
    categoryColor: '#EE7747',
    author: {
      name: 'Toyosi Akerele-Ogunsiji',
      role: 'Founder & CEO, Rise Networks',
      avatar: '/images/about_hero_img.png',
    },
    publishedAt: 'March 24, 2025',
    readTime: '7 min read',
    image: '/images/article_1.png',
    excerpt:
      'Exploring how emerging artificial intelligence systems shape institutional decision-making, citizen trust, and democratic participation across diverse African governance landscapes.',
    tags: ['AI Governance', 'Policy', 'Citizen Behaviour', 'Public Sector', 'Digital Democracy'],
    content: {
      introduction:
        'Artificial Intelligence is rapidly transitioning from a technological novelty to a core instrument of statecraft and civic interaction. In Africa, the intersection of AI with public governance presents transformative opportunities alongside complex questions regarding citizen trust, automated surveillance, and policy formulation.',
      keyTakeaways: [
        'AI governance models must be deeply contextualized to address African digital infrastructure and literacy realities.',
        'Algorithmic transparency in civic services is essential for sustaining citizen trust and democratic engagement.',
        'Data sovereignty frameworks protect citizen records while enabling cross-border innovation under continental treaties.',
        'Capacity building for civil servants is the crucial bridge between visionary policy papers and effective implementation.',
      ],
      sections: [
        {
          heading: '1. The Impact of Algorithmic Systems on Citizen Trust',
          body: 'When governments deploy automated decision systems in social protection programs, tax administration, and digital identity registries, the opacity of algorithms can exacerbate historic distrust. Ensuring auditability and public accountability is vital to prevent systemic exclusion of vulnerable populations.',
          quote: 'Good governance in the AI era is measured not by the sophistication of algorithms, but by how transparently and equitably they serve every citizen.',
        },
        {
          heading: '2. Sovereign Policy Frameworks for Africa',
          body: 'Rather than transposing external regulatory models that may stifle local innovators, African nations are developing agile, evidence-based policy roadmaps. Rise Networks continues to advise regional legislative bodies on balancing consumer protection with startup ecosystem growth.',
        },
        {
          heading: '3. Behavioral Insights and Civic Participation',
          body: 'AI-driven communications and predictive civic polling offer public institutions real-time feedback loops. When harnessed ethically, these tools empower citizens to actively shape municipal planning, healthcare allocation, and educational policies.',
        },
      ],
      conclusion:
        'A human-centric approach to AI governance will ensure Africa harnesses cutting-edge technologies to strengthen democratic resilience, amplify citizen voices, and drive inclusive societal progress.',
    },
  },
  {
    id: 'article-2',
    title: 'Guardrails, Sandboxes and AI Safety: Insights and Imperatives for Africa',
    slug: 'guardrails-sandboxes-ai-safety-africa',
    category: 'AI Safety & Ethics',
    categoryColor: '#0EA759',
    author: {
      name: 'Dr. Babatunde Sanusi',
      role: 'Head of AI Engineering, Rise Labs',
      avatar: '/images/partner_sponsor_the_next_gen_img.png',
    },
    publishedAt: 'March 18, 2025',
    readTime: '6 min read',
    image: '/images/article_2.png',
    excerpt:
      'Why adaptive regulatory sandboxes and sovereign safety guardrails are critical for fostering safe, reliable, and bias-free AI deployment across African markets.',
    tags: ['AI Safety', 'Regulatory Sandboxes', 'Guardrails', 'Compliance', 'Risk Mitigation'],
    content: {
      introduction:
        'As foundational models proliferate across banking, healthcare, and security, creating context-aware safety guardrails and regulatory sandboxes is an urgent priority. Safe AI deployment demands rigorous testing environments that reflect local dialects, edge bandwidth constraints, and regional socio-economic dynamics.',
      keyTakeaways: [
        'Regulatory sandboxes provide controlled spaces for startups to experiment without fear of arbitrary regulatory penalties.',
        'Safety guardrails must test for local linguistic biases and cultural misconceptions embedded in global foundational models.',
        'Proactive red-teaming and safety benchmarks safeguard critical national infrastructure from automated vulnerabilities.',
      ],
      sections: [
        {
          heading: '1. The Architecture of Effective AI Sandboxes',
          body: 'Regulatory sandboxes allow innovators to deploy and test frontier AI applications under structured regulatory supervision. By observing model behaviors in live yet contained pilot settings, regulatory agencies gain empirical insights necessary to draft informed statutory guidelines.',
        },
        {
          heading: '2. Eliminating Algorithmic Harm at the Edge',
          body: 'AI safety cannot be confined to theoretical risk models. In emerging markets, safety means ensuring automated credit-scoring algorithms do not discriminate against informal sector workers, and medical diagnostic tools maintain high precision across diverse demographic groups.',
          quote: 'AI safety is not merely about preventing rogue intelligence; it is about guaranteeing fairness, reliability, and human dignity in daily automated decisions.',
        },
      ],
      conclusion:
        'By instituting agile sandboxes and robust safety protocols, African ecosystems can foster world-class tech champions that operate with the highest standards of safety, ethics, and civic responsibility.',
    },
  },
  {
    id: 'article-3',
    title: "Generative AI in Education: Charting Africa's Path Toward a Smarter and more Inclusive Future",
    slug: 'generative-ai-in-education-africa-future',
    category: 'Education & Talent',
    categoryColor: '#0284C7',
    author: {
      name: 'Kemi Adeyemi',
      role: 'Principal Learning Systems Architect',
      avatar: '/images/home_hero_img_1.png',
    },
    publishedAt: 'March 12, 2025',
    readTime: '5 min read',
    image: '/images/article_3.png',
    excerpt:
      "Transforming pedagogical systems across Africa through personalized generative AI tutors, teacher augmentation, and localized curriculum adaptation in multiple languages.",
    tags: ['Generative AI', 'EdTech', 'Pedagogy', 'Digital Learning', 'Inclusive Education'],
    content: {
      introduction:
        'With acute teacher shortages and overcrowded classrooms in many regions, Generative AI offers a revolutionary path to democratize high-quality, personalized education for millions of young Africans across urban centers and rural communities.',
      keyTakeaways: [
        'AI tutors tailored to local curricula provide 24/7 personalized mastery learning at negligible incremental cost.',
        'Teacher-assistive AI tools automate administrative grading, freeing educators to focus on mentorship and critical thinking.',
        'Multilingual speech interfaces bridge language barriers for young learners in early childhood education.',
      ],
      sections: [
        {
          heading: '1. Hyper-Personalized Learning at Scale',
          body: 'Generative AI adapts teaching pacing, instructional metaphors, and practice exercises to the individual student’s comprehension level. Students who previously struggled in monolithic classrooms can now receive real-time, patient explanations in their native languages.',
        },
        {
          heading: '2. Augmenting Teachers, Not Replacing Them',
          body: 'Empowering teachers with AI lesson plan generators, adaptive quiz builders, and real-time student performance analytics dramatically enhances instructional quality, especially in under-resourced public school systems.',
          quote: 'AI in education is the ultimate equalizer, enabling a student in a remote village to access the same depth of interactive knowledge as one in the world’s leading academies.',
        },
      ],
      conclusion:
        'Through strategic investment in sovereign educational AI models and teacher training, Africa can leapfrog historical educational barriers and prepare its youth for the global knowledge economy.',
    },
  },
  {
    id: 'article-4',
    title: 'Preparing Nigeria for the AI Economy: Skills Dev and the Future of work for State-level Prosperity',
    slug: 'preparing-nigeria-for-ai-economy-skills-development',
    category: 'Economic Development',
    categoryColor: '#EE7747',
    author: {
      name: 'Toyosi Akerele-Ogunsiji',
      role: 'Founder & CEO, Rise Networks',
      avatar: '/images/about_hero_img.png',
    },
    publishedAt: 'March 05, 2025',
    readTime: '8 min read',
    image: '/images/article_4.png',
    excerpt:
      'A strategic roadmap for sub-national governments to cultivate AI talent pipelines, attract tech capital, and generate high-value digital employment across Nigerian states.',
    tags: ['Future of Work', 'Skills Development', 'State Prosperity', 'Nigeria', 'Economic Policy'],
    content: {
      introduction:
        'The global AI revolution is restructuring labor markets and creating unprecedented value chains. For Nigeria to harness this paradigm shift, sub-national states must formulate proactive talent development policies, modernize technical colleges, and establish decentralized digital innovation hubs.',
      keyTakeaways: [
        'State-level prosperity requires moving beyond resource dependency to high-value human capital development.',
        'Public-private training partnerships can rapidly upskill thousands of graduates into remote global AI engineering roles.',
        'Sub-national infrastructure investments in reliable power and broadband directly catalyze tech entrepreneurship.',
      ],
      sections: [
        {
          heading: '1. Decentralizing Tech Opportunity Beyond Megacities',
          body: 'While Lagos has established itself as Africa’s startup capital, lasting national prosperity requires vibrant tech ecosystems across the Northern, Eastern, and South-South regions. Rise Networks’ capacity-building initiatives are actively training youths across all geopolitical zones.',
        },
        {
          heading: '2. Aligning Curricula with Global Market Demands',
          body: 'Training must focus on high-demand practical skills: Machine Learning engineering, Large Action Models, AI ethics, and data pipeline architecture. Equipping youths with these capabilities enables high-earning remote employment and local venture creation.',
          quote: 'Our human capital is Nigeria’s greatest natural resource. An investment in AI skills today yields multi-generational economic dividends for our states.',
        },
      ],
      conclusion:
        'By executing cohesive state-level AI roadmaps, Nigeria can establish itself as the premier tech talent engine of the African continent.',
    },
  },
  {
    id: 'article-5',
    title: 'Reflections, Notes & Lessons for Africa from the First Global AI Safety Summit',
    slug: 'reflections-lessons-africa-global-ai-safety-summit',
    category: 'Global Diplomacy & AI',
    categoryColor: '#A9518B',
    author: {
      name: 'Farooq Ibrahim',
      role: 'Public Sector Innovation Lead',
      avatar: '/images/about_tao_green.png',
    },
    publishedAt: 'February 26, 2025',
    readTime: '6 min read',
    image: '/images/article_5.png',
    excerpt:
      'Key takeaways, geopolitical negotiations, and strategic imperatives from international AI summits, highlighting the necessity of an assertive African voice in global tech diplomacy.',
    tags: ['AI Safety Summit', 'Global Diplomacy', 'Multilateralism', 'African Voice', 'Governance'],
    content: {
      introduction:
        'As global superpowers convene at multilateral AI Safety Summits to establish foundational treaties on frontier AI risks, Africa’s active diplomatic participation is non-negotiable. Decisions regarding model compute thresholds, licensing, and safety benchmarks directly affect African sovereignty.',
      keyTakeaways: [
        'Africa must participate as an equal co-architect in formulating international AI safety treaties.',
        'Global risk discussions must include near-term developmental challenges, not just distant existential scenarios.',
        'Multilateral compute-sharing agreements should be negotiated to prevent a deepening global AI compute divide.',
      ],
      sections: [
        {
          heading: '1. Challenging the Asymmetry of Global Tech Governance',
          body: 'International safety discourse has often focused disproportionately on catastrophic existential risks while overlooking acute challenges facing developing nations, such as algorithmic misinformation, digital labor exploitation, and dataset bias.',
        },
        {
          heading: '2. Crafting a Unified Pan-African Diplomatic Front',
          body: 'Through the African Union and regional economic communities, African nations must present a unified diplomatic stance that advocates for sovereign compute access, equitable transfer of technology, and ethical AI standards.',
          quote: 'If Africa is not seated at the global AI negotiating table, African priorities and perspectives will inevitably be left off the menu.',
        },
      ],
      conclusion:
        'Rise Networks continues to lead international advocacy, ensuring African research and strategic priorities remain prominent in global technology policy councils.',
    },
  },
  {
    id: 'article-6',
    title: 'Leveraging Artificial Intelligence to Transform Media Communication for Improved Security.',
    slug: 'leveraging-ai-transform-media-communication-security',
    category: 'Media & National Security',
    categoryColor: '#0EA759',
    author: {
      name: 'Oluwaseun Alabi',
      role: 'Cybersecurity & Media Systems Specialist',
      avatar: '/images/about_tao_orange.png',
    },
    publishedAt: 'February 19, 2025',
    readTime: '7 min read',
    image: '/images/article_6.png',
    excerpt:
      'How AI-powered media monitoring, deepfake detection, and verified communication channels strengthen national security and counter synthetic disinformation campaigns.',
    tags: ['Media Communication', 'National Security', 'Deepfake Detection', 'Counter-Disinformation', 'Cyber Defense'],
    content: {
      introduction:
        'In an era characterized by hyper-connected communication channels and weaponized synthetic media, artificial intelligence serves as both an essential shield and a strategic multiplier for public safety, crisis communication, and national security.',
      keyTakeaways: [
        'Real-time automated media telemetry detects coordinated disinformation campaigns before they provoke civil unrest.',
        'Multi-modal deepfake authentication tools empower newsrooms and security agencies to verify audio-visual assets.',
        'Secure, automated crisis broadcast systems deliver critical life-saving alerts to citizens during emergency situations.',
      ],
      sections: [
        {
          heading: '1. Combating Coordinated Inauthentic Behavior',
          body: 'Adversarial actors increasingly deploy automated bot networks and generative media to exacerbate ethnic tensions and undermine public trust during critical elections. AI pattern-recognition algorithms enable early detection and mitigation of synthetic influence operations.',
        },
        {
          heading: '2. Proactive Crisis Communications Architecture',
          body: 'During security emergencies or natural disasters, AI-enabled broadcast systems dynamically synthesize emergency updates in dozens of local languages and dialects, transmitting verified alerts across SMS, radio, and social networks simultaneously.',
          quote: 'In the modern security landscape, information integrity is as vital to national stability as physical defense.',
        },
      ],
      conclusion:
        'By integrating ethical AI into media communication frameworks, security organizations and civic institutions can safeguard information integrity, protect public safety, and reinforce democratic stability.',
    },
  },
]

const CATEGORIES = [
  'All Articles',
  'AI Policy & Governance',
  'AI Safety & Ethics',
  'Education & Talent',
  'Economic Development',
  'Global Diplomacy & AI',
  'Media & National Security',
]

export const Articles: React.FC = () => {
  const navigate = useNavigate()
  const [selectedCategory, setSelectedCategory] = useState('All Articles')
  const [searchQuery, setSearchQuery] = useState('')
  const [currentPage, setCurrentPage] = useState(1)

  // Filter articles based on category & search query
  const filteredArticles = useMemo(() => {
    return ARTICLES_DATA.filter((article) => {
      const matchesCategory =
        selectedCategory === 'All Articles' || article.category === selectedCategory

      const matchesSearch =
        searchQuery.trim() === '' ||
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.author.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))

      return matchesCategory && matchesSearch
    })
  }, [selectedCategory, searchQuery])

  const articlesPerPage = 6
  const paginatedArticles = useMemo(() => {
    return filteredArticles.slice(0, articlesPerPage)
  }, [filteredArticles])

  return (
    <div className="w-full bg-white">
      {/* 1. Hero Section matching user design */}
      <PageHero
        title="Insights and Articles"
        subtitle="Expert insights and research exploring AI policy and industry transformation across Africa."
        bgImage="/images/page_hero_bg.png"
      />

      {/* Main Content Area */}
      <div className="max-w-[80vw] mx-auto px-6 sm:px-8 lg:px-12 py-8 sm:py-12 w-full">
        {/* Category Filter & Search Bar */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-10 pb-6 border-b border-neutral-100">
          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 no-scrollbar [-ms-overflow-style:none] [scrollbar-width:none]">
            {CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => {
                    setSelectedCategory(cat)
                    setCurrentPage(1)
                  }}
                  className={`whitespace-nowrap px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-[#141416] text-white shadow-xs'
                      : 'bg-neutral-100 hover:bg-neutral-200 text-neutral-700'
                  }`}
                >
                  {cat}
                </button>
              )
            })}
          </div>

          {/* Live Search Input */}
          <div className="relative w-full md:w-72 shrink-0">
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value)
                setCurrentPage(1)
              }}
              className="w-full pl-9 pr-8 py-2 rounded-full border border-neutral-300 text-xs sm:text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
            />
            <svg
              className="w-4 h-4 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-dark text-xs"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* 2. Articles 3x2 Grid exactly matching user reference */}
        {paginatedArticles.length === 0 ? (
          <div className="text-center py-16 bg-neutral-50 rounded-3xl border border-neutral-200 mb-16">
            <h3 className="font-bricolage text-xl font-semibold text-dark mb-1">
              No articles found
            </h3>
            <p className="text-sm text-muted max-w-sm mx-auto mb-4">
              We couldn't find any articles matching "{searchQuery}".
            </p>
            <button
              type="button"
              onClick={() => {
                setSelectedCategory('All Articles')
                setSearchQuery('')
              }}
              className="px-4 py-2 bg-primary text-white rounded-full text-xs font-semibold hover:bg-primary-hover transition-colors"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
            {paginatedArticles.map((article) => {
              return (
                <div
                  key={article.id}
                  onClick={() => navigate(`/articles/${article.id}`)}
                  className="group cursor-pointer bg-[#F8F9FA] rounded-[15px] sm:rounded-[28px] overflow-hidden border border-neutral-200/70 hover:border-neutral-300 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col h-full"
                >
                  {/* Top Image Box */}
                  <div className="w-full aspect-[4/3] overflow-hidden bg-neutral-900 relative shrink-0">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                  </div>

                  {/* Article Bottom Title Section with increased height */}
                  <div className="p-6 sm:p-7 lg:p-8 pb-8 sm:pb-10 min-h-[150px] sm:min-h-[170px]  flex flex-col justify-start flex-1 bg-[#F8F9FA]">
                    <h3 className="font-sans text-base sm:text-lg font-medium text-[#141416] leading-snug group-hover:text-primary transition-colors">
                      {article.title}
                    </h3>
                  </div>
                </div>
              )
            })}
          </div>
        )}

        {/* 3. Pagination Controls with Left & Right Carets */}
        <div className="flex items-center justify-end gap-1.5 sm:gap-2 py-6 mb-16">
          {/* Left Caret */}
          <button
            type="button"
            onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
            disabled={currentPage === 1}
            aria-label="Previous page"
            className="w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center text-neutral-600 hover:text-dark hover:bg-neutral-100 disabled:opacity-30 disabled:cursor-not-allowed transition-all cursor-pointer"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Page Numbers */}
          {[1, 2, 3, 4].map((page) => {
            const isActive = currentPage === page
            return (
              <button
                key={page}
                type="button"
                onClick={() => setCurrentPage(page)}
                className={`w-8 h-8 sm:w-9 sm:h-9 rounded-full text-xs sm:text-sm font-semibold flex items-center justify-center transition-all cursor-pointer ${
                  isActive
                    ? 'bg-primary text-white shadow-xs'
                    : 'text-neutral-700 hover:bg-neutral-100'
                }`}
              >
                {page}
              </button>
            )
          })}

          {/* Right Caret */}
          <button
            type="button"
            onClick={() => setCurrentPage((prev) => Math.min(4, prev + 1))}
            disabled={currentPage === 4}
            aria-label="Next page"
            className="w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center text-neutral-600 hover:text-dark hover:bg-neutral-100 disabled:opacity-30 disabled:cursor-not-allowed transition-all cursor-pointer"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Bottom CTA Overlapping into Footer */}
      <CtaCard overlapFooter={true} />
    </div>
  )
}

export default Articles
