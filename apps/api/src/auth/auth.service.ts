import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import * as crypto from 'crypto';
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from '../user/DTO/createUser.dto';
import { LoginUserDto } from './DTO/loginUser.dto';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
    private config: ConfigService
    ) {}
    async register(data: CreateUserDto) {
    return this.userService.createUser(data);
  }
    async validateUser(email: string, password: string) {
    const user = await this.userService.findByEmail(email);
    if (!user) throw new UnauthorizedException('Invalid credentials');

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) throw new UnauthorizedException('Invalid credentials');

    return user;
  }
  private hashToken(token: string) {
    return crypto.createHash('sha256').update(token).digest('hex');
  }
   async login(data: LoginUserDto) {
    const user = await this.validateUser(data.email, data.password);
    const payload = { sub: user.id, email: user.email, role: user.role };

    const accessToken = this.jwtService.sign(payload, {
      secret: this.config.get<string>('JWT_ACCESS_SECRET'),
      expiresIn: this.config.get<string>('JWT_ACCESS_EXPIRY') as any || '15m',
    });
    
    const refreshToken = this.jwtService.sign(payload, {
      secret: this.config.get<string>('JWT_REFRESH_SECRET'),
      expiresIn: this.config.get<string>('JWT_REFRESH_EXPIRY') as any || '7d',
    });
    const hashedRt = this.hashToken(refreshToken);
    await this.userService.update(user.id, {refresh: hashedRt});

    return {
      access_token: accessToken,
      refresh_token: refreshToken,
      user: {
        id: user.id,
        email: user.email,
        role: user.role,
      },
    };
  }    

   async refresh(userId: number, refreshToken: string) {
    const user = await this.userService.getUserById(userId);

    if (!user || !user.refresh) {
      throw new UnauthorizedException('Access denied');
    }

    const hashedProvidedToken = this.hashToken(refreshToken);
    if (hashedProvidedToken !== user.refresh) throw new UnauthorizedException('Invalid refresh token');

    await this.userService.update(user.id, { refresh: null });

    const payload = { sub: user.id, email: user.email, role: user.role };

    const newaccessToken = this.jwtService.sign(payload, {
      secret: this.config.get<string>('JWT_ACCESS_SECRET'),
      expiresIn: this.config.get<string>('JWT_ACCESS_EXPIRY') as any || '15m',
    });

    const newrefreshToken = this.jwtService.sign(payload, {
      secret: this.config.get<string>('JWT_REFRESH_SECRET'),
      expiresIn: this.config.get<string>('JWT_REFRESH_EXPIRY') as any || '7d',
    });

    const hashedRt = this.hashToken(newrefreshToken);
    await this.userService.update(user.id, { refresh: hashedRt });

    return {
      access_token: newaccessToken,
      refresh_token: newrefreshToken,
    };
  }


  async logout(userId: number) {
    await this.userService.update(userId, {refresh: null});
  }
}