"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { BookOpen, Clock, Users } from "lucide-react";
import Link from "next/link";

const courses = [
  {
    id: 1,
    title: "Advanced React Development",
    description: "Master modern React patterns and build scalable applications",
    instructor: "Sarah Johnson",
    category: "Web Development",
    difficulty: "Advanced",
    duration: "12 weeks",
    students: 234,
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070",
  },
  {
    id: 2,
    title: "Python for Data Science",
    description: "Learn Python programming for data analysis and visualization",
    instructor: "Michael Chen",
    category: "Data Science",
    difficulty: "Intermediate",
    duration: "10 weeks",
    students: 189,
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2070",
  },
  {
    id: 3,
    title: "UI/UX Design Fundamentals",
    description: "Create beautiful and user-friendly digital experiences",
    instructor: "Emily Brown",
    category: "Design",
    difficulty: "Beginner",
    duration: "8 weeks",
    students: 156,
    image: "https://images.unsplash.com/photo-1545235617-7a424c1a60cc?q=80&w=2070",
  },
  {
    id: 4,
    title: "Full Stack JavaScript",
    description: "Build complete web applications with modern JavaScript",
    instructor: "David Wilson",
    category: "Web Development",
    difficulty: "Intermediate",
    duration: "14 weeks",
    students: 312,
    image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?q=80&w=2070",
  },
];

export default function CoursesPage() {
  return (
    <div className="container py-8 lg:px-32 px-5">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">Browse Courses</h1>
          <p className="text-muted-foreground">
            Discover our wide range of courses taught by expert instructors
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
          <Select>
            <SelectTrigger className="w-full sm:w-[180px]">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              <SelectItem value="web">Web Development</SelectItem>
              <SelectItem value="data">Data Science</SelectItem>
              <SelectItem value="design">Design</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="w-full sm:w-[180px]">
              <SelectValue placeholder="Difficulty" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Levels</SelectItem>
              <SelectItem value="beginner">Beginner</SelectItem>
              <SelectItem value="intermediate">Intermediate</SelectItem>
              <SelectItem value="advanced">Advanced</SelectItem>
            </SelectContent>
          </Select>
          <Input
            placeholder="Search courses..."
            className="w-full sm:w-[220px]"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <Card key={course.id} className="flex flex-col">
            <div className="aspect-video w-full overflow-hidden rounded-t-lg">
              <img
                src={course.image}
                alt={course.title}
                className="h-full w-full object-cover"
              />
            </div>
            <CardHeader>
              <div className="flex items-center justify-between">
                <p className="text-sm text-muted-foreground">{course.category}</p>
                <span className="text-xs bg-primary/10 text-primary py-1 px-2 rounded-full">
                  {course.difficulty}
                </span>
              </div>
              <CardTitle className="line-clamp-1">{course.title}</CardTitle>
              <p className="text-sm text-muted-foreground line-clamp-2">
                {course.description}
              </p>
            </CardHeader>
            <CardContent className="flex-1">
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Users className="h-4 w-4" />
                  <span>{course.students} students</span>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex items-center justify-between">
              <p className="text-sm">By {course.instructor}</p>
              <Button asChild>
                <Link href={`/courses/${course.id}`}>View Course</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}