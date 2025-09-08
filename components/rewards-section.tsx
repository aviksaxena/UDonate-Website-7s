"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AchievementBadges } from "@/components/achievement-badges"
import { Gift, Star, Zap, Target, Award, ShoppingBag } from "lucide-react"

// Mock user progress data
const userProgress = {
  totalDonated: 15000,
  donationsCount: 8,
  streak: 3,
  badges: ["First Donation", "Generous Heart", "Education Supporter"],
  level: 2,
  pointsToNextLevel: 2500,
  currentLevelPoints: 15000,
  nextLevelPoints: 25000,
}

const rewards = [
  {
    id: 1,
    title: "₹500 Discount Coupon",
    description: "Get ₹500 off on your next donation of ₹5000 or more",
    pointsRequired: 5000,
    category: "Discount",
    icon: ShoppingBag,
    available: true,
    claimed: false,
  },
  {
    id: 2,
    title: "Exclusive NGO Visit",
    description: "Visit one of our partner NGOs and see your impact firsthand",
    pointsRequired: 25000,
    category: "Experience",
    icon: Target,
    available: false,
    claimed: false,
  },
  {
    id: 3,
    title: "Digital Certificate",
    description: "Personalized certificate recognizing your contributions",
    pointsRequired: 10000,
    category: "Recognition",
    icon: Award,
    available: true,
    claimed: false,
  },
  {
    id: 4,
    title: "Premium Donor Status",
    description: "Get priority support and exclusive updates",
    pointsRequired: 50000,
    category: "Status",
    icon: Star,
    available: false,
    claimed: false,
  },
]

const milestones = [
  {
    title: "First Donation",
    description: "Make your first donation",
    progress: 100,
    completed: true,
    reward: "Welcome Badge",
  },
  {
    title: "Generous Heart",
    description: "Donate ₹10,000 in total",
    progress: 100,
    completed: true,
    reward: "Generous Heart Badge",
  },
  {
    title: "Consistent Giver",
    description: "Make donations for 5 consecutive months",
    progress: 60,
    completed: false,
    reward: "Consistency Badge + ₹200 Bonus",
  },
  {
    title: "Champion Donor",
    description: "Donate ₹50,000 in total",
    progress: 30,
    completed: false,
    reward: "Champion Badge + NGO Visit",
  },
]

export function RewardsSection() {
  const [selectedCategory, setSelectedCategory] = useState("all")

  const filteredRewards = rewards.filter((reward) =>
    selectedCategory === "all" ? true : reward.category.toLowerCase() === selectedCategory,
  )

  return (
    <div className="mt-16 space-y-8">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Rewards & Recognition</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Earn points, unlock badges, and get exclusive rewards for your generous contributions to our community.
        </p>
      </div>

      {/* User Progress Overview */}
      <Card className="bg-gradient-to-r from-primary/5 to-accent/5">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="h-5 w-5 text-primary" />
            Your Progress
          </CardTitle>
          <CardDescription>Level {userProgress.level} Donor</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">
                ₹{userProgress.totalDonated.toLocaleString("en-IN")}
              </div>
              <div className="text-sm text-muted-foreground">Total Donated</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-accent">{userProgress.donationsCount}</div>
              <div className="text-sm text-muted-foreground">Donations Made</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">{userProgress.streak}</div>
              <div className="text-sm text-muted-foreground">Month Streak</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-accent">{userProgress.badges.length}</div>
              <div className="text-sm text-muted-foreground">Badges Earned</div>
            </div>
          </div>

          <div className="mt-6">
            <div className="flex justify-between text-sm mb-2">
              <span>Progress to Level {userProgress.level + 1}</span>
              <span>
                ₹{userProgress.currentLevelPoints.toLocaleString("en-IN")} / ₹
                {userProgress.nextLevelPoints.toLocaleString("en-IN")}
              </span>
            </div>
            <Progress value={(userProgress.currentLevelPoints / userProgress.nextLevelPoints) * 100} className="h-3" />
            <div className="text-xs text-muted-foreground mt-1">
              ₹{userProgress.pointsToNextLevel.toLocaleString("en-IN")} more to reach Level {userProgress.level + 1}
            </div>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="rewards" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="rewards">Available Rewards</TabsTrigger>
          <TabsTrigger value="badges">Achievement Badges</TabsTrigger>
          <TabsTrigger value="milestones">Milestones</TabsTrigger>
        </TabsList>

        <TabsContent value="rewards" className="mt-8">
          <div className="space-y-6">
            {/* Filter buttons */}
            <div className="flex flex-wrap gap-2">
              <Button
                variant={selectedCategory === "all" ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory("all")}
              >
                All Rewards
              </Button>
              <Button
                variant={selectedCategory === "discount" ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory("discount")}
              >
                Discounts
              </Button>
              <Button
                variant={selectedCategory === "experience" ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory("experience")}
              >
                Experiences
              </Button>
              <Button
                variant={selectedCategory === "recognition" ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory("recognition")}
              >
                Recognition
              </Button>
            </div>

            {/* Rewards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredRewards.map((reward) => (
                <Card key={reward.id} className={`${reward.available ? "" : "opacity-60"}`}>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <reward.icon className="h-8 w-8 text-primary" />
                      <Badge variant={reward.available ? "default" : "secondary"}>
                        {reward.available ? "Available" : "Locked"}
                      </Badge>
                    </div>
                    <CardTitle className="text-lg">{reward.title}</CardTitle>
                    <CardDescription>{reward.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">Points Required</span>
                        <span className="font-semibold">₹{reward.pointsRequired.toLocaleString("en-IN")}</span>
                      </div>
                      <Button
                        className="w-full"
                        disabled={!reward.available || reward.claimed}
                        variant={reward.available ? "default" : "outline"}
                      >
                        {reward.claimed ? "Claimed" : reward.available ? "Claim Reward" : "Keep Donating"}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </TabsContent>

        <TabsContent value="badges" className="mt-8">
          <AchievementBadges userBadges={userProgress.badges} />
        </TabsContent>

        <TabsContent value="milestones" className="mt-8">
          <div className="space-y-6">
            {milestones.map((milestone, index) => (
              <Card key={index} className={milestone.completed ? "bg-primary/5" : ""}>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      {milestone.completed ? (
                        <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                          <Award className="h-6 w-6 text-primary-foreground" />
                        </div>
                      ) : (
                        <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center">
                          <Target className="h-6 w-6 text-muted-foreground" />
                        </div>
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="font-semibold text-lg">{milestone.title}</h3>
                          <p className="text-muted-foreground">{milestone.description}</p>
                        </div>
                        {milestone.completed && <Badge className="bg-primary text-primary-foreground">Completed</Badge>}
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Progress</span>
                          <span>{milestone.progress}%</span>
                        </div>
                        <Progress value={milestone.progress} className="h-2" />
                        <div className="text-sm text-muted-foreground">
                          <Gift className="h-4 w-4 inline mr-1" />
                          Reward: {milestone.reward}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
