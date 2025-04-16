"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  BookOpen,
  Clock,
  Users,
  PlayCircle,
  CheckCircle2,
  BarChart,
} from "lucide-react";

const course = {
  id: 1,
  title: "Advanced React Development",
  description:
    "Master modern React patterns and build scalable applications. Learn advanced concepts like custom hooks, performance optimization, and state management.",
  instructor: "Sarah Johnson",
  category: "Web Development",
  difficulty: "Advanced",
  duration: "12 weeks",
  students: 234,
  progress: 35,
  image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070",
  modules: [
    {
      id: 1,
      title: "Introduction to Advanced React Concepts",
      duration: "45 minutes",
      completed: true,
    },
    {
      id: 2,
      title: "Custom Hooks and Reusable Logic",
      duration: "1 hour",
      completed: true,
    },
    {
      id: 3,
      title: "Performance Optimization Techniques",
      duration: "1.5 hours",
      completed: false,
    },
    {
      id: 4,
      title: "Advanced State Management",
      duration: "2 hours",
      completed: false,
    },
  ],
};

export default function CourseDetailPage() {
  return (
    <div className="container py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2">
          <div className="aspect-video w-full overflow-hidden rounded-lg mb-8">
            <img
              src={course.image}
              alt={course.title}
              className="h-full w-full object-cover"
            />
          </div>

          <h1 className="text-3xl font-bold mb-4">{course.title}</h1>

          <div className="flex flex-wrap gap-4 mb-6">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Clock className="h-5 w-5" />
              <span>{course.duration}</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Users className="h-5 w-5" />
              <span>{course.students} students</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <BookOpen className="h-5 w-5" />
              <span>{course.difficulty}</span>
            </div>
          </div>

          <Tabs defaultValue="overview" className="space-y-4">
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-4">
              <h2 className="text-xl font-semibold">About This Course</h2>
              <p className="text-muted-foreground">{course.description}</p>

              <h3 className="text-lg font-semibold mt-6">What You'll Learn</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span>Advanced React Patterns</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span>Performance Optimization</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span>Custom Hooks Development</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span>State Management</span>
                </li>
              </ul>
            </TabsContent>

            <TabsContent value="curriculum">
              <div className="space-y-4">
                {course.modules.map((module) => (
                  <Card key={module.id}>
                    <CardContent className="flex items-center justify-between p-4">
                      <div className="flex items-center gap-4">
                        <PlayCircle className="h-5 w-5 text-primary" />
                        <div>
                          <p className="font-medium">{module.title}</p>
                          <p className="text-sm text-muted-foreground">
                            {module.duration}
                          </p>
                        </div>
                      </div>
                      {module.completed && (
                        <CheckCircle2 className="h-5 w-5 text-green-500" />
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="reviews">
              <p className="text-muted-foreground">No reviews yet.</p>
            </TabsContent>
          </Tabs>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          <Card>
            <CardContent className="p-6">
              <div className="mb-6">
                <p className="text-2xl font-bold mb-2">Course Progress</p>
                <Progress value={course.progress} className="h-2" />
                <p className="text-sm text-muted-foreground mt-2">
                  {course.progress}% Complete
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <BarChart className="h-5 w-5 text-primary" />
                  <span>Beginner to Advanced</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-primary" />
                  <span>12 weeks of content</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" />
                  <span>Join 234 students</span>
                </div>
              </div>

              <Button className="w-full mt-6">Continue Learning</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}