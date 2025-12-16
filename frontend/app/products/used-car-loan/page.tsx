"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Car, Calculator, FileText, CheckCircle, Star, Phone, Mail, ArrowRight, Shield, Clock, Award, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Link from "next/link"
import Head from "next/head"

interface SEOContent {
  title: string;
  metaDescription: string;
  metaKeywords: string[];
  h1: string;
  h2Tags: string[];
  content: {
    heroSection: {
      title: string;
      subtitle: string;
      description: string;
      ctaText: string;
    };
    features: Array<{
      title: string;
      description: string;
      icon: string;
    }>;
    benefits: Array<{
      title: string;
      description: string;
    }>;
    eligibility: Array<{
      criteria: string;
      description: string;
    }>;
    faq: Array<{
      question: string;
      answer: string;
    }>;
    testimonials: Array<{
      name: string;
      review: string;
      rating: number;
    }>;
  };
  schema: {
    type: string;
    data: any;
  };
}

export default function UsedCarLoanPage() {
  const [loanAmount, setLoanAmount] = useState(500000)
  const [tenure, setTenure] = useState(60)
  const [emi, setEmi] = useState(0)
  const [seoContent, setSeoContent] = useState<SEOContent | null>(null)

  useEffect(() => {
    const fetchSEOContent = async () => {
      try {
        const response = await fetch('/api/seo/content/used-car-loan')
        if (response.ok) {
          const data = await response.json()
          setSeoContent(data)
        }
      } catch (error) {
        console.error('Error fetching SEO content:', error)
      }
    }
    
    fetchSEOContent()
  }, [])

  const calculateEMI = () => {
    const rate = 8.5 / 100 / 12
    const emiValue = (loanAmount * rate * Math.pow(1 + rate, tenure)) / (Math.pow(1 + rate, tenure) - 1)
    setEmi(Math.round(emiValue))
  }

  const defaultContent = {
    title: "Used Car Loan - Best Interest Rates Starting @ 8.5% | Finonest",
    metaDescription: "Get instant used car loan approval with lowest interest rates starting @ 8.5%. Quick processing, minimal documentation. Apply online for pre-owned car financing today!",
    metaKeywords: ["used car loan", "pre-owned car financing", "second hand car loan", "car loan for old cars"],
    h1: "Used Car Loan - Finance Your Dream Pre-Owned Car",
    h2Tags: ["Best Used Car Loan Interest Rates", "Quick Approval Process", "Eligibility Criteria", "EMI Calculator"],
    content: {
      heroSection: {
        title: "Used Car Loan - Finance Your Dream Pre-Owned Car",
        subtitle: "Get instant approval with competitive rates starting @ 8.5%",
        description: "Transform your dream of owning a car into reality with our hassle-free used car loan. Get up to 100% financing for pre-owned vehicles with quick processing and minimal documentation.",
        ctaText: "Apply for Used Car Loan"
      },
      features: [
        {
          title: "Lowest Interest Rates",
          description: "Starting from 8.5% per annum with flexible repayment options",
          icon: "award"
        },
        {
          title: "Quick Approval",
          description: "Get loan approval within 24 hours with minimal documentation",
          icon: "clock"
        },
        {
          title: "100% Financing",
          description: "Finance up to 100% of your used car's value",
          icon: "shield"
        },
        {
          title: "Flexible Tenure",
          description: "Repayment tenure up to 7 years for comfortable EMIs",
          icon: "users"
        }
      ],
      benefits: [
        {
          title: "No Hidden Charges",
          description: "Transparent pricing with no hidden fees or charges"
        },
        {
          title: "Cars up to 7 Years Old",
          description: "Finance pre-owned cars manufactured within last 7 years"
        },
        {
          title: "Insurance Assistance",
          description: "Complete support for car insurance and registration"
        },
        {
          title: "Doorstep Service",
          description: "Document collection and verification at your convenience"
        }
      ],
      eligibility: [
        {
          criteria: "Age",
          description: "21-65 years for salaried, 25-65 years for self-employed"
        },
        {
          criteria: "Income",
          description: "Minimum ₹25,000/month for salaried, ₹3 lakh/year for self-employed"
        },
        {
          criteria: "Employment",
          description: "Minimum 2 years work experience or business vintage"
        },
        {
          criteria: "Credit Score",
          description: "CIBIL score of 650 and above preferred"
        }
      ],
      faq: [
        {
          question: "What is the maximum loan amount for used car loans?",
          answer: "You can get up to ₹50 lakhs as used car loan depending on your income and the car's value."
        },
        {
          question: "What documents are required for used car loan?",
          answer: "Basic documents include identity proof, address proof, income proof, bank statements, and car-related documents."
        },
        {
          question: "Can I get a loan for a car older than 5 years?",
          answer: "Yes, we provide loans for cars up to 7 years old from the date of manufacture."
        },
        {
          question: "How is the loan amount calculated?",
          answer: "Loan amount is calculated based on the car's current market value, your income, and repayment capacity."
        }
      ],
      testimonials: [
        {
          name: "Rajesh Kumar",
          review: "Got my used car loan approved within 24 hours. The process was smooth and transparent.",
          rating: 5
        },
        {
          name: "Priya Sharma",
          review: "Excellent service and competitive interest rates. Highly recommend Finonest for car loans.",
          rating: 5
        }
      ]
    },
    schema: {
      type: "Product",
      data: {
        "@context": "https://schema.org/",
        "@type": "Product",
        "name": "Used Car Loan",
        "description": "Get instant used car loan approval with lowest interest rates starting @ 8.5%",
        "brand": {
          "@type": "Brand",
          "name": "Finonest"
        },
        "offers": {
          "@type": "Offer",
          "price": "8.5",
          "priceCurrency": "INR",
          "availability": "https://schema.org/InStock"
        }
      }
    }
  }

  const content = seoContent || defaultContent

  return (
    <>
      <Head>
        <title>{content.title}</title>
        <meta name="description" content={content.metaDescription} />
        <meta name="keywords" content={content.metaKeywords.join(', ')} />
        <meta property="og:title" content={content.title} />
        <meta property="og:description" content={content.metaDescription} />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://finonest.com/products/used-car-loan" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(content.schema.data)
          }}
        />
      </Head>

      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }}>
                <h1 className="text-4xl lg:text-5xl font-bold mb-4">{content.h1}</h1>
                <p className="text-xl mb-2">{content.content.heroSection.subtitle}</p>
                <p className="text-lg mb-8 opacity-90">{content.content.heroSection.description}</p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                    <FileText className="w-5 h-5 mr-2" />
                    {content.content.heroSection.ctaText}
                  </Button>
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                    <Calculator className="w-5 h-5 mr-2" />
                    Calculate EMI
                  </Button>
                </div>
              </div>
              <div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} className="relative">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                  <h3 className="text-2xl font-bold mb-6">Quick Loan Details</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold">8.5%</div>
                      <div className="text-sm opacity-80">Interest Rate (p.a.)</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold">₹50L</div>
                      <div className="text-sm opacity-80">Max Amount</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold">24 Hrs</div>
                      <div className="text-sm opacity-80">Approval Time</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold">7 Years</div>
                      <div className="text-sm opacity-80">Max Tenure</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">{content.h2Tags[0]}</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {content.content.features.map((feature, index) => (
                <div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="text-center h-full">
                    <CardContent className="p-6">
                      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        {feature.icon === 'award' && <Award className="w-8 h-8 text-blue-600" />}
                        {feature.icon === 'clock' && <Clock className="w-8 h-8 text-blue-600" />}
                        {feature.icon === 'shield' && <Shield className="w-8 h-8 text-blue-600" />}
                        {feature.icon === 'users' && <Users className="w-8 h-8 text-blue-600" />}
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Used Car Loan EMI Calculator</h2>
            <div className="grid lg:grid-cols-2 gap-12">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calculator className="w-6 h-6 text-blue-600" />
                    Calculate Your EMI
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Loan Amount (₹)</label>
                    <Input 
                      type="number"
                      value={loanAmount}
                      onChange={(e) => setLoanAmount(Number(e.target.value))}
                      placeholder="Enter loan amount"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Tenure (months)</label>
                    <Input 
                      type="number"
                      value={tenure}
                      onChange={(e) => setTenure(Number(e.target.value))}
                      placeholder="Enter tenure in months"
                    />
                  </div>
                  <Button onClick={calculateEMI} className="w-full bg-blue-600 hover:bg-blue-700">
                    Calculate EMI
                  </Button>
                  {emi > 0 && (
                    <div className="bg-blue-50 p-6 rounded-lg text-center">
                      <div className="text-3xl font-bold text-blue-600">₹{emi.toLocaleString()}</div>
                      <div className="text-sm text-gray-600">Monthly EMI</div>
                    </div>
                  )}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Why Choose Our Used Car Loan?</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {content.content.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                        <div>
                          <h4 className="font-semibold">{benefit.title}</h4>
                          <p className="text-sm text-gray-600">{benefit.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Eligibility Criteria</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {content.content.eligibility.map((item, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg mb-2">{item.criteria}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
            <div className="max-w-4xl mx-auto">
              <Accordion type="single" collapsible>
                {content.content.faq.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                    <AccordionContent>{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Customer Reviews</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {content.content.testimonials.map((testimonial, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-gray-600 mb-4">"{testimonial.review}"</p>
                    <p className="font-semibold">- {testimonial.name}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section className="text-center">
            <Card className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
              <CardContent className="p-12">
                <h2 className="text-3xl font-bold mb-4">Ready to Buy Your Dream Used Car?</h2>
                <p className="text-xl mb-8">Get instant approval with competitive interest rates</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                    <FileText className="w-5 h-5 mr-2" />
                    Apply Now
                  </Button>
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                    <Phone className="w-5 h-5 mr-2" />
                    Call Expert
                  </Button>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>
      </div>
    </>
  )
}