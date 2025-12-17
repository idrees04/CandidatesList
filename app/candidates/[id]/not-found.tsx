import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function CandidateNotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-4">
      <Card className="max-w-md">
        <CardHeader>
          <CardTitle>Candidate Not Found</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">The candidate you're looking for doesn't exist or has been removed.</p>
          <Button asChild className="w-full">
            <Link href="/candidates">Back to Candidates</Link>
          </Button>
        </CardContent>
      </Card>
    </main>
  )
}
