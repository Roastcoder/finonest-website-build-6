import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import User from '../models/User';
import dotenv from 'dotenv';

dotenv.config();

const createAdmin = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/finonest');
    
    const adminExists = await User.findOne({ email: 'admin@finonest.com' });
    
    if (adminExists) {
      console.log('Admin user already exists');
      return;
    }

    const hashedPassword = await bcrypt.hash('admin123', 12);
    
    const admin = new User({
      name: 'Admin User',
      email: 'admin@finonest.com',
      password: hashedPassword,
      role: 'admin',
      isVerified: true
    });

    await admin.save();
    console.log('Admin user created successfully');
    console.log('Email: admin@finonest.com');
    console.log('Password: admin123');
    
  } catch (error) {
    console.error('Error creating admin:', error);
  } finally {
    await mongoose.disconnect();
  }
};

createAdmin();