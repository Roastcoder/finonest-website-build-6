import mongoose, { Document, Schema } from 'mongoose';

export interface IApplication extends Document {
  userId: mongoose.Types.ObjectId;
  productId: string;
  personalInfo: {
    fullName: string;
    email: string;
    phone: string;
    dateOfBirth: Date;
    address: string;
    city: string;
    state: string;
    pincode: string;
  };
  financialInfo: {
    loanAmount: number;
    monthlyIncome: number;
    employmentType: string;
    companyName: string;
    workExperience: number;
  };
  documents: {
    panCard?: string;
    aadharCard?: string;
    salarySlips?: string[];
    bankStatements?: string[];
  };
  status: 'pending' | 'under_review' | 'approved' | 'rejected';
  reviewNotes?: string;
  reviewedBy?: mongoose.Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
}

const applicationSchema = new Schema<IApplication>({
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  productId: { type: String, required: true },
  personalInfo: {
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    dateOfBirth: { type: Date, required: true },
    address: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    pincode: { type: String, required: true }
  },
  financialInfo: {
    loanAmount: { type: Number, required: true },
    monthlyIncome: { type: Number, required: true },
    employmentType: { type: String, required: true },
    companyName: { type: String, required: true },
    workExperience: { type: Number, required: true }
  },
  documents: {
    panCard: String,
    aadharCard: String,
    salarySlips: [String],
    bankStatements: [String]
  },
  status: { 
    type: String, 
    enum: ['pending', 'under_review', 'approved', 'rejected'], 
    default: 'pending' 
  },
  reviewNotes: String,
  reviewedBy: { type: Schema.Types.ObjectId, ref: 'User' }
}, { timestamps: true });

export default mongoose.model<IApplication>('Application', applicationSchema);