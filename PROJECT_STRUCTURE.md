# Finonest Project Structure

## Frontend (Next.js 16)

```
app/
├── (auth)/                     # Authentication pages
│   ├── login/page.tsx         # Login page
│   ├── signup/page.tsx        # Signup page
│   └── layout.tsx             # Auth layout
├── admin/                     # Admin panel
│   ├── dashboard/             # Main admin dashboard
│   │   ├── seo-content/       # SEO management
│   │   └── page.tsx           # Dashboard overview
│   ├── applications/          # Application management
│   ├── users/                 # User management
│   ├── products/              # Product management
│   ├── analytics/             # Analytics & reports
│   ├── seo-content/           # SEO content management
│   ├── settings/              # System settings
│   ├── layout.tsx             # Admin layout with sidebar
│   └── page.tsx               # Admin redirect
├── api/                       # API routes
│   └── admin/                 # Admin API endpoints
│       ├── stats/             # Dashboard statistics
│       ├── applications/      # Application CRUD
│       ├── users/             # User management
│       ├── products/          # Product management
│       └── seo-content/       # SEO content CRUD
├── dashboard/                 # User dashboards
│   ├── customer/              # Customer dashboard
│   ├── employee/              # Employee dashboard
│   ├── manager/               # Manager dashboard
│   └── layout.tsx             # Dashboard layout
├── products/                  # Product pages
│   ├── personal-loans/        # Personal loans
│   ├── home-loans/            # Home loans
│   ├── business-loans/        # Business loans
│   ├── credit-cards/          # Credit cards
│   ├── vehicle-loans/         # Vehicle loans
│   ├── education-loans/       # Education loans
│   ├── car-valuation/         # Car valuation tool
│   └── used-car-loan/         # Used car loans
├── blog/                      # Blog system
├── about/                     # About page
├── contact/                   # Contact page
├── eligibility/               # Eligibility checker
├── layout.tsx                 # Root layout
├── page.tsx                   # Homepage
└── globals.css                # Global styles
```

## Components

```
components/
├── ui/                        # Shadcn UI components
│   ├── button.tsx
│   ├── card.tsx
│   ├── input.tsx
│   ├── table.tsx
│   └── ...
├── admin-sidebar.tsx          # Admin navigation sidebar
├── navigation.tsx             # Main site navigation
├── footer.tsx                 # Site footer
├── hero-banner.tsx            # Homepage hero
├── product-cards.tsx          # Product showcase
├── chat-support-widget.tsx    # Support chat
├── emi-calculator.tsx         # EMI calculator
└── theme-provider.tsx         # Theme management
```

## Backend (Express.js + MongoDB)

```
server/
├── src/
│   ├── config/
│   │   └── database.ts        # MongoDB connection
│   ├── models/
│   │   ├── User.ts            # User model
│   │   ├── Product.ts         # Product model
│   │   ├── Application.ts     # Application model
│   │   └── SEOContent.ts      # SEO content model
│   ├── routes/
│   │   ├── auth.ts            # Authentication routes
│   │   ├── admin.ts           # Admin routes
│   │   ├── users.ts           # User routes
│   │   ├── products.ts        # Product routes
│   │   └── seo.ts             # SEO routes
│   ├── middleware/
│   │   └── auth.ts            # JWT authentication
│   ├── controllers/
│   │   ├── seedData.ts        # Database seeding
│   │   └── seoController.ts   # SEO controller
│   ├── scripts/
│   │   └── createAdmin.ts     # Admin user creation
│   └── index.ts               # Server entry point
├── index.ts                   # Server startup
└── tsconfig.json              # TypeScript config
```

## Key Features

### Admin Panel
- **Dashboard**: Real-time statistics and overview
- **Applications**: Full CRUD for loan applications
- **Users**: User management with role-based access
- **Products**: Financial product management
- **Analytics**: Performance metrics and reports
- **SEO Content**: Website content management
- **Settings**: System configuration

### User Roles
- **Customer**: Apply for loans, view applications
- **Employee**: Review applications, manage customers
- **Manager**: Approve/reject applications, team management
- **Admin**: Full system access, user/product management

### Products
- Personal Loans
- Home Loans
- Business Loans
- Credit Cards
- Vehicle Loans
- Education Loans
- Car Valuation Tool

### Authentication
- JWT-based authentication
- Role-based access control
- Secure password hashing
- Session management

### Database Models
- **User**: Authentication and profile data
- **Application**: Loan application details
- **Product**: Financial product information
- **SEOContent**: Website SEO management

## Tech Stack

### Frontend
- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- Radix UI
- Lucide React Icons

### Backend
- Express.js
- MongoDB + Mongoose
- JWT Authentication
- bcryptjs
- Helmet (Security)
- CORS

### Development
- ESLint + Prettier
- TypeScript
- Hot reload
- Environment variables

## Environment Variables

```env
NODE_ENV=development
PORT=5000
CLIENT_URL=http://localhost:3000
MONGODB_URI=mongodb://localhost:27017/finonest
JWT_SECRET=your_jwt_secret_key
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_email_password
```

## Scripts

```json
{
  "dev": "Start development servers",
  "build": "Build for production",
  "start": "Start production server",
  "dev:client": "Frontend development",
  "dev:server": "Backend development"
}
```

## Admin Credentials

- **Email**: admin@finonest.com
- **Password**: admin123