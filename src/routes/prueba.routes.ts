import { Router } from "express";
import { getInicio} from "../controllers/prueba.controllers";

const route= Router();

route.get('/', getInicio);


export default route;