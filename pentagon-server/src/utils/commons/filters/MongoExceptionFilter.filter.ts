import { Catch, ArgumentsHost, HttpStatus } from '@nestjs/common';
import { MongoServerError } from 'mongodb';
import { BaseExceptionFilter } from '@nestjs/core';
import { LoggerService } from '../services/logger/logger.service';
import { MongooseErrorEnum } from 'src/utils/constants/error';
import { BadRequestResponse } from '../ResponseWrappers';

@Catch(MongoServerError)
export class MongoExceptionFilter extends BaseExceptionFilter {
  constructor(private readonly logger: LoggerService) {
    super();
  }

  catch(exception: MongoServerError, host: ArgumentsHost) {
    const context = host.switchToHttp();
    const response = context.getResponse();
    const request = context.getRequest();

    this.logger.error(MongoExceptionFilter.name, exception.message, exception);

    if (exception.code === MongooseErrorEnum.DUPLICATE_KEY) {
      response
        .status(HttpStatus.BAD_REQUEST)
        .json(new BadRequestResponse({ message: exception.errmsg }));
    } else {
      response.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        message: 'Internal server error',
      });
    }
  }
}
