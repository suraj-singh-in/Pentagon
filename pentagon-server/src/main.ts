import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import { PENTAGON_SERVER_PORT } from 'server-configurations';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(PENTAGON_SERVER_PORT, () => {
    Logger.log('Pentagon is up at port', PENTAGON_SERVER_PORT);
  });
}

bootstrap();
