import React, { useState } from 'react'
import { CtaCard } from '../components/ui/CtaCard'

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    topic: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        topic: '',
        message: '',
      })
    }, 4000)
  }

  return (
    <div className="w-full bg-white">
      {/* Contact Form Section */}
      <section className="w-full pt-32 sm:pt-40 lg:pt-44 pb-16 sm:pb-24">
        <div className="max-w-[80vw] mx-auto px-6 sm:px-8 lg:px-12 w-full">
          {/* Main Title matching Screenshot */}
          <h1 className="font-bricolage text-3xl sm:text-4xl md:text-5xl font-semibold text-dark text-center tracking-tight mb-12 sm:mb-16">
            Contact Us
          </h1>

          {/* Form Container */}
          <div className="w-full">
            {submitted && (
              <div className="mb-6 p-4 rounded-2xl bg-[#E8F8F5] border border-[#16A085]/30 text-[#16A085] text-sm font-medium text-center animate-in fade-in duration-300">
                ✓ Thank you! Your message has been sent successfully. We will get back to you shortly.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Row 1: Full Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-xs sm:text-sm font-medium text-dark mb-2"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    required
                    className="w-full bg-[#F8F9FA] border border-neutral-100 hover:border-neutral-200 focus:border-primary/60 focus:bg-white focus:outline-none rounded-[12px] px-4 py-3 sm:py-3.5 text-xs sm:text-sm text-dark placeholder:text-neutral-400 transition-all"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs sm:text-sm font-medium text-dark mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    required
                    className="w-full bg-[#F8F9FA] border border-neutral-100 hover:border-neutral-200 focus:border-primary/60 focus:bg-white focus:outline-none rounded-[12px] px-4 py-3 sm:py-3.5 text-xs sm:text-sm text-dark placeholder:text-neutral-400 transition-all"
                  />
                </div>
              </div>

              {/* Row 2: Phone Number & Select a topic */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-xs sm:text-sm font-medium text-dark mb-2"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                    className="w-full bg-[#F8F9FA] border border-neutral-100 hover:border-neutral-200 focus:border-primary/60 focus:bg-white focus:outline-none rounded-[12px] px-4 py-3 sm:py-3.5 text-xs sm:text-sm text-dark placeholder:text-neutral-400 transition-all"
                  />
                </div>

                <div>
                  <label
                    htmlFor="topic"
                    className="block text-xs sm:text-sm font-medium text-dark mb-2"
                  >
                    Select a topic
                  </label>
                  <div className="relative">
                    <select
                      id="topic"
                      name="topic"
                      value={formData.topic}
                      onChange={handleChange}
                      required
                      className="w-full bg-[#F8F9FA] border border-neutral-100 hover:border-neutral-200 focus:border-primary/60 focus:bg-white focus:outline-none rounded-[12px] px-4 py-3 sm:py-3.5 text-xs sm:text-sm text-dark appearance-none cursor-pointer transition-all pr-10"
                    >
                      <option value="" disabled className="text-neutral-400">
                        Select a topic
                      </option>
                      <option value="general">General Inquiry</option>
                      <option value="academy">Rise Tech Academy & Scholarships</option>
                      <option value="partnership">Partnership & Collaboration</option>
                      <option value="research">Research & AI Policy</option>
                      <option value="events">Events & Convenings</option>
                      <option value="media">Media & Press</option>
                      <option value="other">Other</option>
                    </select>

                    {/* Chevron Icon */}
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-neutral-400">
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Row 3: Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-xs sm:text-sm font-medium text-dark mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Type your message here"
                  required
                  className="w-full bg-[#F8F9FA] border border-neutral-100 hover:border-neutral-200 focus:border-primary/60 focus:bg-white focus:outline-none rounded-[12px] px-4 py-3.5 text-xs sm:text-sm text-dark placeholder:text-neutral-400 transition-all resize-none"
                />
              </div>

              {/* Row 4: Submit Button (Right-aligned orange pill) */}
              <div className="flex justify-end pt-2 sm:pt-3">
                <button
                  type="submit"
                  className="bg-primary hover:bg-primary-hover text-white px-7 sm:px-8 py-3 sm:py-3.5 rounded-full font-medium text-xs sm:text-sm shadow-xs hover:shadow-md transition-all cursor-pointer"
                >
                  Submit message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Bottom CTA Card overlapping footer matching screenshot */}
      <CtaCard overlapFooter={true} />
    </div>
  )
}

export default Contact
