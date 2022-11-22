import { DataTypes} from 'sequelize';
import {db}  from '../database/connectioDB'
/**
 * Modelo de Roles
 */
export const Roles = db.define('roles',{ //entre la comillas simple es de como se llama la tabla
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING
    },
},{
    timestamps: false

});