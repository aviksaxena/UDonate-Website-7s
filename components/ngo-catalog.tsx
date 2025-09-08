"use client"

import { useState, useMemo } from "react"
import { NGOFilters } from "@/components/ngo-filters"
import { NGOGrid } from "@/components/ngo-grid"

// Mock data for NGOs
const allNGOs = [
  {
    id: 1,
    name: "Education for All",
    mission: "Providing quality education to underprivileged children in rural areas",
    description:
      "We work tirelessly to ensure every child has access to quality education, regardless of their economic background.",
    category: "Education",
    location: "Maharashtra",
    image: "/children-studying-in-classroom.jpg",
    raised: 250000,
    goal: 500000,
    supporters: 156,
    verified: true,
    rating: 4.8,
    established: 2015,
  },
  {
    id: 2,
    name: "Clean Water Initiative",
    mission: "Building wells and water purification systems in drought-affected regions",
    description:
      "Bringing clean, safe drinking water to communities that need it most through sustainable infrastructure.",
    category: "Water & Sanitation",
    location: "Rajasthan",
    image: "/clean-water-well-in-village.jpg",
    raised: 180000,
    goal: 300000,
    supporters: 89,
    verified: true,
    rating: 4.9,
    established: 2018,
  },
  {
    id: 3,
    name: "Healthcare Heroes",
    mission: "Mobile medical units serving remote communities with essential healthcare",
    description:
      "Delivering critical healthcare services to underserved rural communities through mobile medical units.",
    category: "Healthcare",
    location: "West Bengal",
    image: "/mobile-medical-unit-helping-patients.jpg",
    raised: 320000,
    goal: 450000,
    supporters: 203,
    verified: true,
    rating: 4.7,
    established: 2016,
  },
  {
    id: 4,
    name: "Green Earth Foundation",
    mission: "Reforestation and environmental conservation projects across India",
    description: "Combating climate change through large-scale tree plantation and environmental awareness programs.",
    category: "Environment",
    location: "Karnataka",
    image: "/tree-planting-environmental-conservation.jpg",
    raised: 150000,
    goal: 400000,
    supporters: 78,
    verified: true,
    rating: 4.6,
    established: 2019,
  },
  {
    id: 5,
    name: "Women Empowerment Society",
    mission: "Skill development and entrepreneurship programs for women",
    description: "Empowering women through vocational training, microfinance, and business development support.",
    category: "Women Empowerment",
    location: "Tamil Nadu",
    image: "/women-learning-skills-workshop.jpg",
    raised: 95000,
    goal: 200000,
    supporters: 45,
    verified: true,
    rating: 4.5,
    established: 2020,
  },
  {
    id: 6,
    name: "Senior Care Foundation",
    mission: "Providing care and support for elderly citizens in need",
    description:
      "Ensuring dignity and quality care for senior citizens through healthcare, nutrition, and companionship programs.",
    category: "Elderly Care",
    location: "Gujarat",
    image: "/elderly-care-senior-citizens-support.jpg",
    raised: 75000,
    goal: 150000,
    supporters: 32,
    verified: true,
    rating: 4.4,
    established: 2017,
  },
  {
    id: 7,
    name: "Animal Rescue Network",
    mission: "Rescuing and rehabilitating stray and injured animals",
    description:
      "Providing medical care, shelter, and rehabilitation for abandoned and injured animals across urban areas.",
    category: "Animal Welfare",
    location: "Delhi",
    image: "/animal-rescue-veterinary-care-dogs-cats.jpg",
    raised: 120000,
    goal: 250000,
    supporters: 67,
    verified: true,
    rating: 4.8,
    established: 2014,
  },
  {
    id: 8,
    name: "Digital Literacy Mission",
    mission: "Teaching digital skills to bridge the technology gap",
    description:
      "Providing computer literacy and digital skills training to rural communities and underprivileged youth.",
    category: "Education",
    location: "Uttar Pradesh",
    image: "/computer-training-digital-literacy-rural-education.jpg",
    raised: 85000,
    goal: 180000,
    supporters: 54,
    verified: true,
    rating: 4.3,
    established: 2021,
  },
]

export function NGOCatalog() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedLocation, setSelectedLocation] = useState("All")
  const [sortBy, setSortBy] = useState("popularity")

  const filteredAndSortedNGOs = useMemo(() => {
    const filtered = allNGOs.filter((ngo) => {
      const matchesSearch =
        ngo.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        ngo.mission.toLowerCase().includes(searchTerm.toLowerCase()) ||
        ngo.description.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesCategory = selectedCategory === "All" || ngo.category === selectedCategory
      const matchesLocation = selectedLocation === "All" || ngo.location === selectedLocation

      return matchesSearch && matchesCategory && matchesLocation
    })

    // Sort the filtered results
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "popularity":
          return b.supporters - a.supporters
        case "progress":
          return b.raised / b.goal - a.raised / a.goal
        case "newest":
          return b.established - a.established
        case "alphabetical":
          return a.name.localeCompare(b.name)
        default:
          return 0
      }
    })

    return filtered
  }, [searchTerm, selectedCategory, selectedLocation, sortBy])

  return (
    <div className="py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">NGO Catalog</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover and support verified NGOs making a real difference across India. Find causes that matter to you and
            start your giving journey.
          </p>
        </div>

        {/* Filters */}
        <NGOFilters
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          selectedLocation={selectedLocation}
          onLocationChange={setSelectedLocation}
          sortBy={sortBy}
          onSortChange={setSortBy}
          totalResults={filteredAndSortedNGOs.length}
        />

        {/* Results */}
        <NGOGrid ngos={filteredAndSortedNGOs} />
      </div>
    </div>
  )
}
