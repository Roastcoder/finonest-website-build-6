"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const stats = [
  {
    number: "500,000+",
    label: "Happy Customers",
    color: "#0064D6"
  },
  {
    number: "10,000 Cr+", 
    label: "Loans Disbursed",
    color: "#12D6E7"
  },
  {
    number: "24 hrs",
    label: "Avg. Approval Time", 
    color: "#008B96"
  },
  {
    number: "15+",
    label: "Years of Trust",
    color: "#002E9C"
  }
]

export function StatsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section ref={ref} className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Trusted by Millions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our numbers speak for themselves. Join millions of Indians who trust Finonest.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div 
                className="text-4xl sm:text-5xl font-bold mb-2"
                style={{ color: stat.color }}
              >
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}