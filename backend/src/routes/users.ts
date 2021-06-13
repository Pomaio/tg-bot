import express from 'express';
import { hash } from '../utils';
import { User } from '../models';

export const usersRouter = express.Router();

usersRouter.get('/', async (request, response) => {
  try {
    const users = await User.find({ ...request.query });
    response.json(users);
  } catch (error) {
    response.json({ message: error });
  }
});

usersRouter.post('/', async (request, response) => {

  try {
    const userData = request.body;
    const id = hash(userData);
    const user = new User({
      ...userData,
      id,
      "_id": id
    });

    const savedUser = await user.save();

    response.status(201).json(savedUser);

  } catch (error) {
    response.json({ message: error });
  }
});

usersRouter.get('/:id', async (request, response) => {
  try {
    const user = await User.findOne({ id: request.params.id });
    response.json(user);
  } catch (error) {
    response.json({ message: error });
  }
});


usersRouter.delete('/:id', async (request, response) => {
  try {
    await User.remove({ id: request.params.id });
    response.status(200);
  } catch (error) {
    response.json({ message: error });
  }
});
