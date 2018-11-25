import { Router } from "express";
import * as apiController from "../controllers/api";

class Api {
    public router: Router;
    public constructor() {
        this.router = Router();
        this.init();
    }

    private init() {
        this.router.get("/", apiController.getRootApi);
    }
}

const apiRoutes = new Api();
export default apiRoutes.router;
