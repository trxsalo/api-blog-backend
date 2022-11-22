import { Router } from "express";


const route= Router();



route.post('/api/test/post/', ); //C

route.get('/api/test/post/',); // R //
route.get('/api/test/post/ :id', );

route.put('/api/test/post/:id', ); // U

route.delete('/api/user/post/:id', ); //D


export default route;