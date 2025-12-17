"use client"

import { useRouter, useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import type { SortOption } from "@/types"
import { ArrowUpDown } from "lucide-react"

interface SortControlsProps {
  currentSort: SortOption
}

export function SortControls({ currentSort }: SortControlsProps) {
  const router = useRouter()
  const searchParams = useSearchParams()

  const handleSort = (sort: SortOption) => {
    const params = new URLSearchParams(searchParams.toString())
    params.set("sort", sort)
    router.push(`?${params.toString()}`)
  }

  return (
    <div className="flex items-center gap-3">
      <span className="text-sm font-medium text-muted-foreground">Sort by:</span>
      <div className="flex gap-2">
        <Button
          variant={currentSort === "name-asc" ? "default" : "outline"}
          size="sm"
          onClick={() => handleSort("name-asc")}
          className="gap-2"
        >
          <ArrowUpDown className="h-4 w-4" />
          Name
        </Button>
        <Button
          variant={currentSort === "experience-desc" ? "default" : "outline"}
          size="sm"
          onClick={() => handleSort("experience-desc")}
          className="gap-2"
        >
          <ArrowUpDown className="h-4 w-4" />
          Experience
        </Button>
      </div>
    </div>
  )
}
