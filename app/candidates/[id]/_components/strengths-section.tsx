"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Sparkles } from "lucide-react"
import { generateStrengths } from "@/lib/ai/generate-strengths"

interface StrengthsSectionProps {
  candidateId: string
}

export function StrengthsSection({ candidateId }: StrengthsSectionProps) {
  const [strengths, setStrengths] = useState<string[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function loadStrengths() {
      setIsLoading(true)
      const result = await generateStrengths(candidateId)
      setStrengths(result)
      setIsLoading(false)
    }

    loadStrengths()
  }, [candidateId])

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-2">
          <Sparkles className="h-5 w-5 text-primary" />
          <CardTitle>AI-Generated Strengths</CardTitle>
        </div>
        <p className="text-sm text-muted-foreground">Key strengths identified through profile analysis</p>
      </CardHeader>
      <CardContent>
        {isLoading ? (
          <div className="space-y-2">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="h-8 w-full animate-pulse rounded bg-muted" />
            ))}
          </div>
        ) : (
          <ul className="space-y-3">
            {strengths.map((strength, index) => (
              <li key={index} className="flex items-start gap-3">
                <Badge variant="outline" className="mt-0.5 shrink-0">
                  {index + 1}
                </Badge>
                <span className="text-sm leading-relaxed">{strength}</span>
              </li>
            ))}
          </ul>
        )}
      </CardContent>
    </Card>
  )
}
