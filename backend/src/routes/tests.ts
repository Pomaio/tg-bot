import express from 'express';
import { hash } from '../utils';
import { TestDBModel } from '../models';

export const testsRouter = express.Router();

testsRouter.get('/', async (request, response) => {
  try {
    const tests = await TestDBModel.find({ ...request.query });
    response.json(tests);
  } catch (error) {
    response.json({ message: error });
  }
});

testsRouter.post('/', async (request, response) => {
  try {
    const data = request.body;
    const id = hash(data);
    const test = new TestDBModel({ ...data, id });
    const savedTest = await test.save();
    response.status(201).json(savedTest);
  } catch (error) {
    response.json({ message: error });
  }
});

testsRouter.get('/:id', async (request, response) => {
  try {
    const test = await TestDBModel.findOne({ id: request.params.id });
    response.json(test);
  } catch (error) {
    response.json({ message: error });
  }
});

testsRouter.patch('/:id', async (request, response) => {
  try {
    await TestDBModel.updateOne({ id: request.params.id }, { ...request.body });
  } catch (error) {
    response.json({ message: error });
  }
});

testsRouter.delete('/:id', async (request, response) => {
  try {
    await TestDBModel.remove({ id: request.params.id });
    response.status(200);
  } catch (error) {
    response.json({ message: error });
  }
});
