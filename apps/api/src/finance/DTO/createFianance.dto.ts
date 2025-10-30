import { IsString, IsOptional, IsDateString, IsNumber, Min } from 'class-validator';

export class CreateFinanceDto {
  @IsString()
  type!: string;

  @IsOptional()
  notes?: string;

  @IsNumber()
  @Min(0)
  amount!: number;
}
