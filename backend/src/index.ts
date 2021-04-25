import { json } from 'body-parser';
import express from 'express';
import mongoose from 'mongoose';

import { config } from 'dotenv';
config();

import { usersRouter } from './routes';

const app = express();
app.use(json());


app.use('/users', usersRouter);

app.get('/', (request, response) => {
    response.end('Server works');
});

app.listen(3000);

mongoose.connect(process.env.DB_URI as string, {
    useNewUrlParser: true, useFindAndModify: false
});
