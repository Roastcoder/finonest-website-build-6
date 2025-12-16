import { NextRequest, NextResponse } from 'next/server';

export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  try {
    const { slug } = params;
    
    if (slug === 'used-car-loan') {
      const seoContent = {
        pageSlug: 'used-car-loan',
        title: 'Used Car Loan - Best Interest Rates Starting @ 8.5% | Finonest',
        metaDescription: 'Get instant used car loan approval with lowest interest rates starting @ 8.5%. Quick processing, minimal documentation. Apply online for pre-owned car financing today!',
        metaKeywords: ['used car loan', 'pre-owned car financing', 'second hand car loan', 'car loan for old cars', 'used vehicle financing'],
        h1: 'Used Car Loan - Finance Your Dream Pre-Owned Car',
        h2Tags: ['Best Used Car Loan Interest Rates', 'Quick Approval Process', 'Eligibility Criteria', 'EMI Calculator'],
        content: {
          heroSection: {
            title: 'Used Car Loan - Finance Your Dream Pre-Owned Car',
            subtitle: 'Get instant approval with competitive rates starting @ 8.5%',
            description: 'Transform your dream of owning a car into reality with our hassle-free used car loan. Get up to 100% financing for pre-owned vehicles with quick processing and minimal documentation.',
            ctaText: 'Apply for Used Car Loan'
          },
          features: [
            {
              title: 'Lowest Interest Rates',
              description: 'Starting from 8.5% per annum with flexible repayment options',
              icon: 'award'
            },
            {
              title: 'Quick Approval',
              description: 'Get loan approval within 24 hours with minimal documentation',
              icon: 'clock'
            },
            {
              title: '100% Financing',
              description: 'Finance up to 100% of your used car\'s value',
              icon: 'shield'
            },
            {
              title: 'Flexible Tenure',
              description: 'Repayment tenure up to 7 years for comfortable EMIs',
              icon: 'users'
            }
          ],
          benefits: [
            {
              title: 'No Hidden Charges',
              description: 'Transparent pricing with no hidden fees or charges'
            },
            {
              title: 'Cars up to 7 Years Old',
              description: 'Finance pre-owned cars manufactured within last 7 years'
            },
            {
              title: 'Insurance Assistance',
              description: 'Complete support for car insurance and registration'
            },
            {
              title: 'Doorstep Service',
              description: 'Document collection and verification at your convenience'
            }
          ],
          eligibility: [
            {
              criteria: 'Age',
              description: '21-65 years for salaried, 25-65 years for self-employed'
            },
            {
              criteria: 'Income',
              description: 'Minimum ₹25,000/month for salaried, ₹3 lakh/year for self-employed'
            },
            {
              criteria: 'Employment',
              description: 'Minimum 2 years work experience or business vintage'
            },
            {
              criteria: 'Credit Score',
              description: 'CIBIL score of 650 and above preferred'
            }
          ],
          faq: [
            {
              question: 'What is the maximum loan amount for used car loans?',
              answer: 'You can get up to ₹50 lakhs as used car loan depending on your income and the car\'s value.'
            },
            {
              question: 'What documents are required for used car loan?',
              answer: 'Basic documents include identity proof, address proof, income proof, bank statements, and car-related documents.'
            },
            {
              question: 'Can I get a loan for a car older than 5 years?',
              answer: 'Yes, we provide loans for cars up to 7 years old from the date of manufacture.'
            },
            {
              question: 'How is the loan amount calculated?',
              answer: 'Loan amount is calculated based on the car\'s current market value, your income, and repayment capacity.'
            }
          ],
          testimonials: [
            {
              name: 'Rajesh Kumar',
              review: 'Got my used car loan approved within 24 hours. The process was smooth and transparent.',
              rating: 5
            },
            {
              name: 'Priya Sharma',
              review: 'Excellent service and competitive interest rates. Highly recommend Finonest for car loans.',
              rating: 5
            }
          ]
        },
        schema: {
          type: 'Product',
          data: {
            '@context': 'https://schema.org/',
            '@type': 'Product',
            'name': 'Used Car Loan',
            'description': 'Get instant used car loan approval with lowest interest rates starting @ 8.5%',
            'brand': {
              '@type': 'Brand',
              'name': 'Finonest'
            },
            'offers': {
              '@type': 'Offer',
              'price': '8.5',
              'priceCurrency': 'INR',
              'availability': 'https://schema.org/InStock'
            }
          }
        },
        isActive: true
      };
      
      return NextResponse.json(seoContent);
    }
    
    return NextResponse.json({ message: 'Content not found' }, { status: 404 });
  } catch (error) {
    return NextResponse.json({ message: 'Server error' }, { status: 500 });
  }
}