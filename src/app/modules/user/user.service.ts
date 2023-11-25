import { IUser, TOrder } from './user.interface'
import { User } from './user.model'

// Service function to create a new user
export async function createUser(userData: IUser): Promise<IUser> {
  // Create the user using the mongoose model if the user does not exist
  const newUser = await User.create(userData)
  return newUser
}

// Service function to get all users
export async function getAllUsers(): Promise<IUser[]> {
  // Get all users using the mongoose model
  const users = await User.find()
  return users
}

// Service function to get a user by id
export async function getUserById(userId: string): Promise<IUser | null> {
  // Convert the userId to number
  const userIdNumber = Number(userId)

  // Check if the user exists with static method
  const existingUser = await User.isUserExist(userIdNumber)

  if (!existingUser) {
    throw new Error('User does not exist!')
  } else {
    const user = await User.findOne({ userId: userId }).select('-orders')
    return user
  }
}

// Service function to update a user by id
export async function updateUser(
  userId: string,
  userData: IUser,
): Promise<IUser | null> {
  // Convert the userId to number
  const userIdNumber = Number(userId)

  // Check if the user exists with static method
  const existingUser = await User.isUserExist(userIdNumber)

  if (!existingUser) {
    throw new Error('User does not exist!')
  } else {
    const updatedUser = await User.findOneAndUpdate(
      { userId: userId },
      userData,
      { new: true },
    )
    return updatedUser
  }
}

// Service function to delete a user by id
export async function deleteUser(userId: string): Promise<IUser | null> {
  // Convert the userId to number
  const userIdNumber = Number(userId)

  // Check if the user exists with static method
  const existingUser = await User.isUserExist(userIdNumber)

  if (!existingUser) {
    throw new Error('User does not exist!')
  } else {
    const deletedUser = await User.findOneAndDelete({ userId: userId })
    return deletedUser
  }
}

// Service function to add an order to a user
export async function addOrder(
  userId: string,
  orderData: TOrder,
): Promise<IUser | null> {
  // Convert the userId to number
  const userIdNumber = Number(userId)

  // Check if the user exists with static method
  const existingUser = await User.isUserExist(userIdNumber)

  if (!existingUser) {
    throw new Error('User does not exist!')
  } else {
    const updatedUser = await User.findOneAndUpdate(
      { userId: userId },
      { $push: { orders: orderData } },
      { new: true },
    )
    return updatedUser
  }
}

// Service function to get orders of a user
export async function getOrders(userId: string): Promise<TOrder[] | null> {
  // Convert the userId to number
  const userIdNumber = Number(userId)

  // Check if the user exists with static method
  const existingUser = await User.isUserExist(userIdNumber)

  if (!existingUser) {
    throw new Error('User does not exist!')
  } else {
    const user = await User.findOne({ userId: userId })
    return user?.orders || null
  }
}

// Calculate the total price of the orders of a user
export async function calculateTotalPrice(userId: string): Promise<number> {
  // Convert the userId to number
  const userIdNumber = Number(userId)

  // Check if the user exists with static method
  const existingUser = await User.isUserExist(userIdNumber)

  if (!existingUser) {
    throw new Error('User does not exist!')
  } else {
    const user = await User.findOne({ userId: userId })
    const totalPrice = user?.orders?.reduce((acc, order) => {
      return acc + order.price * order.quantity
    }, 0)
    return totalPrice || 0
  }
}
