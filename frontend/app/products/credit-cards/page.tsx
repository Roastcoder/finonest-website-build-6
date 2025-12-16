"use client"

import { motion } from "framer-motion"
import { CreditCard, CheckCircle, ArrowRight, Phone, Mail, Star, Gift, Plane, Award, Shield, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function CreditCardsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50">
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link href="/products" className="text-[#0A1F44] hover:text-[#F4D86B] flex items-center gap-2 transition-colors">
              ← Back to Products
            </Link>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-[#F4D86B] to-[#FFB800] bg-clip-text text-transparent">Credit Cards</h1>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
            <Card className="rounded-3xl shadow-lg hover:shadow-2xl transition-all">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl">
                  <CreditCard className="w-6 h-6 text-[#FFB800]" />
                  Premium Credit Cards - Exclusive Benefits
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6">
                  Premium credit cards with cashback, travel rewards, and exclusive lifestyle 
                  benefits tailored for your spending habits. Enjoy world-class privileges.
                </p>
                
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="bg-gradient-to-br from-[#F4D86B]/10 to-[#F4D86B]/20 p-4 rounded-2xl text-center hover:scale-105 transition-transform">
                    <div className="text-2xl font-bold text-[#0A1F44]">0%</div>
                    <div className="text-sm text-gray-600">Annual Fee*</div>
                  </div>
                  <div className="bg-gradient-to-br from-[#FFB800]/10 to-[#FFB800]/20 p-4 rounded-2xl text-center hover:scale-105 transition-transform">
                    <div className="text-2xl font-bold text-[#0A1F44]">₹10L</div>
                    <div className="text-sm text-gray-600">Credit Limit</div>
                  </div>
                  <div className="bg-gradient-to-br from-[#0A1F44]/10 to-[#0A1F44]/20 p-4 rounded-2xl text-center hover:scale-105 transition-transform">
                    <div className="text-2xl font-bold text-[#0A1F44]">5%</div>
                    <div className="text-sm text-gray-600">Cashback</div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="font-semibold text-gray-900">Key Features:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-3 p-2 rounded-lg hover:bg-[#F4D86B]/10 transition-colors">
                      <Gift className="w-5 h-5 text-[#F4D86B]" />
                      <span className="text-sm font-medium">Up to 5% cashback</span>
                    </li>
                    <li className="flex items-center gap-3 p-2 rounded-lg hover:bg-[#FFB800]/10 transition-colors">
                      <Plane className="w-5 h-5 text-[#FFB800]" />
                      <span className="text-sm font-medium">Airport lounge access</span>
                    </li>
                    <li className="flex items-center gap-3 p-2 rounded-lg hover:bg-[#0A1F44]/10 transition-colors">
                      <Shield className="w-5 h-5 text-[#0A1F44]" />
                      <span className="text-sm font-medium">Travel insurance cover</span>
                    </li>
                    <li className="flex items-center gap-3 p-2 rounded-lg hover:bg-[#F4D86B]/10 transition-colors">
                      <Award className="w-5 h-5 text-[#F4D86B]" />
                      <span className="text-sm font-medium">Fuel surcharge waiver</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-3xl shadow-lg">
              <CardHeader>
                <CardTitle>Eligibility Criteria</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#F4D86B] rounded-full"></div>
                    <span className="text-sm">Age: 21-65 years</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#FFB800] rounded-full"></div>
                    <span className="text-sm">Minimum income: ₹30,000/month</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#0A1F44] rounded-full"></div>
                    <span className="text-sm">Good credit history</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#F4D86B] rounded-full"></div>
                    <span className="text-sm">No defaults in last 6 months</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
            <Card className="rounded-3xl shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Star className="w-6 h-6 text-[#FFB800]" />
                  Premium Benefits
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3 p-4 bg-gradient-to-br from-[#F4D86B]/10 to-[#F4D86B]/20 rounded-2xl">
                  <Gift className="w-8 h-8 text-[#F4D86B]" />
                  <div>
                    <div className="font-semibold">Welcome Bonus</div>
                    <div className="text-sm text-gray-600">Get ₹5,000 worth rewards on first purchase</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-gradient-to-br from-[#FFB800]/10 to-[#FFB800]/20 rounded-2xl">
                  <Plane className="w-8 h-8 text-[#FFB800]" />
                  <div>
                    <div className="font-semibold">Travel Benefits</div>
                    <div className="text-sm text-gray-600">Complimentary airport lounge access worldwide</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-gradient-to-br from-[#0A1F44]/10 to-[#0A1F44]/20 rounded-2xl">
                  <CreditCard className="w-8 h-8 text-[#0A1F44]" />
                  <div>
                    <div className="font-semibold">Cashback Rewards</div>
                    <div className="text-sm text-gray-600">Earn up to 5% cashback on all purchases</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-[#F4D86B]/10 to-[#FFB800]/10 border-2 border-[#F4D86B]/30 rounded-3xl shadow-xl">
              <CardContent className="pt-6">
                <h3 className="font-bold text-[#0A1F44] mb-4 text-center text-xl">Ready to Apply?</h3>
                <div className="space-y-3">
                  <Link href="/eligibility">
                    <Button className="w-full bg-gradient-to-r from-[#F4D86B] to-[#FFB800] hover:from-[#FFB800] hover:to-[#F4D86B] text-[#0A1F44] py-3 rounded-2xl shadow-lg hover:shadow-2xl transition-all font-bold">
                      <CreditCard className="w-4 h-4 mr-2" />
                      Apply for Credit Card
                    </Button>
                  </Link>
                  <div className="text-center text-sm text-gray-600">Or contact us directly</div>
                  <div className="flex gap-2">
                    <Link href="tel:+911234567890" className="flex-1">
                      <Button variant="outline" className="w-full border-[#0A1F44] text-[#0A1F44] hover:bg-[#0A1F44]/10 rounded-xl">
                        <Phone className="w-4 h-4 mr-2" />
                        Call Now
                      </Button>
                    </Link>
                    <Link href="mailto:support@finonest.com" className="flex-1">
                      <Button variant="outline" className="w-full border-[#F4D86B] text-[#F4D86B] hover:bg-[#F4D86B]/10 rounded-xl">
                        <Mail className="w-4 h-4 mr-2" />
                        Email Us
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-3xl shadow-lg">
              <CardHeader>
                <CardTitle>Card Types Available</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="p-4 border-2 border-gray-100 rounded-2xl hover:border-[#F4D86B]/30 transition-colors">
                    <div className="font-semibold">Platinum Card</div>
                    <div className="text-sm text-gray-600">Premium benefits for high spenders</div>
                  </div>
                  <div className="p-4 border-2 border-gray-100 rounded-2xl hover:border-[#F4D86B]/30 transition-colors">
                    <div className="font-semibold">Travel Card</div>
                    <div className="text-sm text-gray-600">Exclusive travel rewards and benefits</div>
                  </div>
                  <div className="p-4 border-2 border-gray-100 rounded-2xl hover:border-[#F4D86B]/30 transition-colors">
                    <div className="font-semibold">Cashback Card</div>
                    <div className="text-sm text-gray-600">Maximum cashback on everyday purchases</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
