import type { Candidate } from "@/types"

export const MOCK_CANDIDATES: Candidate[] = [
  {
    id: "1",
    name: "Sarah Chen",
    email: "sarah.chen@example.com",
    role: "Senior Frontend Engineer",
    experience: 7,
    skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Node.js"],
    avatar: "/professional-woman-developer.png",
    location: "San Francisco, CA",
    availability: "immediate",
  },
  {
    id: "2",
    name: "Marcus Johnson",
    email: "marcus.j@example.com",
    role: "Full Stack Developer",
    experience: 5,
    skills: ["Python", "Django", "React", "PostgreSQL", "AWS"],
    avatar: "/professional-man-developer.png",
    location: "Austin, TX",
    availability: "2-weeks",
  },
  {
    id: "3",
    name: "Aisha Patel",
    email: "aisha.patel@example.com",
    role: "Backend Engineer",
    experience: 4,
    skills: ["Go", "Kubernetes", "Docker", "MongoDB", "gRPC"],
    avatar: "/professional-woman-engineer.png",
    location: "Seattle, WA",
    availability: "1-month",
  },
  {
    id: "4",
    name: "David Kim",
    email: "david.kim@example.com",
    role: "DevOps Engineer",
    experience: 6,
    skills: ["Terraform", "Jenkins", "AWS", "Linux", "Ansible"],
    avatar: "/professional-engineer.png",
    location: "New York, NY",
    availability: "2-weeks",
  },
  {
    id: "5",
    name: "Elena Rodriguez",
    email: "elena.r@example.com",
    role: "Product Designer",
    experience: 8,
    skills: ["Figma", "User Research", "Prototyping", "Design Systems", "HTML/CSS"],
    avatar: "/professional-woman-designer.png",
    location: "Los Angeles, CA",
    availability: "immediate",
  },
  {
    id: "6",
    name: "James Wilson",
    email: "james.wilson@example.com",
    role: "Mobile Developer",
    experience: 3,
    skills: ["React Native", "Swift", "Kotlin", "Firebase", "GraphQL"],
    avatar: "/professional-mobile-developer.png",
    location: "Chicago, IL",
    availability: "1-month",
  },
]

export function getCandidates(): Candidate[] {
  return MOCK_CANDIDATES
}

export function getCandidateById(id: string): Candidate | undefined {
  return MOCK_CANDIDATES.find((candidate) => candidate.id === id)
}
