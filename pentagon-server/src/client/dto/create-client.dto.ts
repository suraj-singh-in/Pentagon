import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateClientDto {
  @ApiProperty({ description: 'Name of the client', example: 'Client Name' })
  @IsNotEmpty()
  readonly name: string;

  @ApiProperty({ description: 'Slug for the client', example: 'client-name' })
  @IsNotEmpty()
  readonly slug: string;

  @ApiProperty({
    description: 'Unique ID for the client',
    example: '1234567890',
  })
  @IsNotEmpty()
  readonly clientId: string;
}
