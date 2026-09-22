import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../components/ui/Button'
import { CtaCard } from '../components/ui/CtaCard'

export const Home: React.FC = () => {
  const [activeImpactIndex, setActiveImpactIndex] = useState(0)
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0)

  const partners = [
    { name: 'Ford Foundation', logo: '/logo/ford_foundation_logo.png', heightClass: 'h-8 sm:h-10 lg:h-12' },
    { name: 'Luminate', logo: '/logo/luminate_logo.png', heightClass: 'h-6 sm:h-8 lg:h-9' },
    { name: 'Microsoft', logo: '/logo/microsoft_logo.png', heightClass: 'h-7 sm:h-9 lg:h-10' },
    { name: 'Canon', logo: '/logo/canon_logo.png', heightClass: 'h-7 sm:h-9 lg:h-10' },
    { name: 'KPMG', logo: '/logo/kpmg_logo.png', heightClass: 'h-8 sm:h-10 lg:h-12' },
    { name: 'Interswitch', logo: '/logo/interswitch_logo.png', heightClass: 'h-8 sm:h-10 lg:h-11' },
  ]

  const impactAreas = [
    {
      title: 'Building AI Talent & Engineers',
      description:
        "Develop a new generation of African AI engineers skilled in LLMs, Machine Learning, and Agentic AI to create solutions for Africa's unique challenges and global innovation.",
      image: '/images/hero_where_we_create_impact.png',
    },
    {
      title: 'Policy & Regulatory Capacity Building',
      description:
        'Equipping policymakers, regulators, and civic leaders with strategic frameworks to govern emerging technologies and craft forward-looking digital policies.',
      image: '/images/hero_where_we_create_impact.png',
    },
    {
      title: 'Research, Advocacy & Storytelling',
      description:
        "Publishing authoritative evidence-based research and narratives that shape Africa's tech landscape and elevate local innovation on the global stage.",
      image: '/images/hero_where_we_create_impact.png',
    },
    {
      title: 'AI for Organizational Transformation',
      description:
        'Helping institutions, enterprises, and public sector organizations implement practical AI solutions to enhance productivity and public value.',
      image: '/images/hero_where_we_create_impact.png',
    },
    {
      title: 'Tech Justice & Digital Rights',
      description:
        'Advancing ethical AI, algorithmic fairness, and data privacy rights to ensure digital inclusion and safeguard vulnerable communities.',
      image: '/images/hero_where_we_create_impact.png',
    },
  ]

  const stats = [
    {
      value: '25k+',
      label: 'People Trained in Data & AI',
    },
    {
      value: '25+',
      label: 'Research Projects & Policy Papers',
    },
    {
      value: '10+',
      label: 'Ecosystem Building & Leadership',
    },
    {
      value: 'Trusted By',
      label: 'Governments, Academia & Industry',
    },
  ]

  const testimonials = [
    {
      quote:
        'Prior to coming to The Rise Labs boot camp, I had little understanding of Data. After the training, I realized it was more about statistical analysis using programming tools. It enlightened me and completely reshaped my view of Data Science.',
      name: 'Robert Anderson',
      role: 'Software Developer',
    },
    {
      quote:
        'The AI and Machine Learning fellowship gave me the hands-on engineering skills to deploy real-world models. The mentorship and practical project exposure were truly world-class.',
      name: 'Amina Bello',
      role: 'Machine Learning Engineer',
    },
    {
      quote:
        'Rise Networks bridged the gap between academic theory and industry demands. The curriculum prepared me for global tech roles and leadership in ethical technology policy.',
      name: 'Chinedu Okafor',
      role: 'Data Scientist & Policy Analyst',
    },
  ]

  const handlePrevTestimonial = () => {
    setCurrentTestimonialIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }

  const handleNextTestimonial = () => {
    setCurrentTestimonialIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden bg-gradient-to-b from-orange-50/20 via-white to-white">
        {/* Ambient background glows */}
        <div
          className="pointer-events-none absolute -top-24 -left-24 h-96 w-96 rounded-full bg-orange-200/20 blur-3xl"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute top-1/3 -right-24 h-96 w-96 rounded-full bg-orange-100/30 blur-3xl"
          aria-hidden="true"
        />

        {/* Grid pattern overlay */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`,
            backgroundSize: '48px 48px',
          }}
          aria-hidden="true"
        />

        {/* Main Content Container */}
        <div className="relative max-w-[80vw] mx-auto px-6 sm:px-8 lg:px-12 pt-28 sm:pt-40 pb-20 lg:pb-28 w-full">
          
          {/* Top Section: Badge, Headline & Subtitle */}
          <div className="max-w-5xl flex flex-col items-start z-10 mb-10">
            {/* Badge using #E6D6D7 registered theme color */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-badge border border-badge-border text-badge-text text-sm font-medium mb-3 shadow-xs">
              <span>
                <svg width="35" height="33" viewBox="0 0 35 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M25.4824 0L27.4988 3.78081L31.2795 5.79724L27.4988 7.81367L25.4824 11.5945L23.4659 7.81367L19.6851 5.79724L23.4659 3.78081L25.4824 0ZM15.799 12.4226L23.4437 16.4998L15.799 20.577L11.7219 28.2217L7.6447 20.577L0 16.4998L7.6447 12.4226L11.7219 4.77794L15.799 12.4226ZM16.9457 16.4998L13.5389 14.6828L11.7219 11.2759L9.90487 14.6828L6.49799 16.4998L9.90487 18.3168L11.7219 21.7237L13.5389 18.3168L16.9457 16.4998ZM29.5595 23.1253L27.0114 18.3474L24.4631 23.1253L19.6851 25.6734L24.4631 28.2217L27.0114 32.9997L29.5595 28.2217L34.3374 25.6734L29.5595 23.1253Z" fill="#EE7747"/>
                </svg>
              </span>
              <span>Shaping Africa's Tech Future</span>
            </div>

            {/* Headline */}
            <h1 className="font-bricolage text-4xl sm:text-6xl lg:text-7xl font-medium text-dark tracking-tight leading-[1.08] mb-6">
              Empowering Africa <br />
              Through African Innovation
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg lg:text-xl text-muted font-normal leading-relaxed max-w-3xl">
              Driving inclusive digital transformation through world-class AI education, ethical tech policy and community-driven innovation across Africa.
            </p>
          </div>

          {/* Lower Grid: Buttons + Left Image on Left Column, Right Image on Right Column */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 w-full items-start">
            {/* Left Column: CTA Buttons + Longer Left Image */}
            <div className="flex flex-col items-start w-full">
              {/* CTA Buttons */}
              <div className="flex flex-wrap items-center gap-4 mb-10">
                <Button variant="primary" size="lg" rounded="full">
                  <span>Explore programs</span>
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Button>

                <Button variant="secondary" size="lg" rounded="full">
                  <svg className="w-4 h-4 text-dark fill-current" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                  <span>Watch Our Story</span>
                </Button>
              </div>

              {/* Left Image: Longer, sits beneath buttons */}
              <div className="relative w-full overflow-hidden rounded-[32px] shadow-sm">
                <img
                  src="/images/home_hero_img_1.png"
                  alt="Rise Networks AI Fellowship"
                  className="w-full h-[520px] sm:h-[600px] lg:h-[700px] object-cover object-top rounded-[32px]"
                />
              </div>
            </div>

            {/* Right Column: Right Image aligned with top of buttons */}
            <div className="relative w-full overflow-hidden rounded-[32px] shadow-sm">
              <img
                src="/images/home_hero_img_2.png"
                alt="Rise Networks Community"
                className="w-full h-[520px] sm:h-[600px] lg:h-[660px] object-cover object-top rounded-[32px]"
              />
            </div>
          </div>

        </div>
      </section>

      {/* Partners Section */}
      <section className="w-full bg-white py-16 sm:py-24 lg:py-28">
        <div className="max-w-[80vw] mx-auto px-6 sm:px-8 lg:px-12 w-full">
          {/* Section Headline */}
          <h2 className="font-bricolage text-3xl sm:text-5xl lg:text-[56px] font-medium text-dark tracking-tight leading-[1.15] max-w-3xl mb-12 sm:mb-16">
            Our partners and students <br />
            remain our foremost priority.
          </h2>

          {/* Logos Row */}
          <div className="flex flex-wrap items-center justify-between gap-8 sm:gap-12 lg:gap-14">
            {partners.map((partner) => (
              <div
                key={partner.name}
                className="flex items-center justify-center transition-all duration-300 hover:scale-105"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className={`${partner.heightClass} w-auto object-contain`}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Rise Networks Section */}
      <section className="w-full bg-white pb-20 sm:pb-28 lg:pb-36">
        <div className="max-w-[80vw] mx-auto px-6 sm:px-8 lg:px-12 w-full">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-badge-light-bg border border-badge-light-border text-dark text-sm font-medium mb-6">
            <span>About Rise Networks</span>
          </div>

          {/* Headline */}
          <h2 className="font-bricolage text-3xl sm:text-5xl lg:text-[56px] font-medium text-dark tracking-tight leading-[1.12] max-w-4xl mb-6">
            Pioneering Africa's Tech Revolution
          </h2>

          {/* Paragraph and CTA Button */}
          <div className="flex flex-col items-start gap-8">
            <p className="text-base sm:text-lg lg:text-xl text-muted font-normal leading-relaxed max-w-5xl">
              Through research, training, advisory, and policy engagement, we equip individuals and organizations with future-ready skills that bridge learning and employment. Our work advances Tech Justice and Digital Rights, promotes inclusive digital literacy, and drives policy influence and community transformation.
            </p>

            <div className="w-full flex justify-end">
              <Link to="/about-us">
                <Button variant="primary" size="lg" rounded="full">
                  <span>Know more about us</span>
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Where We Create Impact Section */}
      <section className="relative w-full bg-white pb-24 sm:pb-32 lg:pb-36 overflow-visible">
        <div className="relative max-w-[80vw] mx-auto px-6 sm:px-8 lg:px-12 w-full">
          
          {/* SVG Background Grid lines: Extends from the top beside heading all the way down */}
          <div className="pointer-events-none absolute right-6 sm:right-8 lg:right-12 top-0 bottom-0 w-1/2 lg:w-5/12 h-full z-0 overflow-hidden hidden sm:block">
            <svg
              viewBox="0 0 500 889"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full"
              preserveAspectRatio="none"
            >
              {/* Vertical Grid Columns extending to top Y=0 beside the heading */}
              <line x1="1" y1="0" x2="1" y2="889" stroke="#A9518B" strokeOpacity="0.3" strokeWidth="1.5" />
              <line x1="100" y1="0" x2="100" y2="889" stroke="#A9518B" strokeOpacity="0.3" strokeWidth="1.5" />
              <line x1="200" y1="0" x2="200" y2="889" stroke="#A9518B" strokeOpacity="0.3" strokeWidth="1.5" />
              <line x1="300" y1="0" x2="300" y2="889" stroke="#A9518B" strokeOpacity="0.3" strokeWidth="1.5" />
              <line x1="400" y1="0" x2="400" y2="889" stroke="#A9518B" strokeOpacity="0.3" strokeWidth="1.5" />
              <line x1="499" y1="0" x2="499" y2="889" stroke="#A9518B" strokeOpacity="0.3" strokeWidth="1.5" />
              {/* Top boundary line */}
              <line x1="1" y1="1" x2="499" y2="1" stroke="#A9518B" strokeOpacity="0.3" strokeWidth="1.5" />
            </svg>
          </div>

          {/* Section Header */}
          <div className="relative z-10 mb-12 sm:mb-16">
            <h2 className="font-bricolage text-4xl sm:text-5xl lg:text-[56px] font-medium text-dark tracking-tight leading-tight mb-4">
              Where We Create Impact
            </h2>
            <p className="text-base sm:text-lg text-muted font-normal leading-relaxed max-w-2xl">
              From training future leaders to influencing policy and powering growth across organizations.
            </p>
          </div>

          {/* Impact Interactive List with Background Grid Overlay */}
          <div className="relative w-full border-b border-impact-grid overflow-visible">

            {/* List Rows */}
            <div className="relative z-10 flex flex-col w-full overflow-visible">
              {impactAreas.map((item, idx) => {
                const isActive = activeImpactIndex === idx

                return (
                  <div
                    key={item.title}
                    onClick={() => setActiveImpactIndex(idx)}
                    className={`relative w-full cursor-pointer transition-all duration-300 border-t border-impact-grid ${
                      isActive ? 'bg-impact-ai-bg z-20 overflow-visible' : 'hover:bg-slate-50/60'
                    }`}
                  >
                    {isActive ? (
                      /* Active Row Layout with Description on left and Protruding Image on the Right */
                      <div className="relative py-7 sm:py-9 px-6 sm:px-10 flex items-center justify-between min-h-[160px] sm:min-h-[180px] overflow-visible">
                        {/* Text description on the left */}
                        <div className="max-w-xl lg:max-w-2xl pr-4">
                          <h3 className="font-bricolage text-2xl sm:text-3xl font-medium text-dark tracking-tight leading-snug mb-2.5">
                            {item.title}
                          </h3>
                          <p className="text-sm sm:text-base text-muted font-normal leading-relaxed max-w-xl">
                            {item.description}
                          </p>
                        </div>

                        {/* Floating Image on the Right protruding above and below the background strip */}
                        <div className="hidden md:block absolute right-6 sm:right-10 lg:right-16 top-1/2 -translate-y-1/2 z-30 shrink-0">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-[260px] sm:w-[300px] lg:w-[360px] h-[260px] sm:h-[300px] lg:h-[360px] object-cover rounded-[24px] lg:rounded-[28px] shadow-xl border border-impact-accent/10"
                          />
                        </div>

                        {/* Mobile visible image */}
                        <div className="md:hidden mt-4 w-full flex justify-center">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-full max-w-[280px] h-auto object-cover rounded-[20px] shadow-md"
                          />
                        </div>
                      </div>
                    ) : (
                      /* Inactive Collapsed Row */
                      <div className="py-6 sm:py-8 px-6 sm:px-8 flex items-center justify-between">
                        <h3 className="font-bricolage text-2xl sm:text-3xl lg:text-[32px] font-normal text-dark tracking-tight">
                          {item.title}
                        </h3>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>

          </div>
        </div>
      </section>

      {/* Stats Banner Section */}
      <section className="w-full bg-white pb-24 sm:pb-32 lg:pb-40">
        <div className="max-w-[80vw] mx-auto px-6 sm:px-8 lg:px-12 w-full">
          <div className="w-full bg-primary rounded-[32px] sm:rounded-[40px] px-8 sm:px-12 lg:px-16 py-12 sm:py-16 lg:py-20 shadow-sm">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12 lg:gap-8 items-center text-center">
              {stats.map((stat, idx) => (
                <div key={idx} className="flex flex-col items-center">
                  <span className="font-bricolage text-4xl sm:text-5xl lg:text-[56px] font-medium text-white tracking-tight leading-none mb-3">
                    {stat.value}
                  </span>
                  <p className="font-sans text-sm sm:text-base font-normal text-white/95 leading-snug max-w-[200px]">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full bg-white pb-24 sm:pb-32 lg:pb-36">
        <div className="max-w-[80vw] mx-auto px-6 sm:px-8 lg:px-12 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Badge, Title & Description */}
            <div className="lg:col-span-5 flex flex-col items-start">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-testimonial-badge-bg border border-testimonial-badge-border text-testimonial-badge-text text-sm font-medium mb-6">
                <svg className="w-4 h-4 text-testimonial-badge-text" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span>Testimonials</span>
              </div>

              {/* Headline */}
              <h2 className="font-bricolage text-4xl sm:text-5xl lg:text-[56px] font-medium text-dark tracking-tight leading-[1.1] mb-4">
                Real users. <br />
                Real results.
              </h2>

              {/* Subheading */}
              <p className="text-base sm:text-lg text-muted font-normal leading-relaxed">
                See what our users are saying about us!
              </p>
            </div>

            {/* Right Column: Testimonial Card with Quotes */}
            <div className="lg:col-span-7">
              <div
                className="relative rounded-[32px] sm:rounded-[36px] overflow-hidden p-8 sm:p-12 lg:p-14 text-white shadow-lg bg-cover bg-center min-h-[380px] sm:min-h-[420px] flex flex-col justify-between"
                style={{
                  backgroundImage: `url('/images/home_testimonial_bg.png')`,
                  backgroundColor: '#1EA359',
                }}
              >
                {/* Upper Quote SVG */}
                <div className="relative z-10">
                  <svg width="73" height="58" viewBox="0 0 73 58" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 sm:w-14 h-auto mb-4">
                    <path d="M72.75 0C69.75 7.5 67.5833 14.5 66.25 21C65.0833 27.3333 64.3333 33.4167 64 39.25C63.8333 45.0833 63.75 51.1667 63.75 57.5H38.25C38.25 47.8333 38.8333 39.4167 40 32.25C41.3333 25.0833 42.9167 18.9167 44.75 13.75C46.75 8.41667 48.8333 3.83333 51 0H72.75ZM34.5 0C31.5 7.5 29.3333 14.5 28 21C26.8333 27.3333 26.0833 33.4167 25.75 39.25C25.5833 45.0833 25.5 51.1667 25.5 57.5H0C0 47.8333 0.583333 39.4167 1.75 32.25C3.08333 25.0833 4.66667 18.9167 6.5 13.75C8.5 8.41667 10.5 3.83333 12.5 0H34.5Z" fill="black" fillOpacity="0.25"/>
                  </svg>
                </div>

                {/* Quote text */}
                <div className="relative z-10 pt-1 pb-4 flex flex-col">
                  <p className="font-sans italic text-white/95 text-base sm:text-lg lg:text-[19px] font-light leading-relaxed">
                    {testimonials[currentTestimonialIndex].quote}
                  </p>

                  {/* Lower Quote SVG */}
                  <div className="flex justify-end mt-4">
                    <svg width="73" height="58" viewBox="0 0 73 58" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 sm:w-14 h-auto">
                      <path d="M-7.62939e-06 0C2.99999 7.5 5.16666 14.5 6.5 21C7.66666 27.3333 8.41666 33.4167 8.75 39.25C8.91666 45.0833 9 51.1667 9 57.5H34.5C34.5 47.8333 33.9167 39.4167 32.75 32.25C31.4167 25.0833 29.8333 18.9167 28 13.75C26 8.41667 23.9167 3.83333 21.75 0H-7.62939e-06ZM38.25 0C41.25 7.5 43.4167 14.5 44.75 21C45.9167 27.3333 46.6667 33.4167 47 39.25C47.1667 45.0833 47.25 51.1667 47.25 57.5H72.75C72.75 47.8333 72.1667 39.4167 71 32.25C69.6667 25.0833 68.0833 18.9167 66.25 13.75C64.25 8.41667 62.25 3.83333 60.25 0H38.25Z" fill="black" fillOpacity="0.25"/>
                    </svg>
                  </div>
                </div>

                {/* Footer: Author details & Nav Arrows */}
                <div className="relative z-10 pt-6 border-t border-white/20 flex items-center justify-between gap-4">
                  <div>
                    <h4 className="font-sans font-semibold text-white text-lg sm:text-xl leading-snug">
                      {testimonials[currentTestimonialIndex].name}
                    </h4>
                    <p className="font-sans text-white/80 text-sm sm:text-base">
                      {testimonials[currentTestimonialIndex].role}
                    </p>
                  </div>

                  {/* Navigation Buttons */}
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={handlePrevTestimonial}
                      className="transition-transform duration-200 hover:scale-105 active:scale-95 cursor-pointer"
                      aria-label="Previous testimonial"
                    >
                      <svg width="53" height="53" viewBox="0 0 53 53" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 sm:w-[53px] sm:h-[53px]">
                        <rect width="52" height="52" rx="26" transform="matrix(-1 0 0 1 52.5 0.5)" stroke="white"/>
                        <path d="M37.4998 27.5998L37.5 25.4H19.7113L24.0559 21.0555L22.5003 19.5L15.5 26.5L22.5003 33.5L24.0559 31.9444L19.7112 27.5999L37.4998 27.5998Z" fill="white"/>
                      </svg>
                    </button>

                    <button
                      type="button"
                      onClick={handleNextTestimonial}
                      className="transition-transform duration-200 hover:scale-105 active:scale-95 cursor-pointer"
                      aria-label="Next testimonial"
                    >
                      <svg width="53" height="53" viewBox="0 0 53 53" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 sm:w-[53px] sm:h-[53px]">
                        <rect x="0.5" y="0.5" width="52" height="52" rx="26" stroke="white"/>
                        <path d="M15.5002 27.5998L15.5 25.4H33.2887L28.9441 21.0555L30.4997 19.5L37.5 26.5L30.4997 33.5L28.9441 31.9444L33.2888 27.5999L15.5002 27.5998Z" fill="white"/>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Ready to Shape Africa's Tech Future CTA Card overlapping into Footer */}
      <CtaCard overlapFooter={true} />
    </div>
  )
}

export default Home
