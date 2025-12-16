"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { TrendingDown, Calculator, ArrowRight, CheckCircle } from "lucide-react"
import Link from "next/link"
import Head from "next/head"

export default function UsedCarLoanInterestRatesPage() {
  const detailedRates = [
    {
      category: "Excellent Credit Score (750+)",
      salaried: "8.5% - 9.5%",
      selfEmployed: "9.0% - 10.0%",
      processing: "0.5%",
      features: ["Lowest rates", "Quick approval", "Minimal documentation"]
    },
    {
      category: "Good Credit Score (700-749)",
      salaried: "9.5% - 11.0%",
      selfEmployed: "10.0% - 11.5%",
      processing: "1.0%",
      features: ["Competitive rates", "Standard processing", "Regular documentation"]
    },
    {
      category: "Fair Credit Score (650-699)",
      salaried: "11.0% - 13.0%",
      selfEmployed: "11.5% - 13.5%",
      processing: "1.5%",
      features: ["Moderate rates", "Additional verification", "Complete documentation"]
    },
    {
      category: "Building Credit (600-649)",
      salaried: "13.0% - 15.0%",
      selfEmployed: "13.5% - 15.5%",
      processing: "2.0%",
      features: ["Higher rates", "Detailed assessment", "Comprehensive documentation"]
  ]

  const factorsAffectingRates = [
    {
      factor: "Credit Score (CIBIL)",
      impact: "High",
      description: "Higher credit score leads to lower interest rates"
    },
    {
      factor: "Employment Type",
      impact: "Medium",
      description: "Salaried employees typically get better rates than self-employed"
    },
    {
      factor: "Income Level",
      impact: "Medium",
      description: "Higher income demonstrates better repayment capacity"
    },
    {
      factor: "Car Age & Condition",
      impact: "Medium",
      description: "Newer cars in better condition qualify for lower rates"
    },
    {
      factor: "Loan Amount",
      impact: "Low",
      description: "Higher loan amounts may qualify for slightly better rates"
    },
    {
      factor: "Existing Relationship",
      impact: "Low",
      description: "Existing customers may get preferential rates"
  ]

  return (
    <>
      <Head>
        <title>Used Car Loan Interest Rates 2024 - Compare Best Rates | Finonest</title>
        <meta name="description" content="Compare used car loan interest rates starting @ 8.5%. Get the best rates based on your credit score and employment type. Check detailed rate chart." />
        <meta name="keywords" content="used car loan interest rate, used car loan rates 2024, second hand car loan interest rate, pre owned car loan rates, car loan interest rates comparison" />
        <link rel="canonical" href="https://finonest.com/used-car-loan/interest-rates" />
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
              <span className="text-gray-600">Interest Rates</span>
            </nav>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Used Car Loan Interest Rates 2024</h1>
            <p className="text-xl text-gray-600 mb-6">Compare the best used car loan interest rates starting @ 8.5% based on your credit profile</p>
            <Badge variant="secondary" className="bg-green-100 text-green-800 text-lg px-4 py-2">
              <TrendingDown className="w-5 h-5 mr-2" />
              Rates Starting @ 8.5% p.a.
            </Badge>
          </div>

          {/* Detailed Rate Chart */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Detailed Interest Rate Chart</h2>
            <div className="space-y-6">
              {detailedRates.map((rate, index) => (
                <Card key={index} className="border-2 hover:border-blue-300 transition-colors">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <span>{rate.category}</span>
                      <Badge variant="outline" className="text-green-600 border-green-600">
                        Processing: {rate.processing}
                      </Badge>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-3 gap-6">
                      <div>
                        <h4 className="font-semibold mb-2">Salaried Employees</h4>
                        <div className="text-2xl font-bold text-blue-600">{rate.salaried}</div>
                        <div className="text-sm text-gray-600">per annum</div>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Self-Employed</h4>
                        <div className="text-2xl font-bold text-blue-600">{rate.selfEmployed}</div>
                        <div className="text-sm text-gray-600">per annum</div>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Key Features</h4>
                        <div className="space-y-1">
                          {rate.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center gap-2 text-sm">
                              <CheckCircle className="w-4 h-4 text-green-600" />
                              {feature}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Factors Affecting Rates */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Factors Affecting Used Car Loan Interest Rates</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {factorsAffectingRates.map((factor, index) => (
                <Card key={index} className="h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-semibold">{factor.factor}</h3>
                      <Badge 
                        variant={factor.impact === 'High' ? 'destructive' : factor.impact === 'Medium' ? 'default' : 'secondary'}
                      >
                        {factor.impact} Impact
                      </Badge>
                    </div>
                    <p className="text-sm text-gray-600">{factor.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Rate Comparison Tips */}
          <section className="mb-16">
            <Card className="bg-blue-50 border-blue-200">
              <CardHeader>
                <CardTitle className="text-blue-800">Tips to Get the Best Used Car Loan Interest Rates</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                      <div>
                        <h4 className="font-semibold">Maintain Good Credit Score</h4>
                        <p className="text-sm text-gray-600">Keep your CIBIL score above 750 for the best rates</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                      <div>
                        <h4 className="font-semibold">Choose Newer Cars</h4>
                        <p className="text-sm text-gray-600">Cars under 3 years old get better interest rates</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                      <div>
                        <h4 className="font-semibold">Higher Down Payment</h4>
                        <p className="text-sm text-gray-600">Larger down payment reduces risk and rates</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                      <div>
                        <h4 className="font-semibold">Stable Employment</h4>
                        <p className="text-sm text-gray-600">2+ years of stable employment history helps</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                      <div>
                        <h4 className="font-semibold">Compare Multiple Lenders</h4>
                        <p className="text-sm text-gray-600">Shop around for the best rates and terms</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                      <div>
                        <h4 className="font-semibold">Negotiate Processing Fees</h4>
                        <p className="text-sm text-gray-600">Ask for waiver or reduction in processing fees</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <Card className="bg-gradient-to-r from-blue-600 to-blue-800 text-white border-0">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4">Get the Best Used Car Loan Interest Rates</h2>
                <p className="text-lg mb-6">Apply now and get personalized interest rates based on your profile</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/used-car-loan">
                    <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                      Apply for Used Car Loan
                    </Button>
                  </Link>
                  <Link href="/used-car-loan/emi-calculator">
                    <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                      <Calculator className="w-5 h-5 mr-2" />
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
