import * as winston from 'winston';

import { logger } from './winston.config';

describe('LoggerModule', () => {
  it('should be an instance of Winston Logger', () => {
    expect(logger).toBeInstanceOf(winston.Logger);
  });
});
