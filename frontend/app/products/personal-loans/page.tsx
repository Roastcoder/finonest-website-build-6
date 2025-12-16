import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Personal Loans - Instant Approval up to ₹25 Lakhs | Finonest',
  description: 'Get personal loans with instant approval, minimal documentation, and competitive rates starting from 10.5%. Apply online for amounts up to ₹25 lakhs.',
  keywords: 'personal loan, instant personal loan, online personal loan, quick approval, minimal documentation, competitive rates',

export default function PersonalLoansPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">Personal Loans</h1>
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold mb-4">Quick Personal Loans with Instant Approval</h2>
            <p className="text-gray-600 mb-6">
              Get personal loans up to ₹25 lakhs with minimal documentation and competitive interest rates starting from 10.5% per annum.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Key Features</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                    Loan amount up to ₹25 Lakhs
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                    Interest rates from 10.5% p.a.
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                    Tenure: 1-5 years
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                    Minimal documentation
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4">Eligibility</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                    Age: 21-60 years
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                    Minimum income: ₹25,000/month
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                    Credit score: 650+
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                    Employment: Salaried/Self-employed
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
