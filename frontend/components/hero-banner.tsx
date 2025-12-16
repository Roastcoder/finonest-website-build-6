"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

const bannerMessages = [
  "🎉 New Year Special: Get loans at 8.5% interest rate!",
  "🚗 Free car valuation - Know your car's worth instantly",
  "📚 FinoBiz courses now live - Learn digital marketing & finance",
  "⚡ Instant loan approval in just 24 hours",
  "🏆 Trusted by 5 lakh+ happy customers across India"
]

export function HeroBanner() {
  const [currentMessage, setCurrentMessage] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessage((prev) => (prev + 1) % bannerMessages.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="bg-gradient-to-r from-orange-500/80 via-red-500/70 to-pink-500/60 text-white py-3 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          key={currentMessage}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="text-center text-sm sm:text-base font-medium"
        >
          {bannerMessages[currentMessage]}
        </motion.div>
      </div>
    </div>
  )
}