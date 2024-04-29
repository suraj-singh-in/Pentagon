import { Test, TestingModule } from '@nestjs/testing';
import { ClientService } from './client.service';
import { Client, ClientSchema } from './entities/client.entity';
import { MongooseModule, getModelToken } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateClientDto } from './dto/create-client.dto';
import { MONGODB_CONNECTION_STRING } from '../../server-configurations';
import { SuccessResponse } from '../utils/commons/ResponseWrappers';

const mockClient = {
  name: 'Client #1',
  slug: 'client-1',
  clientId: '123',
};

const createClientDto: CreateClientDto = {
  name: 'Client #1',
  slug: 'client-1',
  clientId: '123',
};

describe('ClientService', () => {
  let service: ClientService;
  let model: Model<Client>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        MongooseModule.forRoot(MONGODB_CONNECTION_STRING),
        MongooseModule.forFeature([{ name: 'Client', schema: ClientSchema }]),
      ],
      providers: [ClientService],
    }).compile();

    service = module.get<ClientService>(ClientService);
    model = module.get<Model<Client>>(getModelToken('Client'));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create a new Client', async () => {
    const saveMock = jest.fn().mockResolvedValue(mockClient);
    jest.spyOn(model.prototype, 'save').mockImplementation(saveMock);

    const mockSuccessResponse = new SuccessResponse({
      statusCode: 'PENTAGON-000',
      message: `Created New Client with slug ${mockClient.slug}`,
    });

    const newCreatedClient = await service.create(createClientDto);

    expect(newCreatedClient).toEqual(mockSuccessResponse);
    expect(saveMock).toHaveBeenCalled();
  });
});
