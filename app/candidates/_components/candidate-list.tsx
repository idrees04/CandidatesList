import type { Candidate } from "@/types"
import { CandidateCard } from "./candidate-card"

interface CandidateListProps {
  candidates: Candidate[]
}

export function CandidateList({ candidates }: CandidateListProps) {
  if (candidates.length === 0) {
    return (
      <div className="rounded-lg border border-border bg-card p-12 text-center">
        <p className="text-muted-foreground">No candidates found</p>
      </div>
    )
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {candidates.map((candidate) => (
        <CandidateCard key={candidate.id} candidate={candidate} />
      ))}
    </div>
  )
}
