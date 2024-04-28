import { Test, TestingModule } from '@nestjs/testing';
import { HealthController } from './health.controller';
import { TerminusModule } from '@nestjs/terminus';
import { HealthService } from './health.service';

describe('HealthController', () => {
  let controller: HealthController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [TerminusModule],
      controllers: [HealthController],
      providers: [HealthService],
    }).compile();

    controller = module.get<HealthController>(HealthController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('healthCheck method should be defined', () => {
    expect(controller.healthCheck).toBeDefined();
    expect(typeof controller.healthCheck).toBe('function');
  });

  it('healthCheck method should should return 200', () => {
    expect(controller.healthCheck()).toStrictEqual({ status: 'OK 200' });
  });

  it('deepHealthCheck method should be defined', () => {
    expect(controller.deepHealthCheck).toBeDefined();
    expect(typeof controller.deepHealthCheck).toBe('function');
  });

  it('deepHealthCheck method should return expected object', () => {
    const expected = {
      status: 'OK 200 for deep health',
      PID: expect.any(Number),
      uptime: expect.any(Number),
      timestamp: expect.any(Number),
    };

    const result = controller.deepHealthCheck();

    expect(result).toStrictEqual(expected);
  });
});
