"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Car, Search, TrendingUp, MapPin, Calendar, Gauge, ArrowRight, CheckCircle } from "lucide-react"
import Link from "next/link"
import Head from "next/head"

export default function UsedCarValuationPage() {
  const [valuationData, setValuationData] = useState({
    rcNumber: "",
    brand: "",
    model: "",
    year: "",
    kmDriven: "",
    fuelType: "",
    city: "",
    condition: ""
  })
  const [valuationResult, setValuationResult] = useState<any>(null)
  const [loading, setLoading] = useState(false)

  const getCarValuation = async () => {
    setLoading(true)
    // Simulate API call
    setTimeout(() => {
      const baseValue = 500000
      const yearFactor = (2024 - parseInt(valuationData.year)) * 0.1
      const kmFactor = parseInt(valuationData.kmDriven) / 100000 * 0.2
      const conditionFactor = valuationData.condition === "excellent" ? 0 : 
                             valuationData.condition === "good" ? 0.1 : 
                             valuationData.condition === "fair" ? 0.2 : 0.3
      
      const estimatedValue = Math.round(baseValue * (1 - yearFactor - kmFactor - conditionFactor))
      const loanAmount = Math.round(estimatedValue * 0.85) // 85% of car value
      
      setValuationResult({
        marketValue: estimatedValue,
        loanAmount: loanAmount,
        brand: valuationData.brand,
        model: valuationData.model,
        year: valuationData.year,
        depreciation: Math.round(baseValue - estimatedValue)
      })
      setLoading(false)
    }, 2000)

  const valuationFactors = [
    {
      factor: "Vehicle Age",
      impact: "High",
      description: "Newer cars have higher market value and better loan eligibility",
      icon: <Calendar className="w-6 h-6 text-blue-600" />
    },
    {
      factor: "Kilometers Driven",
      impact: "High", 
      description: "Lower mileage vehicles command better prices in the market",
      icon: <Gauge className="w-6 h-6 text-blue-600" />
    },
    {
      factor: "Vehicle Condition",
      impact: "High",
      description: "Well-maintained cars with service records get premium valuation",
      icon: <Car className="w-6 h-6 text-blue-600" />
    },
    {
      factor: "Brand & Model",
      impact: "Medium",
      description: "Popular brands with good resale value get better pricing",
      icon: <TrendingUp className="w-6 h-6 text-blue-600" />
    },
    {
      factor: "Location",
      impact: "Medium",
      description: "Metro cities typically have higher car valuations",
      icon: <MapPin className="w-6 h-6 text-blue-600" />
    },
    {
      factor: "Market Demand",
      impact: "Medium",
      description: "High-demand models maintain better resale values",
      icon: <Search className="w-6 h-6 text-blue-600" />
  ]

  const valuationTips = [
    "Get professional inspection done before valuation",
    "Maintain complete service records and documents",
    "Clean and detail your car before valuation",
    "Fix minor issues that can affect valuation",
    "Get multiple valuations for better accuracy",
    "Consider market timing for better prices"
  ]

  const popularBrands = [
    { brand: "Maruti Suzuki", models: ["Swift", "Baleno", "Dzire", "Alto", "Wagon R"] },
    { brand: "Hyundai", models: ["i20", "Creta", "Verna", "Grand i10", "Santro"] },
    { brand: "Tata", models: ["Nexon", "Harrier", "Tiago", "Altroz", "Safari"] },
    { brand: "Mahindra", models: ["XUV500", "Scorpio", "Bolero", "XUV300", "Thar"] },
    { brand: "Honda", models: ["City", "Amaze", "Jazz", "WR-V", "CR-V"] },
    { brand: "Toyota", models: ["Innova", "Fortuner", "Etios", "Corolla", "Camry"] }
  ]

  return (
    <>
      <Head>
        <title>Used Car Valuation Tool - Get Instant Car Value for Loan | Finonest</title>
        <meta name="description" content="Get instant used car valuation for loan approval. Free car value calculator based on age, mileage, condition. Check loan amount eligibility instantly." />
        <meta name="keywords" content="car valuation for loan, used car valuation, car value calculator, second hand car price, pre owned car valuation, car resale value" />
        <link rel="canonical" href="https://finonest.com/used-car-loan/car-valuation" />
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
              <span className="text-gray-600">Car Valuation</span>
            </nav>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Used Car Valuation Tool</h1>
            <p className="text-xl text-gray-600 mb-6">Get instant market-based car valuation for loan approval</p>
            <Badge variant="secondary" className="bg-green-100 text-green-800 text-lg px-4 py-2">
              <Car className="w-5 h-5 mr-2" />
              Free Unlimited Valuations
            </Badge>
          </div>

          {/* Car Valuation Tool */}
          <section className="mb-16">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Valuation Form */}
              <Card className="border-2 border-blue-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Search className="w-6 h-6 text-blue-600" />
                    Get Car Valuation
                  </CardTitle>
                  <p className="text-gray-600">Enter your car details for instant valuation</p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">RC Number (Optional)</label>
                      <Input
                        placeholder="DL01AB1234"
                        value={valuationData.rcNumber}
                        onChange={(e) => setValuationData({...valuationData, rcNumber: e.target.value})}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Brand *</label>
                      <Select value={valuationData.brand} onValueChange={(value) => setValuationData({...valuationData, brand: value})}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select brand" />
                        </SelectTrigger>
                        <SelectContent>
                          {popularBrands.map((brand) => (
                            <SelectItem key={brand.brand} value={brand.brand.toLowerCase()}>{brand.brand}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Model *</label>
                      <Input
                        placeholder="Enter model name"
                        value={valuationData.model}
                        onChange={(e) => setValuationData({...valuationData, model: e.target.value})}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Year of Manufacture *</label>
                      <Select value={valuationData.year} onValueChange={(value) => setValuationData({...valuationData, year: value})}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select year" />
                        </SelectTrigger>
                        <SelectContent>
                          {Array.from({length: 15}, (_, i) => 2024 - i).map((year) => (
                            <SelectItem key={year} value={year.toString()}>{year}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Kilometers Driven *</label>
                      <Input
                        type="number"
                        placeholder="Enter KM driven"
                        value={valuationData.kmDriven}
                        onChange={(e) => setValuationData({...valuationData, kmDriven: e.target.value})}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Fuel Type *</label>
                      <Select value={valuationData.fuelType} onValueChange={(value) => setValuationData({...valuationData, fuelType: value})}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select fuel type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="petrol">Petrol</SelectItem>
                          <SelectItem value="diesel">Diesel</SelectItem>
                          <SelectItem value="cng">CNG</SelectItem>
                          <SelectItem value="electric">Electric</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">City *</label>
                      <Input
                        placeholder="Enter your city"
                        value={valuationData.city}
                        onChange={(e) => setValuationData({...valuationData, city: e.target.value})}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Car Condition *</label>
                      <Select value={valuationData.condition} onValueChange={(value) => setValuationData({...valuationData, condition: value})}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select condition" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="excellent">Excellent</SelectItem>
                          <SelectItem value="good">Good</SelectItem>
                          <SelectItem value="fair">Fair</SelectItem>
                          <SelectItem value="poor">Poor</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <Button 
                    onClick={getCarValuation} 
                    className="w-full bg-blue-600 hover:bg-blue-700 text-lg py-3"
                    disabled={loading || !valuationData.brand || !valuationData.model || !valuationData.year}
                  >
                    {loading ? "Calculating..." : "Get Car Valuation"}
                  </Button>
                </CardContent>
              </Card>

              {/* Valuation Results */}
              <Card className="border-2 border-green-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="w-6 h-6 text-green-600" />
                    Valuation Results
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {!valuationResult ? (
                    <div className="text-center py-12">
                      <Car className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                      <p className="text-gray-600">Enter car details to get instant valuation</p>
                    </div>
                  ) : (
                    <div className="space-y-6">
                      <div className="bg-green-50 p-6 rounded-lg text-center border-2 border-green-200">
                        <div className="text-3xl font-bold text-green-600">₹{valuationResult.marketValue.toLocaleString()}</div>
                        <div className="text-sm text-gray-600">Estimated Market Value</div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-blue-50 p-4 rounded-lg text-center border border-blue-200">
                          <div className="text-xl font-bold text-blue-600">₹{valuationResult.loanAmount.toLocaleString()}</div>
                          <div className="text-xs text-gray-600">Max Loan Amount (85%)</div>
                        </div>
                        <div className="bg-orange-50 p-4 rounded-lg text-center border border-orange-200">
                          <div className="text-xl font-bold text-orange-600">₹{valuationResult.depreciation.toLocaleString()}</div>
                          <div className="text-xs text-gray-600">Total Depreciation</div>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <h4 className="font-semibold">Car Details</h4>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span>Brand & Model:</span>
                            <span className="font-medium">{valuationResult.brand} {valuationResult.model}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Year:</span>
                            <span className="font-medium">{valuationResult.year}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Age:</span>
                            <span className="font-medium">{2024 - parseInt(valuationResult.year)} years</span>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm text-green-600">
                          <CheckCircle className="w-4 h-4" />
                          Eligible for used car loan
                        </div>
                        <div className="flex items-center gap-2 text-sm text-green-600">
                          <CheckCircle className="w-4 h-4" />
                          Competitive interest rates available
                        </div>
                        <div className="flex items-center gap-2 text-sm text-green-600">
                          <CheckCircle className="w-4 h-4" />
                          Quick approval process
                        </div>
                      </div>

                      <Link href="/used-car-loan">
                        <Button className="w-full bg-green-600 hover:bg-green-700">
                          Apply for Used Car Loan <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </Link>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Valuation Factors */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Factors Affecting Car Valuation</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {valuationFactors.map((factor, index) => (
                <Card key={index} className="h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        {factor.icon}
                        <h3 className="font-semibold">{factor.factor}</h3>
                      </div>
                      <Badge 
                        variant={factor.impact === 'High' ? 'destructive' : 'default'}
                      >
                        {factor.impact}
                      </Badge>
                    </div>
                    <p className="text-sm text-gray-600">{factor.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Popular Brands */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Popular Car Brands & Models</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {popularBrands.map((brand, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-lg">{brand.brand}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {brand.models.map((model, modelIndex) => (
                        <div key={modelIndex} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-600" />
                          <span className="text-sm">{model}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Valuation Tips */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Tips to Maximize Car Valuation</h2>
            <Card className="bg-blue-50 border-blue-200">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-6">
                  {valuationTips.map((tip, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{tip}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <Card className="bg-gradient-to-r from-blue-600 to-blue-800 text-white border-0">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4">Get Your Car Valued and Apply for Loan</h2>
                <p className="text-lg mb-6">Use our free car valuation tool and get instant loan approval</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/used-car-loan">
                    <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                      Apply for Used Car Loan <ArrowRight className="w-4 h-4 ml-2" />
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
