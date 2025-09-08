"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Heart, Droplets, TreePine, Users, Home, Utensils, BookOpen } from "lucide-react"

const impactData = [
  {
    category: "Education",
    icon: GraduationCap,
    color: "text-blue-500",
    bgColor: "bg-blue-500",
    metrics: [
      { label: "Students Educated", value: 12500, target: 15000, unit: "" },
      { label: "Schools Built", value: 45, target: 50, unit: "" },
      { label: "Scholarships Provided", value: 890, target: 1000, unit: "" },
      { label: "Teachers Trained", value: 234, target: 300, unit: "" },
    ],
  },
  {
    category: "Healthcare",
    icon: Heart,
    color: "text-red-500",
    bgColor: "bg-red-500",
    metrics: [
      { label: "Patients Treated", value: 8900, target: 10000, unit: "" },
      { label: "Medical Camps", value: 156, target: 200, unit: "" },
      { label: "Medicines Distributed", value: 45000, target: 50000, unit: "units" },
      { label: "Health Workers Trained", value: 123, target: 150, unit: "" },
    ],
  },
  {
    category: "Water & Sanitation",
    icon: Droplets,
    color: "text-cyan-500",
    bgColor: "bg-cyan-500",
    metrics: [
      { label: "Wells Built", value: 78, target: 100, unit: "" },
      { label: "People with Clean Water", value: 23400, target: 30000, unit: "" },
      { label: "Toilets Constructed", value: 234, target: 300, unit: "" },
      { label: "Villages Covered", value: 45, target: 60, unit: "" },
    ],
  },
  {
    category: "Environment",
    icon: TreePine,
    color: "text-green-500",
    bgColor: "bg-green-500",
    metrics: [
      { label: "Trees Planted", value: 125000, target: 150000, unit: "" },
      { label: "Waste Recycled", value: 2340, target: 3000, unit: "tons" },
      { label: "Solar Panels Installed", value: 456, target: 500, unit: "" },
      { label: "Communities Engaged", value: 89, target: 100, unit: "" },
    ],
  },
]

const communityImpact = [
  { icon: Users, label: "Lives Impacted", value: "50,000+", description: "Directly benefited from donations" },
  { icon: Home, label: "Communities Reached", value: "234", description: "Across rural and urban areas" },
  { icon: Utensils, label: "Meals Provided", value: "125,000", description: "Through food security programs" },
  { icon: BookOpen, label: "Books Distributed", value: "25,000", description: "Educational materials and resources" },
]

export function ImpactMetrics() {
  return (
    <div className="space-y-8">
      {/* Community Impact Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {communityImpact.map((item, index) => (
          <Card key={index}>
            <CardContent className="pt-6">
              <div className="flex items-center gap-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-foreground">{item.value}</div>
                  <div className="text-sm font-medium text-foreground">{item.label}</div>
                  <div className="text-xs text-muted-foreground">{item.description}</div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Category-wise Impact */}
      <div className="space-y-6">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-foreground mb-2">Impact by Category</h3>
          <p className="text-muted-foreground">Detailed progress across our focus areas</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {impactData.map((category) => (
            <Card key={category.category}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <category.icon className={`h-5 w-5 ${category.color}`} />
                  {category.category} Impact
                </CardTitle>
                <CardDescription>Progress towards our {category.category.toLowerCase()} goals</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.metrics.map((metric, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="font-medium">{metric.label}</span>
                      <span className="text-muted-foreground">
                        {metric.value.toLocaleString()} / {metric.target.toLocaleString()} {metric.unit}
                      </span>
                    </div>
                    <Progress value={(metric.value / metric.target) * 100} className="h-2" />
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-muted-foreground">
                        {((metric.value / metric.target) * 100).toFixed(1)}% achieved
                      </span>
                      <Badge variant={metric.value / metric.target >= 0.8 ? "default" : "secondary"}>
                        {metric.value / metric.target >= 0.8 ? "On Track" : "In Progress"}
                      </Badge>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Success Stories */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Success Stories</CardTitle>
          <CardDescription>Highlighting the real-world impact of our community's generosity</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <div className="font-semibold text-primary">Rural School Transformation</div>
              <div className="text-sm text-muted-foreground">
                Thanks to ₹2.5L in donations, we've transformed a rural school in Maharashtra, providing education to
                300+ children with new classrooms, computers, and trained teachers.
              </div>
            </div>
            <div className="space-y-2">
              <div className="font-semibold text-primary">Clean Water Access</div>
              <div className="text-sm text-muted-foreground">
                Our ₹1.8L water initiative brought clean drinking water to 15 villages in Rajasthan, directly impacting
                5,000+ lives with new wells and filtration systems.
              </div>
            </div>
            <div className="space-y-2">
              <div className="font-semibold text-primary">Healthcare Outreach</div>
              <div className="text-sm text-muted-foreground">
                Mobile medical camps funded by ₹3.2L in donations have provided free healthcare to 2,000+ patients in
                remote areas, including surgeries and treatments.
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
