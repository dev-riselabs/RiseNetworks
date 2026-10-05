import React, { useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { ARTICLES_DATA, type Article } from './Articles'

export const ArticleDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const [copied, setCopied] = useState(false)

  // Find article by id or slug
  const article: Article | undefined = ARTICLES_DATA.find(
    (a) => a.id === id || a.slug === id
  ) || ARTICLES_DATA[0] // fallback to first article if not found

  if (!article) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6">
        <h2 className="font-bricolage text-2xl font-bold text-dark mb-4">Article Not Found</h2>
        <Link
          to="/articles"
          className="px-6 py-2.5 rounded-full bg-primary text-white text-sm font-semibold hover:bg-primary-hover transition-colors"
        >
          Back to Articles
        </Link>
      </div>
    )
  }

  const currentUrl = typeof window !== 'undefined' ? window.location.href : ''

  const handleCopyLink = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(currentUrl)
      setCopied(true)
      setTimeout(() => setCopied(false), 2500)
    }
  }

  const handleEmailShare = () => {
    window.location.href = `mailto:?subject=${encodeURIComponent(article.title)}&body=${encodeURIComponent(
      `Check out this article from Rise Networks: ${currentUrl}`
    )}`
  }

  const handleTwitterShare = () => {
    window.open(
      `https://twitter.com/intent/tweet?text=${encodeURIComponent(article.title)}&url=${encodeURIComponent(
        currentUrl
      )}`,
      '_blank',
      'noopener,noreferrer'
    )
  }

  const handleLinkedinShare = () => {
    window.open(
      `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`,
      '_blank',
      'noopener,noreferrer'
    )
  }

  const handleFacebookShare = () => {
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`,
      '_blank',
      'noopener,noreferrer'
    )
  }

  const handleInstagramShare = () => {
    handleCopyLink()
  }

  return (
    <div className="w-full bg-white pt-28 sm:pt-36 lg:pt-40 pb-20 sm:pb-28">
      <div className="max-w-[80vw] mx-auto px-6 sm:px-8 lg:px-12 w-full">
        {/* Back navigation button */}
        <button
          type="button"
          onClick={() => navigate('/articles')}
          className="group inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-neutral-500 hover:text-primary transition-colors mb-6 sm:mb-8 cursor-pointer"
        >
          <svg
            className="w-4 h-4 transition-transform group-hover:-translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          <span>Back to Insights & Articles</span>
        </button>

        {/* Article Title matching screenshot */}
        <h1 className="font-bricolage text-3xl sm:text-4xl md:text-5xl lg:text-[46px] font-bold text-dark tracking-tight leading-[1.15] w-full mb-8 sm:mb-10">
          {article.title}
        </h1>

        {/* Featured Image */}
        <div className="w-full aspect-[16/9] md:aspect-[2/1] rounded-[24px] sm:rounded-[32px] overflow-hidden bg-neutral-900 shadow-xs mb-8 sm:mb-10">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover select-none"
          />
        </div>

        {/* Divider line matching screenshot */}
        <hr className="border-t border-neutral-200/80 mb-8 sm:mb-10" />

        {/* Article Body Content Full Width */}
        <div className="w-full space-y-6 text-sm sm:text-base lg:text-[17px] text-neutral-700 leading-relaxed font-normal">
          <p>
            Generative Artificial Intelligence is no longer a distant concept. It's actively shaping
            how Africans learn, teach, and innovate. This presentation examines the transformative
            role of AI in education, from personalized learning and curriculum design to ethical
            considerations and policy frameworks that will define the continent's future. Click the
            link below to download.
          </p>

          {/* Secondary content if present */}
          {article.content && (
            <>
              <p>{article.content.introduction}</p>

              {article.content.keyTakeaways && (
                <div className="p-5 sm:p-6 rounded-2xl bg-neutral-50 border border-neutral-200 my-6">
                  <h4 className="text-xs sm:text-sm font-semibold text-dark uppercase tracking-wider mb-3">
                    Key Highlights & Policy Takeaways
                  </h4>
                  <ul className="space-y-2">
                    {article.content.keyTakeaways.map((takeaway, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-700">
                        <span className="text-primary font-bold">•</span>
                        <span>{takeaway}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </>
          )}

          {/* Download Link matching screenshot */}
          <div className="pt-2 pb-3">
            <a
              href="#download"
              onClick={(e) => {
                e.preventDefault()
                alert(`Downloading: ${article.title}`)
              }}
              className="font-medium text-primary hover:text-primary-hover underline underline-offset-4 decoration-primary transition-colors inline-block text-sm sm:text-base"
            >
              Download Presentation Here
            </a>
          </div>

          {/* Social Share Icons Row matching screenshot */}
          <div className="flex items-center gap-4 pt-2 text-neutral-700">
            {/* Email Icon */}
            <button
              type="button"
              onClick={handleEmailShare}
              aria-label="Share via Email"
              className="p-1 rounded-full text-neutral-700 hover:text-primary transition-colors cursor-pointer hover:scale-110"
              title="Share via Email"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.75}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </button>

            {/* LinkedIn Icon */}
            <button
              type="button"
              onClick={handleLinkedinShare}
              aria-label="Share on LinkedIn"
              className="p-1 rounded-full text-neutral-700 hover:text-primary transition-colors cursor-pointer hover:scale-110"
              title="Share on LinkedIn"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.6 1.6 0 1 0 0-3.2 1.6 1.6 0 0 0 0 3.2m1.39 9.74v-8.37H5.07v8.37h2.78z" />
              </svg>
            </button>

            {/* X / Twitter Icon */}
            <button
              type="button"
              onClick={handleTwitterShare}
              aria-label="Share on X"
              className="p-1 rounded-full text-neutral-700 hover:text-primary transition-colors cursor-pointer hover:scale-110"
              title="Share on X"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </button>

            {/* Facebook Icon */}
            <button
              type="button"
              onClick={handleFacebookShare}
              aria-label="Share on Facebook"
              className="p-1 rounded-full text-neutral-700 hover:text-primary transition-colors cursor-pointer hover:scale-110"
              title="Share on Facebook"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </button>

            {/* Instagram Icon */}
            <button
              type="button"
              onClick={handleInstagramShare}
              aria-label="Share on Instagram"
              className="p-1 rounded-full text-neutral-700 hover:text-primary transition-colors cursor-pointer hover:scale-110"
              title="Copy Link for Instagram"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </button>

            {/* Copy Link Icon */}
            <button
              type="button"
              onClick={handleCopyLink}
              aria-label="Copy Link"
              className="p-1 rounded-full text-neutral-700 hover:text-primary transition-colors cursor-pointer hover:scale-110"
              title="Copy Link"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.75}
                  d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Copy toast */}
      {copied && (
        <div className="fixed bottom-8 right-8 z-50 bg-[#141416] text-white text-xs font-medium px-4 py-3 rounded-full shadow-2xl flex items-center gap-2 border border-neutral-700">
          <span>✓</span>
          <span>Article link copied to clipboard!</span>
        </div>
      )}
    </div>
  )
}

export default ArticleDetail
