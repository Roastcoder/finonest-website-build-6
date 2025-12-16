import { Request, Response } from 'express';
import SEOContent from '../models/SEOContent';

export const getSEOContent = async (req: Request, res: Response) => {
  try {
    const { slug } = req.params;
    const content = await SEOContent.findOne({ pageSlug: slug, isActive: true });
    
    if (!content) {
      return res.status(404).json({ message: 'Content not found' });
    }
    
    res.json(content);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

export const createSEOContent = async (req: Request, res: Response) => {
  try {
    const content = new SEOContent(req.body);
    await content.save();
    res.status(201).json(content);
  } catch (error) {
    res.status(400).json({ message: 'Error creating content', error });
  }
};

export const updateSEOContent = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const content = await SEOContent.findByIdAndUpdate(id, req.body, { new: true });
    
    if (!content) {
      return res.status(404).json({ message: 'Content not found' });
    }
    
    res.json(content);
  } catch (error) {
    res.status(400).json({ message: 'Error updating content', error });
  }
};

export const getAllSEOContent = async (req: Request, res: Response) => {
  try {
    const content = await SEOContent.find().sort({ createdAt: -1 });
    res.json(content);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

export const deleteSEOContent = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await SEOContent.findByIdAndDelete(id);
    res.json({ message: 'Content deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};