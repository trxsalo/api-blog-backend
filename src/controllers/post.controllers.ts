import { Request, Response } from "express";
import { Post } from "../models/post.model";


export const PostAll = async (req:Request,res:Response):Promise<Response>=>{
    try{
        const post = await Post.findAll();

        return res.status(200).json({
            message: post
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
        const usuario_id = req.headers
        const {titulo, descripcion} = req.body
        Post.create({
            titulo,
            descripcion,
            usuario_id
        })
        return res.status(204).json({
            status:true
        });
    }
    catch(e){
        return res.status(500).json({
            message:'Error Interno'
        })
    }
}