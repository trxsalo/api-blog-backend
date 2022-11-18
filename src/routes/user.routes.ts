import { Router } from "express";
import { user, userAll, userCreate, userDelete, userUpdate } from "../controllers/user.consstrollers";

const route= Router();

route.post('/users', userCreate); //C
route.get('/users',userAll); // R
route.get('/users/:id',user);
route.put('/users/:id', userUpdate); // U

route.delete('/users/:id', userDelete); //D


export default route;