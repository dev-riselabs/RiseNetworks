import React from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'

export interface ProjectDetailData {
  id: string
  title: string
  subtitle: string
  tag: string
  tagColor: string
  bannerImage: string
  overview: string
  theProblem: string
  theSolution: {
    intro: string
    bullets: string[]
    image: string
  }
  materials: string[]
  assemblySteps: string[]
  impact: {
    intro?: string
    stats: {
      value: string
      label?: string
      description: string
    }[]
  }
  gallery?: string[]
  timeline?: {
    title: string
    description: string
  }[]
  relatedProjects: {
    id: string
    title: string
    subtitle: string
    tag: string
    tagColor: string
    description: string
    image: string
  }[]
}

export const PROJECT_DETAILS_DATA: Record<string, ProjectDetailData> = {
  helchetics: {
    id: 'helchetics',
    title: 'Helchetics',
    subtitle: 'Portable, non-invasive health monitoring through ECG and temperature sensing.',
    tag: 'Health & MedTech',
    tagColor: 'bg-[#E8F8F5] text-[#16A085]',
    bannerImage: '/images/project_detail_helchetics.png',
    overview:
      'Helchetics is a portable, non-invasive health monitoring device designed to detect and monitor health conditions in real time. Built by Makemation students under the guidance of Mr. Samuel Akinrinde, it empowers users to proactively track their health using medical sensing technologies, data analysis, and embedded systems.',
    theProblem:
      "In today's fast-paced environment, early disease identification and diagnosis are critical for successful treatment and better patient outcomes. However, access to reliable, portable diagnostic tools remains limited, particularly in under-resourced communities. Traditional diagnostic methods often require expensive equipment and clinical visits, creating barriers to proactive health monitoring.",
    theSolution: {
      intro:
        'Helchetics uses an Arduino Uno microcontroller paired with an AD8232 ECG sensor and a temperature sensor. The system captures electrocardiography signals and body temperature, processes the data through the microcontroller, and displays real-time health readings on an LCD screen.',
      bullets: [
        'P wave — indicates atrial contraction, the first upward deflection of the ECG tracing.',
        'QRS complex — represents ventricular contraction with Q (small downward), R (peak), and S (downward) deflections.',
        'T wave — indicates ventricular repolarization, a smaller upward waveform after the QRS complex.',
        'ST Segment — the flat line between T wave start and QRS end, indicating ventricular depolarization.',
        'Temperature sensor provides continuous body temperature monitoring alongside cardiac data',
      ],
      image: '/images/project_detail_image.png',
    },
    materials: [
      'Project casing',
      'Liquid Crystal Display (LCD)',
      'Jumper wires',
      'Microcontroller board (Arduino)',
      'AD8232 ECG sensor',
      'Temperature sensor',
      'Computer',
      'USB to Ethernet port',
    ],
    assemblySteps: [
      'Connect all sensors (AD8232 ECG and temperature sensors) to the microcontroller board.',
      'Connect the microcontroller to the computer.',
      'Connect the LCD to the Arduino.',
      'Upload the code to the microcontroller.',
      'Run the uploaded code.',
      'Take readings from an individual’s body using the ends of the AD8232 ECG sensors.',
    ],
    impact: {
      intro:
        'Helchetics demonstrates the potential of low-cost embedded systems for accessible healthcare diagnostics.',
      stats: [
        {
          value: '7+',
          label: 'Components',
          description: 'Integrated sensors and modules',
        },
        {
          value: '2',
          label: 'Signals Monitored',
          description: 'ECG and temperature',
        },
        {
          value: 'Real-time',
          label: 'Display',
          description: 'LCD output with live data',
        },
        {
          value: 'Low-cost',
          label: 'Cost Model',
          description: 'Arduino-based accessible hardware',
        },
      ],
    },
    gallery: [
      '/images/project_detail_gallery_image.png',
      '/images/project_detail_gallery_image.png',
    ],
    timeline: [
      {
        title: 'Research & Design',
        description: 'Study of ECG signal processing and component selection',
      },
      {
        title: 'Hardware Assembly',
        description: 'Circuit design and sensor integration with Arduino',
      },
      {
        title: 'Software Development',
        description: 'Microcontroller programming and data visualization',
      },
      {
        title: 'Testing & Validation',
        description: 'Signal accuracy testing and user trials',
      },
    ],
    relatedProjects: [
      {
        id: 'her-safety-first',
        title: 'Her Safety First (HSF)',
        subtitle: 'AI-Driven GBV Prevention Ecosystem',
        tag: 'AI & Governance',
        tagColor: 'bg-[#F4ECF7] text-[#8E44AD]',
        description:
          'A prevention-focused initiative using AI, data analytics and community systems to identify, predict and reduce gender-based violence risks before they escalate.',
        image: '/images/projects_git_github_img.png',
      },
      {
        id: 'cerebral-bci',
        title: 'Cerebral BCI',
        subtitle: 'Brain-Computer Interface Prototype',
        tag: 'Health & MedTech',
        tagColor: 'bg-[#E8F8F5] text-[#16A085]',
        description:
          'A system that captures neural signals and translates them into commands for external devices, supporting assistive technology and human-machine interaction.',
        image: '/images/projects_git_github_img.png',
      },
    ],
  },
  'shedetectit-bra': {
    id: 'shedetectit-bra',
    title: 'SheDetectIt Bra',
    subtitle: 'Non-invasive wearable technology for early breast cancer detection.',
    tag: 'Health & MedTech',
    tagColor: 'bg-[#E8F8F5] text-[#16A085]',
    bannerImage: '/images/she_detect_it_programs_page.png',
    overview:
      'The SheDetectIt Bra is a wearable prototype designed for early detection of breast cancer using embedded sensors. By leveraging ultrasonic and temperature sensing integrated into a wearable garment, it provides accessible, non-invasive screening.',
    theProblem:
      'Breast cancer is the most frequent cancer in women, with far-reaching consequences for individuals, families, and communities. Despite advances in research and treatment, access to early detection remains a challenge, particularly in regions with limited healthcare infrastructure.',
    theSolution: {
      intro:
        'The SheDetectIt bra integrates ultrasonic sensors and temperature sensors into a wearable undergarment, connected to an Arduino microcontroller. The sensors continuously monitor breast tissue for irregularities, analyzing temperature variations and tissue density changes.',
      bullets: [
        'Dual ultrasonic sensors for tissue density monitoring',
        'Temperature sensors for thermal pattern analysis',
        'Arduino-based data processing and LCD display',
        'Non-invasive continuous monitoring capability',
      ],
      image: '/images/project_detail_image.png',
    },
    materials: [
      'Project casing',
      'LCD',
      'Jumper wires',
      'Arduino',
      'Ultrasonic sensors (2)',
      'Temperature sensor (2)',
      'Computer',
      'USB to Ethernet port',
      'Female undergarment (bra)',
    ],
    assemblySteps: [
      'Connect all sensors to the microcontroller board.',
      'Connect the microcontroller to the computer system.',
      'Connect the LCD to the Arduino.',
      'Upload the code to the microcontroller.',
      'Attach the sensors to the undergarment (bra).',
      'Run the code.',
    ],
    impact: {
      stats: [
        {
          value: '4',
          label: 'Sensors',
          description: '2 ultrasonic + 2 temperature',
        },
        {
          value: 'Non-invasive',
          label: 'Approach',
          description: 'Wearable form factor',
        },
        {
          value: 'Continuous\nMonitoring',
          label: '',
          description: 'Real-time tissue analysis',
        },
      ],
    },
    relatedProjects: [
      {
        id: 'her-safety-first',
        title: 'Her Safety First (HSF)',
        subtitle: 'AI-Driven GBV Prevention Ecosystem',
        tag: 'AI & Governance',
        tagColor: 'bg-[#F4ECF7] text-[#8E44AD]',
        description:
          'A prevention-focused initiative using AI, data analytics and community systems to identify, predict and reduce gender-based violence risks before they escalate.',
        image: '/images/projects_git_github_img.png',
      },
      {
        id: 'cerebral-bci',
        title: 'Cerebral BCI',
        subtitle: 'Brain-Computer Interface Prototype',
        tag: 'Health & MedTech',
        tagColor: 'bg-[#E8F8F5] text-[#16A085]',
        description:
          'A system that captures neural signals and translates them into commands for external devices, supporting assistive technology and human-machine interaction.',
        image: '/images/projects_git_github_img.png',
      },
    ],
  },
  'her-safety-first': {
    id: 'her-safety-first',
    title: 'Her Safety First (HSF)',
    subtitle: 'AI-Driven Gender-Based Violence Prevention & Early Intervention Ecosystem.',
    tag: 'AI & Governance',
    tagColor: 'bg-[#F4ECF7] text-[#8E44AD]',
    bannerImage: '/images/project_detail_helchetics.png',
    overview:
      'Her Safety First (HSF) is a technology-enabled initiative that deploys predictive modeling, localized reporting channels, and data analytics to protect women and vulnerable groups from gender-based violence across community centers.',
    theProblem:
      'Under-reporting and delayed interventions remain primary obstacles in combating gender-based violence across underserved regions. Victims lack safe, discrete access to emergency response networks and community support systems.',
    theSolution: {
      intro:
        'HSF provides an encrypted emergency response platform combined with community risk-mapping dashboards that alert verified first responders and shelters in real time.',
      bullets: [
        'Secure multi-channel reporting via SMS, USSD, and mobile web.',
        'Predictive risk heat-mapping for proactive civic deployment.',
        'Encrypted end-to-end evidence locker for legal aid continuity.',
        'Direct dispatch integration with emergency healthcare services.',
      ],
      image: '/images/project_detail_image.png',
    },
    materials: [
      'Encrypted cloud infrastructure',
      'USSD / SMS communication gateways',
      'Community responder tablets',
      'Geospatial analysis engine',
    ],
    assemblySteps: [
      'Deploy localized reporting nodes and test USSD latency.',
      'Train community leaders and emergency responders on protocol.',
      'Connect secure data feeds with partner shelters and clinics.',
    ],
    impact: {
      intro:
        'HSF empowers community trust and reduces incident response times through ethical data and rapid intervention.',
      stats: [
        {
          value: '10k+',
          label: 'Women Supported',
          description: 'Community protection reach',
        },
        {
          value: '45min',
          label: 'Response Time',
          description: 'Down from 6+ hours average',
        },
        {
          value: '100%',
          label: 'Confidentiality',
          description: 'Zero-knowledge encryption',
        },
        {
          value: '12',
          label: 'Shelter Hubs',
          description: 'Integrated partner network',
        },
      ],
    },
    gallery: [
      '/images/project_detail_gallery_image.png',
      '/images/project_detail_gallery_image.png',
    ],
    timeline: [
      {
        title: 'Community Consultation',
        description: 'Stakeholder alignment with grassroots advocacy groups',
      },
      {
        title: 'Platform Development',
        description: 'Privacy-first architecture and USSD gateway integration',
      },
      {
        title: 'Pilot Deployment',
        description: 'Field testing across urban community clusters',
      },
      {
        title: 'Regional Rollout',
        description: 'Expansion across multiple state emergency networks',
      },
    ],
    relatedProjects: [
      {
        id: 'helchetics',
        title: 'Helchetics',
        subtitle: 'Portable Early Health Detection System',
        tag: 'Health & MedTech',
        tagColor: 'bg-[#E8F8F5] text-[#16A085]',
        description:
          'A non-invasive health monitoring device using ECG and temperature sensors to detect irregular health patterns in real time.',
        image: '/images/projects_git_github_img.png',
      },
      {
        id: 'cerebral-bci',
        title: 'Cerebral BCI',
        subtitle: 'Brain-Computer Interface Prototype',
        tag: 'Health & MedTech',
        tagColor: 'bg-[#E8F8F5] text-[#16A085]',
        description:
          'A system that captures neural signals and translates them into commands for external devices, supporting assistive technology.',
        image: '/images/projects_git_github_img.png',
      },
    ],
  },
  'cerebral-bci': {
    id: 'cerebral-bci',
    title: 'Cerebral BCI',
    subtitle: 'Non-invasive Brain-Computer Interface for assistive communication and control.',
    tag: 'Health & MedTech',
    tagColor: 'bg-[#E8F8F5] text-[#16A085]',
    bannerImage: '/images/project_detail_helchetics.png',
    overview:
      'Cerebral BCI is a student-led neurotechnology research project exploring low-cost EEG sensor integration and machine learning classifiers to interpret motor imagery signals for assistive technology applications.',
    theProblem:
      'High-performance brain-computer interfaces currently cost thousands of dollars, making assistive neurotechnology completely inaccessible for millions of individuals with motor impairments in developing countries.',
    theSolution: {
      intro:
        'Cerebral BCI combines open-source EEG processing with embedded microcontrollers to capture scalp potentials, apply frequency filtering, and classify user intentions into directional actions.',
      bullets: [
        'Multi-channel dry electrode headset design for rapid setup.',
        'Real-time bandpass filtering isolating Alpha and Beta waveforms.',
        'On-device neural inference translating mental state into commands.',
        'Assistive wheelchair navigation and computer accessibility bridge.',
      ],
      image: '/images/project_detail_image.png',
    },
    materials: [
      '3D-printed adjustable headset',
      'OpenBCI Cyton Biosensing board',
      'Dry EEG contact electrodes',
      'Bluetooth LE transmitter module',
      'Microcontroller receiver unit',
    ],
    assemblySteps: [
      'Assemble 3D printed mechanical headset frame.',
      'Wire dry contact sensors according to 10-20 EEG placement system.',
      'Calibrate noise reduction filters and verify Bluetooth stream.',
      'Train classifier model on subject motor imagery sessions.',
    ],
    impact: {
      intro:
        'Demonstrates accessible, low-barrier neural interfacing for education and assistive innovation.',
      stats: [
        {
          value: '8-ch',
          label: 'EEG Channels',
          description: 'High-resolution bio-potential sensing',
        },
        {
          value: '91%',
          label: 'Accuracy',
          description: 'Motor imagery intent classification',
        },
        {
          value: '<50ms',
          label: 'Latency',
          description: 'Real-time wireless response time',
        },
        {
          value: '1/10th',
          label: 'Hardware Cost',
          description: 'Compared to commercial medical units',
        },
      ],
    },
    gallery: [
      '/images/project_detail_gallery_image.png',
      '/images/project_detail_gallery_image.png',
    ],
    timeline: [
      {
        title: 'Sensor Research & Layout',
        description: 'Electrode placement study and impedance testing',
      },
      {
        title: 'Headset Prototyping',
        description: 'Iterative 3D print fitting and comfort adjustments',
      },
      {
        title: 'Signal Processing & ML',
        description: 'Feature extraction pipeline in Python and embedded C++',
      },
      {
        title: 'Live Control Demonstration',
        description: 'Navigation testing with simulated robotic vehicle',
      },
    ],
    relatedProjects: [
      {
        id: 'helchetics',
        title: 'Helchetics',
        subtitle: 'Portable Early Health Detection System',
        tag: 'Health & MedTech',
        tagColor: 'bg-[#E8F8F5] text-[#16A085]',
        description:
          'A non-invasive health monitoring device using ECG and temperature sensors to detect irregular health patterns in real time.',
        image: '/images/projects_git_github_img.png',
      },
      {
        id: 'her-safety-first',
        title: 'Her Safety First (HSF)',
        subtitle: 'AI-Driven GBV Prevention Ecosystem',
        tag: 'AI & Governance',
        tagColor: 'bg-[#F4ECF7] text-[#8E44AD]',
        description:
          'A prevention-focused initiative using AI, data analytics and community systems to identify, predict and reduce gender-based violence risks before they escalate.',
        image: '/images/projects_git_github_img.png',
      },
    ],
  },
}

// Add alias for shedetectit
PROJECT_DETAILS_DATA['shedetectit'] = PROJECT_DETAILS_DATA['shedetectit-bra']

export const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()

  // Select project by route id or default to 'helchetics'
  const project: ProjectDetailData =
    (id && PROJECT_DETAILS_DATA[id]) || PROJECT_DETAILS_DATA['helchetics']

  return (
    <div className="w-full bg-white">
      {/* 1. Top Banner Section */}
      {/* bannerImage: project_detail_helchetics.png (Banner) */}
      <section className="w-full pt-20 sm:pt-24 lg:pt-28 bg-white">
        {/* Navigation Breadcrumb / Back button */}
        <div className="max-w-[95vw] lg:max-w-[80vw] mx-auto px-6 sm:px-8 lg:px-12 w-full pt-4 pb-4 sm:pb-6">
          <button
            type="button"
            onClick={() => navigate('/projects')}
            className="group inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-neutral-500 hover:text-primary transition-colors cursor-pointer"
          >
            <svg
              className="w-4 h-4 transition-transform group-hover:-translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span>Back to Our Projects</span>
          </button>
        </div>

        {/* Full-width Banner Image matching Screenshot 1 */}
        <div className="w-full bg-[#020D24] overflow-hidden flex items-center justify-center">
          <img
            src={project.bannerImage}
            alt={`${project.title} Banner`}
            className="w-full h-auto max-h-[520px] lg:max-h-[600px] object-cover object-center select-none"
          />
        </div>
      </section>

      {/* 2. Main Content Container matching Screenshots 1, 2, 3, 4 */}
      <article className="max-w-[95vw] lg:max-w-[80vw] mx-auto px-6 sm:px-8 lg:px-12 w-full pt-10 sm:pt-14 pb-24 sm:pb-32">
        {/* Category Pill Tag */}
        <div className="mb-3.5">
          <span
            className={`inline-block px-3.5 py-1 rounded-full text-xs font-medium ${project.tagColor}`}
          >
            {project.tag}
          </span>
        </div>

        {/* Project Title */}
        <h1 className="font-bricolage text-3xl sm:text-4xl lg:text-[44px] font-bold text-dark tracking-tight leading-tight mb-2">
          {project.title}
        </h1>

        {/* Project Tagline / Subtitle */}
        <p className="font-sans text-sm sm:text-base text-neutral-800 font-normal leading-relaxed mb-8 sm:mb-10">
          {project.subtitle}
        </p>

        {/* Thin Divider Line */}
        <hr className="border-t border-neutral-200/80 my-8 sm:my-10" />

        {/* OVERVIEW Section */}
        <section className="space-y-3.5 mb-8 sm:mb-10">
          <h2 className="font-bricolage text-xs sm:text-sm font-bold tracking-wider text-dark uppercase">
            OVERVIEW
          </h2>
          <p className="font-sans text-xs sm:text-sm text-neutral-700 leading-relaxed font-normal">
            {project.overview}
          </p>
        </section>

        {/* THE PROBLEM Section */}
        <section className="space-y-3.5 mb-8 sm:mb-10">
          <h2 className="font-bricolage text-xs sm:text-sm font-bold tracking-wider text-dark uppercase">
            THE PROBLEM
          </h2>
          <p className="font-sans text-xs sm:text-sm text-neutral-700 leading-relaxed font-normal">
            {project.theProblem}
          </p>
        </section>

        {/* Thin Divider Line */}
        <hr className="border-t border-neutral-200/80 my-8 sm:my-10" />

        {/* THE SOLUTION Section */}
        <section className="space-y-4 mb-8 sm:mb-10">
          <h2 className="font-bricolage text-xs sm:text-sm font-bold tracking-wider text-dark uppercase">
            THE SOLUTION
          </h2>
          <p className="font-sans text-xs sm:text-sm text-neutral-700 leading-relaxed font-normal">
            {project.theSolution.intro}
          </p>

          {/* Solution Bullets */}
          <ul className="space-y-2 pt-1">
            {project.theSolution.bullets.map((bullet, idx) => (
              <li
                key={idx}
                className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-700 leading-relaxed"
              >
                <span className="text-dark font-bold text-base leading-none select-none mt-0.5">•</span>
                <span>{bullet}</span>
              </li>
            ))}
          </ul>

          {/* 2nd Image: project_detail_image.png (already has rounded) */}
          <div className="pt-6 sm:pt-8 w-full flex justify-start">
            <img
              src={project.theSolution.image}
              alt={`${project.title} Solution Demonstration`}
              className="w-full max-w-3xl h-auto block select-none"
            />
          </div>
        </section>

        {/* Thin Divider Line */}
        <hr className="border-t border-neutral-200/80 my-8 sm:my-10" />

        {/* THE MATERIALS Section */}
        <section className="space-y-3.5 mb-8 sm:mb-10">
          <h2 className="font-bricolage text-xs sm:text-sm font-bold tracking-wider text-dark uppercase">
            THE MATERIALS
          </h2>
          <ul className="space-y-2 pt-1">
            {project.materials.map((item, idx) => (
              <li
                key={idx}
                className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-700 leading-relaxed"
              >
                <span className="text-dark font-bold text-base leading-none select-none mt-0.5">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* ASSEMBLY STEPS Section */}
        <section className="space-y-3.5 mb-8 sm:mb-10">
          <h2 className="font-bricolage text-xs sm:text-sm font-bold tracking-wider text-dark uppercase">
            ASSEMBLY STEPS
          </h2>
          <ul className="space-y-2 pt-1">
            {project.assemblySteps.map((step, idx) => (
              <li
                key={idx}
                className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-700 leading-relaxed"
              >
                <span className="text-dark font-bold text-base leading-none select-none mt-0.5">•</span>
                <span>{step}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Thin Divider Line */}
        <hr className="border-t border-neutral-200/80 my-8 sm:my-10" />

        {/* IMPACT & OUTCOME Section */}
        <section className="space-y-6 mb-8 sm:mb-10">
          <h2 className="font-bricolage text-xs sm:text-sm font-bold tracking-wider text-dark uppercase">
            IMPACT & OUTCOME
          </h2>
          {project.impact.intro && (
            <p className="font-sans text-xs sm:text-sm text-neutral-700 leading-relaxed font-normal">
              {project.impact.intro}
            </p>
          )}

          {/* Stat Cards Grid */}
          <div
            className={`grid grid-cols-1 sm:grid-cols-2 ${
              project.impact.stats.length === 3 ? 'lg:grid-cols-3' : 'lg:grid-cols-4'
            } gap-4 sm:gap-5 pt-2`}
          >
            {project.impact.stats.map((stat, idx) => (
              <div
                key={idx}
                className="bg-[#F8F9FA] rounded-[20px] p-6 sm:p-7 border border-neutral-200/60 flex flex-col justify-between"
              >
                <div>
                  <span className="font-bricolage text-2xl sm:text-3xl font-bold text-dark tracking-tight block whitespace-pre-line">
                    {stat.value}
                  </span>
                  {stat.label && (
                    <span className="font-sans text-xs sm:text-sm font-semibold text-dark block mt-1">
                      {stat.label}
                    </span>
                  )}
                </div>
                <p className="font-sans text-[11px] sm:text-xs text-neutral-500 mt-4 leading-relaxed">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* GALLERY Section (Screenshot 4) */}
        {/* 3rd image: project_detail_gallery_image.png - smaller compact size */}
        {project.gallery && project.gallery.length > 0 && (
          <>
            <hr className="border-t border-neutral-200/80 my-8 sm:my-10" />
            <section className="space-y-4 mb-8 sm:mb-10">
              <h2 className="font-bricolage text-xs sm:text-sm font-bold tracking-wider text-dark uppercase">
                GALLERY
              </h2>
              <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-1">
                {project.gallery.map((imgSrc, idx) => (
                  <div
                    key={idx}
                    className="w-36 sm:w-44 md:w-52 aspect-[4/3] rounded-[16px] sm:rounded-[20px] overflow-hidden bg-neutral-100 shadow-xs border border-neutral-100 flex-shrink-0"
                  >
                    <img
                      src={imgSrc}
                      alt={`${project.title} Gallery visual ${idx + 1}`}
                      className="w-full h-full object-cover select-none"
                    />
                  </div>
                ))}
              </div>
            </section>
          </>
        )}

        {/* TIMELINE & MILESTONE Section (Screenshot 4) */}
        {project.timeline && project.timeline.length > 0 && (
          <>
            <hr className="border-t border-neutral-200/80 my-8 sm:my-10" />
            <section className="space-y-5 mb-8 sm:mb-10">
              <h2 className="font-bricolage text-xs sm:text-sm font-bold tracking-wider text-dark uppercase">
                TIMELINE & MILESTONE
              </h2>
              <div className="space-y-4 pt-1">
                {project.timeline.map((item, idx) => (
                  <div key={idx} className="space-y-1">
                    <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-dark">
                      <span className="text-dark font-bold text-base leading-none select-none">•</span>
                      <span>{item.title}</span>
                    </div>
                    <p className="font-sans text-xs sm:text-sm text-neutral-600 pl-4 leading-relaxed font-normal">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </>
        )}

        {/* Thin Divider Line before RELATED PROJECTS */}
        <hr className="border-t border-neutral-200/80 my-8 sm:my-10" />

        {/* RELATED PROJECTS Section (Screenshot 4) */}
        {/* 4th image: projects_git_github_img.png (already rounded-top) */}
        <section className="space-y-6">
          <h2 className="font-bricolage text-xs sm:text-sm font-bold tracking-wider text-dark uppercase">
            RELATED PROJECTS
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 pt-1">
            {project.relatedProjects.map((relProject) => (
              <div
                key={relProject.id}
                className="bg-[#FAFAFA] rounded-[24px] sm:rounded-[28px] overflow-hidden border border-neutral-200/60 hover:border-neutral-300 transition-colors flex flex-col justify-between"
              >
                <div>
                  {/* Top Image: projects_git_github_img.png (already rounded-top) */}
                  <div className="w-full aspect-[16/10] overflow-hidden bg-white">
                    <img
                      src={relProject.image}
                      alt={relProject.title}
                      className="w-full h-full object-cover select-none"
                    />
                  </div>

                  {/* Card Content */}
                  <div className="p-6 sm:p-7">
                    {/* Badge */}
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-[11px] font-medium mb-3.5 ${relProject.tagColor}`}
                    >
                      {relProject.tag}
                    </span>

                    {/* Title */}
                    <h3 className="font-bricolage text-xl sm:text-[22px] font-semibold text-dark tracking-tight leading-snug mb-1">
                      {relProject.title}
                    </h3>

                    {/* Subtitle in Orange */}
                    <p className="font-sans text-xs sm:text-sm font-medium text-primary mb-3.5 leading-snug">
                      {relProject.subtitle}
                    </p>

                    {/* Description */}
                    <p className="font-sans text-xs sm:text-sm text-neutral-600 leading-relaxed">
                      {relProject.description}
                    </p>
                  </div>
                </div>

                {/* Bottom Action Button */}
                <div className="px-6 sm:px-7 pb-6 sm:pb-7 pt-2">
                  <Link
                    to={`/projects/${relProject.id}`}
                    className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-primary hover:bg-primary-hover text-white text-xs sm:text-sm font-medium transition-colors cursor-pointer"
                  >
                    <span>View Project</span>
                    <span>&rarr;</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      </article>
    </div>
  )
}

export default ProjectDetail
