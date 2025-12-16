import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    const users = [
      {
        _id: '1',
        name: 'John Doe',
        email: 'john@example.com',
        role: 'customer',
        isVerified: true,
        createdAt: '2024-01-10T10:30:00Z'
      },
      {
        _id: '2',
        name: 'Jane Smith',
        email: 'jane@example.com',
        role: 'customer',
        isVerified: true,
        createdAt: '2024-01-12T15:45:00Z'
      },
      {
        _id: '3',
        name: 'Admin User',
        email: 'admin@finonest.com',
        role: 'admin',
        isVerified: true,
        createdAt: '2024-01-01T00:00:00Z'
      }
    ];

    return NextResponse.json(users);
  } catch (error) {
    return NextResponse.json({ message: 'Server error' }, { status: 500 });
  }
}