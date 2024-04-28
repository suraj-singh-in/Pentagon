import { Test, TestingModule } from '@nestjs/testing';
import { LoggerService } from './logger.service';
import { logger } from './winston.config';

// Mock the logger object
jest.mock('./winston.config', () => {
  const printfMock = jest.fn();
  return {
    logger: {
      info: jest.fn(),
      error: jest.fn(),
      warn: jest.fn(),
      debug: jest.fn(),
    },
  };
});

describe('LoggerService', () => {
  let service: LoggerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LoggerService],
    }).compile();

    service = module.get(LoggerService);

    // Clear mock function calls before each test
    (logger.info as jest.Mock).mockClear();
    (logger.error as jest.Mock).mockClear();
    (logger.warn as jest.Mock).mockClear();
    (logger.debug as jest.Mock).mockClear();
  });

  it('should log messages with context', () => {
    service.log('Test message', 'TestContext');
    expect(logger.info).toHaveBeenCalledWith('Test message', {
      context: 'TestContext',
    });
  });

  it('should log errors with trace and context', () => {
    service.error('Error message', 'ErrorTrace', 'ErrorContext');
    expect(logger.error).toHaveBeenCalledWith('Error message', {
      context: 'ErrorContext',
      trace: 'ErrorTrace',
    });
  });

  it('should log warnings with context', () => {
    service.warn('Warning message', 'WarnContext');
    expect(logger.warn).toHaveBeenCalledWith('Warning message', {
      context: 'WarnContext',
    });
  });

  it('should log debug messages with context', () => {
    service.debug('Debug message', 'DebugContext');
    expect(logger.debug).toHaveBeenCalledWith('Debug message', {
      context: 'DebugContext',
    });
  });
});
