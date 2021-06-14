import express from 'express';
import { hash } from '../utils';
import { UserDBModel } from '../models';

export const usersRouter = express.Router();

usersRouter.get('/', async (request, response) => {
  try {
    const users = await UserDBModel.find({ ...request.query });
    response.json(users);
  } catch (error) {
    response.json({ message: error });
  }
});

usersRouter.post('/', async (request, response) => {

  try {
    const userData = request.body;
    const id = hash(userData);
    const user = new UserDBModel({
      ...userData,
      id,
    });

    const savedUser = await user.save();

    response.status(201).json(savedUser);

  } catch (error) {
    response.json({ message: error });
  }
});

usersRouter.get('/:id', async (request, response) => {
  try {
    const user = await UserDBModel.findOne({ id: request.params.id });
    response.json(user);
  } catch (error) {
    response.json({ message: error });
  }
});


usersRouter.delete('/:id', async (request, response) => {
  try {
    await UserDBModel.remove({ id: request.params.id });
    response.status(200);
  } catch (error) {
    response.json({ message: error });
  }
});
