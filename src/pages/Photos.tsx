import React, { useState, useMemo, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { PageHero } from '../components/ui/PageHero'
import { ALBUMS_DATA } from '../data/albumsData'

const YEAR_OPTIONS = ['All Years', '2026', '2025', '2024', '2023']

const PROGRAMME_OPTIONS = [
  'All Programmes',
  'AI4Elections',
  'Makemation AI Tech',
  'iLove Africa Youth',
  'PassNowNow / Kokokah',
  'Rise Partners & Ecosystem',
  'Governance & Policy',
  'AI Research Labs',
  'Design & UI/UX',
]

const EVENT_TYPE_OPTIONS = [
  'All Event Types',
  'Hackathon',
  'Festival',
  'Youth Program',
  'Round Table',
  'Partner Events',
  'Program Launch',
  'Townhall',
]

const ITEMS_PER_PAGE = 6

export const Photos: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedYear, setSelectedYear] = useState('All Years')
  const [selectedProgramme, setSelectedProgramme] = useState('All Programmes')
  const [selectedEventType, setSelectedEventType] = useState('All Event Types')
  const [currentPage, setCurrentPage] = useState(1)

  // Filtered albums
  const filteredAlbums = useMemo(() => {
    return ALBUMS_DATA.filter((album) => {
      // Search text filter
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase()
        const matchesTitle = album.title.toLowerCase().includes(q)
        const matchesLocation = album.location.toLowerCase().includes(q)
        const matchesProg = album.programme.toLowerCase().includes(q)
        const matchesEvent = album.eventType.toLowerCase().includes(q)
        if (!matchesTitle && !matchesLocation && !matchesProg && !matchesEvent) {
          return false
        }
      }

      // Year filter
      if (selectedYear !== 'All Years' && album.year !== selectedYear) {
        return false
      }

      // Programme filter
      if (selectedProgramme !== 'All Programmes' && album.programme !== selectedProgramme) {
        return false
      }

      // Event Type filter
      if (selectedEventType !== 'All Event Types' && album.eventType !== selectedEventType) {
        return false
      }

      return true
    })
  }, [searchQuery, selectedYear, selectedProgramme, selectedEventType])

  // Total pages
  const totalPages = Math.max(1, Math.ceil(filteredAlbums.length / ITEMS_PER_PAGE))

  // Reset page when filters change
  useEffect(() => {
    setCurrentPage(1)
  }, [searchQuery, selectedYear, selectedProgramme, selectedEventType])

  // Current page items
  const paginatedAlbums = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
    return filteredAlbums.slice(startIndex, startIndex + ITEMS_PER_PAGE)
  }, [filteredAlbums, currentPage])

  // Handle page navigation
  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) return
    setCurrentPage(page)
    const gallerySection = document.getElementById('gallery-section')
    if (gallerySection) {
      gallerySection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="w-full bg-white min-h-screen">
      {/* 1. Page Hero: Matches Reference Design */}
      <PageHero
        title="Moments That Show Our Impact"
        subtitle="Explore our photo gallery to see the people, events and programmes driving change across Africa."
        bgImage="/images/page_hero_bg.png"
      />

      {/* 2. Gallery Section: Matches User's Design Screenshot */}
      <section id="gallery-section" className="w-full pt-8 sm:pt-12 pb-20 sm:pb-28">
        <div className="max-w-[95vw] lg:max-w-[80vw] mx-auto px-6 sm:px-8 lg:px-12">
          
          {/* Top Controls Row: Search Input on Left, 3 Dropdowns on Right */}
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-8 sm:mb-10">
            {/* Search Input: Matches Screenshot "Search candidate name..." */}
            <div className="relative w-full md:w-auto">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-neutral-400">
                <svg
                  className="w-3.5 h-3.5"
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
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search candidate name..."
                className="w-full md:w-64 pl-9 pr-8 py-2 rounded-lg border border-neutral-300/80 bg-white text-xs sm:text-sm text-dark placeholder:text-neutral-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute inset-y-0 right-0 pr-2.5 flex items-center text-neutral-400 hover:text-dark cursor-pointer"
                  title="Clear search"
                >
                  <svg className="w-3.5 h-3.5" viewBox="0 0 20 20" fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              )}
            </div>

            {/* Right Dropdown Filters: All Years, All Programmes, All Event Types */}
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
              {/* Dropdown 1: All Years */}
              <div className="relative">
                <select
                  value={selectedYear}
                  onChange={(e) => setSelectedYear(e.target.value)}
                  className="appearance-none bg-white border border-neutral-300/80 rounded-lg pl-3.5 pr-8 py-2 text-xs sm:text-sm text-dark font-normal focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary cursor-pointer transition-all shadow-2xs"
                >
                  {YEAR_OPTIONS.map((yr) => (
                    <option key={yr} value={yr}>
                      {yr}
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2.5 text-neutral-400">
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>

              {/* Dropdown 2: All Programmes */}
              <div className="relative">
                <select
                  value={selectedProgramme}
                  onChange={(e) => setSelectedProgramme(e.target.value)}
                  className="appearance-none bg-white border border-neutral-300/80 rounded-lg pl-3.5 pr-8 py-2 text-xs sm:text-sm text-dark font-normal focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary cursor-pointer transition-all shadow-2xs"
                >
                  {PROGRAMME_OPTIONS.map((prog) => (
                    <option key={prog} value={prog}>
                      {prog}
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2.5 text-neutral-400">
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>

              {/* Dropdown 3: All Event Types */}
              <div className="relative">
                <select
                  value={selectedEventType}
                  onChange={(e) => setSelectedEventType(e.target.value)}
                  className="appearance-none bg-white border border-neutral-300/80 rounded-lg pl-3.5 pr-8 py-2 text-xs sm:text-sm text-dark font-normal focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary cursor-pointer transition-all shadow-2xs"
                >
                  {EVENT_TYPE_OPTIONS.map((ev) => (
                    <option key={ev} value={ev}>
                      {ev}
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2.5 text-neutral-400">
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* 2-Column Album Cards Grid (Matching User Screenshot) */}
          {paginatedAlbums.length === 0 ? (
            <div className="w-full bg-neutral-50 rounded-3xl border border-neutral-200 p-12 text-center max-w-md mx-auto my-8">
              <p className="font-sans text-base font-medium text-dark mb-2">No moments found</p>
              <p className="text-xs sm:text-sm text-muted mb-4">
                Try adjusting your search query or dropdown filters.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSearchQuery('')
                  setSelectedYear('All Years')
                  setSelectedProgramme('All Programmes')
                  setSelectedEventType('All Event Types')
                }}
                className="px-5 py-2 rounded-full bg-primary text-white text-xs font-semibold cursor-pointer"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
              {paginatedAlbums.map((album) => (
                <Link
                  key={album.id}
                  to={`/photos/${album.id}`}
                  className="group bg-white rounded-[24px] sm:rounded-[30px] border border-neutral-200/90 shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden flex flex-col justify-between cursor-pointer"
                >
                  {/* Top Image: Note user note that images already have rounded top */}
                  <div className="w-full overflow-hidden bg-white">
                    <img
                      src={album.image}
                      alt={album.title}
                      className="w-full h-auto object-cover block group-hover:scale-[1.015] transition-transform duration-300 ease-out"
                      loading="lazy"
                    />
                  </div>

                  {/* Card Content Details */}
                  <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between">
                    <div>
                      {/* Album Title in Brand Primary Orange #EE7747 */}
                      <h3 className="font-sans text-lg sm:text-[21px] font-bold text-primary tracking-tight leading-snug mb-3.5">
                        {album.title}
                      </h3>

                      {/* Date Row with Calendar Icon */}
                      <div className="flex items-center gap-2.5 text-xs sm:text-sm text-dark font-normal mb-2">
                        <svg
                          className="w-4 h-4 text-dark shrink-0"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.8}
                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                        <span>{album.date}</span>
                      </div>

                      {/* Location Row with Pin Icon */}
                      <div className="flex items-center gap-2.5 text-xs sm:text-sm text-dark font-normal">
                        <svg
                          className="w-4 h-4 text-dark shrink-0"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.8}
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.8}
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                        <span>{album.location}</span>
                      </div>
                    </div>

                    {/* Bottom Row: X photos on Left, View -> on Right */}
                    <div className="mt-8 pt-3 border-t border-neutral-100 flex items-center justify-between">
                      {/* Left: Gallery Icon + Photo count */}
                      <div className="flex items-center gap-2 text-xs sm:text-sm text-dark font-medium">
                        <svg
                          className="w-4 h-4 sm:w-5 sm:h-5 text-dark"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.7}
                            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                        <span>{album.photoCount} photos</span>
                      </div>

                      {/* Right: View with Orange Arrow */}
                      <span className="flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-dark group-hover:text-primary transition-colors">
                        <span>View</span>
                        <svg
                          className="w-4 h-4 text-primary transition-transform duration-200 group-hover:translate-x-1"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}

          {/* Centered Pagination (Matches User Screenshot) */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-2 mt-12 sm:mt-16">
              {/* Previous Page Arrow */}
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
                const isActive = currentPage === pageNum
                return (
                  <button
                    key={pageNum}
                    type="button"
                    onClick={() => handlePageChange(pageNum)}
                    className={`w-7 h-7 sm:w-8 sm:h-8 rounded-md text-xs font-semibold flex items-center justify-center transition-all ${
                      isActive
                        ? 'bg-primary text-white shadow-xs'
                        : 'text-neutral-600 hover:text-dark hover:bg-neutral-100 cursor-pointer'
                    }`}
                  >
                    {pageNum}
                  </button>
                )
              })}

              {/* Next Page Arrow */}
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
    </div>
  )
}

export default Photos
