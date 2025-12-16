"use client"

"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { BookOpen, Play, Users, Award, CheckCircle, ArrowRight, Phone, Mail, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

const courses = [
  {
    id: "digital-marketing",
    title: "Digital Marketing Mastery",
    duration: "12 weeks",
    price: "₹15,999",
    rating: 4.8,
    students: 2500,
    modules: ["SEO & SEM", "Social Media Marketing", "Content Marketing", "Email Marketing", "Analytics"]
  },
  {
    id: "financial-planning",
    title: "Personal Finance & Investment",
    duration: "8 weeks", 
    price: "₹12,999",
    rating: 4.9,
    students: 1800,
    modules: ["Financial Planning", "Investment Strategies", "Tax Planning", "Insurance", "Retirement Planning"]
  },
  {
    id: "business-finance",
    title: "Business Finance & Growth",
    duration: "10 weeks",
    price: "₹18,999", 
    rating: 4.7,
    students: 1200,
    modules: ["Business Valuation", "Funding Strategies", "Financial Analysis", "Risk Management", "Growth Hacking"]
  }
]

export default function FinoBizPage() {
  const [selectedCourse, setSelectedCourse] = useState(courses[0])

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link href="/products" className="text-purple-600 hover:text-purple-800 flex items-center gap-2">
              ← Back to Products
            </Link>
            <h1 className="text-2xl font-bold text-gray-900">FinoBiz Courses</h1>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="w-6 h-6 text-purple-600" />
                  FinoBiz - Learn Digital Marketing & Finance
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6">
                  Master digital marketing and finance with our expert-led courses. 
                  Build skills that drive business growth and financial success.
                </p>
                
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="bg-purple-50 p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-purple-600">50+</div>
                    <div className="text-sm text-gray-600">Courses</div>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-purple-600">5000+</div>
                    <div className="text-sm text-gray-600">Students</div>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-purple-600">4.8★</div>
                    <div className="text-sm text-gray-600">Rating</div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="font-semibold text-gray-900">What You'll Get:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-purple-600" />
                      <span className="text-sm">Expert-led live sessions</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-purple-600" />
                      <span className="text-sm">Practical assignments & projects</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-purple-600" />
                      <span className="text-sm">Industry certification</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-purple-600" />
                      <span className="text-sm">Lifetime access to materials</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Course Categories</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="p-3 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg">
                    <div className="font-semibold text-blue-900">Digital Marketing</div>
                    <div className="text-sm text-blue-700">SEO, SEM, Social Media, Content Marketing</div>
                  </div>
                  <div className="p-3 bg-gradient-to-r from-green-50 to-green-100 rounded-lg">
                    <div className="font-semibold text-green-900">Finance & Investment</div>
                    <div className="text-sm text-green-700">Personal Finance, Investment, Tax Planning</div>
                  </div>
                  <div className="p-3 bg-gradient-to-r from-purple-50 to-purple-100 rounded-lg">
                    <div className="font-semibold text-purple-900">Business Growth</div>
                    <div className="text-sm text-purple-700">Business Finance, Funding, Growth Strategies</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Popular Courses</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {courses.map((course) => (
                  <div 
                    key={course.id}
                    className={`p-4 border rounded-lg cursor-pointer transition-all ${
                      selectedCourse.id === course.id ? 'border-purple-500 bg-purple-50' : 'border-gray-200 hover:border-purple-300'
                    }`}
                    onClick={() => setSelectedCourse(course)}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold text-gray-900">{course.title}</h3>
                      <Badge className="bg-purple-100 text-purple-800">{course.price}</Badge>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-gray-600 mb-2">
                      <span className="flex items-center gap-1">
                        <Play className="w-4 h-4" />
                        {course.duration}
                      </span>
                      <span className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        {course.students} students
                      </span>
                      <span className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        {course.rating}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {course.modules.slice(0, 3).map((module) => (
                        <Badge key={module} variant="outline" className="text-xs">
                          {module}
                        </Badge>
                      ))}
                      {course.modules.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{course.modules.length - 3} more
                        </Badge>
                      )}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="bg-purple-50 border-purple-200">
              <CardContent className="pt-6">
                <h3 className="font-bold text-purple-900 mb-4 text-center">Ready to Start Learning?</h3>
                <div className="space-y-3">
                  <Button className="w-full bg-purple-600 hover:bg-purple-700">
                    <Play className="w-4 h-4 mr-2" />
                    Enroll Now - {selectedCourse.price}
                  </Button>
                  <div className="text-center text-sm text-gray-600">Or get more information</div>
                  <div className="flex gap-2">
                    <Button variant="outline" className="flex-1">
                      <Phone className="w-4 h-4 mr-2" />
                      Call Now
                    </Button>
                    <Button variant="outline" className="flex-1">
                      <Mail className="w-4 h-4 mr-2" />
                      Email Us
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="w-6 h-6 text-purple-600" />
                  Certification & Support
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Industry-recognized certificates</li>
                  <li>• 24/7 student support</li>
                  <li>• Job placement assistance</li>
                  <li>• Alumni network access</li>
                  <li>• Regular skill assessments</li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  )
}