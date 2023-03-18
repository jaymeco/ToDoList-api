import "reflect-metadata"
import express from 'express';
import * as dotenv from 'dotenv';
dotenv.config();

import authRouter from './routes/auth.routes';

import { errorHandler } from './handlers/ErroHandler';
import { AppDataSource } from './database/data-source';

const app = express();

AppDataSource.initialize().then(() => {
  app.use(express.json());

  app.use('/auth', authRouter);

  app.use(errorHandler.handle);

  app.get('/', (req, res) => res.send('Hello World!'));

  app.listen(process.env.PORT || 3001);
})
  .catch((error) => console.log('ERROR: ', error));
