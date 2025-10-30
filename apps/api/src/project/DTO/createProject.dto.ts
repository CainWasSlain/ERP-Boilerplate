import { IsString, IsOptional, IsDateString, IsNumber, Min } from 'class-validator';

export class CreateProjectDto {
  @IsString()
  name!: string;

  @IsDateString()
  startDate!: string;

  @IsOptional()
  @IsDateString()
  endDate?: string;

  @IsNumber()
  @Min(0)
  budget!: number;
}
