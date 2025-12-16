# Project Structure & Architecture

## Directory Organization

### Frontend Structure (Next.js App Router)
```
app/
├── (auth)/                    # Authentication routes group
│   ├── login/                 # Login page
│   ├── signup/                # Registration page
│   └── layout.tsx            # Auth-specific layout
├── admin/                     # Admin panel routes
│   ├── dashboard/            # Admin dashboard
│   ├── applications/         # Application management
│   ├── users/               # User management
│   ├── products/            # Product management
│   ├── analytics/           # Analytics and reports
│   ├── seo-content/         # SEO content management
│   └── settings/            # System settings
├── products/                  # Product pages
│   ├── car-valuation/        # Car valuation tool
│   ├── personal-loans/       # Personal loan products
│   ├── home-loans/          # Home loan products
│   ├── business-loans/      # Business loan products
│   ├── credit-cards/        # Credit card products
│   ├── vehicle-loans/       # Vehicle financing
│   └── education-loans/     # Education financing
├── dashboard/                 # User dashboards
│   ├── customer/            # Customer dashboard
│   ├── employee/            # Employee dashboard
│   └── manager/             # Manager dashboard
├── api/                      # API routes
│   ├── admin/               # Admin API endpoints
│   ├── car-valuation/       # Car valuation API
│   ├── rc-lookup/           # RC number lookup
│   └── seo/                 # SEO-related APIs
├── blog/                     # Blog system
├── contact/                  # Contact page
├── about/                    # About page
└── eligibility/              # Eligibility checker
```

### Backend Structure (Express.js)
```
server/
└── src/
    ├── config/               # Configuration files
    ├── controllers/          # Route controllers
    ├── middleware/           # Custom middleware
    ├── models/              # Database models (Mongoose)
    ├── routes/              # API route definitions
    ├── scripts/             # Utility scripts
    └── index.ts             # Server entry point
```

### Component Architecture
```
components/
├── ui/                       # Reusable UI components (Radix UI based)
│   ├── button.tsx           # Button component
│   ├── card.tsx             # Card component
│   ├── form.tsx             # Form components
│   ├── sidebar.tsx          # Sidebar component
│   └── [other-ui-components]
├── animate-ui/              # Animation components
├── admin-sidebar.tsx        # Admin navigation
├── navigation.tsx           # Main navigation
├── hero-section.tsx         # Landing page hero
├── product-cards.tsx        # Product display cards
├── emi-calculator.tsx       # EMI calculation widget
├── parallax-provider.tsx    # Parallax effects
└── [feature-components]     # Feature-specific components
```

## Architectural Patterns

### Frontend Architecture
- **App Router Pattern**: Next.js 16 app directory structure
- **Route Groups**: Organized by functionality using parentheses
- **Layout Composition**: Nested layouts for different sections
- **Component Composition**: Reusable UI components with Radix UI
- **State Management**: React hooks and context for local state
- **Styling**: Tailwind CSS with component variants

### Backend Architecture
- **MVC Pattern**: Model-View-Controller separation
- **Middleware Chain**: Authentication, validation, error handling
- **RESTful API**: Standard HTTP methods and status codes
- **Database Layer**: Mongoose ODM for MongoDB interactions
- **Authentication**: JWT-based stateless authentication
- **Role-Based Access**: Hierarchical permission system

### Data Flow
1. **Client Request** → Next.js API Routes → Express.js Backend
2. **Authentication** → JWT Middleware → Route Protection
3. **Data Processing** → Controllers → Models → MongoDB
4. **Response** → JSON API → Frontend Components → UI Update

## Core Components & Relationships

### Authentication System
- **JWT Tokens**: Stateless authentication
- **Role Hierarchy**: Customer < Employee < Manager < Admin
- **Protected Routes**: Middleware-based route protection
- **Session Management**: Token refresh and expiration handling

### Product Management
- **Product Models**: Database schemas for different loan types
- **Application Workflow**: Multi-step application process
- **Document Handling**: File upload and verification system
- **Approval Pipeline**: Multi-level approval workflow

### User Interface
- **Design System**: Consistent UI components with Radix UI
- **Responsive Design**: Mobile-first approach with Tailwind
- **Animation System**: Framer Motion for smooth transitions
- **Theme System**: Dark/light mode support

### API Architecture
- **Frontend APIs**: Next.js API routes for client-side operations
- **Backend APIs**: Express.js routes for business logic
- **External Integrations**: Car valuation and RC lookup services
- **Error Handling**: Centralized error management

## Integration Points

### Frontend-Backend Communication
- **API Endpoints**: RESTful communication between Next.js and Express
- **Authentication**: JWT token passing for secure requests
- **File Uploads**: Multipart form data for document handling
- **Real-time Updates**: Polling for application status changes

### Database Integration
- **MongoDB**: Primary database for all application data
- **Mongoose**: ODM for schema definition and validation
- **Indexing**: Optimized queries for performance
- **Relationships**: Referenced documents for data integrity

### External Services
- **Car Valuation API**: Third-party vehicle assessment service
- **RC Lookup Service**: Vehicle registration verification
- **Email Service**: SMTP integration for notifications
- **File Storage**: Local file system for document storage

## Deployment Architecture
- **Frontend**: Next.js static generation and server-side rendering
- **Backend**: Express.js server with PM2 process management
- **Database**: MongoDB with connection pooling
- **Reverse Proxy**: Nginx for load balancing and SSL termination
- **Environment**: Separate development, staging, and production configs