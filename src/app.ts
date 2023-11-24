import express, { Application, NextFunction, Request, Response } from 'express';
import cors from 'cors';
import { UserRoutes } from './app/modules/user/user.router';
import swaggerOptions from './swaggerConfig';
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const app: Application = express();

// Parsers
app.use(express.json());
app.use(cors());

// Swagger setup
const specs = swaggerJsdoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

// Routes
app.use('/api/users', UserRoutes);

app.get('/', (req: Request, res: Response, next: NextFunction) => {
  try {
    res.send("BanglaBazar server saying 'Hello Developer'!");
  } catch (error) {
    next(error);
  }
});

app.all('*', (req: Request, res: Response) => {
  res.send({
    success: false,
    message: 'Invalid route',
  });
});

app.use((err: Error, req: Request, res: Response) => {
  console.error(err);
  res.status(500).send('Something went wrong!');
});

export default app;
