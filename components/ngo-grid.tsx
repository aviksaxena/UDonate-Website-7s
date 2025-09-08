import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, Users, MapPin, Star, Shield } from "lucide-react"
import Link from "next/link"

interface NGO {
  id: number
  name: string
  mission: string
  description: string
  category: string
  location: string
  image: string
  raised: number
  goal: number
  supporters: number
  verified: boolean
  rating: number
  established: number
}

interface NGOGridProps {
  ngos: NGO[]
}

export function NGOGrid({ ngos }: NGOGridProps) {
  if (ngos.length === 0) {
    return (
      <div className="text-center py-16">
        <div className="text-6xl mb-4">🔍</div>
        <h3 className="text-2xl font-semibold text-foreground mb-2">No NGOs Found</h3>
        <p className="text-muted-foreground">
          Try adjusting your search criteria or filters to find more organizations.
        </p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {ngos.map((ngo) => (
        <Card key={ngo.id} className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
          <div className="aspect-video overflow-hidden relative">
            <img
              src={ngo.image || "/placeholder.svg"}
              alt={ngo.name}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
            {ngo.verified && (
              <div className="absolute top-3 right-3 bg-primary/90 backdrop-blur-sm rounded-full p-1">
                <Shield className="h-4 w-4 text-primary-foreground" />
              </div>
            )}
          </div>

          <CardHeader className="pb-3">
            <div className="flex items-start justify-between mb-2">
              <Badge variant="secondary" className="text-xs">
                {ngo.category}
              </Badge>
              <div className="flex items-center text-sm text-muted-foreground">
                <Star className="h-3 w-3 mr-1 fill-current text-yellow-500" />
                {ngo.rating}
              </div>
            </div>

            <CardTitle className="text-xl leading-tight">{ngo.name}</CardTitle>

            <div className="flex items-center text-sm text-muted-foreground mb-2">
              <MapPin className="h-4 w-4 mr-1" />
              {ngo.location} • Est. {ngo.established}
            </div>

            <CardDescription className="text-sm leading-relaxed line-clamp-2">{ngo.mission}</CardDescription>
          </CardHeader>

          <CardContent className="pb-4">
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Raised</span>
                <span className="font-semibold text-primary">₹{ngo.raised.toLocaleString("en-IN")}</span>
              </div>

              <div className="w-full bg-muted rounded-full h-2">
                <div
                  className="bg-primary h-2 rounded-full transition-all duration-300"
                  style={{ width: `${Math.min((ngo.raised / ngo.goal) * 100, 100)}%` }}
                />
              </div>

              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Goal: ₹{ngo.goal.toLocaleString("en-IN")}</span>
                <div className="flex items-center text-muted-foreground">
                  <Users className="h-4 w-4 mr-1" />
                  {ngo.supporters}
                </div>
              </div>

              <div className="text-xs text-muted-foreground">{Math.round((ngo.raised / ngo.goal) * 100)}% funded</div>
            </div>
          </CardContent>

          <CardFooter className="flex gap-2 pt-0">
            <Button className="flex-1 bg-primary hover:bg-primary/90">
              <Heart className="h-4 w-4 mr-2" />
              Donate Now
            </Button>
            <Button asChild variant="outline" className="flex-1 bg-transparent">
              <Link href={`/ngo/${ngo.id}`}>Learn More</Link>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
