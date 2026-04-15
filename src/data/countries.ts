export interface University {
  name: string;
  description: string;
  rank?: string;
  logo?: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface CountryDetail {
  slug: string;
  name: string;
  flag: string;
  hero: {
    intro: string;
    highlights: string[];
  };
  whyStudy: {
    title: string;
    points: { title: string; desc: string }[];
  };
  universities: University[];
  courses: {
    popular: string[];
    trending: string[];
  };
  costs: {
    tuition: string;
    living: string;
    variation: string;
  };
  scholarships: {
    types: string[];
    eligibility: string;
  };
  admission: {
    academic: string;
    english: string;
    entrance: string;
  };
  visa: {
    type: string;
    documents: string[];
    processingTime: string;
    successTips: string[];
  };
  workOccupations: {
    partTime: string;
    internships: string;
    psw: string;
  };
  intakes: {
    main: string[];
    deadlines: string;
  };
  living: {
    accommodation: string;
    transport: string;
    safety: string;
  };
  career: {
    scope: string;
    salary: string;
    pr: string;
  };
  faqs: FAQ[];
}

export const countriesData: CountryDetail[] = [
  {
    slug: 'usa',
    name: 'United States',
    flag: '🇺🇸',
    hero: {
      intro: 'The USA remains the world\'s most popular destination for international students, offering unparalleled academic excellence and diverse cultural experiences.',
      highlights: ['Ivy League Excellence', 'F1 Visa Success', '3-Year STEM OPT', 'Global Career Hub'],
    },
    whyStudy: {
      title: 'Why Study in the USA?',
      points: [
        { title: 'Academic Excellence', desc: 'Home to most of the world\'s top-ranked universities.' },
        { title: 'Flexible Education', desc: 'Choice of major, minor, and interdisciplinary courses.' },
        { title: 'Innovation & Research', desc: 'Leading the world in technology and scientific discovery.' },
        { title: 'Global Recognition', desc: 'US degrees are valued by employers worldwide.' },
      ],
    },
    universities: [
      { name: 'Arizona State University (ASU)', description: 'Top ranking for innovation and high Indian student intake.', rank: '#1 Innovation' },
      { name: 'Northeastern University', description: 'Premier co-op programs and major hub for Indian IT students.', rank: 'Top Co-op' },
      { name: 'University of Texas at Dallas', description: 'Strongest ROI for Computer Science and Management.', rank: 'Best ROI' },
      { name: 'Texas A&M University', description: 'Elite engineering research powerhouse.', rank: 'Top Public' },
      { name: 'NYU (New York University)', description: 'Iconic global campus with diverse academic tracks.', rank: 'Global Elite' },
      { name: 'Purdue University', description: 'Renowned for STEM excellence and major research output.', rank: 'STEM Leader' },
      { name: 'University of Southern California', description: 'Leading private research university in LA.', rank: 'Top Private' },
      { name: 'Georgia Institute of Technology', description: 'Global leader in engineering and computing.', rank: '#1 Engineering' },
      { name: 'SJSU (San Jose State)', description: 'Heart of Silicon Valley with direct industry links.', rank: 'Silicon Valley' },
      { name: 'SUNY Buffalo', description: 'Strong academic standards and affordable public education.', rank: 'Best Public' },
      { name: 'UC Irvine', description: 'Prestigious public research university in California.', rank: 'Top 10 Public' },
      { name: 'UMBC', description: 'Major research hub for cybersecurity and biotech.', rank: 'Research Hub' },
      { name: 'North Carolina State University', description: 'Leading engineering and statistics programs.', rank: 'Top Tier' },
      { name: 'Stevens Institute of Technology', description: 'Top placement rates for technology and finance.', rank: 'Best Career' },
      { name: 'Carnegie Mellon University', description: 'Global benchmark for AI and computer science.', rank: '#1 CS' },
    ],
    courses: {
      popular: ['Computer Science', 'Data Science', 'Business Administration (MBA)', 'Healthcare'],
      trending: ['AI & Machine Learning', 'Cybersecurity', 'Biotechnology'],
    },
    costs: {
      tuition: '$25,000 - $60,000 per year',
      living: '$12,000 - $20,000 per year',
      variation: 'New York/SF are expensive; Midwest/South are more affordable.',
    },
    scholarships: {
      types: ['Fulbright Program', 'Hubert Humphrey Fellowship', 'Need-based University Aid'],
      eligibility: 'High GPA, Strong SOP, and standardized test scores (SAT/GRE).',
    },
    admission: {
      academic: 'Min 60% in previous education.',
      english: 'IELTS 6.5+ or TOEFL 80+.',
      entrance: 'SAT/ACT for Bachelor; GRE/GMAT for Master.',
    },
    visa: {
      type: 'F1 Student Visa',
      documents: ['I-20 Form', 'SEVIS Receipt', 'DS-160 Confirmation', 'Financial Proof'],
      processingTime: '3-5 weeks post-interview.',
      successTips: ['Be honest in interview', 'Strong ties to home country', 'Clear career goals.'],
    },
    workOccupations: {
      partTime: '20 hours/week on-campus.',
      internships: 'CPT allowed after 9 months of study.',
      psw: '12 months OPT; 36 months for STEM graduates.',
    },
    intakes: {
      main: ['Fall (August)', 'Spring (January)'],
      deadlines: '6-9 months before intake starts.',
    },
    living: {
      accommodation: 'Dormitories, Shared Apartments, Homestays.',
      transport: 'Extensive public transit in cities; cars common in suburbs.',
      safety: 'Safe campus environments with dedicated security.',
    },
    career: {
      scope: 'Highest salaries for Tech and Finance roles.',
      salary: '$60,000 - $120,000 (Average for graduates).',
      pr: 'H1-B Visa pathway leading to Green Card.',
    },
    faqs: [
      { question: 'Can I work off-campus in the USA?', answer: 'Not on an F1 visa during the first year, except under CPT.' },
      { question: 'What is the minimum bank balance for USA?', answer: 'Typically one year of tuition + living expenses as shown on I-20.' },
    ],
  },
  {
    slug: 'uk',
    name: 'United Kingdom',
    flag: '🇬🇧',
    hero: {
      intro: 'The UK is home to some of the world\'s oldest and most prestigious universities, offering a blend of tradition and modern innovation.',
      highlights: ['Graduate Route (2yr PSW)', 'Fast 1yr Masters', 'Russell Group Prestige', 'NHS Healthcare for Students'],
    },
    whyStudy: {
      title: 'Why Study in the UK?',
      points: [
        { title: 'Global Reputation', desc: 'Degrees from UK universities are recognized and respected globally.' },
        { title: 'Quality of Education', desc: 'World-leading research and high standards of teaching.' },
        { title: 'Cultural Diversity', desc: 'A multi-cultural society welcoming students from around the world.' },
        { title: 'Post-Study Work', desc: 'The Graduate Route allows students to stay and work for 2 years.' },
      ],
    },
    universities: [
      { name: 'Coventry University', description: 'Massive intake for Indian IT and Business students.', rank: '#1 Modern' },
      { name: 'University of Hertfordshire', description: 'Top placement hub near London for tech roles.', rank: 'Top Hub' },
      { name: 'University of Greenwich', description: 'Iconic London campus with high success rates.', rank: 'Top London' },
      { name: 'University of Salford', description: 'Manchester based powerhouse for media and engineering.', rank: 'Best Industrial' },
      { name: 'BPP University', description: 'Professional focus on law, business and healthcare.', rank: 'Pro Class' },
      { name: 'Sheffield Hallam University', description: 'Leading for vocational training and placements.', rank: 'Best Applied' },
      { name: 'Northumbria University', description: 'Newcastle hub with strong global student network.', rank: 'Top Newcastle' },
      { name: 'Teesside University', description: 'Innovative campus with excellent support for Indian students.', rank: 'Best Support' },
      { name: 'University of East London (UEL)', description: 'Fast-growing research university in Docklands.', rank: 'London Tech' },
      { name: 'Birmingham City University (BCU)', description: 'Heart of Birmingham with creative and tech focus.', rank: 'Midlands Hub' },
      { name: 'Cardiff Metropolitan University', description: 'Global excellence in sport, health, and design.', rank: 'Top Wales' },
      { name: 'Kingston University London', description: 'Strongest focus on entrepreneurship and business.', rank: '#1 Startup' },
      { name: 'University of Portsmouth', description: 'Top tier teaching quality on the south coast.', rank: 'Gold Rated' },
      { name: 'Anglia Ruskin University (ARU)', description: 'Professional training and health science excellence.', rank: 'Best Health' },
      { name: 'University of Chester', description: 'High employability rates and historical excellence.', rank: 'Top Career' },
    ],
    courses: {
      popular: ['Finance', 'Business Management', 'Engineering', 'Law'],
      trending: ['Data Science', 'Nursing', 'Creative Arts'],
    },
    costs: {
      tuition: '£15,000 - £35,000 per year',
      living: '£12,000 - £15,000 per year',
      variation: 'London is significantly more expensive than the rest of the UK.',
    },
    scholarships: {
      types: ['Chevening Scholarships', 'Commonwealth Scholarships', 'GREAT Scholarships'],
      eligibility: 'Varies by program; usually requires high academic achievement and leadership potential.',
    },
    admission: {
      academic: 'Min 60-70% in previous education.',
      english: 'IELTS 6.5+ or equivalent.',
      entrance: 'Varies by course; many universities accept direct entry.',
    },
    visa: {
      type: 'Student Visa (formerly Tier 4)',
      documents: ['CAS Letter', 'Proof of Funds', 'Valid Passport', 'IHS Receipt'],
      processingTime: '3 weeks for standard applications.',
      successTips: ['Ensure all documents match perfectly', 'Declare all previous visa history', 'Show genuine intention.'],
    },
    workOccupations: {
      partTime: '20 hours/week during term time.',
      internships: 'Allowed as part of the degree program.',
      psw: '2-year Graduate Route for Bachelor/Master; 3 years for PhD.',
    },
    intakes: {
      main: ['September (Primary)', 'January (Secondary)'],
      deadlines: 'Apply at least 3-6 months in advance.',
    },
    living: {
      accommodation: 'University Halls, Private Rentals, Studio Apartments.',
      transport: 'Excellent rail and bus networks across the country.',
      safety: 'Strict laws and safe campus environments.',
    },
    career: {
      scope: 'Strong demand in Healthcare, Finance, and IT.',
      salary: '£25,000 - £50,000 (Average for entry-level).',
      pr: 'Skilled Worker Visa pathway after PSW.',
    },
    faqs: [
      { question: 'Is the 2-year PSW still active?', answer: 'Yes, the Graduate Route allows 2 years of work after graduation.' },
      { question: 'What is IHS?', answer: 'Immigration Health Surcharge - gives you access to the NHS.' },
    ],
  },
  {
    slug: 'canada',
    name: 'Canada',
    flag: '🇨🇦',
    hero: {
      intro: 'Canada is known for its high-quality education, welcoming environment, and excellent post-graduate work opportunities.',
      highlights: ['Post-Grad Work Permit', 'Simplified PR Pathway', 'Safe & Beautiful Environment', 'Low Cost of Living'],
    },
    whyStudy: {
      title: 'Why Study in Canada?',
      points: [
        { title: 'Quality of Education', desc: 'Consistently ranked as one of the best countries for education.' },
        { title: 'Work Opportunities', desc: 'Generous work permits during and after your studies.' },
        { title: 'Immigration Benefits', desc: 'Clear pathways for permanent residency for graduates.' },
        { title: 'Safety & Quality of Life', desc: 'Consistently ranked as one of the safest countries.' },
      ],
    },
    universities: [
      { name: 'Conestoga College', description: 'Premier choice for Indian IT and Engineering polytechnic.', rank: 'Top Applied' },
      { name: 'Seneca College', description: 'Toronto hub with massive digital and health programs.', rank: 'Best Toronto' },
      { name: 'Centennial College', description: 'First college in Ontario with deep industry links.', rank: 'Top Hub' },
      { name: 'George Brown College', description: 'Downtown Toronto excellence for arts and business.', rank: 'City Choice' },
      { name: 'Sheridan College', description: 'The peak of animation and creative technology.', rank: 'Best Arts' },
      { name: 'Humber College', description: 'Broadest range of degrees near Toronto airport.', rank: 'Top Industry' },
      { name: 'Fanshawe College', description: 'London-based hub with excellent student support.', rank: 'Best Student Life' },
      { name: 'Capilano University', description: 'Boutique university experience in North Vancouver.', rank: 'BC Choice' },
      { name: 'Kwantlen Polytechnic (KPU)', description: 'Practical learning focus across Surrey/Richmond.', rank: 'Best Skills' },
      { name: 'Yorkville University', description: 'Accelerated degrees in Business and Creative arts.', rank: 'Best Career' },
      { name: 'University of Canada West', description: 'Vancouver-based powerhouse for MBA students.', rank: 'MBA Hub' },
      { name: 'Langara College', description: 'Pathway leader in British Columbia.', rank: 'Pathway Best' },
      { name: 'Douglas College', description: 'Applied bachelors and diplomas in Vancouver.', rank: 'West Coast' },
      { name: 'Mohawk College', description: 'Hamilton-based tech and healthcare leader.', rank: 'Tech King' },
      { name: 'Niagara College', description: 'Unique hospitality and agri-business programs.', rank: '#1 Hospitality' },
    ],
    courses: {
      popular: ['Engineering', 'Business Management', 'Computer Science', 'Healthcare'],
      trending: ['Sustainability', 'Logistics', 'Digital Marketing'],
    },
    costs: {
      tuition: 'CAD 20,000 - 45,000 per year',
      living: 'CAD 15,000 - 20,000 per year',
      variation: 'Varies by province; Toronto and Vancouver are higher.',
    },
    scholarships: {
      types: ['Global Affairs Canada', 'Vanier Graduate Scholarships', 'University Entrance Awards'],
      eligibility: 'Academic excellence and sometimes extracurricular involvement.',
    },
    admission: {
      academic: 'Min 65% in previous education.',
      english: 'IELTS 6.5 with no band less than 6.0.',
      entrance: 'Generally not required for Master; GMAT for some MBAs.',
    },
    visa: {
      type: 'Study Permit',
      documents: ['Letter of Acceptance (LOA)', 'GIC Certificate', 'Proof of Funds', 'Medical Exam'],
      processingTime: 'SDS (Fast-track) 45-60 days; regular longer.',
      successTips: ['Follow SDS requirements if eligible', 'Show clear ties to home country', 'Provide strong GIC proof.'],
    },
    workOccupations: {
      partTime: '20 hours/week off-campus.',
      internships: 'Co-op permits often integrated into courses.',
      psw: 'Up to 3-year Post-Graduation Work Permit (PGWP).',
    },
    intakes: {
      main: ['September (Fall)', 'January (Winter)', 'May (Summer)'],
      deadlines: '6-8 months before start date.',
    },
    living: {
      accommodation: 'On-campus, Off-campus rooms, Basements, Shared Houses.',
      transport: 'Good transit in major cities; cars useful in smaller towns.',
      safety: 'Renowned for being one of the most student-friendly nations.',
    },
    career: {
      scope: 'Strong demand in Tech, Health, and Natural Resources.',
      salary: 'CAD 45,000 - 80,000 (Average for entry-level).',
      pr: 'Strong PR pathways through Express Entry & PNP.',
    },
    faqs: [
      { question: 'What is the GIC?', answer: 'Guaranteed Investment Certificate - a requirement for the SDS visa route.' },
      { question: 'Can my spouse work in Canada?', answer: 'Spouses of international students are often eligible for Open Work Permits.' },
    ],
  },
  {
    slug: 'australia',
    name: 'Australia',
    flag: '🇦🇺',
    hero: {
      intro: 'Australia offers a world-class education system and a unique lifestyle in a stunning natural environment.',
      highlights: ['Group of Eight Prestige', 'Extended PSW (4+ yrs)', 'High Quality of Life', 'Dynamic Research'],
    },
    whyStudy: {
      title: 'Why Study in Australia?',
      points: [
        { title: 'Global Recognition', desc: 'Degrees from Australian universities are highly valued globally.' },
        { title: 'Work Rights', desc: 'Flexible work hours for students during and after study.' },
        { title: 'Diversity & Culture', desc: 'A multi-cultural experience in modern cities.' },
        { title: 'Student Support', desc: 'Strong laws protecting international students\' rights.' },
      ],
    },
    universities: [
      { name: 'Deakin University', description: 'Massive success for Indian students in Sport and IT.', rank: 'Top 1% Global' },
      { name: 'RMIT University', description: 'Melbournes design and tech powerhouse.', rank: 'Best Design' },
      { name: 'Swinburne University', description: 'Innovation focused hub with major industry links.', rank: 'Top Hub' },
      { name: 'Curtin University', description: 'Perths leading university for mining and business.', rank: 'West Coast' },
      { name: 'University of Wollongong', description: 'Award winning research and tech focus near Sydney.', rank: 'Best Research' },
      { name: 'Macquarie University', description: 'Sydneys business and finance elite center.', rank: 'Top Finance' },
      { name: 'UTS Sydney', description: '#1 young university for tech and media.', rank: 'Sydney Tech' },
      { name: 'Griffith University', description: 'Gold Coast hub for health and hospitality.', rank: 'Best Tourism' },
      { name: 'La Trobe University', description: 'Diverse campus with high Indian student support.', rank: 'Top Support' },
      { name: 'Western Sydney University', description: 'High ranked modern university with global reach.', rank: 'Impact Best' },
      { name: 'UniSA Adelaide', description: 'Applied research leader in South Australia.', rank: 'Adelaide Hub' },
      { name: 'University of Canberra', description: 'Canberras leading hub for professional degrees.', rank: 'Capital Choice' },
      { name: 'Flinders University', description: 'Innovation across medicine and technology.', rank: 'Best Innovation' },
      { name: 'Victoria University', description: 'Unique block model of learning for high success.', rank: 'Best Learning' },
      { name: 'Charles Sturt University', description: 'Regional leader for career placements.', rank: '#1 Placement' },
    ],
    courses: {
      popular: ['Business', 'Engineering', 'Nursing', 'Information Technology'],
      trending: ['Cybersecurity', 'Hospitality', 'Social Work'],
    },
    costs: {
      tuition: 'AUD 30,000 - 55,000 per year',
      living: 'AUD 20,000 - 25,000 per year',
      variation: 'Sydney and Melbourne are the most expensive cities.',
    },
    scholarships: {
      types: ['Australia Awards', 'Destination Australia', 'University Merit Scholarships'],
      eligibility: 'Varies by award; often academic merit and sometimes citizenship.',
    },
    admission: {
      academic: 'Min 60-70% in previous education.',
      english: 'IELTS 6.5 with no band less than 6.0.',
      entrance: 'Varies by university; mostly standard entry.',
    },
    visa: {
      type: 'Student Visa (Subclass 500)',
      documents: ['eCoE', 'GTE Statement', 'OSHC Insurance', 'Financial Proof'],
      processingTime: '4-6 weeks after application.',
      successTips: ['Write a strong GTE statement', 'Have clear financial documentation', 'Undergo medicals early.'],
    },
    workOccupations: {
      partTime: '48 hours per fortnight during sessions.',
      internships: ' souvent part of professional courses.',
      psw: 'Up to 4-6 years of Post-Study Work for certain degrees.',
    },
    intakes: {
      main: ['February (Semester 1)', 'July (Semester 2)'],
      deadlines: 'Apply 2-3 months before intake starts.',
    },
    living: {
      accommodation: 'Uni Residential Colleges, Private Rentals, Shared Dorms.',
      transport: 'Reliable train and bus systems in major metropolises.',
      safety: 'Safe, student-friendly environments with high safety standards.',
    },
    career: {
      scope: 'Strong demand in Engineering, IT, and Health sectors.',
      salary: 'AUD 60,000 - 90,000 (Average grad salary).',
      pr: 'Pathways through GSM (General Skilled Migration).',
    },
    faqs: [
      { question: 'What is GTE?', answer: 'Genuine Temporary Entrant - a key requirement for the Australian student visa.' },
      { question: 'What is OSHC?', answer: 'Overseas Student Health Cover - mandatory insurance for your entire stay.' },
    ],
  },
  {
    slug: 'germany',
    name: 'Germany',
    flag: '🇩🇪',
    hero: {
      intro: 'Germany is a global leader in technology and engineering, offering low tuition costs and excellent career prospects.',
      highlights: ['Free/Low Tuition', 'Engineering Powerhouse', 'Strong Economy', '18-month Job Search Visa'],
    },
    whyStudy: {
      title: 'Why Study in Germany?',
      points: [
        { title: 'Affordability', desc: 'Very low or no tuition fees at public universities.' },
        { title: 'Top-tier Quality', desc: 'World-renowned for engineering and science programs.' },
        { title: 'Economic Hub', desc: 'The largest economy in Europe with strong job markets.' },
        { title: 'Safe & Central', desc: 'Located in the heart of Europe with high safety standards.' },
      ],
    },
    universities: [
      { name: 'Technical University of Munich (TUM)', description: 'Germany\'s #1 technical university.', rank: '#1 in Germany' },
      { name: 'SRH Berlin University', description: 'Applied sciences hub with high Indian intake.', rank: 'Berlin Best' },
      { name: 'IU International University', description: '#1 for flexible degrees and online-hybrid learning.', rank: 'Best Private' },
      { name: 'GISMA University', description: 'Management and tech focus in the heart of Berlin.', rank: 'Berlin Tech' },
      { name: 'BSBI (Berlin School of Business)', description: 'Global business and leadership excellence.', rank: 'Top Hub' },
      { name: 'Lancaster University Leipzig', description: 'Elite UK degrees taught in the heart of Germany.', rank: 'UK Elite' },
      { name: 'New European College', description: 'Boutique experience in Munich for high-end business.', rank: 'Munich Elite' },
      { name: 'EU Business School', description: 'International network and hands-on business learning.', rank: 'Top Global' },
      { name: 'Arden University Berlin', description: 'Practical and modern degrees for Indian professionals.', rank: 'Career Best' },
      { name: 'UE (Applied Sciences Europe)', description: 'Art, design and business innovation hub.', rank: 'Creative King' },
      { name: 'ISM (International School of Mgmt)', description: 'Practical business studies with global internships.', rank: 'Best Intern' },
      { name: 'Macromedia University', description: 'Focus on digital and media management.', rank: 'Digital Leader' },
      { name: 'CBS International Business School', description: 'Leading private business school in Cologne.', rank: '#1 Private' },
      { name: 'Schiller International', description: 'Global campus network for diplomacy and business.', rank: 'Global Link' },
      { name: 'Accadis Academy', description: 'High ranked bachelors and masters near Frankfurt.', rank: 'Frankfurt Hub' },
    ],
    courses: {
      popular: ['Mechanical Engineering', 'Informatics (CS)', 'Automotive Engineering', 'Management'],
      trending: ['Renewable Energy', 'AI', 'Applied Sciences'],
    },
    costs: {
      tuition: 'Public: Minimal Semester Fees; Private: €10,000 - €20,000',
      living: '€10,000 - €12,000 per year',
      variation: 'Munich is the most expensive; East Germany is more affordable.',
    },
    scholarships: {
      types: ['DAAD Scholarships', 'Erasmus+', 'University Excellence Awards'],
      eligibility: 'Academic merit, sometimes professional experience required.',
    },
    admission: {
      academic: 'Min 70% or higher (German Grade system).',
      english: 'IELTS 6.5+ or German B2/C1 depending on course.',
      entrance: 'Varies; German universities often require GRE/GMAT.',
    },
    visa: {
      type: 'German Student Visa',
      documents: ['University Admission Letter', 'Blocked Account (€11,208)', 'Health Insurance', 'APS (for some countries)'],
      processingTime: '8-12 weeks for standard processing.',
      successTips: ['Open your Blocked Account early', 'Show clear motivation for Germany', 'Be prepared for interview.'],
    },
    workOccupations: {
      partTime: '120 full days or 240 half days per year.',
      internships: 'Integrated internships are highly encouraged.',
      psw: '18-month Job Search Visa after graduation.',
    },
    intakes: {
      main: ['Winter (October - Primary)', 'Summer (April)'],
      deadlines: 'July 15 (Winter) and January 15 (Summer).',
    },
    living: {
      accommodation: 'Studentenwerk Halls, WG (Shared Flat), Private Apartments.',
      transport: 'Excellent public transit with specialized student tickets.',
      safety: 'Safe, organized, and very welcoming to international talent.',
    },
    career: {
      scope: 'Strongest demand in Engineering, IT, and specialized tech.',
      salary: '€45,000 - €70,000 (Average starting salary).',
      pr: 'EU Blue Card or PR pathway after 2 years of work.',
    },
    faqs: [
      { question: 'What is a Blocked Account?', answer: 'A special bank account (Sperrkonto) required for German visa processing.' },
      { question: 'Do I need to know German to study?', answer: 'Not for English-taught programs, but knowing basic German is vital for life and work.' },
    ],
  },
  {
    slug: 'ireland',
    name: 'Ireland',
    flag: '🇮🇪',
    hero: {
      intro: 'Ireland is the tech hub of Europe, offering high-quality education and a vibrant culture.',
      highlights: ['European Tech Hub', '1-2yr PSW', 'English-Speaking', 'Strong Research Focus'],
    },
    whyStudy: {
      title: 'Why Study in Ireland?',
      points: [
        { title: 'Tech Opportunities', desc: 'Home to the European headquarters of major tech firms.' },
        { title: 'Educational Quality', desc: 'High standards of university education and research.' },
        { title: 'Friendly Culture', desc: 'Consistently ranked as one of the friendliest countries.' },
        { title: 'Industry Connections', desc: 'Close links between academia and massive global industries.' },
      ],
    },
    universities: [
      { name: 'Trinity College Dublin (TCD)', description: 'Ireland\'s top-ranked and oldest university.', rank: '#1 in Ireland' },
      { name: 'University College Dublin (UCD)', description: 'Largest university in Ireland with global reach.', rank: 'Top Hub' },
      { name: 'Dublin City University (DCU)', description: 'Leading for tech and employability.', rank: 'Best Career' },
      { name: 'Technological University of the Shannon (TUS)', description: 'High Indian intake for STEM and IT.', rank: 'Top STEM' },
      { name: 'Munster Technological University (MTU)', description: 'Corks powerhouse for engineering and IT.', rank: 'Best Applied' },
      { name: 'Shannon College of Hotel Mgmt', description: 'Global prestige in hospitality excellence.', rank: 'Top Hotel' },
      { name: 'National College of Ireland (NCI)', description: 'Downtown Dublin hub for data and business.', rank: 'Dublin Hub' },
      { name: 'Griffith College', description: 'Professional and affordable excellence across Ireland.', rank: 'Top Choice' },
      { name: 'Dublin Business School (DBS)', description: 'Practical and fast-paced business hub.', rank: 'Best Business' },
      { name: 'University of Galway', description: 'Leading center for biotech and medtech.', rank: 'Top Global' },
      { name: 'University College Cork (UCC)', description: 'Sustainability focused research elite.', rank: '#1 Sustainability' },
      { name: 'University of Limerick (UL)', description: 'Best campus experience and major placements.', rank: 'Best Student' },
      { name: 'Maynooth University', description: 'Fastest growing research university near Dublin.', rank: 'Top Research' },
      { name: 'SETU (South East Tech Uni)', description: 'Innovation across the South East region.', rank: 'Regional King' },
      { name: 'ATU (Atlantic Tech Uni)', description: 'Strategic hub for data and environmental science.', rank: 'Green Hub' },
    ],
    courses: {
      popular: ['Computer Science', 'Business Analytics', 'Digital Marketing', 'Pharmaceuticals'],
      trending: ['Data Science', 'Biomedical Science', 'Fintech'],
    },
    costs: {
      tuition: '€10,000 - €25,000 per year',
      living: '€10,000 - €15,000 per year',
      variation: 'Dublin is much more expensive than cities like Galway or Cork.',
    },
    scholarships: {
      types: ['Government of Ireland Scholarships', 'University Merit Awards'],
      eligibility: 'Academic achievement and proven leadership skills.',
    },
    admission: {
      academic: 'Min 60% in previous education.',
      english: 'IELTS 6.5 with no band less than 6.0.',
      entrance: 'Varies; mostly standard entry requirements.',
    },
    visa: {
      type: 'Study Visa (D Visa)',
      documents: ['Letter of Acceptance', 'Proof of Fees Paid', 'Proof of Funds', 'Medical Insurance'],
      processingTime: '4-8 weeks for most applications.',
      successTips: ['Ensure funds are clearly explained', 'Show clear academic trajectory', 'Strong SOP.'],
    },
    workOccupations: {
      partTime: '20 hours/week during term; 40 hours during holidays.',
      internships: 'Embedded as part of the degree in many courses.',
      psw: '1-year (Bachelors) or 2-year (Masters) Third Level Graduate Scheme.',
    },
    intakes: {
      main: ['September (Main)', 'January (Selected courses)'],
      deadlines: 'Apply before March/April for September intake.',
    },
    living: {
      accommodation: 'On-campus, Student Hubs, Private House Shares.',
      transport: 'Good bus and rail networks in and between major cities.',
      safety: 'Very safe, modern, and welcoming social environment.',
    },
    career: {
      scope: 'Highly focused on Tech, Pharma, and Global Business.',
      salary: '€35,000 - €60,000 (Average for graduates).',
      pr: 'Possible through Critical Skills Employment Permit.',
    },
    faqs: [
      { question: 'Is Ireland part of the UK?', answer: 'No, the Republic of Ireland is an independent nation and part of the EU.' },
      { question: 'What are the top tech firms in Ireland?', answer: 'Google, Meta, Apple, and Microsoft all have their EU headquarters in Ireland.' },
    ],
  },
  {
    slug: 'new-zealand',
    name: 'New Zealand',
    flag: '🇳🇿',
    hero: {
      intro: 'New Zealand offers a world-class education with a focus on practical learning and a high quality of life.',
      highlights: ['8 World-Class Unis', 'Practical Learning', 'Safe Environment', 'Work While You Study'],
    },
    whyStudy: {
      title: 'Why Study in New Zealand?',
      points: [
        { title: 'Quality of Education', desc: 'All 8 universities are ranked in the top 3% globally.' },
        { title: 'Innovation in Learning', desc: 'Strong focus on hands-on and practical application.' },
        { title: 'Unmatched Lifestyle', desc: 'Beautiful natural landscapes and safe, modern cities.' },
        { title: 'Post-Study Outcomes', desc: 'Good work opportunities for skilled graduates.' },
      ],
    },
    universities: [
      { name: 'University of Auckland', description: 'New Zealand\'s premier research university.', rank: '#1 in NZ' },
      { name: 'AUT (Auckland Uni of Tech)', description: 'Fastest growing hub for IT and business.', rank: 'Top Modern' },
      { name: 'Lincoln University', description: '#1 for agriculture and environmental hubs.', rank: 'Green Hub' },
      { name: 'University of Otago', description: 'Renowned for medical and health sciences.', rank: '#1 Medicine' },
      { name: 'University of Canterbury', description: 'Leading academic excellence in Christchurch.', rank: 'Top Hub' },
      { name: 'Victoria University of Wellington', description: 'Capital city hub for law and professional tracks.', rank: 'Capital Elite' },
      { name: 'Massey University', description: 'Leader in research and creative arts.', rank: 'Best Applied' },
      { name: 'University of Waikato', description: 'Hamilton based hub with major industry links.', rank: 'Top Business' },
      { name: 'Unitec Institute of Tech', description: 'Auckland based leader for practical skills.', rank: 'Best Tech' },
      { name: 'Otago Polytechnic', description: 'Hands-on learning focus in Dunedin.', rank: 'Best Polytechnic' },
      { name: 'Ara Institute of Canterbury', description: 'Christchurch core for vocational excellence.', rank: 'Regional Hub' },
      { name: 'Toi Ohomai Institute', description: 'Bay of Plenty hub for student success.', rank: 'Top Support' },
      { name: 'Wintec (Waikato Tech)', description: 'Hamilton based applied education leader.', rank: 'Best Industrial' },
      { name: 'EIT (Eastern Institute)', description: 'Leading regional provider in Napier.', rank: 'Regional King' },
      { name: 'SIT (Southern Institute)', description: 'Best value education hub in the south.', rank: 'Best Value' },
    ],
    courses: {
      popular: ['Information Technology', 'Hospitality', 'Creative Media', 'Engineering'],
      trending: ['Environmental Science', 'Agriculture', 'Animation'],
    },
    costs: {
      tuition: 'NZD 25,000 - 45,000 per year',
      living: 'NZD 15,000 - 20,000 per year',
      variation: 'Auckland and Wellington have higher living costs.',
    },
    scholarships: {
      types: ['New Zealand Scholarships', 'University Entrance Scholarships'],
      eligibility: 'Determined by country of citizenship and academic record.',
    },
    admission: {
      academic: 'Min 60% in previous education.',
      english: 'IELTS 6.5 for Master; 6.0 for Bachelors.',
      entrance: 'Varies; mostly standard entry requirements.',
    },
    visa: {
      type: 'Student Visa',
      documents: ['Letter of Acceptance', 'Financial Proof', 'Return Ticket/Proof of Funds', 'Medical/X-ray'],
      processingTime: '4-8 weeks for processing.',
      successTips: ['Show clear intent to study specialized subjects', 'GTE criteria applies', 'Reliable funds proof.'],
    },
    workOccupations: {
      partTime: '20 hours/week during the academic year.',
      internships: ' souvent part of the curriculum in NZ.',
      psw: 'Up to 3-year Post-Study Work Visa depending on level of study.',
    },
    intakes: {
      main: ['February (Semester 1)', 'July (Semester 2)'],
      deadlines: 'Apply at least 4 months before start date.',
    },
    living: {
      accommodation: 'University Hostels, Homestays, Shared Flats.',
      transport: 'Buses are the primary public transit in most cities.',
      safety: 'Consistently ranked as one of the world\'s most peaceful countries.',
    },
    career: {
      scope: 'Strong demand in IT, Construction, and Health.',
      salary: 'NZD 50,000 - 80,000 (Average for graduates).',
      pr: 'Pathways via Skilled Migrant Category Visa.',
    },
    faqs: [
      { question: 'What is the Level 7 or 8 degree?', answer: 'Level 7 is a Bachelor; Level 8 is a Post-Graduate Diploma/Honors in the NZQF.' },
      { question: 'Can I stay after my studies?', answer: 'Yes, with a Post-Study Work Visa for up to 3 years.' },
    ],
  },
  {
    slug: 'france',
    name: 'France',
    flag: '🇫🇷',
    hero: {
      intro: 'France is known for its cultural heritage and world-class culinary and business schools.',
      highlights: ['Art & Fashion Capital', 'Top Business Schools', 'Strong Cultural Experience', 'English-Taught Peaks'],
    },
    whyStudy: {
      title: 'Why Study in France?',
      points: [
        { title: 'Academic Prestigue', desc: 'Home to some of Europe\'s most elite business and art schools.' },
        { title: 'Affordability', desc: 'Government subsidies keep public tuition relatively low.' },
        { title: 'Cultural Immersion', desc: 'A rich history in food, fashion, and philosophical thought.' },
        { title: 'Innovation', desc: 'Leading center for aerospace and telecommunications.' },
      ],
    },
    universities: [
      { name: 'HEC Paris', description: 'Europe\'s #1 business school for management.', rank: '#1 Global' },
      { name: 'ESSEC Business School', description: 'Premier management and tech school.', rank: 'Top Elite' },
      { name: 'NEOMA Business School', description: 'Leading for international business and luxury.', rank: 'Luxury Best' },
      { name: 'SKEMA Business School', description: 'Global campus network for innovation.', rank: 'Top Global' },
      { name: 'KEDGE Business School', description: 'Marseille based leader for diverse management.', rank: 'Best Applied' },
      { name: 'Audencia Business School', description: 'Nantes based hub for entrepreneurship.', rank: 'Top Tier' },
      { name: 'TBS Education', description: 'Toulouse based leader for aerospace business.', rank: 'Aerospace King' },
      { name: 'Montpellier Business School', description: '#1 for sustainability and value.', rank: 'Green Hub' },
      { name: 'IESEG School of Mgmt', description: 'Top ranking business school in Lille and Paris.', rank: 'Top Choice' },
      { name: 'Rennes School of Business', description: 'Most international business school in France.', rank: 'Global Hub' },
      { name: 'Burgundy School of Business', description: 'Wine and luxury management excellence.', rank: 'Specialized Peak' },
      { name: 'Excelia Business School', description: 'Top ranked management education in La Rochelle.', rank: 'Top Placed' },
      { name: 'INSEEC', description: 'Vast network for practical business tracks.', rank: 'Best Link' },
      { name: 'IPAG Business School', description: 'Dynamic business school in Nice and Paris.', rank: 'Med Hub' },
      { name: 'ESC Clermont Business School', description: 'Heart of France excellence in management.', rank: 'Regional Hub' },
    ],
    courses: {
      popular: ['Fashion Management', 'Luxury Brand Management', 'Culinary Arts', 'Business'],
      trending: ['Data Science', 'Sustainability', 'Aerospace'],
    },
    costs: {
      tuition: 'Public: €3,770 (Master); Private: €10,000 - €30,000',
      living: '€10,000 - €15,000 per year',
      variation: 'Paris is the most expensive; Lyon or Toulouse are more moderate.',
    },
    scholarships: {
      types: ['Eiffel Excellence Scholarships', 'Erasmus+', 'University Specific Grants'],
      eligibility: 'Outstanding academic background and leadership potential.',
    },
    admission: {
      academic: 'Min 60% in previous education.',
      english: 'IELTS 6.5 or French DELF B2 (if studying in French).',
      entrance: 'Varies; often includes interview for Grande Ecoles.',
    },
    visa: {
      type: 'VLS-TS Long Stay Visa',
      documents: ['EEF/Campus France Confirmation', 'Proof of Funds (€615/mo)', 'Accommodation Proof'],
      processingTime: '2-4 weeks for standard cases.',
      successTips: ['Complete Campus France process accurately', 'Show clear career link to France', 'Verify accommodation.'],
    },
    workOccupations: {
      partTime: 'Up to 964 hours per year (60% of full-time).',
      internships: 'Mandatory in most French degree programs.',
      psw: '1-year APS or temporary resident permit for job search.',
    },
    intakes: {
      main: ['September (Main)', 'January (Selected programs)'],
      deadlines: 'February/March for Campus France applications.',
    },
    living: {
      accommodation: 'CROUS (Public), Private Residences, Colocation (Shared Flat).',
      transport: 'World-best high-speed rail and city transit systems.',
      safety: 'Safe cities with vibrant, active international communities.',
    },
    career: {
      scope: 'Leading in Luxury, Tech, Aerospace, and Arts.',
      salary: '€35,000 - €55,000 (Average starting grad salary).',
      pr: 'Pathways available after 5 years or 2 years for French graduates.',
    },
    faqs: [
      { question: 'Do I need to speak French?', answer: 'Not for English-taught programs, but basic French is crucial for social integration.' },
      { question: 'What is a Grande École?', answer: 'Elite French higher education institutions with highly competitive entry.' },
    ],
  },
  {
    slug: 'italy',
    name: 'Italy',
    flag: '🇮🇹',
    hero: {
      intro: 'Italy offers a rich history of academic excellence and is a leader in fashion, design, and architecture.',
      highlights: ['Oldest Unis in Europe', 'Fashion & Design Mecca', 'Low Tuition (€1k-4k)', 'Rich Cultural Experience'],
    },
    whyStudy: {
      title: 'Why Study in Italy?',
      points: [
        { title: 'Historic Excellence', desc: 'Home to the world\'s oldest universities like Bologna.' },
        { title: 'Global Design Hub', desc: 'Preeminent destination for fashion and industrial design.' },
        { title: 'Affordability', desc: 'Public university tuition is among the lowest in Europe.' },
        { title: 'Lifestyle & Food', desc: 'Experience the world-renowned Mediterranean lifestyle.' },
      ],
    },
    universities: [
      { name: 'Politecnico di Milano', description: 'The peak of technical and design education.', rank: '#1 Design EU' },
      { name: 'Università di Bologna', description: 'Oldest university in the world with global rank.', rank: '#1 in Italy' },
      { name: 'Università Cattolica', description: 'Premier private university for business and law.', rank: 'Elite Hub' },
      { name: 'NABA (Nuova Accademia)', description: 'Iconic academy for design and new arts.', rank: 'Best Design' },
      { name: 'Istituto Marangoni', description: 'Global benchmark for fashion and luxury.', rank: 'Top Fashion' },
      { name: 'Polimoda', description: 'Firenze based leader in fashion business.', rank: 'Italy Best' },
      { name: 'IED (Istituto Europeo)', description: 'Industry focused design excellence in Milan.', rank: 'Top Choice' },
      { name: 'La Sapienza Rome', description: 'Ancient prestige in the heart of Rome.', rank: 'Top Global' },
      { name: 'Università di Padova', description: 'Scientific and academic excellence since 1222.', rank: 'Top Tier' },
      { name: 'Università di Pisa', description: 'Galileo’s university for research excellence.', rank: 'Science Peak' },
      { name: 'Università Bicocca', description: 'Modern research hub in Northern Milan.', rank: 'Top Modern' },
      { name: 'Università di Torino', description: 'Turins center for business and humanities.', rank: 'Top Hub' },
      { name: 'Università di Firenze', description: 'Leading for arts and cultural heritage.', rank: 'Cultural King' },
      { name: 'Università Federico II', description: 'Naples-based powerhouse for engineering.', rank: 'Best Applied' },
      { name: 'Università LUISS', description: 'Elite private university for political science.', rank: 'Policy Best' },
    ],
    courses: {
      popular: ['Fashion Design', 'Architecture', 'Mechanical Engineering', 'Medicine'],
      trending: ['Sustainable Living', 'History of Art', 'Data Policy'],
    },
    costs: {
      tuition: 'Public: €900 - €4,000; Private: €10,000 - €25,000',
      living: '€9,000 - €12,000 per year',
      variation: 'Milan and Rome are expensive; South Italy is much cheaper.',
    },
    scholarships: {
      types: ['DSU Regional Scholarships', 'Invest Your Talent in Italy', 'University Merit Awards'],
      eligibility: 'Based on financial need (ISEE) or academic excellence.',
    },
    admission: {
      academic: 'Min 60% in previous education.',
      english: 'IELTS 6.0+ (for English courses).',
      entrance: 'Varies; often requires tests like Tolc or IMAT for Medicine.',
    },
    visa: {
      type: 'National D Visa (Study)',
      documents: ['Universitaly Pre-enrollment', 'Financial Proof (€6,000+)', 'Health Insurance'],
      processingTime: '2-8 weeks for processing.',
      successTips: ['Complete Universitaly step early', 'Ensure DOV or Statement of Comparability is ready.'],
    },
    workOccupations: {
      partTime: '20 hours/week during study sessions.',
      internships: 'Often required for design and architecture programs.',
      psw: '1-year residence permit for job search or business startup.',
    },
    intakes: {
      main: ['September (Main Intake)'],
      deadlines: 'Usually between March and May for pre-enrollment.',
    },
    living: {
      accommodation: 'University Residences, Shared Rooms, Apartments.',
      transport: 'Vibrant city transit and reliable inter-city trains.',
      safety: 'Safe, lively cities with deep social and cultural traditions.',
    },
    career: {
      scope: 'Strong in Design, Automotive, Fashion, and Food sectors.',
      salary: '€25,000 - €45,000 (Average starting grad salary).',
      pr: 'Pathways available after 5 years of legal residence.',
    },
    faqs: [
      { question: 'What is Universitaly?', answer: 'The official platform for pre-enrolling in Italian universities.' },
      { question: 'Is tuition based on income?', answer: 'Yes, in public universities, fees are often calculated based on family income (ISEE).' },
    ],
  },
  {
    slug: 'dubai',
    name: 'Dubai',
    flag: '🇦🇪',
    hero: {
      intro: 'Dubai is a rapidly growing education hub, offering modern facilities and strategic proximity to global markets.',
      highlights: ['Global Business Hub', 'Safe & Modern Cities', 'No Personal Tax', 'Strategic Hub for Asia/Africa'],
    },
    whyStudy: {
      title: 'Why Study in Dubai?',
      points: [
        { title: 'Global Exposure', desc: 'Truly international environment with 200+ nationalities.' },
        { title: 'Modern Infrastructure', desc: 'World-class campus facilities in Educational zones.' },
        { title: 'Ease of Visa', desc: 'Straightforward visa processes for students.' },
        { title: 'Networking', desc: 'Direct access to massive global industry centers.' },
      ],
    },
    universities: [
      { name: 'Heriot-Watt Dubai', description: 'Elite UK university with massive campus in Knowledge Park.', rank: 'Top UK' },
      { name: 'Middlesex Dubai', description: 'London-based expertise for Indian IT and Business.', rank: 'Top Hub' },
      { name: 'Wollongong Dubai', description: 'Australian excellence for engineering and fintech.', rank: 'Top AU' },
      { name: 'Murdoch Dubai', description: 'Strong focus on creative media and humanities.', rank: 'West Coast' },
      { name: 'Birmingham Dubai', description: 'Elite Russell Group campus in the desert.', rank: 'Top Tier' },
      { name: 'Amity Dubai', description: 'Iconic Indian university with major global reach.', rank: 'Global Indian' },
      { name: 'Manipal Academy', description: 'Primary hub for Indian medicine and engineering.', rank: '#1 Indian' },
      { name: 'BITS Pilani Dubai', description: 'Prestigious engineering technical hub.', rank: 'Top Tech' },
      { name: 'SP Jain Management', description: 'Global business school with multi-city ranking.', rank: 'MBA Best' },
      { name: 'RIT Dubai', description: 'American tech powerhouse in Silicon Oasis.', rank: 'US Hub' },
      { name: 'Canadian Uni Dubai', description: 'Leading for architecture and city management.', rank: 'Top City' },
      { name: 'American Uni Dubai', description: 'Traditional US excellence in a modern setting.', rank: 'Elite Hub' },
      { name: 'Modul Uni Dubai', description: 'Tourism and service excellence hub.', rank: 'Top Tourism' },
      { name: 'Hult Dubai', description: 'Global leader for executive business education.', rank: '#1 Global' },
      { name: 'Curtin Uni Dubai', description: 'Australian tech and business excellence.', rank: 'Top Choice' },
    ],
    courses: {
      popular: ['Business Administration', 'Engineering', 'Architecture', 'Tourism'],
      trending: ['Cybersecurity', 'Logistics', 'Digital Media'],
    },
    costs: {
      tuition: 'AED 40,000 - 100,000 per year',
      living: 'AED 35,000 - 50,000 per year',
      variation: 'Living in Knowledge Park area is common for students.',
    },
    scholarships: {
      types: ['University Merit Scholarships', 'Corporate Sponsorships'],
      eligibility: 'Commonly based on high school or previous degree GPA.',
    },
    admission: {
      academic: 'Min 60% in previous education.',
      english: 'IELTS 6.0+ or TOEFL equivalent.',
      entrance: 'Varies; mostly standard entry requirements.',
    },
    visa: {
      type: 'Student Residence Visa (1-year renewable)',
      documents: ['Offer Letter', 'Passport Copy', 'Medical Certificate', 'Health Insurance'],
      processingTime: '2-4 weeks for processing.',
      successTips: ['Submit documents clearly via university', 'Undergo medical early.'],
    },
    workOccupations: {
      partTime: 'Internship and part-time permits available through university.',
      internships: 'High emphasis on industry networking.',
      psw: 'New 1-year job search visa or long-term Golden Visas.',
    },
    intakes: {
      main: ['September (Main)', 'January (Secondary)'],
      deadlines: 'Apply 2-3 months before start date.',
    },
    living: {
      accommodation: 'Private Residences, Shared Apartments, Uni Hostels.',
      transport: 'Excellent Metro and Bus systems across Dubai.',
      safety: 'Frequently ranked as one of the safest cities in the world.',
    },
    career: {
      scope: 'Strongest in Finance, Real Estate, Logistics, and Tourism.',
      salary: 'AED 8,000 - 15,000 (Monthly starting grad salary).',
      pr: 'Pathways via long-term residence or Golden Visas.',
    },
    faqs: [
      { question: 'Can I stay in Dubai after study?', answer: 'Yes, graduates can apply for a job search visa or find employment to sponsor their residency.' },
      { question: 'Is personal income taxed in Dubai?', answer: 'No, there is currently no personal income tax in the UAE.' },
    ],
  },
  {
    slug: 'europe',
    name: 'Europe',
    flag: '🇪🇺',
    hero: {
      intro: 'Europe offers a diverse range of world-class universities, rich cultural experiences, and affordable education across its many nations — from Germany and France to Italy, the Netherlands, and beyond.',
      highlights: ['Low/Free Tuition at Public Unis', 'Schengen Travel Freedom', 'Multilingual Career Advantage', 'Strong Post-Study Work Options'],
    },
    whyStudy: {
      title: 'Why Study in Europe?',
      points: [
        { title: 'Affordable Excellence', desc: 'Many European countries offer free or very low tuition at public universities, making top-tier education accessible.' },
        { title: 'Cultural Diversity', desc: 'Study in a continent with 44+ countries, each with its own language, cuisine, and traditions — all interconnected by rail and air.' },
        { title: 'Global Career Edge', desc: 'European degrees are globally recognized. Graduates gain a multilingual, multicultural edge valued by top employers worldwide.' },
        { title: 'Innovation & Research', desc: 'Europe leads globally in sustainability, automotive engineering, AI, and life sciences research.' },
      ],
    },
    universities: [
      { name: 'Technical University of Munich (TUM)', description: 'Germany\'s #1 technical university for engineering and sciences.', rank: '#1 Germany' },
      { name: 'Politecnico di Milano', description: 'Italy\'s peak for design, architecture, and engineering.', rank: '#1 Design EU' },
      { name: 'HEC Paris', description: 'Europe\'s #1 business school for management and strategy.', rank: '#1 Business' },
      { name: 'University of Amsterdam', description: 'Top-ranked research university in the Netherlands.', rank: 'Top Netherlands' },
      { name: 'KTH Royal Institute of Technology', description: 'Sweden\'s premier engineering and innovation hub.', rank: 'Top Sweden' },
      { name: 'TU Delft', description: 'World leader in civil engineering and technology.', rank: 'Top Engineering' },
      { name: 'University of Barcelona', description: 'Spain\'s most prestigious university for arts and sciences.', rank: 'Top Spain' },
      { name: 'SRH Berlin University', description: 'Applied sciences hub with high international intake.', rank: 'Berlin Best' },
      { name: 'IU International University', description: '#1 for flexible degrees and online-hybrid learning in Germany.', rank: 'Best Private' },
      { name: 'SKEMA Business School', description: 'Global campus network for innovation across France.', rank: 'Top Global' },
      { name: 'Università di Bologna', description: 'Oldest university in the world with global prestige.', rank: '#1 Italy' },
      { name: 'Lund University', description: 'Sweden\'s top research university with global impact.', rank: 'Top Research' },
      { name: 'Erasmus University Rotterdam', description: 'Leading for economics, business, and health policy.', rank: 'Top Economics' },
      { name: 'Sapienza University of Rome', description: 'One of Europe\'s largest and most historic universities.', rank: 'Top Rome' },
      { name: 'Wageningen University', description: '#1 globally for agriculture and environmental sciences.', rank: '#1 Agriculture' },
    ],
    courses: {
      popular: ['Engineering', 'Business Management', 'Data Science', 'Architecture'],
      trending: ['Sustainability', 'AI & Robotics', 'Renewable Energy', 'Fashion & Design'],
    },
    costs: {
      tuition: '€0 - €4,000/yr (Public); €8,000 - €30,000/yr (Private)**',
      living: '€8,000 - €15,000 per year',
      variation: 'Scandinavia and Western Europe are most expensive; Eastern and Southern Europe are very affordable.',
    },
    scholarships: {
      types: ['Erasmus Mundus', 'DAAD (Germany)', 'Eiffel Excellence (France)', 'DSU Regional (Italy)', 'Holland Scholarship (Netherlands)'],
      eligibility: 'Academic excellence, leadership potential, and sometimes financial need depending on the program.',
    },
    admission: {
      academic: 'Min 60-70% in previous education (varies by country).',
      english: 'IELTS 6.0-6.5 or equivalent for English-taught programs.',
      entrance: 'Varies by country: GMAT/GRE for some MBAs; entrance tests for Medicine in Italy.',
    },
    visa: {
      type: 'National D Visa (Long Stay Student Visa) — varies by country',
      documents: ['University Admission Letter', 'Proof of Funds', 'Health Insurance', 'Blocked Account (Germany)', 'Campus France Confirmation (France)'],
      processingTime: '4-12 weeks depending on country.',
      successTips: ['Start visa applications early', 'Each country has unique requirements — research carefully', 'Show clear academic and career motivation.'],
    },
    workOccupations: {
      partTime: '20 hrs/week in most countries; 120 full days/yr in Germany.',
      internships: 'Often mandatory as part of European degree programs.',
      psw: '18 months (Germany), 1-2 years (France, Netherlands, Ireland), 1 year (Italy).',
    },
    intakes: {
      main: ['September/October (Winter - Primary)', 'February/March (Summer - Select programs)'],
      deadlines: 'Typically 3-6 months before the intake. Country-specific deadlines apply.',
    },
    living: {
      accommodation: 'Student Halls, Shared Flats (WG in Germany), Private Studios, Homestays.',
      transport: 'World-class rail networks, student transit passes, and budget airlines across the continent.',
      safety: 'Europe is consistently ranked among the safest regions globally for international students.',
    },
    career: {
      scope: 'Strong demand in Engineering, Tech, Healthcare, Sustainability, and Creative Industries.',
      salary: '€30,000 - €65,000 (varies widely by country and sector).',
      pr: 'EU Blue Card pathway (Germany); various residence permit options across member states.',
    },
    faqs: [
      { question: 'Can I study in Europe without knowing the local language?', answer: 'Yes, thousands of programs are taught entirely in English across Germany, Netherlands, Sweden, Italy, France, and more.' },
      { question: 'Can I travel freely across Europe while studying?', answer: 'Yes, with a Schengen visa or residence permit, you can travel across 27 Schengen countries freely.' },
      { question: 'Which European country has the lowest tuition?', answer: 'Germany and Norway offer free or near-free tuition at public universities. Italy and France also have very low fees.' },
    ],
  },
];
