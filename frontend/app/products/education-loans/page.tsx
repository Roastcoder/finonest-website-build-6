"use client"



"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { GraduationCap, Calculator, FileText, CheckCircle, ArrowRight, Phone, Mail, Globe, BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function EducationLoansPage() {
  const [loanAmount, setLoanAmount] = useState(1500000)
  const [tenure, setTenure] = useState(120)
  const [emi, setEmi] = useState(0)

  const calculateEMI = () => {
    const rate = 7.5 / 100 / 12
    const emiValue = (loanAmount * rate * Math.pow(1 + rate, tenure)) / (Math.pow(1 + rate, tenure) - 1)
    setEmi(Math.round(emiValue))
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white">
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link href="/products" className="text-indigo-600 hover:text-indigo-800 flex items-center gap-2">
              ← Back to Products
            </Link>
            <h1 className="text-2xl font-bold text-gray-900">Education Loans</h1>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <GraduationCap className="w-6 h-6 text-indigo-600" />
                  Education Loans - Invest in Your Future
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6">
                  Comprehensive education loans covering tuition, living expenses, and more for 
                  studies in India and abroad. Build your future with our educational financing.
                </p>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-indigo-50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-indigo-600">7.5%</div>
                    <div className="text-sm text-gray-600">Interest Rate (p.a.)</div>
                  </div>
                  <div className="bg-indigo-50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-indigo-600">₹75L</div>
                    <div className="text-sm text-gray-600">Max Amount</div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="font-semibold text-gray-900">Key Features:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-indigo-600" />
                      <span className="text-sm">Zero processing fee</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-indigo-600" />
                      <span className="text-sm">Moratorium during study</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-indigo-600" />
                      <span className="text-sm">Covers all expenses</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-indigo-600" />
                      <span className="text-sm">Tax benefits under 80E</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Eligibility Criteria</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                    <span className="text-sm">Age: 18-35 years</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                    <span className="text-sm">Admission to recognized institution</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                    <span className="text-sm">Co-applicant required</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                    <span className="text-sm">Academic merit considered</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calculator className="w-6 h-6 text-indigo-600" />
                  EMI Calculator
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Loan Amount</label>
                  <Input 
                    type="number"
                    value={loanAmount}
                    onChange={(e) => setLoanAmount(Number(e.target.value))}
                    placeholder="Enter loan amount"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Tenure (months)</label>
                  <Input 
                    type="number"
                    value={tenure}
                    onChange={(e) => setTenure(Number(e.target.value))}
                    placeholder="Enter tenure in months"
                  />
                </div>
                <Button onClick={calculateEMI} className="w-full bg-indigo-600 hover:bg-indigo-700">
                  Calculate EMI
                </Button>
                {emi > 0 && (
                  <div className="bg-indigo-50 p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-indigo-600">₹{emi.toLocaleString()}</div>
                    <div className="text-sm text-gray-600">Monthly EMI (after moratorium)</div>
                  </div>
                )}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Globe className="w-6 h-6 text-indigo-600" />
                  Study Destinations
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3 p-3 bg-indigo-50 rounded-lg">
                  <BookOpen className="w-8 h-8 text-indigo-600" />
                  <div>
                    <div className="font-semibold">India</div>
                    <div className="text-sm text-gray-600">All recognized universities & colleges</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-indigo-50 rounded-lg">
                  <Globe className="w-8 h-8 text-indigo-600" />
                  <div>
                    <div className="font-semibold">Abroad</div>
                    <div className="text-sm text-gray-600">USA, UK, Canada, Australia & more</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-indigo-50 border-indigo-200">
              <CardContent className="pt-6">
                <h3 className="font-bold text-indigo-900 mb-4 text-center">Ready to Apply?</h3>
                <div className="space-y-3">
                  <Button className="w-full bg-indigo-600 hover:bg-indigo-700">
                    <FileText className="w-4 h-4 mr-2" />
                    Apply Online Now
                  </Button>
                  <div className="text-center text-sm text-gray-600">Or contact us directly</div>
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
          </motion.div>
        </div>
      </div>
    </div>
  )
}