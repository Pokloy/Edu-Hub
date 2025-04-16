"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import { GraduationCap, Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useState } from "react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 lg:px-20 px-5">
      <div className="container flex h-20 items-center justify-between">
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-3">
            <GraduationCap className="h-7 w-7" />
            <span className="text-xl font-bold">EduHub</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/dashboard/admin" className="text-muted-foreground hover:text-primary" onClick={() => setIsOpen(false)}>
                Admin DashBoard
          </Link>
          <Link href="/dashboard/student" className="text-muted-foreground hover:text-primary" onClick={() => setIsOpen(false)}>
            Student DashBoard
          </Link>
          <Link href="/dashboard/instructor" className="text-muted-foreground hover:text-primary" onClick={() => setIsOpen(false)}>
            Instructor DashBoard
          </Link>
          <Link href="/courses" className="text-muted-foreground hover:text-primary" onClick={() => setIsOpen(false)}>
            Courses
          </Link>
          <Link href="/about" className="text-muted-foreground hover:text-primary">
            About
          </Link>
          <Link href="/contact" className="text-muted-foreground hover:text-primary">
            Contact
          </Link>
          <ModeToggle />
          <Button variant="outline" asChild>
            <Link href="/login">Login</Link>
          </Button>
          <Button asChild>
            <Link href="/register">Register</Link>
          </Button>
        </nav>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <div className="flex flex-col gap-6 mt-8">
              <Link href="/dashboard/admin" onClick={() => setIsOpen(false)}>
                Admin DashBoard
              </Link>
              <Link href="/dashboard/student" onClick={() => setIsOpen(false)}>
                Student DashBoard
              </Link>
              <Link href="/dashboard/instructor" onClick={() => setIsOpen(false)}>
                Instructor DashBoard
              </Link>
              <Link href="/courses" onClick={() => setIsOpen(false)}>
                Courses
              </Link>
              <Link href="/about" onClick={() => setIsOpen(false)}>
                About
              </Link>
              <Link href="/contact" onClick={() => setIsOpen(false)}>
                Contact
              </Link>
              <Link href="/login" onClick={() => setIsOpen(false)}>
                Login
              </Link>
              <Link href="/register" onClick={() => setIsOpen(false)}>
                Register
              </Link>
              <ModeToggle />
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}