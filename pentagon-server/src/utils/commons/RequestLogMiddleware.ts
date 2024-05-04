import { Injectable, NestMiddleware, RequestMapping } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { RouteInfo } from '@nestjs/common/interfaces';
import { request } from 'http';

import { LoggerService } from './services/logger/logger.service';

@Injectable()
export class RequestLogMiddleware implements NestMiddleware {
  constructor(private readonly logger: LoggerService) {}

  use(req: Request, res: Response, next: NextFunction) {
    this.logger.log(RequestLogMiddleware.name, {
      headers: req.headers,
      body: req.body,
      originalUrl: req.originalUrl,
    });

    // Ends middleware function execution, hence allowing to move on
    if (next) {
      next();
    }
  }
}
