import mongoose, { Document, Schema } from 'mongoose';

export interface IProduct extends Document {
  id: string;
  title: string;
  tagline: string;
  description: string;
  category: string;
  rate: string;
  maxAmount: string;
  tenure: string;
  processingFee: string;
  color: string;
  features: string[];
  eligibility: string[];
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const productSchema = new Schema<IProduct>({
  id: { type: String, required: true, unique: true },
  title: { type: String, required: true },
  tagline: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true },
  rate: { type: String, required: true },
  maxAmount: { type: String, required: true },
  tenure: { type: String, required: true },
  processingFee: { type: String, required: true },
  color: { type: String, required: true },
  features: [{ type: String }],
  eligibility: [{ type: String }],
  isActive: { type: Boolean, default: true }
}, { timestamps: true });

export default mongoose.model<IProduct>('Product', productSchema);