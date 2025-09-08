import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Search, Heart, BarChart3, Shield } from "lucide-react"

const steps = [
  {
    icon: Search,
    title: "Discover NGOs",
    description: "Browse through our curated list of verified NGOs working across various causes and locations.",
  },
  {
    icon: Heart,
    title: "Choose Your Cause",
    description: "Select the organizations and causes that resonate with your values and passion for change.",
  },
  {
    icon: Shield,
    title: "Donate Securely",
    description: "Make secure donations with complete transparency on how your contribution will be used.",
  },
  {
    icon: BarChart3,
    title: "Track Impact",
    description: "Follow the real-time progress and see the tangible impact your donations are making.",
  },
]

export function HowItWorks() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">How uDonate Works</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Making a difference has never been easier. Follow these simple steps to start your giving journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="text-center hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="bg-primary/10 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <step.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">{step.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
