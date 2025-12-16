import express from 'express';
import Application from '../models/Application';
import { authenticate, authorize, AuthRequest } from '../middleware/auth';

const router = express.Router();

// Submit application
router.post('/applications', authenticate, async (req: AuthRequest, res) => {
  try {
    const application = new Application({
      userId: req.user!._id,
      ...req.body
    });

    await application.save();
    res.status(201).json(application);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Get user applications
router.get('/applications', authenticate, async (req: AuthRequest, res) => {
  try {
    const applications = await Application.find({ userId: req.user!._id })
      .populate('reviewedBy', 'name')
      .sort({ createdAt: -1 });
    res.json(applications);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Get application by ID
router.get('/applications/:id', authenticate, async (req: AuthRequest, res) => {
  try {
    const application = await Application.findOne({
      _id: req.params.id,
      userId: req.user!._id
    }).populate('reviewedBy', 'name');
    
    if (!application) {
      return res.status(404).json({ message: 'Application not found' });
    }
    
    res.json(application);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

export default router;