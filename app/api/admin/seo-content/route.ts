import { NextRequest, NextResponse } from 'next/server';

let seoContent = [
  {
    _id: '1',
    page: 'home',
    title: 'Best Loan Provider in India | Finonest',
    description: 'Finonest offers a wide range of financial products including personal loans, home loans, and business loans.',
    keywords: 'loan, personal loan, home loan, business loan, financial services',
    content: 'Complete financial solutions for all your needs'
  },
  {
    _id: '2',
    page: 'personal-loans',
    title: 'Personal Loans - Quick Approval | Finonest',
    description: 'Get instant personal loans with minimal documentation and competitive interest rates.',
    keywords: 'personal loan, instant loan, quick approval, low interest',
    content: 'Personal loan solutions tailored for you'
  }
];

export async function GET(request: NextRequest) {
  try {
    return NextResponse.json(seoContent);
  } catch (error) {
    return NextResponse.json({ message: 'Server error' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const newContent = {
      _id: Date.now().toString(),
      ...body
    };
    seoContent.push(newContent);
    return NextResponse.json(newContent, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: 'Server error' }, { status: 500 });
  }
}