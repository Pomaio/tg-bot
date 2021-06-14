import express from 'express';
import { hash } from '../utils';
import { RecruiterDBModel } from '../models';

export const recruitersRouter = express.Router();

// now avaliable only create metod
recruitersRouter.post('/', async (request, response) => {
  try {
    const data = request.body;
    const id = hash(data);
    const recruiter = new RecruiterDBModel({ ...data, id });
    const savedRecruiter = await recruiter.save();
    response.status(201).json(savedRecruiter);
  } catch (error) {
    response.json({ message: error });
  }
});

