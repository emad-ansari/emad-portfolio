import { Hero } from "@/components/hero"
import { Projects } from "@/components/projects"
// import { Experience } from "@/components/experience"
import { Skills } from "@/components/skills"
import { Education } from "@/components/education"
import { Contact } from "@/components/contact"
import { Navigation } from "@/components/navigation"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <Projects />
      {/* <Experience /> */}
      <Skills />
      <Education />
      <Contact />
    </main>
  )
}
