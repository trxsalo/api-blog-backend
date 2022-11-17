
import express,{ Application } from "express";
import morgan from "morgan";
import bodyParser from 'body-parser'

import {process_env} from '../environment/environment.dev'

import {db} from './database/connectioDB'

import Inicio from './routes/prueba.routes'
import UserAll from  './routes/user.routes'

export class Serve{
    private app:Application;

    constructor(private port?: number | string){
        
        this.app = express();
        this.configuracion();
        this.middleware();
        this.router();
        this.connectionDB();
    };

    middleware(){
        this.app.use(morgan('dev'));
        this.app.use(express.json());
        this.app.use(bodyParser.urlencoded({extended:true}))
    };

    configuracion(){
        this.app.set('port', this.port || process_env.PORT_SERVE || 3000);
    
    };

    async listen(){
        await this.app.listen(this.app.get('port'));
        console.log('Servidor en localhost:', this.app.get('port'));
    };

    router(){
        this.app.use('/',Inicio);
        this.app.use(UserAll);
    };

    async connectionDB(){
        try{
            await db.authenticate(); //Prueba si la conexion a la db es trues
            console.log('Conexion exitosa');
            
        }  
        catch(e){
            console.log(`Error en la conexion  de DB ${e}`); //muetra el error en caso de false
            
        }
    };
};


