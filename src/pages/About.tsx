import React from 'react'

interface FeatureItem {
  icon: React.ReactNode
  title: string
  description: string
}

interface TeamMember {
  name: string
  role: string
  image: string
}

export const About: React.FC = () => {
  const features: FeatureItem[] = [
    {
      icon: (
        <svg width="48" height="42" viewBox="0 0 59 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect y="38.0552" width="11.8" height="11.8" fill="#1A1A1A" />
          <rect x="20.0596" y="26.2544" width="11.8" height="23.6" fill="#1A1A1A" />
          <rect x="40.1201" y="12.0952" width="11.8" height="37.76" fill="#1A1A1A" />
          <path d="M11.505 33.63V34.22H11.806L11.9827 33.9763L11.505 33.63ZM20.06 21.83V21.24H19.7591L19.5824 21.4837L20.06 21.83ZM31.86 21.83V22.42H32.2086L32.3768 22.1147L31.86 21.83ZM39.825 7.375V6.785H39.4765L39.3083 7.09026L39.825 7.375ZM53.1 7.375V7.965H53.3836L53.5608 7.74357L53.1 7.375ZM59 0L52.6544 2.47919L57.9743 6.73507L59 0ZM0.295044 33.63V34.22H11.505V33.63V33.04H0.295044V33.63ZM11.505 33.63L11.9827 33.9763L20.5377 22.1763L20.06 21.83L19.5824 21.4837L11.0274 33.2837L11.505 33.63ZM20.06 21.83V22.42H31.86V21.83V21.24H20.06V21.83ZM31.86 21.83L32.3768 22.1147L40.3418 7.65974L39.825 7.375L39.3083 7.09026L31.3433 21.5453L31.86 21.83ZM39.825 7.375V7.965H53.1V7.375V6.785H39.825V7.375ZM53.1 7.375L53.5608 7.74357L56.1436 4.51498L55.6829 4.14641L55.2222 3.77784L52.6393 7.00643L53.1 7.375Z" fill="#1A1A1A" />
          <path d="M0.295044 33.63H11.505L20.06 21.83H31.86L39.825 7.375H53.1L56.05 3.6875" stroke="#1A1A1A" strokeWidth="2.36" />
        </svg>
      ),
      title: 'Impact driven',
      description: 'We create measurable economic, social, and career outcomes.',
    },
    {
      icon: (
        <svg width="40" height="44" viewBox="0 0 45 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.4533 44.9768V10.0234H12.5935V20.0468H31.8693V25.187H12.5935V40.0936H30.5842V44.9768H7.4533Z" fill="#1A1A1A" />
          <path d="M0 5.14021C0 2.71709 0 1.50553 0.752766 0.752766C1.50553 0 2.71709 0 5.14021 0H14.9066C17.3297 0 18.5413 0 19.294 0.752766C20.0468 1.50553 20.0468 2.71709 20.0468 5.14021V9.76639C20.0468 12.1895 20.0468 13.4011 19.294 14.1538C18.5413 14.9066 17.3297 14.9066 14.9066 14.9066H5.14021C2.71709 14.9066 1.50553 14.9066 0.752766 14.1538C0 13.4011 0 12.1895 0 9.76639V5.14021Z" fill="#1A1A1A" />
          <path d="M24.673 20.0468C24.673 17.6237 24.673 16.4121 25.4258 15.6594C26.1785 14.9066 27.3901 14.9066 29.8132 14.9066H39.5796C42.0027 14.9066 43.2143 14.9066 43.967 15.6594C44.7198 16.4121 44.7198 17.6237 44.7198 20.0468V24.673C44.7198 27.0961 44.7198 28.3077 43.967 29.0604C43.2143 29.8132 42.0027 29.8132 39.5796 29.8132H29.8132C27.3901 29.8132 26.1785 29.8132 25.4258 29.0604C24.673 28.3077 24.673 27.0961 24.673 24.673V20.0468Z" fill="#1A1A1A" />
          <path d="M24.673 40.0936C24.673 37.6705 24.673 36.4589 25.4258 35.7062C26.1785 34.9534 27.3901 34.9534 29.8132 34.9534H39.5796C42.0027 34.9534 43.2143 34.9534 43.967 35.7062C44.7198 36.4589 44.7198 37.6705 44.7198 40.0936V44.7198C44.7198 47.1429 44.7198 48.3545 43.967 49.1072C43.2143 49.86 42.0027 49.86 39.5796 49.86H29.8132C27.3901 49.86 26.1785 49.86 25.4258 49.1072C24.673 48.3545 24.673 47.1429 24.673 44.7198V40.0936Z" fill="#1A1A1A" />
        </svg>
      ),
      title: 'Ethical innovation',
      description: 'AI built with responsibility, fairness, and human dignity at the core.',
    },
    {
      icon: (
        <svg width="48" height="40" viewBox="0 0 60 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M29.9159 0L0 17.4509L29.9159 34.9018L54.8457 20.3595V38.6413H59.8317V17.4509L29.9159 0ZM9.96951 28.6457V39.8881C14.5178 45.9433 21.7591 49.86 29.9154 49.86C38.0714 49.86 45.3128 45.9433 49.861 39.8881L49.86 28.6477L29.9166 40.2814L9.96951 28.6457Z" fill="#1A1A1A" />
        </svg>
      ),
      title: 'Future ready skills',
      description: 'Training that bridges education and employment.',
    },
    {
      icon: (
        <svg width="40" height="44" viewBox="0 0 45 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M42.3848 0C43.7594 0 44.874 1.13519 44.874 2.47266V47.3877C44.8739 48.7532 43.7648 49.8603 42.3975 49.8604H2.47656C1.10891 49.8604 0.000174603 48.7411 0 47.3486V17.4512H14.958C16.3348 17.4512 17.4512 16.3348 17.4512 14.958V0H42.3848ZM9 40.8965V43.3711H23.8477V40.8965H9ZM22.8223 18.75L23.2598 20.0625L15.4736 27.8486L14.0732 27.499L12.3232 29.249L21.9473 38.8721L23.6973 37.123L23.3477 35.7227L26.3223 32.748L33.3213 39.7471L35.0713 37.998L28.0723 30.998L31.1338 27.9365L32.4463 28.374L34.1963 26.624L24.5723 17L22.8223 18.75ZM12.4648 12.4648H0L12.4648 0.0078125V12.4648Z" fill="#1A1A1A" />
        </svg>
      ),
      title: 'Policy influence',
      description: 'Shaping AI governance, digital rights, and tech justice.',
    },
    {
      icon: (
        <svg width="44" height="44" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M24.93 19.944C30.4373 19.944 34.902 15.4794 34.902 9.972C34.902 4.46461 30.4373 0 24.93 0C19.4226 0 14.958 4.46461 14.958 9.972C14.958 15.4794 19.4226 19.944 24.93 19.944ZM8.7255 27.423C12.1676 27.423 14.958 24.6326 14.958 21.1905C14.958 17.7484 12.1676 14.958 8.7255 14.958C5.28339 14.958 2.493 17.7484 2.493 21.1905C2.493 24.6326 5.28339 27.423 8.7255 27.423ZM47.367 21.1905C47.367 24.6326 44.5766 27.423 41.1345 27.423C37.6924 27.423 34.902 24.6326 34.902 21.1905C34.902 17.7484 37.6924 14.958 41.1345 14.958C44.5766 14.958 47.367 17.7484 47.367 21.1905ZM24.93 22.437C31.8142 22.437 37.395 28.0178 37.395 34.902V49.86H12.465V34.902C12.465 28.0178 18.0458 22.437 24.93 22.437ZM7.479 34.9018C7.479 33.1744 7.72997 31.5055 8.19743 29.93L7.77477 29.9669C3.40302 30.4405 0 34.1436 0 38.6413V49.8598H7.479V34.9018ZM49.86 49.8598V38.6413C49.86 33.999 46.2349 30.2034 41.6625 29.93C42.13 31.5055 42.381 33.1744 42.381 34.9018V49.8598H49.86Z" fill="#1A1A1A" />
        </svg>
      ),
      title: 'Inclusive access',
      description: 'Prioritizing women, underserved communities and the disabled',
    },
    {
      icon: (
        <svg width="44" height="44" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M24.93 34.902L32.409 49.86H17.451L24.93 34.902ZM18.3798 35.5372C14.8299 33.3406 12.465 29.4114 12.465 24.93C12.465 18.0458 18.0458 12.465 24.93 12.465C31.8142 12.465 37.395 18.0458 37.395 24.93C37.395 29.4114 35.0301 33.3406 31.4801 35.5372L28.1006 28.7782C29.2092 27.8638 29.916 26.4794 29.916 24.93C29.916 22.1762 27.6838 19.944 24.93 19.944C22.1762 19.944 19.944 22.1762 19.944 24.93C19.944 26.4794 20.6508 27.8638 21.7594 28.7782L18.3798 35.5372ZM12.7929 46.7111C5.16086 42.4493 0 34.2922 0 24.93C0 11.1615 11.1615 0 24.93 0C38.6983 0 49.86 11.1615 49.86 24.93C49.86 34.2922 44.6992 42.4493 37.0672 46.7111L33.7168 40.0107C38.899 36.9847 42.381 31.3639 42.381 24.93C42.381 15.2921 34.5679 7.479 24.93 7.479C15.2921 7.479 7.479 15.2921 7.479 24.93C7.479 31.3639 10.9609 36.9847 16.1431 40.0107L12.7929 46.7111Z" fill="#1A1A1A" />
        </svg>
      ),
      title: 'Global relevance',
      description: 'Talent and solutions that compete globally and deliver locally.',
    },
  ]

  const teamMembers: TeamMember[] = [
    { name: 'Toyosi Akerele', role: 'CEO', image: '/images/about_tao_orange.png' },
    { name: 'Toyosi Akerele', role: 'People', image: '/images/about_tao_purple.png' },
    { name: 'Toyosi Akerele', role: 'Engineering', image: '/images/about_tao_blue.png' },
    { name: 'Toyosi Akerele', role: 'Design', image: '/images/about_tao_green.png' },
    { name: 'Toyosi Akerele', role: 'People', image: '/images/about_tao_purple.png' },
    { name: 'Toyosi Akerele', role: 'Design', image: '/images/about_tao_green.png' },
    { name: 'Toyosi Akerele', role: 'Customer Support', image: '/images/about_tao_orange.png' },
    { name: 'Toyosi Akerele', role: 'Engineering', image: '/images/about_tao_blue.png' },
  ]

  return (
    <div className="w-full bg-white">
      {/* Hero Section */}
      <section className="pt-32 sm:pt-40 pb-16 sm:pb-24 max-w-[80vw] mx-auto px-6 sm:px-8 lg:px-12 flex flex-col items-center">
        {/* Main Title */}
        <h1 className="font-bricolage text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-neutral-900 leading-[1.12] text-center max-w-4xl mx-auto">
          Building Africa’s
          <br />
          Digital Capacity
        </h1>

        {/* Subtitle */}
        <p className="font-sans text-base sm:text-lg md:text-xl text-neutral-600 font-normal leading-relaxed text-center max-w-2xl mx-auto mt-4 sm:mt-6">
          Driving Africa’s digital future by uniting AI, technology, policy, and people for sustainable growth.
        </p>

        {/* Hero Image */}
        <div className="mt-10 sm:mt-14 w-full rounded-[24px] sm:rounded-[32px] overflow-hidden shadow-sm border border-neutral-100">
          <img
            src="/images/about_hero_img.png"
            alt="Building Africa's Digital Capacity - Rise Networks AI Labs"
            className="w-full h-auto object-cover max-h-[650px]"
          />
        </div>
      </section>

      {/* Mission, Vision & Commitment Section */}
      <section className="max-w-[80vw] mx-auto px-6 sm:px-8 lg:px-12 py-12 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Big Reality Statement */}
          <div className="lg:col-span-6">
            <h2 className="font-sans text-2xl sm:text-3xl lg:text-[40px] font-medium leading-[1.45] lg:leading-[1.5] text-[#141416] tracking-tight">
              Rise Networks was born from a simple but urgent reality: Africa’s digital future cannot be built without ethical, inclusive and globally competitive AI talent.
            </h2>
          </div>

          {/* Right Column: Mission, Vision, Commitment */}
          <div className="lg:col-span-6 flex flex-col space-y-10 sm:space-y-12">
            {/* Mission */}
            <div>
              <h3 className="font-sans text-2xl sm:text-3xl font-semibold text-[#EE7747] tracking-tight mb-3">
                Mission
              </h3>
              <p className="font-sans text-sm sm:text-base text-neutral-600 leading-[1.85] sm:leading-[1.95]">
                To ensure that technology becomes a tool for equity, empowerment and inclusive innovation and equip Africa’s talents and organizations with future-ready skills, advance Tech Justice and Digital Rights, influence AI policy and foster community transformation through research, training, advisory, and advocacy.
              </p>
            </div>

            {/* Vision */}
            <div>
              <h3 className="font-sans text-2xl sm:text-3xl font-semibold text-[#10B981] tracking-tight mb-3">
                Vision
              </h3>
              <p className="font-sans text-sm sm:text-base text-neutral-600 leading-[1.85] sm:leading-[1.95]">
                To become Africa’s leading hub for Artificial Intelligence talent and ethical innovation; empowering people with world-class skills, fostering inclusive opportunities and shaping a future-ready workforce and equitable futures that drives sustainable development locally and competes globally.
              </p>
            </div>

            {/* Our Commitment */}
            <div>
              <h3 className="font-sans text-2xl sm:text-3xl font-semibold text-[#38BDF8] tracking-tight mb-3">
                Our Commitment
              </h3>
              <p className="font-sans text-sm sm:text-base text-neutral-600 leading-[1.85] sm:leading-[1.95]">
                Rise Networks is committed to building Africa’s next generation of globally competitive AI talent by ensuring marginalized voices are actively included in the digital future, promoting privacy, freedom of expression and digital literacy, and transforming technology into a powerful tool for equitable opportunity and social empowerment, while advancing ethical innovation, strengthening cross sector collaboration, and continuously refining its objectives to drive efficient, globally relevant and sustainable impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* We are here for Africa Section */}
      <section
        className="w-full bg-cover bg-center bg-no-repeat py-24 sm:py-32 relative overflow-hidden"
        style={{ backgroundImage: `url('/images/about_we_are_here_bg.png')` }}
      >
        <div className="max-w-[80vw] mx-auto px-6 sm:px-8 lg:px-12">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-bricolage text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#141416] leading-[1.15]">
              We are here
              <br />
              for Africa
            </h2>
            <p className="font-sans text-base sm:text-lg text-neutral-600 font-normal leading-relaxed mt-4 sm:mt-5 max-w-xl mx-auto">
              We put people first, focusing on access, inclusion and real outcomes that turn learning into opportunity.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto mt-14 sm:mt-18">
            {features.map((item, idx) => (
              <div
                key={idx}
                className="bg-white/10 backdrop-blur-3xl border border-white/20 rounded-4xl p-8 sm:p-10 shadow-[0_4px_24px_rgba(0,0,0,0.03)] transition-all duration-300 hover:bg-white/55 hover:shadow-md flex flex-col justify-between min-h-[260px] sm:min-h-[290px]"
              >
                <div className="mb-8">{item.icon}</div>
                <div>
                  <h3 className="font-sans font-semibold text-lg sm:text-xl text-[#141416] tracking-tight mb-2">
                    {item.title}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-neutral-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 sm:py-28 max-w-[80vw] mx-auto px-6 sm:px-8 lg:px-12">
        {/* Badge & Heading */}
        <div className="mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-testimonial-badge-bg border border-testimonial-badge-border text-testimonial-badge-text text-xs sm:text-sm font-medium mb-4">
            Meet our team
          </div>
          <h2 className="font-bricolage text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#141416]">
            The right skills with the right people.
          </h2>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
          {teamMembers.map((member, idx) => (
            <div key={idx} className="flex flex-col group">
              <div className="rounded-[22px] sm:rounded-[28px] overflow-hidden aspect-square w-full mb-3.5 bg-neutral-100 shadow-sm transition-transform duration-300 group-hover:scale-[1.02]">
                <img
                  src={member.image}
                  alt={`${member.name} - ${member.role}`}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-sans font-bold text-base sm:text-lg text-neutral-900 tracking-tight">
                {member.name}
              </h3>
              <p className="font-sans text-xs sm:text-sm text-neutral-400 font-normal mt-0.5">
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default About
