import React, { useState } from 'react'
import { PageHero } from '../components/ui/PageHero'

type ProjectCategory =
  | 'all'
  | 'health-medtech'
  | 'ai-governance'
  | 'platforms-intelligence'
  | 'research'
  | 'events-forums'

interface ProjectItem {
  id: string
  title: string
  subtitle: string
  tag: string
  category: ProjectCategory
  description: string
  image: string
  tagColor: string
}

const CATEGORIES: { id: ProjectCategory; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'health-medtech', label: 'Health & MedTech' },
  { id: 'ai-governance', label: 'AI & Governance' },
  { id: 'platforms-intelligence', label: 'Platforms & Intelligence' },
  { id: 'research', label: 'Research' },
  { id: 'events-forums', label: 'Events & Forums' },
]

const ALL_PROJECTS: ProjectItem[] = [
  {
    id: 'helchetics',
    title: 'Helchetics',
    subtitle: 'Portable Early Health Detection System',
    tag: 'Health & MedTech',
    category: 'health-medtech',
    description:
      'A non-invasive health monitoring device using ECG and temperature sensors to detect irregular health patterns in real time and support early disease identification.',
    image: '/images/projects_git_github_img.png',
    tagColor: 'bg-[#E8F8F5] text-[#16A085]',
  },
  {
    id: 'shedetectit-bra',
    title: 'SheDetectIt Bra',
    subtitle: 'Wearable Breast Cancer Early Detection Prototype',
    tag: 'Health & MedTech',
    category: 'health-medtech',
    description:
      'A smart undergarment prototype designed to support early breast cancer detection through embedded temperature and ultrasonic sensors.',
    image: '/images/projects_git_github_img.png',
    tagColor: 'bg-[#E8F8F5] text-[#16A085]',
  },
  {
    id: 'ai-industries-townhall',
    title: 'AI for Industries & Sectors Townhall Series',
    subtitle: 'Continental AI Knowledge Exchange Platform',
    tag: 'Events & Forums',
    category: 'events-forums',
    description:
      'A multi-sector townhall series exploring how AI can transform Africa’s industries through dialogue, collaboration and practical insights.',
    image: '/images/projects_git_github_img.png',
    tagColor: 'bg-[#FBEEE6] text-[#D35400]',
  },
  {
    id: 'her-safety-first',
    title: 'Her Safety First (HSF)',
    subtitle: 'AI-Driven GBV Prevention Ecosystem',
    tag: 'AI & Governance',
    category: 'ai-governance',
    description:
      'A prevention-focused initiative using AI, data analytics and community systems to identify, predict and reduce gender-based violence risks before they escalate.',
    image: '/images/projects_git_github_img.png',
    tagColor: 'bg-[#F4ECF7] text-[#8E44AD]',
  },
  {
    id: 'cerebral-bci',
    title: 'Cerebral BCI',
    subtitle: 'Brain-Computer Interface Prototype',
    tag: 'Health & MedTech',
    category: 'health-medtech',
    description:
      'A system that captures neural signals and translates them into commands for external devices, supporting assistive technology and human-machine interaction.',
    image: '/images/projects_git_github_img.png',
    tagColor: 'bg-[#E8F8F5] text-[#16A085]',
  },
  {
    id: 'tetaworks',
    title: 'TetaWorks',
    subtitle: 'AI-Powered Workforce Intelligence Platform',
    tag: 'Platforms & Intelligence',
    category: 'platforms-intelligence',
    description:
      'A people analytics and workforce optimization platform that transforms HR and performance data into clear, actionable organizational insights.',
    image: '/images/projects_tetaworks.png',
    tagColor: 'bg-[#EBF5FB] text-[#2980B9]',
  },
  {
    id: 'energylytics-africa',
    title: 'Energylytics Africa',
    subtitle: 'Renewable Energy Intelligence Company',
    tag: 'Platforms & Intelligence',
    category: 'platforms-intelligence',
    description:
      'A data and AI-powered renewable energy intelligence platform accelerating Africa’s clean energy transition through analytics, modelling and policy insights.',
    image: '/images/project_energylytics_africa.png',
    tagColor: 'bg-[#EBF5FB] text-[#2980B9]',
  },
  {
    id: 'chydap',
    title: 'CHYDAP',
    subtitle: 'Children & Youth Digital Accountability Platform',
    tag: 'Research',
    category: 'research',
    description:
      'A research initiative documenting how Big Tech and AI systems impact Nigerian children and youth, generating evidence for accountability and policy reform.',
    image: '/images/projects_git_github_img.png',
    tagColor: 'bg-[#FEF9E7] text-[#B7950B]',
  },
  {
    id: 'kokokah',
    title: 'Kokokah',
    subtitle: 'AI-Enhanced Learning & Financial Platform',
    tag: 'Platforms & Intelligence',
    category: 'platforms-intelligence',
    description:
      'A mobile-first platform combining curriculum-based learning, AI-powered exam preparation and micro-savings tools to improve education access and finances.',
    image: '/images/projects_git_github_img.png',
    tagColor: 'bg-[#EBF5FB] text-[#2980B9]',
  },
  {
    id: 'lag-dis',
    title: 'LAG-DIS',
    subtitle: 'AI-Powered Governance Intelligence Archive',
    tag: 'AI & Governance',
    category: 'ai-governance',
    description:
      'A centralized AI-enabled archive consolidating Lagos State’s projects, reforms and policy data into a searchable system for transparency and institutional continuity.',
    image: '/images/projects_git_github_img.png',
    tagColor: 'bg-[#F4ECF7] text-[#8E44AD]',
  },
  {
    id: 'africanext-forum',
    title: 'AfricaNext Forum @ UNGA',
    subtitle: 'Africa’s Global Policy & Innovation Forum',
    tag: 'Events & Forums',
    category: 'events-forums',
    description:
      'An annual high-level convening during UNGA spotlighting African-led solutions, youth leadership, innovation and cultural influence on the global stage.',
    image: '/images/project_africa_next_img.png',
    tagColor: 'bg-[#FBEEE6] text-[#D35400]',
  },
  {
    id: 'abuja-tech-festival',
    title: 'Abuja International Technology Festival (AITF)',
    subtitle: 'FCT’s Flagship Technology Festival',
    tag: 'Events & Forums',
    category: 'events-forums',
    description:
      'A large-scale technology and innovation festival empowering thousands of young people with future-ready digital skills while positioning Abuja as an innovation hub.',
    image: '/images/projects_git_github_img.png',
    tagColor: 'bg-[#FBEEE6] text-[#D35400]',
  },
  {
    id: 'ai4traffic-control',
    title: 'AI4Traffic Control',
    subtitle: 'AI-Based Traffic Management System',
    tag: 'AI & Governance',
    category: 'ai-governance',
    description:
      'A machine learning-driven traffic system designed to predict congestion patterns and optimize traffic flow for smarter urban mobility.',
    image: '/images/projects_git_github_img.png',
    tagColor: 'bg-[#F4ECF7] text-[#8E44AD]',
  },
]

export const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all')
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null)

  const filteredProjects = ALL_PROJECTS.filter((p) => {
    return activeCategory === 'all' || p.category === activeCategory
  })

  return (
    <div className="w-full bg-white">
      {/* 1. Hero Section matching user screenshot */}
      <PageHero
        title="Our Projects"
        subtitle="AI-driven systems, research platforms, policy initiatives and global convenings to advance technology across Africa."
        bgImage="/images/page_hero_bg.png"
      />

      {/* 2. Category Filter Pills */}
      <section className="w-full pt-10 sm:pt-14 pb-10 bg-white">
        <div className="max-w-[80vw] mx-auto px-6 sm:px-8 lg:px-12 w-full">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 w-full">
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.id
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveCategory(cat.id)}
                  className={`w-full py-3 px-3 rounded-full text-xs sm:text-sm font-medium transition-colors cursor-pointer text-center flex items-center justify-center ${
                    isActive
                      ? 'bg-primary text-white shadow-2xs'
                      : 'bg-[#F5F5F5] hover:bg-[#EBEBEB] text-neutral-700'
                  }`}
                >
                  {cat.label}
                </button>
              )
            })}
          </div>
        </div>
      </section>

      {/* 3. Projects Grid matching screenshot */}
      <section className="w-full pb-24 sm:pb-32 bg-white">
        <div className="max-w-[80vw] mx-auto px-6 sm:px-8 lg:px-12 w-full">
          {filteredProjects.length === 0 ? (
            <div className="text-center py-20 bg-[#FAFAFA] rounded-3xl border border-dashed border-neutral-300">
              <p className="text-base text-neutral-500">No projects in this category currently.</p>
              <button
                onClick={() => setActiveCategory('all')}
                className="mt-4 px-5 py-2 text-sm text-primary font-medium hover:underline cursor-pointer"
              >
                View all projects
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  className="bg-[#FAFAFA] rounded-[24px] sm:rounded-[28px] overflow-hidden border border-neutral-200/60 hover:border-neutral-300 transition-colors flex flex-col justify-between"
                >
                  <div>
                    {/* Top Image (image already has rounded-top) */}
                    <div className="w-full aspect-[16/10] overflow-hidden bg-white">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover select-none"
                      />
                    </div>

                    {/* Content */}
                    <div className="p-6 sm:p-7">
                      {/* Tag Badge */}
                      <span
                        className={`inline-block px-3 py-1 rounded-full text-[11px] font-medium mb-3.5 ${project.tagColor}`}
                      >
                        {project.tag}
                      </span>

                      {/* Main Title */}
                      <h3 className="font-bricolage text-xl sm:text-[22px] font-semibold text-dark tracking-tight leading-snug mb-1">
                        {project.title}
                      </h3>

                      {/* Subtitle in Orange */}
                      <p className="font-sans text-xs sm:text-sm font-medium text-primary mb-3.5 leading-snug">
                        {project.subtitle}
                      </p>

                      {/* Description */}
                      <p className="font-sans text-xs sm:text-sm text-neutral-600 leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                  </div>

                  {/* Bottom Action Button */}
                  <div className="px-6 sm:px-7 pb-6 sm:pb-7 pt-2">
                    <button
                      type="button"
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-primary text-white text-xs sm:text-sm font-medium cursor-pointer"
                    >
                      <span>View Project</span>
                      <span>&rarr;</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* 4. Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-in fade-in duration-200">
          <div className="bg-white rounded-[32px] max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-neutral-100 relative max-h-[90vh] overflow-y-auto">
            {/* Close button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-6 right-6 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-neutral-600 flex items-center justify-center transition-colors cursor-pointer"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Header */}
            <div className="mb-4 pr-8">
              <span
                className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3 ${selectedProject.tagColor}`}
              >
                {selectedProject.tag}
              </span>
              <h3 className="font-bricolage text-2xl font-bold text-dark mb-1">
                {selectedProject.title}
              </h3>
              <p className="font-sans text-sm font-medium text-primary">
                {selectedProject.subtitle}
              </p>
            </div>

            {/* Image Preview */}
            <div className="rounded-2xl overflow-hidden aspect-[16/10] mb-6 bg-slate-100">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Overview */}
            <div className="space-y-4 text-sm text-neutral-600 mb-6 leading-relaxed">
              <p>{selectedProject.description}</p>
            </div>

            {/* Close / Action button */}
            <div className="flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="px-6 py-2.5 rounded-full bg-neutral-100 hover:bg-neutral-200 text-dark text-sm font-medium transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Projects
