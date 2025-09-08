"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Crown, Trophy, Medal, Heart, Calendar, TrendingUp } from "lucide-react"

// Mock data for donors
const topDonors = [
  {
    id: 1,
    name: "Rajesh Kumar",
    isAnonymous: false,
    totalDonated: 125000,
    donationsCount: 15,
    joinedDate: "2023-01-15",
    avatar: "/indian-man-donor-avatar.jpg",
    badges: ["Champion", "Consistent Giver", "Education Supporter"],
    streak: 8,
    favoriteCategory: "Education",
  },
  {
    id: 2,
    name: "Anonymous Donor",
    isAnonymous: true,
    totalDonated: 98000,
    donationsCount: 22,
    joinedDate: "2023-03-20",
    avatar: null,
    badges: ["Generous Heart", "Water Champion"],
    streak: 12,
    favoriteCategory: "Water & Sanitation",
  },
  {
    id: 3,
    name: "Priya Sharma",
    isAnonymous: false,
    totalDonated: 87500,
    donationsCount: 18,
    joinedDate: "2023-02-10",
    avatar: "/indian-woman-donor-avatar.jpg",
    badges: ["Healthcare Hero", "Monthly Supporter"],
    streak: 6,
    favoriteCategory: "Healthcare",
  },
  {
    id: 4,
    name: "Anonymous Donor",
    isAnonymous: true,
    totalDonated: 76000,
    donationsCount: 11,
    joinedDate: "2023-04-05",
    avatar: null,
    badges: ["Environment Guardian"],
    streak: 4,
    favoriteCategory: "Environment",
  },
  {
    id: 5,
    name: "Amit Patel",
    isAnonymous: false,
    totalDonated: 65000,
    donationsCount: 13,
    joinedDate: "2023-05-12",
    avatar: "/indian-man-donor-avatar-2.jpg",
    badges: ["Rising Star", "Animal Lover"],
    streak: 5,
    favoriteCategory: "Animal Welfare",
  },
]

const monthlyDonors = [
  {
    id: 1,
    name: "Sneha Reddy",
    isAnonymous: false,
    monthlyDonated: 15000,
    donationsCount: 8,
    avatar: "/indian-woman-donor-avatar-2.jpg",
    badges: ["Monthly Champion"],
    favoriteCategory: "Women Empowerment",
  },
  {
    id: 2,
    name: "Anonymous Donor",
    isAnonymous: true,
    monthlyDonated: 12000,
    donationsCount: 6,
    avatar: null,
    badges: ["Consistent Supporter"],
    favoriteCategory: "Education",
  },
  // Add more monthly donors...
]

const recentDonors = [
  {
    id: 1,
    name: "Vikram Singh",
    isAnonymous: false,
    amount: 5000,
    ngo: "Education for All",
    timeAgo: "2 hours ago",
    avatar: "/indian-man-donor-avatar-3.jpg",
  },
  {
    id: 2,
    name: "Anonymous Donor",
    isAnonymous: true,
    amount: 2500,
    ngo: "Clean Water Initiative",
    timeAgo: "4 hours ago",
    avatar: null,
  },
  // Add more recent donors...
]

export function DonorLeaderboard() {
  const [selectedPeriod, setSelectedPeriod] = useState("all-time")

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Crown className="h-6 w-6 text-yellow-500" />
      case 2:
        return <Trophy className="h-6 w-6 text-gray-400" />
      case 3:
        return <Medal className="h-6 w-6 text-amber-600" />
      default:
        return <span className="text-2xl font-bold text-muted-foreground">#{rank}</span>
    }
  }

  const getRankBadgeColor = (rank: number) => {
    switch (rank) {
      case 1:
        return "bg-gradient-to-r from-yellow-400 to-yellow-600"
      case 2:
        return "bg-gradient-to-r from-gray-300 to-gray-500"
      case 3:
        return "bg-gradient-to-r from-amber-400 to-amber-600"
      default:
        return "bg-muted"
    }
  }

  return (
    <div className="space-y-8">
      <Tabs value={selectedPeriod} onValueChange={setSelectedPeriod} className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="all-time">All Time</TabsTrigger>
          <TabsTrigger value="monthly">This Month</TabsTrigger>
          <TabsTrigger value="recent">Recent Activity</TabsTrigger>
        </TabsList>

        <TabsContent value="all-time" className="mt-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Top 3 Podium */}
            <div className="lg:col-span-3">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Trophy className="h-5 w-5 text-primary" />
                    Top Donors - All Time
                  </CardTitle>
                  <CardDescription>Our most generous supporters making the biggest impact</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {topDonors.slice(0, 3).map((donor, index) => (
                      <div
                        key={donor.id}
                        className={`flex items-center gap-4 p-4 rounded-lg ${getRankBadgeColor(index + 1)} ${
                          index === 0 ? "text-white" : index === 1 ? "text-white" : "text-white"
                        }`}
                      >
                        <div className="flex-shrink-0">{getRankIcon(index + 1)}</div>
                        <Avatar className="h-12 w-12">
                          <AvatarImage src={donor.avatar || undefined} />
                          <AvatarFallback>
                            {donor.isAnonymous
                              ? "?"
                              : donor.name
                                  .split(" ")
                                  .map((n) => n[0])
                                  .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="font-semibold text-lg">
                            {donor.isAnonymous ? "Anonymous Donor" : donor.name}
                          </div>
                          <div className="text-sm opacity-90">
                            ₹{donor.totalDonated.toLocaleString("en-IN")} • {donor.donationsCount} donations
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="flex flex-wrap gap-1 justify-end mb-1">
                            {donor.badges.slice(0, 2).map((badge) => (
                              <Badge key={badge} variant="secondary" className="text-xs bg-white/20 text-white">
                                {badge}
                              </Badge>
                            ))}
                          </div>
                          <div className="text-sm opacity-90">{donor.streak} month streak</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Rest of the leaderboard */}
              <Card className="mt-6">
                <CardHeader>
                  <CardTitle>Complete Leaderboard</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {topDonors.slice(3).map((donor, index) => (
                      <div key={donor.id} className="flex items-center gap-4 p-3 hover:bg-muted/50 rounded-lg">
                        <div className="flex-shrink-0 w-8 text-center">
                          <span className="text-lg font-bold text-muted-foreground">#{index + 4}</span>
                        </div>
                        <Avatar className="h-10 w-10">
                          <AvatarImage src={donor.avatar || undefined} />
                          <AvatarFallback>
                            {donor.isAnonymous
                              ? "?"
                              : donor.name
                                  .split(" ")
                                  .map((n) => n[0])
                                  .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="font-semibold">{donor.isAnonymous ? "Anonymous Donor" : donor.name}</div>
                          <div className="text-sm text-muted-foreground">
                            Supports {donor.favoriteCategory} • Joined {new Date(donor.joinedDate).toLocaleDateString()}
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="font-semibold text-primary">
                            ₹{donor.totalDonated.toLocaleString("en-IN")}
                          </div>
                          <div className="text-sm text-muted-foreground">{donor.donationsCount} donations</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar Stats */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Community Stats</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">₹4.5M</div>
                    <div className="text-sm text-muted-foreground">Total Donated</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-accent">1,247</div>
                    <div className="text-sm text-muted-foreground">Active Donors</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">89</div>
                    <div className="text-sm text-muted-foreground">NGOs Supported</div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Top Categories</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm">Education</span>
                    <span className="text-sm font-semibold">₹1.2M</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Healthcare</span>
                    <span className="text-sm font-semibold">₹980K</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Water & Sanitation</span>
                    <span className="text-sm font-semibold">₹750K</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Environment</span>
                    <span className="text-sm font-semibold">₹620K</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="monthly" className="mt-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-primary" />
                Top Donors - This Month
              </CardTitle>
              <CardDescription>Leading contributors for December 2024</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {monthlyDonors.map((donor, index) => (
                  <div key={donor.id} className="flex items-center gap-4 p-3 hover:bg-muted/50 rounded-lg">
                    <div className="flex-shrink-0 w-8 text-center">{getRankIcon(index + 1)}</div>
                    <Avatar className="h-10 w-10">
                      <AvatarImage src={donor.avatar || undefined} />
                      <AvatarFallback>
                        {donor.isAnonymous
                          ? "?"
                          : donor.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="font-semibold">{donor.isAnonymous ? "Anonymous Donor" : donor.name}</div>
                      <div className="text-sm text-muted-foreground">
                        {donor.donationsCount} donations this month • Supports {donor.favoriteCategory}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold text-primary">₹{donor.monthlyDonated.toLocaleString("en-IN")}</div>
                      <div className="text-sm text-muted-foreground">This month</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="recent" className="mt-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-primary" />
                Recent Donations
              </CardTitle>
              <CardDescription>Latest contributions from our community</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentDonors.map((donor) => (
                  <div key={donor.id} className="flex items-center gap-4 p-3 hover:bg-muted/50 rounded-lg">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src={donor.avatar || undefined} />
                      <AvatarFallback>
                        {donor.isAnonymous
                          ? "?"
                          : donor.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="font-semibold">{donor.isAnonymous ? "Anonymous Donor" : donor.name}</div>
                      <div className="text-sm text-muted-foreground">
                        Donated to {donor.ngo} • {donor.timeAgo}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold text-primary">₹{donor.amount.toLocaleString("en-IN")}</div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Heart className="h-3 w-3 mr-1" />
                        Thank you!
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
