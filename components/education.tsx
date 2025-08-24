import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap } from "lucide-react"

export function Education() {
  return (
    <section id="education" className="py-20 px-4 bg-muted/20">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-serif mb-8">Education</h2>

          <Card className="bg-card border-border max-w-2xl mx-auto">
            <CardHeader>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <div className="text-left">
                  <CardTitle className="font-serif">Bachelor of Computer Science</CardTitle>
                  <CardDescription className="text-primary font-medium">Galgotias University</CardDescription>
                </div>
                <div className="ml-auto text-sm text-muted-foreground">Expected May 2026</div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Pursuing a comprehensive degree in computer science with focus on software development, data
                structures, algorithms, and modern web technologies.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
