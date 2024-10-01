import express, { Request, Response } from 'express';
import { AdminConfig } from '../models/admins.models';
const router = express.Router();

// GET admin config
router.get('/config', async (req: Request, res: Response) => {
  try {
    const config = await AdminConfig.findOne();
    res.send(config);
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ error: error.message });
    } else {
      res.status(400).json({ error: 'Failed to update config' });
    }
  }
});

// POST admin config
router.post('/config', async (req: Request, res: Response) => {
  try {
    const newConfig = await AdminConfig.findOneAndUpdate({}, req.body, {
      upsert: true,
    });
    res.send(newConfig);
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ error: error.message });
    } else {
      res.status(400).json({ error: 'Failed to fetch config' });
    }
  }
});

export default router;
