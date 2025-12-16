"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Slider } from "@/components/ui/slider"
import { Calculator, TrendingUp, PieChart, ArrowRight, Download } from "lucide-react"
import Link from "next/link"
import Head from "next/head"

export default function UsedCarLoanEMICalculatorPage() {
  const [loanAmount, setLoanAmount] = useState([500000])
  const [interestRate, setInterestRate] = useState([8.5])
  const [tenure, setTenure] = useState([60])
  const [emi, setEmi] = useState(0)
  const [totalInterest, setTotalInterest] = useState(0)
  const [totalAmount, setTotalAmount] = useState(0)

  const calculateEMI = () => {
    const principal = loanAmount[0]
    const rate = interestRate[0] / 100 / 12
    const months = tenure[0]
    
    const emiValue = (principal * rate * Math.pow(1 + rate, months)) / (Math.pow(1 + rate, months) - 1)
    const totalAmountValue = emiValue * months
    const totalInterestValue = totalAmountValue - principal
    
    setEmi(Math.round(emiValue))
    setTotalInterest(Math.round(totalInterestValue))
    setTotalAmount(Math.round(totalAmountValue))
  }

  useEffect(() => {
    calculateEMI()
  }, [loanAmount, interestRate, tenure])

  const emiBreakdown = [
    { year: 1, principal: Math.round(emi * 12 * 0.3), interest: Math.round(emi * 12 * 0.7) },
    { year: 2, principal: Math.round(emi * 12 * 0.35), interest: Math.round(emi * 12 * 0.65) },
    { year: 3, principal: Math.round(emi * 12 * 0.4), interest: Math.round(emi * 12 * 0.6) },
    { year: 4, principal: Math.round(emi * 12 * 0.45), interest: Math.round(emi * 12 * 0.55) },
    { year: 5, principal: Math.round(emi * 12 * 0.5), interest: Math.round(emi * 12 * 0.5) }
  ]

  const comparisonData = [
    { bank: "Finonest", rate: "8.5%", emi: emi, processing: "0.5%" },
    { bank: "Bank A", rate: "9.2%", emi: Math.round(emi * 1.08), processing: "1.0%" },
    { bank: "Bank B", rate: "10.1%", emi: Math.round(emi * 1.18), processing: "1.5%" },
    { bank: "Bank C", rate: "11.0%", emi: Math.round(emi * 1.28), processing: "2.0%" }
  ]

  const tips = [
    {
      title: "Choose Optimal Loan Amount",
      description: "Borrow only what you need. Higher loan amounts mean higher EMIs and interest payments."
    },
    {
      title: "Compare Interest Rates",
      description: "Even a 0.5% difference in interest rate can save thousands over the loan tenure."
    },
    {
      title: "Select Right Tenure",
      description: "Longer tenure means lower EMI but higher total interest. Find the right balance."
    },
    {
      title: "Make Prepayments",
      description: "Prepay when possible to reduce interest burden and close loan early."
    }
  ]

  return (
    <>
      <Head>
        <title>Used Car Loan EMI Calculator - Calculate Monthly EMI Online | Finonest</title>
        <meta name="description" content="Calculate used car loan EMI instantly with our advanced calculator. Check monthly EMI, total interest, and payment schedule. Compare rates from multiple lenders." />
        <meta name="keywords" content="used car loan EMI calculator, used car loan calculator, second hand car loan EMI, pre owned car loan calculator, car loan EMI calculation" />
        <link rel="canonical" href="https://finonest.com/used-car-loan/emi-calculator" />
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
              <span className="text-gray-600">EMI Calculator</span>
            </nav>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Used Car Loan EMI Calculator</h1>
            <p className="text-xl text-gray-600 mb-6">Calculate your monthly EMI, total interest, and payment schedule instantly</p>
          </div>

          {/* EMI Calculator */}
          <section className="mb-16">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Calculator Inputs */}
              <Card className="border-2 border-blue-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calculator className="w-6 h-6 text-blue-600" />
                    EMI Calculator
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-8">
                  <div>
                    <div className="flex justify-between items-center mb-4">
                      <label className="text-sm font-medium">Loan Amount</label>
                      <div className="text-lg font-semibold text-blue-600">₹{loanAmount[0].toLocaleString()}</div>
                    </div>
                    <Slider
                      value={loanAmount}
                      onValueChange={setLoanAmount}
                      max={5000000}
                      min={100000}
                      step={50000}
                      className="w-full"
                    />
                    <div className="flex justify-between text-xs text-gray-500 mt-2">
                      <span>₹1L</span>
                      <span>₹50L</span>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-4">
                      <label className="text-sm font-medium">Interest Rate (% p.a.)</label>
                      <div className="text-lg font-semibold text-blue-600">{interestRate[0]}%</div>
                    </div>
                    <Slider
                      value={interestRate}
                      onValueChange={setInterestRate}
                      max={20}
                      min={8}
                      step={0.1}
                      className="w-full"
                    />
                    <div className="flex justify-between text-xs text-gray-500 mt-2">
                      <span>8%</span>
                      <span>20%</span>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-4">
                      <label className="text-sm font-medium">Loan Tenure</label>
                      <div className="text-lg font-semibold text-blue-600">{tenure[0]} months ({Math.round(tenure[0]/12)} years)</div>
                    </div>
                    <Slider
                      value={tenure}
                      onValueChange={setTenure}
                      max={84}
                      min={12}
                      step={6}
                      className="w-full"
                    />
                    <div className="flex justify-between text-xs text-gray-500 mt-2">
                      <span>1 year</span>
                      <span>7 years</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4 pt-4">
                    <Input
                      type="number"
                      placeholder="Loan Amount"
                      value={loanAmount[0]}
                      onChange={(e) => setLoanAmount([Number(e.target.value)])}
                      className="text-center"
                    />
                    <Input
                      type="number"
                      placeholder="Interest Rate"
                      value={interestRate[0]}
                      onChange={(e) => setInterestRate([Number(e.target.value)])}
                      className="text-center"
                      step="0.1"
                    />
                    <Input
                      type="number"
                      placeholder="Tenure (months)"
                      value={tenure[0]}
                      onChange={(e) => setTenure([Number(e.target.value)])}
                      className="text-center"
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Results */}
              <Card className="border-2 border-green-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="w-6 h-6 text-green-600" />
                    EMI Calculation Results
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 gap-6">
                    <div className="bg-blue-50 p-6 rounded-lg text-center border-2 border-blue-200">
                      <div className="text-3xl font-bold text-blue-600">₹{emi.toLocaleString()}</div>
                      <div className="text-sm text-gray-600">Monthly EMI</div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-green-50 p-4 rounded-lg text-center border border-green-200">
                        <div className="text-xl font-bold text-green-600">₹{loanAmount[0].toLocaleString()}</div>
                        <div className="text-xs text-gray-600">Principal Amount</div>
                      </div>
                      <div className="bg-orange-50 p-4 rounded-lg text-center border border-orange-200">
                        <div className="text-xl font-bold text-orange-600">₹{totalInterest.toLocaleString()}</div>
                        <div className="text-xs text-gray-600">Total Interest</div>
                      </div>
                    </div>
                    
                    <div className="bg-purple-50 p-4 rounded-lg text-center border border-purple-200">
                      <div className="text-2xl font-bold text-purple-600">₹{totalAmount.toLocaleString()}</div>
                      <div className="text-sm text-gray-600">Total Amount Payable</div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-semibold">Payment Breakdown</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Principal Amount:</span>
                        <span className="font-medium">₹{loanAmount[0].toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Total Interest:</span>
                        <span className="font-medium">₹{totalInterest.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between text-sm border-t pt-2">
                        <span className="font-semibold">Total Payable:</span>
                        <span className="font-semibold">₹{totalAmount.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button className="flex-1 bg-green-600 hover:bg-green-700">
                      <Download className="w-4 h-4 mr-2" />
                      Download Report
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* EMI Breakdown Chart */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Year-wise EMI Breakdown</h2>
            <Card>
              <CardContent className="p-8">
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-blue-50">
                        <th className="border border-gray-300 p-4 text-left">Year</th>
                        <th className="border border-gray-300 p-4 text-left">Principal (₹)</th>
                        <th className="border border-gray-300 p-4 text-left">Interest (₹)</th>
                        <th className="border border-gray-300 p-4 text-left">Total EMI (₹)</th>
                        <th className="border border-gray-300 p-4 text-left">Balance (₹)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {emiBreakdown.map((row, index) => {
                        const balance = loanAmount[0] - (row.principal * row.year)
                        return (
                          <tr key={index} className="hover:bg-gray-50">
                            <td className="border border-gray-300 p-4 font-medium">{row.year}</td>
                            <td className="border border-gray-300 p-4">₹{row.principal.toLocaleString()}</td>
                            <td className="border border-gray-300 p-4">₹{row.interest.toLocaleString()}</td>
                            <td className="border border-gray-300 p-4 font-semibold">₹{(row.principal + row.interest).toLocaleString()}</td>
                            <td className="border border-gray-300 p-4">₹{Math.max(0, balance).toLocaleString()}</td>
                          </tr>
                        )
                      })}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Rate Comparison */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">EMI Comparison Across Lenders</h2>
            <Card>
              <CardContent className="p-8">
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-blue-50">
                        <th className="border border-gray-300 p-4 text-left">Lender</th>
                        <th className="border border-gray-300 p-4 text-left">Interest Rate</th>
                        <th className="border border-gray-300 p-4 text-left">Monthly EMI</th>
                        <th className="border border-gray-300 p-4 text-left">Processing Fee</th>
                        <th className="border border-gray-300 p-4 text-left">Savings vs Others</th>
                      </tr>
                    </thead>
                    <tbody>
                      {comparisonData.map((lender, index) => (
                        <tr key={index} className={`hover:bg-gray-50 ${index === 0 ? 'bg-green-50' : ''}`}>
                          <td className="border border-gray-300 p-4 font-medium">
                            {lender.bank}
                            {index === 0 && <span className="ml-2 text-xs bg-green-600 text-white px-2 py-1 rounded">Best Rate</span>}
                          </td>
                          <td className="border border-gray-300 p-4">{lender.rate}</td>
                          <td className="border border-gray-300 p-4 font-semibold">₹{lender.emi.toLocaleString()}</td>
                          <td className="border border-gray-300 p-4">{lender.processing}</td>
                          <td className="border border-gray-300 p-4">
                            {index === 0 ? (
                              <span className="text-green-600 font-medium">Lowest EMI</span>
                            ) : (
                              <span className="text-red-600">+₹{(lender.emi - emi).toLocaleString()}/month</span>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* EMI Tips */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Tips to Reduce Your EMI</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {tips.map((tip, index) => (
                <Card key={index} className="h-full">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg mb-3 text-blue-800">{tip.title}</h3>
                    <p className="text-gray-600">{tip.description}</p>
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
                <p className="text-lg mb-6">Get the EMI you calculated with our competitive interest rates</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/used-car-loan">
                    <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                      Apply for Used Car Loan <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                  <Link href="/used-car-loan/eligibility">
                    <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                      Check Eligibility
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
}