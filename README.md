# Visionary - Modern React Application

A comprehensive React application template built with the latest tools and best practices.

## 🚀 Tech Stack

### Core Framework
- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **React Router** - Client-side routing

### Styling & Design
- **Tailwind CSS** - Utility-first CSS framework
- **Inter Font** - Modern typography
- **Custom Design System** - Comprehensive component library

### Animation & 3D
- **Framer Motion** - Smooth animations and transitions
- **Three.js** - 3D graphics and background animations
- **@react-three/fiber** - React renderer for Three.js
- **@react-three/drei** - Useful helpers for react-three-fiber
- **react-spring** - Spring-based animations

### State & Forms
- **Zustand** - State management
- **React Hook Form + Zod** - Form handling and validation

### Utilities
- **Axios** - HTTP client
- **React Intersection Observer** - Scroll-triggered animations
- **Vitest** - Testing framework
- **ESLint + Prettier** - Code quality and formatting

## 📦 Installation

1. Install dependencies:
```bash
npm install
```

## 🛠️ Development

Start the development server:
```bash
npm run dev
```

The app will be available at `http://localhost:5173`

## 🏗️ Build

Build for production:
```bash
npm run build
```

Preview production build:
```bash
npm run preview
```

## 🧪 Testing

Run tests:
```bash
npm test
```

Run tests with UI:
```bash
npm run test:ui
```

## 📝 Code Quality

Lint your code:
```bash
npm run lint
```

Format your code:
```bash
npm run format
```

## 📁 Project Structure

```
src/
├── components/     # Reusable React components
├── pages/         # Page components
├── hooks/         # Custom React hooks
├── store/         # Zustand state management
├── lib/           # Utility libraries (API client, etc.)
├── utils/         # Helper functions
├── types/         # TypeScript type definitions
├── test/          # Test setup and utilities
├── App.tsx        # Main app component
├── main.tsx       # Application entry point
└── index.css      # Global styles
```

## 🎨 Features

### Design & UI
- ✅ **Modern, Sleek Design** - Minimalistic and professional aesthetic
- ✅ **Responsive Layout** - Mobile-first design that works on all devices
- ✅ **Custom Color System** - Primary and accent color palettes
- ✅ **Typography System** - Inter font with consistent sizing and weights
- ✅ **Glassmorphism Effects** - Backdrop blur navigation and overlays

### Animations
- ✅ **Three.js Particle Background** - Animated particle system
- ✅ **Framer Motion Animations** - Smooth page transitions and scroll animations
- ✅ **Animated Cards** - Hover effects and entrance animations
- ✅ **Scroll-triggered Animations** - Elements animate as you scroll
- ✅ **Interactive Components** - Buttons and cards with micro-interactions

### Pages & Components
- ✅ **Home Page** - Hero section with animated background and feature cards
- ✅ **Services Page** - Comprehensive service offerings with animations
- ✅ **About Page** - Company story, values, and timeline
- ✅ **Contact Page** - Functional contact form with validation
- ✅ **Modern Navigation** - Fixed header with mobile menu
- ✅ **Footer** - Comprehensive site footer with links

### Developer Experience
- ✅ TypeScript for type safety
- ✅ React Router for navigation
- ✅ React Hook Form with Zod validation
- ✅ Axios configured with interceptors
- ✅ Custom hooks (useDebounce, useLocalStorage)
- ✅ Testing setup with Vitest
- ✅ ESLint and Prettier configured
- ✅ Path aliases (@/ imports)
- ✅ Environment variables support

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the root directory:

```env
VITE_API_URL=https://api.example.com
```

See `.env.example` for reference.

### Path Aliases

Import using the `@/` alias:

```typescript
import { Button } from '@/components/Button';
import { useStore } from '@/store/useStore';
```

## 📚 Learn More

- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [TypeScript Documentation](https://www.typescriptlang.org)
- [Tailwind CSS Documentation](https://tailwindcss.com)
- [React Router Documentation](https://reactrouter.com)

## 📄 License

MIT

