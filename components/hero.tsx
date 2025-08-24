"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"


export function Hero() {
  const scrollToProjects = () => {
    const element = document.getElementById("projects")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center max-w-4xl mx-auto">
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-4xl font-bold shadow-lg shadow-[#8f8f8f]/50">
            <img src="https://assets.leetcode.com/users/emad-ansari/avatar_1755842307.png" alt="" className="rounded-full border-none" />
          </div>
        </div>

        <h1 className="text-4xl md:text-6xl font-bold font-serif mb-6">Hi, I&apos;m Emad</h1>

        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
          Hi, I create things, learn fast, and make shit happen. I love life coding and I&apos;ve anything that pushes the
          limits, history, curiosity, cricket, and great books instead me. still chasing mastery.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button onClick={scrollToProjects} size="lg" className="bg-primary hover:bg-primary/90">
            View Work
          </Button>
          <Button variant="outline" size="lg">
            Get Resume
          </Button>
        </div>

        <div className="animate-bounce">
          <ArrowDown className="w-6 h-6 mx-auto text-muted-foreground" />
        </div>
      </div>
    </section>
  )
}
