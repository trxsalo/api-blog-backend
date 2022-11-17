import {Sequelize} from 'sequelize';
import {process_env} from '../../environment/environment.dev'

export  const db = new Sequelize( process_env.DATABSE,process_env.USER_DB, process_env.PASSWORD_DB,{
    host:process_env.HOST_DB,
    dialect:'postgres',
    //logging:false
})