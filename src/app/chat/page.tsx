"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { Send, Paperclip, Zap } from "lucide-react"

export default function ChatPage() {
  const [message, setMessage] = useState("")

  const examplePrompts = [
    "Show me all AI agents in the content category",
    "I need a smart contract auditor with 95%+ success rate",
    "Find me the cheapest NFT generation agent",
    "Which trading agents have the highest ratings?",
    "How do I submit my own AI agent?"
  ]

  return (
    <div className="h-[calc(100vh-121px)] flex">
      {/* Sidebar */}
      <div className="w-80 border-r flex flex-col bg-card/50 backdrop-blur">
        <div className="p-4 border-b">
          <Button className="w-full bg-primary hover:bg-primary/90 text-white font-bold">
            <span className="mr-2">+</span> New Chat
          </Button>
        </div>
        
        <div className="flex-1 overflow-y-auto p-4">
          <div className="space-y-2">
            <Card className="bg-primary/10 border-primary/30 p-4 cursor-pointer hover:bg-primary/20 transition-colors">
              <div className="font-bold text-sm mb-1">New Conversation</div>
              <div className="text-xs text-muted-foreground">Just now</div>
            </Card>
          </div>
        </div>

        <div className="p-4 border-t">
          <Card className="p-4 bg-secondary/50">
            <div className="text-xs font-bold mb-3 uppercase tracking-wide text-muted-foreground">
              Chat Balance
            </div>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="font-black text-2xl">∞</div>
                <div className="text-xs text-muted-foreground">Testnet messages</div>
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col">
        <div className="flex-1 flex items-center justify-center p-8">
          <div className="max-w-2xl text-center space-y-8">
            <div className="w-20 h-20 bg-gradient-to-br from-primary via-accent to-destructive rounded-2xl mx-auto mb-6 flex items-center justify-center">
              <span className="text-4xl font-black text-background">S</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-black mb-4">Welcome to SomniaX Chat</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Your AI assistant for exploring agents, getting help, and navigating the marketplace.
            </p>

            <div className="space-y-3">
              <div className="text-sm font-bold text-muted-foreground mb-3 uppercase tracking-wide">
                Try asking...
              </div>
              {examplePrompts.map((prompt, index) => (
                <Button
                  key={index}
                  variant="outline"
                  className="w-full justify-start text-left h-auto py-4 px-5 hover:border-primary hover:bg-primary/5 transition-all"
                  onClick={() => setMessage(prompt)}
                >
                  <span className="text-sm">{prompt}</span>
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Input Area */}
        <div className="border-t p-6 bg-card/50 backdrop-blur">
          <div className="flex items-center gap-3 max-w-4xl mx-auto">
            <Button variant="ghost" size="icon" className="shrink-0">
              <Paperclip className="h-5 w-5" />
            </Button>
            <Input
              placeholder="Ask me anything about SomniaX agents..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="flex-1 bg-background border-2 focus:border-primary"
            />
            <Button 
              size="icon" 
              className="shrink-0 bg-primary hover:bg-primary/90"
              disabled={!message.trim()}
            >
              <Send className="h-5 w-5" />
            </Button>
          </div>
          <p className="text-xs text-center text-muted-foreground mt-3">
            Testnet mode • All queries are free during hackathon
          </p>
        </div>
      </div>
    </div>
  )
}