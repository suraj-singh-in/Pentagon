import { Test, TestingModule } from '@nestjs/testing';
import { ClientController } from './client.controller';
import { ClientService } from './client.service';

import { CreateClientDto } from './dto/create-client.dto';
import { SuccessResponse } from '../utils/commons/ResponseWrappers';

describe('ClientController', () => {
  let controller: ClientController;
  let service: ClientService;

  const createClientDto: CreateClientDto = {
    name: 'Client #1',
    slug: 'client-1',
    clientId: '123',
  };

  const mockClient = {
    slug: 'Client #1',
    breed: 'client-1',
    clientId: '123',
    _id: 'mognodbId',
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ClientController],
      providers: [
        {
          provide: ClientService,
          useValue: {
            create: jest.fn().mockResolvedValue(createClientDto),
          },
        },
      ],
    }).compile();

    controller = module.get<ClientController>(ClientController);
    service = module.get<ClientService>(ClientService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('create', () => {
    it('should create a new client', async () => {
      const createClientDto: CreateClientDto = {
        name: 'Test Client',
        slug: 'test-client',
        clientId: '123',
      };

      const mockSuccessResponse = new SuccessResponse({
        statusCode: 'PENTAGON-000',
        message: `Created New Client with slug ${mockClient.slug}`,
      });

      jest.spyOn(service, 'create').mockResolvedValue(mockSuccessResponse);

      const result = await controller.create(createClientDto);
      expect(result).toEqual(mockSuccessResponse);
    });
  });
});
