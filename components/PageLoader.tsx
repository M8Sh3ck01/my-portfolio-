// components/PageLoader.tsx
'use client'
import { motion } from 'framer-motion'

export default function PageLoader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 1, duration: 0.5 }}
      className="fixed inset-0 bg-white dark:bg-gray-900 z-50
                flex items-center justify-center"
    >
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
        className="w-10 h-10 border-4 border-blue-500 
                  border-t-transparent rounded-full"
      />
    </motion.div>
  )
}