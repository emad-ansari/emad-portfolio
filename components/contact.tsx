"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MessageCircle } from "lucide-react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-serif mb-4">Get In Touch</h2>
          <p className="text-muted-foreground mb-8">Have a question? Let&apos;s Chat </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button className="flex items-center gap-2 bg-primary hover:bg-primary/90">
              <Mail className="w-4 h-4" />
              Send Email
            </Button>
            <Button variant="outline" className="flex items-center gap-2 bg-transparent">
              <MessageCircle className="w-4 h-4" />
              Message on Twitter
            </Button>
          </div>
        </div>

        <Card className="bg-card border-border max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="font-serif">Reach Out via Email</CardTitle>
            <CardDescription>Your Email</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <Input
                name="email"
                type="email"
                placeholder="your@email.com"
                value={formData.email}
                onChange={handleChange}
                required
                className="bg-input border-border"
              />

              <div>
                <label className="block text-sm font-medium mb-2">Your message</label>
                <Textarea
                  name="message"
                  placeholder="Type your message here..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="bg-input border-border resize-none"
                />
              </div>

              <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
