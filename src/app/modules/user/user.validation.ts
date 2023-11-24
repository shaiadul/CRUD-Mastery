import { z, ZodError } from 'zod';
import { IUser } from './user.interface';

// Validation schema for full name
const fullNameValidation = z.object({
  firstName: z.string().min(1, { message: 'First name is required' }),
  lastName: z.string().min(1, { message: 'Last name is required' }),
});

// Validation schema for address
const addressValidation = z.object({
  street: z.string().min(1, { message: 'Street is required' }),
  city: z.string().min(1, { message: 'City is required' }),
  country: z.string().min(1, { message: 'Country is required' }),
});

// Validation schema for order
const orderValidation = z.object({
  productName: z.string().min(1, { message: 'Product must be a string' }),
  price: z.number().min(0, { message: 'Price must be greater than 0' }),
  quantity: z.number().min(1, { message: 'Quantity must be greater than 0' }),
});

// Validation schema for user
export const userValidation = z.object({
  userId: z.number().min(1, { message: 'User ID must be greater than 0' }),
  username: z.string().min(1, { message: 'Username is required' }),
  password: z.string().min(1, { message: 'Password is required' }),
  fullName: fullNameValidation,
  age: z.number().min(1, { message: 'Age must be greater than 0' }),
  email: z.string().email({ message: 'Invalid email' }),
  isActive: z.boolean(),
  hobbies: z.array(z.string().min(1, { message: 'Hobby is required' })),
  address: addressValidation,
  orders: z.array(orderValidation).optional(),
});

// Validation function for validating user data
export function validateUser(data: unknown): IUser {
  try {
    return userValidation.parse(data) as IUser;
  } catch (error) {
    if (error instanceof ZodError) {
      // Handle validation errors, log them, or throw a custom error.
      throw new Error(`Validation failed: ${error.message}`);
    }
    throw error;
  }
}