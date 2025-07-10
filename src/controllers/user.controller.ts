import { Request, Response } from 'express';
import db from '../models';

export const getAllUsers = async (req: Request, res: Response) => {
  const users = await db.User.findAll();
  res.json(users);
};
