'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

const linkVariants = {
  initial: { opacity: 0, x: -20 },
  animate: { opacity: 1, x: 0 },
  hover: { x: 10 }
}

export default function Contact() {
  return (
    <motion.section
      id="contact"
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
        Contact
      </motion.h2>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="flex flex-col gap-4"
      >
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-sm text-slate-400"
        >
          Feel free to reach out for collaborations or just a friendly hello
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-col gap-2"
        >
          <motion.div
            variants={linkVariants}
            initial="initial"
            animate="animate"
            whileHover="hover"
          >
            <Link
              href="mailto:arbiasgjoshi@gmail.com"
              className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-slate-200 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>arbiasgjoshi@gmail.com</span>
            </Link>
          </motion.div>
          <motion.div
            variants={linkVariants}
            initial="initial"
            animate="animate"
            whileHover="hover"
            transition={{ delay: 0.1 }}
          >
            <Link
              href="https://www.linkedin.com/in/arbiasgjoshi"
              className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-slate-200 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>linkedin.com/in/arbiasgjoshi</span>
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  )
} 