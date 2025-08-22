import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const experiences = [
  {
    title: "Freelancer",
    company: "Self-employed",
    period: "2022 - present",
    description: "Working on various web development projects for clients worldwide.",
  },
  {
    title: "Full Stack Developer - TA",
    company: "Startup Techno",
    period: "Feb 2023 - June 2023",
    description: "Developed and maintained web applications using modern technologies.",
  },
]

const blogs = [
  {
    title: "Setting up Prisma Supabase Approach!",
    date: "January 2024",
  },
  {
    title: "what forcing me to work hard every day!",
    date: "March 2024",
  },
  {
    title: "how to get out of tutorial hell?",
    date: "May 2024",
  },
]

export function Experience() {
  return (
    <section id="experience" className="py-20 px-4 bg-muted/20">
      <div className="container mx-auto max-w-4xl">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-serif mb-12 text-center">Experience</h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="bg-card border-border">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="font-serif">{exp.title}</CardTitle>
                      <CardDescription className="text-primary font-medium">{exp.company}</CardDescription>
                    </div>
                    <span className="text-sm text-muted-foreground">{exp.period}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{exp.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold font-serif mb-8 text-center">Recent Blogs</h3>
          <div className="space-y-4">
            {blogs.map((blog, index) => (
              <Card key={index} className="bg-card border-border hover:shadow-md transition-shadow cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex justify-between items-center">
                    <h4 className="font-medium">{blog.title}</h4>
                    <span className="text-sm text-muted-foreground">{blog.date}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
