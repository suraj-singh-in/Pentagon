import { Controller, Get } from '@nestjs/common';
import { HealthCheck } from '@nestjs/terminus';
import { HealthService } from './health.service';

@Controller('health')
export class HealthController {
  constructor(private health: HealthService) {}

  @Get()
  @HealthCheck()
  healthCheck() {
    return this.health.healthCheck();
  }

  @Get('/deep-health')
  deepHealthCheck() {
    return this.health.deepHealthCheck();
  }
}
