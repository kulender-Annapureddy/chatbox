import express from 'express'
import {getUsersForsidebar} from '../conrollers/user.controller.js'
import protectRoute from '../middleware/protectRoute.js';

const router = express.Router();

router.get("/", protectRoute, getUsersForsidebar)

export default router;