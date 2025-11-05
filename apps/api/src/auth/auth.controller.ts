import { Controller, Body, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from '../user/DTO/createUser.dto';
import { LoginUserDto } from './DTO/loginUser.dto';


@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService ) {}

  @Post('register')
  register(@Body() data: CreateUserDto) {
    return this.authService.register(data);
  }
  @Post('login')
  login(@Body () data : LoginUserDto) {
    return this.authService.login(data);
  }
  @Post('refresh')
    async refresh(@Body() body: { userId: number; refresh_token: string }) {
    return this.authService.refresh(body.userId, body.refresh_token);
    }

  @Post('logout')
    async logout(@Body() body: { userId: number }) {
    return this.authService.logout(body.userId);
    }

}