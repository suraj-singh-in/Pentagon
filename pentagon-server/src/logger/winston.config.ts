import * as winston from 'winston';

const transports = [
  new winston.transports.Console({
    format: winston.format.combine(
      // Add a timestamp to the console logs
      winston.format.timestamp(),
      winston.format.colorize(),
      winston.format.printf(({ timestamp, level, message, context, trace }) => {
        return `${timestamp} [${context}] ${level}: ${message}${trace ? `\n${trace}` : ''}`;
      }),
    ),
  }),
];

export const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports,
});
