import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';
import morgan from 'morgan';
import rateLimit from 'express-rate-limit';
import dotenv from 'dotenv';
import { connectDB } from './config/database';
import authRoutes from './routes/auth';
import productRoutes from './routes/products';
import adminRoutes from './routes/admin';
import userRoutes from './routes/users';
import seoRoutes from './routes/seo';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

// Security middleware
app.use(helmet());
app.use(compression());

// CORS configuration
const corsOptions = {
  origin: function (origin: string | undefined, callback: (err: Error | null, allow?: boolean) => void) {
    const allowedOrigins = [
      process.env.CLIENT_URL || 'http://localhost:3000',
      'https://finonest.org',
      'https://www.finonest.org',
      'http://localhost:3000', // Development
    ];
    
    // Allow requests with no origin (mobile apps, etc.)
    if (!origin) return callback(null, true);
    
    if (allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'],
};

app.use(cors(corsOptions));

// Rate limiting
const limiter = rateLimit({
  windowMs: parseInt(process.env.RATE_LIMIT_WINDOW_MS || '900000'), // 15 minutes default
  max: parseInt(process.env.RATE_LIMIT_MAX || '100'), // limit each IP to 100 requests per windowMs
  message: {
    error: 'Too many requests from this IP, please try again later.',
  },
  standardHeaders: true,
  legacyHeaders: false,
});
app.use(limiter);

// Body parsing middleware
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

// Logging
app.use(morgan('combined'));

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'OK', timestamp: new Date().toISOString() });
});

// API Routes
app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/users', userRoutes);
app.use('/api/seo', seoRoutes);

// Car valuation endpoint
app.post('/api/car-valuation', (req, res) => {
  const { make, model, year, mileage, condition } = req.body;
  
  // Simple valuation logic (replace with actual algorithm)
  const basePrice = 500000; // Base price in INR
  const depreciationRate = 0.15;
  const currentYear = new Date().getFullYear();
  const age = currentYear - year;
  
  let estimatedValue = basePrice * Math.pow(1 - depreciationRate, age);
  
  // Adjust for mileage
  if (mileage > 50000) {
    estimatedValue *= 0.9;
  }
  
  // Adjust for condition
  const conditionMultiplier = {
    excellent: 1.1,
    good: 1.0,
    fair: 0.85,
    poor: 0.7
  };
  
  estimatedValue *= conditionMultiplier[condition as keyof typeof conditionMultiplier] || 1.0;
  
  res.json({
    estimatedValue: Math.round(estimatedValue),
    currency: 'INR',
    factors: {
      age,
      mileage,
      condition,
      make,
      model
    }
  });
});

// RC lookup endpoint
app.post('/api/rc-lookup', (req, res) => {
  const { rcNumber } = req.body;
  
  // Mock RC lookup (replace with actual service)
  res.json({
    success: true,
    data: {
      vehicleNumber: rcNumber,
      make: 'Maruti Suzuki',
      model: 'Swift',
      year: 2020,
      fuelType: 'Petrol',
      ownerName: 'John Doe',
      registrationDate: '2020-03-15'
    }
  });
});

// Error handling middleware
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📊 Environment: ${process.env.NODE_ENV || 'development'}`);
});

export default app;