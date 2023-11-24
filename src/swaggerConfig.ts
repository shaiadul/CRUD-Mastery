import { Options as SwaggerOptions } from 'swagger-jsdoc';


const swaggerOptions: SwaggerOptions = {
  swaggerDefinition: {
    info: {
      title: 'Simple API Documentation',
      version: '1.0.0',
      description: 'This is a simple REST API application made with Express. It has CRUD operations for users.',
    },
  },
  apis: ['src/routes/*.ts'],
};

export default swaggerOptions;
