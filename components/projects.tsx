"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import code from "@/app/assets/code-io.png"
import blood_bank from '@/app/assets/blood-bank.png'
import tree_visualizer from '@/app/assets/tree-visulaizer.png'
const projects = [
  {
    title: "Code.io",
    description:
      "A clean and modern online code editor built with React and Monaco, designed for a smooth and responsive coding experience.",
    image: code,
    tags: ["React","Typescript", "Tailwind CSS", "Monaco Editor", "Node.js", "Postgres", "Express", "Prisma", "Zod"],
    liveUrl: "https://codeio-tawny.vercel.app/",
    githubUrl: "https://github.com/emad-ansari/code.io",
  },
  {
    title: "Blood Bank Management System",
    description:
      "This is a centralized platform designed to connect donors, hospitals, blood banks, and administrators. It efficiently manages blood donation, storage, and distribution processes using the NextJs, TypeScript, Prisma, Clerk and AWS services.",
    image: blood_bank,
    tags: ["Next.js", "Typescript", "Prisma", "PostgreSQL", "Tailwind", "Clerk"],
    liveUrl: "https://blood-bank-orcin.vercel.app/",
    githubUrl: "https://github.com/emad-ansari/Blood-Bank",
  },
  {
    title: "Balance Tree Visualizer",
    description:
      "A dynamic, interactive tool designed to help you understand balanced binary search trees. Whether you’re learning about AVL trees or Red-Black trees, this application provides a visually engaging way to explore tree operations and traversals.",
    image: tree_visualizer,
    tags: ["React", "TypeScript", "Node.js", "PostgreSQL", "Chart.js"],
    liveUrl: "https://balanced-tree-visualizer.vercel.app/",
    githubUrl: "https://github.com/Ideation-X/balanced-tree-visualizer",
  },
  {
    title: "Daily-xp",
    description:
      "A modern web application that gamifies daily productivity by turning user activities into an engaging experience with XP rewards and progress tracking",
    image: "/placeholder-hu24i.png",
    tags: ["Next.js", "Stripe", "Supabase", "TypeScript", "Tailwind"],
    liveUrl: "https://daily-xp.vercel.app",
    githubUrl: "https://github.com/emad-ansari/Gamified-User-Dashboard",
  },
  
 
]

const addOns = [
  {
    title: "TextFit",
    description:
      "An Add-On for Adobe Express that converts images to text using OCR technology. It allows users to extract text from images and use it in their designs.",
    tags: ["JavaScript", "Adobe SDK", "OCR", "API"],
  },
  {
    title: "Codify",
    description:
      "An Add-On for Adobe Express that generates code snippets from natural language descriptions. It allows users to create snippets for their designs.",
    tags: ["JavaScript", "Adobe SDK", "OpenAI", "API"],
  },
]

export function Projects() {
  const router = useRouter();
  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-serif mb-4">Proof of Work</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {projects.map((project, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 bg-card border-border">
              <div className="relative aspect-video overflow-hidden rounded-t-lg">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle className="font-serif">{project.title}</CardTitle>
                <CardDescription className="text-muted-foreground">{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" className="flex items-center gap-2 bg-transparent" onClick={() => router.push(project.liveUrl)}>
                    <ExternalLink className="w-4 h-4" />
                    Live
                  </Button>
                  <Button size="sm" variant="outline" className="flex items-center gap-2 bg-transparent" onClick={() => router.push(project.githubUrl)}>
                    <Github className="w-4 h-4" />
                    Code
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mb-8">
          <h3 className="text-2xl font-bold font-serif mb-8 text-center">Adobe Express Add-Ons</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {addOns.map((addon, index) => (
              <Card key={index} className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="font-serif">{addon.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">{addon.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {addon.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
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
