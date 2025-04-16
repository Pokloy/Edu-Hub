"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Book, Clock, Trophy } from "lucide-react";

const enrolledCourses = [
  {
    id: 1,
    title: "Introduction to Web Development",
    progress: 75,
    totalHours: 20,
    completedHours: 15,
  },
  {
    id: 2,
    title: "Advanced JavaScript Concepts",
    progress: 45,
    totalHours: 30,
    completedHours: 13.5,
  },
  {
    id: 3,
    title: "UI/UX Design Fundamentals",
    progress: 90,
    totalHours: 15,
    completedHours: 13.5,
  },
];

export default function StudentDashboard() {
  return (
    <div className="container py-8 px-32">
      <h1 className="text-3xl font-bold mb-8">Student Dashboard</h1>
      
      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Enrolled Courses</CardTitle>
            <Book className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{enrolledCourses.length}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Hours Completed</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {enrolledCourses.reduce((acc, course) => acc + course.completedHours, 0)}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Average Progress</CardTitle>
            <Trophy className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {Math.round(
                enrolledCourses.reduce((acc, course) => acc + course.progress, 0) /
                  enrolledCourses.length
              )}%
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Course Progress */}
      <h2 className="text-xl font-semibold mb-4">Course Progress</h2>
      <div className="space-y-4">
        {enrolledCourses.map((course) => (
          <Card key={course.id}>
            <CardContent className="pt-6">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-medium">{course.title}</h3>
                <span className="text-sm text-muted-foreground">
                  {course.completedHours}/{course.totalHours} hours
                </span>
              </div>
              <Progress value={course.progress} className="h-2" />
              <div className="mt-1 text-sm text-muted-foreground text-right">
                {course.progress}% Complete
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}