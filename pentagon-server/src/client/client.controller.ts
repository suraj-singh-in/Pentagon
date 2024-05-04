import { Controller, Post, Body, UseFilters } from '@nestjs/common';
import { ClientService } from './client.service';
import { CreateClientDto } from './dto/create-client.dto';
import { MongoExceptionFilter } from 'src/utils/commons/filters/MongoExceptionFilter.filter';

@Controller('client')
export class ClientController {
  constructor(private readonly clientService: ClientService) {}

  @Post()
  @UseFilters(MongoExceptionFilter)
  create(@Body() createClientDto: CreateClientDto) {
    return this.clientService.create(createClientDto);
  }
}
