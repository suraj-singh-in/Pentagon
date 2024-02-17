// Importing Libs
import { Router, Request, Response, NextFunction } from "express";

export const healthCheck = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  return res.status(200).json({ status: "OK 200" });
};

export const deepHealthCheck = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const deepHealthCheckResult = {
    status: "OK 200 for deep health",
    PID: process.pid,
    uptime: process.uptime(),
    timestamp: Date.now(),
  };

  return res.status(200).json(deepHealthCheckResult);
};
