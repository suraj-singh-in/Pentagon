import { Injectable } from '@nestjs/common';

@Injectable()
export class HealthService {
  healthCheck(): any {
    return { status: 'OK 200' };
  }

  deepHealthCheck() {
    const deepHealthCheckResult = {
      status: 'OK 200 for deep health',
      PID: process.pid,
      uptime: process.uptime(),
      timestamp: Date.now(),
      //   databaseStatus: mongoCollectionInstance.readyState,
    };

    return deepHealthCheckResult;
  }
}
