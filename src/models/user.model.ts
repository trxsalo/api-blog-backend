import { DataTypes } from 'sequelize';
import {db}  from '../database/connectioDB'

export const Usuario = db.define('Usuario',{
    nombreCompleto: {
        type:DataTypes.STRING
    },
    apellidom:{
        type:DataTypes.STRING
    },
    email:{
        type:DataTypes.STRING
    },
    usuario:{
        type:DataTypes.STRING
    },
    password:{
        type:DataTypes.STRING
    }
});