import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Button } from '../ui/Button'

export const NavBar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [meetRiseOpen, setMeetRiseOpen] = useState(false)
  const location = useLocation()

  const meetRiseDropdown = [
    { label: 'About Us', href: '/about-us', description: 'Our history, mission, vision and leadership' },
    { label: 'Why Rise Networks', href: '/why-rise-networks', description: 'What sets our AI leadership and impact apart' },
    { label: 'Our Partners', href: '/partners', description: 'Collaborate and sponsor the next generation' },
    { label: 'FAQs', href: '/faq', description: 'Answers to frequently asked questions' },
  ]

  const navLinks = [
    { label: 'Meet Rise', href: '/about-us', hasDropdown: true, subLinks: meetRiseDropdown },
    { label: 'What we do', href: '/programs', hasDropdown: false },
    { label: 'Academy', href: '/academy', hasDropdown: false },
    { label: 'Contact', href: '/partners', hasDropdown: false },
  ]

  return (
    <header className="absolute top-5 left-0 right-0 z-50 w-full bg-transparent">
      <div className="max-w-[80vw] mx-auto flex h-20 items-center justify-between px-6 sm:px-8 lg:px-12">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src="/logo/rise_networks_logo.png"
            alt="Rise Networks"
            className="h-10 sm:h-12 w-auto object-contain"
          />
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-dark">
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

                  {/* Dropdown Menu */}
                  <div className="absolute top-full left-0 pt-2 w-72 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200 ease-out z-50">
                    <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-xl border border-neutral-100 p-2.5 flex flex-col gap-1">
                      {link.subLinks.map((sub) => {
                        const isSubActive = location.pathname === sub.href
                        return (
                          <Link
                            key={sub.label}
                            to={sub.href}
                            className={`p-3 rounded-xl transition-all flex flex-col ${
                              isSubActive
                                ? 'bg-primary/10 text-primary'
                                : 'hover:bg-neutral-50 text-dark hover:text-primary'
                            }`}
                          >
                            <span className="font-medium text-sm">{sub.label}</span>
                            <span className="text-xs text-muted font-normal mt-0.5">{sub.description}</span>
                          </Link>
                        )
                      })}
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

        {/* Action / CTA Button */}
        <div className="hidden md:flex items-center">
          <Link to="/partners">
            <Button variant="primary" size="lg" rounded="full">
              Get Started
            </Button>
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg text-dark hover:bg-black/5"
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-b border-badge-border/40 px-6 py-5 shadow-lg">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => {
              if (link.subLinks) {
                return (
                  <div key={link.label} className="flex flex-col border-b border-neutral-100 pb-2">
                    <button
                      onClick={() => setMeetRiseOpen(!meetRiseOpen)}
                      className="flex items-center justify-between text-base font-medium text-dark py-1"
                    >
                      <span>{link.label}</span>
                      <svg
                        className={`w-4 h-4 text-muted transition-transform ${meetRiseOpen ? 'rotate-180' : ''}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {meetRiseOpen && (
                      <div className="pl-3 mt-1 flex flex-col gap-2 border-l-2 border-primary/20">
                        {link.subLinks.map((sub) => (
                          <Link
                            key={sub.label}
                            to={sub.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="text-sm text-neutral-600 hover:text-primary py-1"
                          >
                            {sub.label}
                          </Link>
                        ))}
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
                  className="flex items-center justify-between text-base font-medium text-dark hover:text-primary py-1"
                >
                  <span>{link.label}</span>
                </Link>
              )
            })}
            <Link to="/partners" onClick={() => setMobileMenuOpen(false)} className="w-full mt-2">
              <Button variant="primary" size="md" rounded="full" className="w-full">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}

export default NavBar
