import Product from '../models/Product';

export const seedProducts = async () => {
  const products = [
    {
      id: "car-valuation",
      title: "Car Valuation",
      tagline: "Know your car's worth instantly",
      description: "Get accurate market valuation of your car instantly. Use it for selling, buying, or loan applications with our advanced AI-powered tool.",
      category: "valuation",
      rate: "Free",
      maxAmount: "Unlimited",
      tenure: "Instant",
      processingFee: "₹0",
      color: "#FF6B35",
      features: [
        "Instant AI-powered valuation",
        "Market-based pricing",
        "Free unlimited checks",
        "Loan eligibility assessment",
        "Detailed market analysis"
      ],
      eligibility: [
        "Any car owner",
        "Valid registration details",
        "Basic car information",
        "No hidden charges"
      ]
    },
    {
      id: "personal",
      title: "Personal Loans",
      tagline: "For all your personal needs",
      description: "Get quick personal loans with minimal documentation. Whether it's for a wedding, medical emergency, or travel, we've got you covered.",
      category: "loan",
      rate: "10.5%",
      maxAmount: "₹25 Lakhs",
      tenure: "1-5 Years",
      processingFee: "1%",
      color: "#0064D6",
      features: [
        "Instant approval in 24 hours",
        "Minimal documentation required",
        "No collateral needed",
        "Flexible EMI options",
        "Prepayment without penalty"
      ],
      eligibility: [
        "Age: 21-60 years",
        "Minimum income: ₹25,000/month",
        "Employment: Salaried or Self-employed",
        "Credit score: 650+"
      ]
    },
    {
      id: "home",
      title: "Home Loans",
      tagline: "Make your dream home a reality",
      description: "Affordable home loans with the longest tenure and lowest interest rates. Turn your dream of owning a home into reality.",
      category: "loan",
      rate: "8.5%",
      maxAmount: "₹5 Crores",
      tenure: "5-30 Years",
      processingFee: "0.5%",
      color: "#12D6E7",
      features: [
        "Lowest interest rates in market",
        "Up to 90% financing",
        "Balance transfer facility",
        "Top-up loan available",
        "Tax benefits under Section 80C"
      ],
      eligibility: [
        "Age: 23-65 years",
        "Minimum income: ₹40,000/month",
        "Employment: 2+ years experience",
        "Property: Within city limits"
      ]
    },
    {
      id: "business",
      title: "Business Loans",
      tagline: "Fuel your business growth",
      description: "Flexible business loans to help you expand operations, manage working capital, or invest in new equipment.",
      category: "loan",
      rate: "12%",
      maxAmount: "₹50 Lakhs",
      tenure: "1-7 Years",
      processingFee: "1.5%",
      color: "#008B96",
      features: [
        "Quick disbursement",
        "Collateral-free up to ₹25L",
        "Overdraft facility available",
        "Working capital financing",
        "Equipment financing"
      ],
      eligibility: [
        "Business age: 2+ years",
        "Annual turnover: ₹10L+",
        "ITR for last 2 years",
        "GST registration"
      ]
    },
    {
      id: "credit",
      title: "Credit Cards",
      tagline: "Exclusive rewards & benefits",
      description: "Premium credit cards with cashback, travel rewards, and exclusive lifestyle benefits tailored for your spending habits.",
      category: "card",
      rate: "0%",
      maxAmount: "₹10 Lakhs",
      tenure: "Lifetime",
      processingFee: "₹0",
      color: "#002E9C",
      features: [
        "Up to 5% cashback",
        "Airport lounge access",
        "Travel insurance cover",
        "Fuel surcharge waiver",
        "EMI conversion on purchases"
      ],
      eligibility: [
        "Age: 21-65 years",
        "Minimum income: ₹30,000/month",
        "Good credit history",
        "No defaults in last 6 months"
      ]
    },
    {
      id: "vehicle",
      title: "Vehicle Loans",
      tagline: "Drive your dream car home",
      description: "Easy vehicle loans for new and used cars with competitive rates and quick processing. Get on the road faster.",
      category: "loan",
      rate: "9.5%",
      maxAmount: "₹1 Crore",
      tenure: "1-7 Years",
      processingFee: "0.5%",
      color: "#0064D6",
      features: [
        "Up to 100% on-road funding",
        "New & used car financing",
        "Quick 1-day approval",
        "Doorstep document pickup",
        "Insurance assistance"
      ],
      eligibility: [
        "Age: 21-65 years",
        "Minimum income: ₹25,000/month",
        "Employment: Stable job/business",
        "Valid driving license"
      ]
    },
    {
      id: "education",
      title: "Education Loans",
      tagline: "Invest in your future",
      description: "Comprehensive education loans covering tuition, living expenses, and more for studies in India and abroad.",
      category: "loan",
      rate: "7.5%",
      maxAmount: "₹75 Lakhs",
      tenure: "5-15 Years",
      processingFee: "0%",
      color: "#12D6E7",
      features: [
        "Zero processing fee",
        "Moratorium during study",
        "Covers all expenses",
        "No collateral up to ₹7.5L",
        "Tax benefits under 80E"
      ],
      eligibility: [
        "Age: 18-35 years",
        "Admission to recognized institution",
        "Co-applicant required",
        "Academic merit considered"
      ]
    }
  ];

  try {
    await Product.deleteMany({});
    await Product.insertMany(products);
    console.log('Products seeded successfully');
  } catch (error) {
    console.error('Error seeding products:', error);
  }
};