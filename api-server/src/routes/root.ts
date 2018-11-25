import { Router } from "express";

import * as homeController from "../controllers/home";

class Root {
    public router: Router;
    public constructor() {
      this.router = Router();
      this.init();
    }
    private init() {
      this.router.get("/", homeController.index);
    }
  }

const rootRoutes = new Root();
export default rootRoutes.router;
