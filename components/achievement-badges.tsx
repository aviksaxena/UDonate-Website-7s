import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, Award, Star, Target, Zap, Shield, Crown, Trophy } from "lucide-react"

interface AchievementBadgesProps {
  userBadges: string[]
}

const allBadges = [
  {
    name: "First Donation",
    description: "Made your first donation",
    icon: Heart,
    color: "bg-pink-500",
    requirement: "Make your first donation",
    earned: true,
  },
  {
    name: "Generous Heart",
    description: "Donated ₹10,000 or more",
    icon: Award,
    color: "bg-purple-500",
    requirement: "Donate ₹10,000 in total",
    earned: true,
  },
  {
    name: "Education Supporter",
    description: "Supports education causes",
    icon: Star,
    color: "bg-blue-500",
    requirement: "Donate to 3 education NGOs",
    earned: true,
  },
  {
    name: "Consistent Giver",
    description: "Donated for 5 consecutive months",
    icon: Target,
    color: "bg-green-500",
    requirement: "Donate for 5 consecutive months",
    earned: false,
  },
  {
    name: "Champion",
    description: "Top 10 donor of the month",
    icon: Trophy,
    color: "bg-yellow-500",
    requirement: "Be in top 10 donors for a month",
    earned: false,
  },
  {
    name: "Healthcare Hero",
    description: "Supports healthcare causes",
    icon: Shield,
    color: "bg-red-500",
    requirement: "Donate to 3 healthcare NGOs",
    earned: false,
  },
  {
    name: "Water Champion",
    description: "Supports water & sanitation",
    icon: Zap,
    color: "bg-cyan-500",
    requirement: "Donate to 3 water & sanitation NGOs",
    earned: false,
  },
  {
    name: "Environment Guardian",
    description: "Supports environmental causes",
    icon: Crown,
    color: "bg-emerald-500",
    requirement: "Donate to 3 environment NGOs",
    earned: false,
  },
]

export function AchievementBadges({ userBadges }: AchievementBadgesProps) {
  const earnedBadges = allBadges.filter((badge) => userBadges.includes(badge.name))
  const availableBadges = allBadges.filter((badge) => !userBadges.includes(badge.name))

  return (
    <div className="space-y-8">
      {/* Earned Badges */}
      <div>
        <h3 className="text-2xl font-bold text-foreground mb-6">Your Badges ({earnedBadges.length})</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {earnedBadges.map((badge) => (
            <Card key={badge.name} className="bg-gradient-to-br from-primary/5 to-accent/5">
              <CardHeader className="text-center">
                <div className={`w-16 h-16 ${badge.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <badge.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-lg">{badge.name}</CardTitle>
                <CardDescription>{badge.description}</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <Badge className="bg-primary text-primary-foreground">Earned</Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Available Badges */}
      <div>
        <h3 className="text-2xl font-bold text-foreground mb-6">Available Badges</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {availableBadges.map((badge) => (
            <Card key={badge.name} className="opacity-60">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                  <badge.icon className="h-8 w-8 text-muted-foreground" />
                </div>
                <CardTitle className="text-lg">{badge.name}</CardTitle>
                <CardDescription>{badge.description}</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-sm text-muted-foreground mb-2">Requirement:</div>
                <div className="text-sm font-medium">{badge.requirement}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
