import React from 'react'
import { PageHero } from '../components/ui/PageHero'
import { CtaCard } from '../components/ui/CtaCard'

export const Research: React.FC = () => {
  return (
    <div className="w-full bg-white">
      {/* 1. Page Hero Section matching Academy Hero Banner */}
      <PageHero
        title="Our Research"
        subtitle={
          <>
            Advancing Responsible, Human-Centered <br className="hidden sm:inline" />
            AI for Africa and the World
          </>
        }
        bgImage="/images/page_hero_bg.png"
        bannerImage="/images/scholarship_hero_page.png"
        bannerAlt="Our Research - Rise Networks"
      />

      {/* 2. Interdisciplinary Research Philosophy Statement (Right-Aligned) */}
      <section className="w-full bg-white py-16 sm:py-24 lg:py-28">
        <div className="max-w-[80vw] mx-auto px-6 sm:px-8 lg:px-12 w-full flex justify-end">
          <div className="max-w-4xl">
            <p className="font-sans text-xl sm:text-2xl md:text-3xl lg:text-[32px] text-dark font-normal leading-[1.42] tracking-tight">
              Rise Networks conducts interdisciplinary research at the intersection of Artificial Intelligence, society, and ethics, using cross-border collaboration and Open-Source Intelligence (OSINT) methods. We examine critical issues such as AI’s environmental impact, psychological effects, and corporate responsibility. Beyond publishing, we drive engagement to advance responsible, human-centered AI globally.
            </p>
          </div>
        </div>
      </section>

      {/* 3. AI, Ethics & Governance (Townhall-style Bento Grid - Exact 50/50 Right Height) */}
      <section className="w-full bg-white py-16 sm:py-24 lg:py-28">
        <div className="max-w-[80vw] mx-auto px-6 sm:px-8 lg:px-12 w-full">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <h2 className="font-bricolage text-4xl sm:text-5xl lg:text-[56px] font-medium text-dark tracking-tight leading-tight">
              AI, Ethics & Governance
            </h2>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-stretch">
            {/* Left Tall Card (Col-span 5) */}
            <div className="lg:col-span-5 bg-[#F8F9FA] rounded-[32px] sm:rounded-[40px] p-6 sm:p-8 flex flex-col justify-between border border-neutral-200/60 shadow-xs h-full min-h-[440px] lg:min-h-[500px]">
              <div className="w-full h-[260px] sm:h-[300px] lg:h-[320px] rounded-[24px] overflow-hidden">
                <img
                  src="/images/ai_indus_1.png"
                  alt="Regulatory Frameworks for Responsible AI"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="font-sans text-sm sm:text-base text-dark font-medium leading-relaxed mt-6">
                Regulatory Frameworks for Responsible AI: Building African approaches to AI governance and safety standards.
              </p>
            </div>

            {/* Right Column (Col-span 7) - Exact 50/50 Half-Half Height Split */}
            <div className="lg:col-span-7 grid grid-rows-2 gap-5 sm:gap-6 h-full min-h-[440px] lg:min-h-[500px]">
              {/* Top Row (Exact Half / 50% Height) */}
              <div className="h-full min-h-0 bg-[#F8F9FA] rounded-[32px] sm:rounded-[40px] p-6 sm:p-8 lg:p-8 flex flex-col justify-between border border-neutral-200/60 shadow-xs">
                <h3 className="font-bricolage text-2xl sm:text-3xl font-medium text-dark tracking-tight">
                  AI and Democratic Integrity
                </h3>
                <p className="font-sans text-xs sm:text-sm text-muted leading-relaxed">
                  Disinformation, election interference and algorithmic influence on public opinion.
                </p>
              </div>

              {/* Bottom Row (Exact Half / 50% Height) */}
              <div className="h-full min-h-0 grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                {/* Bottom Left Image Card */}
                <div className="h-full min-h-0 rounded-[28px] sm:rounded-[32px] overflow-hidden shadow-xs">
                  <img
                    src="/images/ai_indus_2.png"
                    alt="AI and Public Policy Innovation"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Bottom Right Content Card */}
                <div className="h-full min-h-0 bg-[#F8F9FA] rounded-[28px] sm:rounded-[32px] p-6 sm:p-7 flex flex-col justify-between border border-neutral-200/60 shadow-xs">
                  <h3 className="font-bricolage text-xl sm:text-2xl font-medium text-dark leading-snug tracking-tight">
                    AI and Public Policy Innovation
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-muted leading-relaxed">
                    Using AI to improve governance, engagement, and service delivery.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. AI, Economy And Labour Section */}
      <section className="w-full bg-white py-16 sm:py-24 lg:py-28">
        <div className="max-w-[80vw] mx-auto px-6 sm:px-8 lg:px-12 w-full">
          {/* Header Row: Left Title & Right Description */}
          <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-8 lg:gap-16 mb-12 sm:mb-16">
            <div className="lg:w-5/12">
              <h2 className="font-bricolage text-4xl sm:text-5xl lg:text-[56px] font-medium text-dark tracking-tight leading-[1.1]">
                AI, Economy <br />
                And Labour
              </h2>
            </div>
            <div className="lg:w-7/12">
              <p className="font-sans text-base sm:text-lg lg:text-[20px] text-dark/85 font-normal leading-relaxed">
                We study how automation and data-driven systems are transforming labour, productivity, and employment, and how inclusive AI policies can foster equitable economic growth in emerging markets.
              </p>
            </div>
          </div>

          {/* 2-Column Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {/* Left Card: The Future of Work */}
            <div className="bg-[#F8F9FA] rounded-[32px] sm:rounded-[40px] p-8 sm:p-12 flex flex-col justify-between min-h-[260px] sm:min-h-[300px] border border-neutral-200/60 shadow-xs">
              <h3 className="font-bricolage text-2xl sm:text-3xl font-medium text-dark tracking-tight">
                The Future of Work
              </h3>
              <p className="font-sans text-xs sm:text-sm text-muted leading-relaxed mt-8 sm:mt-12">
                Automation, reskilling, and the informal economy in Africa's labour markets.
              </p>
            </div>

            {/* Right Card: AI and Economic Inclusion */}
            <div className="bg-[#F8F9FA] rounded-[32px] sm:rounded-[40px] p-8 sm:p-12 flex flex-col justify-between min-h-[260px] sm:min-h-[300px] border border-neutral-200/60 shadow-xs">
              <h3 className="font-bricolage text-2xl sm:text-3xl font-medium text-dark tracking-tight">
                AI and Economic Inclusion
              </h3>
              <p className="font-sans text-xs sm:text-sm text-muted leading-relaxed mt-8 sm:mt-12">
                How AI can reduce (or widen) inequality in access to credit, markets, and opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. AI, Environment And Infrastructure Bento Section - Exact 50/50 Right Height */}
      <section className="w-full bg-white py-16 sm:py-24 lg:py-28">
        <div className="max-w-[80vw] mx-auto px-6 sm:px-8 lg:px-12 w-full">
          {/* Header Row: Left Title & Right Description */}
          <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-8 lg:gap-16 mb-12 sm:mb-16">
            <div className="lg:w-5/12">
              <h2 className="font-bricolage text-4xl sm:text-5xl lg:text-[56px] font-medium text-dark tracking-tight leading-[1.1]">
                AI, Environment <br />
                And Infrastructure
              </h2>
            </div>
            <div className="lg:w-7/12">
              <p className="font-sans text-base sm:text-lg lg:text-[20px] text-dark/85 font-normal leading-relaxed">
                We research the environmental costs of AI infrastructure, from data centers to resource extraction, while advancing sustainable AI innovations that support climate resilience and ecological protection.
              </p>
            </div>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-stretch">
            {/* Left Tall Image Card (Col-span 5) */}
            <div className="lg:col-span-5 rounded-[32px] sm:rounded-[40px] overflow-hidden shadow-xs h-full min-h-[440px] lg:min-h-[500px]">
              <img
                src="/images/our_program_connected_ecosystem.png"
                alt="AI, Environment And Infrastructure"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right Column (Col-span 7) - Exact 50/50 Half-Half Height Split */}
            <div className="lg:col-span-7 grid grid-rows-2 gap-5 sm:gap-6 h-full min-h-[440px] lg:min-h-[500px]">
              {/* Top Row (Exact Half / 50% Height) */}
              <div className="h-full min-h-0 bg-[#F8F9FA] rounded-[32px] sm:rounded-[40px] p-6 sm:p-8 lg:p-8 flex flex-col justify-between border border-neutral-200/60 shadow-xs">
                <h3 className="font-bricolage text-2xl sm:text-3xl font-medium text-dark tracking-tight">
                  Green AI and Sustainable Computing
                </h3>
                <p className="font-sans text-xs sm:text-sm text-muted leading-relaxed">
                  Energy consumption, carbon footprint, and responsible data center operations.
                </p>
              </div>

              {/* Bottom Row (Exact Half / 50% Height) */}
              <div className="h-full min-h-0 grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                {/* Bottom Left Content Card */}
                <div className="h-full min-h-0 bg-[#F8F9FA] rounded-[28px] sm:rounded-[32px] p-6 sm:p-7 flex flex-col justify-between border border-neutral-200/60 shadow-xs">
                  <h3 className="font-bricolage text-xl sm:text-2xl font-medium text-dark leading-snug tracking-tight">
                    AI for Climate Action
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-muted leading-relaxed">
                    Using predictive models for early warning systems, disaster resilience, and agriculture.
                  </p>
                </div>

                {/* Bottom Right Image Card */}
                <div className="h-full min-h-0 rounded-[28px] sm:rounded-[32px] overflow-hidden shadow-xs">
                  <img
                    src="/images/ai_indus_2.png"
                    alt="AI for Climate Action"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. AI, Culture And Knowledge Section */}
      <section className="w-full bg-white py-16 sm:py-24 lg:py-28">
        <div className="max-w-[80vw] mx-auto px-6 sm:px-8 lg:px-12 w-full">
          {/* Header Row: Left Title & Right Description */}
          <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-8 lg:gap-16 mb-12 sm:mb-16">
            <div className="lg:w-5/12">
              <h2 className="font-bricolage text-4xl sm:text-5xl lg:text-[56px] font-medium text-dark tracking-tight leading-[1.1]">
                AI, Culture And <br />
                Knowledge
              </h2>
            </div>
            <div className="lg:w-7/12">
              <p className="font-sans text-base sm:text-lg lg:text-[20px] text-dark/85 font-normal leading-relaxed">
                We investigate the cultural implications of AI-generated content, intellectual property and data colonialism thereby protecting authenticity, diversity, and the future of African storytelling.
              </p>
            </div>
          </div>

          {/* 2-Column Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {/* Left Card: AI and African Languages */}
            <div className="bg-[#F8F9FA] rounded-[32px] sm:rounded-[40px] p-8 sm:p-12 flex flex-col justify-between min-h-[260px] sm:min-h-[300px] border border-neutral-200/60 shadow-xs">
              <h3 className="font-bricolage text-2xl sm:text-3xl font-medium text-dark tracking-tight">
                AI and African Languages
              </h3>
              <p className="font-sans text-xs sm:text-sm text-muted leading-relaxed mt-8 sm:mt-12">
                Data colonialism, language modeling, and preserving indigenous linguistic heritage.
              </p>
            </div>

            {/* Right Card: AI in Media and Creative Industries */}
            <div className="bg-[#F8F9FA] rounded-[32px] sm:rounded-[40px] p-8 sm:p-12 flex flex-col justify-between min-h-[260px] sm:min-h-[300px] border border-neutral-200/60 shadow-xs">
              <h3 className="font-bricolage text-2xl sm:text-3xl font-medium text-dark tracking-tight">
                AI in Media and Creative Industries
              </h3>
              <p className="font-sans text-xs sm:text-sm text-muted leading-relaxed mt-8 sm:mt-12">
                Generative AI, misinformation, and cultural representation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. AI, Security & Open-Source Intelligence Section */}
      <section className="w-full bg-white py-16 sm:py-24 lg:py-28">
        <div className="max-w-[80vw] mx-auto px-6 sm:px-8 lg:px-12 w-full">
          {/* Header Row: Left Title & Right Description */}
          <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-8 lg:gap-16">
            <div className="lg:w-5/12">
              <h2 className="font-bricolage text-4xl sm:text-5xl lg:text-[56px] font-medium text-dark tracking-tight leading-[1.1]">
                AI, Security & <br />
                Open-Source <br />
                Intelligence
              </h2>
            </div>
            <div className="lg:w-7/12">
              <p className="font-sans text-base sm:text-lg lg:text-[20px] text-dark/85 font-normal leading-relaxed">
                We utilize OSINT methodologies to investigate the misuse of AI in surveillance, cybersecurity, and online harms, while promoting transparency, digital rights, and information integrity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. AI, Health, And Human Development (Townhall-style Bento Grid - Exact 50/50 Right Height) */}
      <section className="w-full bg-white py-16 sm:py-24 lg:py-28">
        <div className="max-w-[80vw] mx-auto px-6 sm:px-8 lg:px-12 w-full">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <h2 className="font-bricolage text-4xl sm:text-5xl lg:text-[56px] font-medium text-dark tracking-tight leading-tight">
              AI, Health, And Human Development
            </h2>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-stretch">
            {/* Left Tall Card (Col-span 5) */}
            <div className="lg:col-span-5 bg-[#F8F9FA] rounded-[32px] sm:rounded-[40px] p-6 sm:p-8 flex flex-col justify-between border border-neutral-200/60 shadow-xs h-full min-h-[440px] lg:min-h-[500px]">
              <div className="w-full h-[260px] sm:h-[300px] lg:h-[320px] rounded-[24px] overflow-hidden">
                <img
                  src="/images/ai_indus_1.png"
                  alt="AI, Health, And Human Development"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="font-sans text-xs sm:text-sm text-dark/90 leading-relaxed mt-6">
                We explore how AI chatbots, social algorithms, and virtual environments shape mental health, relationships, and emotional resilience, ensuring technology enhances rather than erodes human wellbeing.
              </p>
            </div>

            {/* Right Column (Col-span 7) - Exact 50/50 Half-Half Height Split */}
            <div className="lg:col-span-7 grid grid-rows-2 gap-5 sm:gap-6 h-full min-h-[440px] lg:min-h-[500px]">
              {/* Top Row (Exact Half / 50% Height) */}
              <div className="h-full min-h-0 bg-[#F8F9FA] rounded-[32px] sm:rounded-[40px] p-6 sm:p-8 lg:p-8 flex flex-col justify-between border border-neutral-200/60 shadow-xs">
                <h3 className="font-bricolage text-2xl sm:text-3xl font-medium text-dark tracking-tight">
                  AI in Healthcare Delivery
                </h3>
                <p className="font-sans text-xs sm:text-sm text-muted leading-relaxed">
                  Diagnostics, predictive analytics, and privacy in African health systems.
                </p>
              </div>

              {/* Bottom Row (Exact Half / 50% Height) */}
              <div className="h-full min-h-0 grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                {/* Bottom Left Image Card */}
                <div className="h-full min-h-0 rounded-[28px] sm:rounded-[32px] overflow-hidden shadow-xs">
                  <img
                    src="/images/ai_indus_2.png"
                    alt="AI and Mental Health"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Bottom Right Content Card */}
                <div className="h-full min-h-0 bg-[#F8F9FA] rounded-[28px] sm:rounded-[32px] p-6 sm:p-7 flex flex-col justify-between border border-neutral-200/60 shadow-xs">
                  <h3 className="font-bricolage text-xl sm:text-2xl font-medium text-dark leading-snug tracking-tight">
                    AI and Mental Health
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-muted leading-relaxed">
                    The psychological effects of digital companions, social algorithms, and virtual support systems.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Knowledge into Action & Outreach Statement (Right-Aligned) */}
      <section className="w-full bg-white py-16 sm:py-24 lg:py-28 pb-32 sm:pb-40">
        <div className="max-w-[80vw] mx-auto px-6 sm:px-8 lg:px-12 w-full flex justify-end">
          <div className="max-w-4xl">
            <p className="font-sans text-xl sm:text-2xl md:text-3xl lg:text-[32px] text-dark font-normal leading-[1.42] tracking-tight">
              Beyond publishing research, Rise Networks translates knowledge into action through targeted outreach and engagement that amplifies public awareness and informs evidence based policymaking, while equipping Nigerian youth and professionals with globally competitive AI, Machine Learning and Data Science skills, championing inclusion for women and underserved communities, and expanding equitable access to Nigeria’s digital economy.
            </p>
          </div>
        </div>
      </section>

      {/* 10. Bottom CTA Overlapping into Footer */}
      <CtaCard overlapFooter={true} />
    </div>
  )
}

export default Research
