"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { FileText, CheckCircle, Download, Upload, ArrowRight, AlertCircle } from "lucide-react"
import Link from "next/link"
import Head from "next/head"

export default function UsedCarLoanDocumentsPage() {
  const documentCategories = [
    {
      category: "Identity & Address Proof",
      documents: [
        { name: "Aadhaar Card", required: true, description: "Government issued identity proof" },
        { name: "PAN Card", required: true, description: "Permanent Account Number card" },
        { name: "Passport", required: false, description: "Alternative identity proof" },
        { name: "Voter ID", required: false, description: "Alternative identity proof" },
        { name: "Utility Bills", required: true, description: "Electricity/Gas bill (last 3 months)" },
        { name: "Rent Agreement", required: false, description: "If staying in rented accommodation" }
      ]
    },
    {
      category: "Income & Employment Proof",
      documents: [
        { name: "Salary Slips", required: true, description: "Last 3 months for salaried" },
        { name: "Bank Statements", required: true, description: "Last 6 months statements" },
        { name: "ITR Returns", required: true, description: "Last 2 years for self-employed" },
        { name: "Employment Certificate", required: true, description: "Letter from current employer" },
        { name: "Form 16", required: false, description: "Tax deduction certificate" },
        { name: "Business License", required: false, description: "For self-employed individuals" }
      ]
    },
    {
      category: "Vehicle Related Documents",
      documents: [
        { name: "Registration Certificate (RC)", required: true, description: "Original RC of the vehicle" },
        { name: "Insurance Papers", required: true, description: "Valid insurance certificate" },
        { name: "NOC from Seller", required: true, description: "No Objection Certificate" },
        { name: "Car Valuation Report", required: true, description: "Professional valuation certificate" },
        { name: "Pollution Certificate", required: true, description: "Valid PUC certificate" },
        { name: "Service Records", required: false, description: "Maintenance history if available" }
      ]
    }
  ]

  const documentTips = [
    {
      title: "Keep Documents Ready",
      description: "Organize all documents before applying to speed up the approval process",
      icon: <FileText className="w-6 h-6 text-blue-600" />
    },
    {
      title: "Original + Photocopies",
      description: "Carry both original documents and self-attested photocopies",
      icon: <CheckCircle className="w-6 h-6 text-green-600" />
    },
    {
      title: "Digital Copies",
      description: "Scan all documents in high quality for online application",
      icon: <Upload className="w-6 h-6 text-purple-600" />
    },
    {
      title: "Verify Information",
      description: "Ensure all information matches across different documents",
      icon: <AlertCircle className="w-6 h-6 text-orange-600" />
    }
  ]

  const rcTransferProcess = [
    {
      step: 1,
      title: "Obtain NOC from Seller",
      description: "Get No Objection Certificate from the current owner",
      documents: ["Original RC", "Insurance papers", "Seller's ID proof"]
    },
    {
      step: 2,
      title: "Visit RTO Office",
      description: "Go to the RTO office where the car is currently registered",
      documents: ["NOC", "Buyer's documents", "Form 29 & 30"]
    },
    {
      step: 3,
      title: "Pay Transfer Fees",
      description: "Pay the required fees for RC transfer process",
      documents: ["Fee receipt", "Road tax clearance"]
    },
    {
      step: 4,
      title: "Get New RC",
      description: "Receive new RC in buyer's name within 7-15 days",
      documents: ["New RC", "Updated insurance"]
    }
  ]

  const commonMistakes = [
    "Submitting expired documents",
    "Mismatched information across documents",
    "Poor quality photocopies or scans",
    "Missing co-applicant documents",
    "Incomplete bank statements",
    "Invalid or expired car insurance",
    "Missing NOC from seller",
    "Incorrect car valuation report"
  ]

  return (
    <>
      <Head>
        <title>Used Car Loan Documents Required - Complete Checklist | Finonest</title>
        <meta name="description" content="Complete list of documents required for used car loan. Identity proof, income proof, vehicle documents, RC transfer process. Download document checklist." />
        <meta name="keywords" content="used car loan documents, used car loan documents required, second hand car loan documents, pre owned car loan papers, RC transfer documents" />
        <link rel="canonical" href="https://finonest.com/used-car-loan/documents" />
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
              <span className="text-gray-600">Documents</span>
            </nav>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Used Car Loan Documents Required</h1>
            <p className="text-xl text-gray-600 mb-6">Complete checklist of documents needed for quick used car loan approval</p>
            <Badge variant="secondary" className="bg-green-100 text-green-800 text-lg px-4 py-2">
              <Download className="w-5 h-5 mr-2" />
              Download Checklist
            </Badge>
          </div>

          {/* Document Categories */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Document Categories</h2>
            <div className="space-y-8">
              {documentCategories.map((category, index) => (
                <Card key={index} className="border-2 hover:border-blue-300 transition-colors">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <FileText className="w-6 h-6 text-blue-600" />
                      {category.category}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {category.documents.map((doc, docIndex) => (
                        <div key={docIndex} className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                          <div className="flex-shrink-0 mt-1">
                            {doc.required ? (
                              <Badge variant="destructive" className="text-xs">Required</Badge>
                            ) : (
                              <Badge variant="secondary" className="text-xs">Optional</Badge>
                            )}
                          </div>
                          <div>
                            <h4 className="font-semibold text-sm">{doc.name}</h4>
                            <p className="text-xs text-gray-600 mt-1">{doc.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* RC Transfer Process */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-4">RC Transfer Process</h2>
            <p className="text-center text-gray-600 mb-8">Step-by-step guide for transferring vehicle ownership</p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {rcTransferProcess.map((step, index) => (
                <Card key={index} className="relative">
                  <CardContent className="p-6">
                    <div className="absolute -top-3 -left-3 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                      {step.step}
                    </div>
                    <h3 className="font-semibold text-lg mb-2 mt-2">{step.title}</h3>
                    <p className="text-sm text-gray-600 mb-4">{step.description}</p>
                    <div className="space-y-1">
                      <h4 className="text-xs font-medium text-blue-600">Required:</h4>
                      {step.documents.map((doc, docIndex) => (
                        <div key={docIndex} className="flex items-center gap-2">
                          <CheckCircle className="w-3 h-3 text-green-600" />
                          <span className="text-xs">{doc}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-lg p-6">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-yellow-800 mb-2">Important Note about RC Transfer</h3>
                  <p className="text-yellow-700 text-sm">
                    RC transfer is mandatory for loan approval. The loan will be processed only after the vehicle is legally transferred to your name. 
                    This process typically takes 7-15 working days and costs ₹300-₹500 depending on the state.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Document Tips */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Document Preparation Tips</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {documentTips.map((tip, index) => (
                <Card key={index} className="text-center h-full">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      {tip.icon}
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{tip.title}</h3>
                    <p className="text-sm text-gray-600">{tip.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Common Mistakes */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Common Document Mistakes to Avoid</h2>
            <Card className="bg-red-50 border-red-200">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-4">
                  {commonMistakes.map((mistake, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-red-700">{mistake}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Document Verification Process */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Document Verification Process</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-center">
                    <Upload className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                    Upload Documents
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      Submit scanned copies online
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      High quality, clear images
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      All pages included
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-center">
                    <FileText className="w-8 h-8 text-orange-600 mx-auto mb-2" />
                    Initial Verification
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      Document completeness check
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      Information validation
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      Feedback within 24 hours
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-center">
                    <CheckCircle className="w-8 h-8 text-green-600 mx-auto mb-2" />
                    Final Approval
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      Physical verification if needed
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      Loan approval confirmation
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      Disbursement process
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <Card className="bg-gradient-to-r from-blue-600 to-blue-800 text-white border-0">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4">Ready with Your Documents?</h2>
                <p className="text-lg mb-6">Apply for used car loan now with all required documents</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/used-car-loan">
                    <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                      Apply for Used Car Loan <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                    <Download className="w-5 h-5 mr-2" />
                    Download Checklist
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