import { GraduationCap, Heart } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t bg-background lg:px-20 px-5">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <GraduationCap className="h-7 w-7" />
              <span className="text-xl font-bold">EduHub</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Transforming education through innovative online learning solutions.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="font-semibold">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/courses" className="text-muted-foreground hover:text-primary">
                  Courses
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="font-semibold">Support</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/help" className="text-muted-foreground hover:text-primary">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-muted-foreground hover:text-primary">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-muted-foreground hover:text-primary">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="font-semibold">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="text-muted-foreground">support@eduhub.com</li>
              <li className="text-muted-foreground">+1 (555) 123-4567</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} EduHub. All rights reserved.
          <p className="text-sm flex items-center gap-1 justify-center">
              For Demo Purpose - 
              Made with <Heart className="h-4 w-4 text-red-500" /> Alier E. Torrenueva
            </p>
        </div>
      </div>
    </footer>
  );
}