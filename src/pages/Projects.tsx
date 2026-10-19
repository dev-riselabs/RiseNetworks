import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { CtaCard } from '../components/ui/CtaCard'

export interface ProjectCardItem {
  id: string
  title: string
  category: 'health' | 'ai' | 'all'
  categoryLabel: string
  description: string
  image?: string
  solidColor?: string
  badgeLabel: string
  link: string
}

const PROJECTS_DATA: ProjectCardItem[] = [
  {
    id: 'helchetics',
    title: 'HELCHETICS',
    category: 'health',
    categoryLabel: 'Health',
    description:
      'Helchetics is a health monitoring prototype designed to support the early identification of potential health irregularities through the use of medical sensing technology.',
    image: '/images/project_helchetics.png',
    badgeLabel: 'Health',
    link: '/projects/helchetics',
  },
  {
    id: 'shedetectit',
    title: 'SHEDETECTIT',
    category: 'health',
    categoryLabel: 'Health',
    description:
      'SheDetectIt is a wearable technology prototype designed to explore how sensors and data collection can support breast health monitoring and the early identification of potential irregularities.',
    image: '/images/project_shedetectit.png',
    badgeLabel: 'Health',
    link: '/projects/shedetectit',
  },
  {
    id: 'cerebral-bci',
    title: 'CEREBRAL BCI',
    category: 'health',
    categoryLabel: 'Health',
    description:
      'Cerebral BCI is a Brain Computer Interface prototype exploring how brain signals can be captured and interpreted to enable interaction between a user and an external device.',
    image: '/images/project_cerebral.png',
    badgeLabel: 'Health',
    link: '/projects/cerebral-bci',
  },
  {
    id: 'ai4traffic-control',
    title: 'AI4TRAFFICKONTROL',
    category: 'ai',
    categoryLabel: 'Artificial Intelligence',
    description:
      'AI4TrafficKontrol is an artificial intelligence project focused on improving traffic management through machine learning and data driven prediction.',
    solidColor: '#EE7747',
    badgeLabel: 'Health',
    link: '/projects/ai4traffic-control',
  },
]

const CATEGORY_OPTIONS = [
  { id: 'all', label: 'All categories' },
  { id: 'health', label: 'Health' },
  { id: 'ai', label: 'Artificial Intelligence' },
]

export const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const filteredProjects = PROJECTS_DATA.filter((project) => {
    if (selectedCategory === 'all') return true
    return project.category === selectedCategory
  })

  const currentCategoryLabel =
    CATEGORY_OPTIONS.find((c) => c.id === selectedCategory)?.label || 'All categories'

  return (
    <div className="w-full bg-white min-h-screen">
      {/* 1. Header with subtle grid background */}
      <section className="relative z-30 w-full pt-28 sm:pt-36 pb-12 sm:pb-16 bg-white overflow-visible">
        {/* Subtle geometric grid background pattern */}
        <div
          className="absolute inset-0 pointer-events-none overflow-hidden"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(0, 0, 0, 0.05) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(0, 0, 0, 0.05) 1px, transparent 1px)
            `,
            backgroundSize: '54px 54px',
            maskImage: 'linear-gradient(to bottom, black 65%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, black 65%, transparent 100%)',
          }}
        />

        <div className="relative z-10 max-w-[95vw] lg:max-w-[80vw] mx-auto px-6 sm:px-8 lg:px-12 w-full">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            {/* Title & Subtitle */}
            <div>
              <h1 className="font-bricolage text-3xl sm:text-4xl lg:text-[44px] font-bold text-dark tracking-tight leading-tight mb-2">
                Our Projects
              </h1>
              <p className="font-sans text-base sm:text-lg text-neutral-800 font-normal leading-snug">
                Discover our innovation solutions from <br className="hidden sm:inline" />
                <span className="text-primary font-bold">Rise Networks</span>
              </p>
            </div>

            {/* Category Dropdown Filter */}
            <div className="relative z-50 self-start sm:self-auto" ref={dropdownRef}>
              <button
                type="button"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="inline-flex items-center justify-between gap-4 px-4 py-2.5 rounded-lg border border-neutral-300/80 bg-neutral-50/70 hover:bg-white text-neutral-700 text-xs sm:text-sm font-medium transition-all shadow-2xs hover:border-neutral-400 cursor-pointer min-w-[170px]"
                aria-expanded={isDropdownOpen}
              >
                <span>{currentCategoryLabel}</span>
                <svg
                  className={`w-3.5 h-3.5 text-neutral-500 transition-transform duration-200 ${
                    isDropdownOpen ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-52 bg-white rounded-xl shadow-2xl border border-neutral-200 py-1.5 z-50 animate-in fade-in zoom-in-95 duration-150">
                  {CATEGORY_OPTIONS.map((opt) => (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => {
                        setSelectedCategory(opt.id)
                        setIsDropdownOpen(false)
                      }}
                      className={`w-full text-left px-4 py-2 text-xs sm:text-sm flex items-center justify-between hover:bg-neutral-50 transition-colors cursor-pointer ${
                        selectedCategory === opt.id
                          ? 'text-primary font-semibold bg-primary/5'
                          : 'text-neutral-700'
                      }`}
                    >
                      <span>{opt.label}</span>
                      {selectedCategory === opt.id && (
                        <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 2. Projects 2-Column Grid */}
      <section className="relative z-10 w-full pb-20 sm:pb-28 bg-white">
        <div className="max-w-[95vw] lg:max-w-[80vw] mx-auto px-6 sm:px-8 lg:px-12 w-full">
          {filteredProjects.length === 0 ? (
            <div className="text-center py-20 bg-neutral-50 rounded-3xl border border-dashed border-neutral-300">
              <p className="text-sm sm:text-base text-neutral-500">No projects found in this category.</p>
              <button
                onClick={() => setSelectedCategory('all')}
                className="mt-3 px-4 py-2 text-xs sm:text-sm font-semibold text-primary hover:underline cursor-pointer"
              >
                Reset to all categories
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-7 sm:gap-9">
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  className="bg-white rounded-[24px] sm:rounded-[28px] overflow-hidden border border-neutral-200/80 shadow-[0_4px_24px_-6px_rgba(0,0,0,0.06)] hover:shadow-[0_12px_36px_-8px_rgba(0,0,0,0.1)] transition-all duration-300 flex flex-col justify-between group"
                >
                  {/* Top Image or Solid Color Banner */}
                  <div className="w-full aspect-[1220/790] overflow-hidden bg-neutral-100 flex items-center justify-center">
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                        loading="lazy"
                      />
                    ) : (
                      <div
                        className="w-full h-full"
                        style={{ backgroundColor: project.solidColor || '#EE7747' }}
                      />
                    )}
                  </div>

                  {/* Card Content */}
                  <div className="p-6 sm:p-7 pt-5 sm:pt-6 flex flex-col flex-1 justify-between">
                    <div>
                      {/* Orange Uppercase Title */}
                      <h3 className="font-sans font-bold text-base sm:text-[17px] text-primary tracking-wide uppercase mb-3">
                        {project.title}
                      </h3>

                      {/* Description */}
                      <p className="font-sans text-xs sm:text-[13.5px] text-neutral-600 leading-relaxed font-normal mb-6">
                        {project.description}
                      </p>
                    </div>

                    {/* Bottom Row */}
                    <div className="flex items-center justify-between pt-2">
                      {/* Left: Health pill badge with heart icon */}
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EAF4FF] border border-[#CCE3FF] text-[#2F80ED] text-xs font-semibold">
                        <svg
                          className="w-3.5 h-3.5 text-[#2F80ED]"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                        </svg>
                        <span>{project.badgeLabel}</span>
                      </div>

                      {/* Right: Learn More Link with Orange Arrow */}
                      <Link
                        to={project.link}
                        className="group/link inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-neutral-800 hover:text-primary transition-colors cursor-pointer"
                      >
                        <span>Learn More</span>
                        <span className="text-primary text-base sm:text-lg font-bold transition-transform duration-200 group-hover/link:translate-x-1">
                          &rarr;
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* 3. Ready to Shape Africa's Tech Future CTA Card overlapping into Footer */}
      <CtaCard overlapFooter={true} />
    </div>
  )
}

export default Projects
