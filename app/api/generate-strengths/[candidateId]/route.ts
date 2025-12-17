// This is a placeholder for a potential route handler.
// The README instructions suggest creating a route handler or server action.
// This example shows a route handler.

import { type NextRequest, NextResponse } from "next/server"
import { generateStrengthsServer } from "@/lib/ai/generate-strengths" // Use the server-side logic

export async function GET(request: NextRequest, { params }: { params: { candidateId: string } }) {
  const { candidateId } = params

  if (!candidateId) {
    return NextResponse.json({ error: "Candidate ID is required" }, { status: 400 })
  }

  try {
    const strengths = await generateStrengthsServer(candidateId)
    return NextResponse.json({ strengths })
  } catch (error: any) {
    console.error(`Error generating strengths for ${candidateId}:`, error)
    return NextResponse.json({ error: error.message || "Failed to generate strengths" }, { status: 500 })
  }
}
