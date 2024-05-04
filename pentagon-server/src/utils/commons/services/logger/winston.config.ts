import * as winston from 'winston';

export const transports = [
  new winston.transports.Console({
    format: winston.format.combine(
      // Add a timestamp to the console logs
      winston.format.timestamp(),
      winston.format.colorize(),
      winston.format.printf(({ timestamp, level, message, context, trace }) => {
        if (typeof message === 'object') {
          message = JSON.stringify(message, null, 3);
        }

        return `${timestamp} [${context}] ${level}: ${message}${trace ? `\n${trace}` : ''}`;
      }),
    ),
  }),
  new winston.transports.File({
    filename: '../logs/combined.log',
  }),
  new winston.transports.File({
    filename: '../logs/app-error.log',
    level: 'error',
  }),
];

export const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json(),
  ),
  transports,
});
