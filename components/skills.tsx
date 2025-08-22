import { Badge } from "@/components/ui/badge"

const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "Node.js",
  "Express",
  "MongoDB",
  "PostgreSQL",
  "Prisma",
  "Supabase",
  "Firebase",
  "Tailwind CSS",
  "Python",
  "Django",
  "FastAPI",
  "Docker",
  "AWS",
  "Vercel",
  "Git",
  "GitHub",
]

export function Skills() {
  return (
    <section id="skills" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-serif mb-8">Skills</h2>

          {/* GitHub Contributions */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold mb-6">GitHub Contributions</h3>
            <div className="bg-card p-6 rounded-lg border border-border">
              <div className="grid grid-cols-53 gap-1 max-w-4xl mx-auto">
                {Array.from({ length: 365 }, (_, i) => (
                  <div
                    key={i}
                    className={`w-3 h-3 rounded-sm ${
                      Math.random() > 0.7
                        ? "bg-primary"
                        : Math.random() > 0.5
                          ? "bg-primary/60"
                          : Math.random() > 0.3
                            ? "bg-primary/30"
                            : "bg-muted"
                    }`}
                  />
                ))}
              </div>
              <p className="text-sm text-muted-foreground mt-4">Contributions in the last year</p>
            </div>
          </div>

          {/* Skills Grid */}
          <div className="flex flex-wrap gap-3 justify-center">
            {skills.map((skill, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="px-4 py-2 text-sm hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
