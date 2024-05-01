import { Global, Module } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { ClsModule } from 'nestjs-cls';

import {
  ContextStorageServiceKey,
  ContextStorageService,
} from './ContextStorage.service ';

@Global()
@Module({
  imports: [
    ClsModule.forRoot({
      global: true,
      middleware: {
        mount: true,
        generateId: true,
        idGenerator: (req: Request) => req.headers['x-correlation-id'] ?? uuidv4(),
      },
    }),
  ],
  controllers: [],
  providers: [
    {
      provide: ContextStorageServiceKey,
      useClass: ContextStorageService,
    },
  ],
  exports: [ContextStorageServiceKey],
})
export class ContextModule {}
