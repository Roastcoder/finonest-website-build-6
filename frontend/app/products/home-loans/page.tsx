import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Home Loans - Low Interest Rates from 8.5% | Up to ₹5 Crores | Finonest',
  description: 'Get home loans with lowest interest rates starting from 8.5% p.a. Loan amounts up to ₹5 crores with flexible tenure up to 30 years. Apply online today!',
  keywords: 'home loan, housing loan, property loan, low interest rates, home financing, mortgage loan',

export default function HomeLoansPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">Home Loans</h1>
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold mb-4">Make Your Dream Home a Reality</h2>
            <p className="text-gray-600 mb-6">
              Affordable home loans with the longest tenure and lowest interest rates starting from 8.5% per annum.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Key Features</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                    Loan amount up to ₹5 Crores
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                    Interest rates from 8.5% p.a.
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                    Tenure: 5-30 years
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                    Up to 90% financing
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4">Benefits</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                    Tax benefits under Section 80C
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                    Balance transfer facility
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                    Top-up loan available
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                    Quick approval in 48 hours
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
