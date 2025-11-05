import { IsNumber, IsNotEmpty, Min } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateInvDto {
  @IsNotEmpty()
  @ApiProperty({ example: 'Item A' })
  itemName!: string;

  @IsNumber()
  @Min(0)
  @ApiProperty({ example: 100 })
  quantity!: number;

  @IsNumber()
  @Min(0)
  @ApiProperty({ example: 29.99 })
  price!: number;
}

