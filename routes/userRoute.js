import express from 'express';
import { create, deleteData, getUserId, update, user } from '../controllers/UserControllers.js';

const route = express.Router();

route.get('/data', user); // Fetch all data or users (assuming 'user' is the controller for this)
route.post('/create', create); // Create a new user
route.put('/update/:id', update); // Update a user by ID
route.delete('/delete/:id', deleteData); // Delete a user by ID
route.get('/userId/:id', getUserId); // Fetch a user by ID (Corrected with the leading '/')

export default route;
