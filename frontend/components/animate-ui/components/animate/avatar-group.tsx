"use client"

import { motion } from "framer-motion"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { cn } from "@/lib/utils"

interface AvatarGroupProps {
  children: React.ReactNode
  className?: string
}

interface AvatarGroupTooltipProps {
  children: React.ReactNode
  tooltip: string
  className?: string
}

export function AvatarGroup({ children, className }: AvatarGroupProps) {
  return (
    <motion.div 
      className={cn("flex -space-x-2", className)}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, staggerChildren: 0.1 }}
    >
      {children}
    </motion.div>
  )
}

export function AvatarGroupTooltip({ children, tooltip, className }: AvatarGroupTooltipProps) {
  return (
    <motion.div 
      className={cn("relative group cursor-pointer", className)}
      initial={{ opacity: 0, x: -20, rotateY: -45 }}
      animate={{ opacity: 1, x: 0, rotateY: 0 }}
      whileHover={{ scale: 1.15, z: 10, rotateZ: 5 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
    >
      {children}
      <motion.div
        className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-600 to-teal-600 text-white text-xs px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 pointer-events-none whitespace-nowrap z-20 shadow-lg"
        initial={{ opacity: 0, y: 10, scale: 0.8 }}
        animate={{ opacity: 0, y: 10, scale: 0.8 }}
        whileHover={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        {tooltip}
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-blue-600"></div>
      </motion.div>
    </motion.div>
  )
}