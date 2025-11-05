import { IsString, IsOptional, IsDateString, IsNumber, Min } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateProjectDto {
  @IsString()
  @ApiProperty({ example: 'New Website Development' })
  name!: string;

  @IsDateString()
  @ApiProperty({ example: '2024-07-01' })
  startDate!: string;

  @IsOptional()
  @IsDateString()
  @ApiProperty({ example: '2024-12-31', required: false })
  endDate?: string;

  @IsNumber()
  @Min(0)
  @ApiProperty({ example: 50000 })
  budget!: number;
}
