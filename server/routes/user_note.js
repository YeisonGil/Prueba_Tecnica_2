import { Router } from "express";
import {createUser, getUser} from '../controllers/user__controller.js';

const router = Router();

router.get('/user',getUser);
router.post('/user',createUser);

export default router; 



