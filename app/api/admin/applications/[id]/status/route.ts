import { NextRequest, NextResponse } from 'next/server';

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { status, reviewNotes } = await request.json();
    
    const updatedApplication = {
      _id: params.id,
      status,
      reviewNotes,
      updatedAt: new Date().toISOString()
    };

    return NextResponse.json(updatedApplication);
  } catch (error) {
    return NextResponse.json({ message: 'Server error' }, { status: 500 });
  }
}