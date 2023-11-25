import express, { Application, NextFunction, Request, Response } from 'express'
import cors from 'cors'
import { UserRoutes } from './app/modules/user/user.router'
import swaggerOptions from './swaggerConfig'
import swaggerJsdoc from 'swagger-jsdoc'
import swaggerUi from 'swagger-ui-express'

const app: Application = express()

// Parsers
app.use(express.json())
app.use(cors())

// Swagger setup
const specs = swaggerJsdoc(swaggerOptions)
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs))

// Routes
app.use('/api/users', UserRoutes)

app.get('/', (req: Request, res: Response, next: NextFunction) => {
  try {
    const htmlResponse = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>BanglaBazar Server</title>
        <style>
          body {
            font-family: 'Arial', sans-serif;
            text-align: center;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100vh;
          }

          .container {
            background-color: #fff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
          }

          h1 {
            color: #333;
          }

          p {
            color: #555;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>BanglaBazar Server</h1>
          <p>Saying 'Hello Frontend Developer'!</p>
        </div>
      </body>
      </html>
    `

    res.send(htmlResponse)
  } catch (error) {
    next(error)
  }
})

app.all('*', (req: Request, res: Response) => {
  res.send({
    success: false,
    message: 'Invalid route',
  })
})

app.use((err: Error, req: Request, res: Response) => {
  console.error(err)
  res.status(500).send('Something went wrong!')
})

export default app
