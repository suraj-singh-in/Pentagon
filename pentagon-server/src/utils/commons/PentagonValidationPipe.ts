import { ValidationPipe, BadRequestException } from '@nestjs/common';
import { ValidationError } from 'class-validator';
import { ErrorCodes, ErrorMessages } from '../constants/error';

export class PentagonValidationPipe extends ValidationPipe {
  public createExceptionFactory() {
    return (validationErrors: ValidationError[]) => {
      const validationErrorsMessages = validationErrors.map((error) => {
        // Customize the error message as per your requirement
        return {
          [error.property]: Object.values(error.constraints).join(', '),
        };
      });
      return new BadRequestException({
        data: validationErrorsMessages,
        statusCode: ErrorCodes.BAD_REQUEST,
        message: ErrorMessages[ErrorCodes.BAD_REQUEST],
      });
    };
  }
}
