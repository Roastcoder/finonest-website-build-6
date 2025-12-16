# Finonest - Complete MERN Financial Services Platform

A comprehensive financial services platform with separate frontend (Next.js) and backend (Express.js) applications.

## 🏗️ Project Structure

```
finonest-website-build-6/
├── frontend/                     # Next.js Frontend Application
│   ├── app/                      # Next.js 13+ App Router
│   ├── components/               # Reusable React components
│   ├── hooks/                    # Custom React hooks
│   ├── lib/                      # Utility functions and configurations
│   ├── public/                   # Static assets
│   ├── package.json              # Frontend dependencies
│   └── .env.local                # Frontend environment variables
├── backend/                      # Express.js Backend API
│   ├── src/                      # TypeScript source code
│   │   ├── config/               # Database and app configuration
│   │   ├── controllers/          # Route controllers
│   │   ├── models/               # MongoDB/Mongoose models
│   │   ├── routes/               # API route definitions
│   │   ├── middleware/           # Custom middleware
│   │   └── index.ts              # Main server file
│   ├── package.json              # Backend dependencies
│   └── .env                      # Backend environment variables
└── package.json                  # Root package.json for monorepo
```

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- MongoDB installed and running
- Git installed

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd finonest-website-build-6
   ```

2. **Install all dependencies**
   ```bash
   npm run install:all
   ```

3. **Environment Setup**
   
   **Frontend (.env.local):**
   ```env
   NEXT_PUBLIC_API_URL=http://localhost:5000
   NEXT_PUBLIC_APP_URL=http://localhost:3000
   NEXT_PUBLIC_APP_NAME=Finonest
   ```
   
   **Backend (.env):**
   ```env
   NODE_ENV=development
   PORT=5000
   CLIENT_URL=http://localhost:3000
   MONGODB_URI=mongodb://localhost:27017/finonest
   JWT_SECRET=your_jwt_secret_key_here_make_it_very_long_and_secure
   JWT_EXPIRE=7d
   EMAIL_HOST=smtp.gmail.com
   EMAIL_PORT=587
   EMAIL_USER=your_email@gmail.com
   EMAIL_PASS=your_email_password
   ```

4. **Start MongoDB**
   ```bash
   # On macOS with Homebrew
   brew services start mongodb-community
   
   # On Ubuntu/Debian
   sudo systemctl start mongod
   
   # On Windows
   net start MongoDB
   ```

5. **Start Development Servers**
   ```bash
   # Start both frontend and backend concurrently
   npm run dev
   
   # Or start individually
   npm run dev:frontend  # Frontend only (http://localhost:3000)
   npm run dev:backend   # Backend only (http://localhost:5000)
   ```

## 📦 Available Scripts

### Root Level Commands
- `npm run dev` - Start both frontend and backend in development mode
- `npm run build` - Build both applications for production
- `npm run start` - Start both applications in production mode
- `npm run install:all` - Install dependencies for all packages
- `npm run clean` - Clean all node_modules and build directories

### Frontend Commands (run from /frontend)
- `npm run dev` - Start Next.js development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Backend Commands (run from /backend)
- `npm run dev` - Start Express server with nodemon
- `npm run build` - Compile TypeScript to JavaScript
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🔌 API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout
- `GET /api/auth/me` - Get current user

### Products
- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get product by ID
- `POST /api/products` - Create product (Admin only)
- `PUT /api/products/:id` - Update product (Admin only)
- `DELETE /api/products/:id` - Delete product (Admin only)

### Applications
- `POST /api/users/applications` - Submit application
- `GET /api/users/applications` - Get user applications
- `GET /api/admin/applications` - Get all applications (Admin/Manager/Employee)
- `PUT /api/admin/applications/:id/status` - Update application status

### Car Valuation
- `POST /api/car-valuation` - Get car valuation
- `POST /api/rc-lookup` - RC number lookup

### Admin
- `GET /api/admin/stats` - Dashboard statistics
- `GET /api/admin/users` - Get all users
- `PUT /api/admin/users/:id/role` - Update user role

## 🛠️ Tech Stack

### Frontend
- **Next.js 16** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Radix UI** - Headless component library
- **Lucide React** - Icon library

### Backend
- **Express.js** - Node.js web framework
- **TypeScript** - Type safety
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB ODM
- **JWT** - Authentication tokens
- **bcryptjs** - Password hashing
- **Helmet** - Security headers
- **CORS** - Cross-origin resource sharing

## 🔐 Security Features

- JWT-based authentication
- Password hashing with bcryptjs
- Rate limiting
- CORS configuration
- Security headers with Helmet
- Input validation
- Role-based access control

## 🌟 Key Features

### Frontend Features
- 🏠 Modern responsive design
- 🎯 Individual product pages
- 🚗 Car Valuation tool
- 📱 Mobile-first design
- ⚡ Optimized performance
- 🎨 Smooth animations

### Backend Features
- 🔐 Secure authentication
- 👥 Role-based access control
- 📊 RESTful API design
- 🛡️ Security middleware
- 📝 Application management
- 🏪 Product management

### Products Available
1. **Car Valuation** - AI-powered car value assessment
2. **Personal Loans** - Quick personal financing
3. **Home Loans** - Dream home financing
4. **Business Loans** - Business growth capital
5. **Credit Cards** - Premium rewards and benefits
6. **Vehicle Loans** - Car and bike financing
7. **Education Loans** - Study financing

## 🚀 Production Deployment

### Frontend Deployment
```bash
cd frontend
npm run build
npm start
```

### Backend Deployment
```bash
cd backend
npm run build
npm start
```

### Environment Variables for Production
Update the environment variables for production:

**Frontend:**
```env
NEXT_PUBLIC_API_URL=https://api.yourdomain.com
NEXT_PUBLIC_APP_URL=https://yourdomain.com
```

**Backend:**
```env
NODE_ENV=production
PORT=5000
CLIENT_URL=https://yourdomain.com
MONGODB_URI=mongodb://your-production-db-url
JWT_SECRET=your-very-secure-jwt-secret
```

## 🧪 Development

### Adding New Features
1. Frontend changes go in `/frontend`
2. Backend changes go in `/backend`
3. Shared types can be created in both directories
4. API calls from frontend should use the configured API_BASE_URL

### Database Models
All MongoDB models are located in `/backend/src/models/`:
- User.ts - User authentication and profiles
- Product.ts - Financial products
- Application.ts - Loan applications
- SEOContent.ts - SEO content management

## 📝 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📞 Support

For support and questions, please contact the development team or create an issue in the repository.