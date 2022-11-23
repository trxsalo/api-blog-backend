import { Request, Response } from "express";
import  jwt from "jsonwebtoken";
import { Post } from "../models/post.model";
import { UserPayload} from '../interface/jwt.interface'


export const PostAll = async (req:Request,res:Response):Promise<Response>=>{
    try{
        //const post = await Post.findAll();

        return res.status(200).json({
            message: 'Post'
        })
    }
    catch(e){
        return res.status(500).json({
            message:'Error Interno'
        })
    }
};

export const PostCreate = async (req:Request,res:Response)=>{
    try{

        const token:any= req.headers['x-access-token'];
        const jwtToken = jwt.decode(token) as UserPayload
        const usuario_id = jwtToken.id

        const {titulo, descripcion} = req.body

        const postNew = {
            titulo:titulo,
            descripcion:descripcion,
            usuario_id:usuario_id
        };
        const port = await Post.create(postNew);
        return res.status(204).json({
            status:true,
            postNew
        });
    }
    catch(e){
        return res.status(500).json({
            message:'Error Interno'
        })
    }
}

export const  PostUpdate = async (req:Request,res:Response)=>{
    try{
        return res.status(200).json({
            message:'Actualizado'
        })
    }
    catch(e){
        return res.status(500).json({
            message:"Error Interno"
        })
    }
}

export const  PostU = async (req:Request,res:Response)=>{
    try{
        return res.status(200).json({
            message:'Post '
        })
    }
    catch(e){
        return res.status(500).json({
            message:"Error Interno"
        })
    }
}

export const  PostDelete = async (req:Request,res:Response)=>{
    try{
        return res.status(200).json({
            message:'Eliminado'
        })
    }
    catch(e){
        return res.status(500).json({
            message:"Error Interno"
        })
    }
}