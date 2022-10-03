import express, { NextFunction, Request, Response } from 'express';
import { errorHandler } from './handlers/ErroHandler';
import authRouter from './routes/auth.routes';

const app = express();

app.use(express.json());

app.use('/auth', authRouter);

app.use(errorHandler.handle);

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(3001)
