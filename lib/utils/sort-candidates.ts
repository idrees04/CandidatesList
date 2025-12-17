import type { Candidate, SortOption } from "@/types"

export function sortCandidates(candidates: Candidate[], sortBy: SortOption): Candidate[] {
  return [...candidates].sort((a, b) => {
    if (sortBy === "name-asc") {
      return a.name.localeCompare(b.name)
    }
    // experience-desc
    return b.experience - a.experience
  })
}
