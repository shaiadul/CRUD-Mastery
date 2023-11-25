/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - name
 *         - email
 *         - password
 *       properties:
 *         name:
 *           type: string
 *           description: Name of the user
 *         email:
 *           type: string
 *           description: Email of the user
 *         password:
 *           type: string
 *           description: Password of the user
 *      
 */

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: User management and retrieval
 */

/**
 * @swagger
 * /:
 *   post:
 *     summary: Create a new user
 *     requestBody:
 *       description: User data to create a new user
 *       required: true
 *       content:
 *         application/json:
 *           example:
 *             userId: 123
 *             username: john_doe
 *             password: secret123
 *             fullName:
 *               firstName: John
 *               lastName: Doe
 *             age: 30
 *             email: john.doe@example.com
 *             isActive: true
 *             hobbies: ['Reading', 'Traveling']
 *             address:
 *               street: 123 Main St
 *               city: Anytown
 *               country: USA
 *            
 * 
 *     responses:
 *       '201':
 *         description: User created successfully
 *         content:
 *           application/json:
 *             example:
 *               success: true
 *               message: User created successfully!
 *               data:
 *                 _id: 1234567890
 *                 firstName: John
 *                 lastName: Doe
 *                 email: john.doe@example.com
 *                 hobbies: ['Reading', 'Traveling']
 *       '400':
 *         description: Failed to create user
 *         content:
 *           application/json:
 *             example:
 *               success: false
 *               message: Failed to create user!
 *               error:
 *                 code: 400
 *                 description: Error message here
 */


/**
 * @swagger
 * /:
 *   get:
 *     summary: Get all users
 *     responses:
 *       '200':
 *         description: Users fetched successfully
 *         content:
 *           application/json:
 *             example:
 *               success: true
 *               message: Users fetched successfully!
 *               data:
 *                 - _id: 1234567890
 *                   firstName: John
 *                   lastName: Doe
 *                   email: john.doe@example.com
 *                   hobbies: ['Reading', 'Traveling']
 *                 - _id: 0987654321
 *                   firstName: Jane
 *                   lastName: Doe
 *                   email: jane.doe@example.com
 *                   hobbies: ['Hiking', 'Painting']
 *       '400':
 *         description: Failed to fetch users
 *         content:
 *           application/json:
 *             example:
 *               success: false
 *               message: Failed to fetch users!
 *               error:
 *                 code: 400
 *                 description: Error message here
 */


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