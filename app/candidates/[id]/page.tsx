import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { getCandidateById } from "@/lib/data/candidates"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Mail, MapPin, Calendar, Briefcase } from "lucide-react"
import { StrengthsSection } from "./_components/strengths-section"

interface CandidateDetailPageProps {
  params: Promise<{ id: string }>
}

const availabilityLabels = {
  immediate: "Available Immediately",
  "2-weeks": "Available in 2 Weeks",
  "1-month": "Available in 1 Month",
}

export async function generateMetadata({ params }: CandidateDetailPageProps) {
  const { id } = await params
  const candidate = getCandidateById(id)

  if (!candidate) {
    return {
      title: "Candidate Not Found",
    }
  }

  return {
    title: `${candidate.name} | Talent Hub`,
    description: `View profile for ${candidate.name} - ${candidate.role}`,
  }
}

export default async function CandidateDetailPage({ params }: CandidateDetailPageProps) {
  const { id } = await params
  const candidate = getCandidateById(id)

  if (!candidate) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
        <Button asChild variant="ghost" className="mb-6 -ml-2">
          <Link href="/candidates" className="gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Candidates
          </Link>
        </Button>

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Profile Card */}
          <Card className="lg:col-span-1">
            <CardHeader className="text-center">
              <Image
                src={candidate.avatar || "/placeholder.svg"}
                alt={candidate.name}
                width={120}
                height={120}
                className="mx-auto rounded-lg"
              />
              <CardTitle className="mt-4">{candidate.name}</CardTitle>
              <p className="text-sm text-muted-foreground">{candidate.role}</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-2 text-sm">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <a href={`mailto:${candidate.email}`} className="text-primary hover:underline">
                  {candidate.email}
                </a>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                <span>{candidate.location}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Briefcase className="h-4 w-4 text-muted-foreground" />
                <span>{candidate.experience} years experience</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Calendar className="h-4 w-4 text-muted-foreground" />
                <span>{availabilityLabels[candidate.availability]}</span>
              </div>
            </CardContent>
          </Card>

          {/* Details Section */}
          <div className="space-y-6 lg:col-span-2">
            {/* Skills */}
            <Card>
              <CardHeader>
                <CardTitle>Skills & Technologies</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {candidate.skills.map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* AI-Generated Strengths */}
            <StrengthsSection candidateId={candidate.id} />

            {/* Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Actions</CardTitle>
              </CardHeader>
              <CardContent className="flex gap-3">
                <Button className="flex-1">Schedule Interview</Button>
                <Button variant="outline" className="flex-1 bg-transparent">
                  Download Resume
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </main>
  )
}
