import { Router } from 'express';
import {
  addOrders,
  calculatePrice,
  deleteSingleUser,
  getUsersController,
  getOrdersOfUsers,
  userByIdController,
  updateAUser,
  createUsers,
} from './user.controller';

const router = Router();

// POST endpoint for creating a new user
router.post('/', createUsers);

// GET endpoint for getting all users
router.get('/', getUsersController);

// GET endpoint for getting a user by id
router.get('/:userId', userByIdController);

// Update endpoint for updating a user by id
router.put('/:userId', updateAUser);

// Delete endpoint for deleting a user by id
router.delete('/:userId', deleteSingleUser);

// Add order endpoint for adding an order to a user
router.put('/:userId/orders', addOrders);

// Get orders endpoint for getting orders of a user
router.get('/:userId/orders', getOrdersOfUsers);

// Calculate total price endpoint for calculating total price of orders of a user
router.get('/:userId/orders/total-price', calculatePrice);

export const UserRoutes = router;