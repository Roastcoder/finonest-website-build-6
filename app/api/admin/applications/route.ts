import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    const applications = [
      {
        _id: '1',
        userId: { _id: '1', name: 'John Doe', email: 'john@example.com' },
        productId: 'personal',
        personalInfo: { 
          fullName: 'John Doe', 
          email: 'john@example.com', 
          phone: '+91 9876543210' 
        },
        financialInfo: { 
          loanAmount: 500000, 
          monthlyIncome: 75000 
        },
        status: 'pending',
        createdAt: '2024-01-15T10:30:00Z'
      },
      {
        _id: '2',
        userId: { _id: '2', name: 'Jane Smith', email: 'jane@example.com' },
        productId: 'home',
        personalInfo: { 
          fullName: 'Jane Smith', 
          email: 'jane@example.com', 
          phone: '+91 9876543211' 
        },
        financialInfo: { 
          loanAmount: 2500000, 
          monthlyIncome: 120000 
        },
        status: 'approved',
        createdAt: '2024-01-14T15:45:00Z'
      }
    ];

    return NextResponse.json(applications);
  } catch (error) {
    return NextResponse.json({ message: 'Server error' }, { status: 500 });
  }
}