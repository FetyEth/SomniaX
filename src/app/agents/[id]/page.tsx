"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { useParams } from "next/navigation"

const agentData: Record<string, any> = {
  "1": {
    id: "1",
    name: "LOGOMASTER AI",
    description: "Logo files in all formats.",
    longDescription: "Professional AI-powered logo design service. Generates multiple logo concepts based on your brand description, delivers in all standard formats (PNG, SVG, EPS, PDF), and includes variations for different use cases.",
    category: "LOGO DESIGN",
    type: "AI",
    rating: 2.5,
    reviews: 0,
    success: 50,
    price: "$0.01 / TASK",
    address: "0x742d...f44e",
    features: [
      "Multiple logo concepts",
      "All file formats (PNG, SVG, EPS, PDF)",
      "Brand-aligned designs",
      "Fast turnaround (5 minutes)",
      "Unlimited revisions"
    ]
  }
}

export default function AgentDetailPage() {
  const params = useParams()
  const agentId = params.id as string
  const agent = agentData[agentId] || agentData["1"]
  
  const [query, setQuery] = useState("")
  const [result, setResult] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmitQuery = async () => {
    if (!query.trim()) return
    
    setIsLoading(true)
    setResult(null)
    
    setTimeout(() => {
      setResult("✅ Logo design completed!\n\nYour logo has been generated based on your requirements. Files are ready for download in PNG, SVG, EPS, and PDF formats.")
      setIsLoading(false)
    }, 2000)
  }

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <Link href="/agents">
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Directory
          </Button>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Agent Header */}
            <Card className="border p-8">
              <div className="flex items-start gap-6 mb-6">
                <div className="w-24 h-24 bg-green-500 rounded shrink-0"></div>
                <div className="flex-1">
                  <h1 className="text-3xl font-bold mb-2">{agent.name}</h1>
                  <p className="text-muted-foreground mb-4">{agent.description}</p>
                  <div className="flex items-center gap-4 text-sm">
                    <span>⭐ {agent.rating} • {agent.reviews} REVIEWS</span>
                    <span>•</span>
                    <span>{agent.success}% SUCCESS</span>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="font-bold mb-3 uppercase text-sm">About</h3>
                <p className="text-muted-foreground text-sm">{agent.longDescription}</p>
              </div>

              <div>
                <h3 className="font-bold mb-3 uppercase text-sm">Features</h3>
                <ul className="space-y-2">
                  {agent.features.map((feature: string, index: number) => (
                    <li key={index} className="flex items-center gap-2 text-sm">
                      <span>•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>

            {/* Query Interface */}
            <Card className="border p-8">
              <h2 className="text-xl font-bold mb-6">TRY THIS AGENT</h2>
              
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-2 block uppercase">
                    Enter your requirements
                  </label>
                  <Textarea
                    placeholder="Describe what you need..."
                    rows={6}
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="resize-none"
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-sm text-muted-foreground">
                    <span className="font-bold text-foreground">{agent.price}</span>
                  </div>
                  <Button
                    onClick={handleSubmitQuery}
                    disabled={!query.trim() || isLoading}
                    className="bg-black hover:bg-black/90"
                  >
                    {isLoading ? "Processing..." : "Submit Task"}
                  </Button>
                </div>

                {result && (
                  <div className="mt-6 p-4 bg-muted rounded">
                    <h4 className="font-bold mb-2 text-sm uppercase">Result</h4>
                    <pre className="whitespace-pre-wrap text-sm">{result}</pre>
                  </div>
                )}
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card className="border p-6">
              <div className="text-sm text-muted-foreground mb-1 uppercase">Pricing</div>
              <div className="text-2xl font-bold mb-4">{agent.price}</div>
              
              <div className="space-y-2 text-sm mb-6">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">No subscription</span>
                  <span>✓</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Pay per use</span>
                  <span>✓</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Instant results</span>
                  <span>✓</span>
                </div>
              </div>
            </Card>

            <Card className="border p-6">
              <div className="text-sm text-muted-foreground mb-3 uppercase">Type</div>
              <div className="border px-3 py-1 text-sm font-medium inline-block mb-6">{agent.type}</div>
              
              <div className="text-sm text-muted-foreground mb-3 uppercase">Category</div>
              <div className="border px-3 py-1 text-sm font-medium inline-block mb-6">{agent.category}</div>
              
              <div className="text-sm text-muted-foreground mb-3 uppercase">Address</div>
              <div className="font-mono text-sm">{agent.address}</div>
            </Card>

            <Card className="border p-6">
              <div className="text-sm text-muted-foreground mb-3 uppercase">Stats</div>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Success Rate</span>
                  <span className="font-bold">{agent.success}%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Total Reviews</span>
                  <span className="font-bold">{agent.reviews}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Avg Response</span>
                  <span className="font-bold">5 min</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}