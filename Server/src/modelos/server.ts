import express, { Application } from 'express';
import routeNotas from '../routes/nota'
import db from '../db/connectiondb';
import cors from 'cors';

class Server {
    private app: express.Application;
    private port: String;

    constructor(){
        this.app = express();
        this.port = process.env.PORT || '3000';
        this.listen();
        this.middlewares();
        this.routes();
        this.dbConnect();
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log(`Server is running on port ${this.port}`);
        });
    }

    routes(){
        this.app.get('/', (req,res) => {
            res.json({
                msg: "Api funcionando"
            })
        });
        this.app.use('/notas', routeNotas);
    }

    middlewares(){
        this.app.use(express.json());
        this.app.use(cors());
    }

    async dbConnect(){
        await db.authenticate().then(()=>{
            console.log('Database is connected');
        }).catch(()=>{
            console.log('Database is not connected');
        })
    }
}

export default Server;