import { Router } from "express";
import { user, userAll, userCreate, userDelete, userUpdate } from "../controllers/user.consstrollers"; //controladores del usuario
import { login } from "../controllers/login.constrollers"; // controllador del login
import {checkDuplicateUsernameOrEmail} from '../middlewares/verifySigUp' //verifica los datos req.body{user,email}
import {verifyToken, isAdm, isUser} from '../middlewares/auth.Jwt'; //autenticacion

const route= Router();

route.post('/api/login', login ) //Login

route.post('/api/user/create', [checkDuplicateUsernameOrEmail] ,userCreate); //C

route.get('/api/user',isUser, userAll); // R //

route.get('/api/user/ :id',verifyToken ,user);

route.put('/api/user/:id',  [verifyToken,checkDuplicateUsernameOrEmail] , userUpdate); // Actualizar Usuario

route.delete('/api/user/:id', verifyToken, userDelete); //D


export default route;