import { Module } from '@nestjs/common';
import { ClientService } from './client.service';
import { ClientController } from './client.controller';

import { ClientSchema, Client } from './entities/client.entity';

import { InjectModel, MongooseModule, getModelToken } from '@nestjs/mongoose';
import { LoggerService } from 'src/utils/commons/services/logger/logger.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Client.name, schema: ClientSchema }]),
  ],
  controllers: [ClientController],
  providers: [ClientService, LoggerService],
})
export class ClientModule {}
