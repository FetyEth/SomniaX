"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { CheckCircle } from "lucide-react"

export default function SubmitAgentPage() {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <h1 className="text-5xl md:text-6xl font-black mb-4">Submit Your Agent</h1>
          <p className="text-xl text-muted-foreground">
            Join the SomniaX marketplace and start earning SOMI for every successful query
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Form */}
          <div className="lg:col-span-2">
            <Card className="p-8 bg-card/50 backdrop-blur">
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-bold mb-2 uppercase tracking-wide">
                    Agent Name *
                  </label>
                  <Input 
                    placeholder="e.g., Smart Contract Auditor AI"
                    className="bg-background border-2"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold mb-2 uppercase tracking-wide">
                    Description *
                  </label>
                  <Textarea 
                    placeholder="Describe what your agent does and what problems it solves..."
                    className="bg-background border-2 min-h-32"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold mb-2 uppercase tracking-wide">
                      Category *
                    </label>
                    <select className="w-full px-3 py-2 bg-background border-2 rounded-md">
                      <option>AI</option>
                      <option>Microservice</option>
                      <option>Utility</option>
                      <option>Blockchain</option>
                      <option>Content</option>
                      <option>Analytics</option>
                      <option>Security</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-bold mb-2 uppercase tracking-wide">
                      Price per Query *
                    </label>
                    <Input 
                      type="number"
                      placeholder="0.05"
                      className="bg-background border-2"
                      step="0.01"
                    />
                    <p className="text-xs text-muted-foreground mt-1">In SOMI</p>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold mb-2 uppercase tracking-wide">
                    API Endpoint *
                  </label>
                  <Input 
                    placeholder="https://your-agent-api.com/query"
                    className="bg-background border-2"
                  />
                  <p className="text-xs text-muted-foreground mt-1">
                    Your agent's API endpoint that will process queries
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-bold mb-2 uppercase tracking-wide">
                    Tags
                  </label>
                  <Input 
                    placeholder="ai, writing, seo (comma separated)"
                    className="bg-background border-2"
                  />
                </div>

                <div className="pt-4">
                  <Button className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-6 text-lg">
                    Submit Agent for Review
                  </Button>
                </div>
              </form>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card className="p-6 bg-gradient-to-br from-primary/20 to-accent/20 border-primary/30">
              <h3 className="font-bold text-xl mb-4">Why Submit?</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span className="text-sm">Earn SOMI for every successful query</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span className="text-sm">Get discovered by thousands of users</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span className="text-sm">x402 micropayments built-in</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span className="text-sm">No subscription fees or middlemen</span>
                </li>
              </ul>
            </Card>

            <Card className="p-6 bg-card/50 backdrop-blur">
              <h3 className="font-bold text-xl mb-4">Requirements</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Working API endpoint</li>
                <li>• Response time under 30s</li>
                <li>• JSON response format</li>
                <li>• x402 payment integration</li>
                <li>• Clear documentation</li>
              </ul>
            </Card>

            <Card className="p-6 bg-card/50 backdrop-blur">
              <h3 className="font-bold text-xl mb-4">Review Process</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <div className="font-bold mb-1">1. Submit</div>
                  <div className="text-muted-foreground">Fill out the form above</div>
                </div>
                <div>
                  <div className="font-bold mb-1">2. Review (24-48h)</div>
                  <div className="text-muted-foreground">We test your agent</div>
                </div>
                <div>
                  <div className="font-bold mb-1">3. Go Live</div>
                  <div className="text-muted-foreground">Start earning immediately</div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
