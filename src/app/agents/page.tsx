"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Star, Verified } from "lucide-react"

type AgentCategory = "ALL" | "AI" | "MICROSERVICE" | "UTILITY" | "BLOCKCHAIN" | "CONTENT" | "ANALYTICS" | "SECURITY"

const mockAgents = [
  {
    id: "1",
    name: "AI Content Writer",
    category: "CONTENT" as AgentCategory,
    rating: 4.8,
    reviews: 124,
    success: 96,
    price: "0.05 SOMI/query",
    status: "Live",
    statusColor: "bg-accent",
    verified: true,
    tags: ["AI", "Writing", "SEO"]
  },
  {
    id: "2",
    name: "Smart Contract Auditor",
    category: "SECURITY" as AgentCategory,
    rating: 4.9,
    reviews: 87,
    success: 98,
    price: "0.10 SOMI/query",
    status: "Verified",
    statusColor: "bg-primary",
    verified: true,
    tags: ["Security", "Blockchain", "Audit"]
  },
  {
    id: "3",
    name: "NFT Generator Bot",
    category: "AI" as AgentCategory,
    rating: 4.5,
    reviews: 203,
    success: 92,
    price: "0.03 SOMI/query",
    status: "Demo",
    statusColor: "bg-destructive",
    verified: false,
    tags: ["NFT", "Art", "Generator"]
  },
  {
    id: "4",
    name: "Trading Signal AI",
    category: "ANALYTICS" as AgentCategory,
    rating: 4.7,
    reviews: 156,
    success: 94,
    price: "0.15 SOMI/query",
    status: "Live",
    statusColor: "bg-accent",
    verified: true,
    tags: ["Finance", "Trading", "Analytics"]
  },
  {
    id: "5",
    name: "Code Review Agent",
    category: "UTILITY" as AgentCategory,
    rating: 4.6,
    reviews: 98,
    success: 93,
    price: "0.07 SOMI/query",
    status: "Live",
    statusColor: "bg-accent",
    verified: false,
    tags: ["Code", "Review", "Quality"]
  },
  {
    id: "6",
    name: "Gas Optimizer",
    category: "BLOCKCHAIN" as AgentCategory,
    rating: 4.9,
    reviews: 67,
    success: 97,
    price: "0.08 SOMI/query",
    status: "Verified",
    statusColor: "bg-primary",
    verified: true,
    tags: ["Gas", "Optimization", "Smart Contracts"]
  }
]

const categories: AgentCategory[] = [
  "ALL",
  "AI",
  "MICROSERVICE",
  "UTILITY",
  "BLOCKCHAIN",
  "CONTENT",
  "ANALYTICS",
  "SECURITY"
]

export default function AgentsPage() {
  const [selectedCategory, setSelectedCategory] = useState<AgentCategory>("ALL")

  const filteredAgents = mockAgents.filter(agent => {
    return selectedCategory === "ALL" || agent.category === selectedCategory
  })

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-5xl md:text-6xl font-black mb-4">Agent Directory</h1>
          <p className="text-xl text-muted-foreground">Discover AI agents ready to work for you</p>
        </div>

        {/* Filters */}
        <Card className="p-8 mb-8 bg-card/50 backdrop-blur">
          <div className="text-sm font-bold mb-4 uppercase tracking-wide text-muted-foreground">Filter by Category</div>
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className={`font-bold ${
                  selectedCategory === category 
                    ? "bg-primary hover:bg-primary/90" 
                    : "hover:border-primary"
                }`}
              >
                {category}
              </Button>
            ))}
          </div>
        </Card>

        {/* Results */}
        <div className="mb-6">
          <p className="text-sm text-muted-foreground font-bold">
            {filteredAgents.length} AGENTS FOUND
          </p>
        </div>

        {/* Agent Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredAgents.map((agent) => (
            <Card key={agent.id} className="p-6 hover:border-primary transition-all cursor-pointer group bg-card/50 backdrop-blur">
              <div className="flex items-start justify-between mb-4">
                <div className={`px-3 py-1 ${agent.statusColor} text-xs font-black rounded-full ${agent.statusColor === 'bg-accent' ? 'text-black' : 'text-white'}`}>
                  {agent.status}
                </div>
                {agent.verified && (
                  <Verified className="w-5 h-5 text-primary" />
                )}
              </div>
              
              <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                {agent.name}
              </h3>
              
              <div className="flex items-center gap-2 mb-4 text-sm">
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-accent text-accent" />
                  <span className="font-bold">{agent.rating}</span>
                </div>
                <span className="text-muted-foreground">•</span>
                <span className="text-muted-foreground">{agent.reviews} reviews</span>
                <span className="text-muted-foreground">•</span>
                <span className="text-accent font-bold">{agent.success}% success</span>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {agent.tags.map((tag) => (
                  <span key={tag} className="px-2 py-1 bg-secondary text-xs font-bold rounded border border-border">
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="flex items-center justify-between pt-4 border-t border-border">
                <div className="text-sm font-black text-primary">{agent.price}</div>
                <Button size="sm" className="bg-primary hover:bg-primary/90 font-bold">
                  Try Agent
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Submit Agent Section */}
        <Card className="bg-gradient-to-br from-primary/20 via-accent/20 to-destructive/20 border-primary/30">
          <div className="p-12 text-center">
            <h2 className="text-4xl font-black mb-4">Are You Building Agents?</h2>
            <p className="text-xl mb-8 text-muted-foreground max-w-2xl mx-auto">
              Join SomniaX and start earning SOMI for every query. Submit your AI agent to the marketplace and reach thousands of users.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-8">
              <Card className="p-6 text-left bg-card/50 backdrop-blur">
                <div className="text-4xl mb-4">🤖</div>
                <h3 className="font-bold text-xl mb-3">Submit AI Agent</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Have an autonomous AI agent? Get x402 micropayments, on-chain identity, and instant visibility.
                </p>
                <Button className="w-full bg-primary hover:bg-primary/90 font-bold">
                  Submit Agent →
                </Button>
              </Card>

              <Card className="p-6 text-left bg-card/50 backdrop-blur">
                <div className="text-4xl mb-4">💡</div>
                <h3 className="font-bold text-xl mb-3">Learn to Build</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  New to agent development? Check our docs and tutorials to get started with Somnia and x402.
                </p>
                <Button variant="outline" className="w-full font-bold border-2">
                  View Docs →
                </Button>
              </Card>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}