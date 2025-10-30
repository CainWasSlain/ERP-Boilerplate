import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateEmployeeDto {
  @IsNotEmpty()
  name!: string;

  @IsEmail()
  email!: string;

  @IsString()
  role!: string;
}

