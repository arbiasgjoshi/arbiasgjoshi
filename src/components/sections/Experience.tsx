'use client'

import { motion } from 'framer-motion'

interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location?: string;
  description: string[];
}

const experiences: ExperienceItem[] = [
  {
    company: "Marketer.com",
    role: "Senior Frontend Engineer",
    period: "February 2025 - Present",
    description: []
  },
  {
    company: "TAPP",
    role: "Senior Frontend Engineer",
    period: "November 2023 - October 2024",
    location: "Netherlands",
    description: [
      "Developed complex form's with Vue and Nuxt",
      "via TDD made a proof of concept in the development process",
      "Expanded the documentation of newly deployed features",
      "Standardized, optimized and extended the Cypress E2E and Unit testing",
      "Optimized querying and indexing, to improve performance on a high-intensity API call, altogether with web performance optimization via store"
    ]
  },
  {
    company: "Ritech International AG",
    role: "Senior Frontend Engineer",
    period: "March 2023 - December 2023",
    description: [
      "Expanded and deployed 3 new modules, while also improving preexisting ones",
      "Analyzed and drafted a performance review of the preexisting applicatio, to identify pitfalls, performance issues & architecture practices",
      "Migrated a series of features from Razor Pages, while extending the Vue application to the SPA environment",
      "Shifted the deployment process to a more TDD environment with the introduction of Staging, Testing and Production environments by also implementing CI/CD Github Actions and YAML configs"
    ]
  },
  {
    company: "Justt",
    role: "Lead Frontend Engineer",
    period: "August 2020 - March 2023",
    location: "Pristina, Kosovo",
    description: [
      "Spearheaded architectural transformation of a legacy platform by implementing atomic design patterns and AirBnB style guidelines",
      "Architected scalable component libraries shared across multiple products using React, xState, and Styled Components",
      "Established comprehensive E2E testing framework using Playwright, ensuring 90%+ test coverage",
      "Engineered AI-driven features utilizing GraphQL, DraftJS, and custom state management solutions",
      "Led migration to cloud-native architecture leveraging AWS services (S3, CloudFront, Lambda)",
      "Implemented serverless solutions using Netlify and Vercel for NextJS applications",
      "Architected CI/CD best practices and DevOps methodologies across development teams"
    ]
  },
  {
    company: "StarLabs",
    role: "Senior Frontend Engineer - Team Lead",
    period: "August 2020 - January 2021",
    location: "Pristina, Kosovo",
    description: [
      "Led a team to develop a series of React widgets for integration into major WordPress sites",
      "Utilized a rich tech stack including React, Gatsby, Node.js, Express, and SQL",
      "Implemented Atomic Design principles for component architecture",
      "Conducted Jest end-to-end and unit testing using React Testing Library",
      "Optimized CI/CD pipelines, enhancing deployment efficiency and reliability",
      "Gained expertise in creating development environments and managing pipeline launches"
    ]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

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
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="flex flex-col gap-12"
      >
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="group relative grid pb-1 transition-all lg:grid-cols-[1fr_2fr] lg:gap-4"
          >
            <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
            <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 lg:mt-0">
              {exp.period}
              {exp.location && <span className="block text-slate-500">{exp.location}</span>}
            </header>
            <div className="z-10">
              <h3 className="font-medium leading-snug text-slate-200">
                <div>
                  <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                  <span className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base">
                    {exp.role} · {exp.company}
                  </span>
                </div>
              </h3>
              {exp.description.length > 0 && (
                <motion.ul
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="mt-2 flex flex-col gap-2 text-sm text-slate-400"
                >
                  {exp.description.map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + i * 0.1 }}
                      className="before:absolute before:-ml-[15px] before:mt-[9px] before:h-1.5 before:w-1.5 before:rounded-full before:bg-slate-600 pl-5"
                    >
                      {item}
                    </motion.li>
                  ))}
                </motion.ul>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  )
} 