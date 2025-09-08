"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
} from "recharts"

interface DonationChartsProps {
  showTrends?: boolean
}

// Mock data for charts
const monthlyData = [
  { month: "Jul", donations: 280000, donors: 156 },
  { month: "Aug", donations: 320000, donors: 178 },
  { month: "Sep", donations: 380000, donors: 203 },
  { month: "Oct", donations: 420000, donors: 234 },
  { month: "Nov", donations: 480000, donors: 267 },
  { month: "Dec", donations: 520000, donors: 289 },
]

const categoryData = [
  { name: "Education", value: 1200000, color: "#3b82f6" },
  { name: "Healthcare", value: 980000, color: "#ef4444" },
  { name: "Water & Sanitation", value: 750000, color: "#06b6d4" },
  { name: "Environment", value: 620000, color: "#10b981" },
  { name: "Women Empowerment", value: 480000, color: "#8b5cf6" },
  { name: "Others", value: 470000, color: "#f59e0b" },
]

const weeklyTrends = [
  { week: "Week 1", education: 35000, healthcare: 28000, environment: 22000 },
  { week: "Week 2", education: 42000, healthcare: 31000, environment: 25000 },
  { week: "Week 3", education: 38000, healthcare: 35000, environment: 28000 },
  { week: "Week 4", education: 45000, healthcare: 32000, environment: 30000 },
]

export function DonationCharts({ showTrends = false }: DonationChartsProps) {
  if (showTrends) {
    return (
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Weekly Donation Trends</CardTitle>
            <CardDescription>Donation patterns across top categories this month</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={weeklyTrends}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="week" />
                <YAxis />
                <Tooltip formatter={(value) => [`₹${Number(value).toLocaleString()}`, ""]} />
                <Line type="monotone" dataKey="education" stroke="#3b82f6" strokeWidth={2} name="Education" />
                <Line type="monotone" dataKey="healthcare" stroke="#ef4444" strokeWidth={2} name="Healthcare" />
                <Line type="monotone" dataKey="environment" stroke="#10b981" strokeWidth={2} name="Environment" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Monthly Growth</CardTitle>
              <CardDescription>Donation amounts over the last 6 months</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={monthlyData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip formatter={(value) => [`₹${Number(value).toLocaleString()}`, ""]} />
                  <Bar dataKey="donations" fill="#f97316" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Donor Growth</CardTitle>
              <CardDescription>Number of active donors per month</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={250}>
                <LineChart data={monthlyData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="donors" stroke="#10b981" strokeWidth={3} />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Monthly Donations</CardTitle>
          <CardDescription>Donation amounts over the last 6 months</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip formatter={(value) => [`₹${Number(value).toLocaleString()}`, "Donations"]} />
              <Bar dataKey="donations" fill="#f97316" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Category Distribution</CardTitle>
          <CardDescription>How donations are distributed across different causes</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={categoryData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {categoryData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip formatter={(value) => [`₹${Number(value).toLocaleString()}`, ""]} />
            </PieChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  )
}
