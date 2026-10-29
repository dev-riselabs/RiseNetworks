import React, { useState, useMemo, useEffect } from 'react'
import { PageHero } from '../components/ui/PageHero'

export interface VideoStory {
  id: string
  title: string
  programme: string
  category: string
  date: string
  location: string
  description: string
  thumbnail: string
  videoUrl?: string
  youtubeId?: string
  duration?: string
}

const VIDEOS_DATA: VideoStory[] = [
  // Page 1: Matches user design screenshot exactly
  {
    id: 'ai4elections-hackathon-2026',
    title: '#AI4Elections Hackathon 2026 Kick Off',
    programme: 'AI For Elections',
    category: 'Events',
    date: 'Nov 2026',
    location: 'Lagos, Nigeria',
    description:
      'Watch the official kick-off of the #AI4Elections Hackathon 2026 and hear from partners, mentors and participants of the Hackathon',
    thumbnail: '/images/photos_make_mation_festival.png',
    youtubeId: 'dQw4w9WgXcQ',
    duration: '4:25',
  },
  {
    id: 'round-table-talk-2023',
    title: 'The Round Table Talk Session 2023',
    programme: 'Youth Leadership',
    category: 'Event Highlights',
    date: 'Nov 2026',
    location: 'Lagos, Nigeria',
    description:
      'Highlight from our Round Table Talk Session, where industry experts and young designers shared insights on the future of UI/UX in Africa.',
    thumbnail: '/images/photos_make_mation_festival.png',
    youtubeId: 'dQw4w9WgXcQ',
    duration: '6:10',
  },
  {
    id: 'makemation-festival-2026',
    title: 'Makemation AI Tech Festivals 2026',
    programme: 'AI Ideathon',
    category: 'Event Highlights',
    date: 'Nov 2026',
    location: 'Lagos, Nigeria',
    description:
      'A look of the innovation, learning and creativity that defined the Makemation AI Tech Festivals.',
    thumbnail: '/images/photos_make_mation_festival.png',
    youtubeId: 'dQw4w9WgXcQ',
    duration: '8:45',
  },
  {
    id: 'passnownow-kokokah',
    title: 'Passnownow / Kokokah',
    programme: 'Passnownow',
    category: 'Event Highlights',
    date: 'Nov 2026',
    location: 'Lagos, Nigeria',
    description:
      'The journey to a smarter, more accessible education platform for African students.',
    thumbnail: '/images/photos_make_mation_festival.png',
    youtubeId: 'dQw4w9WgXcQ',
    duration: '5:18',
  },
  // Page 2 & 3 items for pagination support
  {
    id: 'unga-ai-summit',
    title: 'Rise Networks at the UN General Assembly Global Tech Forum',
    programme: 'Global Leadership',
    category: 'Events',
    date: 'Oct 2026',
    location: 'New York, USA',
    description:
      'Keynote addresses and multilateral dialogue sessions championing African AI sovereignty at the United Nations General Assembly.',
    thumbnail: '/images/press_UNGA.png',
    youtubeId: 'dQw4w9WgXcQ',
    duration: '12:04',
  },
  {
    id: 'ai-townhall-education',
    title: 'National Townhall on AI in Secondary and Tertiary Education',
    programme: 'AI for Education',
    category: 'Interviews',
    date: 'Sep 2026',
    location: 'Abuja, Nigeria',
    description:
      'Policymakers, vice-chancellors, and student union heads debate the national blueprint for generative AI adoption in academic curricula.',
    thumbnail: '/images/townhall_ai_edu_img.png',
    youtubeId: 'dQw4w9WgXcQ',
    duration: '9:30',
  },
  {
    id: 'rise-partners-summit',
    title: 'Rise Partner Network Annual Innovation Showcase',
    programme: 'Partnerships',
    category: 'Event Highlights',
    date: 'Aug 2026',
    location: 'Kigali, Rwanda',
    description:
      'Pan-African tech conglomerates and development finance institutions pledge collaborative investments in young African innovators.',
    thumbnail: '/images/photos_rise_partners.png',
    youtubeId: 'dQw4w9WgXcQ',
    duration: '7:50',
  },
  {
    id: 'ai-for-industries',
    title: 'AI for Industries: Transforming Agriculture and Health',
    programme: 'Industry Innovation',
    category: 'Interviews',
    date: 'Jul 2026',
    location: 'Nairobi, Kenya',
    description:
      'Spotlight on grassroots artificial intelligence deployers pioneering real-time crop disease diagnosis and telemedicine diagnostic agents.',
    thumbnail: '/images/events_ai_festival.png',
    youtubeId: 'dQw4w9WgXcQ',
    duration: '11:15',
  },
]

const PROGRAMMES_OPTIONS = [
  'All Programmes',
  'AI For Elections',
  'Youth Leadership',
  'AI Ideathon',
  'Passnownow',
  'Global Leadership',
  'AI for Education',
]

const CATEGORIES_OPTIONS = [
  'All Categories',
  'Events',
  'Event Highlights',
  'Interviews',
]

const ITEMS_PER_PAGE = 4

export const Videos: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedProgramme, setSelectedProgramme] = useState('All Programmes')
  const [selectedCategory, setSelectedCategory] = useState('All Categories')
  const [currentPage, setCurrentPage] = useState(1)
  const [activeVideo, setActiveVideo] = useState<VideoStory | null>(null)

  // Filter videos
  const filteredVideos = useMemo(() => {
    return VIDEOS_DATA.filter((video) => {
      // Search text
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase()
        const matchesTitle = video.title.toLowerCase().includes(q)
        const matchesDesc = video.description.toLowerCase().includes(q)
        const matchesProg = video.programme.toLowerCase().includes(q)
        if (!matchesTitle && !matchesDesc && !matchesProg) return false
      }

      // Programme filter
      if (selectedProgramme !== 'All Programmes' && video.programme !== selectedProgramme) {
        return false
      }

      // Category filter
      if (selectedCategory !== 'All Categories' && video.category !== selectedCategory) {
        return false
      }

      return true
    })
  }, [searchQuery, selectedProgramme, selectedCategory])

  const totalPages = Math.max(1, Math.ceil(filteredVideos.length / ITEMS_PER_PAGE))

  // Reset to page 1 on filter changes
  useEffect(() => {
    setCurrentPage(1)
  }, [searchQuery, selectedProgramme, selectedCategory])

  // Current page items
  const paginatedVideos = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
    return filteredVideos.slice(startIndex, startIndex + ITEMS_PER_PAGE)
  }, [filteredVideos, currentPage])

  // Pagination handler
  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) return
    setCurrentPage(page)
    const gridSection = document.getElementById('videos-grid-section')
    if (gridSection) {
      gridSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  // Close modal on Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveVideo(null)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  // Lock body scroll when modal open
  useEffect(() => {
    if (activeVideo) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [activeVideo])

  return (
    <div className="bg-[#FAF9F5]/40 min-h-screen">
      
      {/* 1. Hero Section matching screenshot */}
      <PageHero
        title="Watch Our Stories in Action"
        subtitle="From event highlights to powerful interviews, explore the moments that showcase our work, partnerships and impact across Africa."
      />

      {/* 2. Main Videos Content Section */}
      <section id="videos-grid-section" className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Controls Bar: Search on Left, 2 Dropdowns on Right (Matches Screenshot) */}
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-10">
            
            {/* Search Input */}
            <div className="relative w-full md:w-[280px] lg:w-[320px]">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-neutral-400">
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search videos..."
                className="w-full pl-9 pr-4 py-2 sm:py-2.5 text-xs sm:text-sm bg-white border border-neutral-300 rounded-lg text-dark placeholder-neutral-400 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all shadow-2xs"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-neutral-400 hover:text-dark text-xs"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Filter Dropdowns */}
            <div className="flex items-center gap-3">
              {/* All Programmes Dropdown */}
              <div className="relative flex-1 sm:flex-none">
                <select
                  value={selectedProgramme}
                  onChange={(e) => setSelectedProgramme(e.target.value)}
                  className="appearance-none w-full sm:w-auto bg-white border border-neutral-300 rounded-lg px-4 py-2 sm:py-2.5 pr-8 text-xs sm:text-sm text-neutral-700 font-medium focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all shadow-2xs cursor-pointer"
                >
                  {PROGRAMMES_OPTIONS.map((prog) => (
                    <option key={prog} value={prog}>
                      {prog}
                    </option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-0 pr-2.5 flex items-center pointer-events-none text-neutral-400">
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>

              {/* All Categories Dropdown */}
              <div className="relative flex-1 sm:flex-none">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="appearance-none w-full sm:w-auto bg-white border border-neutral-300 rounded-lg px-4 py-2 sm:py-2.5 pr-8 text-xs sm:text-sm text-neutral-700 font-medium focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all shadow-2xs cursor-pointer"
                >
                  {CATEGORIES_OPTIONS.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-0 pr-2.5 flex items-center pointer-events-none text-neutral-400">
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>

          </div>

          {/* 3. 2-Column Grid of Video Cards (Matches Screenshot 2x2 Layout) */}
          {filteredVideos.length === 0 ? (
            <div className="text-center py-20 bg-white rounded-3xl border border-neutral-200">
              <p className="text-base text-neutral-600 mb-2">No videos found matching your filters.</p>
              <button
                type="button"
                onClick={() => {
                  setSearchQuery('')
                  setSelectedProgramme('All Programmes')
                  setSelectedCategory('All Categories')
                }}
                className="text-xs text-primary font-semibold hover:underline"
              >
                Reset filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {paginatedVideos.map((video) => (
                <div
                  key={video.id}
                  className="group bg-white rounded-[24px] border border-neutral-200/90 overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 flex flex-col"
                >
                  
                  {/* Thumbnail Container with Play Button Overlay */}
                  <div
                    onClick={() => setActiveVideo(video)}
                    className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-100 cursor-pointer"
                  >
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-full object-cover block group-hover:scale-[1.03] transition-transform duration-500 ease-out"
                      loading="lazy"
                    />

                    {/* Gradient Overlay for Bottom */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                    {/* Circular Play Button in Bottom-Left (Matches Screenshot) */}
                    <div className="absolute bottom-4 left-4 z-10 flex items-center gap-2">
                      <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-black/75 backdrop-blur-xs border-2 border-white text-white flex items-center justify-center shadow-lg group-hover:bg-primary group-hover:scale-105 transition-all duration-300">
                        <svg className="w-5 h-5 fill-current ml-0.5" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                      {video.duration && (
                        <span className="text-[11px] font-semibold text-white/90 bg-black/60 px-2 py-0.5 rounded-md backdrop-blur-xs">
                          {video.duration}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 sm:p-7 flex flex-col flex-1">
                    
                    {/* Outline Category Badge in Brand Orange #EE7747 */}
                    <div className="mb-3">
                      <span className="inline-block text-xs font-semibold px-3 py-0.5 rounded-full border border-primary text-primary">
                        {video.category}
                      </span>
                    </div>

                    {/* Title in Brand Primary Orange #EE7747 */}
                    <h3
                      onClick={() => setActiveVideo(video)}
                      className="font-sans text-lg sm:text-[20px] font-bold text-primary tracking-tight leading-snug mb-3 cursor-pointer hover:opacity-90"
                    >
                      {video.title}
                    </h3>

                    {/* Metadata Row: Date & Location */}
                    <div className="flex items-center gap-4 text-xs text-neutral-600 font-medium mb-3">
                      <div className="flex items-center gap-1.5">
                        <svg className="w-3.5 h-3.5 text-neutral-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span>{video.date}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <svg className="w-3.5 h-3.5 text-neutral-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span>{video.location}</span>
                      </div>
                    </div>

                    {/* Description Paragraph */}
                    <p className="font-sans text-xs sm:text-sm text-neutral-600 font-normal leading-relaxed">
                      {video.description}
                    </p>

                  </div>

                </div>
              ))}
            </div>
          )}

          {/* 4. Centered Pagination (Matches User Screenshot: < 1 2 3 >) */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-2 mt-12 sm:mt-16">
              {/* Prev Button */}
              <button
                type="button"
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                aria-label="Previous page"
                className={`w-7 h-7 sm:w-8 sm:h-8 rounded-md border flex items-center justify-center text-xs transition-colors ${
                  currentPage === 1
                    ? 'border-neutral-200 text-neutral-300 cursor-not-allowed'
                    : 'border-neutral-200 text-dark hover:border-neutral-400 cursor-pointer'
                }`}
              >
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              {/* Page Number Buttons */}
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => {
                const isActive = pageNum === currentPage
                return (
                  <button
                    key={pageNum}
                    type="button"
                    onClick={() => handlePageChange(pageNum)}
                    className={`w-7 h-7 sm:w-8 sm:h-8 rounded-md text-xs font-semibold flex items-center justify-center transition-all cursor-pointer ${
                      isActive
                        ? 'bg-primary text-white shadow-xs'
                        : 'text-neutral-600 hover:text-dark hover:bg-neutral-100'
                    }`}
                  >
                    {pageNum}
                  </button>
                )
              })}

              {/* Next Button */}
              <button
                type="button"
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                aria-label="Next page"
                className={`w-7 h-7 sm:w-8 sm:h-8 rounded-md border flex items-center justify-center text-xs transition-colors ${
                  currentPage === totalPages
                    ? 'border-neutral-200 text-neutral-300 cursor-not-allowed'
                    : 'border-neutral-200 text-dark hover:border-neutral-400 cursor-pointer'
                }`}
              >
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          )}

        </div>
      </section>

      {/* 5. Video Player Modal */}
      {activeVideo && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={() => setActiveVideo(null)}
        >
          <div
            className="relative w-full max-w-4xl bg-neutral-900 rounded-2xl overflow-hidden shadow-2xl border border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              type="button"
              onClick={() => setActiveVideo(null)}
              className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-black/70 hover:bg-white/20 text-white flex items-center justify-center transition-all cursor-pointer"
              aria-label="Close video player"
            >
              ✕
            </button>

            {/* Video Player Box */}
            <div className="relative aspect-video w-full bg-black flex items-center justify-center">
              {activeVideo.youtubeId ? (
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${activeVideo.youtubeId}?autoplay=1`}
                  title={activeVideo.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <div className="text-center p-8 text-white">
                  <p className="text-lg font-semibold mb-2">{activeVideo.title}</p>
                  <p className="text-xs text-neutral-400">Stream loading...</p>
                </div>
              )}
            </div>

            {/* Video Meta Info */}
            <div className="p-6 bg-neutral-900 text-white">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full border border-primary text-primary">
                  {activeVideo.category}
                </span>
                <span className="text-xs text-neutral-400">
                  {activeVideo.date} • {activeVideo.location}
                </span>
              </div>
              <h3 className="font-sans text-lg sm:text-xl font-bold text-white mb-2">
                {activeVideo.title}
              </h3>
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                {activeVideo.description}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* NO CTA CARD on this page as per explicit instructions! */}
    </div>
  )
}

export default Videos
