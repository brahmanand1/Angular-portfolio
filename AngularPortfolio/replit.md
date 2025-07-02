# Portfolio Application

## Overview

This is a full-stack portfolio web application built with React, TypeScript, and Express. The application showcases a professional Angular developer's portfolio with modern UI components, contact form functionality, and a clean, responsive design. It features a complete frontend-backend architecture with database integration for storing contact form submissions.

## System Architecture

The application follows a monorepo structure with clear separation between frontend and backend concerns:

- **Frontend**: React-based SPA with TypeScript, Vite bundling, and shadcn/ui components
- **Backend**: Express.js server with TypeScript support and API endpoints
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Styling**: TailwindCSS with custom design system and dark mode support
- **State Management**: TanStack Query for server state management

## Key Components

### Frontend Architecture
- **React 18** with TypeScript for type safety
- **Vite** as the build tool for fast development and optimized production builds
- **shadcn/ui** component library built on Radix UI primitives
- **TailwindCSS** for utility-first styling with custom CSS variables
- **Wouter** for lightweight client-side routing
- **TanStack Query** for efficient server state management and caching

### Backend Architecture
- **Express.js** server with TypeScript
- **Drizzle ORM** with PostgreSQL dialect for database operations
- **Neon Database** serverless driver for PostgreSQL connectivity
- **Zod** for runtime type validation and schema generation
- RESTful API design with proper error handling and logging

### UI Component System
- Comprehensive component library using shadcn/ui
- Dark/light theme support with CSS custom properties
- Responsive design with mobile-first approach
- Accessible components following ARIA standards
- Form components with validation support

### Database Schema
```typescript
// Contacts table for portfolio contact form
contacts: {
  id: serial (primary key)
  name: text (required)
  email: text (required)
  subject: text (required)
  message: text (required)
  createdAt: timestamp (auto-generated)
}

// Users table for potential future authentication
users: {
  id: serial (primary key)
  username: text (unique, required)
  password: text (required)
}
```

## Data Flow

1. **Contact Form Submission**:
   - User fills out contact form in the frontend
   - Form data is validated using Zod schemas on both client and server
   - TanStack Query mutation sends POST request to `/api/contact`
   - Server validates data and stores in PostgreSQL database
   - Success/error response triggers appropriate UI feedback

2. **Portfolio Data Display**:
   - Static portfolio data is defined in constants file
   - Components consume this data to render sections (About, Experience, Projects)
   - No database queries needed for portfolio content display

3. **Theme Management**:
   - Theme state managed in React Context
   - Preferences stored in localStorage
   - CSS custom properties updated dynamically

## External Dependencies

### Core Framework Dependencies
- **React & React DOM**: Frontend framework
- **Express**: Backend web framework
- **TypeScript**: Type safety across the stack
- **Vite**: Build tool and development server

### UI & Styling
- **@radix-ui**: Accessible UI primitive components
- **TailwindCSS**: Utility-first CSS framework
- **class-variance-authority**: Type-safe CSS class variants
- **Lucide React**: Icon library

### Database & Validation
- **Drizzle ORM**: Type-safe SQL query builder
- **@neondatabase/serverless**: PostgreSQL serverless driver
- **Zod**: Schema validation library

### Development & Build Tools
- **ESBuild**: Fast JavaScript bundler for server build
- **PostCSS & Autoprefixer**: CSS processing
- **TSX**: TypeScript execution for development

## Deployment Strategy

### Development Environment
- **Vite dev server** for frontend with HMR support
- **TSX** for running TypeScript server files directly
- **Concurrent development** with frontend and backend running simultaneously
- **Replit integration** with specialized plugins for development environment

### Production Build Process
1. **Frontend Build**: Vite builds optimized React application to `dist/public`
2. **Backend Build**: ESBuild bundles Express server to `dist/index.js`
3. **Static File Serving**: Express serves built frontend assets in production
4. **Database Migrations**: Drizzle Kit handles schema changes

### Environment Configuration
- **Development**: Uses NODE_ENV=development with separate dev server
- **Production**: Single Express server serves API and static files
- **Database**: Environment variable `DATABASE_URL` for PostgreSQL connection

### Hosting Considerations
- Application designed for deployment on platforms supporting Node.js
- Requires PostgreSQL database (Neon Database recommended)
- Environment variables needed: `DATABASE_URL`, `NODE_ENV`
- Build artifacts in `dist/` directory ready for deployment

## Recent Changes
- July 02, 2025: Enhanced portfolio with personalized content based on user's resume:
  - Updated experience to reflect 6.9 years of Angular development
  - Added resume download functionality with actual PDF file
  - Created certifications section highlighting LinkedIn Learning courses
  - Added achievements section with awards and recognition
  - Created education section showcasing MCA and BCA degrees
  - Updated navigation to include education section
  - Improved hero section with specialized skills description

## Changelog
- July 02, 2025. Initial setup and personalization

## User Preferences

Preferred communication style: Simple, everyday language.