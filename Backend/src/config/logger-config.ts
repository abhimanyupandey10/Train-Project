import * as winston from 'winston';
import 'winston-daily-rotate-file';
import config from './app-config';

// Create the logger instance
const logger = winston.createLogger({
  level: config.LOG_LEVEL,
  format: winston.format.json(),
  transports: [
    new winston.transports.Console(),

    new winston.transports.DailyRotateFile({
      filename: 'logs/application-%DATE%.log',
      datePattern: 'YYYY-MM-DD',
      maxSize: '20m',
      maxFiles: '14d'
    })
  ]
});

export default logger;
