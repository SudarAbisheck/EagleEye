import { Request, Response } from "express";

/**
 * GET /
 * Home.
 */
export let index = (req: Request, res: Response) => {
  res.setHeader("Content-Type", "application/json");
  res.send(JSON.stringify({status: "OK"}, undefined, 2));
};
