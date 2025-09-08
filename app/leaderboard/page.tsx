import { Navigation } from "@/components/navigation"
import { DonorLeaderboard } from "@/components/donor-leaderboard"
import { RewardsSection } from "@/components/rewards-section"

export const metadata = {
  title: "Leaderboard & Rewards - uDonate",
  description:
    "Celebrate our top donors and discover rewards for your generous contributions. Join our community of changemakers.",
}

export default function LeaderboardPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <div className="py-8">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Community Leaderboard</h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Celebrating our generous donors and the incredible impact they're making. Join our community of
                changemakers and earn rewards for your contributions.
              </p>
            </div>

            {/* Leaderboard */}
            <DonorLeaderboard />

            {/* Rewards Section */}
            <RewardsSection />
          </div>
        </div>
      </main>
    </div>
  )
}
