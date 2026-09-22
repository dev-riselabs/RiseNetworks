import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Button } from '../ui/Button'

export const NavBar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()

  const navLinks = [
    { label: 'Meet Rise', href: '/about-us', hasDropdown: true },
    { label: 'What we do', href: '#', hasDropdown: true },
    { label: 'Academy', href: '#', hasDropdown: true },
    { label: 'Knowledge Hub', href: '#', hasDropdown: true },
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
            const isActive = link.href !== '#' && location.pathname === link.href
            return (
              <Link
                key={link.label}
                to={link.href}
                className={`relative group flex items-center gap-1 cursor-pointer transition-colors ${
                  isActive ? 'text-primary font-semibold' : 'text-dark hover:text-primary'
                }`}
              >
                <span>{link.label}</span>
                {link.hasDropdown && (
                  <svg
                    className={`w-3 h-3 transition-transform group-hover:translate-y-0.5 ${
                      isActive ? 'text-primary' : 'text-dark group-hover:text-primary'
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
          <Button variant="primary" size="lg" rounded="full">
            Get Started
          </Button>
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
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="flex items-center justify-between text-base font-medium text-dark hover:text-primary"
              >
                <span>{link.label}</span>
                {link.hasDropdown && (
                  <svg className="w-4 h-4 text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                )}
              </a>
            ))}
            <Button variant="primary" size="md" rounded="full" className="w-full mt-2">
              Get Started
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}

export default NavBar
