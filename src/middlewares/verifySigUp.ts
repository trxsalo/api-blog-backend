import { Request,Response , NextFunction} from 'express';
import {Usuario} from '../models/user.model';

/**
 * 
 * Verifica si los datos ingresado en usuario,email
 *  ya se esta utilizando
 */
export const checkDuplicateUsernameOrEmail = async (req:Request, res:Response, next:NextFunction) => {
    try {
      // Username
        let  user = await Usuario.findOne({
        where: {
            usuario: req.body.usuario
        }
        });
        
        if (user) {
            return res.status(400).send({
            message: "El nombre de usuario ya está en uso!"
            });
        }
    // Email
        user = await Usuario.findOne({
            where: {
                email: req.body.email
            }
        });

        if (user) {
            return res.status(400).send({
                message: "Correo electrónico ya está en uso!"
            });
        }

        next();
    } catch (error) {
        return res.status(500).send({
        message: "Error Interno!"
        });
    }
};
