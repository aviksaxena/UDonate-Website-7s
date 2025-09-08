import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, Users, MapPin } from "lucide-react"

const featuredNGOs = [
  {
    id: 1,
    name: "Education for All",
    mission: "Providing quality education to underprivileged children in rural areas",
    category: "Education",
    location: "Maharashtra, India",
    image: "/children-studying-in-classroom.jpg",
    raised: "₹2,50,000",
    goal: "₹5,00,000",
    supporters: 156,
  },
  {
    id: 2,
    name: "Clean Water Initiative",
    mission: "Building wells and water purification systems in drought-affected regions",
    category: "Water & Sanitation",
    location: "Rajasthan, India",
    image: "/clean-water-well-in-village.jpg",
    raised: "₹1,80,000",
    goal: "₹3,00,000",
    supporters: 89,
  },
  {
    id: 3,
    name: "Healthcare Heroes",
    mission: "Mobile medical units serving remote communities with essential healthcare",
    category: "Healthcare",
    location: "West Bengal, India",
    image: "/mobile-medical-unit-helping-patients.jpg",
    raised: "₹3,20,000",
    goal: "₹4,50,000",
    supporters: 203,
  },
]

export function FeaturedNGOs() {
  return (
    <section className="py-16 lg:py-24 bg-card/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Featured NGOs Making a Difference</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover trusted organizations creating real impact in communities across India
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredNGOs.map((ngo) => (
            <Card key={ngo.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video overflow-hidden">
                <img
                  src={ngo.image || "/placeholder.svg"}
                  alt={ngo.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <Badge variant="secondary" className="mb-2">
                    {ngo.category}
                  </Badge>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4 mr-1" />
                    {ngo.location}
                  </div>
                </div>
                <CardTitle className="text-xl">{ngo.name}</CardTitle>
                <CardDescription className="text-sm leading-relaxed">{ngo.mission}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Raised</span>
                    <span className="font-semibold text-primary">{ngo.raised}</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div
                      className="bg-primary h-2 rounded-full transition-all duration-300"
                      style={{
                        width: `${(Number.parseInt(ngo.raised.replace(/[₹,]/g, "")) / Number.parseInt(ngo.goal.replace(/[₹,]/g, ""))) * 100}%`,
                      }}
                    />
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Goal: {ngo.goal}</span>
                    <div className="flex items-center text-muted-foreground">
                      <Users className="h-4 w-4 mr-1" />
                      {ngo.supporters}
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex gap-2">
                <Button className="flex-1 bg-primary hover:bg-primary/90">
                  <Heart className="h-4 w-4 mr-2" />
                  Donate Now
                </Button>
                <Button variant="outline" className="flex-1 bg-transparent">
                  Learn More
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="px-8 bg-transparent">
            View All NGOs
          </Button>
        </div>
      </div>
    </section>
  )
}
