"use client"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Filter } from "lucide-react"
import { useState } from "react"

interface NGOFiltersProps {
  searchTerm: string
  onSearchChange: (value: string) => void
  selectedCategory: string
  onCategoryChange: (value: string) => void
  selectedLocation: string
  onLocationChange: (value: string) => void
  sortBy: string
  onSortChange: (value: string) => void
  totalResults: number
}

const categories = [
  "All",
  "Education",
  "Healthcare",
  "Environment",
  "Water & Sanitation",
  "Women Empowerment",
  "Elderly Care",
  "Animal Welfare",
]

const locations = [
  "All",
  "Maharashtra",
  "Rajasthan",
  "West Bengal",
  "Karnataka",
  "Tamil Nadu",
  "Gujarat",
  "Delhi",
  "Uttar Pradesh",
]

const sortOptions = [
  { value: "popularity", label: "Most Popular" },
  { value: "progress", label: "Highest Progress" },
  { value: "newest", label: "Newest" },
  { value: "alphabetical", label: "A-Z" },
]

export function NGOFilters({
  searchTerm,
  onSearchChange,
  selectedCategory,
  onCategoryChange,
  selectedLocation,
  onLocationChange,
  sortBy,
  onSortChange,
  totalResults,
}: NGOFiltersProps) {
  const [showFilters, setShowFilters] = useState(false)

  const clearFilters = () => {
    onSearchChange("")
    onCategoryChange("All")
    onLocationChange("All")
    onSortChange("popularity")
  }

  return (
    <div className="mb-8">
      {/* Search Bar */}
      <div className="relative mb-6">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
        <Input
          placeholder="Search NGOs by name, mission, or description..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="pl-10 h-12 text-lg"
        />
      </div>

      {/* Filter Toggle for Mobile */}
      <div className="flex items-center justify-between mb-4">
        <div className="text-sm text-muted-foreground">
          Showing {totalResults} NGO{totalResults !== 1 ? "s" : ""}
        </div>
        <Button variant="outline" onClick={() => setShowFilters(!showFilters)} className="md:hidden">
          <Filter className="h-4 w-4 mr-2" />
          Filters
        </Button>
      </div>

      {/* Filters */}
      <div className={`grid grid-cols-1 md:grid-cols-4 gap-4 ${showFilters ? "block" : "hidden md:grid"}`}>
        <Select value={selectedCategory} onValueChange={onCategoryChange}>
          <SelectTrigger>
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent>
            {categories.map((category) => (
              <SelectItem key={category} value={category}>
                {category}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select value={selectedLocation} onValueChange={onLocationChange}>
          <SelectTrigger>
            <SelectValue placeholder="Location" />
          </SelectTrigger>
          <SelectContent>
            {locations.map((location) => (
              <SelectItem key={location} value={location}>
                {location}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select value={sortBy} onValueChange={onSortChange}>
          <SelectTrigger>
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            {sortOptions.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Button variant="outline" onClick={clearFilters} className="w-full bg-transparent">
          Clear Filters
        </Button>
      </div>
    </div>
  )
}
