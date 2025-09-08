import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Users, Target, Shield, Globe, Award } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-orange-50">
      <Navigation />

      <main className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 text-balance">
            About <span className="text-green-600">uDonate</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-pretty">
            Where Giving Creates Living - Connecting compassionate donors with verified NGOs to create lasting impact in
            communities worldwide.
          </p>
        </div>

        {/* Mission Section */}
        <div className="mb-16">
          <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
            <CardContent className="p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
                  <p className="text-gray-600 text-lg leading-relaxed mb-6">
                    uDonate bridges the gap between generous hearts and meaningful causes. We believe that every
                    donation, no matter the size, has the power to transform lives and build stronger communities.
                  </p>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Our platform ensures transparency, accountability, and maximum impact for every rupee donated,
                    making it easier than ever to support the causes you care about.
                  </p>
                </div>
                <div className="flex justify-center">
                  <div className="w-64 h-64 bg-gradient-to-br from-green-100 to-orange-100 rounded-full flex items-center justify-center">
                    <Heart className="w-24 h-24 text-green-600" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Values Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <Shield className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Transparency</h3>
                <p className="text-gray-600">
                  Every donation is tracked with complete transparency. See exactly how your contribution makes a
                  difference.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <Users className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Community</h3>
                <p className="text-gray-600">
                  Building a community of changemakers who support each other in creating positive impact.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <Target className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Impact</h3>
                <p className="text-gray-600">
                  Focused on measurable outcomes and real-world impact that transforms lives and communities.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* How It Works Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">How uDonate Works</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">1</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Discover</h3>
              <p className="text-gray-600 text-sm">Browse verified NGOs and causes that align with your values</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-orange-600">2</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Donate</h3>
              <p className="text-gray-600 text-sm">Make secure donations with flexible payment options</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">3</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Track</h3>
              <p className="text-gray-600 text-sm">Monitor your impact with detailed progress reports</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-orange-600">4</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Connect</h3>
              <p className="text-gray-600 text-sm">Join a community of donors making a difference</p>
            </div>
          </div>
        </div>

        {/* Impact Stats */}
        <div className="mb-16">
          <Card className="border-0 shadow-lg bg-gradient-to-r from-green-600 to-orange-600 text-white">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-center mb-8">Our Impact So Far</h2>
              <div className="grid md:grid-cols-4 gap-8 text-center">
                <div>
                  <div className="text-3xl font-bold mb-2">₹2.5M+</div>
                  <div className="text-green-100">Total Donations</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">150+</div>
                  <div className="text-green-100">Partner NGOs</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">10K+</div>
                  <div className="text-green-100">Active Donors</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">50K+</div>
                  <div className="text-green-100">Lives Impacted</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Make a Difference?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of donors who are already creating positive change in their communities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-green-600 hover:bg-green-700">
              <Link href="/catalog">
                <Globe className="w-5 h-5 mr-2" />
                Explore NGOs
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-orange-600 text-orange-600 hover:bg-orange-50 bg-transparent"
            >
              <Link href="/leaderboard">
                <Award className="w-5 h-5 mr-2" />
                View Leaderboard
              </Link>
            </Button>
          </div>
        </div>
      </main>
    </div>
  )
}
