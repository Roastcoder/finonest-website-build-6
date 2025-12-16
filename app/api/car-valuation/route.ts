import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { brand, model: carModel, year, fuelType, kmDriven, city, checklist } = await request.json()

    if (!brand || !carModel || !year) {
      return NextResponse.json(
        { success: false, error: 'Brand, model, and year are required' },
        { status: 400 }
      )
    }

    const apiKey = process.env.GEMINI_API_KEY
    
    const prompt = `
      Act as an expert used car valuator for the Indian market. 
      Provide a valuation estimation based on the following details.
      
      Vehicle Details:
      - Make/Model: ${brand} ${carModel}
      - Year: ${year}
      - Kilometers Driven: ${kmDriven || 'Not specified'}
      - Fuel Type: ${fuelType || 'Petrol'}
      - City: ${city || 'Not specified'}

      ${checklist ? `Condition Checklist:
      - Tyres: ${checklist.tyres || 'Good'}
      - Battery: ${checklist.battery || 'Good'}
      - Body Condition: ${checklist.body || 'Good'}
      - Engine Sound: ${checklist.engine || 'Smooth'}
      - Insurance: ${checklist.insurance || 'Comprehensive'}
      - Accident History: ${checklist.accidents || 'None'}` : ''}

      Task:
      1. Estimate the fair market price range (Buying and Selling price) in INR (Lakhs).
      2. Provide a brief analysis of the condition.
      3. Give positive and negative factors.
      
      Output ONLY valid JSON in this format:
      {
        "min_price": "Number (in Lakhs, e.g. 4.50)",
        "max_price": "Number (in Lakhs, e.g. 5.10)",
        "currency": "₹",
        "analysis": "String (2-3 sentences explaining the value based on condition and market)",
        "positive_factors": ["Array of strings"],
        "negative_factors": ["Array of strings"],
        "demand_rating": "High/Medium/Low"
      }
    `

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-exp:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
          generationConfig: {
            responseMimeType: "application/json"
          }
        }),
      }
    )

    if (!response.ok) {
      throw new Error(`API Error: ${response.statusText}`)
    }

    const data = await response.json()
    const resultText = data.candidates?.[0]?.content?.parts?.[0]?.text
    
    if (resultText) {
      const parsedResult = JSON.parse(resultText)
      return NextResponse.json({
        success: true,
        data: parsedResult
      })
    } else {
      throw new Error("No valuation data received.")
    }

  } catch (error) {
    console.error('Gemini API error:', error)
    
    // Fallback calculation
    const baseValue = 5.0 // 5 lakhs
    const yearFactor = (2024 - parseInt(year)) * 0.1
    const kmFactor = parseInt(kmDriven || '0') / 100000 * 0.2
    const calculatedValue = baseValue * (1 - yearFactor - kmFactor)
    const minPrice = Math.max(calculatedValue * 0.9, 1.0)
    const maxPrice = Math.max(calculatedValue * 1.1, 1.2)
    
    return NextResponse.json({
      success: true,
      data: {
        min_price: minPrice.toFixed(2),
        max_price: maxPrice.toFixed(2),
        currency: "₹",
        analysis: "Estimated based on basic depreciation model. Physical inspection recommended for accurate valuation.",
        positive_factors: ["Standard depreciation applied"],
        negative_factors: ["Limited data for precise valuation"],
        demand_rating: "Medium"
      }
    })
  }
}