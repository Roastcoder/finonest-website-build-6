"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Car, Calculator, FileText, CheckCircle, Star, Phone, ArrowRight, Shield, Clock, Award, Users, IndianRupee, TrendingUp, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import Head from "next/head"

export default function UsedCarLoanPage() {
  const [loanAmount, setLoanAmount] = useState(500000)
  const [tenure, setTenure] = useState(60)
  const [emi, setEmi] = useState(0)
  const [carValue, setCarValue] = useState("")

  const calculateEMI = () => {
    const rate = 8.5 / 100 / 12
    const emiValue = (loanAmount * rate * Math.pow(1 + rate, tenure)) / (Math.pow(1 + rate, tenure) - 1)
    setEmi(Math.round(emiValue))
  }

  const interestRates = [
    { category: "Excellent Credit (750+)", rate: "8.5% - 9.5%", processing: "0.5%" },
    { category: "Good Credit (700-749)", rate: "9.5% - 11.0%", processing: "1.0%" },
    { category: "Fair Credit (650-699)", rate: "11.0% - 13.0%", processing: "1.5%" },
    { category: "Self-Employed", rate: "10.0% - 14.0%", processing: "2.0%" }
  ]

  const eligibilityTable = [
    { criteria: "Age Limit", salaried: "21-65 years", selfEmployed: "25-65 years" },
    { criteria: "Minimum Income", salaried: "₹25,000/month", selfEmployed: "₹3 lakh/year" },
    { criteria: "Work Experience", salaried: "2+ years", selfEmployed: "3+ years business" },
    { criteria: "CIBIL Score", salaried: "650+", selfEmployed: "700+" },
    { criteria: "Car Age", salaried: "Up to 7 years", selfEmployed: "Up to 7 years" }
  ]

  const vehicleAgeRules = [
    { age: "0-2 years", loanAmount: "Up to 90%", maxTenure: "7 years" },
    { age: "2-4 years", loanAmount: "Up to 85%", maxTenure: "6 years" },
    { age: "4-6 years", loanAmount: "Up to 80%", maxTenure: "5 years" },
    { age: "6-7 years", loanAmount: "Up to 75%", maxTenure: "4 years" }
  ]

  const requiredDocuments = [
    "Identity Proof (Aadhaar, PAN, Passport)",
    "Address Proof (Utility bills, Rent agreement)",
    "Income Proof (Salary slips, ITR, Bank statements)",
    "Employment Proof (Offer letter, ID card)",
    "Car Registration Certificate (RC)",
    "Car Insurance Papers",
    "No Objection Certificate (NOC) from seller",
    "Car Valuation Report"
  ]

  const faqData = [
    {
      question: "What is the maximum loan amount for used car loans in India?",
      answer: "You can get up to ₹50 lakhs as used car loan depending on your income, CIBIL score, and the car's current market value. The loan amount typically ranges from 75-90% of the car's valuation."
    },
    {
      question: "What documents are required for used car loan application?",
      answer: "Essential documents include identity proof (Aadhaar, PAN), address proof, income proof (salary slips/ITR), bank statements, car RC, insurance papers, NOC from seller, and car valuation report."
    },
    {
      question: "Can I get a loan for a car older than 5 years?",
      answer: "Yes, we provide loans for pre-owned cars up to 7 years old from the date of manufacture. However, loan amount and tenure may vary based on the vehicle's age and condition."
    },
    {
      question: "How is used car loan amount calculated?",
      answer: "Loan amount is calculated based on the car's current market valuation, your monthly income, existing EMIs, CIBIL score, and repayment capacity. Typically, you can get 75-90% of the car's value."
    },
    {
      question: "What is RC transfer and why is it important?",
      answer: "RC (Registration Certificate) transfer is the legal process of changing vehicle ownership from seller to buyer. It's mandatory for loan approval and ensures legal ownership of the vehicle."
    },
    {
      question: "How does car valuation impact my loan amount?",
      answer: "Car valuation determines the maximum loan amount you can get. Professional valuers assess the car's condition, age, mileage, and market value to determine the loan-to-value ratio."
    }
  ]

  const schemaData = {
    "@context": "https://schema.org/",
    "@type": "FinancialService",
    "name": "Used Car Loan",
    "description": "Get instant used car loan approval with lowest interest rates starting @ 8.5%. Quick processing, minimal documentation for pre-owned car financing in India.",
    "provider": {
      "@type": "Organization",
      "name": "Finonest",
      "url": "https://finonest.com"
    },
    "areaServed": "India",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Used Car Loan Products",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "LoanOrCredit",
            "name": "Used Car Loan",
            "description": "Finance your pre-owned car with competitive interest rates"
          },
          "price": "8.5",
          "priceCurrency": "INR",
          "availability": "https://schema.org/InStock"
        }
      ]
    }
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://finonest.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Used Car Loan",
        "item": "https://finonest.com/used-car-loan"
      }
    ]
  }

  return (
    <>
      <Head>
        <title>Used Car Loan in India – Low Interest Rates &amp; Fast Approval | Finonest</title>
        <meta name="description" content="Get instant used car loan approval with lowest interest rates starting @ 8.5%. Quick processing, minimal documentation. Apply online for pre-owned car financing today!" />
        <meta name="keywords" content="used car loan, used car loan interest rate, second hand car loan, old car loan, pre owned car loan, used car finance, used car loan EMI calculator, used car loan in India, used car loan near me, RC transfer loan, car valuation for loan, loan against used car" />
        <meta property="og:title" content="Used Car Loan in India – Low Interest Rates & Fast Approval | Finonest" />
        <meta property="og:description" content="Get instant used car loan approval with lowest interest rates starting @ 8.5%. Quick processing, minimal documentation for pre-owned cars." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://finonest.com/used-car-loan" />
        <link rel="canonical" href="https://finonest.com/used-car-loan" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
      </Head>

      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }}>
                <h1 className="text-4xl lg:text-5xl font-bold mb-4">Used Car Loan in India – Finance Your Dream Pre-Owned Car</h1>
                <p className="text-xl mb-2">Get instant approval with competitive rates starting @ 8.5%</p>
                <p className="text-lg mb-6 opacity-90">Transform your dream of owning a car into reality with our hassle-free used car loan. Get up to 90% financing for pre-owned vehicles with quick processing and minimal documentation.</p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  <Badge variant="secondary" className="bg-white/20 text-white">✓ 24 Hour Approval</Badge>
                  <Badge variant="secondary" className="bg-white/20 text-white">✓ Cars up to 7 Years</Badge>
                  <Badge variant="secondary" className="bg-white/20 text-white">✓ RC Transfer Support</Badge>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                    <FileText className="w-5 h-5 mr-2" />
                    Apply for Used Car Loan
                  </Button>
                  <Link href="/used-car-loan/emi-calculator">
                    <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                      <Calculator className="w-5 h-5 mr-2" />
                      Calculate EMI
                    </Button>
                  </Link>
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} className="relative">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                  <h3 className="text-2xl font-bold mb-6">Quick Loan Details</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold">8.5%</div>
                      <div className="text-sm opacity-80">Interest Rate (p.a.)</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold">₹50L</div>
                      <div className="text-sm opacity-80">Max Amount</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold">24 Hrs</div>
                      <div className="text-sm opacity-80">Approval Time</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold">7 Years</div>
                      <div className="text-sm opacity-80">Max Tenure</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Interest Rates Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-4">Used Car Loan Interest Rates</h2>
            <p className="text-center text-gray-600 mb-12">Competitive interest rates based on your credit profile and employment type</p>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-blue-50">
                    <th className="border border-gray-300 p-4 text-left">Credit Category</th>
                    <th className="border border-gray-300 p-4 text-left">Interest Rate (p.a.)</th>
                    <th className="border border-gray-300 p-4 text-left">Processing Fee</th>
                  </tr>
                </thead>
                <tbody>
                  {interestRates.map((rate, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="border border-gray-300 p-4 font-medium">{rate.category}</td>
                      <td className="border border-gray-300 p-4 text-green-600 font-semibold">{rate.rate}</td>
                      <td className="border border-gray-300 p-4">{rate.processing}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-8 text-center">
              <Link href="/used-car-loan/interest-rates">
                <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                  View Detailed Interest Rates <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </section>

          {/* Eligibility Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-4">Used Car Loan Eligibility Criteria</h2>
            <p className="text-center text-gray-600 mb-12">Check if you meet our eligibility requirements for used car loan approval</p>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-blue-50">
                    <th className="border border-gray-300 p-4 text-left">Criteria</th>
                    <th className="border border-gray-300 p-4 text-left">Salaried</th>
                    <th className="border border-gray-300 p-4 text-left">Self-Employed</th>
                  </tr>
                </thead>
                <tbody>
                  {eligibilityTable.map((item, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="border border-gray-300 p-4 font-medium">{item.criteria}</td>
                      <td className="border border-gray-300 p-4">{item.salaried}</td>
                      <td className="border border-gray-300 p-4">{item.selfEmployed}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-8 text-center">
              <Link href="/used-car-loan/eligibility">
                <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                  Check Detailed Eligibility <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </section>

          {/* Vehicle Age Rules */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-4">Vehicle Age Eligibility Rules</h2>
            <p className="text-center text-gray-600 mb-12">Loan amount and tenure vary based on your car's age and condition</p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {vehicleAgeRules.map((rule, index) => (
                <Card key={index} className="border-2 hover:border-blue-300 transition-colors">
                  <CardContent className="p-6 text-center">
                    <div className="text-2xl font-bold text-blue-600 mb-2">{rule.age}</div>
                    <div className="space-y-2">
                      <div className="text-sm text-gray-600">Loan Amount</div>
                      <div className="font-semibold">{rule.loanAmount}</div>
                      <div className="text-sm text-gray-600">Max Tenure</div>
                      <div className="font-semibold">{rule.maxTenure}</div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* EMI Calculator */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-4">Used Car Loan EMI Calculator</h2>
            <p className="text-center text-gray-600 mb-12">Calculate your monthly EMI instantly with our advanced calculator</p>
            
            <div className="grid lg:grid-cols-2 gap-12">
              <Card className="border-2 border-blue-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calculator className="w-6 h-6 text-blue-600" />
                    Calculate Your EMI
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Loan Amount (₹)</label>
                    <Input 
                      type="number"
                      value={loanAmount}
                      onChange={(e) => setLoanAmount(Number(e.target.value))}
                      placeholder="Enter loan amount"
                      className="text-lg"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Tenure (months)</label>
                    <Input 
                      type="number"
                      value={tenure}
                      onChange={(e) => setTenure(Number(e.target.value))}
                      placeholder="Enter tenure in months"
                      className="text-lg"
                    />
                  </div>
                  <Button onClick={calculateEMI} className="w-full bg-blue-600 hover:bg-blue-700 text-lg py-3">
                    Calculate EMI
                  </Button>
                  {emi > 0 && (
                    <div className="bg-blue-50 p-6 rounded-lg text-center border-2 border-blue-200">
                      <div className="text-3xl font-bold text-blue-600">₹{emi.toLocaleString()}</div>
                      <div className="text-sm text-gray-600">Monthly EMI</div>
                      <div className="text-xs text-gray-500 mt-2">*Interest rate: 8.5% p.a.</div>
                    </div>
                  )}
                </CardContent>
              </Card>

              <Card className="border-2 border-green-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Car className="w-6 h-6 text-green-600" />
                    Car Valuation Tool
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Car Registration Number</label>
                    <Input 
                      type="text"
                      value={carValue}
                      onChange={(e) => setCarValue(e.target.value)}
                      placeholder="Enter RC number (e.g., DL01AB1234)"
                      className="text-lg"
                    />
                  </div>
                  <Link href="/used-car-loan/car-valuation">
                    <Button className="w-full bg-green-600 hover:bg-green-700 text-lg py-3">
                      Get Car Valuation
                    </Button>
                  </Link>
                  <div className="text-sm text-gray-600 space-y-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      Instant market-based valuation
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      Factors in age, mileage & condition
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      Free unlimited valuations
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8 text-center">
              <Link href="/used-car-loan/emi-calculator">
                <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                  Advanced EMI Calculator <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </section>

          {/* Documents Required */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-4">Used Car Loan Documents Required</h2>
            <p className="text-center text-gray-600 mb-12">Complete list of documents needed for quick loan approval</p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="w-6 h-6 text-blue-600" />
                    Required Documents
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {requiredDocuments.map((doc, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{doc}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-blue-50 border-blue-200">
                <CardHeader>
                  <CardTitle className="text-blue-800">RC Transfer Process</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4 text-sm">
                    <p className="font-medium text-blue-800">What is RC Transfer?</p>
                    <p>RC (Registration Certificate) transfer is the legal process of changing vehicle ownership from seller to buyer. It's mandatory for loan approval.</p>
                    
                    <p className="font-medium text-blue-800 mt-4">Why is it Important?</p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                        Legal ownership proof
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                        Required for loan approval
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                        Insurance claim eligibility
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8 text-center">
              <Link href="/used-car-loan/documents">
                <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                  Complete Document Guide <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </section>

          {/* Why Choose Finonest */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose Finonest for Used Car Loan?</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: <Award className="w-8 h-8 text-blue-600" />,
                  title: "Lowest Interest Rates",
                  description: "Starting from 8.5% per annum with flexible repayment options"
                },
                {
                  icon: <Clock className="w-8 h-8 text-blue-600" />,
                  title: "Quick Approval",
                  description: "Get loan approval within 24 hours with minimal documentation"
                },
                {
                  icon: <Shield className="w-8 h-8 text-blue-600" />,
                  title: "Up to 90% Financing",
                  description: "Finance up to 90% of your used car's current market value"
                },
                {
                  icon: <Users className="w-8 h-8 text-blue-600" />,
                  title: "Expert Support",
                  description: "Dedicated relationship manager for complete loan assistance"
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="text-center h-full hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        {feature.icon}
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
            <div className="max-w-4xl mx-auto">
              <Accordion type="single" collapsible>
                {faqData.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left font-medium">{faq.question}</AccordionTrigger>
                    <AccordionContent className="text-gray-600">{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            <div className="mt-8 text-center">
              <Link href="/used-car-loan/faq">
                <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                  View All FAQs <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <Card className="bg-gradient-to-r from-blue-600 to-blue-800 text-white border-0">
              <CardContent className="p-12">
                <h2 className="text-3xl font-bold mb-4">Ready to Buy Your Dream Used Car?</h2>
                <p className="text-xl mb-8">Get instant approval with competitive interest rates starting @ 8.5%</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                    <FileText className="w-5 h-5 mr-2" />
                    Apply for Used Car Loan
                  </Button>
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                    <Phone className="w-5 h-5 mr-2" />
                    Call Expert: 1800-123-4567
                  </Button>
                </div>
                
                <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4" />
                    No Hidden Charges
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4" />
                    Doorstep Service
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4" />
                    RC Transfer Support
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>
      </div>
    </>
  )
}