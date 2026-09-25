// Main website content.
//
// To show or hide an entire page, change its `visible` value in `sections`.
// To hide one research item or project, change that item's `visible` value.
// To enable or disable its dedicated page, change its `detailPage` value.

export const profile = {
  name: 'Angad Singh Kochhar',
  shortName: 'Angad Kochhar',
  role: 'M.S. in Engineering, Robotics · Purdue University',
  location: 'West Lafayette, Indiana',
  about: [
    'I am a graduate student in Robotics at Purdue University, currently pursuing an M.S.E. with interests in reinforcement learning, multi-agent systems, embodied intelligence, robot learning, and autonomous systems.',
    `My background started in Mechanical & Automation Engineering, followed by more than four years of professional experience as an Assistant Mechanical Engineer and field engineer. I later moved into robotics, artificial intelligence, and autonomous systems through my graduate studies at Purdue.`,
    `I am currently a student researcher in Purdue's SCALE Robotics Lab, where I am working on a multi-agent reinforcement learning project inspired by research on emergent tool use. My work focuses on developing physics-based environments in MuJoCo and studying how simple rewards and learning algorithms can lead to complex agent behaviors.`,
    `I am especially interested in understanding how intelligent agents learn, interact with their environments, coordinate with other agents, and develop complex behaviors from simple objectives.`,
  ],
  portrait: '/media/Angad.jpg',
  email: 'kochhar.angad@gmail.com',
  github: 'https://github.com/AngadQ',
  linkedin: 'https://www.linkedin.com/in/angad-singh-kochhar/',
  resume: '/documents/Angad_Kochhar_Resume.pdf',
  cv: '/documents/Angad_Kochhar_CV.pdf',
};

export const sections = [
  { slug: 'education', label: 'Education', visible: true },
  { slug: 'experience', label: 'Experience', visible: true },
  { slug: 'research', label: 'Research', visible: true },
  { slug: 'projects', label: 'Projects', visible: true },
  { slug: 'activities', label: 'Activities', visible: false },
];

export const news = [
  {
    date: 'May 2026',
    text: 'Began research on emergent tool use in multi-agent reinforcement learning at the SCALE Robotics Lab.',
  },
  {
    date: 'Summer 2026',
    text: 'Developed and tested an autonomous Connect-4 demonstration with Boston Dynamics Spot.',
  },
  {
    date: 'Dec 2026',
    text: 'Expected graduation from the M.S. in Engineering program at Purdue University.',
  },
];

export const skills = [
  { category: 'Programming', items: 'Python, C/C++, MATLAB, Lua' },
  { category: 'Robotics & Simulation', items: 'MuJoCo, ROS 2, CoppeliaSim, Boston Dynamics Spot, UR5e' },
  { category: 'Machine Learning', items: 'PyTorch, YOLO, Random Forest, reinforcement learning' },
  { category: 'Embedded Systems', items: 'ESP32, Raspberry Pi, UWB, IMU, Arduino' },
];

export const education = [
  {
    degree: 'Master of Science in Engineering, Robotics / Interdisciplinary Engineering',
    institution: 'Purdue University · West Lafayette, Indiana',
    dates: 'Jan 2025 – expected Dec 2026',
    details: [
      'GPA: 3.84 / 4.00',
      'Selected coursework: Reinforcement Learning, Multi-Agent Autonomy & Control, Artificial Intelligence, Robotics Kinematics & Dynamics, Linear Algebra, Mechatronics, Embedded Systems, and Industrial IoT for Smart Manufacturing.',
    ],
  },
  {
    degree: 'Bachelor of Technology, Mechanical & Automation Engineering',
    institution: 'Guru Gobind Singh Indraprastha University · New Delhi, India',
    dates: 'Aug 2016 – Sep 2020',
    details: ['Graduated with 84.3%.'],
  },
];

export const experience = [
  {
    role: 'Assistant Mechanical Engineer',
    organization: 'Static Systems Electronics Pvt. Ltd. · Gurgaon, India',
    dates: 'Sep 2020 – Dec 2024',
    details: [
      'Supported the fabrication, fit, and installation of customized physical security equipment for government and private sector clients.',
      'Served as a field engineer, guiding installation teams and troubleshooting mechanical and installation issues.',
      'Coordinated with customers on equipment operation, installation requirements, and safe use.',
      'Supported NEMTEK electric fencing deployments after receiving manufacturer product training.',
    ],
  },
];

export type MediaImage = {
  src: string;
  alt: string;
  caption?: string;
};

export type WorkLink = {
  label: string;
  href: string;
};

export type ResearchItem = {
  slug: string;
  visible: boolean;
  featured: boolean;
  detailPage: boolean;
  title: string;
  organization: string;
  dates: string;
  summary: string;
  thumbnail?: MediaImage;
  images?: MediaImage[];
  links?: WorkLink[];
  videoFile?: string;
  videoEmbedUrl?: string;
  details?: string[];
  highlights?: string[];
};

export const research: ResearchItem[] = [
  {
    slug: 'emergent-tool-use',
    visible: true,
    featured: true,
    detailPage: true,
    title: 'Predicting Emergent Strategies in multi-Agent Reinforcement learning',
    organization: 'SCALE Robotics Lab, Purdue University · Advisor: Prof. Rohan R. Paleja',
    dates: 'May 2026 – present',
    summary:
      'An ongoing study of emergent behavior in physics-based MuJoCo environments using simple rewards and reinforcement learning policies.',
    details: [
      'I am developing a configurable MuJoCo environment containing agents, physical objects, and interactive tools. The goal is to study how increasingly complex environments influence learned strategies and emergent interactions.',
      'The project is building toward experiments with Proximal Policy Optimization and systematic evaluation of the behaviors that agents discover.',
    ],
    highlights: [
      'Physics-based multi-agent environment design in MuJoCo',
      'Simple reward structures and PPO policies',
      'Analysis of emergent strategies and object interaction',
    ],
  },
  {
    slug: 'spot-connect-four',
    visible: true,
    featured: true,
    detailPage: true,
    title: 'Autonomous Connect-4 with Boston Dynamics Spot',
    organization: 'SCALE Robotics Lab, Purdue University · Project lead: Daniel Chen',
    dates: 'May – Jul 2026',
    summary:
      'A human–robot Connect-4 demonstration integrating perception, localization, game strategy, manipulation, and automatic failure recovery.',
    details: [
      'I integrated YOLO board perception, AprilTag localization, and a minimax game strategy, then translated the selected move into a manipulation target for Spot.',
      'I designed checks for chip pickup, placement, and turn detection. When a manipulation attempt failed, the system could detect the problem and retry instead of continuing with an incorrect board state.',
    ],
    highlights: [
      'More than 90% chip detection success across 100+ tests',
      'More than 85% successful chip placement across 100+ tests',
      'Visual confirmation of both human and robot moves',
    ],
  },
  {
    slug: 'spacecraft-coordination',
    visible: true,
    featured: true,
    detailPage: false,
    title: 'Spacecraft Autonomy and Multi-Agent Coordination',
    organization: 'Purdue University · Supervisor: Prof. Kenshiro Oguri',
    dates: 'Aug – Nov 2025',
    summary:
      'A MATLAB simulation of spacecraft formation flying using Clohessy–Wiltshire relative-motion equations, J2 perturbations, and exploratory PID control.',
  },
];

export type ProjectItem = {
  slug: string;
  visible: boolean;
  featured: boolean;
  detailPage: boolean;
  title: string;
  dates: string;
  context: string;
  summary: string;
  tools: string[];
  thumbnail?: MediaImage;
  images?: MediaImage[];
  links?: WorkLink[];
  videoFile?: string;
  videoEmbedUrl?: string;
  details?: string[];
  highlights?: string[];
};

export const projects: ProjectItem[] = [
  {
    slug: 'opinion-dynamics',
    visible: true,
    featured: true,
    detailPage: false,
    title: 'Impact of Stubborn Truth Agents on Convergence in Opinion Dynamics under Random Edge Failures',
    dates: 'Spring 2026',
    context: 'AAE 59000 · Multi-Agent Autonomy & Control',
    summary:
      'Investigated truth propagation in distributed multi-agent networks using opinion-dynamics models with stubborn truth agents, random communication failures, and varying network connectivity.',
    tools: ['Python', 'MATLAB', 'Multi-agent systems'],
  },
  {
    slug: 'indoor-positioning',
    visible: true,
    featured: false,
    detailPage: false,
    title: 'Low-Cost Indoor Positioning Using Combined Inertial Navigation and Wireless Positioning',
    dates: 'Spring 2026',
    context: 'ECE 56800 · Embedded Systems',
    summary:
      'Developed the UWB subsystem for a positioning prototype combining wireless ranging with inertial sensing.',
    tools: ['C++', 'UWB', 'IMU', 'Embedded systems'],
  },
  {
    slug: 'ded-acoustic-monitoring',
    visible: true,
    featured: false,
    detailPage: false,
    title: 'DED Machine Monitoring Using Acoustic Machine Learning',
    dates: 'Spring 2026',
    context: 'ME 59700 · Industrial IoT for Smart Manufacturing',
    summary:
      'Led a team investigating abnormal acoustic signals from a directed energy deposition machine using isolated tests and machine learning.',
    tools: ['Python', 'Random Forest', 'Acoustic sensing'],
  },
  {
    slug: 'modified-nafnet',
    visible: true,
    featured: true,
    detailPage: true,
    title: 'ModifiedNAFNet: Lightweight Image Restoration',
    dates: 'Spring 2025',
    context: 'ECE 57000 · Artificial Intelligence',
    summary:
      'Reimplemented and simplified NAFNet for limited compute, reaching 33.66 dB PSNR and 0.9400 SSIM on the SIDD dataset.',
    tools: ['Python', 'PyTorch', 'Computer vision'],
    details: [
      'I studied the original NAFNet paper and implementation, then reduced the model width, stages, and block complexity so that the architecture could train in a limited Google Colab environment.',
      'The project included an ICML-style paper, peer review exercise, and class presentation. It taught me how to read research papers in layers and translate an architecture from a paper into a working experiment.',
    ],
    highlights: [
      '33.66 dB PSNR and 0.9400 SSIM on SIDD',
      'Approximately two hours of training',
      'Designed for accessible experiments with limited compute',
    ],
  },
  {
    slug: 'gladiator-e-cove',
    visible: true,
    featured: true,
    detailPage: true,
    title: 'Gladiator E-Cove: Battle for Logistics',
    dates: 'Spring 2025',
    context: 'ME 58800 · Mechatronics',
    summary:
      'Designed a dual-flywheel launcher and IR sensing system for an autonomous two-robot logistics challenge.',
    tools: ['ESP32', 'C', 'CAD', 'Mechatronics'],
    details: [
      'I designed the flywheel using projectile motion and energy calculations, built and refined the IR sensing circuit, and contributed to the finite state machine and ESP32 communication between the robots.',
      'To overcome motor stall at low speed, the software first started each motor above its minimum start speed and then reduced it to the calibrated speed for the selected target.',
    ],
    highlights: [
      'About 85% delivery accuracy across more than 100 shots',
      'IR sensing range exceeded the minimum course requirement',
      'Highest score in the final competition',
    ],
  },
  {
    slug: 'restaurant-simulation',
    visible: true,
    featured: false,
    detailPage: false,
    title: 'Restaurant of the Future Simulation',
    dates: 'Spring 2025',
    context: 'IE 574 · Industrial Robotics & Flexible Assembly',
    summary:
      'Designed a detailed automated restaurant in CoppeliaSim with UR5e robot arms and a mobile robot.',
    tools: ['CoppeliaSim', 'Lua', 'UR5e', 'Node-RED'],
  },
];

export const activities = [
  {
    title: 'Platoon Commander',
    organization: 'Amity Greenhorns military camp',
    dates: 'Summer 2019',
    summary:
      'Selected to lead a platoon during undergraduate military training. Our platoon won the final-day parade competition.',
    images: [] as MediaImage[],
  },
  {
    title: 'Bhangra',
    organization: 'Personal interest',
    dates: 'Since 2022',
    summary: 'I practice Bhangra, a traditional Punjabi folk dance.',
    images: [] as MediaImage[],
  },
];
