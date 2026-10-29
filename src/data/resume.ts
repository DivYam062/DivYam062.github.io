export const profile = {
  name: 'Divyam Singh Rauthan',
  role: 'Software Engineer',
  location: 'Dehradun, Uttarakhand, India',
  email: 'divyamrauthan002@gmail.com',
  phone: '+91 9368866508',
  resumeUrl: '/Divyam_Singh_Rauthan_Resume.pdf',
  avatar: '/profile.webp',
  avatarFull: '/profile-full.webp',
  summary:
    'Software Engineer with 3+ years of experience building scalable, high-performance web applications and product-based systems. Specialized in React, TypeScript, JavaScript and the MERN stack, with expertise in reusable component architecture, dynamic form systems, state management and performance optimization.',
  socials: {
    github: 'https://github.com/DivYam062',
    linkedin: 'https://www.linkedin.com/in/divyam-rauthan-593030217/',
    email: 'divyamrauthan002@gmail.com',
  },
}

export type Experience = {
  role: string
  company: string
  companyUrl?: string
  duration: string
  location: string
  highlights: string[]
}

export const experiences: Experience[] = [
  {
    role: 'Frontend Developer',
    company: 'Chervic Advisory Services',
    duration: 'Aug 2026 — Present',
    location: 'Bangalore, Karnataka (Remote)',
    highlights: [
      'Leading the frontend development team for the Sila Dashboard, overseeing feature development, task allocation and timely delivery.',
      'Developing scalable, responsive web applications using React.js and TypeScript, following clean and maintainable coding practices.',
      'Implementing efficient global state management using Zustand and designing reusable components for better application scalability.',
      'Reviewing code, maintaining coding standards and providing technical guidance and mentorship to team members.',
      'Collaborating with product, design and backend teams to translate business requirements into robust, user-friendly frontend solutions.',
      'Optimizing application performance and resolving complex frontend issues to ensure a stable, high-quality dashboard experience.',
    ],
  },
  {
    role: 'Software Engineer (SDE-1)',
    company: 'Omniful Private Limited',
    duration: 'Sep 2024 — Jun 2026',
    location: 'Gurugram, Haryana',
    highlights: [
      'Developed scalable frontend applications using React and TypeScript for Warehouse Management Systems (WMS), Order Management Systems (OMS) and Sales Channels.',
      'Designed and implemented reusable, modular UI components, reducing development time and improving consistency across multiple modules.',
      'Built a configuration-driven, centralized form architecture, reducing form development effort and minimizing code duplication.',
      'Developed reusable side sheets for create/update workflows, improving maintainability and user experience.',
      'Implemented and enhanced key features across WMS and OMS, including inventory management, order processing and tracking workflows.',
      'Contributed to a white-label admin dashboard, enabling multi-tenant customization and flexible branding support.',
      'Integrated REST APIs and managed asynchronous data flows for seamless frontend-backend communication.',
      'Optimized application performance using memoization, lazy loading and code-splitting techniques.',
    ],
  },
  {
    role: 'Software Engineer Intern',
    company: 'CodeJi Private Limited',
    duration: 'Apr 2024 — Aug 2024',
    location: 'Dehradun, Uttarakhand',
    highlights: [
      'Developed a Taxi Management System using JavaScript and React, enabling booking, driver allocation and trip tracking.',
      'Built a dynamic admin dashboard for managing users, drivers and ride data with real-time updates.',
      'Implemented reusable UI components and improved application responsiveness through performance optimizations.',
      'Integrated REST APIs for booking operations, user management and system workflows.',
    ],
  },
]

export const education = {
  degree: 'Bachelor of Technology (CSE)',
  school: 'Graphic Era Hill University',
  duration: '07/2019 — 07/2023',
  location: 'Dehradun, Uttarakhand',
}

export type SkillGroup = {
  category: string
  skills: string[]
}

export const skillGroups: SkillGroup[] = [
  { category: 'Languages & Core', skills: ['JavaScript', 'TypeScript', 'HTML5', 'CSS3'] },
  { category: 'Frontend', skills: ['React.js', 'React Hooks', 'Component Architecture', 'Tailwind CSS'] },
  { category: 'Backend', skills: ['Node.js', 'Express.js', 'Python'] },
  { category: 'State & Routing', skills: ['Redux Toolkit', 'Zustand', 'Context API', 'React Router'] },
  { category: 'Architecture', skills: ['Reusable Components', 'Custom Hooks', 'Dynamic Forms', 'Configuration-Driven UI'] },
  { category: 'API & Performance', skills: ['REST APIs', 'Async Data Handling', 'Lazy Loading', 'Memoization'] },
  { category: 'Database & Tools', skills: ['MongoDB', 'Git', 'GitHub', 'Cursor'] },
]

export type Project = {
  title: string
  description: string
  stack: string[]
  highlights: string[]
  githubUrl?: string
  liveUrl?: string
  image?: string
}

export const projects: Project[] = [
  {
    title: 'Inventory Management System',
    description:
      'A multi-organization inventory management platform covering end-to-end warehouse operations, built on the MERN stack.',
    stack: ['React 19', 'Redux Toolkit', 'Node.js', 'Express 5', 'MongoDB'],
    highlights: [
      'Warehouse workflows covering Purchase Orders, Gate Entry, Goods Receipt Notes (GRN), inspection, putaway and stock management.',
      'Role-based access control with configurable permissions, organization-level data isolation and dynamic navigation.',
      'Stock tracking, inventory adjustments and transaction history with an append-only audit logging system.',
      'Configurable dashboards and inventory analytics for inventory, catalog, configuration, users and roles.',
    ],
    githubUrl: 'https://github.com/DivYam062/inventory-management-system',
  },
  {
    title: 'Green Paradise',
    description: 'A responsive e-commerce platform for plant shopping with a focus on clean UI and intuitive navigation.',
    stack: ['HTML5', 'CSS3', 'JavaScript'],
    highlights: [
      'Product browsing, filtering and cart functionality for a seamless shopping experience.',
      'Clean, accessible UI design with an intuitive navigation structure.',
    ],
    githubUrl: 'https://github.com/DivYam062/eCommerceGreenParadise',
    liveUrl: 'https://calm-malasada-c0860b.netlify.app',
    image: '/Green_Paradise.gif',
  },
]

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]
