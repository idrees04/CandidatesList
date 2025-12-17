import { Suspense } from "react"
import { getCandidates } from "@/lib/data/candidates"
import { sortCandidates } from "@/lib/utils/sort-candidates"
import type { SortOption } from "@/types"
import { CandidateList } from "./_components/candidate-list"
import { SortControls } from "./_components/sort-controls"

interface SearchParams {
  sort?: string
}

export const metadata = {
  title: "Candidates | Talent Hub",
  description: "Browse and manage candidate applications",
}

export default async function CandidatesPage({
  searchParams,
}: {
  searchParams: Promise<SearchParams>
}) {
  const params = await searchParams
  const sortBy = (params.sort as SortOption) ?? "name-asc"

  const candidates = getCandidates()
  const sortedCandidates = sortCandidates(candidates, sortBy)

  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold tracking-tight text-foreground">Candidates</h1>
          <p className="mt-2 text-muted-foreground">{candidates.length} total candidates available</p>
        </div>

        <div className="mb-6">
          <Suspense fallback={<div className="h-10" />}>
            <SortControls currentSort={sortBy} />
          </Suspense>
        </div>

        <CandidateList candidates={sortedCandidates} />
      </div>
    </main>
  )
}
