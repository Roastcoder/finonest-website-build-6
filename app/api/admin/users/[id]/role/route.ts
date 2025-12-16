import { NextRequest, NextResponse } from 'next/server';

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { role } = await request.json();
    
    const updatedUser = {
      _id: params.id,
      role,
      updatedAt: new Date().toISOString()
    };

    return NextResponse.json(updatedUser);
  } catch (error) {
    return NextResponse.json({ message: 'Server error' }, { status: 500 });
  }
}