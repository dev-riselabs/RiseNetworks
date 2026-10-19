import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { CtaCard } from '../components/ui/CtaCard'

export interface ProjectDetailItem {
  id: string
  title: string
  badgeLabel: string
  bannerImage?: string
  solidColor?: string
  overview: string
  challenge: string
  solution: string
  howItWorks?: string
  potentialImpact: string
  keyTechnologies: string[]
}

export const PROJECT_DETAILS_DATA: Record<string, ProjectDetailItem> = {
  helchetics: {
    id: 'helchetics',
    title: 'Helchetics',
    badgeLabel: 'Health',
    bannerImage: '/images/helchetics_full_image.png',
    overview:
      'Helchetics is a health monitoring prototype designed to support the early identification of potential health irregularities through the use of medical sensing technology. The project combines sensors, data collection and microcontroller technology to capture selected physiological data and display the readings to the user.',
    challenge:
      'Early identification of potential health issues can support timely medical attention and intervention. However, access to convenient and accessible health monitoring remains a challenge for many people.',
    solution:
      'Helchetics was developed as a portable and non invasive health monitoring device that uses an ECG sensor and temperature sensor to collect physiological data from the user.',
    howItWorks:
      'The prototype uses an Arduino microcontroller connected to an AD8232 ECG sensor and a temperature sensor. The sensors collect data from the user, which is processed by the microcontroller and displayed on an LCD screen.',
    potentialImpact:
      'Helchetics explores how accessible sensing technology can support personal health monitoring and encourage users to seek professional medical attention when irregular readings are observed.',
    keyTechnologies: [
      'Arduino Uno',
      'AD8232 ECG sensor',
      'Temperature sensor',
      'LCD display',
      'Physiological data collection',
    ],
  },
  shedetectit: {
    id: 'shedetectit',
    title: 'SheDetectIt',
    badgeLabel: 'Health',
    bannerImage: '/images/project_shedetectit.png',
    overview:
      'SheDetectIt is a wearable technology prototype designed to explore how sensors and data collection can support breast health monitoring and the early identification of potential irregularities.',
    challenge:
      'Breast cancer remains a major health challenge, and early detection plays an important role in improving treatment outcomes. There is a need for accessible and non invasive approaches that can support breast health awareness and monitoring.',
    solution:
      'The SheDetectIt Bra integrates sensors into a wearable garment to collect selected data from the breast area. The project explores how wearable technology can contribute to the development of more accessible breast health monitoring solutions.',
    howItWorks:
      'The prototype uses an Arduino microcontroller connected to an AD8232 ECG sensor and a temperature sensor. The sensors collect data from the user, which is processed by the microcontroller and displayed on an LCD screen.',
    potentialImpact:
      'SheDetectIt demonstrates the potential application of wearable technology in supporting breast health awareness and the development of future tools for early screening and monitoring.',
    keyTechnologies: [
      'Arduino',
      'Ultrasonic sensors',
      'Temperature sensors',
      'LCD display',
      'Wearable technology',
    ],
  },
  'cerebral-bci': {
    id: 'cerebral-bci',
    title: 'Cerebral BCI',
    badgeLabel: 'Health',
    bannerImage: '/images/project_cerebral.png',
    overview:
      'Cerebral BCI is a Brain Computer Interface prototype exploring how brain signals can be captured and interpreted to enable interaction between a user and an external device.',
    challenge:
      'People with severe physical or motor limitations may experience difficulties interacting with their environment and communicating through conventional physical interfaces.',
    solution:
      'Cerebral BCI explores the use of brain signal technology as an alternative form of interaction between users and external devices.',
    howItWorks:
      'The prototype combines a helmet based sensing system, an Arduino microcontroller and a computer. The system is designed to collect brain related signals, process the data and display the resulting information on a computer.',
    potentialImpact:
      'The project explores the potential of Brain Computer Interface technology to support accessibility, assistive technology, human machine interaction and future research into brain based communication systems.',
    keyTechnologies: [
      'Brain Computer Interface',
      'Arduino',
      'Helmet based sensing system',
      'Computer based data processing',
    ],
  },
  'ai4traffic-control': {
    id: 'ai4traffic-control',
    title: 'AI4TrafficKontrol',
    badgeLabel: 'Health',
    solidColor: '#EE7747',
    overview:
      'AI4TrafficKontrol is an artificial intelligence project focused on improving traffic management through machine learning and data driven prediction.',
    challenge:
      'Traffic congestion affects productivity, mobility and economic activity, particularly in rapidly growing urban areas. Traditional traffic management systems often respond to congestion after it has already occurred.',
    solution:
      'AI4TrafficKontrol explores the use of machine learning to analyse traffic patterns, predict potential congestion and support proactive traffic management.',
    potentialImpact:
      'The project demonstrates how artificial intelligence and data can be applied to improve mobility, reduce congestion and support smarter urban transportation systems.',
    keyTechnologies: [
      'Artificial Intelligence',
      'Machine Learning',
      'Traffic data analysis',
      'Predictive analytics',
    ],
  },
}

export const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>()

  // Select project by route id or default to 'helchetics'
  const project: ProjectDetailItem =
    (id && PROJECT_DETAILS_DATA[id]) || PROJECT_DETAILS_DATA['helchetics']

  return (
    <div className="w-full bg-white min-h-screen">
      {/* Main Details Container */}
      <article className="max-w-[95vw] lg:max-w-[80vw] mx-auto px-6 sm:px-8 lg:px-12 w-full pt-28 sm:pt-36 pb-16 sm:pb-24">
        {/* 1. Back Button */}
        <div className="mb-6 sm:mb-8">
          <Link
            to="/projects"
            className="group inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-neutral-900 hover:text-primary transition-colors cursor-pointer"
          >
            <span className="text-primary text-base sm:text-lg font-bold transition-transform group-hover:-translate-x-1">
              &larr;
            </span>
            <span>Back</span>
          </Link>
        </div>

        {/* 2. Health Pill Badge */}
        <div className="mb-3.5">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#EAF4FF] border border-[#CCE3FF] text-[#2F80ED] text-xs font-semibold">
            <svg
              className="w-3.5 h-3.5 text-[#2F80ED]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
            </svg>
            <span>{project.badgeLabel}</span>
          </div>
        </div>

        {/* 3. Title */}
        <h1 className="font-bricolage text-3xl sm:text-4xl lg:text-[42px] font-bold text-neutral-900 tracking-tight leading-tight mb-8 sm:mb-10">
          {project.title}
        </h1>

        {/* 4. Full Project Image or Solid Color Banner */}
        <div className="w-full rounded-[20px] sm:rounded-[28px] overflow-hidden shadow-[0_4px_24px_-6px_rgba(0,0,0,0.06)] border border-neutral-200/60 mb-12 sm:mb-16">
          {project.bannerImage ? (
            <img
              src={project.bannerImage}
              alt={project.title}
              className="w-full h-auto object-cover select-none"
            />
          ) : (
            <div
              className="w-full aspect-[16/9] sm:aspect-[1220/600]"
              style={{ backgroundColor: project.solidColor || '#EE7747' }}
            />
          )}
        </div>

        {/* 5. Content Sections matching Screenshot 2 */}
        <div className="space-y-8 sm:space-y-10 max-w-4xl">
          {/* Project Overview */}
          <div>
            <h2 className="text-[#EE7747] font-bold text-sm sm:text-[15px] mb-2 sm:mb-2.5">
              Project Overview
            </h2>
            <p className="text-neutral-700 text-xs sm:text-[13.5px] leading-relaxed font-normal">
              {project.overview}
            </p>
          </div>

          {/* The Challenge */}
          <div>
            <h2 className="text-[#EE7747] font-bold text-sm sm:text-[15px] mb-2 sm:mb-2.5">
              The Challenge
            </h2>
            <p className="text-neutral-700 text-xs sm:text-[13.5px] leading-relaxed font-normal">
              {project.challenge}
            </p>
          </div>

          {/* Our Solution */}
          <div>
            <h2 className="text-[#EE7747] font-bold text-sm sm:text-[15px] mb-2 sm:mb-2.5">
              Our Solution
            </h2>
            <p className="text-neutral-700 text-xs sm:text-[13.5px] leading-relaxed font-normal">
              {project.solution}
            </p>
          </div>

          {/* How It Works */}
          {project.howItWorks && (
            <div>
              <h2 className="text-[#EE7747] font-bold text-sm sm:text-[15px] mb-2 sm:mb-2.5">
                How It Works
              </h2>
              <p className="text-neutral-700 text-xs sm:text-[13.5px] leading-relaxed font-normal">
                {project.howItWorks}
              </p>
            </div>
          )}

          {/* Potential Impact */}
          <div>
            <h2 className="text-[#EE7747] font-bold text-sm sm:text-[15px] mb-2 sm:mb-2.5">
              Potential Impact
            </h2>
            <p className="text-neutral-700 text-xs sm:text-[13.5px] leading-relaxed font-normal">
              {project.potentialImpact}
            </p>
          </div>

          {/* Key Technologies */}
          <div>
            <h2 className="text-[#EE7747] font-bold text-sm sm:text-[15px] mb-3.5 sm:mb-4">
              Key Technologies
            </h2>
            <ul className="space-y-3">
              {project.keyTechnologies.map((tech, idx) => (
                <li
                  key={idx}
                  className="flex items-center gap-2.5 text-xs sm:text-[13.5px] text-neutral-800 font-normal"
                >
                  <span className="w-4 h-4 rounded-full bg-[#EE7747] flex items-center justify-center shrink-0">
                    <svg
                      className="w-2.5 h-2.5 text-white"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  <span>{tech}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </article>

      {/* 6. Ready to Shape Africa's Tech Future CTA Card overlapping into Footer */}
      <CtaCard overlapFooter={true} />
    </div>
  )
}

export default ProjectDetail
