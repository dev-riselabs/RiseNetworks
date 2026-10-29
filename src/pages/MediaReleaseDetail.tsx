import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { MEDIA_RELEASES_LIST, getMediaReleaseById, type MediaReleaseItem } from './MediaReleases'

export const MediaReleaseDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const [downloadToast, setDownloadToast] = useState<string | null>(null)
  const [shareToast, setShareToast] = useState<string | null>(null)

  // Find the release or fallback to the first one
  const release: MediaReleaseItem = getMediaReleaseById(id || '') || MEDIA_RELEASES_LIST[0]

  // Related releases (exclude current release)
  const relatedReleases = MEDIA_RELEASES_LIST.filter((r) => r.id !== release.id).slice(0, 2)

  // Scroll to top on id change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [id])

  // Handle Download PDF
  const handleDownloadPdf = () => {
    setDownloadToast(`Downloading "${release.title.slice(0, 32)}..." (${release.pdfSize})`)
    setTimeout(() => {
      setDownloadToast(null)
    }, 3500)
  }

  // Handle Share
  const handleShare = (platform: string) => {
    const url = window.location.href
    const title = release.title
    if (platform === 'twitter') {
      window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`, '_blank')
    } else if (platform === 'facebook') {
      window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank')
    } else if (platform === 'linkedin') {
      window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank')
    } else {
      navigator.clipboard?.writeText(url)
      setShareToast('Link copied to clipboard!')
      setTimeout(() => setShareToast(null), 3000)
    }
  }

  return (
    <div className="bg-[#FAF9F5]/40 min-h-screen pt-24 sm:pt-28 pb-16">
      {/* Toast Feedback */}
      {(downloadToast || shareToast) && (
        <div className="fixed bottom-6 right-6 z-50 bg-dark text-white text-xs sm:text-sm font-medium px-4 py-3 rounded-xl shadow-xl flex items-center gap-2 border border-white/10 animate-fade-in">
          <svg className="w-4 h-4 text-primary shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <span>{downloadToast || shareToast}</span>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Link / Breadcrumb */}
        <div className="mb-6">
          <Link
            to="/media-releases"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-neutral-600 hover:text-primary transition-colors"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span>Back to Media Releases</span>
          </Link>
        </div>

        {/* 2-Column Grid Matching Design Reference */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-8 items-start">
          
          {/* LEFT COLUMN: Main Press Release Article Card */}
          <article className="bg-white rounded-[24px] border border-neutral-200/90 p-6 sm:p-10 shadow-xs">
            
            {/* Top Row: Category Pill & Date */}
            <div className="flex items-center gap-4 mb-4">
              <span className="text-xs font-semibold px-3 py-1 rounded-full border border-primary text-primary">
                {release.category}
              </span>

              <div className="flex items-center gap-1.5 text-xs sm:text-sm text-neutral-600 font-medium">
                <svg className="w-4 h-4 text-neutral-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>{release.date}</span>
              </div>
            </div>

            {/* Headline in Brand Primary Orange #EE7747 */}
            <h1 className="font-sans text-2xl sm:text-3xl lg:text-[32px] font-bold text-primary tracking-tight leading-tight mb-4">
              {release.title}
            </h1>

            {/* Subtitle / Lead Paragraph */}
            <p className="font-sans text-sm sm:text-base text-neutral-700 leading-relaxed mb-6 font-normal">
              {release.summary}
            </p>

            {/* Featured Image */}
            <div className="w-full aspect-[16/10] sm:aspect-[16/9] rounded-2xl overflow-hidden bg-neutral-100 mb-8 border border-neutral-200/60">
              <img
                src={release.image}
                alt={release.title}
                className="w-full h-full object-cover block"
                loading="eager"
              />
            </div>

            {/* Article Content with Subheadings */}
            <div className="space-y-6 text-sm sm:text-base text-neutral-700 font-normal leading-relaxed">
              
              {/* Section 1 */}
              <div>
                <h2 className="font-sans text-lg sm:text-xl font-bold text-primary mb-3">
                  Expanding access to digital skills
                </h2>
                <p className="mb-4">
                  Rise Networks has partnered with EduTech hub to expand access to digital skills training across Africa, a move set to equip thousands of young people with in-demand tech skills and strengthen local innovation ecosystems.
                </p>
                <p>
                  The partnership will deliver practical, industry-relevant training programmes, connect learners with mentorship and job opportunities and support the growth of digital talent in underserved communities across the continent.
                </p>
              </div>

              {/* Section 2 */}
              <div className="pt-2">
                <h2 className="font-sans text-lg sm:text-xl font-bold text-primary mb-3">
                  Building opportunities through technology
                </h2>
                <p className="mb-4">
                  By combining Rise Networks' expertise in community-driven innovation with EduTech Hub's strong track record in digital learning, the initiative aims to bridge the skills gap and create sustainable pathways to decent work and entrepreneurship.
                </p>
                <p>
                  This partnership reinforces our shared belief that technology and education can unlock human potential and drive inclusive economic growth across Africa.
                </p>
              </div>

              {/* Additional paragraphs if available from data */}
              {release.bodyParagraphs && release.bodyParagraphs.length > 2 && (
                <div className="pt-2 space-y-4">
                  {release.bodyParagraphs.slice(2).map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>
              )}

              {/* Optional Quote */}
              {release.quote && (
                <blockquote className="my-6 p-5 sm:p-6 bg-neutral-50 rounded-2xl border-l-4 border-primary text-neutral-800 italic">
                  <p className="text-sm sm:text-base leading-relaxed mb-2 font-medium not-italic">
                    "{release.quote.text}"
                  </p>
                  <footer className="text-xs sm:text-sm font-semibold text-primary not-italic">
                    — {release.quote.author}, <span className="text-neutral-500 font-normal">{release.quote.role}</span>
                  </footer>
                </blockquote>
              )}
            </div>

            {/* Divider */}
            <div className="border-t border-neutral-200 mt-10 pt-6">
              
              {/* Card Footer: Share on Left, Download Button on Right */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                
                {/* Social Share Icons */}
                <div className="flex items-center gap-3">
                  <span className="text-xs sm:text-sm font-semibold text-neutral-800 mr-1">Share</span>
                  
                  {/* X / Twitter */}
                  <button
                    type="button"
                    onClick={() => handleShare('twitter')}
                    className="w-8 h-8 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-700 hover:text-primary hover:border-primary transition-colors cursor-pointer"
                    aria-label="Share on X"
                  >
                    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </button>

                  {/* Facebook */}
                  <button
                    type="button"
                    onClick={() => handleShare('facebook')}
                    className="w-8 h-8 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-700 hover:text-primary hover:border-primary transition-colors cursor-pointer"
                    aria-label="Share on Facebook"
                  >
                    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </button>

                  {/* LinkedIn */}
                  <button
                    type="button"
                    onClick={() => handleShare('linkedin')}
                    className="w-8 h-8 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-700 hover:text-primary hover:border-primary transition-colors cursor-pointer"
                    aria-label="Share on LinkedIn"
                  >
                    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </button>

                  {/* Instagram */}
                  <button
                    type="button"
                    onClick={() => handleShare('instagram')}
                    className="w-8 h-8 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-700 hover:text-primary hover:border-primary transition-colors cursor-pointer"
                    aria-label="Share on Instagram"
                  >
                    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </button>
                </div>

                {/* Download Press Release (PDF) Button */}
                <button
                  type="button"
                  onClick={handleDownloadPdf}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-neutral-300 hover:border-primary text-xs sm:text-sm font-semibold text-neutral-800 hover:text-primary transition-all duration-200 cursor-pointer shadow-2xs hover:shadow-xs"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  <span>Download Press Release (PDF)</span>
                </button>
              </div>

            </div>

          </article>

          {/* RIGHT COLUMN: Sidebar matching screenshot */}
          <aside className="space-y-6">
            
            {/* 1. Media Release Details Card */}
            <div className="bg-white rounded-[22px] border border-neutral-200/90 p-6 shadow-xs">
              <h3 className="font-sans text-sm sm:text-base font-bold text-primary mb-5">
                Media Release Details
              </h3>

              <div className="space-y-4">
                {/* Date */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-neutral-100 flex items-center justify-center text-neutral-600 shrink-0">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[11px] text-neutral-500 font-medium">Date</p>
                    <p className="text-xs sm:text-sm font-semibold text-neutral-800">{release.date}</p>
                  </div>
                </div>

                {/* Category */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-neutral-100 flex items-center justify-center text-neutral-600 shrink-0">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[11px] text-neutral-500 font-medium">Category</p>
                    <p className="text-xs sm:text-sm font-semibold text-neutral-800">{release.category}</p>
                  </div>
                </div>

                {/* Press Contact */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-neutral-100 flex items-center justify-center text-neutral-600 shrink-0">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[11px] text-neutral-500 font-medium">Press Contact</p>
                    <a
                      href="mailto:media@risenetworks.org"
                      className="text-xs sm:text-sm font-semibold text-neutral-800 hover:text-primary transition-colors block"
                    >
                      media@risenetworks.org
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* 2. Related Release Cards */}
            {relatedReleases.map((rel) => (
              <div
                key={rel.id}
                className="bg-white rounded-[22px] border border-neutral-200/90 overflow-hidden p-5 shadow-xs hover:shadow-sm transition-all"
              >
                {/* Image */}
                <Link to={`/media-releases/${rel.id}`} className="block aspect-[16/10] rounded-xl overflow-hidden mb-3 bg-neutral-100">
                  <img
                    src={rel.image}
                    alt={rel.title}
                    className="w-full h-full object-cover block hover:scale-102 transition-transform duration-300"
                    loading="lazy"
                  />
                </Link>

                {/* Metadata Row */}
                <div className="flex items-center gap-3 text-xs text-neutral-600 font-medium mb-2">
                  <div className="flex items-center gap-1">
                    <svg className="w-3.5 h-3.5 text-neutral-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span>{rel.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <svg className="w-3.5 h-3.5 text-neutral-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>Lagos, Nigeria</span>
                  </div>
                </div>

                {/* Orange Title */}
                <h4 className="font-sans text-sm sm:text-base font-bold text-primary leading-snug mb-3">
                  <Link to={`/media-releases/${rel.id}`} className="hover:opacity-90">
                    {rel.title}
                  </Link>
                </h4>

                {/* Read more -> */}
                <Link
                  to={`/media-releases/${rel.id}`}
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-neutral-700 hover:text-primary transition-colors group"
                >
                  <span>Read more</span>
                  <svg
                    className="w-4 h-4 text-primary transition-transform duration-200 group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            ))}

          </aside>

        </div>

      </div>
    </div>
  )
}

export default MediaReleaseDetail
