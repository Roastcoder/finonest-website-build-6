# Finonest Backend

Express.js API server for Finonest financial services platform.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 🛠️ Tech Stack

- **Express.js** - Node.js web framework
- **TypeScript** - Type safety
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB ODM
- **JWT** - Authentication tokens
- **bcryptjs** - Password hashing

## 📁 Project Structure

```
backend/
├── src/
│   ├── config/               # Database and app configuration
│   ├── controllers/          # Route controllers
│   ├── models/               # MongoDB/Mongoose models
│   ├── routes/               # API route definitions
│   ├── middleware/           # Custom middleware
│   └── index.ts              # Main server file
└── package.json              # Dependencies
```

## 🌍 Environment Variables

Create `.env`:

```env
NODE_ENV=development
PORT=5000
CLIENT_URL=http://localhost:3000
MONGODB_URI=mongodb://localhost:27017/finonest
JWT_SECRET=your_jwt_secret_key_here
JWT_EXPIRE=7d
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_email_password
```

## 🔌 API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `GET /api/auth/me` - Get current user

### Products
- `GET /api/products` - Get all products
- `POST /api/products` - Create product (Admin)

### Applications
- `POST /api/users/applications` - Submit application
- `GET /api/users/applications` - Get user applications

## 🔗 Related Repositories

- **Frontend**: [finonest-frontend](https://github.com/yourusername/finonest-frontend)
- **Monorepo**: [finonest-website-build-6](https://github.com/yourusername/finonest-website-build-6)

## 📝 License

MIT License