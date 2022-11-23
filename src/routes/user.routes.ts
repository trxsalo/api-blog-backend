import { Router } from "express";
import { user, userAll, userCreate, userDelete, userUpdate } from "../controllers/user.consstrollers"; //controladores del usuario
import { login } from "../controllers/login.constrollers"; // controllador del login
import {checkDuplicateUsernameOrEmail} from '../middlewares/verifySigUp' //verifica los datos req.body{user,email}
import {verifyToken, isAdm, isUser} from '../middlewares/auth.Jwt'; //autenticacion

const route= Router();

route.post('/api/login', login ) //Login

route.post('/api/user/create', [checkDuplicateUsernameOrEmail] ,userCreate); //C

route.get('/api/user',[verifyToken], userAll); // R //

route.get('/api/user/:id',[verifyToken, isUser] ,user);

route.put('/api/user/:id', [verifyToken,checkDuplicateUsernameOrEmail,isUser] , userUpdate); // Actualizar Usuario

route.delete('/api/user/:id', [verifyToken, isAdm], userDelete); //D


export default route;