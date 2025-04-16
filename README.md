# EduHub - Online Learning Platform

EduHub is a modern online learning platform built with Next.js, featuring a clean and professional design with comprehensive features for students, instructors, and administrators.

## Features

### User Authentication
- Login and Registration pages
- Role-based access (Student, Instructor, Admin)
- Demo accounts available for testing

### Student Features
- Browse course catalog with filtering options
- Detailed course pages with progress tracking
- Personal dashboard showing enrolled courses
- Course progress visualization

### Instructor Features
- Course management dashboard
- Create and edit courses
- Track student enrollment and progress
- Revenue monitoring

### Admin Features
- User management system
- Course oversight
- Platform statistics
- Administrative controls

### General Features
- Responsive design (mobile, tablet, desktop)
- Dark/Light theme support
- Modern UI with shadcn/ui components
- Contact form for support
- About page with platform information

## Demo Accounts

```javascript
Student Account:
Email: student@demo.com
Password: demo123

Instructor Account:
Email: instructor@demo.com
Password: demo123

Admin Account:
Email: admin@demo.com
Password: demo123
```

## Tech Stack

- **Framework**: Next.js 13 (App Router)
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Theme**: next-themes
- **Typography**: Inter font

## Project Structure

```
├── app/
│   ├── (auth)/
│   │   ├── login/
│   │   └── register/
│   ├── dashboard/
│   │   ├── admin/
│   │   ├── instructor/
│   │   └── student/
│   ├── courses/
│   ├── about/
│   └── contact/
├── components/
│   ├── ui/
│   ├── navbar.tsx
│   └── footer.tsx
└── lib/
    └── utils.ts
```

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Features in Detail

### Course Catalog
- Grid layout of available courses
- Filter by category and difficulty
- Search functionality
- Course cards with key information

### Course Pages
- Detailed course information
- Progress tracking
- Module listing
- Learning objectives

### Dashboards
- **Student**: Course progress, enrolled courses
- **Instructor**: Course management, student tracking
- **Admin**: User management, platform overview

### UI/UX
- Clean, modern design
- Responsive layouts
- Intuitive navigation
- Consistent spacing and typography
- Dark/Light theme support

## Development Notes

- Built with Next.js App Router for optimal performance
- Implements modern React patterns and best practices
- Uses Tailwind CSS for responsive design
- Incorporates shadcn/ui for consistent UI components
- Features mock data for demonstration purposes

## Future Enhancements

- Backend integration
- Real authentication system
- Payment processing
- Video content delivery
- Interactive assessments
- Student-instructor messaging
- Course reviews and ratings
- Certificate generation
- Analytics dashboard
- Email notifications

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
