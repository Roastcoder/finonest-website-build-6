import { NextRequest, NextResponse } from 'next/server';

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const body = await request.json();
    
    const updatedContent = {
      _id: params.id,
      ...body,
      updatedAt: new Date().toISOString()
    };

    return NextResponse.json(updatedContent);
  } catch (error) {
    return NextResponse.json({ message: 'Server error' }, { status: 500 });
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    return NextResponse.json({ message: 'SEO content deleted successfully' });
  } catch (error) {
    return NextResponse.json({ message: 'Server error' }, { status: 500 });
  }
}