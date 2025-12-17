import Link from "next/link"
import Image from "next/image"
import type { Candidate } from "@/types"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MapPin, Calendar, Briefcase } from "lucide-react"

interface CandidateCardProps {
  candidate: Candidate
}

const availabilityLabels = {
  immediate: "Immediate",
  "2-weeks": "2 Weeks",
  "1-month": "1 Month",
}

export function CandidateCard({ candidate }: CandidateCardProps) {
  return (
    <Card className="flex flex-col transition-shadow hover:shadow-lg">
      <CardHeader className="pb-4">
        <div className="flex items-start gap-4">
          <Image
            src={candidate.avatar || "/placeholder.svg"}
            alt={candidate.name}
            width={64}
            height={64}
            className="rounded-lg"
          />
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-lg leading-tight text-foreground truncate">{candidate.name}</h3>
            <p className="text-sm text-muted-foreground mt-1">{candidate.role}</p>
          </div>
        </div>
      </CardHeader>

      <CardContent className="flex-1 space-y-4">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <MapPin className="h-4 w-4" />
          <span>{candidate.location}</span>
        </div>

        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Briefcase className="h-4 w-4" />
          <span>{candidate.experience} years experience</span>
        </div>

        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Calendar className="h-4 w-4" />
          <span>{availabilityLabels[candidate.availability]}</span>
        </div>

        <div className="flex flex-wrap gap-2">
          {candidate.skills.slice(0, 3).map((skill) => (
            <Badge key={skill} variant="secondary" className="text-xs">
              {skill}
            </Badge>
          ))}
          {candidate.skills.length > 3 && (
            <Badge variant="outline" className="text-xs">
              +{candidate.skills.length - 3}
            </Badge>
          )}
        </div>
      </CardContent>

      <CardFooter>
        <Button asChild className="w-full">
          <Link href={`/candidates/${candidate.id}`}>View Profile</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
