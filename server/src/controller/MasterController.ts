// Importing Libs
import { Router } from "express";

// Importing types
import { IController } from "../types";
import { MASTER_ROUTES } from "../contants";

// Importing Controllers
import HealthController from "./HealthController";

class MasterController implements IController {
  public _router = Router();

  private healthController = HealthController;

  constructor() {
    this._configure();
  }

  get router() {
    return this._router;
  }

  private _configure() {
    this._router.use(MASTER_ROUTES.HEALTH, this.healthController);
  }
}

export = new MasterController().router;
