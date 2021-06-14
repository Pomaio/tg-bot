import { json } from 'body-parser';
import express from 'express';
import mongoose from 'mongoose';

import { config } from 'dotenv';
config();

import { usersRouter, recruitersRouter, testsRouter } from './routes';

const app = express();
app.use(json());


app.use('/users', usersRouter);
app.use('/recruiters', recruitersRouter);
app.use('/tests', testsRouter);

app.get('/', (request, response) => {
  response.end('Server works');
});

app.listen(3000);

mongoose.connect(process.env.DB_URI as string, {
  useNewUrlParser: true, useFindAndModify: false
});
