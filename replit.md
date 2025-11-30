# Humane AI Certification Platform

## Overview

The Humane AI Certification Platform is a web application that provides independent certification and ratings for AI products based on human wellbeing, privacy, transparency, and ethical principles. Similar to organic food labels or energy efficiency ratings, this platform helps users make informed decisions about AI products by displaying certification badges, principle grades, and detailed assessments across eight core humane technology principles.

The application serves as a directory of AI products with certification status (Certified Humane Plus, Certified Humane, Recommended Humane) and evaluates them against the eight humane principles. Currently accessible at humanecertified.ai.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework**: React with TypeScript using Vite as the build tool

**UI Component System**: 
- Shadcn/ui component library based on Radix UI primitives
- Material Design-inspired approach with trust-focused customization
- New York style variant with neutral base color scheme
- Tailwind CSS for styling with custom design tokens

**Design Philosophy**:
- Trust-through-clarity principle: Every element reinforces certification legitimacy
- Data-first hierarchy: Scores and grades take visual priority
- Professional authority with clean, confident design
- Scannable structure for quick product comparison

**Typography**: 
- Uses Inter or IBM Plex Sans for headings (700/600 weight) and body text (400/500 weight)
- Tabular figures for data/scores with 600 weight for prominence

**Layout System**:
- Responsive grid: 1-column mobile, 2-column tablet, 3-column desktop for product cards
- Consistent spacing using Tailwind units (4, 6, 8, 12, 16, 24)
- Max-width container (7xl) with responsive padding

**State Management**:
- TanStack Query (React Query) for server state and API data fetching
- Query client configured with infinite stale time and disabled refetching for performance
- Supports both "throw" and "returnNull" unauthorized behaviors

**Routing**: 
- Wouter for client-side routing (lightweight alternative to React Router)
- Simple route structure with Home page and 404 fallback

### Backend Architecture

**Runtime**: Node.js with Express.js framework

**Language**: TypeScript with ES modules

**API Design**:
- RESTful API structure under `/api` prefix
- JSON request/response format
- CRUD operations for AI product management
- Endpoints:
  - `GET /api/products` - Retrieve all products
  - `GET /api/products/:id` - Retrieve single product
  - `POST /api/products` - Create new product
  - Update/delete operations supported in storage layer

**Request Validation**:
- Zod schema validation for all incoming data
- `drizzle-zod` integration for database schema validation
- User-friendly error messages via `zod-validation-error`

**Middleware**:
- JSON body parsing with raw body preservation (for webhook verification)
- URL-encoded form data support
- Custom logging middleware that captures response bodies and execution time
- Vite development middleware integration

### Data Storage

**Database**: PostgreSQL via Neon serverless

**ORM**: Drizzle ORM with the following characteristics:
- Type-safe queries using TypeScript
- Schema-first approach with migrations support
- WebSocket connection pooling for serverless environments
- Schema located in `/shared/schema.ts` for type sharing between client and server

**Database Schema**:

1. **Users Table**:
   - `id`: UUID primary key (auto-generated)
   - `username`: Unique text field
   - `password`: Text field (note: implementation should hash passwords)

2. **AI Products Table**:
   - `id`: UUID primary key (auto-generated)
   - `name`: Product name (required)
   - `description`: Optional text description
   - `certification`: Certification level ("certified" | "recommended" | "not_certified")
   - `avatar`: Optional image URL
   - `principles`: JSONB array of principle objects with name, grade, and icon

**Principle Grading System**:
- Letter grades: A, B, C, D for performance-based principles
- "verified" status for certified compliance
- null for not evaluated
- Each principle includes an icon identifier for visual representation

**Storage Layer**:
- Abstraction pattern with `IStorage` interface
- `DatabaseStorage` implementation using Drizzle
- Supports future storage backend swaps without changing application logic

### External Dependencies

**UI Component Libraries**:
- Radix UI primitives (@radix-ui/*) for accessible, unstyled components
- Embla Carousel for product carousels
- Lucide React for iconography
- date-fns for date manipulation

**Form Management**:
- React Hook Form with Zod resolvers for validation
- Integration with Shadcn form components

**Database & ORM**:
- @neondatabase/serverless for PostgreSQL connection
- drizzle-orm and drizzle-kit for schema management and migrations
- ws (WebSocket) for Neon's WebSocket connection requirement

**Styling**:
- Tailwind CSS with PostCSS and Autoprefixer
- class-variance-authority (CVA) for component variant management
- clsx and tailwind-merge for conditional class composition

**Development Tools**:
- tsx for running TypeScript in development
- esbuild for server-side bundling in production
- @replit/* plugins for Replit IDE integration (dev banner, cartographer, error overlay)

**Session Management**:
- connect-pg-simple for PostgreSQL session storage (installed but not currently configured in visible code)

**Type Safety**:
- Shared schema definitions between client and server via `/shared` directory
- Zod for runtime type validation matching TypeScript types
- Path aliases configured for clean imports (`@/*`, `@shared/*`, `@assets/*`)