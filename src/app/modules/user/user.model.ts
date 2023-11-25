import { Schema, model } from 'mongoose';
import {
  TFullName,
  TAddress,
  TOrder,
  IUser,
  UserModel,
} from './user.interface';
import bcrypt from 'bcrypt';
import config from '../../config';

// MongoDB schema for the full name
const fullNameSchema: Schema<TFullName> = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
});

// MongoDB schema for the address
const addressSchema: Schema<TAddress> = new Schema({
  street: { type: String, required: true },
  city: { type: String, required: true },
  country: { type: String, required: true },
});

// Mongoose schema for the order
const orderSchema: Schema<TOrder> = new Schema({
  productName: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
});

// Mongoose schema for the user
const userSchema: Schema<IUser, UserModel> = new Schema({
  userId: {
    type: Number,
    required: true,
    unique: true,
  },

  username: {
    type: String,
    required: true,
    unique: true,
  },

  password: {
    type: String,
    required: true,
    select: false,
  },

  fullName: {
    type: fullNameSchema,
    required: true,
  },

  age: {
    type: Number,
    required: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
  },

  isActive: {
    type: Boolean,
    required: true,
    default: true,
  },

  hobbies: {
    type: [String],
    required: true,
  },

  address: {
    type: addressSchema,
    required: true,
  },

  orders: {
    type: [orderSchema],
  },
});

// pre hook for the user schema
userSchema.pre<IUser>('save', async function (next) {
  //   Making password hash
  const user = this;
  user.password = await bcrypt.hash(
    user.password,
    Number(config.bcrypt_salt_rounds),
  );
  next();
});

// Post hook for the user schema
userSchema.post('save', async function (doc, next) {
  const user = await User.findOne(doc._id).select('-password -orders');
  if (user) {
    Object.assign(doc, user);
  }
  next();
});

userSchema.post('find', async function (docs: IUser[], next) {
  //   Making orders field empty
  docs.forEach((doc) => {
    doc.orders = undefined;
  });

  next();
});

userSchema.post('findOneAndUpdate', async function (doc: IUser, next) {
  //   Making orders field undefined
  doc.orders = undefined;

  next();
});

// Custom static method for the user schema
userSchema.statics.isUserExist = async function (
  userId: number,
): Promise<IUser | null> {
  const user = await this.findOne({ userId: userId });
  return user;
};

// export the mongoose model
export const User = model<IUser, UserModel>('User', userSchema);