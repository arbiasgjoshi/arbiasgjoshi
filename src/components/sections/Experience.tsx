'use client'

import { motion } from 'framer-motion'
import Tag from '../ui/Tag'

const experiences = [
  {
    period: '2025 - PRESENT',
    title: 'Senior Frontend Engineer',
    company: 'Marketer.com',
    description: 'Currently working on AI-powered marketing solutions, focusing on performance optimization and scalable architecture.',
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'AI/ML', 'AWS']
  },
  {
    period: '2023 - 2024',
    title: 'Senior Frontend Engineer',
    company: 'TAPP',
    descriptions: [
      'Developed complex form\'s with Vue and Nuxt',
      'Via TDD made a proof of concept in the development process',
      'Expanded the documentation of newly deployed features',
      'Standardized, optimized and extended the Cypress E2E and Unit testing',
      'Optimized querying and indexing, to improve performance on a high-intensity API call, altogether with web performance optimization via store'
    ],
    techStack: ['Vue.js', 'Nuxt.js', 'TypeScript', 'Cypress', 'Jest', 'Pinia']
  },
  {
    period: '2023 - 2023',
    title: 'Senior Frontend Engineer',
    company: 'Ritech International AG',
    descriptions: [
      'Expanded and deployed 3 new modules, while also improving preexisting ones',
      'Analyzed and drafted a performance review of the preexisting applicatio, to identify pitfalls, performance issues & architecture practices',
      'Migrated a series of features from Razor Pages, while extending the Vue application to the SPA environment',
      'Shifted the deployment process to a more TDD environment with the introduction of Staging, Testing and Production environments by also implementing CI/CD Github Actions and YAML configs'
    ],
    techStack: ['Vue.js', 'ASP.NET', 'Azure', 'GitHub Actions', 'YAML', 'Jest']
  },
  {
    period: '2020 - 2023',
    title: 'Lead Frontend Engineer',
    company: 'Justt',
    descriptions: [
      'Spearheaded architectural transformation of a legacy platform by implementing atomic design patterns and AirBnB style guidelines',
      'Architected scalable component libraries shared across multiple products using React, xState, and Styled Components',
      'Established comprehensive E2E testing framework using Playwright, ensuring 90%+ test coverage',
      'Engineered AI-driven features utilizing GraphQL, DraftJS, and custom state management solutions',
      'Led migration to cloud-native architecture leveraging AWS services (S3, CloudFront, Lambda)',
      'Implemented serverless solutions using Netlify and Vercel for NextJS applications',
      'Architected CI/CD best practices and DevOps methodologies across development teams'
    ],
    techStack: ['React', 'xState', 'GraphQL', 'AWS', 'Playwright', 'Next.js', 'Styled Components', 'CI/CD']
  },
  {
    period: '2020 - 2021',
    title: 'Senior Frontend Engineer - Team Lead',
    company: 'StarLabs',
    descriptions: [
      'Led a team to develop a series of React widgets for integration into major WordPress sites',
      'Utilized a rich tech stack including React, Gatsby, Node.js, Express, and SQL',
      'Implemented Atomic Design principles for component architecture',
      'Conducted Jest end-to-end and unit testing using React Testing Library',
      'Optimized CI/CD pipelines, enhancing deployment efficiency and reliability',
      'Gained expertise in creating development environments and managing pipeline launches'
    ],
    techStack: ['React', 'Gatsby', 'Node.js', 'Express', 'SQL', 'Jest', 'React Testing Library', 'CI/CD']
  },
  {
    period: '2015 - 2020',
    title: 'Lead Frontend Developer',
    company: 'Zetta Tech',
    descriptions: [
      'Led front-end architecture decisions for multiple SaaS products',
      'Pioneered migration from jQuery to Angular for DoDay, the flagship task management application',
      'Engineered responsive UI/UX for ATTO and Pathmile using Vue.js and Vuex',
      'Implemented state management solutions optimizing data persistence and application performance',
      'Established front-end development standards across multiple product lines'
    ],
    techStack: ['Vue.js', 'Angular', 'Vuex', 'jQuery', 'REST APIs', 'Laravel']
  },
  {
    period: '2013 - 2015',
    title: 'Frontend Developer',
    company: 'Freelancer.com',
    descriptions: [
      'Developed and maintained multiple client projects as a certified freelancer',
      'Created responsive web applications using jQuery and vanilla JavaScript',
      'Implemented pixel-perfect designs from Photoshop mockups',
      'Built custom WordPress themes and plugins for clients',
      'Managed client relationships and project timelines independently'
    ],
    techStack: ['jQuery', 'JavaScript', 'PHP', 'WordPress', 'HTML5', 'CSS3']
  },
  {
    period: '2012 - 2013',
    title: 'Web Developer',
    company: 'Rrota Creative Studio',
    descriptions: [
      'Developed interactive websites for various clients using PHP and jQuery',
      'Created custom WordPress themes and functionalities',
      'Collaborated with designers to implement responsive layouts',
      'Optimized website performance and cross-browser compatibility',
      'Maintained and updated existing client websites'
    ],
    techStack: ['PHP', 'jQuery', 'WordPress', 'HTML5', 'CSS3', 'MySQL']
  }
]

export default function Experience() {
  return (
    <motion.section
      id="experience"
      className="mb-16"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h2
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mb-8 text-sm font-bold uppercase tracking-widest text-slate-200"
      >
        Experience
      </motion.h2>

      <div className="flex flex-col space-y-12">
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.period}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 * index }}
            className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 lg:hover:!opacity-100 lg:group-hover/list:opacity-50"
          >
            <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
            <header className="z-10 mb-2 text-sm font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">
              {exp.period}
            </header>
            <div className="z-10 sm:col-span-6">
              <h3 className="font-medium leading-snug text-slate-200">
                <div>
                  <span className="text-lg group-hover:text-emerald-300 transition-colors duration-300">{exp.title}</span>
                  <span className="text-slate-500"> · </span>
                  <span className="text-slate-400 group-hover:text-emerald-300 transition-colors duration-300">{exp.company}</span>
                </div>
              </h3>
              <div className="mt-2 text-sm leading-normal text-slate-400">
                {exp.description && <p className="mb-4">{exp.description}</p>}
                {exp.descriptions?.map((desc, i) => (
                  <p key={i} className="mb-4">{desc}</p>
                ))}
              </div>
              <div className="mt-2">
                {exp.techStack.map(tech => (
                  <Tag key={tech}>{tech}</Tag>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
} 