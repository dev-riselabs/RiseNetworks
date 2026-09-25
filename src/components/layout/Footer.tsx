import React from 'react'
import { Link } from 'react-router-dom'

export const Footer: React.FC = () => {
  const meetRiseLinks = [
    { label: 'About Us', href: '/about-us' },
    { label: 'Why Rise Networks', href: '/why-rise-networks' },
    { label: 'FAQs', href: '/faq' },
    { label: 'The Rise Networks Framework for Global AI Leadership', href: '#' },
    { label: 'Strategic Vision & Futuristic Outlook', href: '#' },
  ]

  const whatWeDoLinks = [
    { label: 'Operational Focus Areas', href: '/programs' },
    { label: 'Our Program Pillars', href: '/programs' },
    { label: 'Events [Trainings, Workshops, Webinars]', href: '/programs' },
    { label: 'Africa Next AI Fellowship', href: '/programs' },
    { label: 'Makemation AI Tech Festivals', href: '/programs' },
  ]

  const techAcademyLinks = [
    { label: 'Technical Programs', href: '/programs' },
    { label: 'Professional Programs', href: '/programs' },
    { label: 'Policy & Social Impact Programs', href: '/programs' },
    { label: 'Rise Networks AI Lab', href: '/programs' },
    { label: 'Scholarship', href: '/programs' },
  ]

  const knowledgeHubLinks = [
    { label: 'Blog', href: '#' },
    { label: 'Insights & Articles', href: '#' },
    { label: 'Research Papers', href: '#' },
    { label: 'Newsletters', href: '#' },
    { label: 'Research & Advisory', href: '#' },
  ]

  const getInTouchLinks = [
    { label: 'Partner With Us', href: '/partners' },
    { label: 'Become a Mentor', href: '#' },
    { label: 'Volunteer', href: '#' },
    { label: 'Careers', href: '#' },
    { label: 'Contact Form', href: '#' },
  ]

  const newsroomLinks = [
    { label: 'Photos', href: '#' },
    { label: 'Videos', href: '#' },
    { label: 'Media Release', href: '#' },
  ]

  return (
    <footer className="w-full bg-[#141416] text-[#A1A1AA] pt-8 sm:pt-14 pb-12 overflow-hidden">
      <div className="max-w-[80vw] mx-auto px-6 sm:px-8 lg:px-12 w-full">
        
        {/* Top Header: Logo & Tagline */}
        <div className="flex flex-col md:flex-row items-start md:items-center gap-8 mb-14">
          <Link to="/" className="shrink-0">
            <img
              src="/logo/rise_networks_logo_footer.png"
              alt="Rise Networks"
              className="h-16 sm:h-20 w-auto object-contain"
            />
          </Link>

          <p className="font-sans text-base sm:text-lg text-white font-normal leading-relaxed max-w-3xl">
            Driving Africa's AI Future: Empowering People, Shaping Policy, and Transforming Communities.
          </p>
        </div>

        {/* Links Grid: 5 Column Layout matching screenshot */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-10 pb-12">
          
          {/* Column 1: MEET RISE */}
          <div className="flex flex-col">
            <h3 className="font-sans text-xs font-semibold tracking-wider text-primary uppercase mb-4">
              MEET RISE
            </h3>
            <ul className="flex flex-col">
              {meetRiseLinks.map((link) => (
                <li key={link.label} className="border-b border-white py-2">
                  <Link
                    to={link.href}
                    className="text-xs sm:text-sm text-[#A1A1AA] hover:text-white transition-colors duration-200 block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: WHAT WE DO + GET IN TOUCH */}
          <div className="flex flex-col space-y-10">
            {/* WHAT WE DO */}
            <div className="flex flex-col">
              <h3 className="font-sans text-xs font-semibold tracking-wider text-primary uppercase mb-4">
                WHAT WE DO
              </h3>
              <ul className="flex flex-col">
                {whatWeDoLinks.map((link) => (
                  <li key={link.label} className="border-b border-white py-2">
                    <Link
                      to={link.href}
                      className="text-xs sm:text-sm text-[#A1A1AA] hover:text-white transition-colors duration-200 block"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* GET IN TOUCH */}
            <div className="flex flex-col">
              <h3 className="font-sans text-xs font-semibold tracking-wider text-primary uppercase mb-4">
                GET IN TOUCH
              </h3>
              <ul className="flex flex-col">
                {getInTouchLinks.map((link) => (
                  <li key={link.label} className="border-b border-white py-2">
                    <Link
                      to={link.href}
                      className="text-xs sm:text-sm text-[#A1A1AA] hover:text-white transition-colors duration-200 block"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Column 3: TECH ACADEMY + NEWSROOM */}
          <div className="flex flex-col space-y-10">
            {/* TECH ACADEMY */}
            <div className="flex flex-col">
              <h3 className="font-sans text-xs font-semibold tracking-wider text-primary uppercase mb-4">
                TECH ACADEMY
              </h3>
              <ul className="flex flex-col">
                {techAcademyLinks.map((link) => (
                  <li key={link.label} className="border-b border-white py-2">
                    <Link
                      to={link.href}
                      className="text-xs sm:text-sm text-[#A1A1AA] hover:text-white transition-colors duration-200 block"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* NEWSROOM */}
            <div className="flex flex-col">
              <h3 className="font-sans text-xs font-semibold tracking-wider text-primary uppercase mb-4">
                NEWSROOM
              </h3>
              <ul className="flex flex-col">
                {newsroomLinks.map((link) => (
                  <li key={link.label} className="border-b border-white py-2">
                    <Link
                      to={link.href}
                      className="text-xs sm:text-sm text-[#A1A1AA] hover:text-white transition-colors duration-200 block"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Column 4: KNOWLEDGE HUB */}
          <div className="flex flex-col">
            <h3 className="font-sans text-xs font-semibold tracking-wider text-primary uppercase mb-4">
              KNOWLEDGE HUB
            </h3>
            <ul className="flex flex-col">
              {knowledgeHubLinks.map((link) => (
                <li key={link.label} className="border-b border-white py-2">
                  <Link
                    to={link.href}
                    className="text-xs sm:text-sm text-[#A1A1AA] hover:text-white transition-colors duration-200 block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: CONTACT INFO */}
          <div className="flex flex-col space-y-6 sm:text-left lg:text-right">
            <div>
              <p className="font-sans font-bold text-sm sm:text-base text-white">+234.706.054.5027</p>
              <p className="font-sans text-xs text-[#A1A1AA] mt-0.5">info@risenetworks.org</p>
            </div>

            <div>
              <p className="font-sans font-semibold text-xs sm:text-sm text-white">Rise Networks AI Labs</p>
              <p className="font-sans text-xs text-[#A1A1AA] leading-relaxed mt-1">
                8a Adebayo Mokuolu Street, Anthony Village, <br />
                Lagos, Nigeria.
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright, Terms & Social Links */}
        <div className="pt-8 border-t border-white flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-[#A1A1AA]">
          <div className="flex flex-wrap items-center gap-3 text-center md:text-left">
            <span>Copyright c 2025 Rise Networks | All Rights Reserved</span>
            <span className="hidden sm:inline text-white">›</span>
            <Link to="#" className="hover:text-white transition-colors">
              Terms and Conditions
            </Link>
            <span className="hidden sm:inline text-white">›</span>
            <Link to="#" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            {/* Twitter / X */}
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1 rounded-full text-white hover:text-primary transition-all duration-200 hover:scale-110"
              aria-label="Twitter"
            >
              <svg width="22" height="22" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.6387 6.55127H19.9329L14.9221 12.277L20.8168 20.0695H16.2024L12.5857 15.3446L8.45221 20.0695H6.15477L11.5133 13.944L5.8623 6.55127H10.5937L13.8595 10.8699L17.6387 6.55127ZM16.8328 18.6981H18.1034L9.90152 7.8511H8.5367L16.8328 18.6981Z" fill="currentColor"/>
              </svg>
            </a>

            {/* Facebook */}
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1 rounded-full text-white hover:text-primary transition-all duration-200 hover:scale-110"
              aria-label="Facebook"
            >
              <svg width="22" height="22" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21.3691 13.3099C21.3691 8.858 17.7621 5.25098 13.3101 5.25098C8.85824 5.25098 5.25122 8.858 5.25122 13.3099C5.25122 17.3322 8.19825 20.6663 12.0509 21.2713V15.6395H10.0037V13.3099H12.0509V11.5343C12.0509 9.51473 13.2533 8.39916 15.0948 8.39916C15.9767 8.39916 16.899 8.55644 16.899 8.55644V10.5387H15.8825C14.8816 10.5387 14.5694 11.16 14.5694 11.7972V13.3099H16.8044L16.447 15.6395H14.5694V21.2713C18.422 20.6663 21.3691 17.3322 21.3691 13.3099Z" fill="currentColor"/>
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1 rounded-full text-white hover:text-primary transition-all duration-200 hover:scale-110"
              aria-label="LinkedIn"
            >
              <svg width="22" height="22" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.5497 6.03076H7.06811C6.49618 6.03076 6.03149 6.50195 6.03149 7.08037V19.5392C6.03149 20.1176 6.49618 20.5888 7.06811 20.5888H19.5497C20.1216 20.5888 20.5896 20.1176 20.5896 19.5392V7.08037C20.5896 6.50195 20.1216 6.03076 19.5497 6.03076ZM10.4314 18.5091H8.2737V11.5615H10.4347V18.5091H10.4314ZM9.35255 10.6127C8.66039 10.6127 8.10147 10.0505 8.10147 9.36157C8.10147 8.67266 8.66039 8.11048 9.35255 8.11048C10.0415 8.11048 10.6036 8.67266 10.6036 9.36157C10.6036 10.0537 10.0447 10.6127 9.35255 10.6127ZM18.5196 18.5091H16.3619V15.1295C16.3619 14.3237 16.3456 13.287 15.2408 13.287C14.1164 13.287 13.9442 14.1644 13.9442 15.0711V18.5091H11.7865V11.5615H13.8565V12.5104H13.8857C14.1749 11.9645 14.8801 11.3893 15.9297 11.3893C18.1134 11.3893 18.5196 12.8289 18.5196 14.7006V18.5091Z" fill="currentColor"/>
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1 rounded-full text-white hover:text-primary transition-all duration-200 hover:scale-110"
              aria-label="Instagram"
            >
              <svg width="22" height="22" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.3135 9.5731C11.2468 9.5731 9.57977 11.2401 9.57977 13.3069C9.57977 15.3736 11.2468 17.0406 13.3135 17.0406C15.3802 17.0406 17.0473 15.3736 17.0473 13.3069C17.0473 11.2401 15.3802 9.5731 13.3135 9.5731ZM13.3135 15.7343C11.978 15.7343 10.8861 14.6457 10.8861 13.3069C10.8861 11.968 11.9747 10.8794 13.3135 10.8794C14.6523 10.8794 15.741 11.968 15.741 13.3069C15.741 14.6457 14.6491 15.7343 13.3135 15.7343ZM18.0709 9.42038C18.0709 9.90456 17.6809 10.2913 17.2 10.2913C16.7158 10.2913 16.3291 9.90131 16.3291 9.42038C16.3291 8.93944 16.7191 8.54949 17.2 8.54949C17.6809 8.54949 18.0709 8.93944 18.0709 9.42038ZM20.5438 10.3043C20.4886 9.13766 20.2221 8.1043 19.3675 7.25291C18.5161 6.40153 17.4827 6.13506 16.3161 6.07657C15.1138 6.00833 11.51 6.00833 10.3077 6.07657C9.14433 6.13181 8.11097 6.39828 7.25633 7.24966C6.4017 8.10105 6.13848 9.13441 6.07999 10.301C6.01175 11.5033 6.01175 15.1071 6.07999 16.3095C6.13523 17.4761 6.4017 18.5094 7.25633 19.3608C8.11097 20.2122 9.14108 20.4787 10.3077 20.5371C11.51 20.6054 15.1138 20.6054 16.3161 20.5371C17.4827 20.4819 18.5161 20.2154 19.3675 19.3608C20.2189 18.5094 20.4853 17.4761 20.5438 16.3095C20.6121 15.1071 20.6121 11.5066 20.5438 10.3043ZM18.9905 17.5995C18.7371 18.2364 18.2464 18.7271 17.6062 18.9838C16.6476 19.364 14.3729 19.2763 13.3135 19.2763C12.2542 19.2763 9.97622 19.3608 9.02085 18.9838C8.38393 18.7304 7.89325 18.2397 7.63653 17.5995C7.25633 16.6409 7.34407 14.3662 7.34407 13.3069C7.34407 12.2475 7.25958 9.96955 7.63653 9.01418C7.89 8.37726 8.38068 7.88658 9.02085 7.62986C9.97947 7.24966 12.2542 7.3374 13.3135 7.3374C14.3729 7.3374 16.6508 7.25291 17.6062 7.62986C18.2431 7.88333 18.7338 8.37401 18.9905 9.01418C19.3707 9.9728 19.283 12.2475 19.283 13.3069C19.283 14.3662 19.3707 16.6442 18.9905 17.5995Z" fill="currentColor"/>
              </svg>
            </a>
          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer
