// Importing Libs
import { Module } from '@nestjs/common';

// Importing controllers
import { AppController } from './app.controller';

// Importing Services
import { AppService } from './app.service';

// Importing modules
import { LoggerModule } from './logger/logger.module';

@Module({
  imports: [LoggerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
