"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { X, Heart } from "lucide-react"

interface NGO {
  id: number
  name: string
  [key: string]: any
}

interface DonationFormProps {
  ngo: NGO
  onClose: () => void
}

export function DonationForm({ ngo, onClose }: DonationFormProps) {
  const [donationType, setDonationType] = useState("one-time")
  const [amount, setAmount] = useState("")
  const [customAmount, setCustomAmount] = useState("")
  const [frequency, setFrequency] = useState("monthly")
  const [donorInfo, setDonorInfo] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const predefinedAmounts = [500, 1000, 2500, 5000, 10000]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle donation submission
    console.log("Donation submitted:", {
      ngo: ngo.id,
      type: donationType,
      amount: amount || customAmount,
      frequency: donationType === "recurring" ? frequency : null,
      donor: donorInfo,
    })
    // Show success message and close form
    alert("Thank you for your donation! You will receive a confirmation email shortly.")
    onClose()
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-2xl">Book Your Donation</CardTitle>
              <CardDescription>Supporting {ngo.name}</CardDescription>
            </div>
            <Button variant="ghost" size="sm" onClick={onClose}>
              <X className="h-4 w-4" />
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Donation Type */}
            <div className="space-y-3">
              <Label className="text-base font-semibold">Donation Type</Label>
              <RadioGroup value={donationType} onValueChange={setDonationType}>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="one-time" id="one-time" />
                  <Label htmlFor="one-time">One-time Donation</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="recurring" id="recurring" />
                  <Label htmlFor="recurring">Recurring Donation</Label>
                </div>
              </RadioGroup>
            </div>

            {/* Recurring Frequency */}
            {donationType === "recurring" && (
              <div className="space-y-3">
                <Label className="text-base font-semibold">Frequency</Label>
                <Select value={frequency} onValueChange={setFrequency}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="monthly">Monthly</SelectItem>
                    <SelectItem value="quarterly">Quarterly</SelectItem>
                    <SelectItem value="yearly">Yearly</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            )}

            {/* Amount Selection */}
            <div className="space-y-3">
              <Label className="text-base font-semibold">Donation Amount</Label>
              <div className="grid grid-cols-3 gap-3">
                {predefinedAmounts.map((amt) => (
                  <Button
                    key={amt}
                    type="button"
                    variant={amount === amt.toString() ? "default" : "outline"}
                    onClick={() => {
                      setAmount(amt.toString())
                      setCustomAmount("")
                    }}
                    className="h-12"
                  >
                    ₹{amt.toLocaleString("en-IN")}
                  </Button>
                ))}
              </div>
              <div className="relative">
                <Input
                  type="number"
                  placeholder="Enter custom amount"
                  value={customAmount}
                  onChange={(e) => {
                    setCustomAmount(e.target.value)
                    setAmount("")
                  }}
                  className="pl-8"
                />
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground">₹</span>
              </div>
            </div>

            {/* Donor Information */}
            <div className="space-y-4">
              <Label className="text-base font-semibold">Your Information</Label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    required
                    value={donorInfo.name}
                    onChange={(e) => setDonorInfo({ ...donorInfo, name: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={donorInfo.email}
                    onChange={(e) => setDonorInfo({ ...donorInfo, email: e.target.value })}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={donorInfo.phone}
                  onChange={(e) => setDonorInfo({ ...donorInfo, phone: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message (Optional)</Label>
                <Textarea
                  id="message"
                  placeholder="Share why this cause matters to you..."
                  value={donorInfo.message}
                  onChange={(e) => setDonorInfo({ ...donorInfo, message: e.target.value })}
                />
              </div>
            </div>

            {/* Summary */}
            <div className="bg-muted/50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Donation Summary</h4>
              <div className="space-y-1 text-sm">
                <div className="flex justify-between">
                  <span>Amount:</span>
                  <span className="font-semibold">₹{(amount || customAmount || "0").toLocaleString("en-IN")}</span>
                </div>
                <div className="flex justify-between">
                  <span>Type:</span>
                  <span className="capitalize">
                    {donationType === "recurring" ? `${frequency} recurring` : "One-time"}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Beneficiary:</span>
                  <span>{ngo.name}</span>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex gap-3">
              <Button type="button" variant="outline" onClick={onClose} className="flex-1 bg-transparent">
                Cancel
              </Button>
              <Button
                type="submit"
                className="flex-1 bg-primary hover:bg-primary/90"
                disabled={!donorInfo.name || !donorInfo.email || (!amount && !customAmount)}
              >
                <Heart className="h-4 w-4 mr-2" />
                Confirm Donation
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
