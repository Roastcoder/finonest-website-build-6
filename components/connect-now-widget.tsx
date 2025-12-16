"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Phone, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ConnectNowWidget() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.8, y: 20 }}
        className="fixed bottom-32 right-4 z-40 md:bottom-24"
      >
        <div className="relative">
          {/* Close button */}
          <button
            onClick={() => setIsVisible(false)}
            className="absolute -top-2 -right-2 w-6 h-6 bg-gray-500 hover:bg-gray-600 text-white rounded-full flex items-center justify-center text-xs transition-colors z-10"
            aria-label="Close"
          >
            <X className="w-3 h-3" />
          </button>

          {/* Connect Now Button */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white rounded-xl py-3 px-4 shadow-lg border border-gray-200"
          >
            <Button
              asChild
              className="bg-[#FF6B35] hover:bg-[#ff8c61] text-white text-sm font-bold py-2 px-4 rounded-full transition-all duration-300 flex items-center gap-2"
            >
              <a href="tel:+918001083344">
                <Phone className="w-4 h-4" />
                Connect Now
              </a>
            </Button>
          </motion.div>

          {/* Arrow pointing to chat button */}
          <div className="absolute top-1/2 -right-[6px] -mt-1.5 h-3 w-3 rotate-45 bg-white border-t border-r border-gray-200"></div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}