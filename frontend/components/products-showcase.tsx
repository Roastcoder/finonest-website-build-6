"use client"

import { useRef, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Link from "next/link"
import { ArrowRight, User, Home, Briefcase, CreditCard } from "lucide-react"

const products = [
  {
    id: "personal-loans",
    icon: User,
    title: "Personal Loans",
    subtitle: "From 10.5% p.a.",
    description: "Quick personal loans for all your needs with minimal documentation.",
    features: ["Instant approval", "Flexible tenure", "No collateral"],
    maxAmount: "Rs.25 Lakhs",
    maxTenure: "5 Years",
    color: "#0064D6",
    bgGradient: "from-blue-500 to-blue-600"
  },
  {
    id: "home-loans", 
    icon: Home,
    title: "Home Loans",
    subtitle: "From 8.5% p.a.",
    description: "Make your dream home a reality with our affordable home loans.",
    features: ["Lowest rates", "Long tenure", "Tax benefits"],
    maxAmount: "Rs.5 Crores",
    maxTenure: "30 Years",
    color: "#12D6E7",
    bgGradient: "from-cyan-500 to-cyan-600"
  },
  {
    id: "business-loans",
    icon: Briefcase,
    title: "Business Loans", 
    subtitle: "From 12% p.a.",
    description: "Fuel your business growth with flexible business financing.",
    features: ["Quick disbursal", "Flexible EMI", "No security"],
    maxAmount: "Rs.50 Lakhs",
    maxTenure: "7 Years",
    color: "#008B96",
    bgGradient: "from-teal-500 to-teal-600"
  },
  {
    id: "credit-cards",
    icon: CreditCard,
    title: "Credit Cards",
    subtitle: "From 0% p.a.",
    description: "Premium credit cards with exclusive rewards and benefits.",
    features: ["Cashback offers", "Reward points", "Free for life"],
    maxAmount: "Rs.10 Lakhs", 
    maxTenure: "Lifetime",
    color: "#002E9C",
    bgGradient: "from-indigo-500 to-indigo-600"
  }
]

export function ProductsShowcase() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const scrollContainer = container.querySelector('.scroll-container') as HTMLElement
    if (!scrollContainer) return

    let animationId: number
    let scrollPosition = 0
    const scrollSpeed = 1
    let isPaused = false

    const animate = () => {
      if (!isPaused) {
        scrollPosition += scrollSpeed
        if (scrollPosition >= scrollContainer.scrollWidth / 2) {
          scrollPosition = 0
        }
        scrollContainer.scrollLeft = scrollPosition
      }
      animationId = requestAnimationFrame(animate)
    }

    const startAnimation = () => {
      isPaused = false
      animationId = requestAnimationFrame(animate)
    }

    const pauseAnimation = () => {
      isPaused = true
    }

    startAnimation()

    container.addEventListener('mouseenter', pauseAnimation)
    container.addEventListener('mouseleave', startAnimation)

    return () => {
      cancelAnimationFrame(animationId)
      container.removeEventListener('mouseenter', pauseAnimation)
      container.removeEventListener('mouseleave', startAnimation)
    }
  }, [])

  return (
    <section ref={containerRef} className="py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Financial Solutions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive financial products designed to meet every need with competitive rates and quick approvals.
          </p>
        </motion.div>
      </div>

      <div className="relative">
        <div className="scroll-container flex gap-6 overflow-x-hidden will-change-scroll" style={{ width: 'calc(300% + 48px)' }}>
          {[...products, ...products, ...products].map((product, index) => (
            <motion.div
              key={`${product.id}-${index}`}
              className="flex-shrink-0 w-80 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group relative z-20"
              whileHover={{ y: -5 }}
            >
              <div className={`h-2 bg-gradient-to-r ${product.bgGradient}`} />
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${product.bgGradient} flex items-center justify-center`}>
                    <product.icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-sm font-semibold text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                    {product.subtitle}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-2">{product.title}</h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{product.description}</p>

                <div className="space-y-2 mb-6">
                  {product.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2 text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                      {feature}
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <div className="font-bold text-gray-900 text-sm">{product.maxAmount}</div>
                    <div className="text-xs text-gray-500">Max Amount</div>
                  </div>
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <div className="font-bold text-gray-900 text-sm">{product.maxTenure}</div>
                    <div className="text-xs text-gray-500">Max Tenure</div>
                  </div>
                </div>

                <Link
                  href={`/products/${product.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-3 bg-gradient-to-r ${product.bgGradient} text-white rounded-lg font-semibold text-sm flex items-center justify-center gap-2 hover:shadow-lg transition-all duration-300 group-hover:scale-105`}
                >
                  Apply Now
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Gradient overlays */}
        <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-gray-50 to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white to-transparent pointer-events-none" />
      </div>

      <div className="text-center mt-12">
        <Link
          href="/products"
          className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#0064D6] to-[#002E9C] text-white rounded-full font-semibold hover:shadow-lg hover:shadow-[#0064D6]/25 transition-all duration-300"
        >
          View All Products
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  )
}