"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DonationCharts } from "@/components/donation-charts"
import { ImpactMetrics } from "@/components/impact-metrics"
import { TrendingUp, Users, Heart, Target, Award, ArrowUp } from "lucide-react"

// Mock data for statistics
const overallStats = {
  totalDonated: 4500000,
  totalDonors: 1247,
  activeDonors: 892,
  ngoSupported: 89,
  monthlyGrowth: 12.5,
  donorGrowth: 8.3,
  averageDonation: 3610,
  recurringDonors: 456,
}

const categoryStats = [
  { name: "Education", amount: 1200000, percentage: 26.7, donors: 423, color: "bg-blue-500" },
  { name: "Healthcare", amount: 980000, percentage: 21.8, donors: 356, color: "bg-red-500" },
  { name: "Water & Sanitation", amount: 750000, percentage: 16.7, donors: 289, color: "bg-cyan-500" },
  { name: "Environment", amount: 620000, percentage: 13.8, donors: 234, color: "bg-green-500" },
  { name: "Women Empowerment", amount: 480000, percentage: 10.7, donors: 198, color: "bg-purple-500" },
  { name: "Animal Welfare", amount: 320000, percentage: 7.1, donors: 156, color: "bg-orange-500" },
  { name: "Disaster Relief", amount: 150000, percentage: 3.3, donors: 89, color: "bg-yellow-500" },
]

const monthlyTargets = [
  { month: "Education", target: 150000, achieved: 142000, percentage: 94.7 },
  { month: "Healthcare", target: 120000, achieved: 108000, percentage: 90.0 },
  { month: "Water & Sanitation", target: 100000, achieved: 95000, percentage: 95.0 },
  { month: "Environment", target: 80000, achieved: 72000, percentage: 90.0 },
]

const recentMilestones = [
  { title: "₹4.5M Total Donations", date: "Dec 15, 2024", type: "financial" },
  { title: "1000+ Active Donors", date: "Dec 10, 2024", type: "community" },
  { title: "50 New NGOs Onboarded", date: "Dec 5, 2024", type: "growth" },
  { title: "₹500K Monthly Record", date: "Nov 30, 2024", type: "financial" },
]

export function StatsDashboard() {
  return (
    <div className="space-y-8">
      {/* Key Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Donated</CardTitle>
            <Heart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">₹{(overallStats.totalDonated / 1000000).toFixed(1)}M</div>
            <div className="flex items-center text-xs text-muted-foreground">
              <ArrowUp className="h-3 w-3 text-green-500 mr-1" />+{overallStats.monthlyGrowth}% from last month
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Donors</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-accent">{overallStats.totalDonors.toLocaleString()}</div>
            <div className="flex items-center text-xs text-muted-foreground">
              <ArrowUp className="h-3 w-3 text-green-500 mr-1" />+{overallStats.donorGrowth}% from last month
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Donors</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">{overallStats.activeDonors}</div>
            <div className="text-xs text-muted-foreground">
              {((overallStats.activeDonors / overallStats.totalDonors) * 100).toFixed(1)}% of total donors
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">NGOs Supported</CardTitle>
            <Target className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-accent">{overallStats.ngoSupported}</div>
            <div className="text-xs text-muted-foreground">Across 7 categories</div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="categories">Categories</TabsTrigger>
          <TabsTrigger value="trends">Trends</TabsTrigger>
          <TabsTrigger value="impact">Impact</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="mt-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Main Charts */}
            <div className="lg:col-span-2">
              <DonationCharts />
            </div>

            {/* Sidebar Stats */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Quick Stats</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Average Donation</span>
                    <span className="font-semibold">₹{overallStats.averageDonation.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Recurring Donors</span>
                    <span className="font-semibold">{overallStats.recurringDonors}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Monthly Growth</span>
                    <span className="font-semibold text-green-600">+{overallStats.monthlyGrowth}%</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Award className="h-4 w-4" />
                    Recent Milestones
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {recentMilestones.map((milestone, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <div>
                        <div className="font-medium text-sm">{milestone.title}</div>
                        <div className="text-xs text-muted-foreground">{milestone.date}</div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="categories" className="mt-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Donation by Category</CardTitle>
                <CardDescription>Distribution of donations across different causes</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {categoryStats.map((category) => (
                  <div key={category.name} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="font-medium">{category.name}</span>
                      <span className="text-muted-foreground">
                        ₹{(category.amount / 1000).toLocaleString()}K ({category.percentage}%)
                      </span>
                    </div>
                    <Progress value={category.percentage} className="h-2" />
                    <div className="text-xs text-muted-foreground">{category.donors} donors supporting this cause</div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Monthly Targets</CardTitle>
                <CardDescription>Progress towards monthly donation goals</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {monthlyTargets.map((target) => (
                  <div key={target.month} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="font-medium">{target.month}</span>
                      <span className="text-muted-foreground">
                        ₹{(target.achieved / 1000).toLocaleString()}K / ₹{(target.target / 1000).toLocaleString()}K
                      </span>
                    </div>
                    <Progress value={target.percentage} className="h-2" />
                    <div className="flex justify-between text-xs">
                      <span className="text-muted-foreground">{target.percentage.toFixed(1)}% achieved</span>
                      <Badge variant={target.percentage >= 95 ? "default" : "secondary"}>
                        {target.percentage >= 95 ? "On Track" : "Needs Support"}
                      </Badge>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="trends" className="mt-8">
          <DonationCharts showTrends={true} />
        </TabsContent>

        <TabsContent value="impact" className="mt-8">
          <ImpactMetrics />
        </TabsContent>
      </Tabs>
    </div>
  )
}
