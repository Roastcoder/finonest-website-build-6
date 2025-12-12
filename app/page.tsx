"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, CheckCircle, Star, Shield, Clock, Users, Calculator, TrendingUp, Award, Zap, Building, Car, Home, Briefcase, Coins, Search, MapPin, IndianRupee, CreditCard, FileText, Smartphone, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { useState } from "react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Auto-scrolling Banner */}
      <div className="bg-[#F4D86B] text-[#0A1F44] py-3 overflow-hidden">
        <div className="animate-scroll whitespace-nowrap">
          <span className="inline-block px-8 font-bold text-sm">
            ✨ 5 Lac+ Happy Customers ✨ Fast & Secure Process ✨ Multiple Bank Options ✨ Expert Support Available ✨ Transparent Pricing ✨ Quick Documentation ✨
          </span>
          <span className="inline-block px-8 font-bold text-sm">
            ✨ 5 Lac+ Happy Customers ✨ Fast & Secure Process ✨ Multiple Bank Options ✨ Expert Support Available ✨ Transparent Pricing ✨ Quick Documentation ✨
          </span>
        </div>
      </div>

      {/* Product Carousel Section */}
      <section className="py-16 overflow-hidden">
        <div className="flex animate-scroll-slow">
          {/* CIBIL Slide */}
          <div className="flex-shrink-0 w-full bg-gradient-to-r from-[#01035B] to-[#006ACF] text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h1 className="text-3xl sm:text-4xl font-bold mb-4">
                    Get your CIBIL Credit Report
                  </h1>
                  <p className="text-xl mb-2">
                    worth <span className="text-[#00BCD6] font-bold">₹500 for FREE</span>
                  </p>
                  <p className="text-sm mb-6 opacity-90">
                    5 Lac+ people have got their Credit Scores for FREE!
                  </p>
                  <Button className="bg-[#00BCD6] hover:bg-[#00A5B8] text-[#01035B] px-6 py-3 font-semibold">
                    Get Free Credit Score
                  </Button>
                </div>
                
                <div className="relative overflow-hidden rounded-xl">
                  <div className="flex animate-scroll">
                    {[
                      { score: "750+", status: "Excellent", color: "bg-green-500" },
                      { score: "700-749", status: "Good", color: "bg-blue-500" },
                      { score: "650-699", status: "Fair", color: "bg-yellow-500" },
                      { score: "600-649", status: "Poor", color: "bg-orange-500" },
                      { score: "750+", status: "Excellent", color: "bg-green-500" },
                      { score: "700-749", status: "Good", color: "bg-blue-500" }
                    ].map((item, index) => (
                      <div key={`cibil-${index}`} className="flex-shrink-0 w-48 mx-2">
                        <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-center">
                          <div className={`w-16 h-16 ${item.color} rounded-full flex items-center justify-center mx-auto mb-3`}>
                            <span className="text-white font-bold text-sm">{item.score}</span>
                          </div>
                          <h3 className="font-semibold text-white">{item.status}</h3>
                          <p className="text-xs text-white/80 mt-1">Credit Score Range</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Personal Loan Slide */}
          <div className="flex-shrink-0 w-full bg-gradient-to-r from-[#00BCD6] to-[#006ACF] text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div className="relative overflow-hidden rounded-xl h-32">
                    {[
                      { amount: "₹5L", rate: "10.99%", tenure: "5 Years" },
                      { amount: "₹10L", rate: "11.49%", tenure: "7 Years" },
                      { amount: "₹20L", rate: "12.99%", tenure: "5 Years" },
                      { amount: "₹40L", rate: "13.99%", tenure: "7 Years" }
                    ].map((loan, index) => (
                      <div key={`loan-${index}`} className="animate-card-fade w-full">
                        <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-center">
                          <h3 className="text-2xl font-bold text-white mb-2">{loan.amount}</h3>
                          <p className="text-[#01035B] font-semibold">{loan.rate} p.a.</p>
                          <p className="text-xs text-white/80 mt-1">{loan.tenure} Max</p>
                        </div>
                      </div>
                    ))}
                </div>
                
                <div>
                  <h1 className="text-3xl sm:text-4xl font-bold mb-4">
                    Personal Loans up to ₹40 Lakhs
                  </h1>
                  <p className="text-xl mb-2">
                    Starting at <span className="text-[#01035B] font-bold">10.99% p.a.</span>
                  </p>
                  <p className="text-sm mb-6 opacity-90">
                    Instant approval in 2 minutes. No collateral required!
                  </p>
                  <Button className="bg-[#01035B] hover:bg-[#001B84] text-white px-6 py-3 font-semibold">
                    Apply for Personal Loan
                  </Button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Home Loan Slide */}
          <div className="flex-shrink-0 w-full bg-gradient-to-r from-[#006ACF] to-[#01035B] text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h1 className="text-3xl sm:text-4xl font-bold mb-4">
                    Home Loans up to ₹5 Crores
                  </h1>
                  <p className="text-xl mb-2">
                    Starting at <span className="text-[#00BCD6] font-bold">8.50% p.a.</span>
                  </p>
                  <p className="text-sm mb-6 opacity-90">
                    Make your dream home a reality with lowest rates!
                  </p>
                  <Button className="bg-[#00BCD6] hover:bg-[#00A5B8] text-[#01035B] px-6 py-3 font-semibold">
                    Apply for Home Loan
                  </Button>
                </div>
                
                <div className="relative overflow-hidden rounded-xl h-32">
                    {[
                      { amount: "₹50L", rate: "8.50%", type: "Ready" },
                      { amount: "₹1Cr", rate: "8.75%", type: "Under Construction" },
                      { amount: "₹2Cr", rate: "9.00%", type: "Plot + Construction" },
                      { amount: "₹5Cr", rate: "9.25%", type: "Luxury Homes" }
                    ].map((home, index) => (
                      <div key={`home-${index}`} className="animate-card-fade w-full">
                        <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-center">
                          <h3 className="text-2xl font-bold text-white mb-2">{home.amount}</h3>
                          <p className="text-[#00BCD6] font-semibold">{home.rate} p.a.</p>
                          <p className="text-xs text-white/80 mt-1">{home.type}</p>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Duplicate first slide for seamless loop */}
          <div className="flex-shrink-0 w-full bg-gradient-to-r from-[#01035B] to-[#006ACF] text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h1 className="text-3xl sm:text-4xl font-bold mb-4">
                    Get your CIBIL Credit Report
                  </h1>
                  <p className="text-xl mb-2">
                    worth <span className="text-[#00BCD6] font-bold">₹500 for FREE</span>
                  </p>
                  <p className="text-sm mb-6 opacity-90">
                    5 Lac+ people have got their Credit Scores for FREE!
                  </p>
                  <Button className="bg-[#00BCD6] hover:bg-[#00A5B8] text-[#01035B] px-6 py-3 font-semibold">
                    Get Free Credit Score
                  </Button>
                </div>
                
                <div className="relative overflow-hidden rounded-xl h-32">
                    {[
                      { score: "750+", status: "Excellent", color: "bg-green-500" },
                      { score: "700-749", status: "Good", color: "bg-blue-500" },
                      { score: "650-699", status: "Fair", color: "bg-yellow-500" },
                      { score: "600-649", status: "Poor", color: "bg-orange-500" }
                    ].map((item, index) => (
                      <div key={`cibil-loop-${index}`} className="animate-card-fade w-full">
                        <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-center">
                          <div className={`w-16 h-16 ${item.color} rounded-full flex items-center justify-center mx-auto mb-3`}>
                            <span className="text-white font-bold text-sm">{item.score}</span>
                          </div>
                          <h3 className="font-semibold text-white">{item.status}</h3>
                          <p className="text-xs text-white/80 mt-1">Credit Score Range</p>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Find Right Financial Product */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Find the Right Financial Product
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Get started in minutes with our simple, fast, and convenient application process.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Business Loan",
                subtitle: "Instant Funds for Instant Growth",
                icon: Briefcase,
                color: "from-[#0A1F44] to-[#000000]"
              },
              {
                title: "Loan Against Property", 
                subtitle: "Lowest Interest Rate",
                icon: Building,
                color: "from-[#F4D86B] to-[#FFB800]"
              },
              {
                title: "Credit Score",
                subtitle: "Check your Credit Score for Free",
                icon: TrendingUp,
                color: "from-[#00D4FF] to-[#0A1F44]"
              },
              {
                title: "Used Car Loan",
                subtitle: "Get the Best used Car Loan",
                icon: Car,
                color: "from-[#000000] to-[#0A1F44]"
              }
            ].map((product, index) => (
              <motion.div
                key={product.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2"
              >
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${product.color} flex items-center justify-center mb-6 shadow-md`}>
                  <product.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{product.title}</h3>
                <p className="text-gray-600 mb-6 text-base">{product.subtitle}</p>
                <Button className="w-full bg-gradient-to-r from-[#F4D86B] to-[#FFB800] text-[#0A1F44] font-bold rounded-xl hover:shadow-lg transition-all">
                  {product.title === "Credit Score" ? "Check Now" : "Apply Now"}
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Smart Credit Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Smart Credit Cards Designed For You
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore top credit card options suited to your spending and goals. Finonest assists you in comparing, choosing, and applying online to boost your credit and enjoy rewards.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-10">
            {[
              {
                title: "Credit Cards",
                features: [
                  "Global Acceptance – Use your card anywhere in the world.",
                  "24/7 Concierge Service – Personal travel assistance anytime.", 
                  "Accelerated Rewards - Double points on flight & hotel bookings."
                ],
                icon: CreditCard
              },
              {
                title: "Personal Loan",
                features: [
                  "Loan amounts up to ₹40 Lakhs with flexible repayment options",
                  "Competitive interest rates starting from 10.99% per annum",
                  "Fast disbursal within 24 hours of document verification"
                ],
                icon: Users
              },
              {
                title: "Home Loan", 
                features: [
                  "Up to ₹5 Crore Loan Amount",
                  "Low Interest Rates Starting at 8.50% p.a.",
                  "Quick Approval in 48 Hours*"
                ],
                icon: Home
              }
            ].map((product, index) => (
              <motion.div
                key={product.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-gradient-to-br from-gray-50 to-white p-10 rounded-2xl border border-gray-200 shadow-lg hover:shadow-xl transition-all"
              >
                <div className="flex items-center gap-5 mb-8">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#F4D86B] to-[#FFB800] flex items-center justify-center shadow-md">
                    <product.icon className="w-8 h-8 text-[#0A1F44]" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900">{product.title}</h3>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-4">
                      <CheckCircle className="w-6 h-6 text-[#F4D86B] mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600 text-base">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="flex gap-4">
                  <Button className="flex-1 bg-gradient-to-r from-[#F4D86B] to-[#FFB800] text-[#0A1F44] font-bold rounded-xl hover:shadow-lg transition-all">
                    Apply Now
                  </Button>
                  <Button variant="outline" className="flex-1 rounded-xl border-2 border-gray-200 hover:border-[#F4D86B] font-semibold">
                    Explore More
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Easy Process Steps */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Easy. Convenient Quick.
            </h2>
            <p className="text-xl text-gray-600">
              The simple & Quick steps to your loan.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              {
                step: "01",
                title: "Eligibility", 
                description: "Tell us your requirement 2 minutes fill details,"
              },
              {
                step: "02",
                title: "Compare",
                description: "AI matches best banks 90+ criteria 90% success."
              },
              {
                step: "03", 
                title: "Apply",
                description: "Digital bank application complete digitally."
              },
              {
                step: "04",
                title: "Disbursement",
                description: "Get quick sanction minutes not weeks,"
              }
            ].map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#F4D86B] to-[#FFB800] flex items-center justify-center shadow-lg">
                  <span className="text-3xl font-bold text-[#0A1F44]">{step.step}</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 text-base">{step.description}</p>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <Button className="bg-gradient-to-r from-[#F4D86B] to-[#FFB800] text-[#0A1F44] px-10 py-6 text-xl font-bold rounded-2xl shadow-xl hover:shadow-2xl transition-all">
              Get Started
            </Button>
          </div>
        </div>
      </section>

      {/* Financial Calculators */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Financial Calculators
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our calculators assist you in planning your finances, estimating payments, and making informed money decisions, from EMIs to FDs.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Personal Loan EMI Calculator",
                description: "Calculate your EMIs and plan your repayments in advance",
                icon: Calculator
              },
              {
                title: "Personal Loan Eligibility Calculator", 
                description: "Check how much personal loan you can borrow in just a few clicks.",
                icon: FileText
              },
              {
                title: "Personal Loan Prepayment Calculator",
                description: "Estimate savings and adjust your prepayments easily.",
                icon: TrendingUp
              },
              {
                title: "Home Loan EMI Calculator",
                description: "Work out your monthly home loan EMI quickly and accurately",
                icon: Home
              },
              {
                title: "Home Loan Eligibility Calculator",
                description: "Discover your home loan eligibility and plan your budget.",
                icon: Building
              },
              {
                title: "Home Loan Prepayment Calculator", 
                description: "See how prepaying your home loan cuts interest and reduces tenure.",
                icon: Coins
              }
            ].map((calc, index) => (
              <motion.div
                key={calc.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 p-8 rounded-2xl hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#F4D86B] to-[#FFB800] flex items-center justify-center mb-6 shadow-md">
                  <calc.icon className="w-8 h-8 text-[#0A1F44]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{calc.title}</h3>
                <p className="text-gray-600 text-base">{calc.description}</p>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button variant="outline" className="px-10 py-4 text-lg rounded-xl border-2 border-gray-300 hover:border-[#F4D86B] font-semibold">
              Explore More Calculators
            </Button>
          </div>
        </div>
      </section>

      {/* Trusted Partners */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Trusted By 100K+ Partners
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Designed exclusively to help Finonest authorized partners get real-time updates on offers, earnings and cases with privileged access.
            </p>
          </div>
          
          <div className="bg-white rounded-3xl p-12 text-center shadow-xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
              <div className="text-center">
                <div className="text-5xl font-bold text-[#0A1F44] mb-3">100K+</div>
                <div className="text-base text-gray-600 font-medium">Active Partners</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-[#0A1F44] mb-3">₹1000Cr+</div>
                <div className="text-base text-gray-600 font-medium">Loans Processed</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-[#0A1F44] mb-3">50+</div>
                <div className="text-base text-gray-600 font-medium">Bank Partners</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-[#0A1F44] mb-3">99%</div>
                <div className="text-base text-gray-600 font-medium">Success Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-600">
              Join thousands of satisfied customers who trust Finonest for their financial needs.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Rajesh Kumar",
                location: "Mumbai",
                rating: 5,
                text: "Got my personal loan approved in just 2 minutes! The process was so smooth and the interest rate was the lowest I found anywhere.",
                loanType: "Personal Loan"
              },
              {
                name: "Priya Sharma",
                location: "Delhi",
                rating: 5,
                text: "Finonest helped me get my dream home loan with amazing rates. The team was very supportive throughout the process.",
                loanType: "Home Loan"
              },
              {
                name: "Amit Patel",
                location: "Bangalore",
                rating: 5,
                text: "Excellent service for business loan. No paperwork hassle and quick disbursal. Highly recommended for entrepreneurs.",
                loanType: "Business Loan"
              },
              {
                name: "Sneha Reddy",
                location: "Hyderabad",
                rating: 5,
                text: "The credit score check was completely free and helped me understand my financial health. Great platform!",
                loanType: "Credit Score"
              },
              {
                name: "Vikram Singh",
                location: "Pune",
                rating: 5,
                text: "Car loan approval was instant and the EMI options were very flexible. Best rates in the market for sure.",
                loanType: "Car Loan"
              },
              {
                name: "Kavya Nair",
                location: "Chennai",
                rating: 5,
                text: "Professional and transparent service. Got multiple loan offers to choose from. The comparison feature is amazing.",
                loanType: "Personal Loan"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 p-8 rounded-2xl hover:shadow-xl transition-all"
              >
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-[#FFB800] text-[#FFB800]" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic text-base leading-relaxed">"{testimonial.text}"</p>
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">{testimonial.name}</h4>
                    <p className="text-base text-gray-500">{testimonial.location}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-sm bg-[#F4D86B] text-[#0A1F44] px-3 py-1.5 rounded-full font-semibold">
                      {testimonial.loanType}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}