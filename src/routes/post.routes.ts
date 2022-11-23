import { Router } from "express";
import { PostAll, 
        PostCreate, 
        PostDelete, 
        PostUpdate,
        PostU } 
        from "../controllers/post.controllers";

import {verifyToken, isAdm, isUser} from '../middlewares/auth.Jwt'; //autenticacion
const route= Router();



route.post('/api/test/post/', PostCreate); //C

route.get('/api/test/post/',[verifyToken, isAdm],PostAll); // R //
route.get('/api/test/post/ :id', PostU);

route.put('/api/test/post/:id', PostUpdate ); // U

route.delete('/api/user/post/:id', PostDelete); //D


export default route;