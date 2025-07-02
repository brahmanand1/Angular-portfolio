# Brahmanand Mishra - Portfolio Website

A modern, responsive portfolio website showcasing 6.9 years of Angular development experience.

## Features

- **Responsive Design**: Mobile-first approach with dark/light theme support
- **Interactive Sections**: Hero, About, Experience, Projects, Education, Contact
- **Resume Download**: Direct PDF download functionality
- **Contact Form**: Backend API integration for message submission
- **Modern UI**: Built with shadcn/ui components and TailwindCSS
- **Performance Optimized**: Fast loading with smooth animations

## Tech Stack

### Frontend
- React 18 with TypeScript
- Vite (build tool)
- TailwindCSS (styling)
- shadcn/ui (component library)
- TanStack Query (state management)
- Wouter (routing)

### Backend
- Express.js with TypeScript
- Drizzle ORM
- In-memory storage
- Zod validation

## Quick Start

### Prerequisites
- Node.js 20 or higher
- npm or yarn

### Installation

1. **Download the source code** (use one of the methods above)

2. **Install dependencies**:
```bash
npm install
```

3. **Start the development server**:
```bash
npm run dev
```

4. **Open your browser** and navigate to `http://localhost:5000`

## Project Structure

```
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/     # UI components
│   │   ├── pages/          # Page components
│   │   └── lib/            # Utilities and constants
├── server/                 # Backend Express application
│   ├── index.ts            # Server entry point
│   ├── routes.ts           # API routes
│   └── storage.ts          # Data storage
├── shared/                 # Shared types and schemas
└── attached_assets/        # Resume PDF files
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## Features in Detail

### Resume Download
- Automatically serves the resume PDF file
- Downloads as "Brahmanand_Mishra_Resume.pdf"

### Contact Form
- Form validation with Zod
- Stores messages in memory
- Success/error notifications

### Theme Support
- Light and dark mode toggle
- Persistent theme preference
- Smooth transitions

## Customization

### Personal Information
Edit `client/src/lib/constants.ts` to update:
- Personal details
- Skills and technologies
- Work experience
- Projects
- Education
- Achievements

### Styling
- Colors: Update CSS variables in `client/src/index.css`
- Components: Modify files in `client/src/components/`
- Layout: Edit page components in `client/src/pages/`

## Deployment

The application is ready for deployment on platforms like:
- Replit Deployments
- Vercel
- Netlify
- Heroku

### Environment Variables (Optional)
For production deployment with PostgreSQL:
- `DATABASE_URL` - PostgreSQL connection string
- `NODE_ENV` - Set to "production"

## Contact

**Brahmanand Mishra**
- Email: bnm.amethi@gmail.com
- Phone: +91 8756576109
- Location: Gurgaon, Haryana, India

---

Built with ❤️ using modern web technologies