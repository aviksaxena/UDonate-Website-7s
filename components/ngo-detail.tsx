"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DonationForm } from "@/components/donation-form"
import { DonationBreakdown } from "@/components/donation-breakdown"
import { Heart, Users, MapPin, Star, Shield, Globe, Mail, Phone, Calendar, Quote } from "lucide-react"

interface NGO {
  id: number
  name: string
  mission: string
  description: string
  fullDescription: string
  category: string
  location: string
  image: string
  gallery: string[]
  raised: number
  goal: number
  supporters: number
  verified: boolean
  rating: number
  established: number
  website: string
  email: string
  phone: string
  address: string
  programs: Array<{
    name: string
    description: string
    budget: number
    beneficiaries: number
  }>
  impact: Record<string, number>
  testimonials: Array<{
    name: string
    role: string
    content: string
    image: string
  }>
}

interface NGODetailProps {
  ngo: NGO
}

export function NGODetail({ ngo }: NGODetailProps) {
  const [showDonationForm, setShowDonationForm] = useState(false)
  const [selectedImage, setSelectedImage] = useState(0)

  const progressPercentage = Math.min((ngo.raised / ngo.goal) * 100, 100)

  return (
    <div className="py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Image Gallery */}
          <div className="lg:col-span-2">
            <div className="aspect-video overflow-hidden rounded-lg mb-4">
              <img
                src={ngo.gallery[selectedImage] || ngo.image}
                alt={ngo.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-2">
              {ngo.gallery.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-video overflow-hidden rounded border-2 transition-all ${
                    selectedImage === index ? "border-primary" : "border-transparent"
                  }`}
                >
                  <img
                    src={image || "/placeholder.svg"}
                    alt={`${ngo.name} gallery ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* NGO Info & Donation Card */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <Badge variant="secondary">{ngo.category}</Badge>
                  {ngo.verified && (
                    <div className="flex items-center text-primary">
                      <Shield className="h-4 w-4 mr-1" />
                      <span className="text-sm">Verified</span>
                    </div>
                  )}
                </div>
                <CardTitle className="text-2xl">{ngo.name}</CardTitle>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-1" />
                    {ngo.location}
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    Est. {ngo.established}
                  </div>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 mr-1 fill-current text-yellow-500" />
                    {ngo.rating}
                  </div>
                </div>
                <CardDescription className="text-base leading-relaxed">{ngo.mission}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Raised</span>
                    <span className="font-semibold text-primary text-lg">₹{ngo.raised.toLocaleString("en-IN")}</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-3">
                    <div
                      className="bg-primary h-3 rounded-full transition-all duration-300"
                      style={{ width: `${progressPercentage}%` }}
                    />
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Goal: ₹{ngo.goal.toLocaleString("en-IN")}</span>
                    <div className="flex items-center text-muted-foreground">
                      <Users className="h-4 w-4 mr-1" />
                      {ngo.supporters} supporters
                    </div>
                  </div>
                  <div className="text-center text-sm text-muted-foreground">
                    {Math.round(progressPercentage)}% funded
                  </div>
                </div>
                <Button
                  className="w-full mt-6 bg-primary hover:bg-primary/90"
                  size="lg"
                  onClick={() => setShowDonationForm(true)}
                >
                  <Heart className="h-5 w-5 mr-2" />
                  Book Your Donation
                </Button>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center text-sm">
                  <Globe className="h-4 w-4 mr-2 text-muted-foreground" />
                  <a
                    href={ngo.website}
                    className="text-primary hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit Website
                  </a>
                </div>
                <div className="flex items-center text-sm">
                  <Mail className="h-4 w-4 mr-2 text-muted-foreground" />
                  <a href={`mailto:${ngo.email}`} className="text-primary hover:underline">
                    {ngo.email}
                  </a>
                </div>
                <div className="flex items-center text-sm">
                  <Phone className="h-4 w-4 mr-2 text-muted-foreground" />
                  <a href={`tel:${ngo.phone}`} className="text-primary hover:underline">
                    {ngo.phone}
                  </a>
                </div>
                <div className="flex items-start text-sm">
                  <MapPin className="h-4 w-4 mr-2 mt-0.5 text-muted-foreground" />
                  <span>{ngo.address}</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Detailed Information Tabs */}
        <Tabs defaultValue="about" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="about">About</TabsTrigger>
            <TabsTrigger value="programs">Programs</TabsTrigger>
            <TabsTrigger value="impact">Impact</TabsTrigger>
            <TabsTrigger value="testimonials">Stories</TabsTrigger>
          </TabsList>

          <TabsContent value="about" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>About {ngo.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed mb-6">{ngo.fullDescription}</p>
                <DonationBreakdown programs={ngo.programs} />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="programs" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {ngo.programs.map((program, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-lg">{program.name}</CardTitle>
                    <CardDescription>{program.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Budget Allocation</span>
                        <span className="font-semibold">₹{program.budget.toLocaleString("en-IN")}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Beneficiaries</span>
                        <span className="font-semibold">{program.beneficiaries.toLocaleString("en-IN")}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="impact" className="mt-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {Object.entries(ngo.impact).map(([key, value]) => (
                <Card key={key} className="text-center">
                  <CardContent className="pt-6">
                    <div className="text-3xl font-bold text-primary mb-2">{value.toLocaleString("en-IN")}</div>
                    <div className="text-sm text-muted-foreground capitalize">
                      {key.replace(/([A-Z])/g, " $1").trim()}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="testimonials" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {ngo.testimonials.map((testimonial, index) => (
                <Card key={index}>
                  <CardContent className="pt-6">
                    <div className="flex items-start space-x-4">
                      <Quote className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <p className="text-muted-foreground leading-relaxed mb-4">"{testimonial.content}"</p>
                        <div className="flex items-center space-x-3">
                          <img
                            src={testimonial.image || "/placeholder.svg"}
                            alt={testimonial.name}
                            className="w-10 h-10 rounded-full object-cover"
                          />
                          <div>
                            <div className="font-semibold text-sm">{testimonial.name}</div>
                            <div className="text-xs text-muted-foreground">{testimonial.role}</div>
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

        {/* Donation Form Modal */}
        {showDonationForm && <DonationForm ngo={ngo} onClose={() => setShowDonationForm(false)} />}
      </div>
    </div>
  )
}
