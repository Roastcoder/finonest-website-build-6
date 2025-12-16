import express from 'express';
import { getSEOContent, createSEOContent, updateSEOContent, getAllSEOContent, deleteSEOContent } from '../controllers/seoController';
import { auth, adminAuth } from '../middleware/auth';

const router = express.Router();

// Public routes
router.get('/content/:slug', getSEOContent);

// Admin routes
router.get('/admin/content', auth, adminAuth, getAllSEOContent);
router.post('/admin/content', auth, adminAuth, createSEOContent);
router.put('/admin/content/:id', auth, adminAuth, updateSEOContent);
router.delete('/admin/content/:id', auth, adminAuth, deleteSEOContent);

export default router;