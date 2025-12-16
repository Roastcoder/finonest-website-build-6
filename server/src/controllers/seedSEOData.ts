import SEOContent from '../models/SEOContent';

export const seedUsedCarLoanSEO = async () => {
  try {
    const existingContent = await SEOContent.findOne({ pageSlug: 'used-car-loan' });
    
    if (!existingContent) {
      const usedCarLoanSEO = new SEOContent({
        pageSlug: 'used-car-loan',
        title: 'Used Car Loan - Best Interest Rates Starting @ 8.5% | Finonest',
        metaDescription: 'Get instant used car loan approval with lowest interest rates starting @ 8.5%. Quick processing, minimal documentation. Apply online for pre-owned car financing today!',
        metaKeywords: [
          'used car loan',
          'pre-owned car financing',
          'second hand car loan',
          'car loan for old cars',
          'used vehicle financing',
          'pre-owned vehicle loan',
          'second hand vehicle financing',
          'old car loan',
          'used car finance',
          'pre-owned car loan rates'
        ],
        h1: 'Used Car Loan - Finance Your Dream Pre-Owned Car',
        h2Tags: [
          'Best Used Car Loan Interest Rates in India',
          'Quick Approval Process for Used Car Loans',
          'Used Car Loan Eligibility Criteria',
          'Used Car Loan EMI Calculator',
          'Documents Required for Used Car Loan',
          'Benefits of Used Car Financing'
        ],
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
              description: 'Starting from 8.5% per annum with flexible repayment options for used car loans',
              icon: 'award'
            },
            {
              title: 'Quick Approval',
              description: 'Get used car loan approval within 24 hours with minimal documentation',
              icon: 'clock'
            },
            {
              title: '100% Financing',
              description: 'Finance up to 100% of your used car\'s current market value',
              icon: 'shield'
            },
            {
              title: 'Flexible Tenure',
              description: 'Repayment tenure up to 7 years for comfortable EMIs on used car loans',
              icon: 'users'
            }
          ],
          benefits: [
            {
              title: 'No Hidden Charges',
              description: 'Transparent pricing with no hidden fees or charges for used car loans'
            },
            {
              title: 'Cars up to 7 Years Old',
              description: 'Finance pre-owned cars manufactured within last 7 years'
            },
            {
              title: 'Insurance Assistance',
              description: 'Complete support for used car insurance and registration'
            },
            {
              title: 'Doorstep Service',
              description: 'Document collection and verification at your convenience for used car loans'
            },
            {
              title: 'Same Day Disbursal',
              description: 'Get your used car loan amount disbursed on the same day of approval'
            },
            {
              title: 'Competitive Rates',
              description: 'Best-in-market interest rates for used car financing'
            }
          ],
          eligibility: [
            {
              criteria: 'Age Requirement',
              description: '21-65 years for salaried individuals, 25-65 years for self-employed'
            },
            {
              criteria: 'Income Criteria',
              description: 'Minimum ₹25,000/month for salaried, ₹3 lakh/year for self-employed'
            },
            {
              criteria: 'Employment History',
              description: 'Minimum 2 years work experience or business vintage'
            },
            {
              criteria: 'Credit Score',
              description: 'CIBIL score of 650 and above preferred for used car loans'
            },
            {
              criteria: 'Car Age',
              description: 'Vehicle should not be more than 7 years old from date of manufacture'
            },
            {
              criteria: 'Documentation',
              description: 'Valid driving license and complete KYC documents required'
            }
          ],
          faq: [
            {
              question: 'What is the maximum loan amount for used car loans?',
              answer: 'You can get up to ₹50 lakhs as used car loan depending on your income, repayment capacity, and the car\'s current market value.'
            },
            {
              question: 'What documents are required for used car loan application?',
              answer: 'Required documents include identity proof (Aadhaar, PAN), address proof, income proof (salary slips/ITR), bank statements for 6 months, driving license, and car-related documents (RC, insurance, NOC if applicable).'
            },
            {
              question: 'Can I get a loan for a car older than 5 years?',
              answer: 'Yes, we provide used car loans for vehicles up to 7 years old from the date of manufacture. The loan amount and tenure may vary based on the car\'s age and condition.'
            },
            {
              question: 'How is the used car loan amount calculated?',
              answer: 'The loan amount is calculated based on the car\'s current market value, your income, repayment capacity, and creditworthiness. We typically finance up to 85-100% of the car\'s value.'
            },
            {
              question: 'What is the processing time for used car loans?',
              answer: 'Our used car loans are processed within 24-48 hours with all required documents. In many cases, we provide same-day approval and disbursal.'
            },
            {
              question: 'Do you provide loans for commercial used vehicles?',
              answer: 'Yes, we provide financing for both personal and commercial used vehicles including cars, SUVs, and light commercial vehicles.'
            },
            {
              question: 'Can I prepay my used car loan?',
              answer: 'Yes, you can prepay your used car loan partially or fully. We offer flexible prepayment options with minimal or no prepayment charges.'
            },
            {
              question: 'What is the interest rate for used car loans?',
              answer: 'Our used car loan interest rates start from 8.5% per annum and may vary based on your credit profile, loan amount, and tenure.'
            }
          ],
          testimonials: [
            {
              name: 'Rajesh Kumar',
              review: 'Got my used car loan approved within 24 hours. The process was smooth and transparent. Highly recommend Finonest for used car financing.',
              rating: 5
            },
            {
              name: 'Priya Sharma',
              review: 'Excellent service and competitive interest rates for used car loans. The team was very helpful throughout the process.',
              rating: 5
            },
            {
              name: 'Amit Patel',
              review: 'Best used car loan rates in the market. Quick approval and hassle-free documentation process.',
              rating: 5
            },
            {
              name: 'Sneha Reddy',
              review: 'Finonest made my dream of buying a used car come true with their affordable EMI options and quick processing.',
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
            'description': 'Get instant used car loan approval with lowest interest rates starting @ 8.5%. Quick processing for pre-owned vehicle financing.',
            'brand': {
              '@type': 'Brand',
              'name': 'Finonest'
            },
            'offers': {
              '@type': 'Offer',
              'price': '8.5',
              'priceCurrency': 'INR',
              'availability': 'https://schema.org/InStock',
              'priceValidUntil': '2024-12-31'
            },
            'aggregateRating': {
              '@type': 'AggregateRating',
              'ratingValue': '4.8',
              'reviewCount': '1250'
            }
          }
        },
        isActive: true
      });

      await usedCarLoanSEO.save();
      console.log('Used Car Loan SEO content seeded successfully');
    } else {
      console.log('Used Car Loan SEO content already exists');
    }
  } catch (error) {
    console.error('Error seeding Used Car Loan SEO content:', error);
  }
};