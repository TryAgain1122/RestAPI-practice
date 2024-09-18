import express from 'express'
import { create, user } from '../controllers/UserControllers.js';

const route = express.Router();

route.get('/data', user)

route.post('/create', create)

export default route;