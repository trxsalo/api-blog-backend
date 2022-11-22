import  { Request,Response } from "express";

import jwt from 'jsonwebtoken'
import { Usuario }from "../models/user.model";
import {encryptCompareSy} from '../lib/bcrypt'
import {secrect} from '../config/auth.config'


/**
 * password
 * usuario
 * Logea
 */
export const login = async (req:Request,res:Response)=>{

    try{

        const user =req.body.usuario;

        const usuario= await Usuario.findOne({
            where:{
                usuario:user
            }
            
        });

        

        if(!usuario){
            return res.status(400).send({
                message:'Usuario no encontrado',
                
            });
        };
        
        const hast = usuario.get('password');
        const id = usuario.get('id');

        const pass:boolean = await encryptCompareSy(req.body.password,hast)

        if(!pass){
            return res.status(400).send({
                message:'Error de Password'
            });
        }

        const token = jwt.sign({
            id:id
            },
            secrect.secrect,
            {
            expiresIn: 86400, // 24 horas
            });
        
        res.header('x-access-token', token).json({usuario}) //Devuele un token al usuario autenticado
        /*return res.status(200).send({
            mssg:'Usuario Valido'
        })*/
        
    }
    catch(e){
        //return res.send(console.log(req.body.usuario))
        return res.status(401).send({
            mess:'f'
        })
    }
}