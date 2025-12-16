"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { HelpCircle, ArrowRight, Phone, Mail, MessageCircle } from "lucide-react"
import Link from "next/link"
import Head from "next/head"

export default function UsedCarLoanFAQPage() {
  const faqCategories = [
    {
      category: "General Questions",
      faqs: [
        {
          question: "What is a used car loan?",
          answer: "A used car loan is a secured loan that helps you finance the purchase of a pre-owned vehicle. The car itself serves as collateral for the loan, and you can get up to 85-90% of the car's current market value as loan amount."
        },
        {
          question: "What is the maximum loan amount for used car loans?",
          answer: "You can get up to ₹50 lakhs as used car loan depending on your income, credit score, and the car's current market value. The loan amount typically ranges from 75-90% of the car's valuation."
        },
        {
          question: "What is the minimum and maximum tenure for used car loans?",
          answer: "The loan tenure ranges from 1 year to 7 years (12 to 84 months). However, the maximum tenure may vary based on the age of the vehicle and your repayment capacity."
        },
        {
          question: "Can I get a loan for a car older than 5 years?",
          answer: "Yes, we provide loans for pre-owned cars up to 7 years old from the date of manufacture. However, loan amount and tenure may be reduced for older vehicles."
        }
      ]
    },
    {
      category: "Interest Rates & Charges",
      faqs: [
        {
          question: "What are the current used car loan interest rates?",
          answer: "Our used car loan interest rates start from 8.5% per annum and can go up to 15% depending on your credit profile, employment type, and loan amount. Salaried employees typically get better rates than self-employed individuals."
        },
        {
          question: "Are there any processing fees for used car loans?",
          answer: "Yes, processing fees range from 0.5% to 2% of the loan amount, depending on your credit profile. For excellent credit scores (750+), the processing fee is as low as 0.5%."
        },
        {
          question: "Are there any prepayment charges?",
          answer: "No, there are no prepayment charges for used car loans. You can prepay your loan partially or fully at any time without any additional charges."
        },
        {
          question: "What other charges are applicable?",
          answer: "Apart from interest and processing fees, you may need to pay for car valuation (₹2,000-₹5,000), documentation charges (₹500-₹1,000), and loan insurance if opted."
        }
      ]
    },
    {
      category: "Eligibility & Documentation",
      faqs: [
        {
          question: "What are the eligibility criteria for used car loans?",
          answer: "You must be 21-65 years old (25-65 for self-employed), have a minimum monthly income of ₹25,000 (₹3 lakh/year for self-employed), CIBIL score of 650+, and 2+ years of work experience."
        },
        {
          question: "What documents are required for used car loan application?",
          answer: "Required documents include identity proof (Aadhaar, PAN), address proof, income proof (salary slips/ITR), bank statements, car RC, insurance papers, NOC from seller, and car valuation report."
        },
        {
          question: "Can I apply for a used car loan with a low CIBIL score?",
          answer: "While a CIBIL score of 650+ is preferred, we may consider applications with lower scores on a case-by-case basis. However, this may result in higher interest rates and stricter terms."
        },
        {
          question: "Can I add a co-applicant to improve my eligibility?",
          answer: "Yes, adding a co-applicant with good credit score and stable income can improve your loan eligibility and may help you get better interest rates."
        }
      ]
    },
    {
      category: "Car Valuation & RC Transfer",
      faqs: [
        {
          question: "How is the car valuation done for loan purposes?",
          answer: "Car valuation is done by certified valuers who assess the vehicle's condition, age, mileage, market demand, and maintenance records. The valuation determines the maximum loan amount you can get."
        },
        {
          question: "What is RC transfer and why is it important?",
          answer: "RC (Registration Certificate) transfer is the legal process of changing vehicle ownership from seller to buyer. It's mandatory for loan approval as it ensures legal ownership and protects both lender and borrower interests."
        },
        {
          question: "How long does RC transfer take?",
          answer: "RC transfer typically takes 7-15 working days depending on the RTO office and documentation completeness. The process involves obtaining NOC from seller, visiting RTO, paying fees, and getting new RC."
        },
        {
          question: "Who bears the cost of car valuation and RC transfer?",
          answer: "Car valuation cost (₹2,000-₹5,000) is typically borne by the borrower. RC transfer costs (₹300-₹500) are also paid by the buyer along with applicable road tax and registration fees."
        }
      ]
    },
    {
      category: "Loan Process & Approval",
      faqs: [
        {
          question: "How long does it take to get loan approval?",
          answer: "Used car loan approval typically takes 24-48 hours after document submission and verification. However, the entire process including disbursement may take 3-7 working days."
        },
        {
          question: "Can I get pre-approved for a used car loan?",
          answer: "Yes, you can get pre-approved based on your income and credit profile. Pre-approval gives you a clear budget and negotiating power when buying a car."
        },
        {
          question: "What happens after loan approval?",
          answer: "After approval, you'll receive a sanction letter with loan terms. Once you finalize the car and complete RC transfer, the loan amount will be disbursed directly to the seller or your account."
        },
        {
          question: "Can I change the car after getting pre-approval?",
          answer: "Yes, you can change the car as long as it meets the loan criteria (age, value, condition). However, the final loan amount may change based on the new car's valuation."
        }
      ]
    },
    {
      category: "EMI & Repayment",
      faqs: [
        {
          question: "How is EMI calculated for used car loans?",
          answer: "EMI is calculated using the formula: [P x R x (1+R)^N] / [(1+R)^N-1], where P is principal, R is monthly interest rate, and N is tenure in months. You can use our EMI calculator for instant calculation."
        },
        {
          question: "Can I change my EMI amount during the loan tenure?",
          answer: "EMI amount is fixed for the entire tenure. However, you can reduce EMI by making prepayments or increase EMI to close the loan faster without any charges."
        },
        {
          question: "What happens if I miss an EMI payment?",
          answer: "Missing EMI payments can result in late payment charges, negative impact on credit score, and in extreme cases, vehicle repossession. Contact us immediately if you face payment difficulties."
        },
        {
          question: "Can I pay EMI through different modes?",
          answer: "Yes, you can pay EMI through auto-debit (ECS/NACH), online banking, mobile banking, cheque, or cash at our branches. Auto-debit is the most convenient option."
        }
      ]
    }
  ]

  const quickAnswers = [
    { question: "Minimum loan amount?", answer: "₹1 lakh" },
    { question: "Maximum loan amount?", answer: "₹50 lakhs" },
    { question: "Interest rate starts from?", answer: "8.5% p.a." },
    { question: "Maximum car age?", answer: "7 years" },
    { question: "Minimum CIBIL score?", answer: "650+" },
    { question: "Processing time?", answer: "24-48 hours" }
  ]

  const contactOptions = [
    {
      title: "Call Us",
      description: "Speak with our loan experts",
      contact: "1800-123-4567",
      icon: <Phone className="w-6 h-6 text-blue-600" />
    },
    {
      title: "Email Support",
      description: "Get detailed answers via email",
      contact: "support@finonest.com",
      icon: <Mail className="w-6 h-6 text-green-600" />
    },
    {
      title: "Live Chat",
      description: "Instant chat support available",
      contact: "Chat Now",
      icon: <MessageCircle className="w-6 h-6 text-purple-600" />
    }
  ]

  return (
    <>
      <Head>
        <title>Used Car Loan FAQ - Frequently Asked Questions | Finonest</title>
        <meta name="description" content="Get answers to frequently asked questions about used car loans. Interest rates, eligibility, documents, EMI calculation, RC transfer process and more." />
        <meta name="keywords" content="used car loan FAQ, used car loan questions, second hand car loan FAQ, pre owned car loan queries, car loan doubts" />
        <link rel="canonical" href="https://finonest.com/used-car-loan/faq" />
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
              <span className="text-gray-600">FAQ</span>
            </nav>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Used Car Loan FAQ</h1>
            <p className="text-xl text-gray-600 mb-6">Get answers to frequently asked questions about used car loans</p>
            <Badge variant="secondary" className="bg-blue-100 text-blue-800 text-lg px-4 py-2">
              <HelpCircle className="w-5 h-5 mr-2" />
              50+ Questions Answered
            </Badge>
          </div>

          {/* Quick Answers */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-center mb-8">Quick Answers</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {quickAnswers.map((qa, index) => (
                <Card key={index} className="text-center">
                  <CardContent className="p-4">
                    <div className="text-sm text-gray-600 mb-1">{qa.question}</div>
                    <div className="text-lg font-bold text-blue-600">{qa.answer}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* FAQ Categories */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Detailed FAQ</h2>
            <div className="space-y-8">
              {faqCategories.map((category, categoryIndex) => (
                <Card key={categoryIndex} className="border-2 hover:border-blue-300 transition-colors">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <HelpCircle className="w-6 h-6 text-blue-600" />
                      {category.category}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Accordion type="single" collapsible>
                      {category.faqs.map((faq, faqIndex) => (
                        <AccordionItem key={faqIndex} value={`item-${categoryIndex}-${faqIndex}`}>
                          <AccordionTrigger className="text-left font-medium hover:text-blue-600">
                            {faq.question}
                          </AccordionTrigger>
                          <AccordionContent className="text-gray-600 leading-relaxed">
                            {faq.answer}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Still Have Questions */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Still Have Questions?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {contactOptions.map((option, index) => (
                <Card key={index} className="text-center h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      {option.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{option.title}</h3>
                    <p className="text-gray-600 mb-4">{option.description}</p>
                    <div className="font-semibold text-blue-600">{option.contact}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Popular Topics */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Popular Topics</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Link href="/used-car-loan/interest-rates">
                <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardContent className="p-6 text-center">
                    <h3 className="font-semibold text-blue-600">Interest Rates</h3>
                    <p className="text-sm text-gray-600 mt-2">Compare rates across credit profiles</p>
                  </CardContent>
                </Card>
              </Link>
              
              <Link href="/used-car-loan/eligibility">
                <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardContent className="p-6 text-center">
                    <h3 className="font-semibold text-blue-600">Eligibility</h3>
                    <p className="text-sm text-gray-600 mt-2">Check if you qualify for loan</p>
                  </CardContent>
                </Card>
              </Link>
              
              <Link href="/used-car-loan/emi-calculator">
                <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardContent className="p-6 text-center">
                    <h3 className="font-semibold text-blue-600">EMI Calculator</h3>
                    <p className="text-sm text-gray-600 mt-2">Calculate monthly payments</p>
                  </CardContent>
                </Card>
              </Link>
              
              <Link href="/used-car-loan/documents">
                <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardContent className="p-6 text-center">
                    <h3 className="font-semibold text-blue-600">Documents</h3>
                    <p className="text-sm text-gray-600 mt-2">Required paperwork checklist</p>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <Card className="bg-gradient-to-r from-blue-600 to-blue-800 text-white border-0">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4">Ready to Apply for Used Car Loan?</h2>
                <p className="text-lg mb-6">Get all your questions answered and apply with confidence</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/used-car-loan">
                    <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                      Apply for Used Car Loan <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                    <Phone className="w-5 h-5 mr-2" />
                    Call Expert: 1800-123-4567
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