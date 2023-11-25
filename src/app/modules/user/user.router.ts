/**
 * @swagger
 * tags:
 *   name: default
 *   description: User management and retrieval
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Users:
 *       type: object
 *       required:
 *         - userId
 *         - username
 *         - password
 *         - fullName
 *         - age
 *         - email
 *         - isActive
 *         - hobbies
 *         - address
 *
 *       properties:
 *         userId:
 *           type: number
 *           description: ID of the user
 *         username:
 *           type: string
 *           description: Username of the user
 *         password:
 *           type: string
 *           description: Password of the user
 *         fullName:
 *           type: object
 *           properties:
 *             firstName:
 *               type: string
 *               description: First name of the user
 *             lastName:
 *               type: string
 *               description: Last name of the user
 *         age:
 *           type: number
 *           description: Age of the user
 *         email:
 *           type: string
 *           description: Email of the user
 *         isActive:
 *           type: boolean
 *           description: Whether the user is active or not
 *         hobbies:
 *           type: array
 *           items:
 *             type: string
 *           description: List of user's hobbies
 *         address:
 *           type: object
 *           properties:
 *             street:
 *               type: string
 *               description: Street address
 *             city:
 *               type: string
 *               description: City
 *             country:
 *               type: string
 *               description: Country
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
/**
/**
 * @swagger
 * /{userId}:
 *   get:
 *     summary: Get a user by ID
 *     parameters:
 *       - name: userId
 *         in: path
 *         required: true
 *         description: ID of the user
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: User fetched successfully
 *         content:
 *           application/json:
 *             example:
 *               success: true
 *               message: User fetched successfully!
 *               data:
 *                 _id: 1234567890
 *                 firstName: John
 *                 lastName: Doe
 *                 email: john.doe@example.com
 *                 hobbies: ['Reading', 'Traveling']
 *       '400':
 *         description: Failed to fetch user
 *         content:
 *           application/json:
 *             example:
 *               success: false
 *               message: Failed to fetch user!
 *               error:
 *                 code: 400
 *                 description: Error message here
 */
/**
 * @swagger
 * /{userId}:
 *   put:
 *     summary: Update a user by ID
 *     parameters:
 *       - name: userId
 *         in: path
 *         required: true
 *         description: ID of the user
 *         schema:
 *           type: string
 *     requestBody:
 *       description: User data to update a user
 *       required: true
 *       content:
 *         application/json:
 *           example:
 *             username: john_doe_updated
 *             fullName:
 *               firstName: John
 *               lastName: Doe
 *             age: 31
 *             email: john.doe@example.com
 *             isActive: true
 *             hobbies: ['Reading', 'Traveling', 'Coding']
 *             address:
 *               street: 456 Oak St
 *               city: Newtown
 *               country: USA
 *     responses:
 *       '200':
 *         description: User updated successfully
 *         content:
 *           application/json:
 *             example:
 *               success: true
 *               message: User updated successfully!
 *               data:
 *                 _id: 1234567890
 *                 username: john_doe_updated
 *                 fullName: 
 *                   firstName: John
 *                   lastName: Doe
 *                 age: 31
 *                 email: john.doe@example.com
 *                 isActive: true
 *                 hobbies: ['Reading', 'Traveling', 'Coding']
 *                 address:
 *                   street: 456 Oak St
 *                   city: Newtown
 *                   country: USA
 *       '400':
 *         description: Failed to update user
 *         content:
 *           application/json:
 *             example:
 *               success: false
 *               message: Failed to update user!
 *               error:
 *                 code: 400
 *                 description: Error message here
 */
/**
 * @swagger
 * /users/{userId}:
 *   delete:
 *     summary: Delete a user by ID
 *     parameters:
 *       - name: userId
 *         in: path
 *         required: true
 *         description: ID of the user
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: User deleted successfully
 *         content:
 *           application/json:
 *             example:
 *               success: true
 *               message: User deleted successfully!
 *               data: null
 *       '400':
 *         description: Failed to delete user
 *         content:
 *           application/json:
 *             example:
 *               success: false
 *               message: Failed to delete user!
 *               error:
 *                 code: 400
 *                 description: Error message here
 */
/**
 * @swagger
 * /users/{userId}/orders:
 *   put:
 *     summary: Add an order to a user
 *     parameters:
 *       - name: userId
 *         in: path
 *         required: true
 *         description: ID of the user
 *         schema:
 *           type: string
 *     requestBody:
 *       description: Order data to add an order to a user
 *       required: true
 *       content:
 *         application/json:
 *           example:
 *             orderName: Example Order
 *             quantity: 2
 *             price: 19.99
 *     responses:
 *       '200':
 *         description: Order added successfully
 *         content:
 *           application/json:
 *             example:
 *               success: true
 *               message: Order added successfully!
 *               data: null
 *       '400':
 *         description: Failed to add order
 *         content:
 *           application/json:
 *             example:
 *               success: false
 *               message: Failed to add order!
 *               error:
 *                 code: 400
 *                 description: Error message here
 */

/**
 * @swagger
 * /users/{userId}/orders:
 *   get:
 *     summary: Get orders of a user
 *     parameters:
 *       - name: userId
 *         in: path
 *         required: true
 *         description: ID of the user
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Orders fetched successfully
 *         content:
 *           application/json:
 *             example:
 *               success: true
 *               message: Orders fetched successfully!
 *               data:
 *                 orders:
 *                   - orderName: Example Order 1
 *                     quantity: 2
 *                     price: 19.99
 *                   - orderName: Example Order 2
 *                     quantity: 1
 *                     price: 29.99
 *       '400':
 *         description: Failed to fetch orders
 *         content:
 *           application/json:
 *             example:
 *               success: false
 *               message: Failed to fetch orders!
 *               error:
 *                 code: 400
 *                 description: Error message here
 */

/**
 * @swagger
 * /users/{userId}/orders/total-price:
 *   get:
 *     summary: Calculate the total price of orders of a user
 *     parameters:
 *       - name: userId
 *         in: path
 *         required: true
 *         description: ID of the user
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Total price calculated successfully
 *         content:
 *           application/json:
 *             example:
 *               success: true
 *               message: Total price calculated successfully!
 *               data:
 *                 totalPrice: 49.98
 *       '400':
 *         description: Failed to calculate total price
 *         content:
 *           application/json:
 *             example:
 *               success: false
 *               message: Failed to calculate total price!
 *               error:
 *                 code: 400
 *                 description: Error message here
 */




import { Router } from 'express'
import {
  addOrders,
  calculatePrice,
  deleteSingleUser,
  getUsersController,
  getOrdersOfUsers,
  userByIdController,
  updateAUser,
  createUsers,
} from './user.controller'

const router = Router()



router.post('/', createUsers)
router.get('/', getUsersController)
router.get('/:userId', userByIdController)
router.put('/:userId', updateAUser)
router.delete('/:userId', deleteSingleUser)
router.put('/:userId/orders', addOrders)
router.get('/:userId/orders', getOrdersOfUsers)
router.get('/:userId/orders/total-price', calculatePrice)

export const UserRoutes = router
