import { IsEmail, IsNotEmpty, MinLength, Matches } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  name!: string;

  @IsEmail()
  email!: string;

  @IsNotEmpty()
  @MinLength(8, { message: 'Password must be at least 8 characters long' })
  @Matches(/(?=.*[a-z])/, { message: 'Password must contain a lowercase letter' })
  @Matches(/(?=.*[A-Z])/, { message: 'Password must contain an uppercase letter' })
  @Matches(/(?=.*\d)/, { message: 'Password must contain a number' })
  @Matches(/(?=.*[!@#$%^&*])/, { message: 'Password must contain a special character' })
  password!: string;
}
