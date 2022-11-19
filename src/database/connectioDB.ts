import {Sequelize} from 'sequelize';
import {process_env} from '../../environment/environment.dev'

export  const db = new Sequelize( process_env.DATABSE,process_env.USER_DB, process_env.PASSWORD_DB,{
    host:process_env.HOST_DB,
    dialect:'postgres',
    //logging:false.
    pool: { //se usará para la configuración del grupo de conexiones de Sequelize:
        max: 5,
        min: 0,
        acquire: 30000, // tiempo máximo, en milisegundos, ese grupo intentará conectarse antes de arrojar un error
        idle: 10000 //tiempo máximo, en milisegundos, que una conexión puede estar inactiva antes de ser liberada
    }
})