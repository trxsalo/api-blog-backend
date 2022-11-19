import  { Request,Response } from "express";
//import  {QueryTypes} from 'sequelize';

import jwt from 'jsonwebtoken'
import { Usuario }from "../models/user.model";
import {encryptCompareSy} from '../middlewares/bcrypt'
import {secrect} from '../config/auth.config'
import { json } from "body-parser";
import { prototype } from "events";
import { USER } from "../interface/user.interface";
import { hasJSDocParameterTags } from "typescript";
//import { db } from "../database/connectioDB";

/**
 * password
 * usuario
 * Logea
 */
export const login = async (req:Request,res:Response)=>{

    try{

        const user =req.body.usuario;

        //const usuario = await db.query(`SELECT * FROM usuarios WHERE usuario = ${user}`)

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
        
        const hast = usuario.get('password') 

        const pass= await encryptCompareSy(req.body.password,hast)

        if(!pass){
            return res.status(400).send({
                message:'Error de Password'
            });
        }

        const token:string = jwt.sign({ id: user.id }, secrect.secrect,{
            expiresIn: 86400, // 24 horas
            });
        
        res.header('auth-token', token);
        
        return res.status(200).send({
            mssg:'Usuario Valido'
        })
        
    }
    catch(e){
        //return res.send(console.log(req.body.usuario))
        return res.status(401).send({
            mess:'f'
        })
    }
}