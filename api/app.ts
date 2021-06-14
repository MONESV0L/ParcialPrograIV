import * as bodyparser from "body-parser";
import * as express from "express";
import {Logger} from "./logger/logger";
import Routes from "./routes/routes";
const path = require('path');

class App{

    public express: express.Application;
    public logger: Logger;

    public users: any[];
    
    constructor(){
        this.express = express();
        this.middleware();
        this.routes();
        this.users = [];
        this.logger = new Logger();
    }

    private middleware(): void {
        this.express.use(bodyparser.json());
        this.express.use(bodyparser.urlencoded({ extended: false }));
        this.express.use(express.static(path.join(__dirname,"/my-app/dist/")));
    }

    private routes(): void{
        
        this.express.get("/", (req, res, next) => {
            res.sendFile(path.join(__dirname, "/my-app/dist/index.html"));
    }); 

    // user route 
    this.express.use("/api",Routes);

    //handle undefined routes
    this.express.use("*",(req, res, next) =>{
        res.send("verificar que la url sea correcta");
    });
    }
}

export default new App().express;