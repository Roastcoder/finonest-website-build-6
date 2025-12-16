# Development Guidelines & Patterns

## Code Quality Standards

### TypeScript Usage
- **Strict Type Safety**: All files use TypeScript with explicit type definitions
- **Interface Definitions**: Complex data structures defined with interfaces (e.g., `DashboardStats`, `Application`, `User`)
- **Type Annotations**: Function parameters and return types explicitly typed
- **Generic Types**: Used for reusable components and utilities
- **Optional Properties**: Proper use of `?` for optional interface properties

### Import Organization
- **External Libraries First**: React, Next.js, third-party packages imported first
- **Internal Imports**: Local components and utilities imported after external
- **Grouped Imports**: Related imports grouped together with line breaks
- **Absolute Paths**: Use `@/` prefix for internal imports (configured in tsconfig)

### Component Structure Patterns
- **Client Components**: Use `"use client"` directive for interactive components
- **Default Exports**: Main components exported as default
- **Named Exports**: Utility functions and sub-components as named exports
- **Component Props**: Destructured in function parameters with TypeScript interfaces

## Architectural Patterns

### React Component Patterns
- **Functional Components**: All components use function syntax, no class components
- **Hooks Usage**: Consistent use of React hooks (useState, useEffect, useCallback, useRef)
- **Custom Hooks**: Reusable logic extracted into custom hooks (e.g., `useParallax`, `useSidebar`)
- **Context Pattern**: Global state managed through React Context API
- **Compound Components**: Complex UI components broken into sub-components

### State Management
- **Local State**: useState for component-specific state
- **Context API**: Global state shared through context providers
- **State Lifting**: Shared state lifted to common parent components
- **Derived State**: Computed values derived from existing state
- **Ref Usage**: useRef for DOM references and mutable values

### Data Fetching Patterns
- **Async/Await**: Consistent use of async/await for API calls
- **Error Handling**: Try-catch blocks for error management
- **Loading States**: Loading indicators during data fetching
- **Promise.all**: Parallel API calls for better performance
- **Conditional Rendering**: UI updates based on loading and error states

## UI/UX Patterns

### Styling Conventions
- **Tailwind CSS**: Utility-first CSS framework for all styling
- **Responsive Design**: Mobile-first approach with responsive breakpoints
- **Color System**: Consistent color palette using CSS custom properties
- **Component Variants**: Class Variance Authority (CVA) for component variations
- **Conditional Classes**: `cn()` utility for conditional class application

### Animation Standards
- **Framer Motion**: Primary animation library for complex animations
- **CSS Transitions**: Simple transitions using Tailwind transition classes
- **Performance**: RequestAnimationFrame for smooth scroll animations
- **Easing Functions**: Consistent easing curves for natural motion
- **Reduced Motion**: Respect user preferences for reduced motion

### Component Library Usage
- **Radix UI**: Headless components for accessibility and functionality
- **Shadcn/ui**: Pre-built components following design system
- **Lucide Icons**: Consistent icon library throughout the application
- **Compound Components**: Complex components built from smaller parts

## API & Backend Patterns

### Express.js Conventions
- **Router Pattern**: Modular route organization using Express Router
- **Middleware Chain**: Authentication, authorization, and validation middleware
- **Error Handling**: Consistent error response format
- **Status Codes**: Proper HTTP status codes for different scenarios
- **Request Validation**: Input validation and sanitization

### Database Patterns
- **Mongoose ODM**: MongoDB integration with schema validation
- **Population**: Related document population for complex queries
- **Aggregation**: Complex data queries using MongoDB aggregation
- **Indexing**: Optimized queries with proper database indexes
- **Transactions**: ACID compliance for critical operations

### Authentication & Authorization
- **JWT Tokens**: Stateless authentication using JSON Web Tokens
- **Role-Based Access**: Hierarchical permission system
- **Middleware Protection**: Route-level authentication and authorization
- **Token Refresh**: Secure token management and renewal
- **Session Management**: Proper session handling and cleanup

## Development Best Practices

### Code Organization
- **Feature-Based Structure**: Components organized by feature/domain
- **Separation of Concerns**: Clear separation between UI, logic, and data
- **Reusable Components**: Common UI elements extracted into reusable components
- **Utility Functions**: Helper functions in dedicated utility files
- **Configuration Management**: Environment-specific configuration files

### Performance Optimization
- **Code Splitting**: Route-based code splitting with Next.js
- **Image Optimization**: Next.js Image component for optimized images
- **Lazy Loading**: Dynamic imports for non-critical components
- **Memoization**: React.memo and useMemo for expensive computations
- **Bundle Analysis**: Regular bundle size monitoring and optimization

### Error Handling
- **Graceful Degradation**: Fallback UI for error states
- **User Feedback**: Clear error messages and loading states
- **Logging**: Comprehensive error logging for debugging
- **Boundary Components**: Error boundaries for component-level error handling
- **Validation**: Input validation on both client and server sides

## Security Patterns

### Frontend Security
- **Input Sanitization**: XSS prevention through proper input handling
- **CSRF Protection**: Cross-site request forgery prevention
- **Content Security Policy**: Proper CSP headers for security
- **Secure Headers**: Security headers configuration in Next.js
- **Environment Variables**: Secure handling of sensitive configuration

### Backend Security
- **Authentication Middleware**: Secure route protection
- **Password Hashing**: bcrypt for secure password storage
- **Rate Limiting**: API rate limiting to prevent abuse
- **CORS Configuration**: Proper cross-origin resource sharing setup
- **Input Validation**: Server-side validation and sanitization

## Testing & Quality Assurance

### Code Quality Tools
- **ESLint**: Code linting with Next.js configuration
- **TypeScript**: Compile-time type checking
- **Prettier**: Code formatting consistency
- **Husky**: Git hooks for pre-commit quality checks
- **Audit**: Regular dependency security audits

### Development Workflow
- **Git Flow**: Structured branching and merging strategy
- **Code Reviews**: Peer review process for quality assurance
- **Continuous Integration**: Automated testing and deployment
- **Documentation**: Comprehensive code and API documentation
- **Version Control**: Semantic versioning for releases

## Naming Conventions

### File Naming
- **kebab-case**: File names use kebab-case (e.g., `admin-dashboard.tsx`)
- **PascalCase**: Component files use PascalCase (e.g., `AdminDashboard.tsx`)
- **camelCase**: Utility files use camelCase (e.g., `useParallax.ts`)
- **Descriptive Names**: Clear, descriptive file names indicating purpose

### Variable Naming
- **camelCase**: Variables and functions use camelCase
- **PascalCase**: Components and interfaces use PascalCase
- **UPPER_CASE**: Constants use UPPER_CASE with underscores
- **Descriptive Names**: Self-documenting variable names
- **Boolean Prefixes**: Boolean variables prefixed with `is`, `has`, `can`

### API Conventions
- **RESTful URLs**: Standard REST API URL patterns
- **HTTP Methods**: Proper HTTP method usage (GET, POST, PUT, DELETE)
- **Response Format**: Consistent JSON response structure
- **Error Codes**: Standard HTTP status codes for different scenarios
- **Versioning**: API versioning strategy for backward compatibility