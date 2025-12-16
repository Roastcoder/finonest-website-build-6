# Finonest - Next.js Frontend Application

A modern financial services platform frontend built with Next.js 16, TypeScript, and Tailwind CSS.

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
└── package.json                  # Root package.json
```

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- MongoDB installed and running
- Git installed

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Roastcoder/finonest-website-build-6.git
   cd finonest-website-build-6
   ```

2. **Install dependencies**
   ```bash
   cd frontend
   npm install
   ```

3. **Environment Setup**
   
   Create `.env.local` in the frontend directory:
   ```env
   NEXT_PUBLIC_API_URL=http://localhost:5000
   NEXT_PUBLIC_APP_URL=http://localhost:3000
   NEXT_PUBLIC_APP_NAME=Finonest
   ```

4. **Start Development Server**
   ```bash
   npm run dev
   ```
   
   The application will be available at `http://localhost:3000`

## 📦 Available Scripts

### Frontend Commands (run from /frontend)
- `npm run dev` - Start Next.js development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🔗 Backend API

This frontend connects to the Finonest backend API. 

**Backend Repository**: [finonest-backend](https://github.com/Roastcoder/finonest-backend)

Make sure to run the backend server for full functionality.

## 🛠️ Tech Stack

### Frontend
- **Next.js 16** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Radix UI** - Headless component library
- **Lucide React** - Icon library



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



### Environment Variables for Production
Update the environment variables for production:

**Frontend:**
```env
NEXT_PUBLIC_API_URL=https://api.yourdomain.com
NEXT_PUBLIC_APP_URL=https://yourdomain.com
```



## 🧪 Development

### Adding New Features
1. All frontend changes go in the `/frontend` directory
2. API calls should use the configured `NEXT_PUBLIC_API_URL`
3. Backend changes should be made in the separate backend repository

### Backend Integration
This frontend is designed to work with the Finonest Express.js backend API which handles:
- User authentication and profiles
- Financial products management
- Loan applications processing
- SEO content management

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