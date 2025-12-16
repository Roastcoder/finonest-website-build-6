"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Briefcase, Calculator, FileText, CheckCircle, ArrowRight, Phone, Mail, Shield, Clock, Award, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { EMICalculator } from "@/components/emi-calculator"
import Link from "next/link"

export default function BusinessLoansPage() {
  const [loanAmount, setLoanAmount] = useState(1000000)
  const [tenure, setTenure] = useState(60)
  const [emi, setEmi] = useState(0)

  const calculateEMI = () => {
    const rate = 12 / 100 / 12
    const emiValue = (loanAmount * rate * Math.pow(1 + rate, tenure)) / (Math.pow(1 + rate, tenure) - 1)
    setEmi(Math.round(emiValue))
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50">
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link href="/products" className="text-[#0A1F44] hover:text-[#F4D86B] flex items-center gap-2 transition-colors">
              ← Back to Products
            </Link>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-[#F4D86B] to-[#FFB800] bg-clip-text text-transparent">Business Loans</h1>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
            <Card className="rounded-3xl shadow-lg hover:shadow-2xl transition-all">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl">
                  <Briefcase className="w-6 h-6 text-[#F4D86B]" />
                  Business Loans - Fuel Your Growth
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6">
                  Flexible business loans to help you expand operations, manage working capital, 
                  or invest in new equipment. Grow your business with our competitive rates.
                </p>
                
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="bg-gradient-to-br from-[#F4D86B]/10 to-[#F4D86B]/20 p-4 rounded-2xl text-center hover:scale-105 transition-transform">
                    <div className="text-2xl font-bold text-[#0A1F44]">12%</div>
                    <div className="text-sm text-gray-600">Interest Rate (p.a.)</div>
                  </div>
                  <div className="bg-gradient-to-br from-[#FFB800]/10 to-[#FFB800]/20 p-4 rounded-2xl text-center hover:scale-105 transition-transform">
                    <div className="text-2xl font-bold text-[#0A1F44]">₹50L</div>
                    <div className="text-sm text-gray-600">Max Amount</div>
                  </div>
                  <div className="bg-gradient-to-br from-[#0A1F44]/10 to-[#0A1F44]/20 p-4 rounded-2xl text-center hover:scale-105 transition-transform">
                    <div className="text-2xl font-bold text-[#0A1F44]">7yrs</div>
                    <div className="text-sm text-gray-600">Max Tenure</div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="font-semibold text-gray-900">Key Features:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-3 p-2 rounded-lg hover:bg-[#F4D86B]/10 transition-colors">
                      <TrendingUp className="w-5 h-5 text-[#F4D86B]" />
                      <span className="text-sm font-medium">Quick disbursement</span>
                    </li>
                    <li className="flex items-center gap-3 p-2 rounded-lg hover:bg-[#FFB800]/10 transition-colors">
                      <Shield className="w-5 h-5 text-[#FFB800]" />
                      <span className="text-sm font-medium">Collateral-free up to ₹25L</span>
                    </li>
                    <li className="flex items-center gap-3 p-2 rounded-lg hover:bg-[#0A1F44]/10 transition-colors">
                      <Award className="w-5 h-5 text-[#0A1F44]" />
                      <span className="text-sm font-medium">Overdraft facility available</span>
                    </li>
                    <li className="flex items-center gap-3 p-2 rounded-lg hover:bg-[#F4D86B]/10 transition-colors">
                      <CheckCircle className="w-5 h-5 text-[#F4D86B]" />
                      <span className="text-sm font-medium">Working capital financing</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-3xl shadow-lg">
              <CardHeader>
                <CardTitle>Eligibility Criteria</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#F4D86B] rounded-full"></div>
                    <span className="text-sm">Business age: 2+ years</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#FFB800] rounded-full"></div>
                    <span className="text-sm">Annual turnover: ₹10L+</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#0A1F44] rounded-full"></div>
                    <span className="text-sm">ITR for last 2 years</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#F4D86B] rounded-full"></div>
                    <span className="text-sm">GST registration</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
            <EMICalculator 
              productType="Business Loan"
              defaultAmount={1000000}
              defaultTenure={60}
              defaultRate={12}
              maxAmount={5000000}
              maxTenure={84}
            />

            <Card className="bg-gradient-to-br from-[#F4D86B]/10 to-[#FFB800]/10 border-2 border-[#F4D86B]/30 rounded-3xl shadow-xl">
              <CardContent className="pt-6">
                <h3 className="font-bold text-[#0A1F44] mb-4 text-center text-xl">Ready to Apply?</h3>
                <div className="space-y-3">
                  <Link href="/eligibility">
                    <Button className="w-full bg-gradient-to-r from-[#F4D86B] to-[#FFB800] hover:from-[#FFB800] hover:to-[#F4D86B] text-[#0A1F44] py-3 rounded-2xl shadow-lg hover:shadow-2xl transition-all font-bold">
                      <FileText className="w-4 h-4 mr-2" />
                      Apply Online Now
                    </Button>
                  </Link>
                  <div className="text-center text-sm text-gray-600">Or contact us directly</div>
                  <div className="flex gap-2">
                    <Link href="tel:+911234567890" className="flex-1">
                      <Button variant="outline" className="w-full border-[#0A1F44] text-[#0A1F44] hover:bg-[#0A1F44]/10 rounded-xl">
                        <Phone className="w-4 h-4 mr-2" />
                        Call Now
                      </Button>
                    </Link>
                    <Link href="mailto:support@finonest.com" className="flex-1">
                      <Button variant="outline" className="w-full border-[#F4D86B] text-[#F4D86B] hover:bg-[#F4D86B]/10 rounded-xl">
                        <Mail className="w-4 h-4 mr-2" />
                        Email Us
                      </Button>
                    </Link>
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
