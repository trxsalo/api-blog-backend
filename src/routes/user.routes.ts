import { Router } from "express";
import { user, userAll, userCreate, userDelete, userUpdate } from "../controllers/user.consstrollers";
import { login } from "../controllers/login.constrollers";
import {checkDuplicateUsernameOrEmail} from '../middlewares/verifySigUp'
const route= Router();

route.post('/login', login ) //Loqueo 

route.post('/user/create', checkDuplicateUsernameOrEmail ,userCreate); //C

route.get('/user',userAll); // R //
route.get('/user/ :id',user);

route.put('/user/:id', checkDuplicateUsernameOrEmail ,userUpdate); // U

route.delete('/user/:id', userDelete); //D


export default route;