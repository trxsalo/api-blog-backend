import { Router } from "express";
import { PostAll, 
        PostCreate, 
        PostDelete, 
        PostUpdate,
        PostU } 
        from "../controllers/post.controllers";

import {verifyToken, isAdm, isUser} from '../middlewares/auth.Jwt'; //autenticacion
const route= Router();



route.post('/api/test/post/', [verifyToken, isUser], PostCreate); //C

route.get('/api/test/post/',[verifyToken,isUser],PostAll); // R //
route.get('/api/test/post/ :id', [verifyToken, isUser], PostU);

route.put('/api/test/post/:id',[verifyToken, isUser], PostUpdate ); // U

route.delete('/api/user/post/:id',[verifyToken,isAdm], PostDelete); //D


export default route;