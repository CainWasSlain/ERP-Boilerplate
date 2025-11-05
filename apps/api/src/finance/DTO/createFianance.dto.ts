import { IsString, IsOptional, IsNumber, Min } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateFinanceDto {
  @IsString()
  @ApiProperty({ example: 'Office Supplies' })
  type!: string;

  @IsOptional()
  @IsString()
  @ApiProperty({ example: 'Purchased new office chairs' })
  notes?: string;

  @IsNumber()
  @Min(0)
  @ApiProperty({ example: 150.75 })
  amount!: number;
}
