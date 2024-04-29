import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { Client } from './entities/client.entity';
import { SuccessResponse } from '../utils/commons/ResponseWrappers';

@Injectable()
export class ClientService {
  constructor(@InjectModel(Client.name) private ClientModal: Model<Client>) {}

  async create(createClientDto: CreateClientDto) {
    const newClient = new this.ClientModal(createClientDto);
    const createdClient = await newClient.save();

    return new SuccessResponse({
      message: `Created New Client with slug ${createdClient.slug}`,
    });
  }
}
