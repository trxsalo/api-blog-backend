import { Request,Response } from "express";

export const getInicio = (req:Request,res:Response)=>{
    return res.json('Inicio');
}