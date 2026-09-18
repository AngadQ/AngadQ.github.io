// Edit this file to update the public content of your portfolio.
// Set visible to false to omit a section from the next production build.

export const profile = {
  name: 'Angad Singh Kochhar',
  role: 'M.S. in Engineering, Robotics · Purdue University',
  location: 'West Lafayette, Indiana',
  about:
    'I am a robotics graduate student at Purdue University interested in reinforcement learning, embodied intelligence, and autonomous systems. My work spans robot perception, multi-agent systems, and hands-on engineering.',
  portrait: '', // Example: '/media/portrait.jpg'
  email: 'kochhar.angad@gmail.com',
  github: 'https://github.com/AngadQ',
  linkedin: 'https://www.linkedin.com/in/angad-singh-kochhar/',
  resume: '/documents/resume.pdf',
  cv: '/documents/cv.pdf',
};

export const sections = [
  { slug: 'education', label: 'Education', visible: true },
  { slug: 'experience', label: 'Work Experience', visible: true },
  { slug: 'research', label: 'Research', visible: true },
  { slug: 'projects', label: 'Projects', visible: true },
  { slug: 'activities', label: 'Extracurriculars', visible: true },
];

export const skills = [
  { category: 'Programming', items: 'Python, C/C++, MATLAB, Lua' },
  { category: 'Robotics', items: 'MuJoCo, ROS 2, CoppeliaSim, Boston Dynamics Spot, UR5e' },
  { category: 'Machine learning', items: 'PyTorch, scikit-learn, YOLO, PPO' },
  { category: 'Hardware', items: 'ESP32, Raspberry Pi, UWB, IMU, Arduino' },
];

export const education: {
  degree: string;
  institution: string;
  dates: string;
  details: string[];
}[] = [
  {
    degree: 'Master of Science in Engineering, Robotics / Interdisciplinary Engineering',
    institution: 'Purdue University · West Lafayette, Indiana',
    dates: 'Jan 2025 – expected Dec 2026',
    details: [
      'GPA: 3.84 / 4.00',
      'Selected coursework: Reinforcement Learning, Multi-Agent Autonomy & Control, Artificial Intelligence, Robotics Kinematics & Dynamics, Mechatronics, and Embedded Systems.',
    ],
  },
  {
    degree: 'Bachelor of Technology, Mechanical & Automation Engineering',
    institution: 'Guru Gobind Singh Indraprastha University · New Delhi, India',
    dates: 'Aug 2016 – Sep 2020',
    details: ['Graduated with 84.3%.'],
  },
];

export const experience: {
  role: string;
  organization: string;
  dates: string;
  details: string[];
}[] = [
  {
    role: 'Assistant Mechanical Engineer',
    organization: 'Static Systems Electronics Pvt. Ltd. · Gurgaon, India',
    dates: 'Sep 2020 – Dec 2024',
    details: [
      'Supported the fit, finish, and mechanical integration of customized physical security equipment for government and private clients.',
      'Guided installation teams at customer sites and resolved mechanical and installation issues during deployment.',
      'Worked directly with customers on installation requirements, equipment operation, and safe use.',
      'Supported electric fencing deployments using NEMTEK equipment after manufacturer training.',
    ],
  },
];

export const research: {
  title: string;
  organization: string;
  dates: string;
  summary: string;
  link?: string;
}[] = [
  {
    title: 'Emergent tool use in multi-agent reinforcement learning',
    organization: 'SCALE Robotics Lab, Purdue University · Advisor: Prof. Rohan R. Paleja',
    dates: 'May 2026 – present',
    summary:
      'Leading an ongoing study of emergent behavior in physics-based MuJoCo environments. I am developing the environment and building experiments with simple rewards and reinforcement learning policies to observe how agents use objects and tools.',
  },
  {
    title: 'Autonomous Connect-4 with Boston Dynamics Spot',
    organization: 'SCALE Robotics Lab, Purdue University · Project lead: Daniel Chen',
    dates: 'May – Jul 2026',
    summary:
      'Developed and tested a human–robot Connect-4 demo. I integrated YOLO board perception, AprilTag localization, and a minimax game strategy, then built recovery checks for chip pickup, placement, and turn detection. Testing showed over 90% chip detection and over 85% successful placement across more than 100 attempts.',
  },
  {
    title: 'Spacecraft autonomy and multi-agent coordination',
    organization: 'Purdue University · Supervisor: Prof. Kenshiro Oguri',
    dates: 'Aug – Nov 2025',
    summary:
      'Built a MATLAB simulation of spacecraft formation flying using Clohessy–Wiltshire relative-motion equations. I added J2 perturbations and explored PID control for maintaining a three-satellite formation in low Earth orbit.',
  },
];

export const projects: {
  title: string;
  dates: string;
  context: string;
  summary: string;
  tools: string[];
  link?: string;
  images?: { src: string; alt: string }[];
  videoFile?: string;
  videoEmbedUrl?: string;
}[] = [
  {
    title: 'Opinion dynamics under random edge failures',
    dates: 'Spring 2026',
    context: 'AAE 59000 · Multi-Agent Autonomy & Control',
    summary:
      'Studied how stubborn truth agents affect convergence in multi-agent networks with random communication failures. I ran simulation experiments to compare convergence across network conditions and presented the work as a research paper.',
    tools: ['Python', 'MATLAB', 'Multi-agent systems'],
  },
  {
    title: 'Low-cost indoor positioning',
    dates: 'Spring 2026',
    context: 'ECE 56800 · Embedded Systems',
    summary:
      'Developed the UWB subsystem for an indoor positioning prototype that combined wireless ranging with inertial sensing. I tested multipath effects, implemented filtering in C++, and adjusted antenna placement to improve stability.',
    tools: ['C++', 'UWB', 'IMU', 'Embedded systems'],
  },
  {
    title: 'Acoustic monitoring for a DED machine',
    dates: 'Spring 2026',
    context: 'ME 59700 · Industrial IoT for Smart Manufacturing',
    summary:
      'Led a three-person team investigating abnormal acoustic signals from a directed energy deposition machine. We used isolated machine tests and a Random Forest model to identify component operating states and narrow down an anomalous signal.',
    tools: ['Python', 'Random Forest', 'Acoustic sensing'],
  },
  {
    title: 'ModifiedNAFNet: lightweight image restoration',
    dates: 'Spring 2025',
    context: 'ECE 57000 · Artificial Intelligence',
    summary:
      'Reimplemented and simplified the NAFNet image restoration architecture for limited compute. The model achieved 33.66 dB PSNR and 0.9400 SSIM on the SIDD dataset after approximately two hours of training.',
    tools: ['Python', 'PyTorch', 'Computer vision'],
  },
  {
    title: 'Gladiator E-Cove: Battle for Logistics',
    dates: 'Spring 2025',
    context: 'ME 58800 · Mechatronics',
    summary:
      'Designed and built a dual-flywheel launcher and IR sensing system for an autonomous two-robot logistics challenge. The launcher reached about 85% delivery accuracy across more than 100 shots, and our team earned the highest score in the final competition.',
    tools: ['ESP32', 'C', 'CAD', 'Mechatronics'],
  },
  {
    title: 'Restaurant of the Future simulation',
    dates: 'Spring 2025',
    context: 'IE 574 · Industrial Robotics & Flexible Assembly',
    summary:
      'Designed the layout and detailed CoppeliaSim environment for an automated restaurant with UR5e robot arms and a mobile robot. I also helped coordinate robot communication and refined trajectories through constrained spaces.',
    tools: ['CoppeliaSim', 'Lua', 'UR5e', 'Node-RED'],
  },
];

export const activities: {
  title: string;
  organization: string;
  dates: string;
  summary: string;
  images?: { src: string; alt: string }[];
}[] = [
  {
    title: 'Platoon Commander',
    organization: 'Amity Greenhorns military camp',
    dates: 'Summer 2019',
    summary:
      'Selected to lead a platoon during undergraduate military training. Our platoon won the final-day parade competition.',
  },
  {
    title: 'Bhangra',
    organization: 'Personal interest',
    dates: 'Since 2022',
    summary: 'I practice Bhangra, a traditional Punjabi folk dance.',
  },
];
