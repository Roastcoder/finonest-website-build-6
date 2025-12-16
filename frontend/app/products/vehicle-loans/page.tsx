"use client"



"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Car, Calculator, FileText, CheckCircle, ArrowRight, Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function VehicleLoansPage() {
  const [loanAmount, setLoanAmount] = useState(800000)
  const [tenure, setTenure] = useState(60)
  const [emi, setEmi] = useState(0)

  const calculateEMI = () => {
    const rate = 9.5 / 100 / 12
    const emiValue = (loanAmount * rate * Math.pow(1 + rate, tenure)) / (Math.pow(1 + rate, tenure) - 1)
    setEmi(Math.round(emiValue))

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link href="/products" className="text-orange-600 hover:text-orange-800 flex items-center gap-2">
              ← Back to Products
            </Link>
            <h1 className="text-2xl font-bold text-gray-900">Vehicle Loans</h1>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-12">
          <div } } className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Car className="w-6 h-6 text-orange-600" />
                  Used Car Loans - Finance Pre-Owned Vehicles
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6">
                  Get the best used car loan deals with competitive interest rates starting @ 8.5%. 
                  Finance your dream pre-owned car with quick approval and minimal documentation.
                </p>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-orange-600">9.5%</div>
                    <div className="text-sm text-gray-600">Interest Rate (p.a.)</div>
                  </div>
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-orange-600">₹1Cr</div>
                    <div className="text-sm text-gray-600">Max Amount</div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="font-semibold text-gray-900">Key Features:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-orange-600" />
                      <span className="text-sm">Up to 100% on-road funding</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-orange-600" />
                      <span className="text-sm">New & used car financing</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-orange-600" />
                      <span className="text-sm">Quick 1-day approval</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-orange-600" />
                      <span className="text-sm">Insurance assistance</span>
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
                    <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                    <span className="text-sm">Age: 21-65 years</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                    <span className="text-sm">Minimum income: ₹25,000/month</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                    <span className="text-sm">Employment: Stable job/business</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                    <span className="text-sm">Valid driving license</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div } } className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calculator className="w-6 h-6 text-orange-600" />
                  Used Car Loan EMI Calculator
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
                <Button onClick={calculateEMI} className="w-full bg-orange-600 hover:bg-orange-700">
                  Calculate Used Car Loan EMI
                </Button>
                {emi > 0 && (
                  <div className="bg-orange-50 p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-orange-600">₹{emi.toLocaleString()}</div>
                    <div className="text-sm text-gray-600">Monthly EMI for Used Car</div>
                  </div>
                )}
              </CardContent>
            </Card>

            <Card className="bg-orange-50 border-orange-200">
              <CardContent className="pt-6">
                <h3 className="font-bold text-orange-900 mb-4 text-center">Apply for Used Car Loan</h3>
                <div className="space-y-3">
                  <Link href="/products/used-car-loan/apply">
                    <Button className="w-full bg-orange-600 hover:bg-orange-700">
                      <FileText className="w-4 h-4 mr-2" />
                      Apply for Used Car Loan Now
                    </Button>
                  </Link>
                  <div className="text-center text-sm text-gray-600">Get instant approval for used car financing</div>
                  <div className="flex gap-2">
                    <Button variant="outline" className="flex-1">
                      <Phone className="w-4 h-4 mr-2" />
                      Call Expert
                    </Button>
                    <Button variant="outline" className="flex-1">
                      <Mail className="w-4 h-4 mr-2" />
                      Get Quote
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Used Car Types Financed</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 bg-gray-50 rounded-lg text-center">
                    <div className="font-semibold">Hatchbacks</div>
                    <div className="text-sm text-gray-600">All brands</div>
                  </div>
                  <div className="p-3 bg-gray-50 rounded-lg text-center">
                    <div className="font-semibold">Sedans</div>
                    <div className="text-sm text-gray-600">Up to 7 years old</div>
                  </div>
                  <div className="p-3 bg-gray-50 rounded-lg text-center">
                    <div className="font-semibold">SUVs</div>
                    <div className="text-sm text-gray-600">Premium models</div>
                  </div>
                  <div className="p-3 bg-gray-50 rounded-lg text-center">
                    <div className="font-semibold">Luxury Cars</div>
                    <div className="text-sm text-gray-600">High-end vehicles</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
