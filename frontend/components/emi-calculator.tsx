"use client"

import { useState, useEffect } from "react"
import { Calculator, TrendingUp, PieChart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Slider } from "@/components/ui/slider"

interface EMICalculatorProps {
  productType: string
  defaultAmount?: number
  defaultTenure?: number
  defaultRate?: number
  maxAmount?: number
  maxTenure?: number
}

export function EMICalculator({ 
  productType, 
  defaultAmount = 500000, 
  defaultTenure = 36, 
  defaultRate = 10.5,
  maxAmount = 2500000,
  maxTenure = 84
}: EMICalculatorProps) {
  const [loanAmount, setLoanAmount] = useState(defaultAmount)
  const [tenure, setTenure] = useState(defaultTenure)
  const [interestRate, setInterestRate] = useState(defaultRate)
  const [emi, setEmi] = useState(0)
  const [totalAmount, setTotalAmount] = useState(0)
  const [totalInterest, setTotalInterest] = useState(0)

  const calculateEMI = () => {
    const monthlyRate = interestRate / 100 / 12
    const emiValue = (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, tenure)) / (Math.pow(1 + monthlyRate, tenure) - 1)
    const totalAmountValue = emiValue * tenure
    const totalInterestValue = totalAmountValue - loanAmount
    
    setEmi(Math.round(emiValue))
    setTotalAmount(Math.round(totalAmountValue))
    setTotalInterest(Math.round(totalInterestValue))
  }

  useEffect(() => {
    calculateEMI()
  }, [loanAmount, tenure, interestRate])

  return (
    <Card className="border-2 border-blue-100">
      <CardHeader className="bg-gradient-to-r from-blue-600 to-teal-600 text-white">
        <CardTitle className="flex items-center gap-2">
          <Calculator className="w-6 h-6" />
          {productType} EMI Calculator
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6 space-y-6">
        {/* Loan Amount */}
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <label className="text-sm font-medium text-gray-700">Loan Amount</label>
            <span className="text-lg font-bold text-blue-600">₹{loanAmount.toLocaleString()}</span>
          </div>
          <Slider
            value={[loanAmount]}
            onValueChange={(value) => setLoanAmount(value[0])}
            max={maxAmount}
            min={50000}
            step={50000}
            className="w-full"
          />
          <div className="flex justify-between text-xs text-gray-500">
            <span>₹50K</span>
            <span>₹{(maxAmount / 100000).toFixed(0)}L</span>
          </div>
        </div>

        {/* Tenure */}
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <label className="text-sm font-medium text-gray-700">Tenure</label>
            <span className="text-lg font-bold text-teal-600">{tenure} months</span>
          </div>
          <Slider
            value={[tenure]}
            onValueChange={(value) => setTenure(value[0])}
            max={maxTenure}
            min={6}
            step={6}
            className="w-full"
          />
          <div className="flex justify-between text-xs text-gray-500">
            <span>6 months</span>
            <span>{maxTenure} months</span>
          </div>
        </div>

        {/* Interest Rate */}
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <label className="text-sm font-medium text-gray-700">Interest Rate (p.a.)</label>
            <span className="text-lg font-bold text-cyan-600">{interestRate}%</span>
          </div>
          <Slider
            value={[interestRate]}
            onValueChange={(value) => setInterestRate(value[0])}
            max={24}
            min={8}
            step={0.5}
            className="w-full"
          />
          <div className="flex justify-between text-xs text-gray-500">
            <span>8%</span>
            <span>24%</span>
          </div>
        </div>

        {/* Results */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-lg text-center">
            <div className="text-2xl font-bold text-blue-600">₹{emi.toLocaleString()}</div>
            <div className="text-sm text-gray-600">Monthly EMI</div>
          </div>
          <div className="bg-gradient-to-br from-teal-50 to-teal-100 p-4 rounded-lg text-center">
            <div className="text-2xl font-bold text-teal-600">₹{totalAmount.toLocaleString()}</div>
            <div className="text-sm text-gray-600">Total Amount</div>
          </div>
          <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 p-4 rounded-lg text-center">
            <div className="text-2xl font-bold text-cyan-600">₹{totalInterest.toLocaleString()}</div>
            <div className="text-sm text-gray-600">Total Interest</div>
          </div>
        </div>

        {/* Breakdown Chart */}
        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="flex items-center gap-2 mb-3">
            <PieChart className="w-5 h-5 text-gray-600" />
            <span className="font-medium text-gray-700">Payment Breakdown</span>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Principal Amount</span>
              <span className="font-medium text-blue-600">₹{loanAmount.toLocaleString()}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Interest Amount</span>
              <span className="font-medium text-red-600">₹{totalInterest.toLocaleString()}</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
              <div 
                className="bg-blue-600 h-full float-left"
                style={{ width: `${(loanAmount / totalAmount) * 100}%` }}
              ></div>
              <div 
                className="bg-red-500 h-full"
                style={{ width: `${(totalInterest / totalAmount) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}