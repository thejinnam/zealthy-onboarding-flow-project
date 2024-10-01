import express, { Request, Response } from 'express';
import userRouter from './routes/user.route';
import adminRouter from './routes/admin.route';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
const PORT = 3000;
const app = express();

mongoose.connect('mongodb://localhost:27017/onboarding_app');

//parse body request
app.use(express.json());
//app.use(express.urlencoded({ extended: true }));

app.use('/users', userRouter);
app.use('/admin', adminRouter);

//catch-all route handler for requests to unknown route
app.use('*', (req: Request, res: Response) =>
  res.status(404).send('Error: Page not found')
);

/**
 * configure express global error handler
 * @see https://expressjs.com/en/guide/error-handling.html#writing-error-handlers
 */
app.use((err, req, res) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign(defaultErr, err);
  console.log(errorObj.log);
  res.status(errorObj.status).json(errorObj.message);
});

/**
 * start server
 */
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

export default app;
