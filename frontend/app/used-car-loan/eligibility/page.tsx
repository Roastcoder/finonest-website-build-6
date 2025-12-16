"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, XCircle, User, Briefcase, CreditCard, Car, ArrowRight } from "lucide-react"
import Link from "next/link"
import Head from "next/head"

export default function UsedCarLoanEligibilityPage() {
  const [eligibilityData, setEligibilityData] = useState({
    age: "",
    employment: "",
    income: "",
    cibilScore: "",
    carAge: ""
  })
  const [eligibilityResult, setEligibilityResult] = useState<string | null>(null)

  const checkEligibility = () => {
    const { age, employment, income, cibilScore, carAge } = eligibilityData
    
    if (!age || !employment || !income || !cibilScore || !carAge) {
      setEligibilityResult("incomplete")
      return

    const ageNum = parseInt(age)
    const incomeNum = parseInt(income)
    const cibilNum = parseInt(cibilScore)
    const carAgeNum = parseInt(carAge)

    let eligible = true
    let issues = []

    // Age check
    if (employment === "salaried" && (ageNum < 21 || ageNum > 65)) {
      eligible = false
      issues.push("Age should be between 21-65 years for salaried")
    if (employment === "self-employed" && (ageNum < 25 || ageNum > 65)) {
      eligible = false
      issues.push("Age should be between 25-65 years for self-employed")

    // Income check
    if (employment === "salaried" && incomeNum < 25000) {
      eligible = false
      issues.push("Minimum income should be ₹25,000/month for salaried")
    if (employment === "self-employed" && incomeNum < 300000) {
      eligible = false
      issues.push("Minimum income should be ₹3 lakh/year for self-employed")

    // CIBIL check
    if (cibilNum < 650) {
      eligible = false
      issues.push("CIBIL score should be 650 or above")

    // Car age check
    if (carAgeNum > 7) {
      eligible = false
      issues.push("Car should not be older than 7 years")

    setEligibilityResult(eligible ? "eligible" : "not-eligible")

  const eligibilityCriteria = [
    {
      category: "Age Requirements",
      salaried: "21-65 years",
      selfEmployed: "25-65 years",
      icon: <User className="w-6 h-6 text-blue-600" />
    },
    {
      category: "Minimum Income",
      salaried: "₹25,000/month",
      selfEmployed: "₹3 lakh/year",
      icon: <Briefcase className="w-6 h-6 text-blue-600" />
    },
    {
      category: "Work Experience",
      salaried: "2+ years current job",
      selfEmployed: "3+ years business",
      icon: <Briefcase className="w-6 h-6 text-blue-600" />
    },
    {
      category: "Credit Score",
      salaried: "650+ (preferred 750+)",
      selfEmployed: "700+ (preferred 750+)",
      icon: <CreditCard className="w-6 h-6 text-blue-600" />
    },
    {
      category: "Vehicle Age",
      salaried: "Up to 7 years old",
      selfEmployed: "Up to 7 years old",
      icon: <Car className="w-6 h-6 text-blue-600" />
  ]

  const additionalRequirements = [
    "Indian citizen or NRI",
    "Permanent address proof",
    "Valid driving license",
    "No default history in last 12 months",
    "Debt-to-income ratio below 50%",
    "Car should be registered in India"
  ]

  const improveTips = [
    {
      title: "Improve Your Credit Score",
      tips: [
        "Pay all EMIs and credit card bills on time",
        "Keep credit utilization below 30%",
        "Don't close old credit cards",
        "Check credit report regularly for errors"
      ]
    },
    {
      title: "Increase Your Income",
      tips: [
        "Include all sources of income",
        "Add spouse's income as co-applicant",
        "Show rental income with proper documentation",
        "Include bonus and incentives"
      ]
    },
    {
      title: "Choose the Right Car",
      tips: [
        "Select cars under 5 years for better rates",
        "Choose popular models with good resale value",
        "Ensure proper maintenance records",
        "Get professional car valuation"
      ]
  ]

  return (
    <>
      <Head>
        <title>Used Car Loan Eligibility Criteria & Checker - Check Now | Finonest</title>
        <meta name="description" content="Check used car loan eligibility criteria instantly. Age, income, CIBIL score requirements for salaried & self-employed. Free eligibility checker tool." />
        <meta name="keywords" content="used car loan eligibility, used car loan eligibility criteria, check used car loan eligibility, used car loan requirements, second hand car loan eligibility" />
        <link rel="canonical" href="https://finonest.com/used-car-loan/eligibility" />
      </Head>

      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        {/* Breadcrumb */}
        <div className="bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <nav className="text-sm">
              <Link href="/" className="text-blue-600 hover:underline">Home</Link>
              <span className="mx-2">/</span>
              <Link href="/used-car-loan" className="text-blue-600 hover:underline">Used Car Loan</Link>
              <span className="mx-2">/</span>
              <span className="text-gray-600">Eligibility</span>
            </nav>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Used Car Loan Eligibility Criteria</h1>
            <p className="text-xl text-gray-600 mb-6">Check if you meet the eligibility requirements for used car loan approval</p>
            <Badge variant="secondary" className="bg-green-100 text-green-800 text-lg px-4 py-2">
              <CheckCircle className="w-5 h-5 mr-2" />
              Instant Eligibility Check
            </Badge>
          </div>

          {/* Eligibility Checker */}
          <section className="mb-16">
            <Card className="border-2 border-blue-200">
              <CardHeader>
                <CardTitle className="text-center text-2xl">Check Your Used Car Loan Eligibility</CardTitle>
                <p className="text-center text-gray-600">Get instant eligibility status in seconds</p>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Your Age</label>
                    <Input
                      type="number"
                      placeholder="Enter your age"
                      value={eligibilityData.age}
                      onChange={(e) => setEligibilityData({...eligibilityData, age: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Employment Type</label>
                    <Select value={eligibilityData.employment} onValueChange={(value) => setEligibilityData({...eligibilityData, employment: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select employment" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="salaried">Salaried</SelectItem>
                        <SelectItem value="self-employed">Self-Employed</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Monthly Income (₹)</label>
                    <Input
                      type="number"
                      placeholder="Enter monthly income"
                      value={eligibilityData.income}
                      onChange={(e) => setEligibilityData({...eligibilityData, income: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">CIBIL Score</label>
                    <Input
                      type="number"
                      placeholder="Enter CIBIL score"
                      value={eligibilityData.cibilScore}
                      onChange={(e) => setEligibilityData({...eligibilityData, cibilScore: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Car Age (Years)</label>
                    <Input
                      type="number"
                      placeholder="Enter car age"
                      value={eligibilityData.carAge}
                      onChange={(e) => setEligibilityData({...eligibilityData, carAge: e.target.value})}
                    />
                  </div>
                  <div className="flex items-end">
                    <Button onClick={checkEligibility} className="w-full bg-blue-600 hover:bg-blue-700">
                      Check Eligibility
                    </Button>
                  </div>
                </div>

                {eligibilityResult && (
                  <div className={`p-6 rounded-lg text-center ${
                    eligibilityResult === "eligible" ? "bg-green-50 border-2 border-green-200" :
                    eligibilityResult === "not-eligible" ? "bg-red-50 border-2 border-red-200" :
                    "bg-yellow-50 border-2 border-yellow-200"
                  }`}>
                    {eligibilityResult === "eligible" && (
                      <>
                        <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-4" />
                        <h3 className="text-2xl font-bold text-green-800 mb-2">Congratulations! You're Eligible</h3>
                        <p className="text-green-700 mb-4">You meet all the basic eligibility criteria for used car loan</p>
                        <Link href="/used-car-loan">
                          <Button className="bg-green-600 hover:bg-green-700">
                            Apply for Used Car Loan <ArrowRight className="w-4 h-4 ml-2" />
                          </Button>
                        </Link>
                      </>
                    )}
                    {eligibilityResult === "not-eligible" && (
                      <>
                        <XCircle className="w-12 h-12 text-red-600 mx-auto mb-4" />
                        <h3 className="text-2xl font-bold text-red-800 mb-2">Not Eligible Currently</h3>
                        <p className="text-red-700 mb-4">You don't meet some eligibility criteria. Check improvement tips below.</p>
                      </>
                    )}
                    {eligibilityResult === "incomplete" && (
                      <>
                        <div className="w-12 h-12 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                          <span className="text-white font-bold">!</span>
                        </div>
                        <h3 className="text-2xl font-bold text-yellow-800 mb-2">Incomplete Information</h3>
                        <p className="text-yellow-700">Please fill all fields to check your eligibility</p>
                      </>
                    )}
                  </div>
                )}
              </CardContent>
            </Card>
          </section>

          {/* Detailed Eligibility Criteria */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Detailed Eligibility Criteria</h2>
            <div className="space-y-6">
              {eligibilityCriteria.map((criteria, index) => (
                <Card key={index} className="border-2 hover:border-blue-300 transition-colors">
                  <CardContent className="p-6">
                    <div className="grid md:grid-cols-4 gap-6 items-center">
                      <div className="flex items-center gap-3">
                        {criteria.icon}
                        <h3 className="font-semibold text-lg">{criteria.category}</h3>
                      </div>
                      <div>
                        <h4 className="font-medium text-blue-600 mb-1">Salaried</h4>
                        <p className="text-gray-700">{criteria.salaried}</p>
                      </div>
                      <div>
                        <h4 className="font-medium text-blue-600 mb-1">Self-Employed</h4>
                        <p className="text-gray-700">{criteria.selfEmployed}</p>
                      </div>
                      <div className="text-center">
                        <CheckCircle className="w-8 h-8 text-green-600 mx-auto" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Additional Requirements */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Additional Requirements</h2>
            <Card>
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {additionalRequirements.map((requirement, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span>{requirement}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Improvement Tips */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">How to Improve Your Eligibility</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {improveTips.map((section, index) => (
                <Card key={index} className="h-full">
                  <CardHeader>
                    <CardTitle className="text-blue-800">{section.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {section.tips.map((tip, tipIndex) => (
                        <div key={tipIndex} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{tip}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <Card className="bg-gradient-to-r from-blue-600 to-blue-800 text-white border-0">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4">Ready to Apply for Used Car Loan?</h2>
                <p className="text-lg mb-6">Check your eligibility and get instant approval with competitive rates</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/used-car-loan">
                    <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                      Apply for Used Car Loan
                    </Button>
                  </Link>
                  <Link href="/used-car-loan/emi-calculator">
                    <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                      Calculate EMI
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>
      </div>
    </>
  )
