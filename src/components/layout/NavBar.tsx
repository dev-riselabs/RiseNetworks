import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Button } from '../ui/Button'

export const NavBar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [meetRiseOpen, setMeetRiseOpen] = useState(false)
  const location = useLocation()

  // Close mobile menu whenever location changes
  useEffect(() => {
    setMobileMenuOpen(false)
  }, [location.pathname])

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileMenuOpen])

  const meetRiseDropdown = [
    { label: 'About Us', href: '/about-us', description: 'Our history, mission, vision and leadership' },
    { label: 'Awards & Recognition', href: '/awards', description: 'Global and continental honors celebrating our innovation and impact' },
    { label: 'Global AI Leadership', href: '/global-ai-leadership', description: 'Our framework for global AI leadership and sovereign impact' },
    { label: 'Our Research', href: '/research', description: 'Interdisciplinary research in AI ethics, governance and human development' },
    { label: 'Strategic Vision', href: '/strategic-vision', description: 'Strategic vision and futuristic outlook' },
    { label: 'Events & Convenings', href: '/events', description: 'Townhalls, masterclasses, summits and tech festivals' },
    { label: 'Our Projects', href: '/projects', description: 'AI systems, research platforms and policy initiatives' },
    { label: 'Insights & Articles', href: '/articles', description: 'Research papers, AI policy insights and articles' },
    { label: 'Why Rise Networks', href: '/why-rise-networks', description: 'What sets our AI leadership and impact apart' },
    { label: 'Our Partners', href: '/partners', description: 'Collaborate and sponsor the next generation' },
    { label: 'FAQs', href: '/faq', description: 'Answers to frequently asked questions' },
    { label: 'Support & Donate', href: '/donate', description: 'Empower Africa’s next generation of AI leaders' },
  ]

  const navLinks = [
    { label: 'Meet Rise', href: '/about-us', hasDropdown: true, subLinks: meetRiseDropdown },
    { label: 'What we do', href: '/programs', hasDropdown: false },
    { label: 'Academy', href: '/academy', hasDropdown: false },
    { label: 'Contact', href: '/contact', hasDropdown: false },
  ]

  return (
    <header className="absolute top-5 left-0 right-0 z-50 w-full bg-transparent">
      <div className="max-w-[95vw] lg:max-w-[80vw] mx-auto flex h-20 items-center justify-between px-6 sm:px-8 lg:px-12">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src="/logo/rise_networks_logo.png"
            alt="Rise Networks"
            className="h-10 sm:h-12 w-auto object-contain"
          />
        </Link>

        {/* Desktop Navigation Links - lg and above */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-dark">
          {navLinks.map((link) => {
            const isParentActive =
              (link.href !== '#' && location.pathname === link.href) ||
              (link.subLinks && link.subLinks.some((sub) => location.pathname === sub.href))

            if (link.subLinks) {
              return (
                <div key={link.label} className="relative group py-2">
                  <button
                    type="button"
                    className={`flex items-center gap-1 cursor-pointer transition-colors ${
                      isParentActive ? 'text-primary font-semibold' : 'text-dark hover:text-primary'
                    }`}
                  >
                    <span>{link.label}</span>
                    <svg
                      className={`w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180 ${
                        isParentActive ? 'text-primary' : 'text-dark group-hover:text-primary'
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {/* Desktop Dropdown Menu - 2-Column Grid */}
                  <div className="absolute top-full -left-4 pt-2.5 w-[580px] lg:w-[620px] opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200 ease-out z-50">
                    <div className="bg-white/95 backdrop-blur-2xl rounded-3xl shadow-2xl shadow-neutral-900/15 border border-neutral-100/90 p-3 sm:p-4">
                      <div className="grid grid-cols-2 gap-2">
                        {link.subLinks
                          .filter((sub) => sub.href !== '/donate')
                          .map((sub) => {
                            const isSubActive = location.pathname === sub.href
                            return (
                              <Link
                                key={sub.label}
                                to={sub.href}
                                className={`p-3 rounded-2xl transition-all duration-150 flex flex-col group/item ${
                                  isSubActive
                                    ? 'bg-primary/10 text-primary font-medium'
                                    : 'hover:bg-neutral-50/90 text-dark hover:text-primary'
                                }`}
                              >
                                <span className="font-semibold text-sm flex items-center justify-between">
                                  <span>{sub.label}</span>
                                  <span className="opacity-0 -translate-x-1 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-150 text-xs text-primary font-bold">
                                    →
                                  </span>
                                </span>
                                <span className="text-xs text-muted font-normal mt-0.5 line-clamp-1">
                                  {sub.description}
                                </span>
                              </Link>
                            )
                          })}
                      </div>
                    </div>
                  </div>
                </div>
              )
            }

            return (
              <Link
                key={link.label}
                to={link.href}
                className={`relative group flex items-center gap-1 cursor-pointer transition-colors ${
                  isParentActive ? 'text-primary font-semibold' : 'text-dark hover:text-primary'
                }`}
              >
                <span>{link.label}</span>
                {link.hasDropdown && (
                  <svg
                    className={`w-3 h-3 transition-transform group-hover:translate-y-0.5 ${
                      isParentActive ? 'text-primary' : 'text-dark group-hover:text-primary'
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                )}
              </Link>
            )
          })}
        </nav>

        {/* Action / CTA Button - lg and above */}
        <div className="hidden lg:flex items-center">
          <Link to="/partners">
            <Button variant="primary" size="lg" rounded="full">
              Get Started
            </Button>
          </Link>
        </div>

        {/* Mobile & Tablet menu button with smooth morphing toggle */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          className="lg:hidden relative w-11 h-11 flex items-center justify-center rounded-full bg-white/90 hover:bg-white backdrop-blur-md border border-neutral-200/80 shadow-xs text-dark transition-all duration-200 active:scale-95 cursor-pointer z-50"
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileMenuOpen}
        >
          <div className="w-5 h-5 relative flex items-center justify-center">
            <span
              className={`absolute block h-0.5 w-5 bg-dark rounded-full transform transition-all duration-300 ease-in-out ${
                mobileMenuOpen ? 'rotate-45' : '-translate-y-1.5'
              }`}
            />
            <span
              className={`absolute block h-0.5 w-5 bg-dark rounded-full transition-opacity duration-200 ${
                mobileMenuOpen ? 'opacity-0' : 'opacity-100'
              }`}
            />
            <span
              className={`absolute block h-0.5 w-5 bg-dark rounded-full transform transition-all duration-300 ease-in-out ${
                mobileMenuOpen ? '-rotate-45' : 'translate-y-1.5'
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile & Tablet Backdrop Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-dark/30 backdrop-blur-xs z-40 lg:hidden animate-fade-in"
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Floating Mobile & Tablet Navigation Card with Margins */}
      {mobileMenuOpen && (
        <div className="relative z-50 lg:hidden px-4 sm:px-6 mt-2 max-w-[95vw] sm:max-w-[85vw] mx-auto animate-mobile-menu">
          <div className="bg-white/95 backdrop-blur-2xl rounded-3xl border border-neutral-200/90 shadow-2xl shadow-neutral-900/15 p-4 sm:p-5 flex flex-col max-h-[calc(100vh-130px)] overflow-y-auto">
            {/* Nav list */}
            <div className="flex flex-col gap-1.5">
              {navLinks.map((link) => {
                const isParentActive =
                  (link.href !== '#' && location.pathname === link.href) ||
                  (link.subLinks && link.subLinks.some((sub) => location.pathname === sub.href))

                if (link.subLinks) {
                  return (
                    <div key={link.label} className="flex flex-col rounded-2xl overflow-hidden transition-colors">
                      <button
                        type="button"
                        onClick={() => setMeetRiseOpen((prev) => !prev)}
                        className={`w-full flex items-center justify-between px-4 py-3 rounded-2xl text-base font-medium transition-all ${
                          isParentActive
                            ? 'bg-primary/10 text-primary font-semibold'
                            : 'text-dark hover:bg-neutral-100/70 active:bg-neutral-100'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <span
                            className={`w-2 h-2 rounded-full transition-colors ${
                              isParentActive ? 'bg-primary' : 'bg-neutral-300'
                            }`}
                          />
                          <span>{link.label}</span>
                        </div>
                        <div
                          className={`w-7 h-7 rounded-full flex items-center justify-center transition-all duration-200 ${
                            meetRiseOpen
                              ? 'rotate-180 bg-primary/15 text-primary'
                              : 'bg-neutral-100 text-neutral-500'
                          }`}
                        >
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </button>

                      {meetRiseOpen && (
                        <div className="mt-1 mb-2 ml-2 sm:ml-4 pl-3 sm:pl-3.5 border-l-2 border-primary/30 grid grid-cols-1 sm:grid-cols-2 gap-1.5 py-1 animate-mobile-menu">
                          {link.subLinks.map((sub) => {
                            const isSubActive = location.pathname === sub.href
                            return (
                              <Link
                                key={sub.label}
                                to={sub.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className={`flex flex-col px-3 py-2 rounded-xl transition-all ${
                                  isSubActive
                                    ? 'bg-primary/10 text-primary font-semibold'
                                    : 'text-neutral-700 hover:text-primary hover:bg-neutral-50 active:bg-neutral-100'
                                }`}
                              >
                                <span className="text-sm font-medium">{sub.label}</span>
                                {sub.description && (
                                  <span className="text-xs text-muted font-normal mt-0.5 line-clamp-1">
                                    {sub.description}
                                  </span>
                                )}
                              </Link>
                            )
                          })}
                        </div>
                      )}
                    </div>
                  )
                }

                return (
                  <Link
                    key={link.label}
                    to={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center justify-between px-4 py-3 rounded-2xl text-base font-medium transition-all ${
                      isParentActive
                        ? 'bg-primary/10 text-primary font-semibold'
                        : 'text-dark hover:bg-neutral-100/70 active:bg-neutral-100'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className={`w-2 h-2 rounded-full transition-colors ${
                          isParentActive ? 'bg-primary' : 'bg-neutral-300'
                        }`}
                      />
                      <span>{link.label}</span>
                    </div>
                    <svg className="w-4 h-4 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                )
              })}
            </div>

            {/* Menu Footer with CTA & Info */}
            <div className="pt-4 mt-3 border-t border-neutral-100 flex flex-col gap-3">
              <Link to="/partners" onClick={() => setMobileMenuOpen(false)} className="w-full">
                <Button
                  variant="primary"
                  size="lg"
                  rounded="full"
                  className="w-full justify-center shadow-lg shadow-primary/25 flex items-center gap-2 group cursor-pointer"
                >
                  <span className="font-semibold">Get Started</span>
                  <svg
                    className="w-4 h-4 transition-transform group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Button>
              </Link>

            
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

export default NavBar
