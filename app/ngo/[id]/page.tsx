import { Navigation } from "@/components/navigation"
import { NGODetail } from "@/components/ngo-detail"
import { notFound } from "next/navigation"

// Mock data - in a real app, this would come from a database
const allNGOs = [
  {
    id: 1,
    name: "Education for All",
    mission: "Providing quality education to underprivileged children in rural areas",
    description:
      "We work tirelessly to ensure every child has access to quality education, regardless of their economic background. Our programs include building schools, training teachers, providing educational materials, and offering scholarships to deserving students.",
    fullDescription:
      "Education for All was founded in 2015 with a simple yet powerful vision: every child deserves access to quality education. Over the past 8 years, we have built 45 schools across rural Maharashtra, trained over 200 teachers, and provided educational support to more than 5,000 children. Our holistic approach includes not just infrastructure development, but also community engagement, parent education, and sustainable funding models that ensure long-term success.",
    category: "Education",
    location: "Maharashtra",
    image: "/children-studying-in-classroom.jpg",
    gallery: [
      "/children-studying-in-classroom.jpg",
      "/rural-school-building-construction.jpg",
      "/teachers-training-workshop-education.jpg",
      "/children-receiving-books-and-supplies.jpg",
    ],
    raised: 250000,
    goal: 500000,
    supporters: 156,
    verified: true,
    rating: 4.8,
    established: 2015,
    website: "https://educationforall.org",
    email: "contact@educationforall.org",
    phone: "+91 98765 43210",
    address: "123 Education Street, Pune, Maharashtra 411001",
    programs: [
      {
        name: "School Infrastructure",
        description: "Building and maintaining school buildings in rural areas",
        budget: 200000,
        beneficiaries: 1200,
      },
      {
        name: "Teacher Training",
        description: "Professional development programs for rural teachers",
        budget: 150000,
        beneficiaries: 200,
      },
      {
        name: "Student Scholarships",
        description: "Financial assistance for deserving students",
        budget: 100000,
        beneficiaries: 300,
      },
      {
        name: "Learning Materials",
        description: "Books, supplies, and digital learning tools",
        budget: 50000,
        beneficiaries: 1500,
      },
    ],
    impact: {
      schoolsBuilt: 45,
      teachersTrained: 200,
      studentsSupported: 5000,
      communitiesReached: 25,
    },
    testimonials: [
      {
        name: "Priya Sharma",
        role: "Parent",
        content:
          "Thanks to Education for All, my daughter now has access to quality education right in our village. The teachers are well-trained and truly care about the children's future.",
        image: "/indian-woman-parent-testimonial.jpg",
      },
      {
        name: "Rajesh Kumar",
        role: "Village Head",
        content:
          "The school built by this organization has transformed our entire community. Children no longer have to walk 10km to attend school.",
        image: "/indian-man-village-leader-testimonial.jpg",
      },
    ],
  },
  {
    id: 2,
    name: "Clean Water Initiative",
    mission: "Building wells and water purification systems in drought-affected regions",
    description:
      "Bringing clean, safe drinking water to communities that need it most through sustainable infrastructure and community-driven solutions.",
    fullDescription:
      "Clean Water Initiative addresses one of the most critical challenges facing rural India - access to clean drinking water. Since 2018, we have installed 78 water wells, 25 purification systems, and trained over 150 community water managers. Our approach combines cutting-edge technology with traditional knowledge, ensuring sustainable water solutions that communities can maintain independently.",
    category: "Water & Sanitation",
    location: "Rajasthan",
    image: "/clean-water-well-in-village.jpg",
    gallery: [
      "/clean-water-well-in-village.jpg",
      "/water-purification-system-installation.jpg",
      "/community-water-training-workshop.jpg",
      "/children-accessing-clean-water-well.jpg",
    ],
    raised: 180000,
    goal: 300000,
    supporters: 89,
    verified: true,
    rating: 4.9,
    established: 2018,
    website: "https://cleanwaterinitiative.org",
    email: "info@cleanwaterinitiative.org",
    phone: "+91 87654 32109",
    address: "456 Water Lane, Jaipur, Rajasthan 302001",
    programs: [
      {
        name: "Well Construction",
        description: "Building deep bore wells in water-scarce areas",
        budget: 180000,
        beneficiaries: 2500,
      },
      {
        name: "Water Purification",
        description: "Installing community water purification systems",
        budget: 80000,
        beneficiaries: 1200,
      },
      {
        name: "Community Training",
        description: "Training local water managers and maintenance teams",
        budget: 30000,
        beneficiaries: 150,
      },
      {
        name: "Water Quality Testing",
        description: "Regular testing and monitoring of water sources",
        budget: 10000,
        beneficiaries: 3000,
      },
    ],
    impact: {
      wellsBuilt: 78,
      purificationSystems: 25,
      peopleServed: 15000,
      communitiesReached: 35,
    },
    testimonials: [
      {
        name: "Meera Devi",
        role: "Community Leader",
        content:
          "Before the well was built, women in our village had to walk 5km daily for water. Now we have clean water right in our community.",
        image: "/indian-woman-community-leader-testimonial.jpg",
      },
    ],
  },
  // Add more NGOs as needed...
]

export async function generateMetadata({ params }: { params: { id: string } }) {
  const ngo = allNGOs.find((n) => n.id === Number.parseInt(params.id))

  if (!ngo) {
    return {
      title: "NGO Not Found - uDonate",
    }
  }

  return {
    title: `${ngo.name} - uDonate`,
    description: ngo.mission,
  }
}

export default function NGODetailPage({ params }: { params: { id: string } }) {
  const ngo = allNGOs.find((n) => n.id === Number.parseInt(params.id))

  if (!ngo) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <NGODetail ngo={ngo} />
      </main>
    </div>
  )
}
