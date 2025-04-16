"use client";

import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Users, BookOpen, Award, Globe, Target } from "lucide-react";

const stats = [
  {
    icon: <Users className="h-6 w-6" />,
    value: "10,000+",
    label: "Active Students",
  },
  {
    icon: <BookOpen className="h-6 w-6" />,
    value: "500+",
    label: "Courses",
  },
  {
    icon: <Award className="h-6 w-6" />,
    value: "100+",
    label: "Expert Instructors",
  },
];

const values = [
  {
    icon: <Target className="h-12 w-12 text-primary" />,
    title: "Our Mission",
    description:
      "To provide accessible, high-quality education to learners worldwide, empowering them to achieve their personal and professional goals.",
  },
  {
    icon: <Globe className="h-12 w-12 text-primary" />,
    title: "Global Impact",
    description:
      "Creating a diverse learning community that connects students and instructors from different cultures and backgrounds.",
  },
  {
    icon: <GraduationCap className="h-12 w-12 text-primary" />,
    title: "Quality Education",
    description:
      "Delivering comprehensive, industry-relevant courses that prepare students for real-world success.",
  },
];

const team = [
  {
    name: "Sarah Johnson",
    role: "CEO & Founder",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop",
  },
  {
    name: "Michael Chen",
    role: "Head of Education",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1770&auto=format&fit=crop",
  },
  {
    name: "Emily Brown",
    role: "Head of Technology",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop",
  },
];

export default function AboutPage() {
  return (
    <div className="container py-8 space-y-16 px-32">
      {/* Hero Section */}
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold">About EduHub</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Transforming education through innovative online learning solutions,
          connecting passionate instructors with eager learners worldwide.
        </p>
      </section>

      {/* Stats Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {stats.map((stat, index) => (
          <Card key={index}>
            <CardContent className="flex items-center gap-4 p-6">
              <div className="p-3 bg-primary/10 rounded-lg">{stat.icon}</div>
              <div>
                <p className="text-3xl font-bold">{stat.value}</p>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </section>

      {/* Values Section */}
      <section>
        <h2 className="text-3xl font-bold text-center mb-8">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <Card key={index}>
              <CardContent className="p-6 text-center space-y-4">
                <div className="flex justify-center">{value.icon}</div>
                <h3 className="text-xl font-semibold">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section>
        <h2 className="text-3xl font-bold text-center mb-8">Our Leadership Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <Card key={index}>
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-32 h-32 mx-auto rounded-full overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">{member.name}</h3>
                  <p className="text-muted-foreground">{member.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}