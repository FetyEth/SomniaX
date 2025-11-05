"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Header() {
  const pathname = usePathname()
  
  const navItems = [
    { href: "/", label: "Home" },
    { href: "/agents", label: "Agent Directory" },
    { href: "/chat", label: "SomniaX Chat" },
    { href: "/submit", label: "Submit Agent" },
  ]
  
  return (
    <>
      {/* Testnet Banner */}
      <div className="bg-accent text-accent-foreground py-2 text-center text-sm font-bold">
        🚀 TESTNET ONLY • Built on Somnia • Powered by x402 • Open to All Hackers! 🚀
      </div>
      
      <header className="border-b bg-background sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-primary via-accent to-destructive rounded-lg flex items-center justify-center">
              <span className="text-2xl font-black text-background">S</span>
            </div>
            <span className="font-black text-2xl tracking-tight bg-gradient-to-r from-primary via-accent to-destructive bg-clip-text text-transparent">
              SOMNIAX
            </span>
          </Link>
          
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-bold transition-colors hover:text-primary ${
                  pathname === item.href ? "text-primary" : "text-foreground"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          
          <appkit-button />
        </div>
      </header>
    </>
  )
}