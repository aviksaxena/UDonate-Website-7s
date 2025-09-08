import { Navigation } from "@/components/navigation"
import { StatsDashboard } from "@/components/stats-dashboard"

export const metadata = {
  title: "Donation Stats & Analytics - uDonate",
  description:
    "Track donation trends, impact metrics, and community progress. See how your contributions are making a difference.",
}

export default function StatsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <div className="py-8">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Donation Analytics</h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Track the impact of our community's generosity with real-time statistics, trends, and progress metrics.
              </p>
            </div>

            {/* Stats Dashboard */}
            <StatsDashboard />
          </div>
        </div>
      </main>
    </div>
  )
}
