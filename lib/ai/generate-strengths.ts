const MOCK_STRENGTHS_MAP: Record<string, string[]> = {
  "1": [
    "Strong leadership in frontend architecture",
    "Deep expertise in React ecosystem",
    "Excellent at mentoring junior developers",
    "Track record of delivering scalable solutions",
  ],
  "2": [
    "Versatile full-stack problem solver",
    "Strong API design capabilities",
    "Proven cloud infrastructure experience",
    "Fast learner with diverse tech stack",
  ],
  "3": [
    "Expert in microservices architecture",
    "Strong containerization skills",
    "Focus on system reliability and performance",
    "Collaborative team player",
  ],
  "4": [
    "Infrastructure automation specialist",
    "Deep understanding of CI/CD pipelines",
    "Strong security-first mindset",
    "Experience with high-scale deployments",
  ],
  "5": [
    "User-centric design thinking",
    "Strong prototyping and iteration skills",
    "Experience building design systems",
    "Excellent cross-functional collaboration",
  ],
  "6": [
    "Cross-platform mobile expertise",
    "Strong focus on user experience",
    "Quick at adopting new technologies",
    "Excellent debugging and optimization skills",
  ],
}

export async function generateStrengthsServer(candidateId: string): Promise<string[]> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 800))

  return (
    MOCK_STRENGTHS_MAP[candidateId] ?? [
      "Adaptable professional",
      "Strong communication skills",
      "Growth mindset",
      "Team-oriented approach",
    ]
  )
}

export async function generateStrengths(candidateId: string): Promise<string[]> {
  // In production, this would call the API route
  // For now, we're using the mock directly
  return generateStrengthsServer(candidateId)
}
