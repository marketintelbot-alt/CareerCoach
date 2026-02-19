const TRAITS = [
  "analytical",
  "creative",
  "social",
  "leadership",
  "hands_on",
  "structure",
  "risk_tolerance",
  "independence",
  "math_focus",
  "outdoor",
  "empathy"
];

const TRAIT_LABELS = {
  analytical: "Analytical Thinking",
  creative: "Creativity",
  social: "Social Interaction",
  leadership: "Leadership",
  hands_on: "Hands-on Work",
  structure: "Structured Work",
  risk_tolerance: "Risk Comfort",
  independence: "Independence",
  math_focus: "Math/Data Focus",
  outdoor: "Outdoor Preference",
  empathy: "Empathy"
};

const CATEGORY_WEIGHT_TEMPLATES = {
  tech: {
    analytical: 88,
    creative: 62,
    social: 48,
    leadership: 56,
    hands_on: 42,
    structure: 66,
    risk_tolerance: 50,
    independence: 64,
    math_focus: 82,
    outdoor: 18,
    empathy: 45
  },
  medical: {
    analytical: 72,
    creative: 40,
    social: 72,
    leadership: 58,
    hands_on: 66,
    structure: 74,
    risk_tolerance: 34,
    independence: 48,
    math_focus: 60,
    outdoor: 20,
    empathy: 88
  },
  business: {
    analytical: 68,
    creative: 58,
    social: 74,
    leadership: 72,
    hands_on: 34,
    structure: 62,
    risk_tolerance: 60,
    independence: 60,
    math_focus: 58,
    outdoor: 18,
    empathy: 56
  },
  trades: {
    analytical: 52,
    creative: 48,
    social: 42,
    leadership: 50,
    hands_on: 90,
    structure: 62,
    risk_tolerance: 46,
    independence: 58,
    math_focus: 52,
    outdoor: 58,
    empathy: 42
  },
  law: {
    analytical: 84,
    creative: 46,
    social: 70,
    leadership: 68,
    hands_on: 26,
    structure: 78,
    risk_tolerance: 42,
    independence: 56,
    math_focus: 44,
    outdoor: 12,
    empathy: 58
  },
  creative: {
    analytical: 48,
    creative: 92,
    social: 64,
    leadership: 54,
    hands_on: 62,
    structure: 44,
    risk_tolerance: 58,
    independence: 68,
    math_focus: 30,
    outdoor: 28,
    empathy: 60
  },
  engineering: {
    analytical: 92,
    creative: 64,
    social: 44,
    leadership: 58,
    hands_on: 60,
    structure: 74,
    risk_tolerance: 42,
    independence: 58,
    math_focus: 90,
    outdoor: 36,
    empathy: 42
  },
  education: {
    analytical: 58,
    creative: 66,
    social: 86,
    leadership: 62,
    hands_on: 46,
    structure: 64,
    risk_tolerance: 34,
    independence: 50,
    math_focus: 42,
    outdoor: 22,
    empathy: 90
  },
  public_service: {
    analytical: 62,
    creative: 52,
    social: 78,
    leadership: 64,
    hands_on: 68,
    structure: 66,
    risk_tolerance: 52,
    independence: 52,
    math_focus: 38,
    outdoor: 48,
    empathy: 86
  }
};

const CATEGORY_NEXT_STEPS = {
  tech: {
    course: "Intro to Python, JavaScript, or data fundamentals",
    project: "Build a small app, dashboard, or personal website",
    club: "Join coding club, robotics, hackathon, or open source community"
  },
  medical: {
    course: "Take anatomy, health science, or CPR/first-aid certification",
    project: "Create a health-awareness mini campaign for your school",
    club: "Volunteer at clinics or join HOSA / pre-health student group"
  },
  business: {
    course: "Study business basics, marketing, and spreadsheet modeling",
    project: "Run a mock startup pitch or manage a small online store",
    club: "Join DECA, FBLA, or entrepreneurship club"
  },
  trades: {
    course: "Take technical education, blueprint reading, or safety training",
    project: "Build or repair a practical item and document your workflow",
    club: "Join skills competitions, apprenticeships, or makerspace workshops"
  },
  law: {
    course: "Take civics, legal studies, and writing-intensive classes",
    project: "Research a local policy issue and create a brief",
    club: "Join debate, mock trial, or student government"
  },
  creative: {
    course: "Take design, storytelling, media editing, or art fundamentals",
    project: "Produce a portfolio piece each month and publish online",
    club: "Join media club, school publication, or creative collective"
  },
  engineering: {
    course: "Take calculus, physics, and introductory engineering courses",
    project: "Design and test a prototype with measurable performance",
    club: "Join engineering society, robotics, or STEM competition team"
  },
  education: {
    course: "Take psychology, communication, and learning science classes",
    project: "Tutor peers and build a mini teaching unit",
    club: "Join peer mentoring, teaching assistant, or education club"
  },
  public_service: {
    course: "Take public policy, community health, and emergency basics",
    project: "Run a community impact project with clear outcomes",
    club: "Join service organizations, youth council, or civic leadership groups"
  }
};

const CAREER_DEFINITIONS = [
  {
    name: "Software Developer",
    category: "tech",
    description: "Builds software applications, features, and digital products.",
    majors: ["Computer Science", "Software Engineering", "Information Systems"],
    entry_roles: ["Junior Developer", "QA Automation Analyst"],
    salary: { low: 65000, med: 105000, high: 165000 },
    college_required: true,
    environment: "indoor",
    social_level: "medium",
    math_heavy: true,
    tweaks: { analytical: 7, creative: 6, independence: 6 }
  },
  {
    name: "Data Analyst",
    category: "tech",
    description: "Turns raw data into dashboards, insights, and decisions.",
    majors: ["Data Science", "Statistics", "Business Analytics"],
    entry_roles: ["Junior Data Analyst", "Reporting Analyst"],
    salary: { low: 60000, med: 85000, high: 130000 },
    college_required: true,
    environment: "indoor",
    social_level: "low",
    math_heavy: true,
    tweaks: { analytical: 10, math_focus: 10, social: -8 }
  },
  {
    name: "Cybersecurity Analyst",
    category: "tech",
    description: "Protects systems, networks, and data from cyber threats.",
    majors: ["Cybersecurity", "Computer Science", "Information Assurance"],
    entry_roles: ["Security Operations Analyst", "SOC Analyst"],
    salary: { low: 70000, med: 98000, high: 155000 },
    college_required: true,
    environment: "indoor",
    social_level: "low",
    math_heavy: true,
    tweaks: { analytical: 9, structure: 8, risk_tolerance: 8, social: -10 }
  },
  {
    name: "UX/UI Designer",
    category: "tech",
    description: "Designs user experiences and interfaces for digital products.",
    majors: ["Human-Computer Interaction", "Graphic Design", "Psychology"],
    entry_roles: ["UX Designer", "Product Design Associate"],
    salary: { low: 60000, med: 90000, high: 145000 },
    college_required: true,
    environment: "indoor",
    social_level: "medium",
    math_heavy: false,
    tweaks: { creative: 18, empathy: 8, social: 6, structure: -8 }
  },
  {
    name: "Product Manager",
    category: "tech",
    description: "Coordinates strategy, teams, and roadmap for products.",
    majors: ["Business", "Computer Science", "Economics"],
    entry_roles: ["Associate Product Manager", "Product Analyst"],
    salary: { low: 80000, med: 120000, high: 190000 },
    college_required: true,
    environment: "indoor",
    social_level: "high",
    math_heavy: false,
    tweaks: { leadership: 18, social: 12, empathy: 6, independence: 6 }
  },
  {
    name: "IT Support Specialist",
    category: "tech",
    description: "Solves hardware, software, and account issues for users.",
    majors: ["Information Technology", "Networking", "Computer Support"],
    entry_roles: ["Help Desk Technician", "Desktop Support Specialist"],
    salary: { low: 45000, med: 62000, high: 90000 },
    college_required: false,
    environment: "indoor",
    social_level: "high",
    math_heavy: false,
    tweaks: { hands_on: 12, empathy: 8, social: 12, analytical: -6 }
  },
  {
    name: "Cloud Engineer",
    category: "tech",
    description: "Builds and manages scalable cloud infrastructure.",
    majors: ["Computer Science", "Information Systems", "Network Engineering"],
    entry_roles: ["Cloud Operations Engineer", "DevOps Associate"],
    salary: { low: 85000, med: 125000, high: 185000 },
    college_required: true,
    environment: "indoor",
    social_level: "low",
    math_heavy: true,
    tweaks: { analytical: 8, independence: 8, structure: 6, social: -8 }
  },
  {
    name: "Game Developer",
    category: "tech",
    description: "Creates gameplay systems, tools, and technical content for games.",
    majors: ["Game Development", "Computer Science", "Interactive Media"],
    entry_roles: ["Gameplay Programmer", "Tools Developer"],
    salary: { low: 60000, med: 93000, high: 150000 },
    college_required: true,
    environment: "indoor",
    social_level: "medium",
    math_heavy: true,
    tweaks: { creative: 14, risk_tolerance: 8, independence: 6 }
  },

  {
    name: "Registered Nurse",
    category: "medical",
    description: "Provides patient care, care plans, and health education.",
    majors: ["Nursing", "Health Sciences", "Public Health"],
    entry_roles: ["Staff Nurse", "Clinic Nurse"],
    salary: { low: 62000, med: 86000, high: 125000 },
    college_required: true,
    environment: "indoor",
    social_level: "high",
    math_heavy: false,
    tweaks: { empathy: 8, social: 8, hands_on: 8 }
  },
  {
    name: "Physical Therapist",
    category: "medical",
    description: "Helps patients recover movement and reduce pain.",
    majors: ["Kinesiology", "Exercise Science", "Physical Therapy"],
    entry_roles: ["Physical Therapist Assistant", "Rehab Specialist"],
    salary: { low: 70000, med: 98000, high: 130000 },
    college_required: true,
    environment: "indoor",
    social_level: "high",
    math_heavy: false,
    tweaks: { hands_on: 12, empathy: 10, social: 8 }
  },
  {
    name: "Radiologic Technologist",
    category: "medical",
    description: "Performs diagnostic imaging procedures for patients.",
    majors: ["Radiologic Technology", "Medical Imaging", "Health Sciences"],
    entry_roles: ["X-Ray Technologist", "Imaging Technologist"],
    salary: { low: 55000, med: 76000, high: 102000 },
    college_required: true,
    environment: "indoor",
    social_level: "medium",
    math_heavy: false,
    tweaks: { hands_on: 10, structure: 8, analytical: 6 }
  },
  {
    name: "Medical Laboratory Scientist",
    category: "medical",
    description: "Analyzes samples and lab data to support diagnosis.",
    majors: ["Medical Laboratory Science", "Biology", "Biochemistry"],
    entry_roles: ["Lab Scientist", "Clinical Lab Technologist"],
    salary: { low: 55000, med: 73000, high: 98000 },
    college_required: true,
    environment: "indoor",
    social_level: "low",
    math_heavy: true,
    tweaks: { analytical: 12, math_focus: 8, social: -10 }
  },
  {
    name: "Physician Assistant",
    category: "medical",
    description: "Diagnoses and treats patients in collaboration with physicians.",
    majors: ["Biology", "Health Sciences", "Pre-PA Studies"],
    entry_roles: ["Clinical Assistant", "Patient Care Coordinator"],
    salary: { low: 90000, med: 130000, high: 170000 },
    college_required: true,
    environment: "indoor",
    social_level: "high",
    math_heavy: false,
    tweaks: { leadership: 6, empathy: 8, social: 8 }
  },
  {
    name: "Occupational Therapist",
    category: "medical",
    description: "Supports patients in building daily living skills.",
    majors: ["Occupational Therapy", "Psychology", "Health Sciences"],
    entry_roles: ["OT Assistant", "Rehab Support Specialist"],
    salary: { low: 70000, med: 93000, high: 122000 },
    college_required: true,
    environment: "indoor",
    social_level: "high",
    math_heavy: false,
    tweaks: { empathy: 10, social: 8, creative: 6 }
  },
  {
    name: "Dental Hygienist",
    category: "medical",
    description: "Performs preventive dental care and patient education.",
    majors: ["Dental Hygiene", "Health Sciences", "Biology"],
    entry_roles: ["Dental Hygienist", "Oral Health Technician"],
    salary: { low: 65000, med: 86000, high: 115000 },
    college_required: true,
    environment: "indoor",
    social_level: "high",
    math_heavy: false,
    tweaks: { hands_on: 10, structure: 6, empathy: 8 }
  },
  {
    name: "Public Health Specialist",
    category: "medical",
    description: "Designs programs that improve health outcomes at scale.",
    majors: ["Public Health", "Epidemiology", "Health Policy"],
    entry_roles: ["Community Health Analyst", "Program Coordinator"],
    salary: { low: 55000, med: 80000, high: 120000 },
    college_required: true,
    environment: "mixed",
    social_level: "high",
    math_heavy: true,
    tweaks: { social: 10, analytical: 6, outdoor: 8 }
  },

  {
    name: "Marketing Specialist",
    category: "business",
    description: "Creates campaigns that grow awareness and customer demand.",
    majors: ["Marketing", "Communications", "Business"],
    entry_roles: ["Marketing Coordinator", "Campaign Assistant"],
    salary: { low: 50000, med: 73000, high: 120000 },
    college_required: true,
    environment: "indoor",
    social_level: "high",
    math_heavy: false,
    tweaks: { creative: 10, social: 10, leadership: 4 }
  },
  {
    name: "Financial Analyst",
    category: "business",
    description: "Evaluates financial data to guide strategy and investments.",
    majors: ["Finance", "Economics", "Accounting"],
    entry_roles: ["Junior Financial Analyst", "Budget Analyst"],
    salary: { low: 65000, med: 92000, high: 150000 },
    college_required: true,
    environment: "indoor",
    social_level: "low",
    math_heavy: true,
    tweaks: { analytical: 10, math_focus: 12, social: -10 }
  },
  {
    name: "Sales Representative",
    category: "business",
    description: "Builds relationships and closes deals with customers.",
    majors: ["Business", "Marketing", "Communications"],
    entry_roles: ["Account Executive", "Business Development Rep"],
    salary: { low: 45000, med: 82000, high: 180000 },
    college_required: false,
    environment: "mixed",
    social_level: "high",
    math_heavy: false,
    tweaks: { social: 14, leadership: 8, risk_tolerance: 10 }
  },
  {
    name: "Human Resources Specialist",
    category: "business",
    description: "Supports hiring, employee relations, and team development.",
    majors: ["Human Resources", "Psychology", "Business"],
    entry_roles: ["HR Coordinator", "Talent Operations Specialist"],
    salary: { low: 50000, med: 69000, high: 105000 },
    college_required: true,
    environment: "indoor",
    social_level: "high",
    math_heavy: false,
    tweaks: { empathy: 10, social: 12, structure: 8 }
  },
  {
    name: "Operations Manager",
    category: "business",
    description: "Improves systems, processes, and team performance.",
    majors: ["Business Administration", "Operations Management", "Industrial Engineering"],
    entry_roles: ["Operations Analyst", "Project Coordinator"],
    salary: { low: 70000, med: 98000, high: 150000 },
    college_required: true,
    environment: "indoor",
    social_level: "medium",
    math_heavy: false,
    tweaks: { leadership: 12, structure: 10, analytical: 6 }
  },
  {
    name: "Accountant",
    category: "business",
    description: "Manages financial records, reporting, and compliance.",
    majors: ["Accounting", "Finance", "Business"],
    entry_roles: ["Staff Accountant", "Audit Associate"],
    salary: { low: 55000, med: 78000, high: 125000 },
    college_required: true,
    environment: "indoor",
    social_level: "low",
    math_heavy: true,
    tweaks: { structure: 12, math_focus: 10, social: -10 }
  },
  {
    name: "Supply Chain Analyst",
    category: "business",
    description: "Optimizes sourcing, logistics, and inventory flow.",
    majors: ["Supply Chain", "Operations", "Business Analytics"],
    entry_roles: ["Logistics Analyst", "Procurement Analyst"],
    salary: { low: 60000, med: 83000, high: 125000 },
    college_required: true,
    environment: "mixed",
    social_level: "medium",
    math_heavy: true,
    tweaks: { analytical: 8, structure: 8, outdoor: 6 }
  },
  {
    name: "Entrepreneur",
    category: "business",
    description: "Builds and scales new ventures around unmet needs.",
    majors: ["Business", "Any Major with Entrepreneurship", "Economics"],
    entry_roles: ["Startup Founder", "Venture Associate"],
    salary: { low: 35000, med: 90000, high: 250000 },
    college_required: false,
    environment: "mixed",
    social_level: "high",
    math_heavy: false,
    tweaks: { leadership: 15, risk_tolerance: 20, independence: 12, structure: -10 }
  },

  {
    name: "Electrician",
    category: "trades",
    description: "Installs and repairs electrical systems in buildings.",
    majors: ["Electrical Technology", "Skilled Trades", "Apprenticeship Program"],
    entry_roles: ["Apprentice Electrician", "Electrical Technician"],
    salary: { low: 47000, med: 67000, high: 105000 },
    college_required: false,
    environment: "mixed",
    social_level: "low",
    math_heavy: false,
    tweaks: { hands_on: 8, structure: 6, math_focus: 6 }
  },
  {
    name: "Plumber",
    category: "trades",
    description: "Installs and maintains water and pipe systems.",
    majors: ["Plumbing Technology", "Skilled Trades", "Apprenticeship Program"],
    entry_roles: ["Apprentice Plumber", "Service Plumber"],
    salary: { low: 46000, med: 65000, high: 100000 },
    college_required: false,
    environment: "mixed",
    social_level: "low",
    math_heavy: false,
    tweaks: { hands_on: 10, structure: 6 }
  },
  {
    name: "HVAC Technician",
    category: "trades",
    description: "Services heating, cooling, and ventilation systems.",
    majors: ["HVAC Technology", "Skilled Trades", "Mechanical Systems"],
    entry_roles: ["HVAC Installer", "HVAC Service Technician"],
    salary: { low: 45000, med: 62000, high: 95000 },
    college_required: false,
    environment: "mixed",
    social_level: "low",
    math_heavy: false,
    tweaks: { hands_on: 10, analytical: 6, outdoor: 8 }
  },
  {
    name: "Construction Manager",
    category: "trades",
    description: "Leads teams and timelines for construction projects.",
    majors: ["Construction Management", "Civil Engineering", "Skilled Trades"],
    entry_roles: ["Assistant Site Manager", "Project Coordinator"],
    salary: { low: 65000, med: 104000, high: 160000 },
    college_required: false,
    environment: "outdoor",
    social_level: "high",
    math_heavy: false,
    tweaks: { leadership: 16, social: 8, outdoor: 14, structure: 8 }
  },
  {
    name: "Automotive Technician",
    category: "trades",
    description: "Diagnoses and repairs vehicle systems.",
    majors: ["Automotive Technology", "Skilled Trades", "Diesel Technology"],
    entry_roles: ["Auto Service Technician", "Diagnostic Technician"],
    salary: { low: 40000, med: 57000, high: 90000 },
    college_required: false,
    environment: "indoor",
    social_level: "low",
    math_heavy: false,
    tweaks: { hands_on: 12, analytical: 6, social: -6 }
  },
  {
    name: "Welder Fabricator",
    category: "trades",
    description: "Builds and repairs metal parts and structures.",
    majors: ["Welding", "Manufacturing Technology", "Skilled Trades"],
    entry_roles: ["Welder", "Fabrication Technician"],
    salary: { low: 39000, med: 56000, high: 88000 },
    college_required: false,
    environment: "mixed",
    social_level: "low",
    math_heavy: false,
    tweaks: { hands_on: 12, creative: 8, outdoor: 8, social: -8 }
  },
  {
    name: "Wind Turbine Technician",
    category: "trades",
    description: "Maintains wind energy systems and tower equipment.",
    majors: ["Renewable Energy", "Electrical Technology", "Skilled Trades"],
    entry_roles: ["Wind Tech Apprentice", "Field Service Technician"],
    salary: { low: 50000, med: 65000, high: 98000 },
    college_required: false,
    environment: "outdoor",
    social_level: "low",
    math_heavy: false,
    tweaks: { outdoor: 20, risk_tolerance: 10, hands_on: 10 }
  },
  {
    name: "Solar Installer",
    category: "trades",
    description: "Installs and configures solar power systems.",
    majors: ["Renewable Energy", "Electrical Technology", "Skilled Trades"],
    entry_roles: ["Solar Installer", "Solar Operations Technician"],
    salary: { low: 42000, med: 58000, high: 90000 },
    college_required: false,
    environment: "outdoor",
    social_level: "low",
    math_heavy: false,
    tweaks: { outdoor: 18, hands_on: 10, empathy: 4 }
  },

  {
    name: "Lawyer",
    category: "law",
    description: "Represents clients and advises on legal strategy.",
    majors: ["Political Science", "History", "Pre-Law"],
    entry_roles: ["Legal Assistant", "Law Clerk"],
    salary: { low: 75000, med: 135000, high: 240000 },
    college_required: true,
    environment: "indoor",
    social_level: "high",
    math_heavy: false,
    tweaks: { analytical: 10, leadership: 8, social: 6, structure: 8 }
  },
  {
    name: "Paralegal",
    category: "law",
    description: "Supports legal research, drafting, and case preparation.",
    majors: ["Paralegal Studies", "Criminal Justice", "Legal Studies"],
    entry_roles: ["Paralegal", "Legal Assistant"],
    salary: { low: 45000, med: 62000, high: 94000 },
    college_required: false,
    environment: "indoor",
    social_level: "medium",
    math_heavy: false,
    tweaks: { structure: 10, analytical: 8, social: -4 }
  },
  {
    name: "Compliance Officer",
    category: "law",
    description: "Ensures organizations follow laws and internal policies.",
    majors: ["Business Law", "Finance", "Public Policy"],
    entry_roles: ["Compliance Analyst", "Risk Analyst"],
    salary: { low: 65000, med: 98000, high: 160000 },
    college_required: true,
    environment: "indoor",
    social_level: "medium",
    math_heavy: false,
    tweaks: { structure: 12, analytical: 8, leadership: 4 }
  },
  {
    name: "Policy Analyst",
    category: "law",
    description: "Studies public issues and recommends policy options.",
    majors: ["Public Policy", "Economics", "Political Science"],
    entry_roles: ["Research Analyst", "Legislative Analyst"],
    salary: { low: 60000, med: 88000, high: 135000 },
    college_required: true,
    environment: "indoor",
    social_level: "medium",
    math_heavy: true,
    tweaks: { analytical: 10, empathy: 6, social: 4 }
  },
  {
    name: "Court Reporter",
    category: "law",
    description: "Creates accurate real-time records of legal proceedings.",
    majors: ["Court Reporting", "Legal Studies", "Communications"],
    entry_roles: ["Court Reporter", "Captioning Specialist"],
    salary: { low: 50000, med: 67000, high: 102000 },
    college_required: false,
    environment: "indoor",
    social_level: "low",
    math_heavy: false,
    tweaks: { structure: 12, social: -10, independence: 6 }
  },
  {
    name: "Intelligence Analyst",
    category: "law",
    description: "Analyzes information to support national or local security.",
    majors: ["Criminal Justice", "International Relations", "Data Analytics"],
    entry_roles: ["Threat Analyst", "Investigative Analyst"],
    salary: { low: 60000, med: 89000, high: 140000 },
    college_required: true,
    environment: "mixed",
    social_level: "low",
    math_heavy: true,
    tweaks: { analytical: 12, risk_tolerance: 6, outdoor: 6, social: -8 }
  },

  {
    name: "Graphic Designer",
    category: "creative",
    description: "Creates visual identity and communication assets.",
    majors: ["Graphic Design", "Visual Communication", "Digital Media"],
    entry_roles: ["Junior Designer", "Production Artist"],
    salary: { low: 45000, med: 63000, high: 98000 },
    college_required: false,
    environment: "indoor",
    social_level: "medium",
    math_heavy: false,
    tweaks: { creative: 8, structure: 4 }
  },
  {
    name: "Video Editor",
    category: "creative",
    description: "Edits footage into compelling stories and campaigns.",
    majors: ["Film", "Media Production", "Digital Arts"],
    entry_roles: ["Assistant Editor", "Post-Production Coordinator"],
    salary: { low: 42000, med: 61000, high: 95000 },
    college_required: false,
    environment: "indoor",
    social_level: "low",
    math_heavy: false,
    tweaks: { creative: 8, structure: 6, social: -8 }
  },
  {
    name: "Journalist",
    category: "creative",
    description: "Researches and reports stories for public audiences.",
    majors: ["Journalism", "Communications", "English"],
    entry_roles: ["News Reporter", "Editorial Assistant"],
    salary: { low: 39000, med: 57000, high: 98000 },
    college_required: true,
    environment: "mixed",
    social_level: "high",
    math_heavy: false,
    tweaks: { social: 12, risk_tolerance: 8, outdoor: 10 }
  },
  {
    name: "Content Strategist",
    category: "creative",
    description: "Plans messaging and content systems for brands.",
    majors: ["Marketing", "Communications", "Journalism"],
    entry_roles: ["Content Coordinator", "SEO Content Specialist"],
    salary: { low: 55000, med: 83000, high: 130000 },
    college_required: true,
    environment: "indoor",
    social_level: "medium",
    math_heavy: false,
    tweaks: { creative: 10, analytical: 6, leadership: 4 }
  },
  {
    name: "Animator",
    category: "creative",
    description: "Designs motion and character animation for media.",
    majors: ["Animation", "Digital Arts", "Game Art"],
    entry_roles: ["Junior Animator", "Motion Graphics Artist"],
    salary: { low: 50000, med: 76000, high: 120000 },
    college_required: true,
    environment: "indoor",
    social_level: "low",
    math_heavy: false,
    tweaks: { creative: 10, structure: 6, social: -8 }
  },
  {
    name: "Music Producer",
    category: "creative",
    description: "Produces recordings and guides musical direction.",
    majors: ["Music Production", "Audio Engineering", "Music Business"],
    entry_roles: ["Assistant Producer", "Studio Technician"],
    salary: { low: 35000, med: 65000, high: 140000 },
    college_required: false,
    environment: "indoor",
    social_level: "medium",
    math_heavy: false,
    tweaks: { creative: 12, risk_tolerance: 8, independence: 8 }
  },
  {
    name: "Photographer",
    category: "creative",
    description: "Captures visual stories for editorial, events, or brands.",
    majors: ["Photography", "Visual Arts", "Media"],
    entry_roles: ["Photo Assistant", "Freelance Photographer"],
    salary: { low: 33000, med: 54000, high: 115000 },
    college_required: false,
    environment: "mixed",
    social_level: "medium",
    math_heavy: false,
    tweaks: { creative: 10, outdoor: 8, independence: 10 }
  },
  {
    name: "Interior Designer",
    category: "creative",
    description: "Designs interior spaces for function and aesthetics.",
    majors: ["Interior Design", "Architecture", "Environmental Design"],
    entry_roles: ["Design Assistant", "Junior Interior Designer"],
    salary: { low: 50000, med: 70000, high: 110000 },
    college_required: true,
    environment: "indoor",
    social_level: "high",
    math_heavy: false,
    tweaks: { creative: 10, social: 8, structure: 6 }
  },

  {
    name: "Mechanical Engineer",
    category: "engineering",
    description: "Designs mechanical systems and physical products.",
    majors: ["Mechanical Engineering", "Mechatronics", "Manufacturing"],
    entry_roles: ["Design Engineer", "Test Engineer"],
    salary: { low: 70000, med: 100000, high: 155000 },
    college_required: true,
    environment: "mixed",
    social_level: "low",
    math_heavy: true,
    tweaks: { hands_on: 8, analytical: 6 }
  },
  {
    name: "Civil Engineer",
    category: "engineering",
    description: "Designs infrastructure like roads, bridges, and water systems.",
    majors: ["Civil Engineering", "Construction Engineering", "Environmental Engineering"],
    entry_roles: ["Civil Engineer I", "Field Engineer"],
    salary: { low: 68000, med: 96000, high: 145000 },
    college_required: true,
    environment: "mixed",
    social_level: "medium",
    math_heavy: true,
    tweaks: { outdoor: 12, structure: 8, leadership: 4 }
  },
  {
    name: "Electrical Engineer",
    category: "engineering",
    description: "Builds circuits, control systems, and electrical hardware.",
    majors: ["Electrical Engineering", "Electronics", "Computer Engineering"],
    entry_roles: ["Electrical Engineer I", "Systems Engineer"],
    salary: { low: 76000, med: 108000, high: 165000 },
    college_required: true,
    environment: "indoor",
    social_level: "low",
    math_heavy: true,
    tweaks: { analytical: 8, math_focus: 8, social: -6 }
  },
  {
    name: "Chemical Engineer",
    category: "engineering",
    description: "Designs processes for chemicals, materials, and manufacturing.",
    majors: ["Chemical Engineering", "Chemistry", "Process Engineering"],
    entry_roles: ["Process Engineer", "Quality Engineer"],
    salary: { low: 78000, med: 112000, high: 170000 },
    college_required: true,
    environment: "mixed",
    social_level: "low",
    math_heavy: true,
    tweaks: { analytical: 8, structure: 8, social: -8 }
  },
  {
    name: "Environmental Engineer",
    category: "engineering",
    description: "Develops solutions for environmental and sustainability challenges.",
    majors: ["Environmental Engineering", "Civil Engineering", "Earth Science"],
    entry_roles: ["Environmental Engineer", "Sustainability Analyst"],
    salary: { low: 68000, med: 98000, high: 145000 },
    college_required: true,
    environment: "mixed",
    social_level: "medium",
    math_heavy: true,
    tweaks: { empathy: 8, outdoor: 10, social: 4 }
  },
  {
    name: "Biomedical Engineer",
    category: "engineering",
    description: "Designs medical devices and healthcare technologies.",
    majors: ["Biomedical Engineering", "Electrical Engineering", "Biology"],
    entry_roles: ["Biomedical Engineer I", "Device Testing Engineer"],
    salary: { low: 70000, med: 98000, high: 150000 },
    college_required: true,
    environment: "indoor",
    social_level: "medium",
    math_heavy: true,
    tweaks: { empathy: 8, analytical: 6, hands_on: 6 }
  },
  {
    name: "Industrial Engineer",
    category: "engineering",
    description: "Optimizes systems for cost, efficiency, and quality.",
    majors: ["Industrial Engineering", "Operations", "Systems Engineering"],
    entry_roles: ["Process Improvement Engineer", "Operations Engineer"],
    salary: { low: 70000, med: 98000, high: 148000 },
    college_required: true,
    environment: "indoor",
    social_level: "medium",
    math_heavy: true,
    tweaks: { structure: 10, leadership: 6, social: 4 }
  },
  {
    name: "Aerospace Engineer",
    category: "engineering",
    description: "Designs aircraft, spacecraft, and related systems.",
    majors: ["Aerospace Engineering", "Mechanical Engineering", "Physics"],
    entry_roles: ["Aerospace Engineer I", "Flight Test Engineer"],
    salary: { low: 80000, med: 122000, high: 185000 },
    college_required: true,
    environment: "mixed",
    social_level: "low",
    math_heavy: true,
    tweaks: { analytical: 10, math_focus: 8, risk_tolerance: 6 }
  },

  {
    name: "High School Teacher",
    category: "education",
    description: "Teaches subject content and mentors student growth.",
    majors: ["Education", "Subject Area Major", "Curriculum and Instruction"],
    entry_roles: ["Teacher", "Classroom Instructor"],
    salary: { low: 45000, med: 65000, high: 98000 },
    college_required: true,
    environment: "indoor",
    social_level: "high",
    math_heavy: false,
    tweaks: { empathy: 8, social: 8, leadership: 6 }
  },
  {
    name: "School Counselor",
    category: "education",
    description: "Supports students with academic and personal planning.",
    majors: ["Counseling", "Psychology", "Education"],
    entry_roles: ["Guidance Counselor", "Student Support Specialist"],
    salary: { low: 50000, med: 67000, high: 98000 },
    college_required: true,
    environment: "indoor",
    social_level: "high",
    math_heavy: false,
    tweaks: { empathy: 12, social: 10, analytical: -4 }
  },
  {
    name: "Instructional Designer",
    category: "education",
    description: "Builds effective learning content and training systems.",
    majors: ["Instructional Design", "Education Technology", "Learning Sciences"],
    entry_roles: ["Learning Designer", "Curriculum Developer"],
    salary: { low: 60000, med: 85000, high: 130000 },
    college_required: true,
    environment: "indoor",
    social_level: "medium",
    math_heavy: false,
    tweaks: { creative: 8, structure: 8, analytical: 4 }
  },
  {
    name: "Special Education Teacher",
    category: "education",
    description: "Provides individualized instruction and support plans.",
    majors: ["Special Education", "Education", "Psychology"],
    entry_roles: ["Special Education Teacher", "Inclusion Specialist"],
    salary: { low: 48000, med: 67000, high: 99000 },
    college_required: true,
    environment: "indoor",
    social_level: "high",
    math_heavy: false,
    tweaks: { empathy: 14, structure: 8, social: 8 }
  },
  {
    name: "College Academic Advisor",
    category: "education",
    description: "Guides students through degree and career decisions.",
    majors: ["Education", "Counseling", "Student Affairs"],
    entry_roles: ["Academic Advisor", "Student Success Coach"],
    salary: { low: 45000, med: 62000, high: 93000 },
    college_required: true,
    environment: "indoor",
    social_level: "high",
    math_heavy: false,
    tweaks: { empathy: 10, social: 10, leadership: 4 }
  },
  {
    name: "Corporate Trainer",
    category: "education",
    description: "Designs and delivers learning programs for employees.",
    majors: ["Education", "Human Resources", "Communications"],
    entry_roles: ["Training Specialist", "Learning Facilitator"],
    salary: { low: 55000, med: 76000, high: 120000 },
    college_required: true,
    environment: "indoor",
    social_level: "high",
    math_heavy: false,
    tweaks: { leadership: 8, social: 10, creative: 4 }
  },

  {
    name: "Social Worker",
    category: "public_service",
    description: "Helps individuals and families navigate complex challenges.",
    majors: ["Social Work", "Psychology", "Sociology"],
    entry_roles: ["Case Manager", "Family Support Specialist"],
    salary: { low: 45000, med: 62000, high: 92000 },
    college_required: true,
    environment: "mixed",
    social_level: "high",
    math_heavy: false,
    tweaks: { empathy: 12, social: 10, structure: 6 }
  },
  {
    name: "Police Officer",
    category: "public_service",
    description: "Protects communities and responds to public safety incidents.",
    majors: ["Criminal Justice", "Public Administration", "Any Major"],
    entry_roles: ["Police Officer", "Community Patrol Officer"],
    salary: { low: 50000, med: 76000, high: 120000 },
    college_required: false,
    environment: "outdoor",
    social_level: "high",
    math_heavy: false,
    tweaks: { risk_tolerance: 12, outdoor: 14, leadership: 8, hands_on: 8 }
  },
  {
    name: "Firefighter EMT",
    category: "public_service",
    description: "Responds to emergencies and provides rescue care.",
    majors: ["Emergency Services", "Fire Science", "Paramedicine"],
    entry_roles: ["Firefighter", "EMT"],
    salary: { low: 45000, med: 65000, high: 102000 },
    college_required: false,
    environment: "outdoor",
    social_level: "high",
    math_heavy: false,
    tweaks: { hands_on: 12, risk_tolerance: 10, outdoor: 16, empathy: 8 }
  },
  {
    name: "Urban Planner",
    category: "public_service",
    description: "Shapes land use and city development for communities.",
    majors: ["Urban Planning", "Geography", "Public Policy"],
    entry_roles: ["Planning Assistant", "Zoning Analyst"],
    salary: { low: 58000, med: 81000, high: 128000 },
    college_required: true,
    environment: "mixed",
    social_level: "medium",
    math_heavy: true,
    tweaks: { analytical: 8, empathy: 6, outdoor: 8 }
  },
  {
    name: "Emergency Management Specialist",
    category: "public_service",
    description: "Prepares organizations and communities for disasters.",
    majors: ["Emergency Management", "Public Administration", "Homeland Security"],
    entry_roles: ["Preparedness Coordinator", "Emergency Planner"],
    salary: { low: 55000, med: 82000, high: 125000 },
    college_required: true,
    environment: "mixed",
    social_level: "medium",
    math_heavy: false,
    tweaks: { leadership: 10, structure: 10, risk_tolerance: 8 }
  },
  {
    name: "Nonprofit Program Manager",
    category: "public_service",
    description: "Leads programs that deliver measurable social impact.",
    majors: ["Public Administration", "Nonprofit Management", "Sociology"],
    entry_roles: ["Program Coordinator", "Community Program Manager"],
    salary: { low: 50000, med: 74000, high: 115000 },
    college_required: true,
    environment: "mixed",
    social_level: "high",
    math_heavy: false,
    tweaks: { leadership: 10, empathy: 10, social: 10 }
  },
  {
    name: "Park Ranger",
    category: "public_service",
    description: "Protects natural spaces and educates visitors.",
    majors: ["Environmental Science", "Forestry", "Natural Resource Management"],
    entry_roles: ["Park Ranger", "Conservation Officer"],
    salary: { low: 39000, med: 56000, high: 90000 },
    college_required: false,
    environment: "outdoor",
    social_level: "medium",
    math_heavy: false,
    tweaks: { outdoor: 20, empathy: 8, social: 4, hands_on: 8 }
  },
  {
    name: "Community Health Worker",
    category: "public_service",
    description: "Connects communities to health resources and support.",
    majors: ["Public Health", "Community Health", "Social Work"],
    entry_roles: ["Community Outreach Worker", "Health Navigator"],
    salary: { low: 38000, med: 52000, high: 78000 },
    college_required: false,
    environment: "mixed",
    social_level: "high",
    math_heavy: false,
    tweaks: { empathy: 12, social: 12, outdoor: 6 }
  }
];

const QUESTIONS = [
  {
    id: "q1",
    type: "choice",
    prompt: "Which activity sounds most fun to you?",
    options: [
      { label: "Build an app or robot", effects: { analytical: 15, math_focus: 12, creative: 6 } },
      { label: "Help someone solve a personal problem", effects: { empathy: 18, social: 12 } },
      { label: "Start a small business idea", effects: { leadership: 12, risk_tolerance: 15, independence: 10, social: 8 } },
      { label: "Create art, music, or videos", effects: { creative: 18, independence: 8 } },
      { label: "Fix something mechanical", effects: { hands_on: 18, outdoor: 8, structure: 6 } }
    ]
  },
  {
    id: "q2",
    type: "choice",
    prompt: "In group projects, you usually...",
    options: [
      { label: "Lead and organize the plan", effects: { leadership: 18, structure: 10, social: 8 } },
      { label: "Research and solve hard problems", effects: { analytical: 15, independence: 10, math_focus: 10 } },
      { label: "Keep the team energy high", effects: { social: 15, empathy: 8 } },
      { label: "Build the prototype or final product", effects: { hands_on: 15, creative: 8 } }
    ]
  },
  {
    id: "q3",
    type: "choice",
    prompt: "What work environment feels best?",
    options: [
      { label: "Quiet focus space", effects: { structure: 8, analytical: 8, social: -8, outdoor: -10 } },
      { label: "Busy team environment", effects: { social: 12, leadership: 8 } },
      { label: "Mostly outdoors or in the field", effects: { outdoor: 18, hands_on: 10 } },
      { label: "A healthy mix of both", effects: { independence: 6, social: 4, outdoor: 6 } }
    ]
  },
  {
    id: "q4",
    type: "choice",
    prompt: "Which school subject do you enjoy most?",
    options: [
      { label: "Math or physics", effects: { math_focus: 18, analytical: 15 } },
      { label: "Biology or health science", effects: { empathy: 10, analytical: 8, hands_on: 6 } },
      { label: "English or history", effects: { creative: 8, social: 8, structure: 6 } },
      { label: "Art or media", effects: { creative: 18, independence: 6 } },
      { label: "Business or economics", effects: { leadership: 10, risk_tolerance: 8, math_focus: 8, social: 8 } },
      { label: "Shop or technical lab", effects: { hands_on: 18, analytical: 8, outdoor: 6 } }
    ]
  },
  {
    id: "q5",
    type: "choice",
    prompt: "How much education are you open to after high school?",
    metaKey: "education_preference",
    options: [
      { label: "2 years or less", effects: { hands_on: 6 }, metaValue: "short" },
      { label: "4-year degree", effects: { structure: 6, analytical: 6 }, metaValue: "bachelor" },
      { label: "Graduate or professional school", effects: { structure: 10, analytical: 8, empathy: 4 }, metaValue: "advanced" },
      { label: "Not sure yet", effects: { independence: 4 }, metaValue: "open" }
    ]
  },
  {
    id: "q6",
    type: "slider",
    prompt: "How comfortable are you with risk and uncertainty?",
    lowLabel: "Prefer low risk",
    highLabel: "Comfortable taking risks",
    effects: { risk_tolerance: 1 }
  },
  {
    id: "q7",
    type: "slider",
    prompt: "Do you prefer clear rules or open creativity?",
    lowLabel: "Open creativity",
    highLabel: "Clear structure",
    effects: { structure: 1, creative: -0.8 }
  },
  {
    id: "q8",
    type: "slider",
    prompt: "How much do you want to lead people or projects?",
    lowLabel: "Prefer to contribute",
    highLabel: "Want to lead",
    effects: { leadership: 1, social: 0.4 }
  },
  {
    id: "q9",
    type: "slider",
    prompt: "How much social interaction do you want daily?",
    lowLabel: "Minimal interaction",
    highLabel: "Lots of interaction",
    effects: { social: 1, empathy: 0.4 }
  },
  {
    id: "q10",
    type: "slider",
    prompt: "How much do you enjoy hands-on building and fixing?",
    lowLabel: "Not much",
    highLabel: "A lot",
    effects: { hands_on: 1, outdoor: 0.5 }
  },
  {
    id: "q11",
    type: "slider",
    prompt: "How much do you enjoy hard problem-solving?",
    lowLabel: "Not really",
    highLabel: "Very much",
    effects: { analytical: 1, math_focus: 0.7 }
  },
  {
    id: "q12",
    type: "slider",
    prompt: "How important is helping others directly?",
    lowLabel: "Not a major factor",
    highLabel: "Very important",
    effects: { empathy: 1, social: 0.6 }
  },
  {
    id: "q13",
    type: "slider",
    prompt: "How much autonomy do you want in your work?",
    lowLabel: "Prefer close guidance",
    highLabel: "Prefer independence",
    effects: { independence: 1, risk_tolerance: 0.3 }
  },
  {
    id: "q14",
    type: "slider",
    prompt: "How much do you like predictable routines?",
    lowLabel: "Prefer variety",
    highLabel: "Prefer routine",
    effects: { structure: 1, risk_tolerance: -0.6 }
  },
  {
    id: "q15",
    type: "choice",
    prompt: "When facing uncertainty, you usually...",
    options: [
      { label: "Gather data and plan first", effects: { analytical: 12, structure: 8, risk_tolerance: -6 } },
      { label: "Act quickly and adapt", effects: { risk_tolerance: 12, independence: 8, leadership: 6 } },
      { label: "Ask mentors or teammates", effects: { social: 10, empathy: 8, structure: 4 } },
      { label: "Experiment creatively", effects: { creative: 12, risk_tolerance: 8 } }
    ]
  },
  {
    id: "q16",
    type: "slider",
    prompt: "How much do you enjoy working with numbers and data?",
    lowLabel: "Not much",
    highLabel: "A lot",
    effects: { math_focus: 1, analytical: 0.6 }
  },
  {
    id: "q17",
    type: "choice",
    prompt: "You would rather spend a weekend...",
    options: [
      { label: "Volunteering at a community event", effects: { empathy: 12, social: 10 } },
      { label: "Building a side project", effects: { hands_on: 10, analytical: 8, independence: 8 } },
      { label: "Creating content or art", effects: { creative: 14, independence: 6 } },
      { label: "Doing an outdoor challenge", effects: { outdoor: 14, hands_on: 8, risk_tolerance: 6 } },
      { label: "Planning and running a school event", effects: { leadership: 12, structure: 8, social: 8 } }
    ]
  },
  {
    id: "q18",
    type: "slider",
    prompt: "How comfortable are you with public speaking or persuasion?",
    lowLabel: "Prefer not to",
    highLabel: "Very comfortable",
    effects: { social: 0.7, leadership: 0.8, risk_tolerance: 0.3 }
  },
  {
    id: "q19",
    type: "choice",
    prompt: "What kind of impact do you want most?",
    options: [
      { label: "Invent new technology", effects: { analytical: 12, creative: 8, math_focus: 8 } },
      { label: "Improve health and wellbeing", effects: { empathy: 14, hands_on: 8, analytical: 6 } },
      { label: "Lead teams and business growth", effects: { leadership: 14, risk_tolerance: 8, social: 8 } },
      { label: "Serve community and safety", effects: { empathy: 12, leadership: 8, outdoor: 8, hands_on: 8 } },
      { label: "Design stories and experiences", effects: { creative: 14, social: 6 } }
    ]
  },
  {
    id: "q20",
    type: "slider",
    prompt: "How much physical activity do you want in your day-to-day work?",
    lowLabel: "Mostly desk-based",
    highLabel: "Mostly active",
    effects: { outdoor: 1, hands_on: 0.6 }
  },
  {
    id: "q21",
    type: "choice",
    prompt: "Deadline pressure feels...",
    options: [
      { label: "Motivating", effects: { risk_tolerance: 10, leadership: 6 } },
      { label: "Manageable with a plan", effects: { structure: 10, analytical: 6 } },
      { label: "Stressful without support", effects: { social: 8, empathy: 6, risk_tolerance: -6 } }
    ]
  },
  {
    id: "q22",
    type: "slider",
    prompt: "How important is rapid career growth and responsibility?",
    lowLabel: "Steady pace is fine",
    highLabel: "I want fast growth",
    effects: { leadership: 1, independence: 0.5, structure: 0.2 }
  }
];

const state = {
  pyodide: null,
  scoreFn: null,
  pyodideReady: false,
  currentQuestionIndex: 0,
  responses: {},
  meta: {},
  traitProfile: null,
  rankedResults: [],
  displayedResults: []
};

const elements = {
  engineStatus: document.getElementById("engineStatus"),
  startBtn: document.getElementById("startBtn"),
  prevBtn: document.getElementById("prevBtn"),
  nextBtn: document.getElementById("nextBtn"),
  progressText: document.getElementById("progressText"),
  progressFill: document.getElementById("progressFill"),
  questionContainer: document.getElementById("questionContainer"),
  resultsSummary: document.getElementById("resultsSummary"),
  resultsList: document.getElementById("resultsList"),
  retakeBtn: document.getElementById("retakeBtn"),
  downloadBtn: document.getElementById("downloadBtn"),
  shareBtn: document.getElementById("shareBtn"),
  collegeFilter: document.getElementById("collegeFilter"),
  environmentFilter: document.getElementById("environmentFilter"),
  socialFilter: document.getElementById("socialFilter"),
  mathFilter: document.getElementById("mathFilter"),
  earningToggle: document.getElementById("earningToggle"),
  loadingOverlay: document.getElementById("loadingOverlay"),
  loadingText: document.getElementById("loadingText"),
  toast: document.getElementById("toast"),
  screens: {
    landing: document.getElementById("landingScreen"),
    quiz: document.getElementById("quizScreen"),
    results: document.getElementById("resultsScreen")
  }
};

const CAREERS = buildCareers();

init();

function init() {
  bindEvents();
  setScreen("landing");
  renderQuestion();
  initPyodideEngine();
}

function bindEvents() {
  elements.startBtn.addEventListener("click", startQuiz);
  elements.prevBtn.addEventListener("click", goToPreviousQuestion);
  elements.nextBtn.addEventListener("click", goToNextQuestion);
  elements.retakeBtn.addEventListener("click", retakeQuiz);
  elements.downloadBtn.addEventListener("click", downloadResults);
  elements.shareBtn.addEventListener("click", shareLink);

  const filterElements = [
    elements.collegeFilter,
    elements.environmentFilter,
    elements.socialFilter,
    elements.mathFilter,
    elements.earningToggle
  ];

  filterElements.forEach((el) => {
    el.addEventListener("change", applyFiltersAndRender);
  });
}

async function initPyodideEngine() {
  setLoading(true, "Initializing Pyodide model...");

  try {
    state.pyodide = await loadPyodide({
      indexURL: "https://cdn.jsdelivr.net/pyodide/v0.27.2/full/"
    });

    const response = await fetch("model.py");
    if (!response.ok) {
      throw new Error(`Could not load model.py (${response.status})`);
    }

    const pythonCode = await response.text();
    await state.pyodide.runPythonAsync(pythonCode);

    state.scoreFn = state.pyodide.globals.get("score_json");
    state.pyodideReady = true;

    elements.engineStatus.textContent = "Career model ready";
    elements.startBtn.disabled = false;
    elements.startBtn.textContent = "Start";

    setLoading(false);
  } catch (error) {
    console.error(error);
    elements.engineStatus.textContent = "Model failed to load. Refresh and try again.";
    elements.startBtn.disabled = true;
    elements.startBtn.textContent = "Unavailable";
    setLoading(false);
    showToast("Failed to load Pyodide. Check your internet connection.");
  }
}

function setScreen(screen) {
  Object.entries(elements.screens).forEach(([name, node]) => {
    if (name === screen) {
      node.classList.add("active");
    } else {
      node.classList.remove("active");
    }
  });
}

function setLoading(isLoading, message = "Loading...") {
  elements.loadingText.textContent = message;
  elements.loadingOverlay.classList.toggle("active", isLoading);
}

function startQuiz() {
  if (!state.pyodideReady) {
    showToast("Model is still loading.");
    return;
  }
  state.currentQuestionIndex = 0;
  setScreen("quiz");
  renderQuestion();
}

function goToPreviousQuestion() {
  if (state.currentQuestionIndex > 0) {
    state.currentQuestionIndex -= 1;
    renderQuestion();
  }
}

async function goToNextQuestion() {
  const question = QUESTIONS[state.currentQuestionIndex];
  const answered = state.responses[question.id] !== undefined;

  if (!answered) {
    showToast("Please answer the question before continuing.");
    return;
  }

  if (state.currentQuestionIndex === QUESTIONS.length - 1) {
    await finishQuiz();
    return;
  }

  state.currentQuestionIndex += 1;
  renderQuestion();
}

function renderQuestion() {
  const question = QUESTIONS[state.currentQuestionIndex];

  elements.progressText.textContent = `Question ${state.currentQuestionIndex + 1} of ${QUESTIONS.length}`;
  elements.progressFill.style.width = `${((state.currentQuestionIndex + 1) / QUESTIONS.length) * 100}%`;

  let html = `<div class="question-shell"><h2 class="question-title">${question.prompt}</h2>`;

  if (question.type === "choice") {
    html += `<div class="option-list">`;

    question.options.forEach((option, idx) => {
      const selected = state.responses[question.id] === idx ? "selected" : "";
      html += `
        <button class="option-btn ${selected}" data-option-index="${idx}" type="button">
          ${option.label}
        </button>
      `;
    });

    html += `</div>`;
  }

  if (question.type === "slider") {
    const currentValue = state.responses[question.id] !== undefined ? state.responses[question.id] : 3;
    const isAnswered = state.responses[question.id] !== undefined;

    html += `
      <div class="slider-wrap">
        <p class="slider-value">Current value: <strong>${currentValue}</strong>/5 ${
          isAnswered ? "" : "(move slider to answer)"
        }</p>
        <input
          class="slider"
          id="questionSlider"
          type="range"
          min="1"
          max="5"
          step="1"
          value="${currentValue}"
        />
        <div class="slider-legend">
          <span>${question.lowLabel}</span>
          <span>${question.highLabel}</span>
        </div>
      </div>
    `;
  }

  html += `</div>`;
  elements.questionContainer.innerHTML = html;

  if (question.type === "choice") {
    const optionButtons = elements.questionContainer.querySelectorAll(".option-btn");
    optionButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const optionIndex = Number(button.dataset.optionIndex);
        state.responses[question.id] = optionIndex;

        if (question.metaKey) {
          const selectedOption = question.options[optionIndex];
          state.meta[question.metaKey] = selectedOption.metaValue;
        }

        renderQuestion();
      });
    });
  }

  if (question.type === "slider") {
    const slider = document.getElementById("questionSlider");
    const valueEl = elements.questionContainer.querySelector(".slider-value strong");

    slider.addEventListener("input", (event) => {
      const value = Number(event.target.value);
      valueEl.textContent = String(value);
      state.responses[question.id] = value;
      updateQuizActionButtons();
    });
  }

  updateQuizActionButtons();
}

function updateQuizActionButtons() {
  const question = QUESTIONS[state.currentQuestionIndex];
  const isAnswered = state.responses[question.id] !== undefined;

  elements.prevBtn.disabled = state.currentQuestionIndex === 0;
  elements.nextBtn.disabled = !isAnswered;
  elements.nextBtn.textContent =
    state.currentQuestionIndex === QUESTIONS.length - 1 ? "See Results" : "Next";
}

async function finishQuiz() {
  const unanswered = QUESTIONS.find((q) => state.responses[q.id] === undefined);
  if (unanswered) {
    showToast("You still have unanswered questions.");
    return;
  }

  setLoading(true, "Scoring your best matches...");

  try {
    state.traitProfile = buildTraitProfile();
    state.rankedResults = await runPythonScoring(state.traitProfile, CAREERS);
    setScreen("results");
    applyFiltersAndRender();
  } catch (error) {
    console.error(error);
    showToast("Scoring failed. Please retake the quiz.");
  } finally {
    setLoading(false);
  }
}

function buildTraitProfile() {
  const profile = {};
  TRAITS.forEach((trait) => {
    profile[trait] = 50;
  });

  QUESTIONS.forEach((question) => {
    const response = state.responses[question.id];
    if (response === undefined) {
      return;
    }

    if (question.type === "choice") {
      const selected = question.options[response];
      applyEffects(profile, selected.effects, 1);
      return;
    }

    if (question.type === "slider") {
      const centered = Number(response) - 3;
      const sliderScale = 11;
      applyEffects(profile, question.effects, centered * sliderScale);
    }
  });

  TRAITS.forEach((trait) => {
    profile[trait] = Math.round(clamp(profile[trait], 0, 100));
  });

  return profile;
}

function applyEffects(profile, effects, factor) {
  Object.entries(effects || {}).forEach(([trait, weight]) => {
    if (!Object.prototype.hasOwnProperty.call(profile, trait)) {
      return;
    }
    profile[trait] = clamp(profile[trait] + weight * factor, 0, 100);
  });
}

async function runPythonScoring(answers, careers) {
  if (!state.scoreFn) {
    throw new Error("Python score function is not loaded.");
  }

  const output = state.scoreFn(JSON.stringify(answers), JSON.stringify(careers));
  const resultJson = typeof output === "string" ? output : output.toString();

  if (output && typeof output.destroy === "function") {
    output.destroy();
  }

  return JSON.parse(resultJson);
}

function applyFiltersAndRender() {
  if (!state.rankedResults.length) {
    return;
  }

  let filtered = [...state.rankedResults];

  const collegeFilter = elements.collegeFilter.value;
  const environmentFilter = elements.environmentFilter.value;
  const socialFilter = elements.socialFilter.value;
  const mathFilter = elements.mathFilter.value;
  const earningFirst = elements.earningToggle.checked;

  if (collegeFilter === "required") {
    filtered = filtered.filter((career) => career.college_required === true);
  }

  if (collegeFilter === "not_required") {
    filtered = filtered.filter((career) => career.college_required === false);
  }

  if (environmentFilter === "indoor") {
    filtered = filtered.filter((career) => career.environment === "indoor" || career.environment === "mixed");
  }

  if (environmentFilter === "outdoor") {
    filtered = filtered.filter((career) => career.environment === "outdoor" || career.environment === "mixed");
  }

  if (socialFilter === "high") {
    filtered = filtered.filter((career) => career.social_level === "high");
  }

  if (socialFilter === "low") {
    filtered = filtered.filter((career) => career.social_level === "low");
  }

  if (mathFilter === "math_heavy") {
    filtered = filtered.filter((career) => career.math_heavy === true);
  }

  if (mathFilter === "not_math_heavy") {
    filtered = filtered.filter((career) => career.math_heavy === false);
  }

  if (earningFirst) {
    filtered.sort((a, b) => {
      return (
        (b.salary?.high || 0) - (a.salary?.high || 0) ||
        (b.salary?.med || 0) - (a.salary?.med || 0) ||
        (b.fit_score || 0) - (a.fit_score || 0)
      );
    });
  } else {
    filtered.sort((a, b) => {
      return (
        (b.fit_score || 0) - (a.fit_score || 0) ||
        (b.salary?.med || 0) - (a.salary?.med || 0)
      );
    });
  }

  state.displayedResults = filtered.slice(0, 10);
  renderResults();
}

function renderResults() {
  const topTraits = getTopTraits(state.traitProfile, 3)
    .map((trait) => TRAIT_LABELS[trait])
    .join(", ");

  elements.resultsSummary.textContent = `Based on your answers, your strongest signals are: ${topTraits}. Showing top ${state.displayedResults.length} matches.`;

  if (!state.displayedResults.length) {
    elements.resultsList.innerHTML = `
      <div class="empty-state">
        No careers match your filter combination. Try relaxing one filter.
      </div>
    `;
    return;
  }

  const cards = state.displayedResults
    .map((career, idx) => {
      const nextSteps = career.next_steps || {
        course: "Take an intro course in this field",
        project: "Build a starter project",
        club: "Join a related club or volunteer experience"
      };

      return `
      <article class="result-card">
        <div class="result-top">
          <div>
            <span class="rank-badge">#${idx + 1} match</span>
            <h3>${career.name}</h3>
          </div>
          <span class="fit-score">Fit score: ${Math.round(career.fit_score)}/100</span>
        </div>

        <div class="tag-row">
          <span class="tag">${titleCase(career.category.replace("_", " "))}</span>
          <span class="tag">${career.college_required ? "College required" : "No college required"}</span>
          <span class="tag">${titleCase(career.environment)} environment</span>
          <span class="tag">${titleCase(career.social_level)} social</span>
          <span class="tag">${career.math_heavy ? "Math-heavy" : "Not math-heavy"}</span>
        </div>

        <div class="result-meta">
          <div><strong>Description:</strong> ${career.description}</div>
          <div><strong>Typical majors:</strong> ${career.majors.join(", ")}</div>
          <div><strong>Example entry-level roles:</strong> ${career.entry_roles.join(", ")}</div>
          <div><strong>Salary range bands:</strong> Low ${formatMoney(career.salary.low)} | Med ${formatMoney(career.salary.med)} | High ${formatMoney(career.salary.high)}</div>
          <div><strong>Why you matched:</strong> ${career.why_matched}</div>
        </div>

        <div class="next-steps">
          <p>Next steps</p>
          <ul>
            <li><strong>Try this course:</strong> ${nextSteps.course}</li>
            <li><strong>Try this project:</strong> ${nextSteps.project}</li>
            <li><strong>Try this club/experience:</strong> ${nextSteps.club}</li>
          </ul>
        </div>
      </article>
    `;
    })
    .join("");

  elements.resultsList.innerHTML = cards;
}

function getTopTraits(profile, count) {
  if (!profile) {
    return [];
  }

  return [...TRAITS]
    .sort((a, b) => (profile[b] || 0) - (profile[a] || 0))
    .slice(0, count);
}

function downloadResults() {
  if (!state.rankedResults.length) {
    showToast("No results to download yet.");
    return;
  }

  const payload = {
    created_at: new Date().toISOString(),
    trait_profile: state.traitProfile,
    filters: {
      college: elements.collegeFilter.value,
      environment: elements.environmentFilter.value,
      social: elements.socialFilter.value,
      math: elements.mathFilter.value,
      highest_earning_first: elements.earningToggle.checked
    },
    top_results: state.displayedResults
  };

  const blob = new Blob([JSON.stringify(payload, null, 2)], {
    type: "application/json"
  });

  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = "career-fit-results.json";
  document.body.appendChild(anchor);
  anchor.click();
  anchor.remove();
  URL.revokeObjectURL(url);

  showToast("Results downloaded as JSON.");
}

async function shareLink() {
  const link = `${window.location.origin}${window.location.pathname}`;

  try {
    await navigator.clipboard.writeText(link);
    showToast("Share link copied to clipboard.");
  } catch (_error) {
    const temp = document.createElement("textarea");
    temp.value = link;
    temp.setAttribute("readonly", "");
    temp.style.position = "absolute";
    temp.style.left = "-9999px";
    document.body.appendChild(temp);
    temp.select();
    document.execCommand("copy");
    temp.remove();
    showToast("Share link copied.");
  }
}

function retakeQuiz() {
  state.currentQuestionIndex = 0;
  state.responses = {};
  state.meta = {};
  state.traitProfile = null;
  state.rankedResults = [];
  state.displayedResults = [];

  elements.collegeFilter.value = "all";
  elements.environmentFilter.value = "all";
  elements.socialFilter.value = "all";
  elements.mathFilter.value = "all";
  elements.earningToggle.checked = false;

  setScreen("landing");
  renderQuestion();
}

function showToast(message) {
  elements.toast.textContent = message;
  elements.toast.classList.add("show");

  setTimeout(() => {
    elements.toast.classList.remove("show");
  }, 1800);
}

function buildCareers() {
  return CAREER_DEFINITIONS.map((career, idx) => {
    const base = CATEGORY_WEIGHT_TEMPLATES[career.category] || {};
    const tweaks = career.tweaks || {};
    const weights = {};

    TRAITS.forEach((trait) => {
      weights[trait] = clamp((base[trait] || 50) + (tweaks[trait] || 0), 0, 100);
    });

    const nextSteps = career.next_steps || CATEGORY_NEXT_STEPS[career.category];

    return {
      ...career,
      id: `career-${idx + 1}`,
      weights,
      next_steps: {
        course: nextSteps.course,
        project: nextSteps.project,
        club: nextSteps.club
      }
    };
  });
}

function formatMoney(value) {
  return Number(value).toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0
  });
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function titleCase(text) {
  return text
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
