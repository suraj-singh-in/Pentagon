import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { Client } from './entities/client.entity';
import { SuccessResponse } from '../utils/commons/ResponseWrappers';
import { LoggerService } from '../utils/commons/services/logger/logger.service';

@Injectable()
export class ClientService {
  constructor(
    @InjectModel(Client.name) private ClientModal: Model<Client>,
    private readonly logger: LoggerService,
  ) {}

  async create(createClientDto: CreateClientDto) {
    try {
      const newClient = new this.ClientModal(createClientDto);
      const createdClient = await newClient.save();

      this.logger.log(ClientService.name, createdClient);
      return new SuccessResponse({
        message: `Created New Client with slug ${createdClient.slug}`,
      });
    } catch (error) {
      this.logger.error(
        'Error While Creating Client',
        error,
        ClientService.name,
      );
    }
  }
}
