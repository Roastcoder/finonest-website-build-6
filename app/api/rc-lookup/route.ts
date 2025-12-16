import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { rcNumber } = await request.json()

    if (!rcNumber) {
      return NextResponse.json(
        { success: false, error: 'RC number is required' },
        { status: 400 }
      )
    }

    console.log('Making RC API call with:', { rcNumber, apiKey: process.env.QUICKEKYC_API_KEY })

    const response = await fetch('https://api.quickekyc.com/api/v1/rc/rc-full', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        key: process.env.QUICKEKYC_API_KEY,
        id_number: rcNumber
      })
    })

    const data = await response.json()
    console.log('RC API response:', JSON.stringify(data, null, 2))

    if (data.status === 'success' && data.data) {
      console.log('Returning success with data:', data.data)
      return NextResponse.json({
        success: true,
        data: data.data
      })
    } else {
      console.log('API returned error:', data.message)
      return NextResponse.json(
        { success: false, error: data.message || 'Invalid RC number or data not found' },
        { status: 404 }
      )
    }
  } catch (error) {
    console.error('RC lookup error:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to fetch RC data' },
      { status: 500 }
    )
  }
}