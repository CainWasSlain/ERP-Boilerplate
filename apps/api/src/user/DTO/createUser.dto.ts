import { IsEmail, IsNotEmpty, MinLength, Matches, IsOptional, IsEnum } from 'class-validator';
import { Role } from '../../generated/prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @IsNotEmpty()
  @ApiProperty({ example: 'John Doe' })
  name!: string;

  @IsEmail()
  @IsNotEmpty()
  @ApiProperty({ example: 'johndoe@example.com'})
  email!: string;

  @IsNotEmpty()
  @MinLength(8, { message: 'Password must be at least 8 characters long' })
  @Matches(/(?=.*[a-z])/, { message: 'Password must contain a lowercase letter' })
  @Matches(/(?=.*[A-Z])/, { message: 'Password must contain an uppercase letter' })
  @Matches(/(?=.*\d)/, { message: 'Password must contain a number' })
  @Matches(/(?=.*[!@#$%^&*])/, { message: 'Password must contain a special character' })
  @ApiProperty({ example: 'SecurePass@123' })
  password!: string;

  @IsOptional()
  @IsEnum(Role)
  role?: Role;
}
