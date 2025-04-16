"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Plus, Trash2 } from "lucide-react";
import { useState } from "react";

interface Module {
  id: number;
  title: string;
  duration: string;
  description: string;
}

export default function CreateCoursePage() {
  const [modules, setModules] = useState<Module[]>([
    { id: 1, title: "", duration: "", description: "" },
  ]);

  const addModule = () => {
    const newModule = {
      id: modules.length + 1,
      title: "",
      duration: "",
      description: "",
    };
    setModules([...modules, newModule]);
  };

  const removeModule = (id: number) => {
    if (modules.length > 1) {
      setModules(modules.filter((module) => module.id !== id));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="container py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Create New Course</h1>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Basic Information */}
          <Card>
            <CardHeader>
              <CardTitle>Basic Information</CardTitle>
              <CardDescription>
                Provide the basic details about your course
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="title">Course Title</Label>
                <Input
                  id="title"
                  placeholder="Enter course title"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Course Description</Label>
                <Textarea
                  id="description"
                  placeholder="Enter course description"
                  required
                  className="min-h-[100px]"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="category">Category</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="web">Web Development</SelectItem>
                      <SelectItem value="data">Data Science</SelectItem>
                      <SelectItem value="design">Design</SelectItem>
                      <SelectItem value="business">Business</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="difficulty">Difficulty Level</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select difficulty" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="beginner">Beginner</SelectItem>
                      <SelectItem value="intermediate">Intermediate</SelectItem>
                      <SelectItem value="advanced">Advanced</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="thumbnail">Course Thumbnail</Label>
                <Input
                  id="thumbnail"
                  type="file"
                  accept="image/*"
                  required
                />
              </div>
            </CardContent>
          </Card>

          {/* Course Modules */}
          <Card>
            <CardHeader>
              <CardTitle>Course Modules</CardTitle>
              <CardDescription>
                Add the modules and lessons for your course
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {modules.map((module, index) => (
                <div
                  key={module.id}
                  className="space-y-4 pb-6 border-b last:border-0"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold">Module {index + 1}</h3>
                    {modules.length > 1 && (
                      <Button
                        variant="ghost"
                        size="icon"
                        type="button"
                        onClick={() => removeModule(module.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    )}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor={`module-${module.id}-title`}>
                        Module Title
                      </Label>
                      <Input
                        id={`module-${module.id}-title`}
                        placeholder="Enter module title"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor={`module-${module.id}-duration`}>
                        Duration
                      </Label>
                      <Input
                        id={`module-${module.id}-duration`}
                        placeholder="e.g., 2 hours"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor={`module-${module.id}-description`}>
                      Module Description
                    </Label>
                    <Textarea
                      id={`module-${module.id}-description`}
                      placeholder="Enter module description"
                      required
                    />
                  </div>
                </div>
              ))}

              <Button
                type="button"
                variant="outline"
                className="w-full"
                onClick={addModule}
              >
                <Plus className="h-4 w-4 mr-2" />
                Add Module
              </Button>
            </CardContent>
          </Card>

          <div className="flex justify-end gap-4">
            <Button variant="outline">Save as Draft</Button>
            <Button type="submit">Publish Course</Button>
          </div>
        </form>
      </div>
    </div>
  );
}