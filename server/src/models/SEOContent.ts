import mongoose, { Document, Schema } from 'mongoose';

export interface ISEOContent extends Document {
  pageSlug: string;
  title: string;
  metaDescription: string;
  metaKeywords: string[];
  h1: string;
  h2Tags: string[];
  content: {
    heroSection: {
      title: string;
      subtitle: string;
      description: string;
      ctaText: string;
    };
    features: Array<{
      title: string;
      description: string;
      icon: string;
    }>;
    benefits: Array<{
      title: string;
      description: string;
    }>;
    eligibility: Array<{
      criteria: string;
      description: string;
    }>;
    faq: Array<{
      question: string;
      answer: string;
    }>;
    testimonials: Array<{
      name: string;
      review: string;
      rating: number;
    }>;
  };
  schema: {
    type: string;
    data: any;
  };
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const seoContentSchema = new Schema<ISEOContent>({
  pageSlug: { type: String, required: true, unique: true },
  title: { type: String, required: true },
  metaDescription: { type: String, required: true },
  metaKeywords: [{ type: String }],
  h1: { type: String, required: true },
  h2Tags: [{ type: String }],
  content: {
    heroSection: {
      title: { type: String, required: true },
      subtitle: { type: String, required: true },
      description: { type: String, required: true },
      ctaText: { type: String, required: true }
    },
    features: [{
      title: { type: String, required: true },
      description: { type: String, required: true },
      icon: { type: String, required: true }
    }],
    benefits: [{
      title: { type: String, required: true },
      description: { type: String, required: true }
    }],
    eligibility: [{
      criteria: { type: String, required: true },
      description: { type: String, required: true }
    }],
    faq: [{
      question: { type: String, required: true },
      answer: { type: String, required: true }
    }],
    testimonials: [{
      name: { type: String, required: true },
      review: { type: String, required: true },
      rating: { type: Number, required: true, min: 1, max: 5 }
    }]
  },
  schema: {
    type: { type: String, required: true },
    data: { type: Schema.Types.Mixed, required: true }
  },
  isActive: { type: Boolean, default: true }
}, { timestamps: true });

export default mongoose.model<ISEOContent>('SEOContent', seoContentSchema);