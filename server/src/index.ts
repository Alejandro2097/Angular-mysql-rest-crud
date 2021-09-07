import express, { Application } from 'express';

import indexRoutes from './routes/indexRoutes';
import personRoutes from './routes/personRoutes';
class Server{
    public app: Application;

    constructor(){
        this.app = express();
        this.config();
        this.routes();
    }
    config(): void {
        this.app.set('port',process.env.port  || 3000);
    }
    routes() : void{
        this.app.use(indexRoutes);
        this.app.use(personRoutes);
    }
    start() :void{
        this.app.listen(this.app.get('port'), () =>{
            console.log('Server on port ', this.app.get('port'));
        });
    }
}

const server = new Server();
server.start();