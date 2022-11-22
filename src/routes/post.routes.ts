import { Request, Response } from "express";
import { Router } from "express";
import { PostAll } from "../controllers/post.controllers";

import {verifyToken, isAdm, isUser} from '../middlewares/auth.Jwt'; //autenticacion
const route= Router();



route.post('/api/test/post/', ); //C

route.get('/api/test/post/',); // R //
route.get('/api/test/post/ :id', );

route.put('/api/test/post/:id', ); // U

route.delete('/api/user/post/:id', ); //D


export default route;