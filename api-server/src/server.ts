import * as bodyParser from "body-parser";
import * as compression from "compression";
import * as dotenv from "dotenv";
import * as errorHandler from "errorhandler";
import * as express from "express";
import * as logger from "morgan";

dotenv.config({path: ".env.production"});

/**
 * Routes
 */
import apiRouter from "./routes/api";
import rootRouter from "./routes/root";

class App {
    public express: express.Application;

    constructor() {
        this.express = express();
        this.middleware();
        this.routes();
        this.launchConf();
    }

    private middleware(): void {
        this.express.set("port", process.env.PORT || 3000);
        this.express.use(compression());
        this.express.use(logger("dev"));
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({ extended: true }));
    }

    /**
     * Primary Application Routes
     */
    private routes(): void {
        this.express.use("/", rootRouter);
        this.express.use("/api", apiRouter);
    }

    private launchConf() {
        this.express.use(errorHandler());
        /**
         * Start Express Server
         */
        this.express.listen(this.express.get("port"), () => {
            // tslint:disable-next-line:no-console
            console.log(("  App is running at http://localhost:%d \
            in %s mode"), this.express.get("port"), this.express.get("env"));
            // tslint:disable-next-line:no-console
            console.log("  Press CTRL-C to stop\n");
        });
    }

}

export default new App().express;
