import express, { Request, Response, Error } from 'express';
import { User } from '../models/users.models';
const router = express.Router();

// POST new user
router.post('/', async (req: Request, res: Response) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();
    res.status(201).send(newUser);
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ error: error.message });
    } else {
      res.status(400).json({ error: 'Failed to create user' });
    }
  }
});

// GET all users
router.get('/', async (req: Request, res: Response) => {
  try {
    const users = await User.find();
    res.send(users);
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ error: error.message });
    } else {
      res.status(400).json({ error: 'Failed to fetch users' });
    }
  }
});

export default router;
