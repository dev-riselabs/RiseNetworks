export interface AlbumPhoto {
  id: string
  image: string
  caption: string
  tag?: string
}

export interface AlbumItem {
  id: string
  title: string
  date: string
  year: string
  location: string
  photoCount: number
  image: string
  programme: string
  eventType: string
  description: string
  photos: AlbumPhoto[]
}

export const ALBUMS_DATA: AlbumItem[] = [
  // 1. AI4Elections Hackathon 2026
  {
    id: 'ai4elections-hackathon-2026',
    title: 'AI4Elections Hackathon 2026',
    date: 'Nov 2026',
    year: '2026',
    location: 'Lagos, Nigeria',
    photoCount: 48,
    image: '/images/photos_ai_for_elections.png',
    programme: 'AI4Elections',
    eventType: 'Hackathon',
    description:
      'Convening youth developers, machine learning researchers, and election integrity experts to build automated fact-checking models and information resilience platforms safeguarding democratic processes.',
    photos: [
      { id: 'a1-1', image: '/images/photos_ai_for_elections.png', caption: 'Keynote auditorium address on algorithmic integrity during electoral cycles', tag: 'Auditorium' },
      { id: 'a1-2', image: '/images/photos_make_mation_festival.png', caption: 'Data scientists fine-tuning NLP sentiment classification models', tag: 'Hackathon' },
      { id: 'a1-3', image: '/images/townhall_ai_edu_img.png', caption: 'Electoral observers and tech commissioners reviewing live model demos', tag: 'Review' },
      { id: 'a1-4', image: '/images/photos_i_love_africa.png', caption: 'Student engineer taking notes during the misinformation benchmark session', tag: 'Masterclass' },
      { id: 'a1-5', image: '/images/gov_research_to_policy.png', caption: 'Presenting policy recommendations for ethical AI deployment in public polls', tag: 'Policy' },
      { id: 'a1-6', image: '/images/photos_round_tables.png', caption: 'Round table panel analyzing voter education telemetries', tag: 'Panel' },
      { id: 'a1-7', image: '/images/photos_rise_partners.png', caption: 'Civic tech founders and mentors discussing cross-border validation datasets', tag: 'Networking' },
      { id: 'a1-8', image: '/images/photos_passnownow_kokokah.png', caption: 'Participating developer teams assembled at the closing award ceremony', tag: 'Cohort' },
      { id: 'a1-9', image: '/images/article_1.png', caption: 'Interactive session exploring digital democracy and civic public infrastructure', tag: 'Dialogue' },
      { id: 'a1-10', image: '/images/events_ai_festival.png', caption: 'Grand stage showcase of winning election fact-checking API prototypes', tag: 'Showcase' },
      { id: 'a1-11', image: '/images/ai_indus_1.png', caption: 'Enterprise technology sponsors sharing infrastructure support guidelines', tag: 'Sponsors' },
      { id: 'a1-12', image: '/images/partner_who_can_partner_img.png', caption: 'Youth builders sprint coding on open African language datasets', tag: 'Sprint' },
      { id: 'a1-13', image: '/images/townhall_who.png', caption: 'Grassroots civic attendees contributing questions on digital voting security', tag: 'Audience' },
      { id: 'a1-14', image: '/images/scholarship_hero_page.png', caption: 'Fellows analyzing transformer attention weights in social data analytics', tag: 'Analytics' },
      { id: 'a1-15', image: '/images/award_img.png', caption: 'Hackathon prize ceremony recognizing the top three AI development teams', tag: 'Awards' },
      { id: 'a1-16', image: '/images/why_rise_networks.png', caption: 'Community reflection on ten years of civic engagement through technology', tag: 'Impact' },
      { id: 'a1-17', image: '/images/press_UNGA.png', caption: 'Showcasing African digital sovereignty frameworks to global partners', tag: 'Global' },
      { id: 'a1-18', image: '/images/gov_goverance.png', caption: 'Closing summit remarks by ministerial delegates and civil society directors', tag: 'Summit' },
    ],
  },

  // 2. Makemation AI Tech Festival
  {
    id: 'makemation-ai-tech-festival',
    title: 'Makemation AI Tech Festival',
    date: 'Nov 2026',
    year: '2026',
    location: 'Lagos, Nigeria',
    photoCount: 36,
    image: '/images/photos_make_mation_festival.png',
    programme: 'Makemation AI Tech',
    eventType: 'Festival',
    description:
      'Young builders and engineering students collaborating enthusiastically during the Makemation national robotics, IoT hardware, and software prototyping showcase.',
    photos: [
      { id: 'a2-1', image: '/images/photos_make_mation_festival.png', caption: 'Youth builders and robotics students collaborating around prototype code', tag: 'Prototyping' },
      { id: 'a2-2', image: '/images/events_ai_festival.png', caption: 'Main exhibition hall with live autonomous robot obstacle challenges', tag: 'Robotics' },
      { id: 'a2-3', image: '/images/photos_i_love_africa.png', caption: 'Secondary school student testing embedded computer vision scripts', tag: 'Coding' },
      { id: 'a2-4', image: '/images/partner_who_can_partner_img.png', caption: 'Junior engineering cohort testing solar micro-controllers in real-time', tag: 'Hardware' },
      { id: 'a2-5', image: '/images/scholarship_how_to_appply.png', caption: 'Hands-on hardware assembly and circuit soldering workshop session', tag: 'Workshop' },
      { id: 'a2-6', image: '/images/photos_round_tables.png', caption: 'Mentors reviewing student IoT prototypes and sensor designs', tag: 'Mentorship' },
      { id: 'a2-7', image: '/images/photos_rise_partners.png', caption: 'Tech executives engaging student inventors on intellectual property', tag: 'Industry' },
      { id: 'a2-8', image: '/images/partner_sponsor_the_next_gen_img.png', caption: 'Young female students presenting an agritech soil sensor prototype', tag: 'Agritech' },
      { id: 'a2-9', image: '/images/scholarship_eligibility_img.jpg', caption: 'Festival winners receiving STEM hardware toolkits and certificates', tag: 'Celebration' },
      { id: 'a2-10', image: '/images/project_detail_image.png', caption: 'Edge AI inference testing on low-power single board computers', tag: 'EdgeAI' },
      { id: 'a2-11', image: '/images/helchetics_full_image.png', caption: 'Health telemetry and biomedical sensor module live demonstration', tag: 'HealthTech' },
      { id: 'a2-12', image: '/images/project_cerebral.png', caption: 'Brain-Computer Interface research prototype showcased to attendees', tag: 'DeepTech' },
      { id: 'a2-13', image: '/images/our_program_innovation_impact_programs.png', caption: 'Festival attendees visiting open innovation booths and hardware displays', tag: 'Exhibition' },
      { id: 'a2-14', image: '/images/our_program_connected_ecosystem.png', caption: 'Pan-African student builders gathering for the grand festival keynote', tag: 'Keynote' },
      { id: 'a2-15', image: '/images/why_rise_networks.png', caption: 'Organizers and academic faculty celebrating grassroots tech innovation', tag: 'Faculty' },
      { id: 'a2-16', image: '/images/home_hero_img_1.png', caption: 'Students programming autonomous robotics vehicles in the lab track', tag: 'LabTrack' },
      { id: 'a2-17', image: '/images/home_hero_img_2.png', caption: 'Interactive session exploring ethical AI guidelines for African youth', tag: 'Ethics' },
      { id: 'a2-18', image: '/images/award_img.png', caption: 'Awarding the Makemation Young Inventor of the Year grand prize', tag: 'GrandPrize' },
    ],
  },

  // 3. iLove Africa Youth Empowerment Program
  {
    id: 'ilove-africa-youth-empowerment',
    title: 'iLove Africa Youth Empowerment Program',
    date: 'Nov 2026',
    year: '2026',
    location: 'Lagos, Nigeria',
    photoCount: 42,
    image: '/images/photos_i_love_africa.png',
    programme: 'iLove Africa Youth',
    eventType: 'Youth Program',
    description:
      'Skills, innovation, and impact masterclass equipping women and youth with high-demand digital engineering competencies and applied artificial intelligence literacy.',
    photos: [
      { id: 'a3-1', image: '/images/photos_i_love_africa.png', caption: 'Female data science students working on real-world machine learning cases', tag: 'Masterclass' },
      { id: 'a3-2', image: '/images/scholarship_hero_page.png', caption: 'Intensive deep learning classroom cohort at Rise Networks AI Labs', tag: 'Classroom' },
      { id: 'a3-3', image: '/images/scholarship_eligibility_img.jpg', caption: 'Fellowship orientation welcoming scholars from across underserved regions', tag: 'Orientation' },
      { id: 'a3-4', image: '/images/photos_make_mation_festival.png', caption: 'Cohort members building collaborative open-source AI projects', tag: 'Collaboration' },
      { id: 'a3-5', image: '/images/partner_sponsor_the_next_gen_img.png', caption: 'STEM educators guiding fellows through algorithm optimization techniques', tag: 'Instruction' },
      { id: 'a3-6', image: '/images/photos_round_tables.png', caption: 'Panel discussion on breaking career barriers for young African women in tech', tag: 'CareerPanel' },
      { id: 'a3-7', image: '/images/photos_rise_partners.png', caption: 'Mentorship speed-networking session pairing fellows with senior leads', tag: 'Mentorship' },
      { id: 'a3-8', image: '/images/photos_passnownow_kokokah.png', caption: 'Graduating cohort of empowered scholars holding their digital credentials', tag: 'Graduation' },
      { id: 'a3-9', image: '/images/she_detect_it_programs_page.png', caption: 'HealthTech workshop exploring biomedical sensor data analytics', tag: 'HealthTech' },
      { id: 'a3-10', image: '/images/photos_ai_for_elections.png', caption: 'Youth representatives attending a national digital literacy plenary', tag: 'Plenary' },
      { id: 'a3-11', image: '/images/townhall_who.png', caption: 'Youth advocates engaging in an open dialogue on economic inclusion', tag: 'Dialogue' },
      { id: 'a3-12', image: '/images/about_hero_img.png', caption: 'Inspiring keynote address by Rise Networks founder Toyosi Akerele-Ogunsiji', tag: 'Leadership' },
      { id: 'a3-13', image: '/images/gov_research_to_policy.png', caption: 'Presenting research briefs on youth employment in the artificial intelligence era', tag: 'Research' },
      { id: 'a3-14', image: '/images/events_ai_festival.png', caption: 'Alumni showcase demonstrating applications built for regional communities', tag: 'Showcase' },
      { id: 'a3-15', image: '/images/ai_indus_1.png', caption: 'Enterprise recruitment partners evaluating graduate portfolio projects', tag: 'Recruitment' },
      { id: 'a3-16', image: '/images/project_detail_gallery_image.png', caption: 'Hardware prototyping session in the Rise Networks Innovation Studio', tag: 'Studio' },
      { id: 'a3-17', image: '/images/why_rise_networks.png', caption: 'Celebrating the impact of sovereign talent training across Nigeria', tag: 'Celebration' },
      { id: 'a3-18', image: '/images/award_img.png', caption: 'Honoring top-performing female innovators in machine learning and data engineering', tag: 'Honor' },
    ],
  },

  // 4. The Round Table Talk Session 2023
  {
    id: 'round-table-talk-session-2023',
    title: 'The Round Table Talk Session 2023',
    date: 'Nov 2026',
    year: '2026',
    location: 'Lagos, Nigeria',
    photoCount: 26,
    image: '/images/photos_round_tables.png',
    programme: 'Design & UI/UX',
    eventType: 'Round Table',
    description:
      'Industry design leads, product architects, and tech fellows sharing insights on accessible human-centered interface engineering and ethical AI UX.',
    photos: [
      { id: 'a4-1', image: '/images/photos_round_tables.png', caption: 'Design leaders and product managers discussing UX frameworks for new designers', tag: 'Panel' },
      { id: 'a4-2', image: '/images/ai_indus_2.png', caption: 'Roundtable discussion on making enterprise AI interfaces accessible to all citizens', tag: 'Accessibility' },
      { id: 'a4-3', image: '/images/photos_rise_partners.png', caption: 'Product designers and engineering leads networking during coffee break', tag: 'Networking' },
      { id: 'a4-4', image: '/images/photos_i_love_africa.png', caption: 'Junior UI/UX designer wireframing mobile app screens in the practical lab', tag: 'Wireframing' },
      { id: 'a4-5', image: '/images/photos_make_mation_festival.png', caption: 'Cross-functional teams aligning interface components with design system tokens', tag: 'DesignSystem' },
      { id: 'a4-6', image: '/images/why_rise_networks.png', caption: 'Senior design mentors providing actionable portfolio critiques to juniors', tag: 'Critique' },
      { id: 'a4-7', image: '/images/article_2.png', caption: 'Case study presentation on user research methodologies for low-bandwidth users', tag: 'UserResearch' },
      { id: 'a4-8', image: '/images/article_1.png', caption: 'Exploring ethical UX patterns that promote transparency in automated decisions', tag: 'EthicalUX' },
      { id: 'a4-9', image: '/images/gov_partnership image.png', caption: 'Executive participants signing industry apprenticeship collaboration charter', tag: 'Charter' },
      { id: 'a4-10', image: '/images/photos_ai_for_elections.png', caption: 'Plenary overview on designing reliable civic technology tools for democracy', tag: 'CivicUX' },
      { id: 'a4-11', image: '/images/photos_passnownow_kokokah.png', caption: 'Cohort of participants celebrating the conclusion of the intensive round table', tag: 'GroupPhoto' },
      { id: 'a4-12', image: '/images/events_ai_festival.png', caption: 'Exhibition of innovative design portfolio projects created by fellows', tag: 'Portfolios' },
      { id: 'a4-13', image: '/images/scholarship_how_to_appply.png', caption: 'Interactive workshop on typography, visual hierarchy, and micro-interactions', tag: 'Typography' },
      { id: 'a4-14', image: '/images/townhall_ai_edu_img.png', caption: 'Audience Q&A addressing transition pathways from junior to senior designer', tag: 'CareerQA' },
      { id: 'a4-15', image: '/images/press_UNGA.png', caption: 'Connecting local African design standards with global usability principles', tag: 'GlobalStandards' },
      { id: 'a4-16', image: '/images/award_img.png', caption: 'Recognition award presented to distinguished design mentors and facilitators', tag: 'Mentors' },
    ],
  },

  // 5. Rise Networks Partner Events
  {
    id: 'rise-networks-partner-events',
    title: 'Rise Networks Partner Events',
    date: 'various Dates',
    year: '2026',
    location: 'Lagos, Nigeria',
    photoCount: 100,
    image: '/images/photos_rise_partners.png',
    programme: 'Rise Partners & Ecosystem',
    eventType: 'Partner Events',
    description:
      'Connecting fellows, corporate partners, and international institutions to expand venture placement, tech apprenticeships, and startup incubation across Africa.',
    photos: [
      { id: 'a5-1', image: '/images/photos_rise_partners.png', caption: 'Fellows and corporate sponsors sharing moments of connection and collaboration', tag: 'Ecosystem' },
      { id: 'a5-2', image: '/images/gov_partnership image.png', caption: 'Strategic partnership signing between Rise Networks and enterprise sponsors', tag: 'MoU' },
      { id: 'a5-3', image: '/images/our_program_connected_ecosystem.png', caption: 'Annual convening bringing together technologists, investors, and policymakers', tag: 'Convening' },
      { id: 'a5-4', image: '/images/partner_who_can_partner_img.png', caption: 'Interactive round table discussing funding pipelines for youth tech builders', tag: 'Funding' },
      { id: 'a5-5', image: '/images/photos_make_mation_festival.png', caption: 'Partner representatives watching live student prototype demonstrations', tag: 'Demonstration' },
      { id: 'a5-6', image: '/images/photos_round_tables.png', caption: 'Executive panel exploring corporate responsibility and sovereign talent development', tag: 'CSR' },
      { id: 'a5-7', image: '/images/photos_i_love_africa.png', caption: 'Scholarship recipients engaging directly with industry executive sponsors', tag: 'Scholars' },
      { id: 'a5-8', image: '/images/photos_passnownow_kokokah.png', caption: 'Joint delegation of educational partners at the education technology summit', tag: 'EdPartners' },
      { id: 'a5-9', image: '/images/photos_ai_for_elections.png', caption: 'Civic partners discussing information resilience and election integrity metrics', tag: 'CivicPartners' },
      { id: 'a5-10', image: '/images/award_img.png', caption: 'Partner recognition gala honoring corporate institutions supporting African AI', tag: 'PartnerGala' },
      { id: 'a5-11', image: '/images/events_ai_festival.png', caption: 'Partners touring the tech festival hall and testing open-source robotics', tag: 'Tour' },
      { id: 'a5-12', image: '/images/ai_indus_1.png', caption: 'Enterprise partners keynote on scaling machine learning deployment in banking', tag: 'Enterprise' },
      { id: 'a5-13', image: '/images/press_UNGA.png', caption: 'International institutional dialogue expanding global scholarship funds', tag: 'GlobalFund' },
      { id: 'a5-14', image: '/images/why_rise_networks.png', caption: 'Commemorating a decade of sustained cross-sector public and private partnership', tag: 'Anniversary' },
      { id: 'a5-15', image: '/images/townhall_ai_edu_img.png', caption: 'Academic partners convening to align curriculum with current technology trends', tag: 'Curriculum' },
      { id: 'a5-16', image: '/images/scholarship_hero_page.png', caption: 'Lab sponsors interacting with student cohorts during deep learning training', tag: 'LabCohort' },
      { id: 'a5-17', image: '/images/helchetics_full_image.png', caption: 'HealthTech venture partners reviewing physiological sensor telemetry readings', tag: 'HealthVentures' },
      { id: 'a5-18', image: '/images/about_hero_img.png', caption: 'Leadership address highlighting collective milestones achieved with partners', tag: 'Address' },
    ],
  },

  // 6. Passnownow / Kokokah Launch
  {
    id: 'passnownow-kokokah-launch',
    title: 'Passnownow / Kokokah Launch',
    date: 'Nov 2026',
    year: '2026',
    location: 'Lagos, Nigeria',
    photoCount: 300,
    image: '/images/photos_passnownow_kokokah.png',
    programme: 'PassNowNow / Kokokah',
    eventType: 'Program Launch',
    description:
      'Official graduation of educators and student scholars under the PassNowNow initiative, democratizing access to high-quality digital learning tools for secondary schools.',
    photos: [
      { id: 'a6-1', image: '/images/photos_passnownow_kokokah.png', caption: 'National youth and teacher cohort gathered for the PassNowNow launch ceremony', tag: 'Launch' },
      { id: 'a6-2', image: '/images/scholarship_eligibility_img.jpg', caption: 'Teachers receiving digital literacy tablets and lesson planning toolkits', tag: 'Teachers' },
      { id: 'a6-3', image: '/images/partner_sponsor_the_next_gen_img.png', caption: 'Secondary school students accessing past exam questions on the portal', tag: 'Students' },
      { id: 'a6-4', image: '/images/photos_i_love_africa.png', caption: 'Interactive demonstration of digital curricula and animated science lessons', tag: 'Science' },
      { id: 'a6-5', image: '/images/photos_make_mation_festival.png', caption: 'Student builders explaining how online learning enabled their prototype ideas', tag: 'Testimonial' },
      { id: 'a6-6', image: '/images/townhall_ai_edu_img.png', caption: 'Education ministry directors endorsing sovereign curriculum digital platforms', tag: 'Ministry' },
      { id: 'a6-7', image: '/images/photos_round_tables.png', caption: 'Panel exploring solutions to bridge the digital gap in rural community schools', tag: 'Equity' },
      { id: 'a6-8', image: '/images/photos_rise_partners.png', caption: 'Philanthropic foundations supporting school connectivity programs', tag: 'Philanthropy' },
      { id: 'a6-9', image: '/images/photos_ai_for_elections.png', caption: 'Auditorium session highlighting youth civic literacy through education', tag: 'CivicLiteracy' },
      { id: 'a6-10', image: '/images/scholarship_how_to_appply.png', caption: 'Teacher training workshop on administering automated practice assessments', tag: 'Assessments' },
      { id: 'a6-11', image: '/images/scholarship_hero_page.png', caption: 'Digital learning lab session with secondary students in Anthony Village', tag: 'Lab' },
      { id: 'a6-12', image: '/images/why_rise_networks.png', caption: 'Celebrating ten years of impact through PassNowNow and Kokokah initiatives', tag: 'Milestone' },
      { id: 'a6-13', image: '/images/events_ai_festival.png', caption: 'Students showcasing projects inspired by PassNowNow STEM modules', tag: 'Showcase' },
      { id: 'a6-14', image: '/images/townhall_who.png', caption: 'Parents and community elders praising accessible digital learning materials', tag: 'Community' },
      { id: 'a6-15', image: '/images/award_img.png', caption: 'Excellence in EdTech award presentation recognizing educational leadership', tag: 'Award' },
      { id: 'a6-16', image: '/images/about_hero_img.png', caption: 'Closing remarks highlighting our mission to democratize quality education', tag: 'Mission' },
    ],
  },
]

export const getAlbumById = (id: string): AlbumItem | undefined => {
  return ALBUMS_DATA.find((album) => album.id === id)
}
