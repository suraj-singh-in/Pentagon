// Importing Libs
import { Router, Request, Response, NextFunction } from "express";

// Importing types
import { IController } from "../types";

// Importing services
import * as healthService from "../services/HealthService";

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
    this._router.get("/", healthService.healthCheck);

    // router to check deep health
    this._router.get("/deep-health", healthService.deepHealthCheck);
  }
}

export = new HealthController().router;
