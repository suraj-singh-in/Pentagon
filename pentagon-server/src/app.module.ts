// Importing Libs
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

// Importing controllers
import { AppController } from './app.controller';

// Importing Services
import { AppService } from './app.service';

// Importing modules
import { LoggerModule } from './logger/logger.module';
import { HealthModule } from './health/health.module';

// Importing Configurations
import { MONGODB_CONNECTION_STRING } from '../server-configurations';
import { ClientModule } from './client/client.module';

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
export class AppModule {}
