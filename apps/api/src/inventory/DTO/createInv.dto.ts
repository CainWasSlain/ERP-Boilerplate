import { IsNumber, IsNotEmpty, Min } from 'class-validator';

export class CreateInvDto {
  @IsNotEmpty()
  itemName!: string;

  @IsNumber()
  @Min(0)
  quantity!: number;

  @IsNumber()
  @Min(0)
  price!: number;
}

