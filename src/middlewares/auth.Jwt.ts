import jwt, { VerifyErrors } from "jsonwebtoken";
import {secrect} from '../config/auth.config'
import { Request,Response,NextFunction, Errback} from "express";
import { Usuario } from "../models/user.model";

const verifyToken = (req:Request,res:Response,next:NextFunction)=>{
    const token:any = req.headers["x-access-token"];

    if(!token){
        return res.status(403).send({
            message:'Token no Proveido'
        });
    };
    const very = jwt.verify(token,secrect.secrect)


}