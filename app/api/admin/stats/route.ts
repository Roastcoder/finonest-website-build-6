import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    const stats = {
      totalUsers: 1250,
      totalProducts: 7,
      totalApplications: 342,
      pendingApplications: 45,
      approvedApplications: 287
    };

    return NextResponse.json(stats);
  } catch (error) {
    return NextResponse.json({ message: 'Server error' }, { status: 500 });
  }
}