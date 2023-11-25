import { Options as SwaggerOptions } from 'swagger-jsdoc'

const swaggerOptions: SwaggerOptions = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'Bangla_Bazar API',
      version: '1.0.0',
      description: 'Bangla_Bazar API Information Documentation ',
      contact: {
        name: 'Shaiadul Bashar',
        email: 'mdshaiadul@gmail.com',
      },
    },
    servers: [
      {
        url: 'http://localhost:5000/api/users',
        description: 'Development server',
      },
      {
        url: 'https://banglabazar.vercel.app/api/users',
        description: 'Production server',
      },
    ],
    components: {
      securitySchemes: {
        apiKeyAuth: {
          type: 'apiKey',
          in: 'header', // You can also use 'query' or 'cookie'
          name: 'Authorization', // The name of the header, query parameter, or cookie to be used for the API key
        },
      },
    },
  },
  apis: ['src/app/modules/**/*.ts'],
}

export default swaggerOptions
