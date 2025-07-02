'use client'

import { motion } from 'framer-motion'

export default function About() {
  return (
    <motion.section
      id="about"
      className="mb-16"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h2
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mb-4 text-sm font-bold uppercase tracking-widest text-slate-200"
      >
        About
      </motion.h2>
      <div className="flex flex-col gap-4 max-w-xl">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-base text-slate-400"
        >
          As a Front End Tech Consultant at Marketer, I specialize in developing AI-powered marketing solutions that help businesses automate and optimize their digital presence. My expertise lies in crafting intuitive interfaces that make complex AI capabilities accessible to marketing teams.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-base text-slate-400"
        >
          My tech stack includes Next.js, TypeScript, and Tailwind CSS, which I leverage to build performant, scalable web applications. I'm particularly passionate about creating seamless user experiences that bridge the gap between advanced AI functionality and user-friendly interfaces.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-base text-slate-400"
        >
          Throughout my career, I've led development teams in implementing innovative solutions that transform marketing workflows. I have a proven track record of architecting and delivering complex web applications that combine technical excellence with business value.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-base text-slate-400"
        >
          When I'm not coding, I enjoy exploring new technologies and contributing to open-source projects. I'm always eager to learn and adapt to the rapidly evolving landscape of web development and AI technologies.
        </motion.p>
      </div>
    </motion.section>
  )
} 