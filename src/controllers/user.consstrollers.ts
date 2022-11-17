import { Request,Response } from "express";

import { Usuario } from "../models/user.model";

export const userAll = async (req:Request, res:Response):Promise<Response>=>{
    try{
        const usuarios= await Usuario.findAll();

        return res.status(200).json({usuarios})
    }
    catch(e){
        return res.status(401).json({
            mesaage:'f'
        })
    }
}

