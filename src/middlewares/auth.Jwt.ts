import jwt from "jsonwebtoken";
import { secrect } from '../config/auth.config' //Palabra secreta del token
import { Request, Response, NextFunction } from "express"; //Interface de express
import { Usuario } from "../models/user.model"; //Modelo de Usuario DB


/**
 * Verifica el token y estrae la carga Util de Id
 *  req.UserId
 */
export const verifyToken = (req:any, res: Response, next: NextFunction) => {

    const token: any = req.headers["x-access-token"]; //Requerimos el Toquen que se ortogo al usuario Logeado
    
    const authHeader = token.split('')[1]; //Defina el token, estableciéndolo igual a authHeader después de la palabra 'Bearer': posición 1

    if (!authHeader) return res.status(403).send({message: 'Token no Proveido'});

    jwt.verify(authHeader, secrect.secrect, (err:any,decoded:any)=>{

        if (err) return res.status(404).json({message:"Token no valido"});

        req.idUser =  decoded.id; // Funciona por favor
        next();
    });
};



/**
 * Del req.UserId
 * verifica si el Usuario tiene el
 * de Adm 
 */
export const isAdm = async (req: any, res: Response, next: NextFunction) => {

    const idUser = req.idUser

    const user = await Usuario.findOne({
        where:{
            id:idUser
        }
    });
    
    const role = user?.get('roles_id') || ''

    if (role == 1) { //adm
        next();
        return;
    }

    //else return res.status(404).send({message:"Rol no entregado"});

    res.status(403).json({
        success:false,
        message: 'Requiere Rol de Admi'
    });
}; //isadm


/**
 * Del req.UserId
 * verifica si el Usuario tiene el
 * de User
 */
export const isUser = async (req: any, res: Response, next: NextFunction) => {

    const idUser = req.idUser

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
