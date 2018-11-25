import { Request, Response } from "express";

export let getRootApi = (req: Request, res: Response) => {
    res.setHeader("Content-Type", "application/json");
    res.send(JSON.stringify({status: "OK", message: "EagleEye API server"}, undefined , 2));
};
