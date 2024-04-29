import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import { PENTAGON_SERVER_PORT } from '../server-configurations';
import { Logger } from '@nestjs/common';
import { PentagonValidationPipe } from './utils/commons/PentagonValidationPipe';

export async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  if (typeof app.useGlobalPipes === 'function') {
    app.useGlobalPipes(new PentagonValidationPipe());
  }
  await app.listen(PENTAGON_SERVER_PORT, () => {
    Logger.log('Pentagon is up at port', PENTAGON_SERVER_PORT);
  });
}

bootstrap();
