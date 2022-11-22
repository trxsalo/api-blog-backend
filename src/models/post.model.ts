import { DataTypes } from "sequelize";
import { db } from "../database/connectioDB";

export const Post = db.define('post',{
    titulo:{
        type:DataTypes.STRING
    },
    descripcion:{
        type:DataTypes.STRING
    },
    usuario_id:{
        type:DataTypes.NUMBER
    }
},);