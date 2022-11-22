
import  { Request,Response } from "express";
import { Usuario } from "../models/user.model";
import  {encryptPassword} from '../lib/bcrypt'

/**
 * @returns UN JSON CON TOS LOS USUARIOS
 */
export const userAll = async (req:Request, res:Response):Promise<Response>=>{
    try{
        const usuarios = await Usuario.findAll();

        return res.status(200).json({usuarios});
    }
    catch(e){
        return res.status(401).json({
            mesaage:'f all'
        });
    }
}

/**
  * @param id 
  * @returns un json con los datos del usuario ID
  */

export const user = async (req:Request, res:Response):Promise<Response>=>{  ///obtener un usuario por Id
    try{
        const {id}= req.params
        const usuario = await Usuario.findByPk(id);

        if(usuario){
            return res.status(200).json({usuario});
        }
        else{
            return res.status(404).json({
                message:'Usuario no encontrado'
            });
        };
        
    }
    catch(e){
        return res.status(500).json({
            mesaage:'f'
        });
    }
}

/**
 * 
 * @param body{nombrecompleto,apellidom,email,usuario,password}
 * @returns de si se inserto o no 
 */
export const userCreate = async (req:Request, res:Response):Promise<Response>=>{ 
    
    try{

        const {
            nombrecompleto,
            apellidom,
            email,
            usuario,
            password,
            roles_id
        } = req.body;
        const  new1 = {
            nombrecompleto:nombrecompleto,
            apellidom:apellidom,
            email:email,
            usuario:usuario,
            password: await encryptPassword(password),
            roles_id:roles_id
            };

        const new2 = await Usuario.create(new1)
        

        if(new2){
            return res.status(200).json({
                message:"Usuario Creado",
                date: new2
            });
        }
        else{
            return res.status(401).json({
                message:"Usuario No Creado"
            });
        };

    }
    catch(e){
        return res.status(500).json({
            mesaage:'f'
        });
    };
};

export const userDelete = async (req:Request, res:Response):Promise<Response>=>{  ///obtener un usuario por Id
    try{
        const {id}= req.params;
        const usuario = await Usuario.destroy({
            where:{
                id:id
            }
        });

        if(usuario){
            return res.status(200).json({ //todo bien 
                message:'Usuario Eliminado'
            });
        }
        else{
            return res.status(404).json({
                message:'Usuario no encontrado'
            });
        }
        
    }
    catch(e){
        return res.status(500).json({
            mesaage:'f'
        })
    }
}


export const userUpdate = async (req:Request, res:Response):Promise<Response>=>{ 
    
    try{
        const {
            nombrecompleto,
            apellidom,
            email,
            usuario,
            password,
            roles_id
        } = req.body;

        const {id} = req.params;
            
        let new1 = await Usuario.findByPk(id);
        new1?.update({
            nombrecompleto:nombrecompleto,
            apellidom:apellidom,
            email:email,
            usuario:usuario,
            password: await encryptPassword(password),
            roles_id:roles_id
        });
        new1?.save();

        if(new1){
            return res.status(200).json({
                message:"Usuario Actualizado",
                date: new1
            });
        }
        else{
            return res.status(401).json({
                message:"Usuario No Actualizado"
            });
        };

    }
    catch(e){
        return res.status(500).json({
            mesaage:'f'
        });
    };
};