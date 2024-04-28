import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

describe('Main', () => {
  let listenMock: jest.Mock;
  let createMock: jest.Mock;

  beforeEach(() => {
    listenMock = jest.fn();
    createMock = jest.fn().mockReturnValue({ listen: listenMock });
    jest.spyOn(NestFactory, 'create').mockImplementation(createMock);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should create NestJS application', async () => {
    await import('./main');
    expect(NestFactory.create).toHaveBeenCalledWith(AppModule);
  });
});
