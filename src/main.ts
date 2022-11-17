
import {Serve} from './app'



async function main(){
    const app = new Serve();
    await app.listen();
}

main(); 

//const app = new Serve();
//app.listen();