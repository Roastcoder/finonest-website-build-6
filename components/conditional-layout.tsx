"use client"

import { usePathname } from "next/navigation"
import { ReactNode } from "react"

interface ConditionalLayoutProps {
  children: ReactNode
}

export function ConditionalLayout({ children }: ConditionalLayoutProps) {
  const pathname = usePathname()
  const isAdminPage = pathname?.startsWith('/admin')

  if (isAdminPage) {
    // For admin pages, only render main content and toaster
    const childrenArray = Array.isArray(children) ? children : [children]
    return (
      <>
        {childrenArray[1]} {/* main */}
        {childrenArray[4]} {/* toaster */}
      </>
    )
  }

  return <>{children}</>
}