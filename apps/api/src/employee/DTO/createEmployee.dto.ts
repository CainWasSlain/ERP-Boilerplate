import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateEmployeeDto {
  @IsNotEmpty()
  @ApiProperty({ example: 'Jane Smith' })
  name!: string;

  @IsEmail()
  @ApiProperty({ example: 'janesmith@example.com' })
  email!: string;

  @IsString()
  @ApiProperty({ example: 'Manager' })
  role!: string;
}

