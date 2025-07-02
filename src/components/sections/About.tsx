'use client'

import { motion } from 'framer-motion'

const listVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, x: -10 },
  show: { opacity: 1, x: 0 }
}

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
      <div className="flex flex-col gap-4">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-sm text-slate-400"
        >
          Senior Front End Engineer with extensive experience in React ecosystem and modern web architectures.
          Proven track record in leading teams, implementing scalable solutions, and driving technical innovation.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h3 className="mb-2 text-sm font-bold text-slate-200">Languages</h3>
          <motion.ul
            variants={listVariants}
            initial="hidden"
            animate="show"
            className="list-inside list-disc text-sm text-slate-400"
          >
            <motion.li variants={itemVariants}>English (Native or Bilingual)</motion.li>
            <motion.li variants={itemVariants}>German (Elementary)</motion.li>
            <motion.li variants={itemVariants}>Spanish (Limited Working)</motion.li>
            <motion.li variants={itemVariants}>Albanian (Native or Bilingual)</motion.li>
          </motion.ul>
        </motion.div>
      </div>
    </motion.section>
  )
} 