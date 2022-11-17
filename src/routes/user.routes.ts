import { Router } from "express";
import { userAll } from "../controllers/user.consstrollers";

const route= Router();

route.get('/users' ,userAll);
export default route;