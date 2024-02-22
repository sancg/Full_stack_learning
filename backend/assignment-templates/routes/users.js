import { Router } from 'express';
import { getUsers, postRegisterUsers } from '../controllers/users.js';

const userRoute = Router();

userRoute.post('/register-user', postRegisterUsers);

userRoute.get('/users', getUsers);

export default userRoute;
