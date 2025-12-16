"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { 
  LayoutDashboard, 
  Users, 
  FileText, 
  CreditCard, 
  Settings, 
  Search,
  BarChart3,
  Globe,
  LogOut
} from "lucide-react"
import { cn } from "@/lib/utils"

const sidebarItems = [
  {
    title: "Dashboard",
    href: "/admin/dashboard",
    icon: LayoutDashboard
  },
  {
    title: "Applications",
    href: "/admin/applications",
    icon: FileText
  },
  {
    title: "Users",
    href: "/admin/users",
    icon: Users
  },
  {
    title: "Products",
    href: "/admin/products",
    icon: CreditCard
  },
  {
    title: "Analytics",
    href: "/admin/analytics",
    icon: BarChart3
  },
  {
    title: "SEO Content",
    href: "/admin/seo-content",
    icon: Globe
  },
  {
    title: "Settings",
    href: "/admin/settings",
    icon: Settings
  }
]

export function AdminSidebar() {
  const pathname = usePathname()

  return (
    <div className="flex h-screen w-64 flex-col bg-gray-900 text-white">
      <div className="flex h-16 items-center justify-center border-b border-gray-800">
        <h1 className="text-xl font-bold">Finonest Admin</h1>
      </div>
      
      <nav className="flex-1 space-y-1 p-4">
        {sidebarItems.map((item) => {
          const Icon = item.icon
          const isActive = pathname === item.href
          
          return (
            <Link
              key={item.href}
              href={item.href}
              title={`Navigate to ${item.title} section`}
              className={cn(
                "flex items-center space-x-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                isActive
                  ? "bg-gray-800 text-white"
                  : "text-gray-300 hover:bg-gray-800 hover:text-white"
              )}
            >
              <Icon className="h-5 w-5" />
              <span>{item.title}</span>
            </Link>
          )
        })}
      </nav>
      
      <div className="border-t border-gray-800 p-4">
        <button className="flex w-full items-center space-x-3 rounded-lg px-3 py-2 text-sm font-medium text-gray-300 transition-colors hover:bg-gray-800 hover:text-white">
          <LogOut className="h-5 w-5" />
          <span>Logout</span>
        </button>
      </div>
    </div>
  )
}