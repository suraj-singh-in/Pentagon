// Importing Libs
import { Router, Request, Response, NextFunction } from "express";

// Importing types
import { IController } from "../types";

class HealthController implements IController {
  public _router = Router();

  constructor() {
    this._configure();
  }

  get router() {
    return this._router;
  }

  private _configure() {
    // router to check health
    this._router.get("/", (req: Request, res: Response, next: NextFunction) => {
      return res.status(200).json({ status: "OK 200" });
    });

    // router to check deep health
    this._router.get("/deep-health", (req: Request, res: Response, next: NextFunction) => {
      return res.status(200).json({ status: "OK 200 for deep health" });
    });
  }
}

export = new HealthController().router;
