export interface Candidate {
  id: string
  name: string
  email: string
  role: string
  experience: number // years
  skills: string[]
  avatar?: string
  location: string
  availability: "immediate" | "2-weeks" | "1-month"
}

export type SortOption = "name-asc" | "experience-desc"
