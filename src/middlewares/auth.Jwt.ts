import jwt from "jsonwebtoken";
import { secrect } from '../config/auth.config' //Palabra secreta del token
import {Response, NextFunction } from "express"; //Interface de express
import { Usuario } from "../models/user.model"; //Modelo de Usuario DB
import {JwtExpPayload, UserPayload} from '../interface/jwt.interface' // Interfaces


/**
 * Verifica el token y estrae la carga Util de Id
 *  req.UserId
 */
export const verifyToken = (req:any, res: Response, next: NextFunction) => {
    try{
        const token: any = req.headers["x-access-token"]; //Requerimos el Toquen que se ortogo al usuario Logeado

        if (!token) return res.status(403).send({message: 'Token no Proveido'}); //Si noy hay toquen
    
        const jwtPayload = jwt.decode(token) as JwtExpPayload; //extraemos
    
        const payload = jwt.verify(token, secrect.secrect) as UserPayload; //verficamos
    
        req.jwtPayload = jwtPayload; //enviamos
        req.UserId = payload.id; //asignamos
        req.Rol = payload.rol //asignamos
    
        next();
    }
    catch(e){ //en casode error
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

        if (rol == 1) { //adm 
            
            next();
        }
        else{
            return res.status(403).json({
                success:false,
                message: 'Requiere Rol de Adm',
                rol
            });
        }
        
    }
    catch(e){
        res.status(403).json({
            success:false,
            message: 'Requiere Rol '
        });
    }
}; //isadm


/**
 * Del req.UserId
 * verifica si el Usuario tiene el
 * de User
 */
export const isUser = async (req: any, res: Response, next: NextFunction) => {

    try{
        const rol = req.Rol

        if (rol == 2) { //user
            next(); ;
        }else{
            return res.status(403).json({
                succes: false,
                message: 'Requieres rol de Usuario',
                rol
            });
        }
    }
    catch(e){
        return res.status(403).json({
            succes: false,
            message: 'Requieres rol'
        });
    }   
};//isuser


