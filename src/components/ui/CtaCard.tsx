import React, { useState } from 'react'
import { Button } from './Button'

export interface CtaCardProps {
  className?: string
  overlapFooter?: boolean
}

export const CtaCard: React.FC<CtaCardProps> = ({ className = '', overlapFooter = true }) => {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      alert(`Thank you for subscribing with: ${email}`)
      setEmail('')
    }
  }

  const cardContent = (
    <div className="w-full max-w-[80vw] mx-auto px-6 sm:px-8 lg:px-12">
      {/* Outer Wavy Background Container */}
      <div
        className="w-full rounded-[32px] sm:rounded-[44px] p-8 sm:p-14 lg:p-20 flex items-center justify-center bg-cover bg-center shadow-2xl"
        style={{
          backgroundImage: `url('/images/home_linear_wavy_bg.png')`,
        }}
      >
        {/* Inner Floating White Card */}
        <div className="bg-white rounded-[24px] sm:rounded-[36px] shadow-2xl p-8 sm:p-12 lg:p-16 max-w-4xl w-full text-center border border-white/80">
          <h2 className="font-bricolage text-3xl sm:text-4xl lg:text-[44px] font-medium text-dark tracking-tight leading-tight mb-4">
            Ready to Shape Africa's <br className="hidden sm:inline" />
            Tech Future?
          </h2>

          <p className="font-sans text-sm sm:text-base lg:text-lg text-muted font-normal leading-relaxed max-w-lg mx-auto mb-8">
            Join thousands of learners, innovators and leaders who are transforming their communities through Rise Networks.
          </p>

          {/* Email Subscription Form */}
          <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto">
            <div className="bg-slate-100/90 hover:bg-slate-100 rounded-full p-1.5 pl-5 sm:pl-6 flex items-center justify-between gap-2 border border-slate-200/60 transition-all focus-within:ring-2 focus-within:ring-primary/40 focus-within:bg-white shadow-inner">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="bg-transparent text-sm sm:text-base text-dark placeholder:text-slate-400 focus:outline-none w-full py-2"
              />
              <Button type="submit" variant="primary" size="md" rounded="full" className="shrink-0">
                <span>Get Started</span>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )

  if (overlapFooter) {
    return (
      <section className={`relative w-full overflow-hidden ${className}`}>
        {/* Top 50% background (White) */}
        <div className="absolute top-0 left-0 right-0 h-1/2 bg-white pointer-events-none" />
        {/* Bottom 50% background (Footer Dark #141416) */}
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-footer-bg pointer-events-none" />

        {/* Card centered in the middle of the boundary */}
        <div className="relative z-10 py-6 sm:py-10">
          {cardContent}
        </div>
      </section>
    )
  }

  return <section className={`w-full ${className}`}>{cardContent}</section>
}

export default CtaCard
