import { NextRequest, NextResponse } from 'next/server';

let products = [
  {
    _id: '1',
    id: 'personal-loans',
    title: 'Personal Loans',
    description: 'Quick personal loans with minimal documentation',
    rate: '10.5%',
    maxAmount: '₹25 Lakhs',
    tenure: '1-5 Years',
    processingFee: '1%',
    isActive: true
  },
  {
    _id: '2',
    id: 'home-loans',
    title: 'Home Loans',
    description: 'Affordable home loans with lowest interest rates',
    rate: '8.5%',
    maxAmount: '₹5 Crores',
    tenure: '5-30 Years',
    processingFee: '0.5%',
    isActive: true
  },
  {
    _id: '3',
    id: 'business-loans',
    title: 'Business Loans',
    description: 'Flexible business loans for growth',
    rate: '12%',
    maxAmount: '₹50 Lakhs',
    tenure: '1-7 Years',
    processingFee: '1.5%',
    isActive: true
  }
];

export async function GET(request: NextRequest) {
  try {
    return NextResponse.json(products);
  } catch (error) {
    return NextResponse.json({ message: 'Server error' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const newProduct = {
      _id: Date.now().toString(),
      ...body
    };
    products.push(newProduct);
    return NextResponse.json(newProduct, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: 'Server error' }, { status: 500 });
  }
}