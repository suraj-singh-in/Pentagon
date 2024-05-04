import { Injectable } from '@nestjs/common';
import { logger } from './winston.config';

@Injectable()
export class LoggerService {
  log(context: string, message: any) {
    logger.info(message, { context });
  }

  error(context: string, message: any, trace: string) {
    logger.error(message, { context, trace });
  }

  warn(context: string, message: any) {
    logger.warn(message, { context });
  }

  debug(context: string, message: any) {
    logger.debug(message, { context });
  }
}
