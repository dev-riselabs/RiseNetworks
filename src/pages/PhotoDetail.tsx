import React, { useState, useEffect, useCallback } from 'react'
import { useParams, Link } from 'react-router-dom'
import { getAlbumById, type AlbumPhoto } from '../data/albumsData'

const INITIAL_DISPLAY_COUNT = 9
const LOAD_MORE_STEP = 6

export const PhotoDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const album = getAlbumById(id || '')

  // State for load more
  const [visibleCount, setVisibleCount] = useState<number>(INITIAL_DISPLAY_COUNT)
  const [isLoadingMore, setIsLoadingMore] = useState<boolean>(false)

  // Lightbox modal state
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  // Reset display count when album id changes
  useEffect(() => {
    setVisibleCount(INITIAL_DISPLAY_COUNT)
    setLightboxIndex(null)
    window.scrollTo(0, 0)
  }, [id])

  // Handle Load More
  const handleLoadMore = () => {
    if (!album) return
    setIsLoadingMore(true)
    setTimeout(() => {
      setVisibleCount((prev) => Math.min(prev + LOAD_MORE_STEP, album.photos.length))
      setIsLoadingMore(false)
    }, 250)
  }

  // Keyboard navigation for Lightbox
  const handlePrevPhoto = useCallback(() => {
    if (!album || lightboxIndex === null) return
    setLightboxIndex((prev) => (prev! > 0 ? prev! - 1 : album.photos.length - 1))
  }, [album, lightboxIndex])

  const handleNextPhoto = useCallback(() => {
    if (!album || lightboxIndex === null) return
    setLightboxIndex((prev) => (prev! < album.photos.length - 1 ? prev! + 1 : 0))
  }, [album, lightboxIndex])

  const handleCloseLightbox = useCallback(() => {
    setLightboxIndex(null)
  }, [])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return
      if (e.key === 'Escape') handleCloseLightbox()
      if (e.key === 'ArrowLeft') handlePrevPhoto()
      if (e.key === 'ArrowRight') handleNextPhoto()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [lightboxIndex, handleCloseLightbox, handlePrevPhoto, handleNextPhoto])

  // Prevent background scroll when lightbox is open
  useEffect(() => {
    if (lightboxIndex !== null) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [lightboxIndex])

  // If album is not found
  if (!album) {
    return (
      <div className="w-full min-h-screen bg-white pt-40 pb-24 flex flex-col items-center justify-center text-center px-6">
        <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-4">
          <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
        </div>
        <h1 className="font-bricolage text-3xl font-bold text-dark mb-2">Album Not Found</h1>
        <p className="text-sm text-muted max-w-md mb-6">
          The photo album you are looking for does not exist or has been relocated.
        </p>
        <Link
          to="/photos"
          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-primary text-white text-sm font-semibold hover:bg-primary-hover transition-colors"
        >
          <span>← Back to All Albums</span>
        </Link>
      </div>
    )
  }

  const visiblePhotos = album.photos.slice(0, visibleCount)
  const hasMore = visibleCount < album.photos.length
  const currentPhoto: AlbumPhoto | null =
    lightboxIndex !== null ? album.photos[lightboxIndex] : null

  return (
    <div className="w-full bg-white min-h-screen">
      {/* 1. Header & Album Intro Section */}
      <section className="relative z-10 w-full pt-32 sm:pt-40 pb-8 sm:pb-12 bg-white border-b border-neutral-100">
        <div className="max-w-[95vw] lg:max-w-[80vw] mx-auto px-6 sm:px-8 lg:px-12">
          {/* Back Navigation Button */}
          <div className="mb-6">
            <Link
              to="/photos"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-muted hover:text-primary transition-colors group cursor-pointer"
            >
              <svg
                className="w-4 h-4 transition-transform group-hover:-translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              <span>Back to all albums</span>
            </Link>
          </div>

          {/* Title and Metadata */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="max-w-3xl">
              {/* Badges */}
              <div className="flex flex-wrap items-center gap-2.5 mb-3">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary">
                  {album.programme}
                </span>
                <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-neutral-100 text-neutral-700">
                  {album.eventType}
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-neutral-100 text-neutral-700">
                  <svg className="w-3.5 h-3.5 text-neutral-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.8}
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <span>{album.photos.length} photos</span>
                </span>
              </div>

              {/* Title */}
              <h1 className="font-bricolage text-3xl sm:text-4xl lg:text-5xl font-medium text-dark tracking-tight leading-tight mb-3">
                {album.title}
              </h1>

              {/* Location & Date */}
              <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-muted font-medium mb-4">
                <div className="flex items-center gap-1.5">
                  <svg className="w-4 h-4 text-primary shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.8}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <span>{album.date}</span>
                </div>
                <span className="text-neutral-300">•</span>
                <div className="flex items-center gap-1.5">
                  <svg className="w-4 h-4 text-primary shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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

              {/* Description */}
              <p className="font-sans text-xs sm:text-sm md:text-base text-muted font-normal leading-relaxed">
                {album.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Photo Gallery 3-Column Grid (Matches Wireframe Screenshot) */}
      <section className="w-full pt-10 sm:pt-14 pb-20 sm:pb-28">
        <div className="max-w-[95vw] lg:max-w-[80vw] mx-auto px-6 sm:px-8 lg:px-12">
          {/* 3-Column Grid with Tall Portrait Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {visiblePhotos.map((photo, index) => (
              <div
                key={photo.id}
                onClick={() => setLightboxIndex(index)}
                className="group relative aspect-[3/4] rounded-2xl sm:rounded-[24px] overflow-hidden bg-neutral-900 border border-neutral-200/90 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer hover:-translate-y-1"
              >
                {/* Image */}
                <img
                  src={photo.image}
                  alt={photo.caption}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  loading="lazy"
                />

                {/* Dark Gradient Overlay with Caption on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark/85 via-dark/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 sm:p-6 text-white">
                  {photo.tag && (
                    <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-primary mb-1.5">
                      {photo.tag}
                    </span>
                  )}
                  <p className="text-xs sm:text-sm font-medium leading-snug line-clamp-2 drop-shadow-md">
                    {photo.caption}
                  </p>
                  <div className="mt-3 flex items-center gap-1.5 text-xs text-primary font-semibold">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                      />
                    </svg>
                    <span>Click to view photo</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* 3. Load More Functionality */}
          <div className="mt-12 sm:mt-16 flex flex-col items-center justify-center text-center">
            {/* Progress Counter */}
            <p className="text-xs sm:text-sm text-muted font-medium mb-4">
              Showing <strong className="text-dark font-semibold">{visiblePhotos.length}</strong> of{' '}
              <strong className="text-dark font-semibold">{album.photos.length}</strong> photos
            </p>

            {/* Load More Button */}
            {hasMore ? (
              <button
                type="button"
                onClick={handleLoadMore}
                disabled={isLoadingMore}
                className="inline-flex items-center gap-2.5 px-8 py-3 rounded-full bg-white hover:bg-neutral-50 text-dark border-2 border-neutral-200 hover:border-primary text-xs sm:text-sm font-semibold transition-all duration-200 shadow-xs hover:shadow-md cursor-pointer active:scale-95 disabled:opacity-60"
              >
                {isLoadingMore ? (
                  <>
                    <svg
                      className="w-4 h-4 text-primary animate-spin"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                    <span>Loading more photos...</span>
                  </>
                ) : (
                  <>
                    <span>Load More Photos</span>
                    <svg
                      className="w-4 h-4 text-primary transition-transform group-hover:translate-y-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </>
                )}
              </button>
            ) : (
              <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-neutral-100 text-xs text-muted font-medium">
                <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>You've reached the end of this album</span>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 4. Fullscreen Lightbox Modal */}
      {currentPhoto && lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex flex-col justify-between animate-fade-in select-none"
          onClick={(e) => {
            if (e.target === e.currentTarget) handleCloseLightbox()
          }}
        >
          {/* Top Bar */}
          <div className="w-full px-4 sm:px-8 py-4 flex items-center justify-between border-b border-white/10 z-20 bg-black/40">
            <div>
              <span className="text-xs font-semibold text-primary uppercase tracking-wider block">
                {album.title}
              </span>
              <span className="text-xs text-white/70">
                Photo <strong className="text-white">{lightboxIndex + 1}</strong> of{' '}
                <strong className="text-white">{album.photos.length}</strong>
              </span>
            </div>

            <button
              type="button"
              onClick={handleCloseLightbox}
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center transition-all cursor-pointer"
              aria-label="Close photo view"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Middle: Active Photo & Navigation Arrows */}
          <div className="relative flex-1 flex items-center justify-center px-4 sm:px-16 py-4 overflow-hidden">
            {/* Previous Photo Button */}
            <button
              type="button"
              onClick={handlePrevPhoto}
              className="absolute left-2 sm:left-6 z-30 w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-black/60 hover:bg-white/20 text-white flex items-center justify-center backdrop-blur-md transition-all cursor-pointer border border-white/10 hover:scale-105 active:scale-95"
              aria-label="Previous photo"
            >
              <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Photo Container */}
            <div className="max-w-5xl max-h-[64vh] sm:max-h-[70vh] w-full flex items-center justify-center">
              <img
                src={currentPhoto.image}
                alt={currentPhoto.caption}
                className="max-h-[64vh] sm:max-h-[70vh] w-auto max-w-full object-contain rounded-2xl shadow-2xl select-none"
              />
            </div>

            {/* Next Photo Button */}
            <button
              type="button"
              onClick={handleNextPhoto}
              className="absolute right-2 sm:right-6 z-30 w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-black/60 hover:bg-white/20 text-white flex items-center justify-center backdrop-blur-md transition-all cursor-pointer border border-white/10 hover:scale-105 active:scale-95"
              aria-label="Next photo"
            >
              <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Bottom Bar: Caption and Location */}
          <div className="w-full px-6 sm:px-12 py-4 bg-black/70 border-t border-white/10 z-20 backdrop-blur-md">
            <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div>
                <p className="text-sm sm:text-base font-medium text-white leading-snug">
                  {currentPhoto.caption}
                </p>
                <p className="text-xs text-neutral-400 mt-1">
                  {album.location} • {album.date}
                </p>
              </div>

              {currentPhoto.tag && (
                <span className="text-[11px] font-semibold px-2.5 py-1 rounded-md bg-white/10 text-primary shrink-0">
                  #{currentPhoto.tag}
                </span>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default PhotoDetail
