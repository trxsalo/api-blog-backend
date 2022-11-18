import { DataTypes } from 'sequelize';
import {db}  from '../database/connectioDB'

export const Usuario = db.define('usuarios',{ //entre la comillas simple es de como se llama la tabla
    nombrecompleto: {
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