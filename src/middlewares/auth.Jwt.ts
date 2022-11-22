import jwt from "jsonwebtoken";
import { secrect } from '../config/auth.config' //Palabra secreta del token
import {Response, NextFunction } from "express"; //Interface de express
import { Usuario } from "../models/user.model"; //Modelo de Usuario DB


interface UserPayload{
    id:number;
    rol:number;
};
interface JwtExpPayload {
    expiresIn: string;
    exp: number;
}

/**
 * Verifica el token y estrae la carga Util de Id
 *  req.UserId
 */
export const verifyToken = (req:any, res: Response, next: NextFunction) => {
    try{
        const token: any = req.headers["x-access-token"]; //Requerimos el Toquen que se ortogo al usuario Logeado

        if (!token) return res.status(403).send({message: 'Token no Proveido'});
    
        const jwtPayload = jwt.decode(token) as JwtExpPayload;
    
        req.jwtPayload = jwtPayload;
    
        const payload = jwt.verify(token, secrect.secrect) as UserPayload;
    
        req.jwtPayload = jwtPayload;
        req.UserId = payload.id;
        req.Rol = payload.rol
    
        next();
    }
    catch(e){
        return res.status(500).json({
            message:'No autorizado'
        })
    }

};



/**
 * Del req.UserId
 * verifica si el Usuario tiene el
 * de Adm 
 */
export const isAdm = async (req: any, res: Response, next: NextFunction) => {
    try{
        const rol = req.Rol

        if (rol != 1) { //adm   
            return res.status(404).json({
                message:""
            })
        }
        next();
        return;
    
    }
    catch(e){
        res.status(403).json({
            success:false,
            message: 'Requiere Rol de Admi'
        });
    }
}; //isadm


/**
 * Del req.UserId
 * verifica si el Usuario tiene el
 * de User
 */
export const isUser = async (req: any, res: Response, next: NextFunction) => {

    const idUser = req.UserId

    const user = await Usuario.findOne({
        where:{
            id:idUser
        }
    });

    const role = user?.get('roles_id') || ''

    if (role == 2) { //user
        next();
        return;
    };

    res.status(403).json({
        succes: false,
        message: 'Requieres rol de Usuario'
    });

};//isuser


