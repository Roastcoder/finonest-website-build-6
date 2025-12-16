# Technology Stack & Development Setup

## Programming Languages & Versions

### Primary Languages
- **TypeScript 5.x** - Main development language for type safety
- **JavaScript ES2022** - Runtime execution and legacy compatibility
- **CSS3** - Styling with modern features and custom properties
- **HTML5** - Semantic markup and accessibility features

### Runtime Environments
- **Node.js 18+** - Server-side JavaScript runtime
- **React 19.0.0** - Frontend library with latest features
- **Next.js 16.0.7** - Full-stack React framework with App Router

## Frontend Technology Stack

### Core Framework
- **Next.js 16.0.7** - App Router, Server Components, API Routes
- **React 19.0.0** - Component library with concurrent features
- **TypeScript 5.x** - Static type checking and IntelliSense

### UI & Styling
- **Tailwind CSS 3.3.0** - Utility-first CSS framework
- **Radix UI** - Headless component library for accessibility
  - @radix-ui/react-dialog, accordion, dropdown-menu, etc.
- **Framer Motion 10.16.16** - Animation and gesture library
- **Lucide React 0.294.0** - Icon library with 1000+ icons
- **Class Variance Authority** - Component variant management

### State & Data Management
- **React Hooks** - Built-in state management
- **Context API** - Global state for authentication and themes
- **SWR/React Query** - Server state synchronization (implied usage)

### Development Tools
- **ESLint 8.x** - Code linting and style enforcement
- **PostCSS 8.x** - CSS processing and optimization
- **Autoprefixer** - CSS vendor prefix automation

## Backend Technology Stack

### Server Framework
- **Express.js** - Web application framework for Node.js
- **TypeScript** - Type-safe server development
- **Nodemon** - Development server with hot reload

### Database & ODM
- **MongoDB** - NoSQL document database
- **Mongoose** - Object Document Mapper (ODM)
- **Connection Pooling** - Optimized database connections

### Authentication & Security
- **JWT (JSON Web Tokens)** - Stateless authentication
- **bcryptjs** - Password hashing and verification
- **Helmet** - Security headers middleware
- **CORS** - Cross-Origin Resource Sharing configuration
- **Rate Limiting** - API request throttling

### API & Middleware
- **RESTful APIs** - Standard HTTP methods and status codes
- **Express Middleware** - Custom authentication and validation
- **Multer** - File upload handling (implied)
- **Express Validator** - Request validation middleware

## Build System & Dependencies

### Package Management
- **npm** - Primary package manager
- **pnpm** - Alternative fast package manager (lockfile present)
- **Bun** - Modern JavaScript runtime (lockfile present)

### Build Tools
- **Next.js Compiler** - Built-in TypeScript and JSX compilation
- **Turbopack** - Next.js bundler for development
- **PostCSS** - CSS processing pipeline
- **Tailwind JIT** - Just-in-time CSS compilation

### Development Dependencies
```json
{
  "@types/node": "^20",
  "@types/react": "^19", 
  "@types/react-dom": "^19",
  "concurrently": "^8.2.2",
  "eslint-config-next": "16.0.7"
}
```

## Development Commands

### Frontend Development
```bash
npm run dev:client          # Start Next.js development server (port 3000)
npm run build              # Build production frontend
npm start                  # Start production frontend server
npm run lint               # Run ESLint code analysis
npm run type-check         # TypeScript type checking
```

### Backend Development
```bash
npm run dev:server         # Start Express development server (port 5000)
npm run build:server       # Build production backend
npm run server            # Start production backend server
```

### Full Stack Development
```bash
npm run dev               # Start both frontend and backend concurrently
npm run audit             # Security audit for dependencies
```

## Configuration Files

### Next.js Configuration
- **next.config.mjs** - Next.js configuration with security headers
- **middleware.ts** - Route middleware for authentication
- **tsconfig.json** - TypeScript compiler configuration

### Styling Configuration
- **tailwind.config.js** - Tailwind CSS customization
- **postcss.config.mjs** - PostCSS plugin configuration
- **components.json** - Shadcn/ui component configuration

### Development Configuration
- **nodemon.json** - Backend development server configuration
- **.env files** - Environment variables for different stages
- **package.json** - Project metadata and scripts

## Environment Setup

### Required Environment Variables
```env
NODE_ENV=development|production
PORT=5000
CLIENT_URL=http://localhost:3000
MONGODB_URI=mongodb://localhost:27017/finonest
JWT_SECRET=your_jwt_secret_key
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_email_password
```

### Database Setup
- **MongoDB 5.0+** - Local or cloud instance
- **Database Name**: finonest
- **Connection Pooling**: Configured in Mongoose
- **Indexes**: Optimized for query performance

## Performance Optimizations

### Frontend Optimizations
- **Image Optimization** - Next.js Image component with WebP/AVIF
- **Code Splitting** - Automatic route-based splitting
- **Static Generation** - Pre-rendered pages for better performance
- **Compression** - Gzip compression enabled
- **Caching** - Browser caching with ETags disabled for security

### Backend Optimizations
- **Connection Pooling** - MongoDB connection optimization
- **Middleware Optimization** - Efficient request processing
- **Response Compression** - Gzip compression for API responses
- **Rate Limiting** - Prevents API abuse and improves stability

## Security Configuration

### Frontend Security
- **Content Security Policy** - XSS protection headers
- **X-Frame-Options** - Clickjacking protection
- **X-Content-Type-Options** - MIME type sniffing protection
- **Referrer Policy** - Referrer information control

### Backend Security
- **JWT Authentication** - Stateless token-based auth
- **Password Hashing** - bcrypt with salt rounds
- **CORS Configuration** - Controlled cross-origin access
- **Input Validation** - Request sanitization and validation
- **Security Headers** - Helmet.js security middleware