import { Model } from 'mongoose';

// Type for User Full Name
export type TFullName = {
  firstName: string;
  lastName: string;
};

// Type for User Address
export type TAddress = {
  street: string;
  city: string;
  country: string;
};

// Type for User Order
export type TOrder = {
  productName: string;
  price: number;
  quantity: number;
};

// Type for User
export type IUser = {
  userId: number;
  username: string;
  password: string;
  fullName: TFullName;
  age: number;
  email: string;
  isActive: boolean;
  hobbies: string[];
  address: TAddress;
  orders?: TOrder[];
};

// Custom Static Methods for User
export interface UserModel extends Model<IUser> {
  isUserExist(userId: number): Promise<IUser | null>;
}