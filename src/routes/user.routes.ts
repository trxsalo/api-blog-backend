import { Router } from "express";
import { user, userAll, userCreate, userDelete, userUpdate } from "../controllers/user.consstrollers";
import { login } from "../controllers/login.constrollers";
const route= Router();

route.post('/login', login ) //Loqueo 

route.post('/user/create', userCreate); //C

route.get('/user',userAll); // R //
route.get('/user/ :id',user);

route.put('/user/:id', userUpdate); // U

route.delete('/users/:id', userDelete); //D


export default route;