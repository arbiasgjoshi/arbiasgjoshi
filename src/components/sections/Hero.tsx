'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <div className="flex flex-col gap-4">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl"
      >
        Arbias Gjoshi
      </motion.h1>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-lg font-medium tracking-tight text-slate-200 sm:text-xl"
      >
        Senior Tech Consultant
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="max-w-xs text-sm text-slate-400"
      >
        Experienced Web Developer, on a journey to become an Entrepreneur.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="flex gap-4"
      >
        <Link
          href="mailto:arbiasgjoshi@gmail.com"
          className="text-sm text-slate-400 hover:text-slate-200 transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          Email
        </Link>
        <Link
          href="https://www.linkedin.com/in/arbiasgjoshi"
          className="text-sm text-slate-400 hover:text-slate-200 transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </Link>
      </motion.div>
    </div>
  )
} 