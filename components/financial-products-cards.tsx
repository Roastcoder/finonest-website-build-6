"use client"

import { ArrowRight, Home, CreditCard, Calculator, Banknote } from "lucide-react"
import { Button } from "@/components/ui/button"

const products = [
  {
    title: "Home Loans",
    description: "Dream home financing with best rates",
    icon: Home,
    badge: "Free Service",
    badgeColor: "bg-green-500",
    gradient: "from-blue-500 to-blue-600",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600"
  },
  {
    title: "Personal Loans", 
    description: "Quick personal financing hassle-free",
    icon: Banknote,
    badge: null,
    gradient: "from-purple-500 to-purple-600",
    iconBg: "bg-purple-100",
    iconColor: "text-purple-600"
  },
  {
    title: "Car Valuation",
    description: "AI-powered car value assessment", 
    icon: Calculator,
    badge: "Best Offers",
    badgeColor: "bg-orange-500",
    gradient: "from-teal-500 to-teal-600",
    iconBg: "bg-teal-100", 
    iconColor: "text-teal-600"
  },
  {
    title: "Credit Cards",
    description: "Premium rewards and benefits",
    icon: CreditCard,
    badge: null,
    gradient: "from-red-500 to-red-600",
    iconBg: "bg-red-100",
    iconColor: "text-red-600"
  }
]

export function FinancialProductsCards() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Financial <span className="text-blue-600">Solutions</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Choose from our comprehensive range of financial products designed to meet your needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => {
            const Icon = product.icon
            return (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                {/* Badge */}
                {product.badge && (
                  <div className={`absolute -top-3 left-6 ${product.badgeColor} text-white text-xs font-bold px-3 py-1 rounded-full shadow-md`}>
                    {product.badge}
                  </div>
                )}

                {/* Icon */}
                <div className={`w-16 h-16 ${product.iconBg} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`w-8 h-8 ${product.iconColor}`} />
                </div>

                {/* Content */}
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {product.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {product.description}
                  </p>
                </div>

                {/* Button */}
                <Button 
                  className={`w-full bg-gradient-to-r ${product.gradient} hover:opacity-90 text-white font-semibold py-3 rounded-xl transition-all duration-300 group-hover:shadow-lg flex items-center justify-center gap-2`}
                >
                  Apply Now
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>

                {/* Decorative elements */}
                <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full opacity-20 -z-10"></div>
                <div className="absolute bottom-4 left-4 w-12 h-12 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full opacity-30 -z-10"></div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}