import jwt from "jsonwebtoken";
import { secrect } from '../config/auth.config'
import { Request, Response, NextFunction } from "express";
import { Usuario } from "../models/user.model";

interface UserPayload{
    id:number,
    rol:number
}
declare global{
    namespace Express{
        interface Request{
            currentUser?: UserPayload;
        }
    }
}


const verifyToken = (req: Request, res: Response, next: NextFunction):any => {

    const token: any = req.headers["x-access-token"];

    if (!token) {
        return res.status(403).send({
            message: 'Token no Proveido'
        });
    };

    const decode = jwt.verify(token, secrect.secrect) as UserPayload; //decodifica el token 
    const id = decode.id;
    next();
    return id;
};



const isAdm = async (req: Request, res: Response, next: NextFunction) => {

    const id = verifyToken(req,res,next)

    const user = await Usuario.findOne(id);
    
    const role: any = user.get('roles_id')

    if (role == 1) { //adm
        next();
        return;
    };

    res.status(403).json({
        message: 'No eres Admin'
    });
}; //isadm

const isUser = async (req: Request, res: Response, next: NextFunction) => {

    const user = await Usuario.findOne(decode.id);
    const role: any = user.get('roles_id')

    if (role == 2) { //user
        next();
        return;
    };

    res.status(403).json({
        message: 'No eres Admin'
    });

};//isuser

const autJwt = {
    verifyToken: verifyToken,
    is
}