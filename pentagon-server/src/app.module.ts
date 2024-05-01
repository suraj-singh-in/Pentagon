// Importing Libs
import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

// Importing controllers
import { AppController } from './app.controller';

// Importing Services
import { AppService } from './app.service';

// Importing modules
import { LoggerModule } from './utils/commons/services/logger/logger.module';
import { HealthModule } from './health/health.module';

// Importing Configurations
import { MONGODB_CONNECTION_STRING } from '../server-configurations';
import { ClientModule } from './client/client.module';
import { RequestLogMiddleware } from './utils/commons/RequestLogMiddleware';

@Module({
  imports: [
    MongooseModule.forRoot(MONGODB_CONNECTION_STRING),
    LoggerModule,
    HealthModule,
    ClientModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(RequestLogMiddleware)
      .forRoutes({ path: '*', method: RequestMethod.ALL });
  }
}
