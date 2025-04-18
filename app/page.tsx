"use client";

import { Button } from "@/components/ui/button";
import { GraduationCap, Users, BarChart, BookOpen } from "lucide-react";
import Link from "next/link";

const features = [
  {
    icon: <BookOpen className="h-6 w-6" />,
    title: "Learn Online",
    description: "Access courses anytime, anywhere with our flexible learning platform",
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "Expert Instructors",
    description: "Learn from industry professionals with years of experience",
  },
  {
    icon: <BarChart className="h-6 w-6" />,
    title: "Track Progress",
    description: "Monitor your learning journey with detailed analytics and insights",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] px-6 lg:px-8 overflow-hidden flex items-center justify-center">
          {/* Background YouTube Video */}
          <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/2 left-1/2 w-[200%] h-[200%] -translate-x-1/2 -translate-y-1/2">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/EtVXi-fcZQE?autoplay=1&mute=1&controls=0&loop=1&playlist=EtVXi-fcZQE&modestbranding=1&showinfo=0&rel=0"
                title="Background Video"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* Foreground Content */}
          <div className="relative z-10 max-w-7xl mx-auto text-white bg-black/40 backdrop-blur-md p-6 rounded-xl text-center space-y-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-primary text-white">
              Transform Your Future with Online Learning
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto text-white">
              Discover a world of knowledge with our comprehensive learning platform.
              Join thousands of students achieving their goals through quality education.
            </p>
            <div className="flex gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/courses">Explore Courses</Link>
              </Button>
              <Button
                size="lg"
                variant="ghost"
                asChild
                className="bg-transparent text-white border border-white hover:bg-white hover:text-black transition-colors duration-200"
              >
                <Link href="/signup">Get Started</Link>
              </Button>
            </div>
          </div>
        </section>




      {/* Features Section */}
      <section className="py-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl font-bold">Why Choose Our Platform?</h2>
            <p className="text-lg text-muted-foreground">
              Everything you need to succeed in your learning journey
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-8 rounded-lg border bg-card text-card-foreground shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 px-6 lg:px-8 bg-muted">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">100+</div>
              <div className="text-muted-foreground">Expert Instructors</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">1000+</div>
              <div className="text-muted-foreground">Active Students</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">500+</div>
              <div className="text-muted-foreground">Online Courses</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}