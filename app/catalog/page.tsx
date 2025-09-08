import { Navigation } from "@/components/navigation"
import { NGOCatalog } from "@/components/ngo-catalog"

export const metadata = {
  title: "NGO Catalog - uDonate",
  description:
    "Browse and discover trusted NGOs working across various causes. Find the perfect organization to support.",
}

export default function CatalogPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <NGOCatalog />
      </main>
    </div>
  )
}
