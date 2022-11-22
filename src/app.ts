
import express,{ Application } from "express";
import morgan from "morgan";
import cors from 'cors'
import bodyParser from 'body-parser'
import cookie from 'cookie-session'
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
        this.app.use(bodyParser.urlencoded({extended:true}));
        this.app.use(cors()); //proporciona middleware Express para habilitar CORS
        this.app.use(cookie({ //ayuda a almacenar los datos de la sesión en el cliente dentro de una cookie sin requerir ninguna base de datos/recursos en el lado del servidor
            name:'trxsalo',
            secret:process_env.PASS_JSON, //no proporcionamos keys, por lo que usamos esto como clave única. En la práctica, debe proporcionar valor como variable de entorno secreta 
            httpOnly:true //indica que la cookie solo debe enviarse a través de HTTP(S) y no debe estar disponible para el JavaScript del cliente.
        }));
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
            //await db.sync();
            await db.authenticate(); //Prueba si la conexion a la db es trues
            console.log('Conexion exitosa');
            
        }  
        catch(e){
            console.log(`Error en la conexion  de DB ${e}`); //muetra el error en caso de false
            
        }
    };
};


