"use client"

import { useState, Suspense } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

function LoginForm() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const roleParam = searchParams.get('role')
  
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    role: roleParam || "customer"
  })

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Simulate login
    localStorage.setItem("finonest_logged_in", "true")
    localStorage.setItem("finonest_user_role", formData.role)
    localStorage.setItem("finonest_user_name", formData.email.split('@')[0])
    
    window.dispatchEvent(new Event("authChange"))
    
    // Redirect to appropriate dashboard
    const dashboards = {
      customer: "/dashboard/customer",
      employee: "/dashboard/employee", 
      manager: "/dashboard/manager",
      admin: "/admin/dashboard"
    }
    
    router.push(dashboards[formData.role as keyof typeof dashboards] || "/")
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-teal-50 to-cyan-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <Card>
          <CardHeader className="text-center">
              <img src="/logo.png" alt="Finonest" className="h-12 mx-auto mb-4" />
            <CardTitle className="text-2xl font-bold">Login to Finonest</CardTitle>
            <p className="text-gray-600">Access your account</p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <Input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  placeholder="Enter your email"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Password</label>
                <Input
                  type="password"
                  value={formData.password}
                  onChange={(e) => setFormData({...formData, password: e.target.value})}
                  placeholder="Enter your password"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Role</label>
                <select
                  value={formData.role}
                  onChange={(e) => setFormData({...formData, role: e.target.value})}
                  className="w-full p-2 border border-gray-300 rounded-lg"
                >
                  <option value="customer">Customer</option>
                  <option value="employee">Employee</option>
                  <option value="manager">Manager</option>
                  <option value="admin">Admin</option>
                </select>
              </div>

              <Button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700">
                Login
              </Button>
            </form>

            <div className="mt-4 text-center">
              <Link href="/signup" className="text-blue-600 hover:text-teal-600 hover:underline">
                Don't have an account? Sign up
              </Link>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}

export default function LoginPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
      <LoginForm />
    </Suspense>
  )
}